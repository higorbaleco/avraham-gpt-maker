# Agentes, responsabilidades e skills

Versão 1.0, 10/10/2026. Este documento descreve a organização do trabalho para executar o produto. “Agente” aqui significa responsável técnico lógico, que pode ser uma pessoa, um Codex agent, uma dupla ou um papel temporário no time. Não exige criar um sistema multiagente dentro do produto.

## Regra de coordenação

Um coordenador mantém o plano, revisa conflitos e integra entregas. Agentes trabalham em paralelo somente quando os arquivos e decisões forem independentes. Todo agente deve saber que não está sozinho no repositório, não deve reverter alterações de outro agente e deve adaptar sua implementação ao estado atual do código.

Máximo recomendado de execução simultânea: coordenador + 2 ou 3 agentes. O restante entra por ondas. Lockfile, migrações, contratos compartilhados e design tokens têm dono único por etapa.

Toda tarefa deve declarar:

- objetivo;
- arquivos ou módulos sob responsabilidade;
- requisitos FR/NFR/UI/QA relacionados;
- critérios de aceite;
- riscos ou dependências;
- evidência esperada no PR.

## Agentes

### A00 — Coordenador técnico/produto

Responsabilidade: manter coerência da entrega, priorização, roadmap, ADRs, gates e integração de PRs. Decide escopo do incremento, evita troca de stack por preferência e valida que cada PR avança a jornada P0.

Entradas: este pacote de especificação, análise GPT Maker, matriz de API, decisões comerciais do usuário.

Entregas:

- backlog e issues;
- revisão de PRs críticos;
- ADRs;
- release notes internas;
- matriz de rastreabilidade.

Critérios de aceite:

- nenhum requisito P0 fica sem owner;
- nenhuma capability real é liberada sem evidência;
- roadmap reflete estado real, não desejo;
- pendências comerciais ficam visíveis e não bloqueiam código que pode avançar com mock.

Skills úteis: arquitetura de sistema, review de produto, escrita técnica, gestão de backlog. Skills locais opcionais: `design:design-system` para preservar consistência visual; `design:ux-copy` para microcopy; `design:accessibility-review` na revisão de telas.

### A01 — Produto e requisitos

Responsabilidade: transformar objetivos em requisitos, cenários de aceite e prioridades. Mantém `02-REQUISITOS.md`, perguntas abertas e critérios de piloto.

Arquivos/módulos: `docs/product/*`, issues funcionais, textos de aceite, matriz papel/ação.

Execução:

1. Revisar FR/NFR e confirmar P0/P1/P2.
2. Quebrar requisitos em issues implementáveis.
3. Escrever casos `Dado/Quando/Então`.
4. Revisar UI para não prometer função fora do contrato.
5. Atualizar pendências com decisões do usuário.

Aceite:

- cada issue P0 cita FR e UI;
- permissões de papel são testáveis;
- fora de escopo continua fora de escopo;
- termos visíveis usam pt-BR consistente.

### A02 — UX, design system e conteúdo

Responsabilidade: fluxos, telas, estados, tokens, componentes e microcopy. Mantém `03-TELAS-E-DESIGN.md` e os specs do pacote UI.

Arquivos/módulos: `apps/web/src/app/app/[orgSlug]/*`, `packages/ui/*`, `apps/web/src/messages/pt-BR/*`, stories/fixtures visuais.

Execução:

1. Criar wireframes P0 desktop/mobile.
2. Definir componentes com loading, empty, error, stale, pending e conflict.
3. Validar teclado, foco, contraste e zoom.
4. Escrever microcopy de erros e estados.
5. Revisar implementação visual com screenshots.

Aceite:

- UI P0 atende sem dados falsos;
- nenhum botão demonstrativo parece funcional;
- português não quebra layouts;
- mobile consegue executar atendimento P0;
- componentes não dependem só de cor.

Skills úteis: `design:design-system`, `design:ux-copy`, `design:accessibility-review`. O skill de taste premium não é prioridade aqui porque o produto é dashboard operacional; a regra de design deve privilegiar densidade, clareza e repetição diária.

### A03 — Frontend web

Responsabilidade: implementar rotas, componentes, formulários, tabelas, query keys, polling, estados assíncronos e proteção visual. Não implementa autorização como única camada; servidor repete tudo.

Arquivos/módulos:

- `apps/web/src/app/(auth)/*`;
- `apps/web/src/app/app/[orgSlug]/*`;
- `apps/web/src/features/*`;
- `packages/ui/*`;
- `packages/contracts/*` em conjunto com A04.

Execução:

1. Bootstrap Next, Tailwind, shadcn/ui, Auth.js e layout autenticado.
2. Criar shell da aplicação e rotas P0.
3. Implementar data fetching com chaves contendo organização e recurso.
4. Implementar formulários com Zod compartilhado.
5. Integrar estados de operação e polling.
6. Criar testes Playwright das jornadas P0 com fixtures MSW/ambiente staging.

Aceite:

- build e typecheck passam;
- troca de organização limpa cache e assinaturas;
- tela sem permissão não vaza nome de recurso;
- duplo clique não cria duas operações visuais;
- bundle não contém segredo.

### A04 — Backend BFF e domínio

Responsabilidade: Route Handlers, services, authorization guards, schemas, erros, operações, auditoria e RPCs. É dono do contrato entre UI e worker.

Arquivos/módulos:

- `apps/web/src/app/api/app/*`;
- `packages/domain/*`;
- `packages/contracts/*`;
- `packages/data/*` junto de A06;
- `db/migrations/*` somente por coordenação com A06.

Execução:

1. Implementar `OrganizationContext`.
2. Implementar guards por papel e recurso.
3. Criar endpoints internos P0.
4. Validar tudo com Zod no servidor.
5. Criar operações/outbox via RPC.
6. Padronizar erros, requestId e auditoria.

Aceite:

- cada endpoint tem teste negativo cross-org;
- nenhum endpoint mutável chama GPT Maker diretamente de forma não persistida;
- `OUTCOME_UNKNOWN` é estado de primeira classe;
- logs não têm segredo ou transcrição integral;
- nenhum endpoint ou query sem `organization_id` permite contornar invariantes.

### A05 — Integração GPT Maker

Responsabilidade: adaptador do fornecedor, mapeamento de OpenAPI, normalização de erros, fixtures reais sanitizadas e homologação de capabilities.

Arquivos/módulos:

- `packages/provider-gptmaker/*`;
- `apps/worker/src/jobs/gptmaker/*`;
- `docs/integration/gptmaker/*`;
- fixtures MSW em `packages/testing/*`.

Execução:

1. Versionar snapshot OpenAPI e lista de divergências.
2. Criar cliente HTTP com timeouts, retry só seguro e redaction.
3. Implementar endpoints P0: agentes, conhecimento TEXT/DOCUMENT condicional, chats, mensagens, contatos, canais, interações e uso.
4. Mapear erros para códigos internos.
5. Capturar respostas reais sanitizadas em staging.
6. Atualizar capability por evidência.

Aceite:

- nenhuma chamada do browser usa GPT Maker;
- bugs documentais ficam isolados no adaptador;
- mutação incerta vira `unknown`;
- fixture real cobre sucesso, validação, 401/403, 429, 5xx e corpo inválido;
- operações MCP GET mutáveis não sofrem prefetch/retry.

### A06 — Dados, Auth e isolamento

Responsabilidade: schema, migrações, constraints, transações, object storage, Auth.js, Drizzle e políticas de retenção inicial.

Arquivos/módulos:

- `db/migrations/*`;
- `db/seed.sql`;
- `packages/data/*`;
- `apps/web/src/lib/auth/*`;
- `apps/web/src/lib/db/*`;
- `docs/data/*`.

Execução:

1. Criar tabelas P0 com FKs compostas por organização.
2. Escrever constraints, índices, helpers transacionais e guards de tenant.
3. Criar seeds sintéticos de duas organizações.
4. Configurar buckets privados e paths por organização.
5. Gerar tipos de banco.
6. Escrever testes SQL de isolamento.

Aceite:

- QA-001/002 passam em Postgres real;
- segredo de banco/admin não aparece no client;
- usuário com sessão antiga perde privilégio após revogação;
- storage cross-org é negado;
- migration sobe banco vazio e atualiza versão anterior.

### A07 — Worker, jobs e sincronização

Responsabilidade: pg-boss, dispatcher, processamento de outbox, reconciliação, webhooks, backfill, schedules e budgets de chamada.

Arquivos/módulos:

- `apps/worker/*`;
- `packages/jobs/*`;
- `apps/web/src/app/api/webhooks/*`;
- `packages/domain/src/operations/*`.

Execução:

1. Configurar pg-boss com conexão compatível.
2. Implementar dispatcher outbox → job.
3. Implementar claim idempotente de operação.
4. Criar jobs de sync para agentes, chats, mensagens, interações, uso e canais.
5. Implementar recepção de webhook como hint persistido.
6. Implementar reconciliação de `OUTCOME_UNKNOWN`.

Aceite:

- queda após efeito remoto não gera repetição cega;
- job sem organização vai para quarentena;
- webhook forjado não muda estado confiável;
- fila parada gera métrica/alerta;
- payload de job não carrega token nem texto completo desnecessário.

### A08 — QA e automação

Responsabilidade: estratégia de teste, fixtures, suíte Vitest/MSW/Playwright/axe, relatório de release e gates.

Arquivos/módulos:

- `packages/testing/*`;
- `apps/web/tests/*`;
- `apps/worker/tests/*`;
- `docs/qa/*`;
- CI checks.

Execução:

1. Criar matriz FR/UI/QA.
2. Implementar fixtures de duas organizações e múltiplos papéis.
3. Cobrir cenários QA-001 a QA-022 conforme prioridade.
4. Criar Playwright da jornada P0.
5. Validar acessibilidade básica e regressões visuais.
6. Produzir relatório antes do piloto.

Aceite:

- P0 falhando bloqueia release;
- testes de isolamento rodam em CI;
- mocks não substituem homologação real;
- flakiness tem owner e causa;
- screenshots usam dados sintéticos.

### A09 — Segurança e privacidade

Responsabilidade: threat model, revisão de credenciais, logs, SSRF, acesso excepcional, retenção, exclusão e resposta a incidente.

Arquivos/módulos: `docs/security/*`, revisão de `packages/provider-gptmaker`, `packages/data`, `apps/worker`, `apps/web/src/app/api/*`.

Execução:

1. Revisar fronteiras de confiança.
2. Validar segredos, env vars e redaction.
3. Testar SSRF em integrações HTTP/MCP.
4. Revisar acesso `/ops`.
5. Definir runbooks de vazamento/exclusão.
6. Aprovar gate de segurança P0.

Aceite:

- token GPT Maker não aparece no cliente, log ou Sentry;
- suporte excepcional exige escopo, justificativa e expiração;
- exclusão assistida não promete apagar mensagens entregues sem evidência;
- dependências críticas são revisadas.

### A10 — DevOps e plataforma

Responsabilidade: repositório, CI, Docker, ambientes, secrets, Railway/PostgreSQL, observabilidade, backup e release.

Arquivos/módulos:

- `.github/workflows/*`;
- `Dockerfile`;
- `railway.json` ou configs equivalentes;
- `docs/operations/*`;
- scripts de release.

Execução:

1. Criar repo privado quando autorizado pelo usuário.
2. Configurar pnpm, CI, checks e CODEOWNERS.
3. Criar Docker web/worker.
4. Preparar ambientes local/staging/prod.
5. Configurar secrets sem expor valores.
6. Exercitar backup/restore em staging.

Aceite:

- CI instala por lockfile;
- preview não recebe segredo de produção;
- web e worker rodam o mesmo commit;
- rollback de imagem/flag documentado;
- backup restore executado antes do piloto real.

## Skills e competências por etapa

| Etapa | Skills/competências necessárias | Observação |
|---|---|---|
| Produto | requisitos, escopo, escrita de aceite | Pode usar requirements analyst; manter FR como fonte |
| Design | design system, UX copy, acessibilidade | Aplicar `design:design-system` e revisar com `accessibility-review` |
| Frontend | Next.js, React, TypeScript, Tailwind, shadcn/ui, TanStack | Foco em telas operacionais, não landing page |
| Backend | Next Route Handlers, Zod, Auth.js, Drizzle, Postgres, tenant guards | BFF é fronteira de autorização |
| Integração | HTTP, OpenAPI, retries, idempotência, MSW | Isolar divergências GPT Maker |
| Worker | Node, pg-boss, jobs, reconciliação | Não executar efeito externo em request curta |
| QA | Vitest, Playwright, axe, testes SQL | Provar isolamento e falhas adversas |
| Segurança | secrets, SSRF, RBAC, auditoria, retenção | Revisar desde o início |
| DevOps | GitHub Actions, Docker, Railway, PostgreSQL, object storage | Separar ambiente e promover artefatos |

## Sequência recomendada de execução

1. A00 abre milestone `M0-bootstrap`.
2. A10 cria repositório/CI quando autorizado.
3. A06 cria schema mínimo, Auth.js e seeds.
4. A04 cria contratos e BFF de leitura local.
5. A03 cria shell, login e troca de organização.
6. A05 cria adaptador com mock e contrato para listar agentes.
7. A07 liga outbox/worker em ambiente local.
8. A08 implementa gates P0 iniciais.
9. A02 revisa telas implementadas e acessibilidade.
10. A09 revisa segredos e isolamento antes de staging.

Depois, cada vertical segue o padrão: contrato → dados → BFF → UI → worker/adaptador → QA → capability.

## Prompt base para agentes de implementação

```text
Você está trabalhando no repositório avraham-ai-platform. Leia outputs/spec-gptmaker/README.md e os documentos relacionados ao seu módulo antes de editar. Você não está sozinho no código: não reverta alterações de outros agentes e mantenha seu escopo nos arquivos indicados.

Sua tarefa: <objetivo concreto>.
Arquivos sob sua responsabilidade: <lista>.
Requisitos: <FR/UI/NFR/QA>.
Critérios de aceite: <lista>.

Preserve TypeScript strict, rotas de código em inglês, UI pt-BR, validação server-side e isolamento por organização. Não chame GPT Maker do browser. Não libere capability sem evidência. Rode os testes adequados e relate o que não pôde ser executado.
```
