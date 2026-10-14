# Telas, navegação e sistema de interface

Versão proposta 1.0 · 10/10/2026. Documento de especificação, sem telas implementadas. Referência funcional: [requisitos FR/NFR](02-REQUISITOS.md). A identidade da marca ainda não foi fornecida; os valores visuais abaixo são provisórios e devem ser substituídos por ativos aprovados. Não se presume marca Avraham ou outra marca existente.

## 1. Organização da experiência

O produto é um sistema operacional de atendimento. A composição prioriza leitura, hierarquia e ações frequentes. Evitar landing page, hero promocional, animação ornamental e dashboards com números sem ação correspondente.

Navegação desktop: sidebar persistente com organização no topo; Visão geral, Atendimento, Agentes, Conhecimento, Contatos, Canais, Relatórios e Configurações. O menu exibe apenas áreas autorizadas. Cabeçalho contém breadcrumb, título, última sincronização relevante e ações da página. Conta pessoal fica no rodapé da sidebar. Alertas de canal/fila levam ao recurso filtrado correspondente.

Rotas usam inglês; textos visíveis e mensagens em pt-BR. Todas as rotas de negócio ficam em `/app/[orgSlug]/...`. O servidor resolve `orgSlug` para identidade interna e autorização; o slug não é fronteira de segurança. IDs nas URLs são IDs públicos locais, resolvidos para IDs GPT Maker exclusivamente no backend. Organização removida/inacessível retorna tela genérica sem revelar existência ou nome.

Filtros persistem em query string quando não contêm dados sensíveis: `?agent=...&status=...&from=...&to=...`. Busca por conteúdo de mensagem, telefone ou email não deve aparecer em URL, analytics ou logs de navegação. Paginação usa cursores locais quando disponíveis, sem expor falsa paginação global sobre uma página remota parcial.

Mobile: navegação em drawer; cabeçalho compacto; nenhuma dependência de hover. Inbox mostra lista, conversa e contato como passos navegáveis com botão voltar. Tabelas apresentam resumo em cards quando necessário; tabelas analíticas podem rolar horizontalmente em área identificada. Ações críticas continuam acessíveis em menu contextual com rótulo.

## 2. Estados compartilhados obrigatórios

| Estado | Apresentação | Comportamento |
|---|---|---|
| Carregando inicial | Skeleton com geometria estável e texto acessível de carregamento | Não exibir zeros fictícios, contatos ou mensagens simuladas. |
| Vazio confirmado | Explicar o que falta e oferecer uma ação permitida | Distinguir sem dados de nenhum resultado para filtros. |
| Erro inicial | Mensagem útil, tentar novamente e ID de suporte copiável | Não exibir stack, token ou payload do fornecedor. |
| Desatualizado | Manter dados confirmados com aviso e horário | Ações que dependem de estado crítico pedem revalidação; não presumir desconexão. |
| Pendente | Badge e etapa: enviando, aplicando ou aguardando confirmação | Bloquear apenas ação conflitante; navegar não perde tentativa. |
| Conflito | Explicar mudança concorrente e mostrar estado atual | Preservar rascunho; oferecer revisar/reaplicar quando seguro. |
| Sem permissão | Página acessível genérica ou ação indisponível explicada | Backend também nega. Não mostrar nomes de recursos alheios. |
| Capacidade indisponível | Explicar alternativa assistida ou indisponibilidade no canal | Não vender ação não implementada com botão aparentemente funcional. |

Esses estados pertencem ao componente de recurso, não apenas à página: falha de consumo não impede usar inbox. Toast complementa confirmação inline, nunca é único registro de erro. Informar tempo por horário absoluto ao focar e relativo no resumo. Não chamar resultado “salvo” quando apenas enfileirado.

## 3. Inventário de telas

Todos os campos são propostas de produto, mapeados explicitamente pelo adaptador. Não enviar campos inventados ao GPT Maker. Se o contrato não contém um campo como “finalidade”, ele é metadado local usado na composição das instruções.

### UI-01 — Acesso e conta

**Rotas:** `/login`, `/forgot-password`, `/reset-password`, `/invite/[token]`, `/account`. **Requisitos:** FR-001–003. **Fonte:** identidade local/provedor de identidade escolhido pela arquitetura.

Email e senha ou mecanismo equivalente escolhido, botão entrar, recuperação e estado de sessão expirada. Convite informa organização e papel somente após validar token e contexto apropriado. Conta permite nome, idioma inicial pt-BR, encerramento das próprias sessões e configuração de segundo fator se disponibilizado. Erro de autenticação evita revelar existência de email. Teclado: submissão pelo formulário e foco no primeiro erro; gerenciadores de senha funcionam. URL de convite não vai para analytics.

### UI-02 — Organizações e onboarding

**Rotas:** `/app`, `/app/[orgSlug]/onboarding`. **Requisitos:** FR-002–005. **Permissões:** checklist por tarefas do papel; vínculo técnico só `/ops`.

Seletor mostra apenas memberships ativas. Checklist: Empresa, Workspace, Agente, Conhecimento, Teste, Canal, Atendimento validado. Cada etapa tem responsável, pendência, evidência de conclusão e ação continuar. Campos locais: nome da empresa, fuso e contato responsável. Estado `Aguardando equipe de implantação` explica tarefa e momento da última atualização, sem prometer prazo automático. Token/workspace bruto não aparece ao cliente. Reabrir retoma etapa; perda de conexão não apaga dados. Mobile apresenta lista vertical numerada.

### UI-03 — Visão geral

**Rota:** `/app/[orgSlug]/dashboard`. **Requisitos:** FR-026–027, FR-035. **Fontes:** projeções de atendimentos, canais e consumo. **Permissões:** owner/admin/manager/analyst; trainer vê recorte dos agentes autorizados; operador é direcionado ao inbox, sem dashboard organizacional.

Período, agentes e canais; cards Atendimentos iniciados, Aguardando atendimento, Transferências registradas e Consumo. Cada card contém definição acessível e frescor. Gráfico de volume diário com tabela equivalente; painel de canais com problema e fontes pendentes. Não adicionar gráfico decorativo sem pergunta operacional. Clicar fila abre inbox filtrado; clicar consumo abre relatório correspondente. Sem série completa, mostrar cobertura parcial e não traçar continuidade fictícia.

### UI-04 — Lista do atendimento

**Rota:** `/app/[orgSlug]/inbox`. **Requisitos:** FR-015–016, FR-035. **Fontes:** chats e interações GPT Maker, atribuição/fila locais. **Permissões:** owner/admin/manager/operator no escopo autorizado.

Abas: Meus atendimentos, Sem responsável, Todos permitidos. Filtros: canal, agente, controle IA/humano, estado da interação e responsável. Cada item: nome do contato ou identificação disponível, canal, prévia redigida quando exigida, última atualização, atribuição e estado. Busca por conteúdo só quando índice local estiver implementado e sua cobertura for conhecida; não fingir busca completa com filtro de página. A lista mantém seleção e rolagem ao receber mensagem. Nenhum contador de “não lidas” é inventado a partir de ausência de seleção: requer estado de leitura local definido.

### UI-05 — Conversa

**Rota:** `/app/[orgSlug]/inbox/[chatId]`. **Requisitos:** FR-016–020. **Fonte:** mensagens, estado de controle e atribuição. **Layout desktop:** lista ~300 px, conversa flexível, contato ~320 px; painéis laterais recolhíveis quando a largura não comportar.

Cabeçalho: contato, canal, agente, `IA atendendo`/`Atendimento humano`/`Confirmando controle`, responsável e última confirmação. Ações: Assumir atendimento, Devolver à IA; Redistribuir apenas manager/admin/owner. Composer só permite envio no contexto autorizado e após estado humano confirmado conforme política do piloto. Conteúdo: balões distinguem cliente, IA e humano por rótulo e estilo; datas, anexos e tentativa pendente visíveis. Sem atribuir identidade humana fictícia quando fornecedor informa apenas envio via integração.

Texto, anexos P1 homologados e ação responder mensagem. Padrão Enter envia, Shift+Enter quebra linha, com preferência documentada para inverter; nunca envia durante composição IME. Rascunho sobrevive à troca de conversa durante sessão e é limpo no logout/troca de organização; não persistir conteúdo sensível sem política. Envio ambíguo: `Confirmando se a mensagem foi enviada` com estado persistente; não apresentar botão de reenviar imediatamente. Após reconciliação, mostrar resultado ou fluxo manual que alerta sobre possível duplicidade.

Novo conteúdo não desloca quem está lendo histórico: botão `Novas mensagens` leva ao fim. Região `aria-live` anuncia resumo com contenção, não relê todo o histórico. Erro de histórico não apaga composer. No mobile, contato abre sheet; histórico conserva posição ao voltar da lista. Remover chat/limpar histórico não são ações padrão de operador e não prometem apagar mensagens entregues.

### UI-06 — Contexto do contato

**Rota:** painel na UI-05; detalhe completo na UI-14. **Requisitos:** FR-021–022. **Permissão:** mesmo escopo da conversa.

Nome, telefone, email, canal de origem, campos personalizados permitidos e notas internas P1. Ações editar dados básicos e abrir histórico autorizado. Não expor por padrão nascimento/gênero apenas porque API oferece; incluir somente necessidade de negócio definida. Nota interna tem rótulo e superfície separada do composer externo. Salvar mantém campos não editados. Falha preserva rascunho; conflito mostra valor atual antes de sobrescrever.

### UI-07 — Agentes

**Rota:** `/app/[orgSlug]/agents`. **Requisitos:** FR-006–008. **Permissões:** owner/admin/trainer gerenciam; manager visualiza resumo; operator/analyst não acessam configuração.

Lista ou cards compactos: nome, finalidade local, ativo/inativo/pendente, canais associados, fontes confirmadas e última alteração. Buscar, filtrar status, criar e abrir detalhe. Estado vazio explica criação. Ativar/inativar só owner/admin e mostra canais afetados. Sem botão “Duplicar” antes de implementar cópia comprovada de comportamento, fontes e dependências.

### UI-08 — Criar agente

**Rota:** `/app/[orgSlug]/agents/new`. **Requisitos:** FR-007. **Permissões:** owner/admin/trainer.

Passos: Identificação → Comportamento → Revisão. Nome obrigatório; finalidade local, idioma, instruções, limites de escopo e encaminhamento. Templates são rascunhos revisáveis, não instruções ocultas adicionadas pelo sistema. Valores padrão explicados; modelo e opções avançadas aparecem apenas no catálogo homologado. Revisão mostra conteúdo efetivo enviado. Criar não ativa canal automaticamente; próxima ação adicionar conhecimento. Estado pendente evita criação duplicada após duplo clique/timeout.

### UI-09 — Configuração do agente

**Rotas:** `/app/[orgSlug]/agents/[agentId]`, `/behavior`, `/settings`, `/history` sob o mesmo agente. **Requisitos:** FR-007–008, FR-040. **Fontes:** configuração/histórico GPT Maker e auditoria local.

Resumo com status, canais, fontes e ação testar. Comportamento: editor textual, contagem e instruções de preenchimento; comparar alterações antes de salvar. Configurações: modelo, fuso, emoji, divisão de mensagens, transferência humana e campos validados. Não rotular `maxDailyMessages` como limite diário enquanto semântica não estiver homologada. Campos somente escrita como `signMessages` não inventam valor lido; mostrar desconhecido ou valor local com origem explícita. Histórico separa alterações externas de autoria local. Advertência de rascunho ao sair da tela; mudança concorrente exige revisão.

### UI-10 — Laboratório

**Rota:** `/app/[orgSlug]/agents/[agentId]/test`. **Requisitos:** FR-009. **Permissões:** owner/admin/trainer.

Chat de teste com identificação do agente/configuração confirmada, reset de contexto e indicação de consumo. Perguntas de exemplo são dados sintéticos. Não permite selecionar telefone real de cliente como destinatário por conveniência. Enquanto configuração está pendente, explicar qual versão está efetiva. Timeout preserva pergunta e tentativa; origem de resposta/payload técnico só em painel autorizado de diagnóstico. Não garantir citação de fontes se API não retornar evidência.

### UI-11 — Conhecimento

**Rotas:** `/app/[orgSlug]/knowledge`, `/app/[orgSlug]/agents/[agentId]/knowledge` como visão filtrada do mesmo componente. **Requisitos:** FR-010–014. **Permissões:** owner/admin/trainer.

Tabela: fonte/título local, agente, tipo, estado de ingestão, envio, última confirmação. Filtros agente/tipo/status. Ações adicionar fonte, abrir, editar texto, substituir e remover. Listagem do fornecedor exige tipo; agregação dos quatro tipos precisa ser explícita no serviço local e paginação, sem perda silenciosa. Estados: envio local, aguardando processamento, confirmado, falha, sem confirmação recente. A UI não mostra porcentagem de processamento inventada.

### UI-12 — Adicionar/editar fonte

**Rotas:** `/app/[orgSlug]/knowledge/new`, `/app/[orgSlug]/knowledge/[sourceId]`. **Requisitos:** FR-010–014. **Campos por tipo:**

| Tipo | Campos visíveis e validação | Ações |
|---|---|---|
| Texto | Agente, título local opcional, conteúdo obrigatório; imagem somente se homologada | Criar e editar texto; remover com confirmação. |
| Site | Agente, URL HTTP(S), subpáginas e intervalo apenas se homologados | Criar; substituir/remover. Não aceitar endereços internos/locais. |
| Vídeo | Agente, URL de origem suportada | Criar; substituir/remover; explicar provedores/limites confirmados. |
| Documento | Agente, arquivo, nome; tipo/tamanho conforme catálogo homologado | Upload, cancelar antes do envio remoto, acompanhar ingestão, substituir/remover. |

Mostrar limites conhecidos antes da seleção do arquivo. Upload binário usa armazenamento próprio; URL temporária, MIME e callback são responsabilidade interna, não campos para cliente digitar. Detalhe exibe fonte, estado, erro acionável e últimas tentativas. Texto permite edição; outros tipos exibem `Substituir fonte` e impacto da transição. Confirmar remoção com nome/agente, sem confirmação digitada desnecessária para toda operação comum.

### UI-13 — Lacunas de conhecimento

**Rota:** `/app/[orgSlug]/knowledge/gaps`. **P1; requisitos:** FR-029. **Fonte:** eventos validados + agrupamento local. **Permissões:** owner/admin/trainer, amostras redigidas para trainer.

Lista por tema, frequência, agente, período e estado de revisão. Detalhe mostra evidência permitida e proposta de texto. Ações revisar, descartar com motivo, preparar fonte. Métrica é ocorrência de evento de falta de conhecimento, sem equivaler a toda pergunta mal respondida. Classificação não confirmada recebe identificação de sugestão. Publicação segue fluxo normal de conhecimento.

### UI-14 — Contatos

**Rotas:** `/app/[orgSlug]/contacts`, `/app/[orgSlug]/contacts/[contactId]`. **Requisitos:** FR-021–022. **Permissões:** owner/admin/manager; operator acessa detalhe no escopo de sua conversa e lista apenas quando houver consulta segura por escopo.

Nome, email, telefone, canal e atualização; dados opcionais ocultos quando ausentes. Buscar somente capacidades homologadas ou índice local com cobertura. Sem botão criar contato avulso com base em endpoint inexistente. Detalhe traz dados editáveis, campos adicionais, etiquetas/notas locais P1 e links para conversas autorizadas. Exportação/exclusão não disponíveis ao operador. Histórico vazio difere de histórico oculto por permissão.

### UI-15 — Canais

**Rotas:** `/app/[orgSlug]/channels`, `/app/[orgSlug]/channels/[channelId]`. **Requisitos:** FR-023–025. **Permissões:** owner/admin configuram; manager visualiza.

Cards com nome, tipo, agente, estado reportado, horário da verificação e tarefa necessária. Conectar canal mostra catálogo real de capacidades: disponível, conexão assistida ou ainda indisponível. Cadastro: nome, tipo e agente; não marca conectado após criar registro. Detalhe: conexão, configuração, agente e teste. QR quando suportado tem estado aguardando/leitura confirmada/expirado; renovar reconsulta, sem capturar imagem em analytics. Campos de cada canal são renderizados por schema homologado. Segredos de conexão nunca são recuperados para browser.

### UI-16 — Widget do fornecedor

**Rota:** `/app/[orgSlug]/channels/[channelId]/widget`. **P1; requisitos:** FR-025. **Permissões:** owner/admin.

Mensagem inicial, sugestões, origens permitidas e cores suportadas. Preview distingue configuração rascunho e aplicada. Snippet/link só aparece após leitura confirmada. Interface não garante ausência de atribuição nem domínio próprio. Campo de origem valida URL e explica finalidade. Widget próprio é evolução P2 separada, sem confundir preview visual com implementação entregue.

### UI-17 — Relatórios

**Rotas:** `/app/[orgSlug]/reports`, `/reports/usage`, `/reports/transfers` sob a organização. **Requisitos:** FR-026–028. **Permissões:** owner/admin/manager/analyst; relatório de agente pode ter recorte para trainer sem contatos.

Período/fuso, agente, canal e granularidade. Volume por dia, estado de atendimento, transferências e duração; consumo por agente/dia/modelo. Tabela acessível acompanha gráfico. Tooltip explica fórmula e cobertura. `Encerrados sem transferência registrada` nunca vira `Resolvidos pela IA`. Exportação reproduz filtros e escopo. Créditos não recebem símbolo monetário; moeda só aparece com contrato/conversão explícitos e data. Não apresentar custo por chat como medida observada.

### UI-18 — Automações

**Rota:** `/app/[orgSlug]/agents/[agentId]/automations`. **P1; requisitos:** FR-030. **Permissões:** owner/admin e manager para regras operacionais homologadas.

Seções de inatividade e transferência, sem canvas genérico. Formulário oferece apenas gatilhos, intervalos, destinos e ações do contrato validado. Revisão em linguagem natural: condição → ação → destino. Detectar destino inválido e ciclo antes de publicar; edição pendente mostra regra efetiva anterior. Destino humano exige relação comprovada com usuário fornecedor; não preencher com membro local sem mapeamento.

### UI-19 — Ferramentas e integrações

**Rota:** `/app/[orgSlug]/agents/[agentId]/tools`. **P1; requisitos:** FR-031. **Permissões:** owner/admin.

Catálogo curado, nome, finalidade, status, permissões de execução e última verificação. Campos HTTP/MCP variam conforme integração aprovada. Segredos sempre mascarados e substituíveis; campos nunca devolvem valor original. Testar explicita efeitos e usa destino controlado. Ativar/desativar são ações explícitas: mesmo quando fornecedor usa GET, a interface nunca executa via link, preview ou prefetch. Erro não inclui token/payload sensível.

### UI-20 — Empresa, equipe e preferências

**Rotas:** `/app/[orgSlug]/settings`, `/settings/company`, `/settings/team`, `/settings/preferences`. **Requisitos:** FR-003, FR-032, FR-036. **Permissões:** owner/admin; preferências pessoais para cada usuário em `/account`.

Empresa: nome e fuso; marca do produto administrada pela plataforma, com personalização por cliente só se aprovada no escopo. Equipe: nome/email, papel, situação do convite e último acesso quando disponível. Ações convidar, reenviar convite invalidando anterior, alterar papel e suspender. Último owner protegido. Retenção e solicitações de dados mostram política vigente e fluxo assistido; usuário não recebe promessa de apagar backups instantaneamente. Transição de propriedade só owner com reautenticação e auditoria.

### UI-21 — Auditoria e plano

**Rotas:** `/app/[orgSlug]/settings/audit`, `/settings/plan`. **Requisitos:** FR-033, FR-037. **Permissões:** auditoria owner/admin; plano owner.

Auditoria filtra ator/ação/recurso/período e abre resultado/correlação sem segredos. Plano P0 pode ser resumo contratual/manual e contato de atendimento; pagamento/upgrade P2 não terá botão funcional antes da integração. Distinguir franquia vendida, créditos reportados e custo estimado; sem estoque de créditos inventado.

### UI-22 — Operação da plataforma

**Rotas:** `/ops`, `/ops/organizations`, `/ops/organizations/[organizationId]`, `/ops/jobs`, `/ops/events`. **Requisitos:** FR-004, FR-034–035. **Permissão:** somente platform_admin com proteção reforçada.

Fila de implantações, organizações, capacidade habilitada, vínculo workspace, saúde de credencial, atraso de sincronização, jobs falhos e eventos sem correlação. Reprocessar job exige distinguir ação idempotente de efeito externo ambíguo. Não há botão geral “reenviar tudo”. Troca de vínculo exige procedimento de migração, não simples edição do campo. Listagens redigem conteúdo. Acesso excepcional de suporte é temporário, justificado, com banner de contexto e trilha; não disponibilizar impersonação invisível.

## 4. Tokens provisórios e componentes

A especificação usa princípios da skill `design:design-system`: valores semânticos, componentes com estados completos, acessibilidade documentada e migração para mudanças incompatíveis. Stack de UI candidata: React/TypeScript, Tailwind, shadcn/ui sobre primitivas Radix, TanStack Query/Table, React Hook Form e Zod; a decisão final pertence ao documento de arquitetura. Essa composição não substitui testes de teclado nem define identidade visual.

### Tokens semânticos iniciais

| Categoria | Proposta provisória | Regra |
|---|---|---|
| Cor | `surface.canvas #F8FAFC`, `surface.panel #FFFFFF`, `text.primary #0F172A`, `text.muted #475569`, `border.default #CBD5E1` | Neutros funcionais, sem status de cor oficial. |
| Ação/foco | `action.primary #1D4ED8`, `action.foreground #FFFFFF`, `focus.ring #1D4ED8` | Azul provisório de usabilidade; substituível por token após ativos de marca. |
| Estado | `status.success #166534`, `warning #92400E`, `danger #B91C1C`, `info #1D4ED8` | Rótulo/ícone sempre acompanha cor; validar combinações efetivas. |
| Tipografia | System UI sans; 12, 14, 16, 20, 24, 32 px; pesos 400/500/600 | Corpo padrão 14–16 px, linha 1,45–1,6; números tabulares em métricas. |
| Espaço | 4, 8, 12, 16, 24, 32, 48 px | Token por escala; não adicionar valores arbitrários para cada tela. |
| Borda/raio | 1 px; raios 4/8/12 px; pill só badges | Foco 2 px com offset; grupos não dependem só de sombra. |
| Elevação | Nenhuma em tabelas; leve em menus/popovers; overlay em modal | Não usar cartões elevados para toda linha. |
| Movimento | 120/180/240 ms, easing discreto | Respeitar redução de movimento; sem animação de entrada em mensagens que mova leitura. |
| Layout | Sidebar 240–264 px, conteúdo com respiro 16–32 px | Breakpoints definidos pelo conteúdo, validação em 360/768/1280/1440 px. |

Modo claro inicialmente; dark mode P2 salvo demanda validada. Não entregar tema escuro parcialmente coberto. O produto usa pt-BR; identificadores de código/tokens/rotas em inglês. Textos vêm de catálogo central, sem concatenação frágil de sentenças.

### Contratos dos componentes essenciais

| Componente | API conceitual, variantes e estados | Acessibilidade/aceite |
|---|---|---|
| Button | `variant=primary/secondary/ghost/destructive`, `size`, `loading`, `disabled` | Nome acessível, alvo 44 px recomendado; loading preserva largura e informa andamento. |
| Field | `label`, `hint`, `error`, `required`, `readOnly` | Label ligado ao controle; erro por `aria-describedby`; não substituir label por placeholder. |
| Dialog/Sheet | Título, descrição, conteúdo e ação principal explícita | Foco preso e restaurado; Escape fecha se não houver operação que precisa continuar; não ocultar operação persistente ao fechar. |
| DataTable | Colunas, paginação, filtros, ordenação e estado de cobertura | HTML semântico; ordenação anunciada; virtualização só quando necessária e validada com leitor. |
| StatusBadge | Tipo, rótulo e descrição opcional | Nenhum estado expresso apenas por cor. Não usar “online” como sinônimo de dado recente. |
| SyncStatus | `confirmedAt`, `state`, `retry` | Horário acessível, aviso de desatualização e retry localizado. |
| AsyncAction | `idle/submitting/pending/succeeded/failed/unknown/conflict` | Texto corresponde ao resultado comprovado; unknown não oferece retry cego. |
| ConversationTimeline | Mensagens normalizadas, paginação e âncora de leitura | Novas mensagens anunciadas sem mover foco; remetente e horário legíveis. |
| MessageComposer | Rascunho, política de envio, anexos, controle confirmado | Atalhos explicados, IME respeitado, erro sem perda de texto. |
| MetricCard/Chart | Valor nullable, unidade, período, definição, cobertura | Ausente ≠ zero; gráfico com tabela textual; sem tooltip exclusivo por hover. |
| PermissionBoundary | Permissão explícita e recurso; fallback | Conveniência visual, nunca única autorização; servidor repete verificação. |
| Empty/ErrorState | Causa, ação permitida e correlação segura | Título descritivo, foco previsível, sem detalhe técnico de infraestrutura. |

Documentar cada componente com exemplo, variantes, loading/empty/error/disabled/focus e casos de teclado. Componentes do domínio vivem fora das primitivas genéricas. Stories/fixtures são sintéticos e rotulados; jamais usar dados reais de clientes no catálogo.

## 5. Conteúdo, teclado e qualidade visual

Vocabulário: Agente, Conhecimento, Fonte, Atendimento, Canal, Responsável, Aguardando confirmação. Evitar no fluxo do cliente: tenant, webhook, payload, BFF, worker, token e stack. Esses termos cabem no console técnico autorizado. Exemplos de mensagens: `Não foi possível atualizar agora. Exibindo dados confirmados às 14:32.`; `Você devolveu o atendimento à IA. Ela poderá responder à próxima mensagem do cliente.`; `O envio foi recebido. Estamos aguardando a confirmação do processamento.`

Regras de teclado: link pular navegação; ordem de foco visual; menus e tabs com setas conforme padrão da primitiva; Escape fecha overlay e restaura foco; nenhum atalho global intercepta digitação; comandos destrutivos nunca disparam por letra isolada. Ações em linhas possuem nome contextual acessível. Drag-and-drop tem alternativa por botão. Gráficos não são única forma de acessar dados.

Contraste deve ser verificado por par de tokens, inclusive disabled quando carregar informação necessária. Mensagens longas, nomes extensos, email e URLs não quebram layout. Testar zoom a 200% e reflow móvel, textos em português, foco sobre header fixo, erro por campo, comportamento offline e conexão intermitente. Fotos/avatares são opcionais; iniciais ou ícone neutro não inventam identidade.

## 6. Entregáveis e aceite de design

O agente de UX entrega fluxos e wireframes UI-01–UI-22, matriz papel/ação, estados por componente, versões desktop/mobile da jornada P0, catálogo de tokens e copy de erros. O agente de frontend transforma a especificação em componentes e páginas preservando contratos de interação. O agente de acessibilidade/QA valida a jornada completa e registra defeitos por ID UI/FR; o integrador confirma que dado visual corresponde à fonte real.

Antes do piloto: todas as telas P0 têm carregamento, vazio, erro, stale e pending verificáveis; nenhum botão demonstrativo parece funcional; zero hardcodes de métricas/dados de cliente; fluxos de assumir/enviar/devolver e adicionar/testar conhecimento operáveis só por teclado; mobile permite atender sem rolagem horizontal da página. Screenshots de aprovação devem usar dados sintéticos e indicar ambiente. A identidade definitiva pode substituir tokens, mas não precisa bloquear a homologação técnica da jornada.
