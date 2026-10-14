# Decisões, pendências e rastreabilidade

Versão 1.1, 10/10/2026. Este documento ajuda a navegar o pacote e acompanhar o que está decidido, o que depende do usuário/fornecedor e como cada parte se conecta.

## Decisões tomadas

| ID | Decisão | Motivo | Documento |
|---|---|---|---|
| DEC-001 | Usar Next.js App Router + TypeScript + worker Node separado | entrega rápida com BFF e UI no mesmo stack, mantendo tarefas longas fora da request | 01, 04 |
| DEC-002 | Não usar Supabase; usar PostgreSQL + Auth.js + Drizzle | O usuário já tem a chave API GPT Maker e quer inserir apenas essa integração no nosso backend | 01, 04 |
| DEC-003 | Usar Drizzle no MVP | Sem Supabase, Drizzle entrega schema/migrations tipadas mantendo SQL explícito | 01, 08 |
| DEC-004 | Usar pg-boss para filas | aproveita Postgres e mantém jobs duráveis sem Redis inicial | 01, 04 |
| DEC-005 | Repositório único privado | contratos e tipos compartilhados, menos coordenação inicial | 01, 08 |
| DEC-006 | UI pt-BR e código/rotas em inglês | produto local sem sacrificar padrão técnico | 03, 08 |
| DEC-007 | Polling inicial com snapshots locais | evita depender de webhook/tempo real ainda não homologado | 04, 09 |
| DEC-008 | Capabilities por organização/canal | documentação não equivale a comportamento homologado | 05 |
| DEC-009 | Onboarding assistido para workspace/canal | API pública não prova criação completa de workspace/canal conectado | 02, 03 |
| DEC-010 | Mutação externa sempre assíncrona via operação | evita perder efeito externo em timeout/restart | 04, 05 |

## Pendências para o usuário

| ID | Decisão necessária | Bloqueia |
|---|---|---|
| PEND-001 | Nome final, logotipo e paleta da marca | identidade visual final, domínio e assets |
| PEND-002 | Organização GitHub e nome definitivo do repositório | remoto, CODEOWNERS real e CI remoto |
| PEND-003 | Provedor de hospedagem final ou confirmação Railway/PostgreSQL | deploy staging/prod |
| PEND-004 | Credencial GPT Maker de homologação | capabilities reais e testes autenticados |
| PEND-005 | Workspace GPT Maker de teste/piloto | onboarding real |
| PEND-006 | Canal piloto e número/conta de teste autorizada | G4 atendimento real |
| PEND-007 | Confirmação comercial white-label/licenciamento | comunicação pública e contrato com clientes |
| PEND-008 | Política de retenção, exclusão e suporte | piloto com dados reais |
| PEND-009 | Volume esperado e horário de operação | metas de carga e suporte |
| PEND-010 | Responsáveis humanos por produto, suporte e incidente | go/no-go do piloto |

Essas pendências não impedem criar base técnica, contratos, telas, mocks, isolamento por organização e testes. Elas bloqueiam apenas produção real, piloto com dados reais ou promessas comerciais.

## Pendências com GPT Maker

| ID | Pergunta/homologação | Risco mitigado |
|---|---|---|
| GM-001 | O retorno de criação de training contém ID em conta real? | correlação de fonte e estado READY |
| GM-002 | Callback de training tem assinatura, segredo ou ID confiável? | webhook forjado e estado falso |
| GM-003 | Limites reais de DOCUMENT, WEBSITE e VIDEO | erro de ingestão, timeout e UX incorreta |
| GM-004 | Semântica real de `start-human` e `stop-human` por canal | controle humano inconsistente |
| GM-005 | Canal piloto permite criação, conexão e QR via API? | onboarding assistido vs autônomo |
| GM-006 | Rate limits e Retry-After por endpoint | budgets de sync e backoff |
| GM-007 | IDs de mensagens existem em respostas/listagens de envio? | reconciliação de OUTCOME_UNKNOWN |
| GM-008 | Eventos de webhook trazem IDs, ordem e reentrega documentável? | dedup e reconciliação |
| GM-009 | `maxDailyMessages` é realmente por atendimento/conversa? | rótulo correto na UI |
| GM-010 | Condições comerciais de marca, widget e painel próprio | escopo white-label |

## Rastreabilidade P0

| Fluxo P0 | Requisitos | Telas | Arquitetura/contrato | QA |
|---|---|---|---|---|
| Login e organização | FR-001–003, NFR-001 | UI-01, UI-02, UI-20 | 04 Auth.js/tenant guards, 05 endpoints org/members | QA-001/002/003/005 |
| Onboarding assistido | FR-004–005 | UI-02, UI-22 | 04 mappings, 05 ops | QA-001/004 |
| Agentes | FR-006–008 | UI-07–09 | 05 agents adapter/endpoints | QA-011 |
| Laboratório | FR-009 | UI-10 | 05 test sessions | QA-011 |
| Conhecimento TEXT/DOCUMENT | FR-010–014 | UI-11–12 | 04 arquivos, 05 training | QA-012/013 |
| Inbox | FR-015–016 | UI-04–06 | 04 snapshots, 05 inbox endpoints | QA-006/014 |
| Handoff | FR-017 | UI-05 | 04 controle humano, 05 chat control | QA-006/020 |
| Envio textual | FR-018 | UI-05 | 04 operações, 05 send message | QA-007/008 |
| Contatos | FR-021 | UI-06, UI-14 | 05 contacts endpoints | QA-001/011 |
| Canais | FR-023–024 | UI-15 | 05 channels/capabilities | QA-011 |
| Dashboard básico | FR-026 | UI-03, UI-17 | 04 sync, 05 reports | QA-021 |
| Auditoria/operação | FR-033–035 | UI-21–22 | 04 audit/webhooks | QA-009/010 |
| Retenção/exclusão assistida | FR-036 | UI-20 | 09 retenção/runbooks | QA-018 |
| Capabilities | FR-039 | todas | 05 capabilities | QA-011/012 |

## Riscos principais

| Risco | Severidade | Mitigação |
|---|---:|---|
| API pública não cobrir conexão autônoma de canal | Alta | onboarding assistido e capability por canal |
| Timeout em envio gerar duplicidade | Alta | `OUTCOME_UNKNOWN`, sem retry cego e reconciliação |
| Webhook sem assinatura alterar estado falso | Alta | webhook como hint e releitura autenticada |
| Tenant guard mal configurado vazar cliente | Alta | testes QA-001/002, FKs compostas, queries sempre com `organization_id` |
| Training sem ID confiável | Média/Alta | serialização, evidência, estado `UNKNOWN` |
| White-label comercial não autorizado | Média/Alta | confirmar contrato antes de promessa pública |
| Custos/limites do fornecedor desconhecidos | Média | staging, budgets e relatórios de consumo |
| UI prometer recurso não homologado | Média | capabilities e estados de indisponibilidade |
| Segredo administrativo usado em rota comum | Alta | módulos server-only, testes privilegiados e auditoria |

## Definição de piloto concluído

O piloto técnico está concluído quando:

1. uma organização consegue entrar, configurar agente e adicionar fonte homologada;
2. um canal piloto recebe mensagem real controlada;
3. operador assume, responde e devolve à IA;
4. dashboard mostra métricas com cobertura e fuso;
5. segundo tenant não acessa nada do primeiro;
6. P0 QA passa;
7. backup/restore foi exercitado;
8. suporte/incidente tem responsável humano.

Sem canal real ou credencial GPT Maker real, o resultado é protótipo técnico com mock, não piloto operacional.
