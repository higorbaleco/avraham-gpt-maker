# Stack e decisões de arquitetura

Versão 1.1 — 10/10/2026. Decisões para desenvolvimento novo. Esta versão remove Supabase da proposta, conforme decisão do usuário: a integração usará a chave API do painel GPT Maker apenas no backend. A pasta auditada contém análise e documentação, sem aplicação, package.json ou stack existente a preservar. Avraham é o nome de trabalho usado no material fornecido; não representa identidade visual aprovada.

## Decisão

Usar **TypeScript em toda a aplicação, Next.js App Router para interface e backend web, PostgreSQL gerenciado, Auth.js, Drizzle e worker Node.js separado para tarefas assíncronas**. Um único repositório privado contém esses componentes.

Isso entrega rapidamente o produto principal — painel autenticado, formulários e atendimento — com uma linguagem e contratos compartilhados. Next.js atende as requisições curtas; sincronização, ingestão e repetição de jobs ficam no worker persistente. A chave GPT Maker fica em segredo do servidor ou em credencial cifrada por organização. As fronteiras são módulos, não uma coleção de microserviços.

Esta é uma decisão de projeto, não uma afirmação de que Next.js é universalmente superior. A documentação oficial descreve Route Handlers como superfície BFF. [Next.js BFF](https://nextjs.org/docs/app/guides/backend-for-frontend).

## Alternativas consideradas

| Opção | Vantagem | Custo neste produto | Decisão |
|---|---|---|---|
| Next.js + worker | Uma linguagem, interface e BFF no mesmo projeto, fronteiras server/client explícitas | Disciplina de cache e tarefas longas | Escolhida |
| React/Vite + Fastify | SPA simples e API independente, separação clara | Dois aplicativos web, sessão e contratos exigem mais montagem | Boa alternativa se API pública/mobile virar prioridade principal |
| Next.js + NestJS + worker | Backend bem estruturado para equipe grande | Camada e deploy adicionais antes de necessidade comprovada | Extrair backend apenas por escala/equipe/consumidores independentes |
| Laravel + React/Inertia | Excelente conjunto de recursos de negócio | Duas linguagens e menor compartilhamento de contratos neste contexto | Preferível se surgir equipe PHP consolidada; não é o cenário informado |
| Frontend direto no GPT Maker | Pouco código inicial | Expõe credencial e enfraquece isolamento/permissões | Rejeitada |
| Construir motor próprio de IA agora | Controle do motor | Recria capacidade que o fornecedor já oferece | Fora do escopo |

## Componentes escolhidos

| Camada | Escolha | Responsabilidade |
|---|---|---|
| Linguagem | TypeScript strict | Web, serviços, jobs, contratos, testes |
| Runtime | Node.js 24 LTS, patch seguro fixado no bootstrap | Web e worker com mesmo runtime |
| Framework | Next.js 16 estável, patch verificado no bootstrap | App Router, renderização inicial e Route Handlers |
| UI | React compatível com Next; Tailwind CSS; shadcn/ui com primitives Radix | Componentes acessíveis e personalização da marca |
| Formulários | React Hook Form + Zod | Validação de entrada e feedback; servidor valida novamente |
| Dados interativos | TanStack Query | Busca, invalidação e polling controlado do inbox |
| Tabelas | TanStack Table | Paginação, seleção e filtros visuais; paginação de dados no servidor |
| Gráficos | Recharts | Indicadores simples com alternativa tabular |
| Ícones | Lucide, uma única família | Ações consistentes; nenhuma dependência estética adicional |
| Banco | PostgreSQL gerenciado, preferencialmente no mesmo provedor do web/worker | Dados do produto, operações, outbox, auditoria, snapshots e fila |
| Acesso a dados | Drizzle + SQL versionado | Schema/migrations tipadas, queries explícitas e transações |
| Identidade | Auth.js com adapter PostgreSQL | Login, convites, sessão e verificação server-side |
| Arquivos | Object storage S3-compatible, como Cloudflare R2 ou bucket do provedor escolhido | Fontes DOCUMENT e anexos com URL temporária |
| Fila | pg-boss | Jobs duráveis, agenda e processamento no worker |
| Atualização da UI | Polling adaptativo no primeiro incremento; Broadcast privado depois | Invalidação após confirmação, sem mandar conteúdo sensível nos eventos |
| Testes | Vitest, MSW, Playwright, axe | Domínio, contratos simulados, integração e jornadas |
| Build | pnpm workspaces | Monorepo sem Turborepo inicialmente |
| CI | GitHub Actions | Instalação reproduzível, checks, builds e evidências |
| Empacotamento | Docker multi-stage | Web e worker independentes a partir do mesmo commit |
| Hospedagem de referência | Railway para web/worker/PostgreSQL; R2/S3 para arquivos quando necessário | Processos persistentes, banco privado e egress controlado |
| Observabilidade | Logs JSON estruturados, Sentry com remoção de PII | Erros, rastreamento e diagnóstico |

A seleção de Next 16 e Node 24 é uma base de compatibilidade, não licença para usar qualquer patch antigo. Na consulta atual Node 24 está em LTS e Node 26 em Current. Congelar versões exatas após verificar advisories, engines e peerDependencies, executar build e testes. Não depender de `latest` em CI. [Node releases](https://nodejs.org/en/about/previous-releases).

PostgreSQL: usar versão oferecida e suportada pelo provedor escolhido, compatível com pg-boss e Drizzle fixados; registrar versão real em ADR. Railway Postgres roda como serviço privado por padrão, o que combina com web/worker no mesmo projeto. Lista de versões finais fica em `docs/engineering/versions.md` no bootstrap.

## Fronteiras deliberadas

- Não usar Supabase. Drizzle será o acesso principal para schema, migrations e queries; SQL direto segue permitido para trechos complexos.
- Não acrescentar Redis: pg-boss usa o PostgreSQL já existente. Monitorar contenção e tamanho da fila; separar banco da fila quando medições justificarem.
- Não construir banco vetorial/RAG paralelo: GPT Maker processa conhecimento. Nosso sistema guarda fonte, referência e estado observado.
- Não usar Vercel como requisito. Next é empacotado em container, com worker separado. Isso mantém o deploy transferível.
- Não criar API pública nem SDK comercial no MVP. O BFF interno é versionado para controle de contratos, não promessa de compatibilidade pública eterna.
- Não incluir OpenAI SDK nem Vercel AI SDK apenas por ser produto de IA. A integração inicial é HTTP com GPT Maker.
- Não montar editor de fluxos genérico no MVP. Regras reais de transferência/inatividade definem a UI possível.
- Não usar framework multiagente dentro do produto para coordenar o desenvolvimento. Os agentes trabalham sobre issues, contratos, arquivos e PRs.

## Repositórios e serviços

**Repositório proposto:** `avraham-ai-platform`, privado, na organização GitHub do usuário. Nome proposto; remoto não foi criado. Não adivinhar conta, organização ou URL. Manter código, migrações, documentação e CI juntos; não criar um repositório por agente.

Ambientes: local com dados sintéticos; staging com PostgreSQL e workspace GPT Maker de homologação; produção com credenciais e banco separados. Railway terá serviços `web`, `worker` e `postgres` por ambiente, ou equivalente escolhido. Selecionar regiões compatíveis e próximas após confirmar disponibilidade e necessidade do cliente. Não pressupor residência de dados no Brasil.

Domínio próprio será configurado quando fornecido. Valores de marca são provisórios. Nenhum recurso pago, repositório remoto ou deploy foi criado nesta entrega.

## Fontes e repositórios oficiais para implementação

| Projeto | Fonte oficial | Uso |
|---|---|---|
| Next.js | https://github.com/vercel/next.js | Framework; consultar docs da versão fixada |
| Auth.js | https://authjs.dev/getting-started/installation?framework=Next.js | Sessão e autenticação no Next |
| Drizzle ORM | https://orm.drizzle.team/docs/migrations | Schema, migrations e queries tipadas |
| pg-boss | https://github.com/timgit/pg-boss | Fila; conferir requisitos e migrations |
| shadcn/ui | https://ui.shadcn.com/docs | Gerar componentes próprios e revisar acessibilidade |
| TanStack Query | https://tanstack.com/query/latest/docs/framework/react/overview | Cache client com chaves por organização |
| Playwright | https://playwright.dev/docs/intro | E2E reproduzível |
| Railway | https://docs.railway.com/guides/deploying-a-monorepo | Dois serviços no monorepo |

São referências e dependências, não bases a clonar integralmente. Evitar boilerplate de terceiros que imponha billing, autenticação ou permissões conflitantes. Registrar licenças e versões das dependências efetivamente usadas.

## ADRs iniciais

| ADR | Decisão | Reavaliar quando |
|---|---|---|
| ADR-001 | Monólito modular Next + worker | Mobile/API independente ou equipes com deploy separado |
| ADR-002 | TypeScript + SQL; UI pt-BR, código inglês | Expansão de idiomas não altera nomes do domínio |
| ADR-003 | PostgreSQL gerenciado sem Supabase | Requisitos contratuais, região ou custo medido |
| ADR-004 | Workspace por empresa, onboarding assistido | API de provisionamento e contrato de parceiro confirmados |
| ADR-005 | Drizzle + SQL explícito | Complexidade de consultas ou necessidade de separar API pública |
| ADR-006 | Outbox transacional + pg-boss | Throughput/isolamento de fila exceder a base medida |
| ADR-007 | Polling inicial, Broadcast como aceleração | Eventos homologados e autorização testada |
| ADR-008 | Billing, CRM e integrações avançadas depois do piloto | Operação principal aceita e contratos disponíveis |

Uma alteração exige motivo, impacto nos contratos/dados, alternativa considerada e prova de migração. Preferência pessoal do próximo agente não é motivo suficiente para trocar a stack.
