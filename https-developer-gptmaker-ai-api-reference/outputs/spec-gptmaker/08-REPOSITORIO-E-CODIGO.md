# Repositório, código e padrões de implementação

Versão 1.0, 10/10/2026. Este documento define como o repositório deve nascer quando o usuário autorizar a implementação. O código visível, rotas e módulos usam inglês; a interface do cliente usa pt-BR.

## Repositório

Nome proposto: `avraham-ai-platform`. Criar privado na organização GitHub indicada pelo usuário. Não criar remoto nem consumir recurso pago sem autorização explícita.

Monorepo pnpm sem Turborepo inicialmente. O ganho de Turborepo pode vir depois; no bootstrap, simplicidade, CI claro e limites de pacote já bastam.

```txt
avraham-ai-platform/
  apps/
    web/
      src/
        app/
          (auth)/
          app/[orgSlug]/
          api/
        components/
        features/
        lib/
        messages/
      tests/
    worker/
      src/
        jobs/
        schedules/
        main.ts
      tests/
  packages/
    contracts/
      src/
        api/
        schemas/
        operations/
    domain/
      src/
        authz/
        operations/
        agents/
        knowledge/
        inbox/
        reports/
    data/
      src/
        repositories/
        rpc/
        generated/
    provider-gptmaker/
      src/
        client/
        mappers/
        fixtures/
    jobs/
      src/
        queue/
        payloads/
    ui/
      src/
        primitives/
        domain/
        tokens/
    config/
      src/
        env/
        logging/
    testing/
      src/
        fixtures/
        msw/
        playwright/
  db/
    migrations/
    seed.sql
  docs/
    adr/
    integration/
    product/
    qa/
    security/
    operations/
  .github/
    workflows/
  Dockerfile
  package.json
  pnpm-workspace.yaml
  tsconfig.base.json
```

`apps/web` e `apps/worker` são entrypoints. Regras de negócio reutilizáveis vivem em `packages/domain`. O adaptador GPT Maker não deve importar componentes React. A UI não deve importar o adaptador do fornecedor.

## Convenções de linguagem

| Superfície | Idioma |
|---|---|
| Código, nomes de arquivos, rotas, branches, commits | inglês |
| UI, mensagens de erro do produto, labels, emails transacionais iniciais | pt-BR |
| Logs técnicos, erros internos, enum values | inglês |
| Documentação para equipe brasileira | português, com identificadores de código em inglês |

Arquivos React: `kebab-case.tsx` para rotas/componentes específicos; componentes exportados em `PascalCase`. Funções e variáveis em `camelCase`; tipos/interfaces em `PascalCase`; constantes de domínio em `SCREAMING_SNAKE_CASE` somente quando forem constantes reais. SQL em `snake_case`.

Não misturar nomes de fornecedor em todo domínio. Use `ProviderAgent`, `ProviderChat` dentro do adaptador; use `Agent`, `ChatSnapshot`, `KnowledgeSource` no domínio local.

## Estrutura por feature no web

```txt
apps/web/src/features/inbox/
  api.ts
  hooks.ts
  schemas.ts
  components/
    ChatList.tsx
    ConversationTimeline.tsx
    MessageComposer.tsx
  pages/
    InboxPage.tsx
    ChatPage.tsx
```

`api.ts` chama somente endpoints internos do BFF. `hooks.ts` define query keys sempre com `orgSlug/orgId` e recurso. Componentes recebem dados normalizados; não conhecem path GPT Maker. Formulários usam schema compartilhado ou schema local equivalente ao contrato de servidor.

## Route Handlers e services

Route Handler deve ser fino:

1. cria `requestId`;
2. lê sessão;
3. resolve organização;
4. valida input;
5. chama service;
6. serializa `ApiSuccess` ou `ApiError`.

Exemplo conceitual:

```ts
export async function POST(request: Request, context: RouteContext) {
  return withApiContext(request, context, async ({ org, actor, body }) => {
    const input = createAgentSchema.parse(body);
    const operation = await agentService.createAgent({ org, actor, input });
    return accepted(operation);
  });
}
```

Services não retornam respostas HTTP. Eles retornam domínio ou operação. Authorization fica em guards explícitos, não em ifs improvisados dentro de componentes.

## Banco e data access

Usar migrations SQL versionadas com Drizzle. Schemas e tipos vivem em `packages/data/src/schema` e `packages/data/src/generated` quando necessário. Repositories encapsulam queries frequentes e recebem `OrganizationContext` ou `SystemContext`.

Padrão:

```ts
type RepositoryContext =
  | { kind: "user"; organizationId: string; actorId: string; role: OrganizationRole }
  | { kind: "system"; organizationId: string; actor: "WORKER" | "WEBHOOK" };
```

RPCs são obrigatórias para operações que precisam gravar intenção, outbox e auditoria de forma atômica. Não tentar emular transação multi-step no client com chamadas HTTP separadas.

## Operações

Toda mutação externa passa por `operations`:

```ts
type OperationKind =
  | "agent.create"
  | "agent.update"
  | "agent.activate"
  | "knowledge.create"
  | "knowledge.updateText"
  | "knowledge.delete"
  | "chat.claim"
  | "chat.release"
  | "message.sendText"
  | "channel.create"
  | "contact.update";
```

Payloads de operação são versionados:

```ts
type VersionedPayload<TType extends string, TData> = {
  type: TType;
  version: 1;
  data: TData;
};
```

Jobs carregam `operationId`, `organizationId`, `kind` e versão do payload, não o segredo do fornecedor. Worker busca payload autorizado no banco e revalida estado.

## Configuração e secrets

Arquivos:

- `.env.example`: nomes e comentários, sem valores reais;
- `.env.local`: ignorado;
- Railway/PostgreSQL/object storage secrets: gerenciados por ambiente;
- nenhum `NEXT_PUBLIC_` para token, senha de banco, GPT Maker, chave de cifra ou URL assinada.

Variáveis iniciais:

```txt
NEXT_PUBLIC_APP_ORIGIN=
DATABASE_URL=
PGBOSS_DATABASE_URL=
GPTMAKER_API_BASE_URL=https://api.gptmaker.ai
GPTMAKER_API_KEY=
AUTH_SECRET=
AUTH_TRUST_HOST=true
ENCRYPTION_KEY_CURRENT_ID=
ENCRYPTION_KEY_CURRENT=
S3_ENDPOINT=
S3_ACCESS_KEY_ID=
S3_SECRET_ACCESS_KEY=
S3_BUCKET=
SENTRY_DSN=
LOG_LEVEL=info
```

`DATABASE_URL`, `PGBOSS_DATABASE_URL`, `GPTMAKER_API_KEY`, credenciais S3/R2 e chaves de cifra ficam só em processos server/worker. Validar env com Zod no boot e falhar cedo.

## UI e design system

`packages/ui` contém primitivas e componentes de domínio. Primitivas não conhecem GPT Maker nem permissões. Componentes de domínio podem receber capability e estado, mas não executam autorização.

Tokens semânticos:

```ts
export const semanticTokens = {
  color: {
    surfaceCanvas: "var(--surface-canvas)",
    textPrimary: "var(--text-primary)",
    actionPrimary: "var(--action-primary)",
    statusDanger: "var(--status-danger)",
  },
};
```

Não usar cores mágicas em telas. Quando a marca chegar, alterar tokens e validar contraste. Componentes precisam cobrir `loading`, `empty`, `error`, `stale`, `pending`, `unknown` e `conflict` quando aplicável.

## Testes

Pirâmide prática:

- unitários: guards, state machines, datas, mappers, schemas;
- integração: repositories, tenant guards, transações, worker claim;
- contrato: MSW com respostas GPT Maker reais sanitizadas e adversas;
- E2E: login, troca de org, agente, conhecimento, inbox, handoff, envio ambíguo;
- acessibilidade: axe + revisão manual das telas P0.

Comandos planejados:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm test:sql
pnpm test:e2e
pnpm build
```

Não criar testes que apenas confirmam o mock. Teste crítico precisa provar comportamento de risco: cross-org, timeout, duplicação, revogação, webhook forjado.

## CI e release

Workflow mínimo:

1. instalar pelo lockfile;
2. lint;
3. typecheck;
4. unit/integration;
5. migrations em banco vazio;
6. atualização de versão anterior quando existir;
7. testes de isolamento por organização;
8. build web/worker;
9. Playwright smoke;
10. varredura de segredo.

Release:

- imagem imutável por commit;
- migrations aditivas antes do código dependente;
- web e worker do mesmo commit;
- feature flags por organização;
- rollback por imagem/flag;
- jobs versionados para compatibilidade.

## CODEOWNERS proposto

```txt
/db/migrations/              @data-owner @security-owner
/packages/provider-gptmaker/ @integration-owner
/apps/worker/                @jobs-owner
/apps/web/src/app/api/       @backend-owner @security-owner
/packages/ui/                @frontend-owner @design-owner
/apps/web/src/features/      @frontend-owner
/docs/security/              @security-owner
/.github/workflows/          @devops-owner
/Dockerfile                  @devops-owner
```

Substituir handles pelos usuários reais quando o repositório existir.

## Branches e PRs

Branches:

- `main`: sempre verde;
- `feat/<bk-id>-short-name`;
- `fix/<issue-id>-short-name`;
- `docs/<topic>`.

PR deve conter:

- problema e comportamento entregue;
- FR/UI/QA/BK relacionados;
- screenshots quando UI;
- testes rodados;
- riscos ou pendências;
- capabilities alteradas, se houver.

Não aceitar PR que habilita função por UI sem servidor ou que adiciona endpoint sem teste de autorização.

## Estrutura de commits

Formato recomendado:

```txt
feat(inbox): add exclusive chat claim operation
fix(auth): deny stale membership sessions
test(provider): cover send timeout outcome unknown
docs(adr): record polling before broadcast decision
```

Commits não precisam ser perfeitos durante exploração, mas PR deve estar revisável. Evitar commits com segredo, fixtures reais não sanitizadas ou dump bruto de payload.

## Checklist de bootstrap

1. Confirmar nome do repo e organização GitHub.
2. Criar monorepo e lockfile.
3. Fixar Node 24 patch e pnpm.
4. Instalar Next patch estável, React compatível e libs aprovadas.
5. Configurar TypeScript strict.
6. Criar `apps/web` com rota de saúde.
7. Criar `apps/worker` com processo que inicia e desliga limpo.
8. Configurar PostgreSQL local e migrations iniciais.
9. Adicionar seed de duas organizações.
10. Adicionar CI inicial.
11. Criar ADRs.
12. Abrir primeiro PR de vertical Auth/Tenancy.

## Regras que não devem ser quebradas

- GPT Maker token nunca sai do servidor.
- Toda autorização é server-side.
- Nenhum efeito externo sem operação durável.
- Timeout após possível envio não sofre retry cego.
- Capabilities dependem de evidência.
- Dados de organização entram em cache com chave de organização.
- UI não mostra dado mockado como se fosse real.
- P0 de segurança bloqueia piloto.
