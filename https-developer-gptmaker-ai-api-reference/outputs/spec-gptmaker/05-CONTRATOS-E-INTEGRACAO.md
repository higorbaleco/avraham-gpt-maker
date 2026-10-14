# Contratos e integração

Versão 1.0, 10/10/2026. Este documento define os contratos internos que devem existir entre o painel, o BFF, o worker e o adaptador GPT Maker. Ele não substitui a documentação do fornecedor; ele reduz a ambiguidade para o time implementar sem expor token, tenant ou regra sensível ao browser.

## Princípios

Toda chamada do navegador vai para nosso BFF. O cliente nunca chama `api.gptmaker.ai`, nunca recebe IDs do fornecedor como autoridade de acesso e nunca vê token GPT Maker. O BFF resolve organização, papel, recurso local, capability habilitada e operação permitida. O worker executa efeitos externos a partir de operações persistidas.

Mutação assíncrona retorna operação local. A UI mostra `pendente`, `confirmado`, `falhou`, `resultado desconhecido` ou `conflito`, conforme evidência. Não transformar resposta HTTP 200 em treinamento pronto, canal conectado, mensagem entregue ou agente aplicado sem releitura/estado confiável.

IDs externos são propriedades do adaptador. APIs internas usam IDs locais opacos: `orgId`, `agentId`, `chatId`, `sourceId`, `channelId`, `operationId`. Rotas de página usam `orgSlug`; rotas de API devem aceitar `orgSlug` quando conveniente e resolver para `orgId` no servidor.

## Forma comum das APIs internas

Prefixo interno recomendado: `/api/app`. Não é API pública comercial. Versionar contratos de operação com tipos TypeScript e Zod em `packages/contracts`; evitar promises verbais espalhadas por componentes.

```ts
type ApiErrorCode =
  | "UNAUTHENTICATED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "VALIDATION_ERROR"
  | "CAPABILITY_DISABLED"
  | "CONFLICT"
  | "STALE_STATE"
  | "PROVIDER_UNAVAILABLE"
  | "OUTCOME_UNKNOWN"
  | "RATE_LIMITED"
  | "INTERNAL_ERROR";

type ApiError = {
  ok: false;
  error: {
    code: ApiErrorCode;
    message: string;
    requestId: string;
    fieldErrors?: Record<string, string[]>;
    supportRef?: string;
  };
};

type ApiSuccess<T> = { ok: true; data: T; requestId: string };

type OperationRef = {
  operationId: string;
  status: "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED" | "OUTCOME_UNKNOWN" | "CANCELED";
  resource?: { type: string; id: string };
  submittedAt: string;
  statusUrl: string;
};
```

Mutação aceita `Idempotency-Key` em header ou campo equivalente gerado pelo cliente para duplo clique/reenvio. Repetir a mesma chave e o mesmo `payload_hash` retorna a operação anterior. Repetir a chave com payload diferente retorna `409 CONFLICT`.

GETs de listagem retornam cobertura:

```ts
type Coverage = {
  state: "complete" | "partial" | "stale" | "unknown";
  confirmedAt?: string;
  reason?: string;
};
```

`coverage.state = "partial"` deve aparecer em UI como cobertura parcial. Não zerar métrica quando a fonte falha.

## Endpoints internos P0

| Endpoint | Método | Requisitos | Autorização | Resultado |
|---|---:|---|---|---|
| `/api/app/orgs` | GET | FR-001/002 | sessão | organizações acessíveis e papel |
| `/api/app/orgs/{orgSlug}/onboarding` | GET | FR-004/005 | membro | checklist e evidências |
| `/api/app/orgs/{orgSlug}/members` | GET/POST | FR-003 | owner/admin | lista/convite |
| `/api/app/orgs/{orgSlug}/members/{memberId}` | PATCH | FR-003 | owner/admin | operação local confirmada |
| `/api/app/orgs/{orgSlug}/agents` | GET/POST | FR-006/007 | owner/admin/trainer | lista ou operação |
| `/api/app/orgs/{orgSlug}/agents/{agentId}` | GET/PATCH | FR-007/040 | owner/admin/trainer | detalhe/operação |
| `/api/app/orgs/{orgSlug}/agents/{agentId}/activation` | POST | FR-008 | owner/admin | operação |
| `/api/app/orgs/{orgSlug}/agents/{agentId}/test-sessions` | POST | FR-009 | owner/admin/trainer | sessão de teste |
| `/api/app/orgs/{orgSlug}/test-sessions/{sessionId}/messages` | GET/POST | FR-009 | dono/autorizado | histórico ou operação |
| `/api/app/orgs/{orgSlug}/knowledge` | GET/POST | FR-010/011/013 | owner/admin/trainer | lista/operação |
| `/api/app/orgs/{orgSlug}/knowledge/{sourceId}` | GET/PATCH/DELETE | FR-013 | owner/admin/trainer | detalhe/operação |
| `/api/app/orgs/{orgSlug}/knowledge/uploads` | POST | FR-011 | owner/admin/trainer | URL/storage key local |
| `/api/app/orgs/{orgSlug}/inbox/chats` | GET | FR-015/016 | escopo do papel | lista paginada |
| `/api/app/orgs/{orgSlug}/inbox/chats/{chatId}` | GET | FR-015 | escopo do papel | detalhe |
| `/api/app/orgs/{orgSlug}/inbox/chats/{chatId}/messages` | GET/POST | FR-018 | controle/escopo | histórico/operação |
| `/api/app/orgs/{orgSlug}/inbox/chats/{chatId}/claim` | POST | FR-016/017 | owner/admin/manager/operator autorizado | operação |
| `/api/app/orgs/{orgSlug}/inbox/chats/{chatId}/release` | POST | FR-017 | responsável/manager/admin/owner | operação |
| `/api/app/orgs/{orgSlug}/contacts` | GET | FR-021 | escopo | lista |
| `/api/app/orgs/{orgSlug}/contacts/{contactId}` | GET/PATCH | FR-021 | escopo | detalhe/operação |
| `/api/app/orgs/{orgSlug}/channels` | GET/POST | FR-023/024 | leitura/configuração | lista/operação |
| `/api/app/orgs/{orgSlug}/channels/{channelId}` | GET/PATCH | FR-023/024 | owner/admin | detalhe/operação |
| `/api/app/orgs/{orgSlug}/reports/overview` | GET | FR-026/027 | papel de relatório | métricas com cobertura |
| `/api/app/orgs/{orgSlug}/operations/{operationId}` | GET | todos | ator/autorizado | estado da operação |

Rotas `/api/ops/*` ficam separadas, exigem `platform_admin` e MFA quando disponível. Não misturar console de plataforma com área do cliente.

## Mapeamento para GPT Maker

| Domínio | API GPT Maker documentada | Uso seguro no produto |
|---|---|---|
| Workspaces | listar workspaces/créditos | vincular organização a workspace existente; criação automática não está no P0 |
| Agentes | CRUD, ativar/inativar, configuração | criar/editar agente e sincronizar estado; preservar nomes crus como `prefferModel` no adaptador |
| Conhecimento | TEXT/WEBSITE/VIDEO/DOCUMENT; update TEXT; delete | UI prepara os quatro fluxos; só publica tipos homologados por capability |
| Chats/mensagens | listar chats, mensagens, enviar mensagem, start/stop human | inbox, envio, assumir e devolver; timeout vira `OUTCOME_UNKNOWN` |
| Contatos | listar/consultar/atualizar/deletar | contato vinculado; sem criação avulsa no P0 |
| Canais | criar/listar/QR/configurações/widget | conexão assistida quando credencial/OAuth não estiver coberto pela API |
| Interações | listar RUNNING/WAITING/RESOLVED e timestamps | métricas operacionais; não chamar sem transferência de “resolvido por IA” |
| Uso | agente/dia/modelo | relatório agregado e rateios estimados claramente rotulados |
| Webhooks | URLs por evento | hints com releitura autenticada; payload sem assinatura não vira verdade |
| MCP/ferramentas | endpoints com mutações inclusive GET | catálogo curado; sem prefetch, cache agressivo ou retry genérico |

O adaptador GPT Maker fica em `packages/provider-gptmaker`. Ele é o único lugar autorizado a conhecer paths do fornecedor, bugs documentais, campos crus e conversões de erro.

## Contratos do adaptador

```ts
interface GptMakerAdapter {
  listAgents(input: ProviderScopedPage): Promise<ProviderPage<ProviderAgent>>;
  createAgent(input: CreateProviderAgent): Promise<ProviderOperationResult<ProviderAgentRef>>;
  updateAgent(input: UpdateProviderAgent): Promise<ProviderOperationResult<ProviderAgentRef>>;
  setAgentActive(input: SetAgentActive): Promise<ProviderOperationResult<ProviderAgentRef>>;

  createTraining(input: CreateTrainingInput): Promise<ProviderOperationResult<ProviderTrainingRef | null>>;
  updateTextTraining(input: UpdateTextTrainingInput): Promise<ProviderOperationResult<ProviderTrainingRef>>;
  deleteTraining(input: DeleteTrainingInput): Promise<ProviderOperationResult<void>>;

  listChats(input: ListChatsInput): Promise<ProviderPage<ProviderChat>>;
  listMessages(input: ListMessagesInput): Promise<ProviderPage<ProviderMessage>>;
  sendMessage(input: SendMessageInput): Promise<ProviderOperationResult<SendMessageProviderResult>>;
  startHuman(input: ChatControlInput): Promise<ProviderOperationResult<void>>;
  stopHuman(input: ChatControlInput): Promise<ProviderOperationResult<void>>;
}
```

`ProviderOperationResult` precisa distinguir:

- `confirmed`: resposta suficiente para aceitar efeito remoto.
- `accepted`: fornecedor aceitou solicitação, mas estado final precisa de reconciliação.
- `unknown`: timeout, queda, corpo inválido ou resposta insuficiente após possível transmissão.
- `rejected`: erro conhecido sem efeito remoto.

Chamadas de leitura podem fazer retry com backoff. Chamadas de mutação não repetem quando existe chance de efeito remoto, exceto se a API oferecer idempotência real comprovada.

## Capabilities

Capabilities são flags internas revisadas pela plataforma, com evidência. Elas impedem que a UI e o BFF prometam funções só porque aparecem na documentação.

Chaves iniciais:

| Capability | Padrão | Libera |
|---|---:|---|
| `knowledge.text.create_update_delete` | true após homologação básica | TEXT P0 |
| `knowledge.document.create` | false | DOCUMENT P0 condicional |
| `knowledge.website.create` | false | WEBSITE P1 |
| `knowledge.video.create` | false | VIDEO P1 |
| `channel.whatsapp.unofficial.connect_assisted` | false | canal piloto assistido |
| `channel.widget.configure` | false | widget P1 |
| `message.media.send` | false | mídia P1 |
| `message.edit_delete` | false por canal | editar/excluir P1 |
| `agent.transfer_rules` | false | automações P1 |
| `agent.mcp_tools` | false | ferramentas P1 |
| `reports.provider_export` | false | export fornecedor validada |

Toda capability tem `reviewed_at`, `reviewed_by`, `evidence_ref`, ambiente e escopo de canal/organização quando necessário.

## Webhooks

Cada conexão recebe endpoint opaco, por exemplo `/api/webhooks/gptmaker/{webhookSecretId}`. O path identifica conexão candidata; o payload não decide a organização sozinho.

Fluxo:

1. Receber payload e headers.
2. Persistir bruto sanitizado em object storage privado ou tabela limitada, com tamanho máximo.
3. Resolver conexão pelo segredo do path.
4. Calcular dedup key se houver ID confiável.
5. Registrar `trust_level`.
6. Enfileirar reconciliação do recurso afetado.
7. Responder 2xx somente após persistência.

Sem assinatura oficial, o webhook atualiza `webhook_events` e pode acelerar releitura. Ele não altera mensagem, handoff, treinamento ou métrica sensível sem confirmação por API autenticada ou regra homologada.

## Arquivos

Documentos de conhecimento sobem para bucket privado. Caminho recomendado:

`org/{organizationId}/knowledge/{sourceId}/{version}/{safeFileName}`

O cliente recebe URL de upload temporária ou endpoint de upload do BFF. O worker gera URL assinada de leitura para o GPT Maker com validade curta e margem calibrada. Não gravar URL assinada como valor durável nem enviá-la para analytics, logs de erro ou Sentry.

## Erros e UX

Mensagens técnicas viram mensagens de produto. Exemplos:

| Condição | Mensagem interna | Mensagem pt-BR |
|---|---|---|
| `OUTCOME_UNKNOWN` ao enviar | `provider send timeout after body write` | `Estamos confirmando se a mensagem foi enviada. Evitamos reenviar automaticamente para não duplicar.` |
| capability bloqueada | `knowledge.video.create disabled` | `Esse tipo de fonte ainda não está liberado neste canal de implantação.` |
| recurso de outro org | `forbidden resource scope` | `Você não tem acesso a esse item.` |
| provider 429 | `rate limited` | `A integração está limitando novas consultas agora. Vamos tentar novamente em instantes.` |

O log guarda código, requestId, operationId, organização e recurso local. Não guarda token, documento, URL assinada, transcrição completa ou payload sensível.

## Gates de homologação por contrato

Antes de liberar uma capability:

1. Capturar request/response real sanitizado em staging.
2. Validar paginação, IDs, erros, timeout e corpo inválido.
3. Escrever fixture MSW e teste de contrato.
4. Registrar diferença entre OpenAPI e comportamento real.
5. Atualizar `capability_overrides` e documentação do canal.
6. Validar UI: vazio, erro, pendente, stale e conflito.

Mock verde libera desenvolvimento; capability real exige evidência autenticada.
