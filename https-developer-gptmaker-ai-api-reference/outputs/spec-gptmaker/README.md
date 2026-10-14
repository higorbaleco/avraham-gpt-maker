# Spec do painel próprio sobre GPT Maker

Versão 1.1, 10/10/2026. Este pacote define produto, arquitetura, telas, agentes, roadmap e padrões de implementação para reconstruir um painel visual com marca própria usando GPT Maker como tecnologia por trás. A versão 1.1 remove Supabase da arquitetura: o painel usa a chave API do GPT Maker no backend, com banco PostgreSQL próprio/gerenciado para dados locais.

## Recomendação principal

A stack mais funcional para este caso é **Next.js App Router + TypeScript + PostgreSQL gerenciado + Auth.js + Drizzle + worker Node separado + pg-boss**.

Next cuida do painel e do BFF. O worker cuida de sincronização, webhooks, envio, treinamento e reconciliação. PostgreSQL guarda usuários, organizações, permissões, mapeamentos, operações, auditoria e snapshots. Auth.js gerencia sessão. Drizzle dá schema/migrations tipadas. A chave GPT Maker entra como segredo do servidor ou credencial cadastrada no console `/ops`, nunca no browser.

## Ordem de leitura

| Ordem | Arquivo | Para que serve |
|---:|---|---|
| 1 | [01-STACK-E-DECISOES.md](01-STACK-E-DECISOES.md) | decisão de tecnologia, alternativas e ADRs |
| 2 | [02-REQUISITOS.md](02-REQUISITOS.md) | requisitos, papéis, P0/P1/P2 e critérios de aceite |
| 3 | [03-TELAS-E-DESIGN.md](03-TELAS-E-DESIGN.md) | telas, rotas, estados, tokens e componentes |
| 4 | [04-ARQUITETURA-E-DADOS.md](04-ARQUITETURA-E-DADOS.md) | arquitetura, banco, isolamento por organização, operações, worker e webhooks |
| 5 | [05-CONTRATOS-E-INTEGRACAO.md](05-CONTRATOS-E-INTEGRACAO.md) | APIs internas, contrato do adaptador e capabilities |
| 6 | [06-AGENTES-E-SKILLS.md](06-AGENTES-E-SKILLS.md) | responsabilidades de cada agente e skills |
| 7 | [07-ROADMAP-E-BACKLOG.md](07-ROADMAP-E-BACKLOG.md) | fases, gates e backlog BK-001 a BK-045 |
| 8 | [08-REPOSITORIO-E-CODIGO.md](08-REPOSITORIO-E-CODIGO.md) | estrutura do repo, padrões de código, CI e release |
| 9 | [09-QUALIDADE-SEGURANCA-OPERACAO.md](09-QUALIDADE-SEGURANCA-OPERACAO.md) | QA, segurança, operação, runbooks e custos |
| 10 | [10-CODEX-START.md](10-CODEX-START.md) | prompt para iniciar a implementação |
| 11 | [11-DECISOES-PENDENCIAS-E-RASTREABILIDADE.md](11-DECISOES-PENDENCIAS-E-RASTREABILIDADE.md) | decisões, pendências, riscos e mapa FR/UI/QA |

## Referências incluídas

- [references/API-MATRIX.md](references/API-MATRIX.md): matriz das 72 operações documentadas da API GPT Maker.
- [references/ANALYSIS.md](references/ANALYSIS.md): análise estratégica do que dá para reconstruir no painel próprio.
- [reviews/ARCHITECTURE-REVIEW.md](reviews/ARCHITECTURE-REVIEW.md): revisão crítica de arquitetura.

## Escopo do piloto P0

O piloto deve permitir:

1. autenticar e trocar de organização sem vazamento entre clientes;
2. provisionar/vincular workspace GPT Maker de forma assistida;
3. criar e editar agente;
4. adicionar conhecimento TEXT e DOCUMENT condicional;
5. testar agente em laboratório;
6. listar canal piloto e concluir conexão assistida quando necessário;
7. receber/listar conversa;
8. assumir atendimento humano, responder e devolver à IA;
9. ver dashboard mínimo e auditoria;
10. operar suporte técnico em `/ops`.

Fora do P0: CRM completo, billing próprio, marketplace de ferramentas, automações avançadas, widget próprio completo, app nativo, API pública comercial e criação autônoma garantida de workspace/canal.

## Premissas técnicas

- GPT Maker continua sendo o motor de agentes, conhecimento, canais e mensagens.
- Nossa plataforma controla identidade, organizações, papéis, UX, marca, atribuição, auditoria, snapshots, relatórios e operação.
- Credencial GPT Maker fica somente no backend/worker. Para MVP, pode ser uma única chave em variável de ambiente; para multiempresa, será cadastrada e cifrada por organização no `/ops`.
- Webhooks sem autenticação forte são hints, não fonte de verdade.
- Resposta de envio sem ID confiável pode gerar `OUTCOME_UNKNOWN`; o sistema não reenviará automaticamente.
- Capabilities só liberam UI/endpoint quando houver evidência em staging.

## Pendências antes de produção

Precisam ser decididos ou fornecidos:

- nome, logo e identidade final;
- organização GitHub/repositório;
- banco PostgreSQL gerenciado/Railway ou substituto;
- credencial GPT Maker de homologação;
- workspace e canal piloto;
- confirmação comercial white-label;
- política de retenção/exclusão;
- responsáveis por suporte/incidente;
- volume esperado do piloto.

Essas pendências não bloqueiam o bootstrap técnico, mas bloqueiam piloto real com cliente.

## Próximo incremento recomendado

Começar por `M0` e `M1`:

- criar monorepo;
- configurar Next/TypeScript/pnpm;
- configurar PostgreSQL local;
- criar schema de organizações/memberships/invitations;
- aplicar isolamento por organização com constraints, guards server-side e testes cross-org;
- implementar login e troca de organização;
- provar QA-001/002/003.

Depois disso, seguir para agentes e conhecimento antes de inbox/canal.
