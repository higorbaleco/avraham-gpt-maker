# Prompt de execução para iniciar o desenvolvimento

Use este prompt quando quiser transformar a especificação em código. Ele assume que o usuário já autorizou criar ou editar o repositório de implementação.

```text
Vamos implementar o painel próprio sobre GPT Maker conforme o pacote outputs/spec-gptmaker.

Antes de editar, leia:
- outputs/spec-gptmaker/README.md
- outputs/spec-gptmaker/01-STACK-E-DECISOES.md
- outputs/spec-gptmaker/02-REQUISITOS.md
- outputs/spec-gptmaker/04-ARQUITETURA-E-DADOS.md
- outputs/spec-gptmaker/05-CONTRATOS-E-INTEGRACAO.md
- outputs/spec-gptmaker/06-AGENTES-E-SKILLS.md
- outputs/spec-gptmaker/07-ROADMAP-E-BACKLOG.md
- outputs/spec-gptmaker/08-REPOSITORIO-E-CODIGO.md
- outputs/spec-gptmaker/09-QUALIDADE-SEGURANCA-OPERACAO.md

Objetivo do primeiro incremento:
criar o monorepo privado/local avraham-ai-platform com Next.js App Router, TypeScript strict, worker Node, pnpm workspace, contratos base, PostgreSQL local inicial, Auth.js, Drizzle, schema mínimo de organizações/memberships/invitations, isolamento por organização, seeds de duas organizações e CI/checks locais.

Regras técnicas:
- UI em pt-BR; código, rotas, pacotes e enums em inglês.
- Next.js + TypeScript + worker Node separado.
- PostgreSQL gerenciado/local, Auth.js, Drizzle migrations e object storage S3/R2 quando houver documento.
- Toda mutação externa passa por operation + outbox + worker.
- Nenhum token GPT Maker no browser, logs, bundle ou fixtures.
- Toda autorização é server-side, com teste negativo cross-org.
- Capabilities do GPT Maker só liberam recurso com evidência autenticada.
- Timeout de envio ou criação após possível transmissão vira OUTCOME_UNKNOWN, sem retry cego.
- Não criar landing page; construir aplicação operacional.

Primeiras tarefas:
1. Auditar a pasta atual e confirmar se já existe repo/app.
2. Se não existir app, criar estrutura do monorepo de acordo com 08-REPOSITORIO-E-CODIGO.md.
3. Fixar versões exatas compatíveis no bootstrap, sem usar latest em CI.
4. Implementar envelopes de API e tipos de operação.
5. Criar migrations iniciais de organizations, profiles, organization_members e invitations.
6. Implementar constraints, tenant guards e seeds sintéticos com duas organizações.
7. Criar shell autenticado inicial e uma rota de saúde.
8. Adicionar testes de isolamento iniciais e comandos de verificação.
9. Relatar arquivos criados, decisões tomadas, testes executados e pendências.

Não crie recursos pagos, repositório remoto, domínio, deploy ou credencial real sem autorização explícita. Se precisar de rede para instalar dependências, solicite a permissão apropriada e explique que é para bootstrap do projeto.
```

## Primeiro PR esperado

Título sugerido: `Bootstrap platform monorepo and tenant isolation base`

Escopo:

- monorepo pnpm;
- Next app mínimo;
- worker mínimo;
- contracts package;
- migrations PostgreSQL/Drizzle iniciais;
- seeds sintéticos;
- testes de isolamento base;
- CI local ou GitHub Actions se o remoto já existir.

Fora do primeiro PR:

- chamar GPT Maker real;
- canais reais;
- inbox completo;
- UI polida;
- deploy produção;
- billing;
- ferramentas MCP/HTTP.

Critério de pronto: `pnpm lint`, `pnpm typecheck`, `pnpm test` e teste SQL inicial passam no ambiente configurado, ou o relatório explica exatamente o que faltou para executar.
