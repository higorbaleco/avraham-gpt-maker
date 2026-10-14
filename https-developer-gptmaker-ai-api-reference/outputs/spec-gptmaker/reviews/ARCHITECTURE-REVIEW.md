# Revisão independente da arquitetura

Data: 10/10/2026. Escopo: avaliação documental, sem provisionamento nem testes autenticados. Foram revisados `outputs/ANALISE-GPTMAKER.md`, as 72 operações de `work/openapi.json` e fontes oficiais. Atualizado para a decisão posterior do usuário: **não usar Supabase**; usar chave API GPT Maker no backend, PostgreSQL gerenciado, Auth.js e Drizzle. As escolhas abaixo são recomendações de projeto, não garantias dos fornecedores.

## Decisão

**Aprovar TypeScript strict, Next.js App Router como web/BFF modular e worker Node persistente, em monorepo pnpm**, com PostgreSQL gerenciado, Auth.js, Drizzle e object storage privado quando necessário. Drizzle/SQL governam schema, migrations e transações; o BFF valida sessão e organização antes de qualquer query. O worker concentra pg-boss, sincronização e efeitos externos. Hospedagem de referência: serviços Docker independentes no Railway com Postgres privado, sujeitos à homologação de região, conectividade e recuperação.

A razão para Next é manter interface, sessão e endpoints do produto no mesmo deploy inicial. SEO não é justificativa para um painel autenticado. Serviços de domínio devem permanecer em packages independentes do framework; Route Handlers apenas traduzem HTTP. Jobs não podem depender da duração de uma requisição. A documentação confirma o padrão BFF, mas não o apresenta como substituto universal de backend. [Next BFF](https://nextjs.org/docs/app/guides/backend-for-frontend).

| Alternativa | Benefício | Custo neste contexto / gatilho de revisão |
|---|---|---|
| Next + worker | Uma linguagem, sessão e web/BFF juntos; poucos deploys | Disciplina de cache e fronteiras server/client; recomendado |
| Vite + Fastify + worker | SPA simples e backend HTTP explícito | Mais montagem de sessão, roteamento e deploy; primeira alternativa se SSR/RSC trouxer complexidade sem benefício |
| React/Next + Nest separado | Convenções de módulos e injeção; API com evolução própria | Serviço adicional e mais contratos; adotar quando múltiplos clientes e equipe backend independente justificarem |
| Laravel + frontend | Ecossistema integrado para filas e aplicação transacional | Duas linguagens se React/TS; vantajoso com equipe PHP experiente, competência não informada |

Esta comparação é julgamento arquitetural a partir das funções dos frameworks, não benchmark. [Vite](https://vite.dev/guide/), [Fastify](https://fastify.dev/docs/latest/), [Nest](https://docs.nestjs.com/), [Laravel queues](https://laravel.com/docs/queues).

## Condições obrigatórias antes do piloto

### P0 — Integridade entre comando e fila

Não existe transação automática compartilhada entre chamadas HTTP e `pg-boss`. O BFF deve executar uma transação PostgreSQL que autoriza a operação, cria o comando local e grava uma outbox. O dispatcher entrega a outbox ao pg-boss. Se publicação e marcação ocorrerem separadamente, uma queda poderá republicar; chave única e handler idempotente devem absorver isso. Alternativamente, o dispatcher usa integração transacional documentada do pg-boss via conexão SQL. Não chamar API externa dentro da transação.

Separar três identificadores: comando idempotente do cliente, tentativa de execução e identidade do recurso no fornecedor. A mesma chave com payload diferente retorna conflito. A fila controla concorrência; não torna exatamente-uma-vez o efeito HTTP remoto. O pg-boss oferece filas sobre Postgres, retries e criação de jobs em transações existentes. [Repositório oficial](https://github.com/timgit/pg-boss).

### P0 — Isolamento real de organizações

Toda entidade de negócio possui `organization_id`; referências entre entidades locais usam FKs compostas incluindo a organização. Índices seguem os filtros por organização e paginação. Tenant guards no BFF/repository verificam associação ativa e ação permitida em cada operação; papel vindo de cookie/JWT sem consulta atual ao banco não autoriza nada. Membership não pode ser autoelevada por UPDATE genérico.

O BFF cria contexto por requisição e usa repositories parametrizados por organização. Não usar cliente global mutável nem conexão administrativa nas rotas comuns. Escritas que exigem auditoria, outbox ou invariantes passam por helper transacional restrito. Views não podem abrir acesso indireto. Como não há Data API pública, o risco principal é query sem `organization_id`, cache mal chaveado ou worker privilegiado sem contexto.

O worker privilegiado precisa de repositórios que exijam contexto de organização, SQL parametrizado e validação da relação job→comando→recurso→workspace. Segredos e schema da fila não têm rota pública. IDs remotos recebidos do navegador nunca selecionam diretamente recursos GPT Maker. Validar isolamento com duas organizações e tentativas negativas em REST, repositories, object storage, jobs e eventos.

### P0 — Timeout não equivale a falha de envio

Comandos com efeitos externos devem distinguir `queued`, `running`, `confirmed`, `failed` e `unknown`. Um timeout após POST pode significar envio aceito. Sem idempotência documentada do GPT Maker, não fazer retry automático de mensagens ambíguas; reconciliar com histórico e evidência disponível. Se não houver identificação suficiente, exigir resolução operacional explícita, sem deduzir sucesso pelo texto repetido.

## Compatibilidade operacional

Pg-boss usará conexão SQL própria por conexão direta ou pool compatível. Não pressupor transaction pooling adequado a recursos de sessão. Definir orçamento de conexões somando réplicas e processos; observar saturação antes de ampliar concorrência. Railway Postgres é privado por padrão dentro do projeto, o que reduz exposição quando web/worker e banco ficam no mesmo ambiente. [Railway Postgres](https://docs.railway.com/databases/postgresql).

Separar usuário de migração, usuário de execução de fila e acessos de domínio. A instalação/migração do schema pg-boss deve ocorrer em etapa controlada, não simultaneamente em todas as réplicas. Validar a combinação exata Node/Postgres/pg-boss e registrar no lockfile e imagens; não escolher patches por memória. Requisitos mínimos atuais no README não são política de suporte do produto.

Os containers Next e worker compartilham commit e contratos, mas escalam separadamente. Configurar health/readiness, encerramento gracioso, limites de memória e segredos por serviço. O Railway documenta build por Dockerfile; compatibilidade de rede/região e custo precisam de prova no ambiente escolhido. [Dockerfiles Railway](https://docs.railway.com/builds/dockerfiles).

Dados autenticados não entram em cache público. Respostas operacionais adotam `private, no-store`; cache cliente inclui organização e filtros na chave e é limpo ao trocar organização/sair. Antes de múltiplas réplicas Next, validar chaves de deployment e consistência de caches realmente utilizados. Cache persistente distribuído só entra mediante necessidade medida. [Self-hosting Next](https://nextjs.org/docs/app/guides/self-hosting).

## Atualização e crescimento

Polling inicial consulta snapshots locais, não multiplica chamadas GPT Maker por aba aberta. Página visível atualiza segundo orçamento definido; erro produz backoff e estado desatualizado. A sincronização central limita concorrência por credencial/workspace. Jobs volumosos não podem monopolizar a fila de atendimento.

Atualização posterior pode usar WebSocket/SSE privado, apenas com tipo e identificadores opacos necessários para invalidar queries. Autorização de tópicos usa membership; clientes não publicam eventos operacionais. WebSocket/SSE não substitui autorização do BFF nem leitura após reconexão. Testar revogação de membro durante conexão ativa. Manter polling de recuperação.

Para 10× crescimento, medir idade da fila, atraso de sincronização, conexões, latência SQL e limites remotos. A primeira expansão é aumentar workers dentro desses limites e reduzir leituras redundantes. Separar banco de fila ou serviço HTTP somente com evidência; migração preserva contratos internos.

## Ambiguidades GPT Maker e gates de liberação

O OpenAPI contém divergências em nomes de parâmetros de transferência/MCP, formatos de listagem e exportação; também há GETs MCP que alteram estado. Adaptador validado em runtime deve impedir cache/prefetch desses GETs e preservar fixtures sanitizadas. Não liberar cliente gerado automaticamente sem correções rastreáveis. [OpenAPI oficial](https://developer.gptmaker.ai/api-reference/openapi.json).

Webhooks sem assinatura/payload/retry homologados são sinais para releitura autenticada, não autoridade para ações sensíveis. Persistir recibo antes de responder; derivar organização de vínculo local, não do payload. Documentos exigem URL acessível com TTL compatível com ingestão; testar expiração. Provisionamento de workspace, licenciamento e conexão completa por canal permanecem gates comerciais/técnicos.

**Gate de arquitetura:** prova de isolamento completa; comando/outbox recuperado após falha; timeout remoto sem duplicação automática; restore ensaiado; reconciliação após perda de evento; credenciais ausentes de bundles/logs; teste de um fluxo real ponta a ponta. Sem estes resultados, a stack está escolhida, mas a plataforma ainda não está homologada.
