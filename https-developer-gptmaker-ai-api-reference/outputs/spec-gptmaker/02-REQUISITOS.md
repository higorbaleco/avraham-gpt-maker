# Requisitos do produto — painel próprio com GPT Maker

Versão proposta 1.0 · 10/10/2026 · Estado: especificação para desenvolvimento, sujeita aos gates de homologação. Nenhuma função foi testada em conta autenticada nesta etapa. Base: [análise](../ANALISE-GPTMAKER.md), [matriz documental](../MATRIZ-API.md) e [telas](03-TELAS-E-DESIGN.md). As prioridades abaixo são recomendação para o piloto, não acordos comerciais já confirmados.

## 1. Problema, resultado e escopo

Empresas precisam configurar e acompanhar atendimento com IA em uma experiência simples, visual e com nossa marca. Hoje a execução depende do GPT Maker e sua interface. O produto deve permitir que o cliente administre a operação cotidiana em nosso painel, preservando o GPT Maker como motor de agentes, conhecimento, canais e mensagens. Nossa plataforma controla organizações, acesso, atribuição, auditoria, experiência e indicadores derivados.

**Resultado do piloto:** uma empresa provisionada consegue configurar um agente, adicionar uma fonte processada, testar uma conversa, receber uma mensagem num canal homologado, assumir o atendimento, responder e devolver o controle à IA. Um segundo cliente executa o mesmo fluxo sem acessar dados do primeiro. Conexão inicial assistida é um resultado válido e explícito; autonomia completa do cadastro não é condição do piloto.

Prioridades: **P0** obrigatório para operar o piloto; **P1** expansão após estabilidade; **P2** evolução dependente de validação comercial, demanda ou novas integrações. Capacidade documentada é candidata à implementação, não promessa de disponibilidade. Feature flags por organização e canal liberam apenas capacidades homologadas.

Incluído no P0: login, organizações, RBAC, onboarding assistido, agente/configuração essencial, conhecimento textual e pelo menos um formato adicional homologado, teste, inbox textual, contatos básicos, estado de canais, atribuição e indicadores operacionais mínimos. Os quatro tipos de conhecimento devem ter contrato e desenho preparados; cada formato só se torna público após seu aceite específico.

Fora do piloto: aplicativo nativo, construtor visual de fluxos genéricos, marketplace público de ferramentas, CRM completo, campanhas WhatsApp oficiais, cobrança automática, criação automática de workspace, clonagem integral do painel original e treinamento de modelo fundacional. Não são requisitos implícitos por aparecerem na plataforma do fornecedor.

## 2. Pessoas e permissões

Papéis são vínculos por organização, não atributos globais de usuário. Uma pessoa pode ser `owner` em uma organização e `analyst` em outra. As permissões efetivas incluem pertencimento do recurso, papel e, no caso de operador, atribuição/fila. Não basta esconder botões.

| Papel | Responsabilidade e limite |
|---|---|
| `owner` | Responsável pela empresa, plano e propriedade. Todas as permissões da organização. Transferência de propriedade exige nova autenticação e destinatário já membro. Último owner não pode ser removido. |
| `admin` | Equipe, configurações, canais, agentes, auditoria e operação. Não transfere propriedade nem contrata plano sem delegação futura explícita. Não recebe token GPT Maker. |
| `manager` | Filas, redistribuição, supervisão de conversas e indicadores. Pode assumir conversas e configurar regras operacionais homologadas; não configura segredos, papéis ou ferramentas HTTP/MCP. |
| `trainer` | Comportamento, conhecimento e teste dos agentes. Não acessa conversas de produção ou contatos por padrão. Pode ver exemplos redigidos e autorizados de lacunas em P1. |
| `operator` | Conversas atribuídas e itens sem responsável das filas permitidas; contato relacionado; resposta e devolução à IA. Não lê todo o histórico da organização nem altera agentes. |
| `analyst` | Indicadores agregados e exportações agregadas. Sem transcrições, contatos identificáveis ou configurações sensíveis. |
| `platform_admin` | Operação da plataforma em `/ops`, provisionamento e saúde das integrações. Papel separado de memberships; não herda acesso irrestrito ao conteúdo das empresas. Acesso excepcional de suporte exige escopo, justificativa, expiração e auditoria. |

| Ação | Owner | Admin | Manager | Trainer | Operator | Analyst |
|---|---|---|---|---|---|---|
| Indicadores agregados | Sim | Sim | Sim | Agentes autorizados | Própria fila | Sim |
| Histórico de produção | Sim | Sim | Sim | Não | Escopo atribuído/fila | Não |
| Assumir/enviar/devolver | Sim | Sim | Sim | Não | Escopo atribuído/fila | Não |
| Redistribuir operador | Sim | Sim | Sim | Não | Não | Não |
| Criar/editar agente e conhecimento | Sim | Sim | Não | Sim | Não | Não |
| Ativar agente em canal de produção | Sim | Sim | Não | Não | Não | Não |
| Conectar/configurar canal | Sim | Sim | Leitura | Não | Estado da fila | Não |
| Ferramentas HTTP/MCP e segredos | Sim | Sim | Não | Não | Não | Não |
| Equipe, papel e auditoria completa | Sim | Sim | Não | Não | Não | Não |
| Plano, propriedade e exclusão da organização | Sim | Não | Não | Não | Não | Não |

A matriz é o padrão mínimo. Evitar editor arbitrário de permissões no piloto; agentes e filas podem ter escopo restrito, sempre por associação explícita e com negação por padrão.

## 3. Jornada e divisão de responsabilidades

1. Operação cadastra organização e owner; convite local expira e só pode ser usado uma vez.
2. Operação provisiona workspace no fornecedor, registra vínculo único e verifica leitura autenticada. A interface mantém `Aguardando configuração` até confirmação.
3. Owner/admin/trainer cria agente com nome, finalidade e instruções. Valores técnicos dependem das capacidades liberadas pela integração.
4. Pessoa autorizada adiciona conhecimento, aguarda processamento e testa com contexto isolado. Sucesso de envio não equivale a treinamento concluído.
5. Owner/admin escolhe canal homologado. Quando autorização não for coberta pela API, a etapa aparece como assistida e atribuída à operação.
6. Cliente envia uma mensagem real de teste; operador assume, responde e devolve. O teste é uma interação externa identificada, com destinatário controlado.
7. Organização entra em operação após checklist verificável, com responsável e data. Falha num passo mantém os anteriores e indica retomada.

| Autoridade | Dados e comportamento |
|---|---|
| GPT Maker | Configuração efetivamente aplicada, conhecimento processado, mensagens do canal, estado reportado de atendimento/canal, consumo reportado. |
| Nossa plataforma | Identidade, organizações, permissões, vínculo de recursos, filas/atribuição, rascunhos, solicitações, auditoria, marca, onboarding, indicadores derivados e retenção de nossas cópias. |
| Composto | Inbox, fontes, contatos e relatórios combinam registros locais com projeções do fornecedor. Sempre conservar origem e instante da última confirmação. |

## 4. Requisitos funcionais e critérios de aceite

`Dado / Quando / Então` representa cenário mínimo de aceite. Cada requisito exige também caso sem permissão e recurso de outra organização, quando aplicável. A equipe de qualidade detalhará fixtures e cobertura sem alterar semântica.

| ID / prioridade | Requisito / origem | Critério de aceite mínimo |
|---|---|---|
| FR-001 P0 | Login, logout, recuperação e sessão local. | Dado usuário válido, quando autentica, então acessa apenas suas organizações; quando sai ou tem sessão revogada, próximas requisições protegidas são recusadas. |
| FR-002 P0 | Seleção de organização e autorização por recurso. Local. | Dado usuário de A, quando solicita chat de B por ID ou URL, então não recebe conteúdo nem metadados de B. Trocar organização limpa cache e assinatura da anterior. |
| FR-003 P0 | Convites, seis papéis e suspensão de membro. Local. | Dado admin, quando altera papel ou suspende membro, então permissões anteriores deixam de valer em requisições subsequentes; convite vencido não cria vínculo. |
| FR-004 P0 | Provisionamento assistido e vínculo workspace/organização. Local + listagem GPT Maker. | Dado workspace ainda não associado, quando operação confirma vínculo e leitura, então onboarding avança; workspace já associado é rejeitado sem reassociação silenciosa. |
| FR-005 P0 | Checklist retomável do onboarding. Local + evidências GPT Maker. | Dado onboarding parcial, quando usuário retorna, então vê passos confirmados e pendências; agente criado sem treinamento concluído não marca conhecimento pronto. |
| FR-006 P0 | Listar e pesquisar agentes paginados. GPT Maker. | Dado mais de uma página, quando navega/filtro muda, então resultados pertencem à organização e não duplicam; ausência confirmada difere de falha de leitura. |
| FR-007 P0 | Criar/editar nome, finalidade, comportamento e configuração homologada. GPT Maker + rascunho local. | Dado trainer autorizado, quando salva versão válida, então UI mostra aplicação pendente até confirmação; erro mantém edição e explica retomada. |
| FR-008 P0 | Ativar/inativar agente e controlar impacto em canais. GPT Maker. | Dado admin e agente vinculado, quando solicita inativação, então confirma canais impactados; estado ativo só muda após confirmação. |
| FR-009 P0 | Laboratório de teste isolado por organização, agente e sessão. GPT Maker. | Dado teste novo, quando envia pergunta, então contexto não reutiliza chat de cliente; reset cria novo contexto e informa consumo de créditos. |
| FR-010 P0 | Fontes TEXT e fluxo comum dos quatro tipos. GPT Maker + local. | Dado fonte textual, quando enviada, então aparece recebida/processando/confirmada ou erro conforme evidência; HTTP 200 não vira pronta automaticamente. |
| FR-011 P0 condicional | DOCUMENT: upload local privado e URL temporária para ingestão. | Dado documento dentro de formato/tamanho homologado, quando upload e ingestão concluem, então fonte fica confirmada; URL expirada gera falha recuperável, sem expor arquivo de outro cliente. P0 de piloto depende de aprovação desta capacidade. |
| FR-012 P1 | WEBSITE e VIDEO; site com subpáginas/intervalo somente quando homologado. GPT Maker. | Dado URL compatível, quando fonte é criada, então rastreia processamento; URL não suportada é recusada antes de envio quando identificável. Não prometer rastreamento ilimitado. |
| FR-013 P0 | Editar TEXT; remover fonte com confirmação. GPT Maker. | Dado fonte textual, quando altera conteúdo, então versão aplicada é confirmada; fonte não textual não oferece edição de conteúdo inexistente na API. |
| FR-014 P1 | Substituir fonte não textual com controle de transição. Local + GPT Maker. | Dado substituição, quando nova fonte é confirmada, então operador pode remover a antiga; se coexistência não funcionar, explicita janela de indisponibilidade e exige confirmação. Não declarar substituição atômica. |
| FR-015 P0 | Inbox paginado, filtro por agente/canal/estado/responsável, histórico e contexto do contato. Composto. | Dado conversa autorizada, quando seleciona, então mostra histórico ordenado por regra homologada; paginação mantém posição e deduplica mensagens. Filtro local usa índice com cobertura informada. |
| FR-016 P0 | Fila e atribuição exclusiva local. Local. | Dado dois operadores assumindo simultaneamente, quando ambos confirmam, então só um obtém atribuição; outro recebe conflito e titular atual, sem sucesso aparente. |
| FR-017 P0 | Assumir controle humano e devolver à IA. GPT Maker + local. | Dado operador atribuído, quando assume/devolve, então estado visível aguarda confirmação remota; devolução informa que IA responderá na próxima interação, sem prometer resposta imediata. |
| FR-018 P0 | Enviar texto com identificação da tentativa e controle de ambiguidade. Composto. | Dado timeout após envio, quando resultado não é conhecido, então mensagem fica `Confirmação pendente`, sem reenvio automático; reconciliação confirma ou apresenta resolução manual segura. |
| FR-019 P1 | Enviar mídia homologada e responder mensagem específica. GPT Maker. | Dado mídia compatível, quando enviada, então identifica arquivo/tipo e tentativa; tipo indisponível no canal é bloqueado com explicação. |
| FR-020 P1 | Editar/excluir mensagem somente em canais suportados. GPT Maker. | Dado canal fora de Z-API/Telegram/Widget, quando abre ações, então não há promessa de edição/exclusão; nos suportados, ação só confirma resultado observado. |
| FR-021 P0 | Contatos: listar/consultar e editar dados básicos permitidos. GPT Maker. | Dado contato associado à conversa autorizada, quando operador salva nome/email/telefone válido, então confirma alteração; não há criação avulsa presumida. Campos ausentes não apagam dados existentes. |
| FR-022 P1 | Campos personalizados e etiquetas/notas locais com origem clara. Composto. | Dado admin cria campo compatível, quando contato é atualizado, então tipo é validado; nota interna nunca é enviada ao cliente nem ao motor como mensagem. |
| FR-023 P0 | Listar canais, vínculo ao agente e estado confirmado. GPT Maker. | Dado erro na leitura, quando canal era conectado, então mostra estado anterior como desatualizado; não converte falha em desconectado. |
| FR-024 P0 | Conexão e reconexão do canal piloto, assistida se necessário. Composto. | Dado canal homologado, quando fluxo encerra, então estado é relido e mensagem de teste prova operação; criação do registro não conclui conexão. QR só existe onde suportado. |
| FR-025 P1 | Configurações específicas de canal e widget do fornecedor. GPT Maker. | Dado tipo de canal, quando abre formulário, então só vê campos homologados; preview não afirma domínio próprio/remoção de marca sem contrato correspondente. |
| FR-026 P0 | Painel de volume, fila e saúde operacional. Composto. | Dado período e fuso, quando consulta, então métricas apresentam definição, atualização e cobertura; dados indisponíveis exibem indisponibilidade, não zero. |
| FR-027 P1 | Relatórios de transferências, duração e consumo. Composto. | Dado consumo agregado, quando calcula média, então rotula rateio como estimativa; encerramento sem transferência jamais é chamado automaticamente de resolução pela IA. |
| FR-028 P1 | Exportação agregada; exportação identificável apenas owner/admin/manager autorizado. Local/fornecedor homologado. | Dado exportação, quando gerada, então aplica mesmo escopo dos dados de tela, neutraliza fórmulas em CSV, expira download e registra auditoria. CSV/JSON do fornecedor exige validação real. |
| FR-029 P1 | Lacunas de conhecimento agrupadas e revisão pelo trainer. Eventos + local. | Dado evento validado e amostra redigida, quando trainer revisa, então pode criar proposta de conhecimento; nenhuma sugestão altera agente automaticamente. |
| FR-030 P1 | Regras de inatividade e transferência restritas ao contrato. GPT Maker. | Dado regra com destino válido, quando salva, então valida organização, precedência e ciclos; referência a usuário GPT Maker exige mapeamento comprovado, sem usar ID local arbitrário. |
| FR-031 P1 | Integrações HTTP/MCP de catálogo curado. GPT Maker + local. | Dado admin configura ferramenta aprovada, quando testa, então usa ambiente/destino controlado e segredos ficam mascarados; ativação exige confirmação explícita e auditoria. |
| FR-032 P0 | Configurações da organização, fuso, idioma inicial pt-BR e identificação visual provisória. Local. | Dado admin altera fuso, quando consulta período, então agrupamentos usam novo fuso e explicam a mudança; mudança de nome não altera automaticamente slug e links. |
| FR-033 P0 | Auditoria de ações sensíveis e atribuições. Local. | Dado alteração de papel, agente, canal ou controle humano, quando concluída/falha, então registra ator, organização, recurso, ação, correlação e resultado, sem segredo ou transcrição integral no log. |
| FR-034 P0 | Console `/ops`: onboarding, conexão, falhas e reconciliação. Local. | Dado platform_admin, quando opera cliente, então cada ação tem escopo explícito; por padrão console mostra metadados operacionais, sem transcrições. |
| FR-035 P0 | Eventos e sincronização refletidos na interface com horário da confirmação. Composto. | Dado evento duplicado ou fora de ordem, quando processado, então UI não duplica mensagem nem regride estado confirmado; evento sem origem confiável provoca releitura autenticada. |
| FR-036 P0 | Retenção, solicitação de exportação e exclusão assistida de dados. Local + procedimentos fornecedor. | Dado solicitação autorizada, quando processada, então relata separadamente remoção local, backups e fornecedor; nunca afirma apagar mensagens já entregues sem evidência. Políticas precisam estar definidas antes do piloto real. |
| FR-037 P2 | Plano e cobrança próprios. Local + integração comercial futura. | Dado contrato de plano definido, quando cobrança é liberada, então franquia e unidade são explícitas; não converte créditos em respostas por fator universal. |
| FR-038 P2 | Widget próprio e onboarding de canais ampliado. Local + GPT Maker. | Dado suporte técnico/comercial homologado, quando recurso é liberado, então passa matriz completa de segurança, conexão, acessibilidade e operação; permanece oculto antes do gate. |
| FR-039 P0 | Registro de capacidades por fornecedor/canal/organização. Local. | Dado capacidade não homologada, quando usuário solicita ação por UI ou API, então servidor bloqueia e interface oferece alternativa assistida se existente. |
| FR-040 P1 | Histórico de comportamento e comparação com auditoria local. GPT Maker + local. | Dado alteração externa detectada, quando trainer abre histórico, então distingue ator do fornecedor de usuário local; restauração é uma nova alteração confirmada, nunca sobrescrita silenciosa. |

## 5. Requisitos não funcionais

Valores abaixo são metas de produto propostas para benchmark e aceite, não SLAs anunciados pelo GPT Maker. A arquitetura pode ajustar orçamento mediante medida e justificativa registrada.

| ID | Requisito e evidência de aceite |
|---|---|
| NFR-001 | Isolamento obrigatório em banco, cache, arquivos, jobs e eventos. Testes negativos com duas organizações para cada superfície; zero leitura/escrita cruzada no conjunto de aceite. |
| NFR-002 | Segredos apenas no servidor; redigir logs e ferramentas de erro. Build do cliente, tráfego do browser e logs de teste sem token GPT Maker. URLs temporárias de arquivo não vão para analytics. |
| NFR-003 | Meta de disponibilidade própria 99,5% mensal no piloto monitorado; divulgar degradação do fornecedor separadamente. Não apresentar como SLA contratual antes de operação medida. |
| NFR-004 | Interface interativa até 3 s no percentil 75 em perfil móvel de teste definido; listagens locais paginadas até 1 s no p95 sob carga piloto. Latência GPT Maker é medida separadamente e exibe andamento. |
| NFR-005 | Recepção persistida do webhook até 2 s p95 em carga de referência; atualização do inbox até 5 s p95 após evento validado, em operação normal. Sem evento disponível, exibir frescor/reconciliação, sem alegar tempo real garantido. |
| NFR-006 | Baseline de carga proposta: 10 organizações, 50 operadores simultâneos, 20 mil mensagens/dia; QA registra distribuição/picos e revê metas antes da expansão. Não é limite fixo do produto. |
| NFR-007 | Acessibilidade: requisitos de teclado, foco, semântica, contraste e leitor de tela descritos em UI. Auditar jornada essencial com ferramenta automática e verificação manual; falhas bloqueadoras impedem piloto. |
| NFR-008 | Reprocessamento idempotente de eventos/jobs e nenhuma repetição cega de envio ambíguo. Testes injetam timeout, duplicação, atraso, evento fora de ordem e queda entre escrita/processamento. |
| NFR-009 | Datas persistidas em UTC, apresentadas no fuso da organização; números pt-BR, strings traduzíveis. Casos de virada de dia e períodos usam limite inclusivo no início e exclusivo no fim. |
| NFR-010 | Observabilidade por organização e correlação, sem conteúdo excessivo. Alertas para atraso de sync, jobs com erro, credencial inválida, fila parada e aumento de latência. |
| NFR-011 | Backup e restauração exercitados antes do piloto; metas propostas RPO 24 h e RTO 8 h para banco local. Reconstrução de projeções não substitui recuperação de atribuições/auditoria. |
| NFR-012 | Política de retenção configurada e documentada antes de dados reais, com subprocessadores e ciclo de arquivos. Decisão jurídica/comercial do controlador é pendência de lançamento, não valor inventado nesta spec. |

## 6. Métricas de sucesso e aceite de release

Metas propostas: 5/5 sessões de teste da jornada essencial concluídas sem intervenção de desenvolvedor; no mínimo 4/5 usuários representativos completam assumir/responder/devolver sem orientação; zero vazamento entre organizações; zero mensagem duplicada causada por retry na suíte de falhas; 100% das alterações críticas com auditoria e resultado correlacionável. Medir tempo de onboarding excluindo espera assistida e também tempo total, sem esconder dependências externas.

Indicadores: atendimentos iniciados por ID único e `startAt`; fila atual por estado confirmado; transferência registrada por presença de `transferAt`; duração até encerramento apenas com timestamps válidos; encerrados sem transferência como proxy operacional; créditos conforme fornecedor por agente/dia/modelo. Contar atendimentos e chats separadamente. Relatórios informam fuso, coorte, cobertura, filtros e instante de atualização. Satisfação e receita exigem coleta/integração própria e ficam fora de afirmações iniciais.

Gates obrigatórios: política comercial white-label esclarecida; credenciais de homologação; ao menos um canal operativo; formatos de conhecimento testados; semântica de controle humano confirmada; isolamento e concorrência aprovados; restauração exercitada; responsáveis por suporte e incidentes designados. Se um gate de canal falhar, é permitido lançar prova interna, mas não declarar piloto de atendimento real concluído.

## 7. Pendências que precisam de decisão

Nome, logotipo e ativos visuais; canal e público do piloto; limites/planos do fornecedor; direito comercial de marca própria e licenciamento de operadores; retenção e região exigida; volume real e horário de suporte; texto de consentimento quando aplicável; política de exportações e acesso excepcional de suporte. A implementação pode avançar em componentes, contratos e testes com dados sintéticos enquanto essas decisões são resolvidas.
