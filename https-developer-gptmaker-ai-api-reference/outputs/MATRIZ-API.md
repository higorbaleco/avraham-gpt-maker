# Matriz documental da API GPT Maker

Consulta em 09/10/2026. 72 operações. Nenhuma foi homologada em conta autenticada.

Fonte: [OpenAPI oficial](https://developer.gptmaker.ai/api-reference/openapi.json). Os nomes abaixo são elementos de interface técnica. Não são contratos internos já implementados.

Todas as chamadas usam o backend e Bearer do provedor. Toda rota exige verificação local de organização e papel. Campos listados sem marca de obrigatoriedade podem ter exigências reais que o schema não descreve.

## 01. GET `/v2/workspaces`

- **Tela/módulo:** Conexão e provisionamento.
- **Parâmetros:** Nenhum declarado.
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** lista de Workspace.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 02. GET `/v2/workspace/{workspaceId}/credits`

- **Tela/módulo:** Indicadores e uso.
- **Parâmetros:** `workspaceId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** Credits.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 03. GET `/v2/workspace/{workspaceId}/agents`

- **Tela/módulo:** Agentes.
- **Parâmetros:** `workspaceId` (path obrigatório), `page` (query), `pageSize` (query), `query` (query).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** lista de Assistant.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 04. POST `/v2/workspace/{workspaceId}/agents`

- **Tela/módulo:** Agentes.
- **Parâmetros:** `workspaceId` (path obrigatório).
- **Corpo:** NewAssistant.
- **Resposta 200:** Assistant.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 05. PUT `/v2/agent/{agentId}`

- **Tela/módulo:** Agentes.
- **Parâmetros:** `agentId` (path obrigatório).
- **Corpo:** NewAssistant.
- **Resposta 200:** Assistant.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 06. GET `/v2/agent/{agentId}`

- **Tela/módulo:** Agentes.
- **Parâmetros:** `agentId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** Assistant.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 07. DELETE `/v2/agent/{agentId}`

- **Tela/módulo:** Agentes.
- **Parâmetros:** `agentId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `success`.
- **Validação/limite:** Operação destrutiva: prever confirmação explícita e escopo.

## 08. PUT `/v2/agent/{agentId}/inactive`

- **Tela/módulo:** Agentes.
- **Parâmetros:** `agentId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `success`.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 09. PUT `/v2/agent/{agentId}/active`

- **Tela/módulo:** Agentes.
- **Parâmetros:** `agentId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `success`.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 10. GET `/v2/agent/{agentId}/settings`

- **Tela/módulo:** Agentes.
- **Parâmetros:** `agentId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `prefferModel`, `timezone`, `enabledHumanTransfer`, `enabledReminder`, `splitMessages`, `enabledEmoji`, `limitSubjects`, `messageGroupingTime`, `maxDailyMessages`, `maxDailyMessagesLimitAction`, `knowledgeByFunction`, `onLackKnowLedge`.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 11. PUT `/v2/agent/{agentId}/settings`

- **Tela/módulo:** Agentes.
- **Parâmetros:** `agentId` (path obrigatório).
- **Corpo:** `prefferModel`, `timezone`, `enabledHumanTransfer`, `enabledReminder`, `splitMessages`, `enabledEmoji`, `limitSubjects`, `messageGroupingTime`, `signMessages`, `maxDailyMessages`, `maxDailyMessagesLimitAction`, `knowledgeByFunction`, `onLackKnowLedge`.
- **Resposta 200:** `success`.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 12. GET `/v2/agent/{agentId}/webhooks`

- **Tela/módulo:** Agentes.
- **Parâmetros:** `agentId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `onNewMessage`, `onLackKnowLedge`, `onTransfer`, `onFirstInteraction`, `onStartInteraction`, `onFinishInteraction`, `onCreateEvent`, `onCancelEvent`.
- **Validação/limite:** Configura URLs; payloads e garantias de entrega precisam ser capturados/homologados.

## 13. PUT `/v2/agent/{agentId}/webhooks`

- **Tela/módulo:** Agentes.
- **Parâmetros:** `agentId` (path obrigatório).
- **Corpo:** `onNewMessage`, `onLackKnowLedge`, `onTransfer`, `onFirstInteraction`, `onStartInteraction`, `onFinishInteraction`, `onCreateEvent`, `onCancelEvent`.
- **Resposta 200:** `success`.
- **Validação/limite:** Configura URLs; payloads e garantias de entrega precisam ser capturados/homologados.

## 14. GET `/v2/agent/{agentId}/trainings`

- **Tela/módulo:** Conhecimento.
- **Parâmetros:** `agentId` (path obrigatório), `page` (query), `pageSize` (query), `type` (query obrigatório), `query` (query).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** Variante: lista de TextTraining OU Variante: lista de WebsiteTraining OU Variante: lista de VideoTraining OU Variante: lista de DocumentTraining.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 15. POST `/v2/agent/{agentId}/trainings`

- **Tela/módulo:** Conhecimento.
- **Parâmetros:** `agentId` (path obrigatório).
- **Corpo:** Texto: `type`, `text`, `image`, `callbackUrl` OU Website: `type`, `website`, `trainingSubPages`, `trainingInterval`, `callbackUrl` OU Vídeo: `type`, `video`, `callbackUrl` OU Documento: `type`, `documentUrl`, `documentName`, `documentMimetype`, `callbackUrl`.
- **Resposta 200:** `success`.
- **Validação/limite:** Quatro tipos de criação; confirmar processamento por callback/reconsulta, não apenas sucesso HTTP.

## 16. PUT `/v2/training/{trainingId}`

- **Tela/módulo:** Conhecimento.
- **Parâmetros:** `trainingId` (path obrigatório).
- **Corpo:** Variante: `type`, `text`, `image`.
- **Resposta 200:** `success`.
- **Validação/limite:** Somente texto; demais tipos requerem substituição.

## 17. DELETE `/v2/training/{trainingId}`

- **Tela/módulo:** Conhecimento.
- **Parâmetros:** `trainingId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `success`.
- **Validação/limite:** Operação destrutiva: prever confirmação explícita e escopo.

## 18. GET `/v2/custom-field/workspace/{workspaceId}`

- **Tela/módulo:** Contatos.
- **Parâmetros:** `workspaceId` (path obrigatório), `page` (query), `pageSize` (query), `query` (query).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `id`, `name`, `jsonName`, `description`, `createdAt`, `updatedAt`, `type`, `archived`.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 19. POST `/v2/custom-field/workspace/{workspaceId}`

- **Tela/módulo:** Contatos.
- **Parâmetros:** `workspaceId` (path obrigatório).
- **Corpo:** `id`, `name`, `jsonName`, `description`, `createdAt`, `updatedAt`, `type`, `appliesTo` (obrigatório), `archived`.
- **Resposta 200:** `id`, `name`, `jsonName`, `description`, `createdAt`, `updatedAt`, `type`.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 20. PUT `/v2/custom-field/{customfieldId}`

- **Tela/módulo:** Contatos.
- **Parâmetros:** `customfieldId` (path obrigatório).
- **Corpo:** Variante: `id`, `name`, `description`, `type`, `jsonName`.
- **Resposta 200:** Sem schema 200 detalhado.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 21. PUT `/v2/custom-field/toggle-archive/{customfieldId}`

- **Tela/módulo:** Contatos.
- **Parâmetros:** `customfieldId` (path obrigatório), `archived` (query).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** Sem schema 200 detalhado.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 22. GET `/v2/agent/{agentId}/idle-actions`

- **Tela/módulo:** Automações.
- **Parâmetros:** `agentId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `actions`, `finishAction`.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 23. POST `/v2/agent/{agentId}/idle-actions`

- **Tela/módulo:** Automações.
- **Parâmetros:** `agentId` (path obrigatório).
- **Corpo:** `actions`, `finishAction`.
- **Resposta 200:** `actions`, `finishAction`.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 24. PUT `/v2/agent/{agentId}/idle-actions`

- **Tela/módulo:** Automações.
- **Parâmetros:** `agentId` (path obrigatório).
- **Corpo:** `actions`, `finishAction`.
- **Resposta 200:** `actions`, `finishAction`.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 25. DELETE `/v2/agent/{agentId}/idle-actions`

- **Tela/módulo:** Automações.
- **Parâmetros:** `agentId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** Sem schema 200 detalhado.
- **Validação/limite:** Operação destrutiva: prever confirmação explícita e escopo.

## 26. GET `/v2/agent/{id}/transfer-rules`

- **Tela/módulo:** Automações.
- **Parâmetros:** `agentId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `id`, `createdAt`, `instructions`, `returnOnFinish`, `type`, `agentId`, `userId`.
- **Validação/limite:** Divergência nos parâmetros de rota: conferir o contrato antes de gerar cliente.

## 27. POST `/v2/agent/{agentId}/transfer-rules`

- **Tela/módulo:** Automações.
- **Parâmetros:** `agentId` (path obrigatório).
- **Corpo:** `instructions`, `returnOnFinish`, `type`, `userId`, `agentId`.
- **Resposta 200:** `id`, `createdAt`, `instructions`, `returnOnFinish`, `type`, `agentId`, `userId`.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 28. PUT `/v2/agent/{agentId}/transfer-rules/{transfer-rule-id}`

- **Tela/módulo:** Automações.
- **Parâmetros:** `agentId` (path obrigatório), `transfer-rule-id` (path obrigatório).
- **Corpo:** Variante: `instructions`, `returnOnFinish`, `type`, `agentId`, `userId`.
- **Resposta 200:** Sem schema 200 detalhado.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 29. DELETE `/v2/agent/{agentId}/transfer-rules/{transfer-rule-id}`

- **Tela/módulo:** Automações.
- **Parâmetros:** `agentId` (path obrigatório), `transfer-rule-id` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** Sem schema 200 detalhado.
- **Validação/limite:** Operação destrutiva: prever confirmação explícita e escopo.

## 30. GET `/v2/mcp/{mcpId}/tools`

- **Tela/módulo:** Ferramentas.
- **Parâmetros:** `mcpId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** lista de `id`, `tenant`, `tenantOwner`, `createdAt`, `updatedAt`, `integrationId`, `agentId`, `active`, `name`, `description`, `inputSchema`.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 31. GET `/v2/mcp/{mcpId}/tool/{toolId}/active`

- **Tela/módulo:** Ferramentas.
- **Parâmetros:** `mcpId` (path obrigatório), `toolId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `success`.
- **Validação/limite:** GET com alteração de estado: desabilitar cache e prefetch.

## 32. GET `/v2/mcp/{mcpId}/tool/{toolId}/inactive`

- **Tela/módulo:** Ferramentas.
- **Parâmetros:** `mcpId` (path obrigatório), `toolId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `success`.
- **Validação/limite:** GET com alteração de estado: desabilitar cache e prefetch.

## 33. GET `/v2/mcp/{mcpId}/sync-tools`

- **Tela/módulo:** Ferramentas.
- **Parâmetros:** `mcpId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `success`.
- **Validação/limite:** GET com alteração de estado: desabilitar cache e prefetch.

## 34. POST `/v2/agent/{agentId}/mcp/add`

- **Tela/módulo:** Ferramentas.
- **Parâmetros:** `mcpId` (path obrigatório).
- **Corpo:** `name` (obrigatório), `description` (obrigatório), `mcpUrl` (obrigatório), `urlType` (obrigatório), `authType` (obrigatório), `headers`.
- **Resposta 200:** `connected`, `success`, `id`, `url`.
- **Validação/limite:** Divergência nos parâmetros de rota: conferir o contrato antes de gerar cliente.

## 35. POST `/v2/mcp/connect`

- **Tela/módulo:** Ferramentas.
- **Parâmetros:** Nenhum declarado.
- **Corpo:** `code` (obrigatório), `state` (obrigatório).
- **Resposta 200:** `agentId`, `success`, `mcpId`.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 36. DELETE `/v2/mcp/{mcpId}`

- **Tela/módulo:** Ferramentas.
- **Parâmetros:** `mcpId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `success`.
- **Validação/limite:** Operação destrutiva: prever confirmação explícita e escopo.

## 37. GET `/v2/agent/{agentId}/intentions`

- **Tela/módulo:** Ferramentas.
- **Parâmetros:** `agentId` (path obrigatório), `page` (query), `pageSize` (query), `query` (query).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** lista de Intention.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 38. POST `/v2/agent/{agentId}/intentions`

- **Tela/módulo:** Ferramentas.
- **Parâmetros:** `agentId` (path obrigatório).
- **Corpo:** `description` (obrigatório), `details`, `instructions`, `fields`, `type` (obrigatório), `httpMethod` (obrigatório), `url` (obrigatório), `headers`, `params`, `variables`, `requestBody`, `autoGenerateParams` (obrigatório), `autoGenerateBody` (obrigatório).
- **Resposta 200:** `success`.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 39. PUT `/v2/intention/{intentionId}`

- **Tela/módulo:** Ferramentas.
- **Parâmetros:** `intentionId` (path obrigatório).
- **Corpo:** Variante: Intention.
- **Resposta 200:** `success`.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 40. DELETE `/v2/intention/{intentionId}`

- **Tela/módulo:** Ferramentas.
- **Parâmetros:** `intentionId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `success`.
- **Validação/limite:** Operação destrutiva: prever confirmação explícita e escopo.

## 41. GET `/v2/workspace/{workspaceId}/chats`

- **Tela/módulo:** Atendimento.
- **Parâmetros:** `workspaceId` (path obrigatório), `agentId` (query), `page` (query), `pageSize` (query), `query` (query).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** lista de Chat.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 42. DELETE `/v2/chat/{chatId}`

- **Tela/módulo:** Atendimento.
- **Parâmetros:** `chatId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `success`.
- **Validação/limite:** Operação destrutiva: prever confirmação explícita e escopo.

## 43. GET `/v2/chat/{chatId}/messages`

- **Tela/módulo:** Atendimento.
- **Parâmetros:** `chatId` (path obrigatório), `page` (query), `pageSize` (query).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** lista de Message.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 44. DELETE `/v2/chat/{chatId}/messages`

- **Tela/módulo:** Atendimento.
- **Parâmetros:** `chatId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `success`.
- **Validação/limite:** Operação destrutiva: prever confirmação explícita e escopo.

## 45. PUT `/v2/chat/{chatId}/start-human`

- **Tela/módulo:** Atendimento.
- **Parâmetros:** `chatId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `success`.
- **Validação/limite:** Não recebe operador local; atribuição e concorrência ficam no nosso sistema.

## 46. PUT `/v2/chat/{chatId}/stop-human`

- **Tela/módulo:** Atendimento.
- **Parâmetros:** `chatId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `success`.
- **Validação/limite:** A resposta da IA retorna na próxima interação do cliente.

## 47. POST `/v2/chat/{chatId}/send-message`

- **Tela/módulo:** Atendimento.
- **Parâmetros:** `chatId` (path obrigatório).
- **Corpo:** Texto: `message` (obrigatório), `replyMessageId` OU Imagem: `message`, `image` OU Áudio: `audio` OU Vídeo: `video` OU Documento: `document`, `documentName`, `documentMimetype`.
- **Resposta 200:** `success`.
- **Validação/limite:** Envio pode produzir efeito externo; não repetir cegamente após timeout.

## 48. DELETE `/v2/chat/{chatId}/message/{messageId}`

- **Tela/módulo:** Atendimento.
- **Parâmetros:** `chatId` (path obrigatório), `messageId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `success`, `status`.
- **Validação/limite:** Restrito a Z-API, Telegram e Widget. Operação destrutiva: prever confirmação explícita e escopo.

## 49. PUT `/v2/chat/{chatId}/message/{messageId}`

- **Tela/módulo:** Atendimento.
- **Parâmetros:** `chatId` (path obrigatório), `messageId` (path obrigatório).
- **Corpo:** `message`.
- **Resposta 200:** `success`, `status`.
- **Validação/limite:** Restrito a Z-API, Telegram e Widget.

## 50. GET `/v2/workspace/{workspaceId}/search`

- **Tela/módulo:** Contatos.
- **Parâmetros:** `workspaceId` (path obrigatório), `page` (query), `pageSize` (query).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `birthday`, `gender`, `phone`, `jobTitle`, `name`, `recipient`, `id`, `picture`, `email`.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 51. GET `/v2/workspace/{workspaceId}/contact/{contactId}`

- **Tela/módulo:** Contatos.
- **Parâmetros:** Nenhum declarado.
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `id`, `name`, `birthday`, `gender`, `picture`, `phone`, `email`, `jobTitle`, `recipient`, `customFieldValues`.
- **Validação/limite:** Divergência nos parâmetros de rota: conferir o contrato antes de gerar cliente.

## 52. PUT `/v2/contact/{contactId}/update`

- **Tela/módulo:** Contatos.
- **Parâmetros:** Nenhum declarado.
- **Corpo:** `id`, `name`, `birthday`, `gender`, `picture`, `phone`, `email`, `jobTitle`, `recipient`, `customFieldValues`.
- **Resposta 200:** `id`, `name`, `birthday`, `gender`, `picture`, `phone`, `email`, `jobTitle`, `recipient`, `customFieldValues`.
- **Validação/limite:** Divergência nos parâmetros de rota: conferir o contrato antes de gerar cliente.

## 53. DELETE `/v2/contact/{contactId}/delete`

- **Tela/módulo:** Contatos.
- **Parâmetros:** `contactId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** Sem schema 200 detalhado.
- **Validação/limite:** Operação destrutiva: prever confirmação explícita e escopo.

## 54. POST `/v2/agent/{agentId}/conversation`

- **Tela/módulo:** Agentes.
- **Parâmetros:** `agentId` (path obrigatório).
- **Corpo:** Texto: `contextId` (obrigatório), `prompt` (obrigatório), `callbackUrl`, `onFinishCallback`, `chatName`, `chatPicture`, `phone` OU Imagem: `contextId` (obrigatório), `prompt` (obrigatório), `image` (obrigatório), `callbackUrl`, `onFinishCallback`, `chatName`, `chatPicture`, `phone` OU Áudio: `contextId` (obrigatório), `audio` (obrigatório), `callbackUrl`, `onFinishCallback`, `chatName`, `chatPicture`, `phone` OU Vídeo: `contextId` (obrigatório), `video` (obrigatório), `prompt`, `callbackUrl`, `onFinishCallback`, `chatName`, `chatPicture`, `phone` OU Documento: `contextId` (obrigatório), `document` (obrigatório), `prompt`, `callbackUrl`, `onFinishCallback`, `chatName`, `chatPicture`, `phone`.
- **Resposta 200:** `message`, `images`, `audios`, `documents`.
- **Validação/limite:** contextId isolado por organização/sessão; sandbox para testes; callback opcional.

## 55. POST `/v2/agent/{agentId}/add-message`

- **Tela/módulo:** Agentes.
- **Parâmetros:** `agentId` (path obrigatório).
- **Corpo:** Texto: `contextId` (obrigatório), `prompt` (obrigatório), `role` OU Imagem: `contextId` (obrigatório), `prompt` (obrigatório), `image` (obrigatório), `role` OU Áudio: `contextId` (obrigatório), `audio` (obrigatório), `role` OU Vídeo: `contextId` (obrigatório), `video` (obrigatório), `prompt`, `role` OU Documento: `contextId` (obrigatório), `document` (obrigatório), `prompt`, `role`.
- **Resposta 200:** `message`, `images`, `audios`.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 56. GET `/v2/agent/{id}/list-behavior-history`

- **Tela/módulo:** Agentes.
- **Parâmetros:** `id` (path obrigatório), `page` (query obrigatório), `pageSize` (query obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `userLogin` (obrigatório), `createdAt` (obrigatório), `userPicture` (obrigatório), `id` (obrigatório), `userName` (obrigatório), `userId` (obrigatório), `behaviorText` (obrigatório).
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 57. GET `/v2/workspace/{workspaceId}/channels`

- **Tela/módulo:** Canais.
- **Parâmetros:** `workspaceId` (path obrigatório), `page` (query), `pageSize` (query), `query` (query), `agentId` (query).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `data`, `count`.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 58. POST `/v2/workspace/{workspaceId}/create-channel`

- **Tela/módulo:** Canais.
- **Parâmetros:** `workspaceId` (path obrigatório).
- **Corpo:** `name` (obrigatório), `type`, `agentId`.
- **Resposta 200:** `assistantId` (obrigatório), `workspace` (obrigatório), `name` (obrigatório), `id` (obrigatório), `type` (obrigatório).
- **Validação/limite:** Registro de canal não comprova autorização/conexão completa por tipo.

## 59. PUT `/v2/channel/{channelId}`

- **Tela/módulo:** Canais.
- **Parâmetros:** `channelId` (path obrigatório).
- **Corpo:** `name` (obrigatório), `agentId`.
- **Resposta 200:** `name`, `assistantId`, `type`, `workspace`.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 60. DELETE `/v2/channel/{channelId}`

- **Tela/módulo:** Canais.
- **Parâmetros:** `channelId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `success`.
- **Validação/limite:** Operação destrutiva: prever confirmação explícita e escopo.

## 61. GET `/v2/channel/{channelId}/qr-code`

- **Tela/módulo:** Canais.
- **Parâmetros:** `channelId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** Quando não está conectado: `value` OU Quando está conectado: `connected`.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 62. GET `/v2/channel/{channelId}/config`

- **Tela/módulo:** Canais.
- **Parâmetros:** `channelId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** Configuração Z_API: `id`, `tenant`, `audioAction`, `startTrigger`, `endTrigger`, `enabledTyping`, `enableGroupsResponse`, `replyGroupsType`, `enablePrivateChatResponse`, `callRejectAuto`, `callRejectMessage`, `takeOutsideService`, `takeOutsideServiceMember`, `takeOutsideServiceCommand`, `takeOutsideServiceMessage`, `takeOutsideServiceCommandReturn`, `takeOutsideServiceReturnMessage`, `waitingMessageEnabled`, `waitingMessageText`, `type` OU Configuração WHATSAPP: `id`, `tenant`, `audioAction`, `startTrigger`, `endTrigger`, `enabledTyping`, `type` OU Configuração INSTAGRAM: `id`, `tenant`, `audioAction`, `startTrigger`, `endTrigger`, `notReactInstagramStories`, `takeOutsideService`, `takeOutsideServiceMember`, `takeOutsideServiceCommand`, `takeOutsideServiceMessage`, `takeOutsideServiceCommandReturn`, `takeOutsideServiceReturnMessage`, `commentsReplyEnabled`, `commentsReplyAllEnabled`, `commentsReplyAllInstruction`, `commentsCallDirectInstruction` OU Configuração básica (TWILIO_SMS, TELEGRAM, MERCADO_LIVRE, MESSENGER): `id`, `tenant`, `audioAction`, `startTrigger`, `endTrigger`.
- **Validação/limite:** Homologar campos por tipo; não enviar tenant recebido do navegador.

## 63. PUT `/v2/channel/{id}/config`

- **Tela/módulo:** Canais.
- **Parâmetros:** `id` (path obrigatório).
- **Corpo:** `id`, `tenant`, `audioAction`, `startTrigger`, `endTrigger`.
- **Resposta 200:** Configuração Z_API: `id`, `tenant`, `audioAction`, `startTrigger`, `endTrigger`, `enabledTyping`, `enableGroupsResponse`, `replyGroupsType`, `enablePrivateChatResponse`, `callRejectAuto`, `callRejectMessage`, `takeOutsideService`, `takeOutsideServiceMember`, `takeOutsideServiceCommand`, `takeOutsideServiceMessage`, `takeOutsideServiceCommandReturn`, `takeOutsideServiceReturnMessage`, `waitingMessageEnabled`, `waitingMessageText`, `type` OU Configuração WHATSAPP: `id`, `tenant`, `audioAction`, `startTrigger`, `endTrigger`, `enabledTyping`, `type` OU Configuração INSTAGRAM: `id`, `tenant`, `audioAction`, `startTrigger`, `endTrigger`, `notReactInstagramStories`, `takeOutsideService`, `takeOutsideServiceMember`, `takeOutsideServiceCommand`, `takeOutsideServiceMessage`, `takeOutsideServiceCommandReturn`, `takeOutsideServiceReturnMessage`, `commentsReplyEnabled`, `commentsReplyAllEnabled`, `commentsReplyAllInstruction`, `commentsCallDirectInstruction` OU Configuração básica (TWILIO_SMS, TELEGRAM, MERCADO_LIVRE, MESSENGER): `id`, `tenant`, `audioAction`, `startTrigger`, `endTrigger`.
- **Validação/limite:** Homologar campos por tipo; não enviar tenant recebido do navegador.

## 64. PUT `/v2/channel/{channelId}/widget-settings`

- **Tela/módulo:** Canais.
- **Parâmetros:** `channelId` (path obrigatório).
- **Corpo:** `isPublic`, `initialMessage`, `origins`, `suggestMessages`, `headerBackground`, `headerColor`, `messageUserBackground`, `buttonBackground`.
- **Resposta 200:** `success`.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 65. GET `/v2/channel/{channelId}/widget-links`

- **Tela/módulo:** Canais.
- **Parâmetros:** `channelId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `float`, `iframe`.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 66. GET `/v2/agent/{agentId}/search`

- **Tela/módulo:** Canais.
- **Parâmetros:** `agentId` (path obrigatório), `page` (query), `pageSize` (query), `query` (query).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `data`, `count`.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 67. GET `/v2/agent/{agentId}/credits-spent`

- **Tela/módulo:** Indicadores e uso.
- **Parâmetros:** `agentId` (path obrigatório), `year` (query), `month` (query), `day` (query).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `total`, `data`.
- **Validação/limite:** Agregado por data/modelo; não fornece custo individual por chat.

## 68. POST `/v2/channel/{channelId}/start-conversation`

- **Tela/módulo:** Canais.
- **Parâmetros:** `channelId` (path obrigatório).
- **Corpo:** Mensagem de Texto: `phone` (obrigatório), `message` (obrigatório) OU Imagem: `phone` (obrigatório), `image` (obrigatório) OU Vídeo: `phone` (obrigatório), `video` (obrigatório) OU Áudio: `phone` (obrigatório), `audio` (obrigatório) OU Documento: `phone` (obrigatório), `document` (obrigatório), `documentName` (obrigatório), `documentMimetype` (obrigatório).
- **Resposta 200:** `success`.
- **Validação/limite:** Envio pode produzir efeito externo; não repetir cegamente após timeout. Documentado apenas para WhatsApp não oficial.

## 69. GET `/v2/workspace/{workspaceId}/interactions`

- **Tela/módulo:** Indicadores e uso.
- **Parâmetros:** `workspaceId` (path obrigatório), `agentId` (query), `page` (query), `pageSize` (query).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** lista de Interaction.
- **Validação/limite:** Sem filtro temporal documentado; snapshots locais e reconciliação paginada.

## 70. GET `/v2/interaction/{interactionId}/messages`

- **Tela/módulo:** Indicadores e uso.
- **Parâmetros:** `interactionId` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** lista de Message.
- **Validação/limite:** Homologar formato, permissões, paginação quando aplicável e leitura após alteração.

## 71. DELETE `/v2/interaction/{id}`

- **Tela/módulo:** Indicadores e uso.
- **Parâmetros:** `id` (path obrigatório).
- **Corpo:** Sem corpo documentado.
- **Resposta 200:** `deleted` (obrigatório).
- **Validação/limite:** Operação destrutiva: prever confirmação explícita e escopo.

## 72. POST `/v2/workspace/{workspaceId}/export`

- **Tela/módulo:** Indicadores e uso.
- **Parâmetros:** `workspaceId` (path obrigatório).
- **Corpo:** Exportar todos: objeto vazio OU Exportar por página: `page`, `pagesize`.
- **Resposta 200:** `contactName` (obrigatório), `channelType` (obrigatório), `status` (obrigatório), `agentName` (obrigatório), `startAt` (obrigatório), `resolvedAt` (obrigatório), `duration` (obrigatório), `protocol` (obrigatório).
- **Validação/limite:** Descrição CSV versus resposta JSON; formato e filtros precisam ser validados.
