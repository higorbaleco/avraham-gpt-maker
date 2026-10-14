# Avraham Sales OS · Design System

Regras de comportamento e biblioteca de componentes do Sales OS, o SaaS de CRM, prospecção outbound, gestão de leads, listas, cadências, metas, atividades e dashboards da Avraham. O objetivo é que o usuário nunca precise aprender uma tela nova: filtrar, selecionar, abrir detalhes, editar, excluir e confirmar funcionam igual em todo o produto. Consistência vem antes de criatividade isolada.

## Fontes

- Anexo local `proposta-marcher-avraham-html/` (proposta comercial Avraham em HTML, 11 slides): fonte da paleta (ciano #0BBCA2, roxo #8B6FB0, coral #E85D5F, neutros quentes #FBFAF9 / #F7F6F5 / #E7E5E2 / #101114), da marca "A" em gradiente e da tipografia Plus Jakarta Sans.
- Skill de marca Avraham ("Astraeus Command"): tema escuro, ciano #00EED0, Space Grotesk, tokens de vidro, raios, movimento, regra de texto escuro sobre ciano, ícones Material Symbols, sem emoji nem travessão.
- Brief do usuário (25 regras de comportamento): transformado em `guidelines/padroes/`.
- Não existe código do Sales OS, Figma nem telas reais nas fontes. As telas do UI kit são composições dos componentes com dados fictícios e não replicam telas existentes.

## Decisões de herança

- Dois temas: escuro (padrão, Astraeus) e claro (`[data-theme="light"]`, neutros quentes da proposta). O ciano do tema claro vira #0BBCA2 como preenchimento e #067A69 como texto.
- Space Grotesk em toda a interface. Plus Jakarta Sans só para marca e display (capas, "Sales OS" grande).
- Raios: botões e campos 12px, cards 16px, badges 999px. Cards da proposta usam 16px; botões seguem a skill (12px).
- Cartões planos com borda de 1px; vidro (blur) não é usado em tabelas e cards de dados para manter leveza.
- Adição: âmbar #E8A33D para o estado "atenção", inexistente na paleta de marca.

## Conteúdo (CONTENT FUNDAMENTALS)

- Português do Brasil, linguagem de negócio, voz direta e neutra. Sem "eu"; fala-se do objeto ("12 leads foram qualificados.") ou ao usuário pelo imperativo ("Importar primeira base").
- Sentence case em títulos, botões e rótulos. Caixa alta só em rótulos de coluna e eyebrows (11px, espaçamento .08em).
- Botões: verbo + objeto, sem ponto. "Enviar para Pipeline", "Nova base", "Tentar novamente".
- Feedback com números: "9 oportunidades criadas. 3 já existiam." "Base removida."
- Vazio explica o que está vazio e a próxima ação: "Nenhuma base importada ainda." + [Importar primeira base]. Sem resultado é outra mensagem: "Nenhum resultado encontrado para estes filtros."
- Sem emoji, sem travessão em listas ou textos, sem jargão técnico ("Erro 500").
- Insight de gráfico em uma frase: "Quarta-feira concentra o maior volume de ligações."

## Fundamentos visuais (VISUAL FOUNDATIONS)

- **Cor**: escuro #131316 de fundo, superfícies #1A1B20 / #212228; claro #FBFAF9 de fundo, cards brancos. Acento ciano é sinal de ação e seleção, nunca decoração. Texto sobre ciano é sempre escuro. Semânticas: verde sucesso, âmbar atenção, coral erro, teal informação. Pipeline usa sequência de 7 passos de verde-água a verde.
- **Tipografia**: escala de produto 24 / 16 / 14 / 12 / 11 e KPI 32, números tabulares. Display 48 apenas em marca.
- **Espaçamento**: escala 4, 8, 12, 16, 20, 24, 32, 40, 48, 64. Aliases: card 20px, gap entre cards 16px, entre seções 24px, margem de página 32px (20px abaixo de 1280). Controle 40px (32px em tabelas), linha 48px (40px compacta).
- **Layout**: sidebar 240px (64px abaixo de 960); conteúdo até 1280px; telas amplas (tabelas, Kanban) até 1760px. Cabeçalho compacto com ação primária na linha do título.
- **Fundos**: sólidos. Sem imagens, texturas ou gradientes, exceto o gradiente da marca "A" (ciano para roxo) e área sob gráficos de área.
- **Bordas e sombras**: cards com borda de 1px (--line), sem sombra. Sombra só em menus, drawers, modais e toasts.
- **Hover/press**: hover com fundo translúcido (--surface-hover) ou ciano mais claro; press com ciano mais escuro e 1px para baixo. Foco: anel de 2px em ciano.
- **Movimento**: 120ms hover, 200ms menus e toasts, 300ms drawer e modal; easing cubic-bezier(.22,1,.36,1); sem animação decorativa; respeita prefers-reduced-motion.
- **Transparência e blur**: scrim translúcido atrás de modal e drawer; sem blur em dados.
- **Selo de seleção**: linha selecionada ganha fundo ciano suave e barra de 3px à esquerda; item de navegação ativo usa barra em pílula (marca da skill).

## Iconografia

Material Symbols Outlined, carregada do Google Fonts (CDN; nenhum arquivo de ícone foi fornecido nas fontes). Contornado por padrão, preenchido para item ativo e status. Um ícone por ação em todo o produto (mapa em `guidelines/foundations/icon-map.html`). Ícone sem texto sempre com Tooltip. Sem emoji nem unicode como ícone. Logo: a fonte traz apenas a marca "A" em gradiente desenhada em CSS (ciano para roxo, 28px, raio 8px); não há SVG de logo, então ela é reproduzida na Sidebar e na thumbnail. Substituir pelo logo oficial quando disponível.

## Índice

- `styles.css`: importa tokens e estilos de componentes.
- `tokens/`: `fonts.css`, `colors.css` (dois temas), `typography.css`, `spacing.css` (espaçamento, alturas, raios, layout, elevação, movimento), `base.css`.
- `components/components.css`: todas as classes `sx-*`.
- `guidelines/padroes/`: 19 cartões com as regras de comportamento (anatomia de página, ações, tabela, principal x secundária, KPI e gráficos, filtros, modal x drawer, feedback, estados, formulários, confirmações, navegação, densidade, responsivo, dashboard, textos, governança, acessibilidade).
- `guidelines/foundations/`: cores, tipografia, espaçamento, elevação e movimento, larguras, status e ícones.
- `ui_kits/sales-os/`: produto interativo (Dashboard, Execução, Bases, Leads, Pipeline).
- `SKILL.md`: uso como Agent Skill.

### Componentes

- **core**: Icon, Tooltip, Button, IconButton, Avatar, Dropdown, StatusBadge
- **forms**: Input, Select, Checkbox, SearchInput, DateRangeSelector
- **data**: DataTable, Pagination, BulkActionBar, FilterBar, KpiCard (também serve de MetricCard), ChartContainer, AreaChart, BarChart, FunnelChart
- **layout**: Breadcrumb, PageHeader, Sidebar, Tabs, EmptyState, Skeleton
- **overlay**: Modal, Drawer, ConfirmDialog, Toast
- **crm**: LeadCard, ActivityRow, PipelineCard

Adições intencionais ao inventário do brief: Icon (wrapper do conjunto de ícones), Button, IconButton, Input, Select, Checkbox, Tabs, Toast, Tooltip, Avatar, Skeleton, Breadcrumb, Sidebar e os três gráficos (AreaChart, BarChart, FunnelChart), necessários para compor as telas descritas. MetricCard foi fundido com KpiCard para evitar variações quase iguais.
