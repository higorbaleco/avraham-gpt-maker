# 09 — Qualidade, segurança e operação

Status: especificação para implementação, em 10/10/2026. Nenhum teste autenticado ou ensaio de carga foi executado nesta etapa. As metas abaixo são critérios propostos de aceite, não disponibilidade medida nem compromisso do GPT Maker.

## 1. Responsáveis e evidências

O agente QA mantém cenários, fixtures sanitizadas, testes Vitest/Playwright/MSW e relatório por versão. O agente de segurança revisa isolamento, credenciais, sessões e exclusão. O agente de plataforma implementa ambientes, CI, observabilidade e recuperação. Agentes de dados e integração corrigem as respectivas falhas e fornecem contratos verificáveis. O coordenador resolve dependências e apresenta os gates ao responsável humano pelo produto; aprovação de funcionalidade não substitui evidência técnica.

Cada requisito crítico precisa de ligação requisito → cenário QA → execução → artefato. Evidências incluem commit, ambiente, data, resultados, logs sem dados pessoais e limitações. Não aceitar apenas screenshot, porcentagem de cobertura ou afirmação do próprio implementador. Defeitos de isolamento, credencial exposta, mensagem duplicada e perda de dados bloqueiam piloto. Testes instáveis ficam com responsável e prazo; nunca desabilitar silenciosamente um gate crítico.

## 2. Modelo de proteção implementável

O navegador autentica via Auth.js e chama o BFF Next.js. O BFF valida sessão e associação ativa à organização em cada operação protegida, depois resolve IDs locais para IDs GPT Maker. IDs enviados pelo cliente são seletores, não prova de autorização. O acesso comum ao banco usa repositories com contexto de organização; segredos e filas ficam em tabelas/esquemas sem rota pública. A autorização verifica associação atual, não apenas um papel antigo gravado no token.

Service role fica restrita ao worker e às operações administrativas explicitamente isoladas. Cada job exige `orgId`, conexão e recurso compatíveis, verificados antes do efeito externo. Job sem organização ou com mapeamento divergente vai para quarentena. Um loop global enumera organizações autorizadas e produz jobs separados; nunca processa recursos de organizações diferentes em um mesmo contexto mutável.

Repositories, constraints, transações, views e object storage entram na mesma revisão. Chaves estrangeiras compostas com `org_id` impedem relações cruzadas. Excluir cache compartilhado de respostas privadas; caches explicitamente necessários usam organização, identidade/permissão e recurso na chave. Como não haverá Supabase/Data API, o BFF e o worker são a fronteira de acesso; por isso testes devem chamar endpoints reais e também validar queries/repositories em nível de integração.

RBAC deve implementar a matriz do produto no servidor: leitura não habilita envio, operador não administra segredo, administrador de cliente não ganha acesso à plataforma. MFA é requisito para administração da plataforma; sessões administrativas recebem expiração e reautenticação em ações sensíveis. Revogar membership bloqueia a próxima ação mesmo com JWT ainda válido. Rotas mutáveis verificam origem/CSRF conforme o modelo de cookies adotado. Cookies, tokens e validação de sessão devem seguir o SDK homologado; nenhuma sessão será considerada válida apenas porque foi decodificada.

Credenciais GPT Maker são cifradas em repouso com chave separada do banco, versionadas e recuperadas apenas no processo autorizado. Não usar prefixo `NEXT_PUBLIC_`, logs de headers ou segredo em payload de fila. Registrar acesso/rotação com metadados, não com valor. Integrações HTTP/MCP são catálogo curado no piloto: impedir acesso a loopback, rede privada e metadados de nuvem, inclusive redirects e resolução DNS, quando nossa aplicação fizer requisições. Não assumir que o fornecedor aplique a mesma proteção.

## 3. Catálogo de cenários críticos

P0 bloqueia qualquer piloto; P1 bloqueia a funcionalidade afetada. A matriz será expandida somente onde existir comportamento ou risco distinto.

| ID / prioridade | Execução obrigatória | Resultado verificável |
|---|---|---|
| QA-001 / P0 | Usuário A consulta/altera agente, chat, arquivo e exportação de B trocando IDs, query e body | BFF nega; zero chamada ao fornecedor e zero linha alterada |
| QA-002 / P0 | Acessar endpoints e repositories como usuário A e usuário B; incluir views/transações/object storage | Tenant guards e constraints impedem acesso cruzado, inclusive insert/update de `org_id` |
| QA-003 / P0 | Remover membership, rebaixar papel, reutilizar sessão e modificar metadata | Próxima ação sensível é negada; auditoria identifica ator |
| QA-004 / P0 | Job com org ausente, org trocada, conexão removida ou recurso de outro workspace | Worker recusa antes do efeito; quarentena sem segredo |
| QA-005 / P0 | Varrer bundle, sourcemap publicado, HAR e logs do teste | Nenhum token GPT Maker/senha de banco/chave de cifra exposto |
| QA-006 / P0 | Dois operadores assumem simultaneamente; terceiro devolve à IA durante confirmação | Controle otimista/lock local produz um vencedor; UI aguarda estado confirmado |
| QA-007 / P0 | Provedor aceita mensagem e conexão cai antes da resposta; reiniciar worker | Tentativa vira `outcome_unknown`; nenhuma repetição automática do POST |
| QA-008 / P0 | Duplo clique, repetição do cliente e reentrega do job | Chave local de comando reaproveita tentativa; não cria dois efeitos conhecidos |
| QA-009 / P0 | Webhook forjado indicando transferência, entrega ou treinamento concluído | Só dispara releitura autenticada limitada; não altera verdade confirmada |
| QA-010 / P1 | Replay, ordem invertida, callback duplicado e evento sem ID | Deduplicação/coalescência e reconciliação; estado não regride por evento antigo |
| QA-011 / P1 | 429, 5xx, timeout, corpo inválido, HTML e mudança de schema | Erro tipado, backoff limitado nas operações seguras e dados marcados desatualizados |
| QA-012 / P1 | TEXT/WEBSITE/VIDEO/DOCUMENT aceitos, rejeitados, lentos e sem callback | Tipo explícito; aceite do POST não é conclusão; status pendente recuperável |
| QA-013 / P1 | Documento inacessível, URL vencida, MIME falso, arquivo excessivo e callback tardio | Validação/quarentena; erro acionável e correlação com versão correta |
| QA-014 / P1 | Paginação com duplicata, alteração entre páginas e exclusão no fornecedor | Sem duplicar métricas; watermark/snapshot e exclusão reconciliados |
| QA-015 / P1 | Desligar worker após efeito remoto e antes do commit local | Reconciliação precede eventual nova ação; nenhuma suposição de exactly-once |
| QA-016 / P0 | Rotacionar token e chave de cifra; simular segredo revogado | Nova versão funciona, antiga é revogada e payloads antigos não carregam segredo |
| QA-017 / P0 | Restaurar banco e objetos em ambiente isolado | Mapeamentos íntegros, acesso isolado e jobs externos pausados |
| QA-018 / P1 | Excluir organização e depois executar callback/job antigo | Tombstone impede recriação; objetos e dados cobertos são removidos |
| QA-019 / P1 | Teclado, leitor de tela, contraste, zoom e conexão lenta no inbox | Foco preservado, estado anunciado e envio acessível sem depender de cor |
| QA-020 / P1 | Alterar atendimento diretamente no GPT Maker | Divergência detectada; operador vê atualização antes de nova ação conflitante |
| QA-021 / P1 | Mudança de dia/fuso, período sem dados e fornecedor indisponível | Totais consistentes; erro não vira zero; consumo estimado identificado |
| QA-022 / P0 | Promover release N+1 e voltar web/worker a N com schema expandido | Versão anterior funciona; nenhuma migration destrutiva automática |

O retorno de envio documentado contém apenas `success`, sem ID de mensagem garantido; igualdade de texto/horário não comprova unicidade. Se reconciliação não resolver `outcome_unknown`, mostrar resultado incerto e permitir decisão explícita auditada do operador, com aviso de possível duplicação. Idempotência local não garante idempotência remota.

Para handoff, usar versão/estado por conversa e lease local limitado; não manter transação SQL aberta durante chamada HTTP. Após resposta ambígua, manter operação pendente e bloquear comandos conflitantes até reconciliar. Controle local não impede mudanças no painel do fornecedor.

Para conhecimento, callback não autenticado também é hint. Correlacionar tentativa por token opaco e recurso previamente mapeado, sem confiar no tenant recebido. Homologar quais estados podem ser relidos; se a API não permitir confirmar conclusão, exibir “aguardando verificação” e registrar dependência, sem inventar estado de sucesso. Os quatro tipos estão documentados, mas não há comprovação de limites e tempos nesta especificação. [Criação de treinamento](https://developer.gptmaker.ai/api-reference/agents/create-training).

## 4. Automação e homologação

Vitest cobre regras de permissão, máquinas de estado, datas e métricas. MSW simula rede e respostas adversas para o adaptador; testes SQL/repository executam constraints, transações e isolamento em Postgres real. Playwright cobre login, troca de organização, criação de agente, conhecimento, inbox, handoff e erro de envio. Usar fixtures pequenas e determinísticas, incluindo duas organizações e usuários com papéis diferentes. Evitar snapshots enormes de HTML e testes que apenas repetem implementação.

Manter OpenAPI original versionado e ajustes separados. Contratos locais validam variantes discriminadas, parâmetros corretos e respostas reais sanitizadas. Operações MCP mutáveis documentadas como GET nunca recebem prefetch/cache/retry genérico. Novos campos toleráveis não quebram leitura, mas campos obrigatórios inválidos entram em erro de contrato observável.

Homologação autenticada usa workspace exclusivo, contas controladas e mensagens de teste previamente autorizadas. Coleta payload real, paginação, identidade do operador, limites e comportamento de erro; CI comum não envia mensagens reais nem consome recursos GPT Maker. Cada canal tem gate próprio. Mock verde não significa integração homologada.

## 5. Ambientes, CI e releases

Dev usa dados sintéticos e PostgreSQL local. Staging usa banco, credenciais, bucket privado e workspace GPT Maker separados; produção tem seus próprios recursos. Previews não recebem dados/segredos de produção. Railway é referência inicial para containers web, worker e Postgres; disponibilidade, região, conexões do banco e custos precisam ser conferidos antes da contratação.

GitHub privado com pnpm monorepo: cada PR roda instalação pelo lockfile, lint, tipos, testes, migrations em banco vazio e atualização de versão anterior, isolamento por organização, build e smoke Playwright. Examinar dependências e segredos adicionados; falha crítica bloqueia merge. Jobs de forks não recebem credenciais. CI gera imagem imutável identificada pelo commit e evidências, sem editar produção durante teste.

Promover o mesmo artefato dev→staging→produção, variando configuração. Release aditiva: expandir schema compatível, implantar worker/web compatíveis, migrar dados com checkpoints, observar e só remover estruturas em versão posterior. Feature flags por organização liberam piloto. Rollback retorna imagem/flag; nunca executar automaticamente SQL destrutivo inverso. Congelar fila de mutações quando a versão antiga não puder interpretar jobs novos; versionar payloads e registrar matriz de compatibilidade.

Gate de produção: cenários P0 aprovados, P1 do escopo aprovados, contrato homologado, restauração comprovada, alarmes exercitados e responsável de plantão identificado. Não afirmar conformidade legal ou acessibilidade integral com base nesse gate.

## 6. Observabilidade e metas iniciais

Logs estruturados incluem trace, comando, tentativa, job, organização e código de erro; excluir mensagem, documento, token e URL assinada. Métricas agregadas evitam cardinalidade por chat. Auditoria separada registra alterações administrativas, acesso a credencial, handoff e decisão de reenvio. Capturas de browser e traces de teste recebem retenção e acesso restritos.

| Indicador | Alvo proposto | Medição / reação |
|---|---|---|
| Disponibilidade interna | 99,5% mensal | Probes de autenticação/leitura controlada; dependência externa reportada separadamente |
| Leitura local BFF | p95 < 500 ms | Em carga de referência, excluindo upload e chamadas externas |
| Confirmação local de comando | p95 < 1 s | Persistir intenção, sem afirmar sucesso remoto |
| Fila em operação normal | p95 < 30 s de espera | Alertar oldest-job > 2 min por 5 min |
| Atualização do inbox | p95 < 10 s após evento observado | Medir também tempo total quando timestamp confiável existir |
| Recuperação | RPO ≤ 24 h; RTO ≤ 4 h | Alvos sujeitos ao backup contratado e ao ensaio completo |

Carga inicial de referência: 20 organizações, 50 operadores simultâneos, 100 mil mensagens sintéticas armazenadas, 10 comandos/s por 15 minutos e rajada de 30 eventos/s por 60 segundos. É envelope para dimensionamento, não previsão comercial; simular fornecedor para carga e só testar limites reais com autorização. Medir justiça entre organizações, conexões Postgres e queries por `organization_id`. Alertar crescimento de `outcome_unknown`, erros de autenticação, queda do worker, drift de contratos e jobs em quarentena; calibrar taxas após baseline.

## 7. Runbooks obrigatórios

**Provedor indisponível:** confirmar alcance; pausar mutações afetadas e mostrar último dado confirmado; abrir incidente; aplicar backoff apenas a consultas/operações seguras; preservar intenções. Na volta, reconciliar antes de liberar mutações; revisar tentativas incertas sem replay indiscriminado.

**Fila parada/crescendo:** verificar heartbeat, banco, locks e taxa por organização; reduzir concorrência quando houver saturação; isolar job defeituoso; reiniciar worker; reconciliar efeitos ambíguos antes de redrive. Registrar IDs reprocessados e motivo. Não esvaziar tabelas da fila para “destravar”.

**Credencial vazada:** desabilitar conexão, revogar no emissor, rotacionar, investigar logs e escopo dos workspaces, preservar evidência sanitizada e revisar operações no período. O responsável humano avalia comunicação e obrigações aplicáveis; restaurar somente após teste da nova chave e correção da origem.

**Restauração:** restaurar para ambiente isolado com egress/worker pausados; conferir checksum/amostra de objetos, permissões, mapeamentos e exclusões pendentes; executar QA-001/002; reconciliar estado remoto; decidir corte e só então habilitar jobs. Backups do banco não restauram automaticamente arquivos do object storage: manter inventário e cópia próprios dos objetos conforme política contratada.

## 8. Retenção, exclusão e custos

Proposta inicial sujeita a decisão comercial e jurídica: logs operacionais 30 dias; eventos brutos sanitizados 7 dias; auditoria 180 dias; mensagens espelhadas 90 dias, configuráveis por organização. Segredos nunca entram nessas classes. Arquivos de origem são privados e possuem política independente; expiração da URL de entrega deve cobrir janela de ingestão homologada, com margem limitada. Backups têm prazo explícito e restrição de acesso; exclusão lógica não apaga retroativamente backup.

Workflow de exclusão: suspender acesso/jobs, inventariar dados e recursos, confirmar escopo, excluir local/Storage e solicitar exclusão suportada ao fornecedor, registrar resultado parcial e dependências. Tombstones mínimos impedem reimportação por evento atrasado. Após restore, reaplicar ledger de exclusão antes de reabrir serviço. Apagar histórico local não equivale a apagar mensagem entregue no canal. Recursos sem API de exclusão exigem procedimento assistido verificável.

Orçar separadamente: GPT Maker/créditos; canais; web/worker; banco/Auth; Storage e egress; backups; logs/erros; CI; domínio/e-mail; suporte e manutenção. Acompanhar custo mensal por organização por rateio identificado, volume armazenado e consumo reportado. Não atribuir custo exato por mensagem a partir de créditos agregados. Definir limites e alertas internos após piloto, sem inventar preços, cotas do fornecedor ou economia garantida.
