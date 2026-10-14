/* @ds-bundle: {"format":4,"namespace":"AvrahamSalesOSDesignSystem_fbc309","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Dropdown","sourcePath":"components/core/Dropdown.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"StatusBadge","sourcePath":"components/core/StatusBadge.jsx"},{"name":"Tooltip","sourcePath":"components/core/Tooltip.jsx"},{"name":"ActivityRow","sourcePath":"components/crm/ActivityRow.jsx"},{"name":"LeadCard","sourcePath":"components/crm/LeadCard.jsx"},{"name":"PipelineCard","sourcePath":"components/crm/PipelineCard.jsx"},{"name":"AreaChart","sourcePath":"components/data/AreaChart.jsx"},{"name":"BarChart","sourcePath":"components/data/BarChart.jsx"},{"name":"BulkActionBar","sourcePath":"components/data/BulkActionBar.jsx"},{"name":"ChartContainer","sourcePath":"components/data/ChartContainer.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"FilterBar","sourcePath":"components/data/FilterBar.jsx"},{"name":"FunnelChart","sourcePath":"components/data/FunnelChart.jsx"},{"name":"KpiCard","sourcePath":"components/data/KpiCard.jsx"},{"name":"Pagination","sourcePath":"components/data/Pagination.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"DateRangeSelector","sourcePath":"components/forms/DateRangeSelector.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Breadcrumb","sourcePath":"components/layout/Breadcrumb.jsx"},{"name":"EmptyState","sourcePath":"components/layout/EmptyState.jsx"},{"name":"PageHeader","sourcePath":"components/layout/PageHeader.jsx"},{"name":"Sidebar","sourcePath":"components/layout/Sidebar.jsx"},{"name":"Skeleton","sourcePath":"components/layout/Skeleton.jsx"},{"name":"Tabs","sourcePath":"components/layout/Tabs.jsx"},{"name":"ConfirmDialog","sourcePath":"components/overlay/ConfirmDialog.jsx"},{"name":"Drawer","sourcePath":"components/overlay/Drawer.jsx"},{"name":"Modal","sourcePath":"components/overlay/Modal.jsx"},{"name":"Toast","sourcePath":"components/overlay/Toast.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"f8c7eb64f6bd","components/core/Button.jsx":"e6c6ac299a7c","components/core/Dropdown.jsx":"7fd044d56e7d","components/core/Icon.jsx":"81014c5a50e9","components/core/IconButton.jsx":"4ecfb5753d71","components/core/StatusBadge.jsx":"2d0ee8f9071e","components/core/Tooltip.jsx":"ce264c9eef07","components/crm/ActivityRow.jsx":"a2bb586cec39","components/crm/LeadCard.jsx":"3ddcab63886b","components/crm/PipelineCard.jsx":"964756328e22","components/data/AreaChart.jsx":"0b8eb9734956","components/data/BarChart.jsx":"a783608ae383","components/data/BulkActionBar.jsx":"b5e8c9bbe02d","components/data/ChartContainer.jsx":"b7d93c7a04fa","components/data/DataTable.jsx":"c4de3a7431ea","components/data/FilterBar.jsx":"f6f26ee339ef","components/data/FunnelChart.jsx":"d11708203511","components/data/KpiCard.jsx":"7983bf6ce3d4","components/data/Pagination.jsx":"a9ea20228531","components/forms/Checkbox.jsx":"1d574f6b0acb","components/forms/DateRangeSelector.jsx":"0e67a2b0df1e","components/forms/Input.jsx":"d5f9bbf926fe","components/forms/SearchInput.jsx":"a510f0e9eb0e","components/forms/Select.jsx":"c89791ab6f25","components/layout/Breadcrumb.jsx":"8b4349c9d567","components/layout/EmptyState.jsx":"074fb768e953","components/layout/PageHeader.jsx":"2216382b48ff","components/layout/Sidebar.jsx":"ebd86afe3f6e","components/layout/Skeleton.jsx":"1da8111587c6","components/layout/Tabs.jsx":"c6eddabf9a99","components/overlay/ConfirmDialog.jsx":"2c7adf2f8ce3","components/overlay/Drawer.jsx":"dbdbce8f554e","components/overlay/Modal.jsx":"9364dc7ef3e8","components/overlay/Toast.jsx":"adf0f4896c9f","design_handoff_sales_os/salesos/bases.js":"b4ab208a6bb1","design_handoff_sales_os/salesos/icons.js":"4f1716f07435","design_handoff_sales_os/salesos/metas.js":"35674879f659","design_handoff_sales_os/salesos/pages1.js":"16f32315f647","design_handoff_sales_os/salesos/pages2.js":"66dbe45ff267","design_handoff_sales_os/salesos/pages3.js":"efceef1f0c66","design_handoff_sales_os/salesos/pages4.js":"a4203198a27a","design_handoff_sales_os/salesos/pages5.js":"6c1849ada6c8","design_handoff_sales_os/salesos/ui.js":"aea242155159","salesos/bases.js":"b4ab208a6bb1","salesos/icons.js":"4f1716f07435","salesos/metas.js":"35674879f659","salesos/pages1.js":"16f32315f647","salesos/pages2.js":"66dbe45ff267","salesos/pages3.js":"efceef1f0c66","salesos/pages4.js":"a4203198a27a","salesos/pages5.js":"6c1849ada6c8","salesos/ui.js":"aea242155159","ui_kits/sales-os/App.jsx":"cc6e87eeed52","ui_kits/sales-os/BasesScreen.jsx":"583582fbbbb2","ui_kits/sales-os/DashboardScreen.jsx":"b58272e48711","ui_kits/sales-os/ExecutionScreen.jsx":"b3b1adc842c4","ui_kits/sales-os/LeadsScreen.jsx":"c0103db9618c","ui_kits/sales-os/PipelineScreen.jsx":"c0ea152670bf","ui_kits/sales-os/data.js":"fe149681f9fb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AvrahamSalesOSDesignSystem_fbc309 = window.AvrahamSalesOSDesignSystem_fbc309 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function Avatar({
  name = '',
  size = 'md'
}) {
  const p = name.trim().split(/\s+/);
  const ini = ((p[0] || '')[0] || '') + (p.length > 1 ? p[p.length - 1][0] : '');
  return /*#__PURE__*/React.createElement("span", {
    className: "sx-avatar",
    "data-size": size === 'md' ? undefined : size,
    title: name,
    "aria-label": name
  }, ini.toUpperCase());
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function Icon({
  name,
  size = 20,
  fill = false,
  label,
  style,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'sx-icon ' + className,
    "data-size": size === 20 ? undefined : String(size),
    "data-fill": fill ? '1' : undefined,
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: style
  }, name);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'secondary',
  size = 'md',
  icon,
  iconRight,
  loading = false,
  disabled = false,
  type = 'button',
  children,
  ...rest
}) {
  const s = size === 'sm' ? 16 : 20;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: "sx-btn",
    "data-variant": variant,
    "data-size": size === 'sm' ? 'sm' : undefined,
    "data-loading": loading || undefined,
    "aria-busy": loading || undefined,
    disabled: disabled
  }, rest), loading ? /*#__PURE__*/React.createElement("span", {
    className: "sx-spinner"
  }) : icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Dropdown.jsx
try { (() => {
const {
  useState,
  useRef,
  useEffect
} = React;
function Dropdown({
  trigger,
  items = [],
  onSelect,
  align = 'left',
  keepOpen = false
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const away = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const esc = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', away);
    document.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('mousedown', away);
      document.removeEventListener('keydown', esc);
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("span", {
    className: "sx-pop",
    ref: ref
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(!open),
    "aria-haspopup": "menu",
    "aria-expanded": open
  }, trigger), open ? /*#__PURE__*/React.createElement("div", {
    className: "sx-menu",
    role: "menu",
    "data-align": align === 'right' ? 'right' : undefined
  }, items.map((it, i) => it.separator ? /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "sx-menu__sep"
  }) : it.title ? /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "sx-menu__title sx-eyebrow"
  }, it.title) : /*#__PURE__*/React.createElement("button", {
    key: it.id || i,
    type: "button",
    role: "menuitem",
    className: "sx-menu__item",
    "data-danger": it.danger || undefined,
    "data-selected": it.selected || undefined,
    disabled: it.disabled,
    onClick: () => {
      onSelect && onSelect(it);
      if (!keepOpen) setOpen(false);
    }
  }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon
  }) : null, /*#__PURE__*/React.createElement("span", {
    className: "sx-menu__item-label"
  }, it.label), it.selected ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16
  }) : null))) : null);
}
Object.assign(__ds_scope, { Dropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Dropdown.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusBadge.jsx
try { (() => {
const MAP = {
  "qualificacao": {
    "Não analisado": ["neutral", "help"],
    "Qualificado": ["green", "verified"],
    "Descartado": ["muted", "block"]
  },
  "contato": {
    "Não abordado": ["neutral", "radio_button_unchecked"],
    "Tentando contato": ["amber", "phone_in_talk"],
    "Contato realizado": ["teal", "call"],
    "Agendamento realizado": ["cyan", "event_available"]
  },
  "sistema": {
    "Sucesso": ["green", "check_circle"],
    "Atenção": ["amber", "warning"],
    "Erro": ["coral", "error"],
    "Informação": ["teal", "info"]
  }
};
const STAGES = ['Tentativas', 'Contato', 'Agendamento', 'Reunião', 'Proposta', 'Negociação', 'Ganho'];
function StatusBadge({
  kind,
  value
}) {
  if (kind === 'pipeline') {
    const n = STAGES.indexOf(value) + 1;
    return /*#__PURE__*/React.createElement("span", {
      className: "sx-badge",
      "data-kind": "stage",
      "data-step": n || undefined
    }, /*#__PURE__*/React.createElement("span", {
      className: "sx-badge__step",
      "data-step": n || undefined
    }, n || '?'), value);
  }
  const hit = (MAP[kind] || {})[value] || ['neutral', 'help'];
  return /*#__PURE__*/React.createElement("span", {
    className: "sx-badge",
    "data-tone": hit[0],
    "data-struck": value === 'Descartado' || undefined
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: hit[1],
    fill: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "sx-badge__label"
  }, value));
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "sx-tip"
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    className: "sx-tip__bubble"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  size = 'md',
  active = false,
  danger = false,
  disabled = false,
  onClick,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Tooltip, {
    label: label
  }, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: "sx-iconbtn",
    "aria-label": label,
    "data-size": size === 'sm' ? 'sm' : undefined,
    "data-active": active || undefined,
    "data-danger": danger || undefined,
    disabled: disabled,
    onClick: onClick
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 20 : 20
  })));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/crm/ActivityRow.jsx
try { (() => {
const TYPES = {
  ligacao: ['call', 'Ligação'],
  whatsapp: ['chat', 'WhatsApp'],
  email: ['mail', 'E-mail'],
  reuniao: ['groups', 'Reunião'],
  tarefa: ['task_alt', 'Tarefa']
};
function ActivityRow({
  activity,
  onComplete,
  onOpen
}) {
  const t = TYPES[activity.type] || TYPES.tarefa;
  return /*#__PURE__*/React.createElement("div", {
    className: "sx-act",
    "data-done": activity.done || undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "sx-act__type",
    title: t[1]
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t[0]
  })), /*#__PURE__*/React.createElement("div", {
    className: "sx-cell-stack",
    style: {
      flex: 1,
      cursor: onOpen ? 'pointer' : undefined
    },
    onClick: onOpen
  }, /*#__PURE__*/React.createElement("div", {
    className: "sx-cell-main"
  }, activity.title), /*#__PURE__*/React.createElement("div", {
    className: "sx-cell-sub"
  }, activity.lead, activity.note ? ' · ' + activity.note : '')), activity.contato ? /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    kind: "contato",
    value: activity.contato
  }) : null, /*#__PURE__*/React.createElement("span", {
    className: "sx-act__time",
    "data-late": activity.late || undefined
  }, activity.time), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: activity.done ? 'undo' : 'check',
    label: activity.done ? 'Reabrir' : 'Concluir',
    size: "sm",
    onClick: onComplete
  }));
}
Object.assign(__ds_scope, { ActivityRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/crm/ActivityRow.jsx", error: String((e && e.message) || e) }); }

// components/crm/PipelineCard.jsx
try { (() => {
const brl = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0
});
function PipelineCard({
  deal,
  dragging = false,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "sx-pcard",
    "data-dragging": dragging || undefined,
    "data-stalled": deal.stalled || undefined,
    onClick: onOpen
  }, /*#__PURE__*/React.createElement("div", {
    className: "sx-pcard__row"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sx-cell-main"
  }, deal.empresa), /*#__PURE__*/React.createElement("div", {
    className: "sx-cell-sub"
  }, deal.produto)), /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: deal.owner,
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sx-pcard__value"
  }, brl.format(deal.valor)), /*#__PURE__*/React.createElement("div", {
    className: "sx-pcard__foot"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "event"
  }), deal.previsao), /*#__PURE__*/React.createElement("span", {
    style: deal.stalled ? {
      color: 'var(--warning-fg)',
      fontWeight: 600
    } : undefined
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: deal.stalled ? 'schedule' : 'hourglass_empty'
  }), deal.dias, " ", deal.dias === 1 ? 'dia' : 'dias', " na etapa")));
}
Object.assign(__ds_scope, { PipelineCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/crm/PipelineCard.jsx", error: String((e && e.message) || e) }); }

// components/data/AreaChart.jsx
try { (() => {
function AreaChart({
  data = [],
  compare,
  highlightIndex,
  format = v => String(v),
  height = 200
}) {
  const W = 640,
    H = height,
    L = 8,
    R = 8,
    T = 24,
    B = 24;
  const all = data.map(d => d.value).concat((compare || []).map(d => d.value));
  const max = Math.max(1, ...all) * 1.15;
  const x = i => L + i * (W - L - R) / Math.max(1, data.length - 1);
  const y = v => T + (1 - v / max) * (H - T - B);
  const line = arr => arr.map((d, i) => (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(d.value).toFixed(1)).join(' ');
  const hi = highlightIndex;
  return /*#__PURE__*/React.createElement("svg", {
    className: "sx-chart-svg",
    viewBox: '0 0 ' + W + ' ' + H,
    width: "100%",
    role: "img",
    "aria-label": "Gr\xE1fico de \xE1rea"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "sxArea",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "var(--accent)",
    stopOpacity: ".22"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "var(--accent)",
    stopOpacity: "0"
  }))), [0, 1, 2, 3].map(g => /*#__PURE__*/React.createElement("line", {
    key: g,
    className: "sx-grid",
    x1: L,
    x2: W - R,
    y1: T + g * (H - T - B) / 3,
    y2: T + g * (H - T - B) / 3
  })), compare ? /*#__PURE__*/React.createElement("path", {
    d: line(compare),
    fill: "none",
    stroke: "var(--t4)",
    strokeWidth: "1.5",
    strokeDasharray: "4 4"
  }) : null, /*#__PURE__*/React.createElement("path", {
    d: line(data) + ' L' + x(data.length - 1) + ' ' + (H - B) + ' L' + x(0) + ' ' + (H - B) + ' Z',
    fill: "url(#sxArea)"
  }), /*#__PURE__*/React.createElement("path", {
    d: line(data),
    fill: "none",
    stroke: "var(--accent)",
    strokeWidth: "2",
    strokeLinejoin: "round"
  }), data.map((d, i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: x(i),
    y: H - 6,
    textAnchor: i === 0 ? 'start' : i === data.length - 1 ? 'end' : 'middle'
  }, d.label)), hi !== undefined && data[hi] ? /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: x(hi),
    x2: x(hi),
    y1: y(data[hi].value),
    y2: H - B,
    stroke: "var(--accent)",
    strokeDasharray: "3 3",
    opacity: ".5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x(hi),
    cy: y(data[hi].value),
    r: "5",
    fill: "var(--bg)",
    stroke: "var(--accent)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("text", {
    x: x(hi),
    y: y(data[hi].value) - 12,
    textAnchor: "middle",
    style: {
      fill: 'var(--t1)',
      fontWeight: 700,
      fontSize: 12
    }
  }, format(data[hi].value))) : null);
}
Object.assign(__ds_scope, { AreaChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/AreaChart.jsx", error: String((e && e.message) || e) }); }

// components/data/BarChart.jsx
try { (() => {
function BarChart({
  data = [],
  highlightIndex,
  format = v => String(v),
  height = 200
}) {
  const W = 640,
    H = height,
    T = 24,
    B = 24,
    gap = 12;
  const max = Math.max(1, ...data.map(d => d.value)) * 1.15;
  const bw = (W - gap * (data.length + 1)) / data.length;
  return /*#__PURE__*/React.createElement("svg", {
    className: "sx-chart-svg",
    viewBox: '0 0 ' + W + ' ' + H,
    width: "100%",
    role: "img",
    "aria-label": "Gr\xE1fico de barras"
  }, [0, 1, 2, 3].map(g => /*#__PURE__*/React.createElement("line", {
    key: g,
    className: "sx-grid",
    x1: "0",
    x2: W,
    y1: T + g * (H - T - B) / 3,
    y2: T + g * (H - T - B) / 3
  })), data.map((d, i) => {
    const h = d.value / max * (H - T - B),
      x = gap + i * (bw + gap),
      hi = i === highlightIndex;
    return /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("rect", {
      x: x,
      y: H - B - h,
      width: bw,
      height: h,
      rx: "6",
      fill: hi ? 'var(--accent)' : 'var(--t4)'
    }), hi ? /*#__PURE__*/React.createElement("text", {
      x: x + bw / 2,
      y: H - B - h - 8,
      textAnchor: "middle",
      style: {
        fill: 'var(--t1)',
        fontWeight: 700,
        fontSize: 12
      }
    }, format(d.value)) : null, /*#__PURE__*/React.createElement("text", {
      x: x + bw / 2,
      y: H - 6,
      textAnchor: "middle"
    }, d.label));
  }));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/data/BulkActionBar.jsx
try { (() => {
function BulkActionBar({
  count = 0,
  noun = 'selecionados',
  nounSingular = 'selecionado',
  actions = [],
  onAction,
  onClear
}) {
  if (!count) return null;
  const normal = actions.filter(a => !a.danger),
    danger = actions.filter(a => a.danger);
  return /*#__PURE__*/React.createElement("div", {
    className: "sx-bulk",
    role: "toolbar",
    "aria-label": "A\xE7\xF5es em massa"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sx-bulk__count"
  }, count, " ", count === 1 ? nounSingular : noun), /*#__PURE__*/React.createElement("span", {
    className: "sx-bulk__sep"
  }), normal.map(a => /*#__PURE__*/React.createElement(__ds_scope.Button, {
    key: a.id,
    size: "sm",
    variant: "secondary",
    icon: a.icon,
    onClick: () => onAction && onAction(a)
  }, a.label)), danger.length ? /*#__PURE__*/React.createElement("span", {
    className: "sx-bulk__sep"
  }) : null, danger.map(a => /*#__PURE__*/React.createElement(__ds_scope.Button, {
    key: a.id,
    size: "sm",
    variant: "danger",
    icon: a.icon,
    onClick: () => onAction && onAction(a)
  }, a.label)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "ghost",
    onClick: onClear
  }, "Limpar sele\xE7\xE3o"));
}
Object.assign(__ds_scope, { BulkActionBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BulkActionBar.jsx", error: String((e && e.message) || e) }); }

// components/data/ChartContainer.jsx
try { (() => {
function ChartContainer({
  title,
  subtitle,
  legend = [],
  insight,
  actions,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "sx-chart"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sx-chart__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "sx-chart__title"
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    className: "sx-chart__sub"
  }, subtitle) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, legend.length ? /*#__PURE__*/React.createElement("div", {
    className: "sx-legend"
  }, legend.map(l => /*#__PURE__*/React.createElement("span", {
    key: l.label
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      background: l.color
    }
  }), l.label))) : null, actions)), children, insight ? /*#__PURE__*/React.createElement("div", {
    className: "sx-chart__insight"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "lightbulb"
  }), insight) : null);
}
Object.assign(__ds_scope, { ChartContainer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ChartContainer.jsx", error: String((e && e.message) || e) }); }

// components/data/FunnelChart.jsx
try { (() => {
const nf = new Intl.NumberFormat('pt-BR');
const COLORS = ['var(--step-1)', 'var(--step-2)', 'var(--step-3)', 'var(--step-4)', 'var(--step-5)', 'var(--step-6)', 'var(--step-7)'];
function FunnelChart({
  stages = []
}) {
  const top = stages[0] && stages[0].value || 1;
  return /*#__PURE__*/React.createElement("div", {
    className: "sx-funnel",
    role: "list"
  }, stages.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    className: "sx-funnel__row",
    role: "listitem"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--t2)'
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    className: "sx-funnel__bar"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: Math.max(2, s.value / top * 100) + '%',
      background: s.color || COLORS[i % 7]
    }
  })), /*#__PURE__*/React.createElement("b", null, nf.format(s.value)), /*#__PURE__*/React.createElement("span", null, i === 0 ? '100%' : Math.round(s.value / top * 100) + '%'))));
}
Object.assign(__ds_scope, { FunnelChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/FunnelChart.jsx", error: String((e && e.message) || e) }); }

// components/data/KpiCard.jsx
try { (() => {
function KpiCard({
  label,
  value,
  context,
  trend,
  progress,
  onClick
}) {
  const Tag = onClick ? 'button' : 'div';
  const dir = trend && trend.dir;
  return /*#__PURE__*/React.createElement(Tag, {
    className: "sx-kpi",
    onClick: onClick,
    style: onClick ? {
      cursor: 'pointer',
      textAlign: 'left',
      font: 'inherit',
      color: 'inherit'
    } : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "sx-kpi__label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "sx-kpi__value"
  }, value), typeof progress === 'number' ? /*#__PURE__*/React.createElement("div", {
    className: "sx-progress",
    role: "progressbar",
    "aria-valuenow": progress,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: Math.min(100, progress) + '%'
    }
  })) : null, context || trend ? /*#__PURE__*/React.createElement("div", {
    className: "sx-kpi__ctx"
  }, trend ? /*#__PURE__*/React.createElement("span", {
    className: "sx-trend",
    "data-dir": dir
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: dir === 'up' ? 'trending_up' : dir === 'down' ? 'trending_down' : 'trending_flat'
  }), trend.value) : null, context ? /*#__PURE__*/React.createElement("span", null, context) : null) : null);
}
Object.assign(__ds_scope, { KpiCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KpiCard.jsx", error: String((e && e.message) || e) }); }

// components/data/Pagination.jsx
try { (() => {
const nf = new Intl.NumberFormat('pt-BR');
function pages(page, last) {
  const s = new Set([1, last, page - 1, page, page + 1]);
  const a = [...s].filter(n => n >= 1 && n <= last).sort((x, y) => x - y);
  const out = [];
  a.forEach((n, i) => {
    if (i && n - a[i - 1] > 1) out.push('…' + n);
    out.push(n);
  });
  return out;
}
function Pagination({
  page = 1,
  pageSize = 25,
  total = 0,
  pageSizeOptions = [10, 25, 50, 100],
  onPageChange,
  onPageSizeChange
}) {
  const last = Math.max(1, Math.ceil(total / pageSize));
  const from = total ? (page - 1) * pageSize + 1 : 0,
    to = Math.min(total, page * pageSize);
  const go = n => onPageChange && onPageChange(n);
  return /*#__PURE__*/React.createElement("nav", {
    className: "sx-pager",
    "aria-label": "Pagina\xE7\xE3o"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sx-pager__side"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sx-num"
  }, nf.format(from), " a ", nf.format(to), " de ", nf.format(total)), /*#__PURE__*/React.createElement("label", {
    className: "sx-pager__side"
  }, "Por p\xE1gina", /*#__PURE__*/React.createElement("span", {
    className: "sx-select-wrap"
  }, /*#__PURE__*/React.createElement("select", {
    className: "sx-input",
    "data-size": "sm",
    style: {
      width: 76
    },
    value: pageSize,
    onChange: e => onPageSizeChange && onPageSizeChange(Number(e.target.value))
  }, pageSizeOptions.map(n => /*#__PURE__*/React.createElement("option", {
    key: n,
    value: n
  }, n))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "expand_more",
    size: 16
  })))), /*#__PURE__*/React.createElement("div", {
    className: "sx-pager__pages"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sx-page-btn",
    "aria-label": "P\xE1gina anterior",
    disabled: page <= 1,
    onClick: () => go(page - 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron_left",
    size: 20
  })), pages(page, last).map(n => typeof n === 'string' ? /*#__PURE__*/React.createElement("span", {
    key: n,
    className: "sx-page-btn",
    style: {
      display: 'inline-grid',
      placeContent: 'center'
    }
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: n,
    type: "button",
    className: "sx-page-btn",
    "aria-current": n === page ? 'page' : undefined,
    onClick: () => go(n)
  }, n)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sx-page-btn",
    "aria-label": "Pr\xF3xima p\xE1gina",
    disabled: page >= last,
    onClick: () => go(page + 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron_right",
    size: 20
  }))));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
const {
  useRef,
  useEffect
} = React;
function Checkbox({
  label,
  checked = false,
  indeterminate = false,
  disabled = false,
  onChange,
  ariaLabel
}) {
  const r = useRef(null);
  useEffect(() => {
    if (r.current) r.current.indeterminate = !!indeterminate;
  }, [indeterminate]);
  return /*#__PURE__*/React.createElement("label", {
    className: "sx-check"
  }, /*#__PURE__*/React.createElement("input", {
    ref: r,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    "aria-label": label ? undefined : ariaLabel,
    onChange: e => onChange && onChange(e.target.checked),
    onClick: e => e.stopPropagation()
  }), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/crm/LeadCard.jsx
try { (() => {
function LeadCard({
  lead,
  selectable = false,
  selected = false,
  onSelect,
  onOpen,
  actions
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "sx-lead",
    "data-selected": selected || undefined
  }, selectable ? /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    ariaLabel: 'Selecionar ' + lead.fantasia,
    checked: selected,
    onChange: onSelect
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: "sx-lead__body",
    style: {
      cursor: onOpen ? 'pointer' : undefined
    },
    onClick: onOpen
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sx-cell-main"
  }, lead.fantasia), /*#__PURE__*/React.createElement("div", {
    className: "sx-cell-sub"
  }, lead.razao)), /*#__PURE__*/React.createElement("div", {
    className: "sx-lead__badges"
  }, /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    kind: "qualificacao",
    value: lead.qualificacao
  }), /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    kind: "contato",
    value: lead.contato
  })), /*#__PURE__*/React.createElement("div", {
    className: "sx-lead__meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "storefront"
  }), lead.segmento), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "location_on"
  }), lead.cidade), lead.telefone ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "call"
  }), lead.telefone) : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, actions, lead.owner ? /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: lead.owner,
    size: "sm"
  }) : null));
}
Object.assign(__ds_scope, { LeadCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/crm/LeadCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/DateRangeSelector.jsx
try { (() => {
const {
  useState
} = React;
const PRESETS = [{
  id: 'today',
  label: 'Hoje',
  days: 0
}, {
  id: 'yesterday',
  label: 'Ontem',
  days: 1,
  single: true
}, {
  id: '7d',
  label: 'Últimos 7 dias',
  days: 6
}, {
  id: '30d',
  label: 'Últimos 30 dias',
  days: 29
}, {
  id: 'month',
  label: 'Este mês',
  month: 0
}, {
  id: 'lastmonth',
  label: 'Mês anterior',
  month: -1
}];
const fmt = d => d.toLocaleDateString('pt-BR', {
  day: '2-digit',
  month: 'short'
}).replace('.', '');
function range(p, today) {
  const e = new Date(today),
    s = new Date(today);
  if (p.month !== undefined) {
    s.setMonth(today.getMonth() + p.month, 1);
    e.setMonth(today.getMonth() + p.month + 1, 0);
    if (p.month === 0) e.setTime(today.getTime());
  } else if (p.single) {
    s.setDate(today.getDate() - 1);
    e.setDate(today.getDate() - 1);
  } else s.setDate(today.getDate() - p.days);
  return [s, e];
}
function DateRangeSelector({
  value = '30d',
  onChange,
  today
}) {
  const t = today || new Date();
  const cur = PRESETS.find(p => p.id === value) || PRESETS[3];
  const [s, e] = range(cur, t);
  const text = fmt(s) === fmt(e) ? fmt(s) : fmt(s) + ' a ' + fmt(e);
  return /*#__PURE__*/React.createElement(__ds_scope.Dropdown, {
    items: PRESETS.map(p => ({
      id: p.id,
      label: p.label,
      selected: p.id === value
    })),
    onSelect: it => onChange && onChange(it.id, it.label),
    trigger: /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "sx-period"
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "calendar_today",
      size: 16
    }), cur.label, /*#__PURE__*/React.createElement("small", null, text), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "expand_more",
      size: 16
    }))
  });
}
Object.assign(__ds_scope, { DateRangeSelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/DateRangeSelector.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useId
} = React;
function Input({
  label,
  required = false,
  optional = false,
  hint,
  error,
  success,
  warning,
  multiline = false,
  size = 'md',
  ...rest
}) {
  const id = useId();
  const state = error ? 'error' : warning ? 'warning' : success ? 'success' : undefined;
  const msg = error || warning || success;
  const El = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    className: "sx-field"
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "sx-field__label",
    htmlFor: id
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "sx-field__req",
    "aria-hidden": "true"
  }, "*") : null, optional ? /*#__PURE__*/React.createElement("span", {
    className: "sx-field__opt"
  }, "(opcional)") : null) : null, /*#__PURE__*/React.createElement(El, _extends({
    id: id,
    className: "sx-input",
    "data-state": state,
    "data-size": size === 'sm' ? 'sm' : undefined,
    "aria-invalid": error ? true : undefined,
    "aria-required": required || undefined
  }, rest)), msg ? /*#__PURE__*/React.createElement("div", {
    className: "sx-field__msg",
    "data-tone": state
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: error ? 'error' : warning ? 'warning' : 'check_circle',
    size: 16
  }), msg) : hint ? /*#__PURE__*/React.createElement("div", {
    className: "sx-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
function SearchInput({
  value = '',
  onChange,
  placeholder = 'Buscar',
  ariaLabel = 'Buscar',
  size = 'sm'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sx-search"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search"
  }), /*#__PURE__*/React.createElement("input", {
    className: "sx-input",
    "data-size": size === 'sm' ? 'sm' : undefined,
    type: "search",
    "aria-label": ariaLabel,
    placeholder: placeholder,
    value: value,
    onChange: e => onChange && onChange(e.target.value)
  }), value ? /*#__PURE__*/React.createElement("span", {
    className: "sx-search__clear"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "close",
    label: "Limpar busca",
    size: "sm",
    onClick: () => onChange && onChange('')
  })) : null);
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/data/FilterBar.jsx
try { (() => {
function FilterBar({
  search,
  onSearchChange,
  searchPlaceholder = 'Buscar',
  filters = [],
  onFilterChange,
  onClear,
  period,
  children
}) {
  const active = filters.filter(f => f.value).length + (search ? 1 : 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "sx-filters",
    role: "search"
  }, /*#__PURE__*/React.createElement(__ds_scope.SearchInput, {
    value: search,
    onChange: onSearchChange,
    placeholder: searchPlaceholder
  }), filters.map(f => {
    const sel = (f.options || []).find(o => o.value === f.value);
    const items = (f.options || []).map(o => ({
      id: o.value,
      label: o.label,
      selected: o.value === f.value
    }));
    if (f.value) items.push({
      separator: true
    }, {
      id: '__clear',
      label: 'Limpar este filtro',
      icon: 'close'
    });
    return /*#__PURE__*/React.createElement(__ds_scope.Dropdown, {
      key: f.id,
      items: items,
      onSelect: it => onFilterChange && onFilterChange(f.id, it.id === '__clear' || it.id === f.value ? '' : it.id),
      trigger: /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: "sx-chip",
        "data-active": f.value ? 'true' : undefined
      }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
        name: f.value ? 'filter_list' : 'add'
      }), f.label, sel ? /*#__PURE__*/React.createElement("span", {
        className: "sx-chip__val"
      }, ": ", sel.label) : null)
    });
  }), active ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "ghost",
    onClick: onClear
  }, "Limpar filtros") : null, /*#__PURE__*/React.createElement("span", {
    className: "sx-filters__spacer"
  }), children, period);
}
Object.assign(__ds_scope, { FilterBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/FilterBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useId
} = React;
function Select({
  label,
  required = false,
  optional = false,
  hint,
  error,
  options = [],
  placeholder,
  size = 'md',
  ...rest
}) {
  const id = useId();
  return /*#__PURE__*/React.createElement("div", {
    className: "sx-field"
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "sx-field__label",
    htmlFor: id
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "sx-field__req",
    "aria-hidden": "true"
  }, "*") : null, optional ? /*#__PURE__*/React.createElement("span", {
    className: "sx-field__opt"
  }, "(opcional)") : null) : null, /*#__PURE__*/React.createElement("span", {
    className: "sx-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    className: "sx-input",
    "data-state": error ? 'error' : undefined,
    "data-size": size === 'sm' ? 'sm' : undefined
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "expand_more"
  })), error ? /*#__PURE__*/React.createElement("div", {
    className: "sx-field__msg",
    "data-tone": "error"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "error",
    size: 16
  }), error) : hint ? /*#__PURE__*/React.createElement("div", {
    className: "sx-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/layout/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = [],
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "sx-crumbs",
    "aria-label": "Voc\xEA est\xE1 em"
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: it.label
    }, last ? /*#__PURE__*/React.createElement("span", {
      "aria-current": "page"
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || '#',
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(it);
        }
      }
    }, it.label), last ? null : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron_right"
    }));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/layout/EmptyState.jsx
try { (() => {
const ICON = {
  empty: 'inbox',
  'no-results': 'search_off',
  error: 'error'
};
function EmptyState({
  kind = 'empty',
  icon,
  title,
  description,
  action,
  secondaryAction
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sx-empty",
    "data-kind": kind,
    role: kind === 'error' ? 'alert' : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "sx-empty__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || ICON[kind],
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    className: "sx-empty__title"
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    className: "sx-empty__desc"
  }, description) : null, action || secondaryAction ? /*#__PURE__*/React.createElement("div", {
    className: "sx-empty__actions"
  }, secondaryAction, action) : null);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/layout/PageHeader.jsx
try { (() => {
function PageHeader({
  title,
  description,
  breadcrumb,
  meta,
  actions,
  primaryAction,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "sx-page-header"
  }, breadcrumb && breadcrumb.length ? /*#__PURE__*/React.createElement(__ds_scope.Breadcrumb, {
    items: breadcrumb,
    onNavigate: onNavigate
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: "sx-page-header__row"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "sx-page-header__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "sx-page-header__actions"
  }, actions, primaryAction)), description ? /*#__PURE__*/React.createElement("p", {
    className: "sx-page-header__desc"
  }, description) : null, meta ? /*#__PURE__*/React.createElement("div", {
    className: "sx-page-header__meta"
  }, meta) : null);
}
Object.assign(__ds_scope, { PageHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PageHeader.jsx", error: String((e && e.message) || e) }); }

// components/layout/Sidebar.jsx
try { (() => {
function Sidebar({
  groups = [],
  activeId,
  onNavigate,
  footer
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "sx-nav",
    "aria-label": "Navega\xE7\xE3o principal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sx-nav__brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sx-nav__logo"
  }, "A"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "AVRAHAM"), /*#__PURE__*/React.createElement("small", null, "Sales OS"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      flex: 1
    }
  }, groups.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "sx-nav__group"
  }, g.items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    type: "button",
    className: "sx-nav__item",
    "aria-current": it.id === activeId ? 'page' : undefined,
    title: it.label,
    onClick: () => onNavigate && onNavigate(it.id)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    fill: it.id === activeId
  }), /*#__PURE__*/React.createElement("span", null, it.label), it.count !== undefined ? /*#__PURE__*/React.createElement("span", {
    className: "sx-nav__count"
  }, it.count) : null))))), footer);
}
Object.assign(__ds_scope, { Sidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Sidebar.jsx", error: String((e && e.message) || e) }); }

// components/layout/Skeleton.jsx
try { (() => {
function Skeleton({
  variant = 'line',
  width = '100%',
  height = 12,
  rows = 4
}) {
  if (variant === 'kpi') return /*#__PURE__*/React.createElement("div", {
    className: "sx-kpi",
    "aria-busy": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sx-skel",
    style: {
      width: '40%',
      height: 12
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "sx-skel",
    style: {
      width: '60%',
      height: 32,
      marginTop: 8
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "sx-skel",
    style: {
      width: '50%',
      height: 10,
      marginTop: 8
    }
  }));
  if (variant === 'rows') return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: 16
    },
    "aria-busy": "true"
  }, Array.from({
    length: rows
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "sx-skel",
    style: {
      width: i % 2 ? '85%' : '100%',
      height: 12
    }
  })));
  return /*#__PURE__*/React.createElement("span", {
    className: "sx-skel",
    style: {
      width,
      height
    },
    "aria-hidden": "true"
  });
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
const {
  useState
} = React;
function DataTable({
  columns = [],
  rows = [],
  rowKey = 'id',
  selectable = false,
  selected = [],
  onSelectedChange,
  sort,
  onSortChange,
  onRowClick,
  rowActions,
  onRowAction,
  density = 'comfortable',
  toolbar,
  bulkBar,
  pagination,
  loading = false,
  empty,
  maxHeight,
  customizableColumns = false
}) {
  const [hidden, setHidden] = useState({});
  const cols = columns.filter(c => !hidden[c.key]);
  const ids = rows.map(r => r[rowKey]);
  const nSel = ids.filter(id => selected.includes(id)).length;
  const toggleAll = v => onSelectedChange && onSelectedChange(v ? Array.from(new Set(selected.concat(ids))) : selected.filter(id => !ids.includes(id)));
  const toggle = (id, v) => onSelectedChange && onSelectedChange(v ? selected.concat(id) : selected.filter(x => x !== id));
  const sortBy = c => {
    if (!c.sortable || !onSortChange) return;
    onSortChange({
      key: c.key,
      dir: sort && sort.key === c.key && sort.dir === 'asc' ? 'desc' : 'asc'
    });
  };
  const colMenu = customizableColumns ? /*#__PURE__*/React.createElement(__ds_scope.Dropdown, {
    align: "right",
    keepOpen: true,
    items: [{
      title: 'Colunas visíveis'
    }].concat(columns.map(c => ({
      id: c.key,
      label: c.header,
      selected: !hidden[c.key]
    }))),
    onSelect: it => setHidden({
      ...hidden,
      [it.id]: !hidden[it.id]
    }),
    trigger: /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
      icon: "view_column",
      label: "Personalizar colunas",
      size: "sm"
    })
  }) : null;
  return /*#__PURE__*/React.createElement("div", {
    className: "sx-table-card"
  }, nSel > 0 && bulkBar ? bulkBar : toolbar || colMenu ? /*#__PURE__*/React.createElement("div", {
    className: "sx-table-toolbar"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, toolbar), colMenu) : null, /*#__PURE__*/React.createElement("div", {
    className: "sx-table-scroll",
    style: maxHeight ? {
      '--sx-table-max': maxHeight
    } : undefined
  }, /*#__PURE__*/React.createElement("table", {
    className: "sx-table",
    "data-density": density === 'compact' ? 'compact' : undefined
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, selectable ? /*#__PURE__*/React.createElement("th", {
    className: "sx-col-check"
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    ariaLabel: "Selecionar todos",
    checked: rows.length > 0 && nSel === rows.length,
    indeterminate: nSel > 0 && nSel < rows.length,
    onChange: toggleAll
  })) : null, cols.map(c => {
    const s = sort && sort.key === c.key;
    return /*#__PURE__*/React.createElement("th", {
      key: c.key,
      "data-sortable": c.sortable || undefined,
      "data-sorted": s ? sort.dir : undefined,
      "aria-sort": s ? sort.dir === 'asc' ? 'ascending' : 'descending' : undefined,
      "data-align": c.align,
      style: {
        width: c.width,
        textAlign: c.align
      },
      onClick: () => sortBy(c)
    }, c.header, c.sortable ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: s ? sort.dir === 'asc' ? 'arrow_upward' : 'arrow_downward' : 'unfold_more',
      size: 16
    }) : null);
  }), rowActions ? /*#__PURE__*/React.createElement("th", {
    className: "sx-col-actions"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 1,
      height: 1,
      overflow: 'hidden'
    }
  }, "A\xE7\xF5es")) : null)), /*#__PURE__*/React.createElement("tbody", null, loading ? Array.from({
    length: 6
  }).map((_, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, selectable ? /*#__PURE__*/React.createElement("td", {
    className: "sx-col-check"
  }, /*#__PURE__*/React.createElement(__ds_scope.Skeleton, {
    width: 18,
    height: 18
  })) : null, cols.map((c, j) => /*#__PURE__*/React.createElement("td", {
    key: c.key
  }, /*#__PURE__*/React.createElement(__ds_scope.Skeleton, {
    width: j === 0 ? '70%' : '50%',
    height: 12
  }))), rowActions ? /*#__PURE__*/React.createElement("td", null) : null)) : rows.map(r => {
    const id = r[rowKey],
      isSel = selected.includes(id);
    return /*#__PURE__*/React.createElement("tr", {
      key: id,
      "data-selected": isSel || undefined,
      "data-clickable": onRowClick ? 'true' : undefined,
      onClick: () => onRowClick && onRowClick(r)
    }, selectable ? /*#__PURE__*/React.createElement("td", {
      className: "sx-col-check"
    }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
      ariaLabel: 'Selecionar linha',
      checked: isSel,
      onChange: v => toggle(id, v)
    })) : null, cols.map(c => /*#__PURE__*/React.createElement("td", {
      key: c.key,
      "data-align": c.align,
      style: {
        textAlign: c.align
      }
    }, c.render ? c.render(r) : r[c.key])), rowActions ? /*#__PURE__*/React.createElement("td", {
      className: "sx-col-actions",
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement(__ds_scope.Dropdown, {
      align: "right",
      items: rowActions(r),
      onSelect: it => onRowAction && onRowAction(it, r),
      trigger: /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
        icon: "more_horiz",
        label: "Mais a\xE7\xF5es",
        size: "sm"
      })
    })) : null);
  }))), !loading && rows.length === 0 ? empty : null), pagination);
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/layout/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sx-tabs",
    role: "tablist"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    type: "button",
    role: "tab",
    className: "sx-tab",
    "aria-selected": t.id === value,
    disabled: t.disabled,
    onClick: () => onChange && onChange(t.id)
  }, t.label, t.count !== undefined ? /*#__PURE__*/React.createElement("span", {
    className: "sx-tab__count"
  }, t.count) : null)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Drawer.jsx
try { (() => {
const {
  useEffect
} = React;
function Drawer({
  open = false,
  title,
  subtitle,
  size = 'md',
  footer,
  headerActions,
  onClose,
  contained = false,
  children
}) {
  useEffect(() => {
    if (!open) return;
    const esc = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "sx-scrim",
    "data-kind": "drawer",
    "data-contained": contained || undefined,
    onMouseDown: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("aside", {
    className: "sx-drawer",
    "data-size": size === 'lg' ? 'lg' : undefined,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title
  }, /*#__PURE__*/React.createElement("div", {
    className: "sx-ov__head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sx-ov__title"
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    className: "sx-ov__sub"
  }, subtitle) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, headerActions, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "close",
    label: "Fechar",
    size: "sm",
    onClick: onClose
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sx-ov__body"
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "sx-ov__foot"
  }, footer) : null));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Modal.jsx
try { (() => {
const {
  useEffect
} = React;
function Modal({
  open = false,
  title,
  subtitle,
  size = 'md',
  footer,
  onClose,
  contained = false,
  children
}) {
  useEffect(() => {
    if (!open) return;
    const esc = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "sx-scrim",
    "data-kind": "modal",
    "data-contained": contained || undefined,
    onMouseDown: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sx-modal",
    "data-size": size === 'lg' ? 'lg' : undefined,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title
  }, /*#__PURE__*/React.createElement("div", {
    className: "sx-ov__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "sx-ov__title"
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    className: "sx-ov__sub"
  }, subtitle) : null), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "close",
    label: "Fechar",
    size: "sm",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    className: "sx-ov__body"
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "sx-ov__foot"
  }, footer) : null));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Modal.jsx", error: String((e && e.message) || e) }); }

// components/overlay/ConfirmDialog.jsx
try { (() => {
const {
  useState
} = React;
function ConfirmDialog({
  open = false,
  title,
  description,
  confirmLabel = 'Confirmar',
  cancelLabel = 'Cancelar',
  tone = 'danger',
  confirmText,
  loading = false,
  onConfirm,
  onCancel,
  contained = false
}) {
  const [typed, setTyped] = useState('');
  const blocked = !!confirmText && typed !== confirmText;
  return /*#__PURE__*/React.createElement(__ds_scope.Modal, {
    open: open,
    title: title,
    onClose: onCancel,
    contained: contained,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "secondary",
      onClick: onCancel
    }, cancelLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: tone === 'danger' ? 'danger-solid' : 'primary',
      loading: loading,
      disabled: blocked,
      onClick: onConfirm
    }, confirmLabel))
  }, tone === 'danger' ? /*#__PURE__*/React.createElement("span", {
    className: "sx-confirm__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "warning",
    fill: true
  })) : null, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--t2)'
    }
  }, description), confirmText ? /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: 'Digite ' + confirmText + ' para confirmar',
    value: typed,
    onChange: e => setTyped(e.target.value)
  }) : null);
}
Object.assign(__ds_scope, { ConfirmDialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/ConfirmDialog.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Toast.jsx
try { (() => {
const ICON = {
  success: 'check_circle',
  error: 'error',
  warning: 'warning',
  info: 'info'
};
function Toast({
  tone = 'success',
  message,
  actionLabel,
  onAction,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sx-toast",
    "data-tone": tone,
    role: tone === 'error' ? 'alert' : 'status'
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ICON[tone],
    fill: true
  }), /*#__PURE__*/React.createElement("span", {
    className: "sx-toast__msg"
  }, message), actionLabel ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sx-toast__action",
    onClick: onAction
  }, actionLabel) : null, onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "close",
    label: "Dispensar",
    size: "sm",
    onClick: onClose
  }) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Toast.jsx", error: String((e && e.message) || e) }); }

// design_handoff_sales_os/salesos/bases.js
try { (() => {
(() => {
  const parseCSV = t => {
    const sep = (t.split('\n')[0].match(/;/g) || []).length > (t.split('\n')[0].match(/,/g) || []).length ? ';' : ',';
    const rows = [];
    let r = [],
      c = '',
      q = false;
    for (let i = 0; i < t.length; i++) {
      const ch = t[i];
      if (q) {
        if (ch === '"' && t[i + 1] === '"') {
          c += '"';
          i++;
        } else if (ch === '"') q = false;else c += ch;
      } else if (ch === '"') q = true;else if (ch === sep) {
        r.push(c);
        c = '';
      } else if (ch === '\n' || ch === '\r') {
        if (ch === '\r' && t[i + 1] === '\n') i++;
        r.push(c);
        c = '';
        if (r.some(x => x.trim())) rows.push(r);
        r = [];
      } else c += ch;
    }
    r.push(c);
    if (r.some(x => x.trim())) rows.push(r);
    return rows;
  };
  const loadX = () => window.XLSX ? Promise.resolve() : new Promise((ok, no) => {
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
    s.onload = ok;
    s.onerror = () => no(new Error('xlsx'));
    document.head.append(s);
  });
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;'
  })[c]);
  const read = async f => {
    const ext = f.name.split('.').pop().toLowerCase();
    if (['csv', 'txt', 'tsv'].includes(ext)) return parseCSV(await f.text());
    if (['xlsx', 'xls', 'xlsm', 'ods'].includes(ext)) {
      await loadX();
      const wb = XLSX.read(await f.arrayBuffer());
      return XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {
        header: 1,
        blankrows: false,
        defval: ''
      });
    }
    throw new Error('Formato não suportado. Use CSV, XLSX ou XLS.');
  };
  const lbl = 'font-size:13px;font-weight:600;color:var(--t2);display:block;margin-bottom:6px';
  let rows = null,
    fname = '';
  const drawer = () => {
    rows = null;
    openDrawer(`<div class="dh"><div>${tile('upload', 'g', 24, 'l')}<div class="ct" style="margin-top:16px;font-size:22px">Nova base</div><div class="cs">Envie uma planilha CSV, XLSX ou XLS. A primeira linha deve ser o cabeçalho.</div></div><button class="btn btn-ic btn-sm" data-close>${ic('x', 18)}</button></div><div class="db" style="display:flex;flex-direction:column;gap:14px"><label id="dz" style="border:2px dashed var(--ln);border-radius:16px;padding:28px 16px;text-align:center;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:8px;transition:.2s">${tile('upload', 'ac', 26, 'l')}<b>Arraste a planilha aqui ou clique para escolher</b><span class="cs">.csv, .xlsx, .xls</span><input id="bf" type="file" accept=".csv,.tsv,.txt,.xlsx,.xls,.xlsm,.ods" hidden></label><div id="bp"></div><div><label style="${lbl}">Nome da base</label><div class="field"><input id="bn" placeholder="Ex.: Clínicas PR"></div></div><div><label style="${lbl}">Segmento</label><div class="field"><input id="bs" placeholder="Ex.: Saúde"></div></div></div><div class="df"><button class="btn" data-close>Cancelar</button><button class="btn btn-p" id="bi" disabled>Importar base</button></div>`);
    const dz = document.querySelector('#dz'),
      inp = document.querySelector('#bf');
    const take = async f => {
      if (!f) return;
      const bp = document.querySelector('#bp');
      bp.innerHTML = '<div class="cs">Lendo arquivo…</div>';
      try {
        const r = await read(f);
        if (r.length < 2) throw new Error('A planilha não tem linhas de dados.');
        rows = r;
        fname = f.name;
        const bn = document.querySelector('#bn');
        if (!bn.value) bn.value = f.name.replace(/\.[^.]+$/, '');
        const h = r[0].map(String),
          pv = r.slice(1, 6);
        bp.innerHTML = `<div class="card" style="padding:14px"><div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap"><b>${esc(f.name)}</b>${pill(`${(r.length - 1).toLocaleString('pt-BR')} leads · ${h.length} colunas`, 'g', 'check')}</div><div class="tw" style="margin-top:10px;max-height:220px;overflow:auto"><table class="tbl"><thead><tr>${h.map(x => `<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${pv.map(x => `<tr>${h.map((_, i) => `<td>${esc(x[i])}</td>`).join('')}</tr>`).join('')}</tbody></table></div><div class="cs" style="margin-top:8px">Pré-visualização das 5 primeiras linhas.</div></div>`;
        document.querySelector('#bi').disabled = false;
      } catch (e) {
        rows = null;
        document.querySelector('#bi').disabled = true;
        bp.innerHTML = `<div class="note">${ic('info', 18)}<span>${esc(e.message)}</span></div>`;
      }
    };
    inp.onchange = () => take(inp.files[0]);
    dz.ondragover = e => {
      e.preventDefault();
      dz.style.borderColor = 'var(--acc)';
    };
    dz.ondragleave = () => dz.style.borderColor = '';
    dz.ondrop = e => {
      e.preventDefault();
      dz.style.borderColor = '';
      take(e.dataTransfer.files[0]);
    };
    document.querySelector('#bi').onclick = () => {
      if (!rows) return;
      const n = document.querySelector('#bn').value.trim() || fname,
        seg = document.querySelector('#bs').value.trim() || 'Geral',
        tot = rows.length - 1,
        dt = new Date(),
        tb = document.querySelector('#bt tbody');
      const tr = document.createElement('tr');
      tr.dataset.q = n.toLowerCase();
      tr.innerHTML = `<td><div class="nm">${tile('database', 'g', 20, 's')}<div><b>${esc(n)}</b><small>${esc(fname)}</small></div></div></td><td>${pill(esc(seg), 'bl')}</td><td class="num">${tot.toLocaleString('pt-BR')}</td><td><b>0</b> <span style="color:var(--t3);font-size:12px">0%</span>${bar(0, 's')}</td><td><b>0</b> <span style="color:var(--t3);font-size:12px">0%</span>${bar(0, 's')}</td><td><b>0</b> <span style="color:var(--t3);font-size:12px">0%</span>${bar(0, 's')}</td><td>${dt.toLocaleDateString('pt-BR')}<br><small style="color:var(--t3)">${dt.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
      })}</small></td><td>${dotp('Não analisada', 'am')}</td><td></td>`;
      tb.prepend(tr);
      closeDrawer();
      toast(`Base importada: ${tot.toLocaleString('pt-BR')} leads`, 'upload');
    };
  };
  const prev = INIT.bases;
  INIT.bases = v => {
    prev && prev(v);
    v.addEventListener('click', e => {
      const b = e.target.closest('[data-toast="Nova base"]');
      if (b) {
        e.stopPropagation();
        e.preventDefault();
        drawer();
      }
    }, true);
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_sales_os/salesos/bases.js", error: String((e && e.message) || e) }); }

// design_handoff_sales_os/salesos/icons.js
try { (() => {
(() => {
  const R = (x, y, w, h, r = 2) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/>`;
  const P = {
    dashboard: R(3, 3, 7, 7, 2) + R(14, 3, 7, 7, 2) + R(14, 14, 7, 7, 2) + R(3, 14, 7, 7, 2),
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
    database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>',
    qualify: R(3, 3, 18, 18, 4) + '<path d="M12 8v8M8 12h8"/>',
    pipeline: R(3, 3, 18, 18, 4) + '<path d="M8 7v7M12 7v3M16 7v10"/>',
    zap: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    building: R(5, 3, 14, 18, 2) + '<path d="M9 7h2M13 7h2M9 11h2M13 11h2M10 21v-4h4v4"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6M16 4.7a3.5 3.5 0 0 1 0 6.6M18 14.2c2.2.6 3.5 2.6 3.5 5.3"/>',
    chevR: '<path d="m9 6 6 6-6 6"/>',
    chevD: '<path d="m6 9 6 6 6-6"/>',
    chevL: '<path d="m15 6-6 6 6 6"/>',
    moon: '<path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    calendar: R(3, 5, 18, 16, 3) + '<path d="M8 3v4M16 3v4M3 10h18"/>',
    calCheck: R(3, 5, 18, 16, 3) + '<path d="M8 3v4M16 3v4M3 10h18M9.5 15.5l2 2 3.5-3.5"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    pencil: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    copy: R(9, 9, 12, 12, 2) + '<path d="M5 15V5a2 2 0 0 1 2-2h8"/>',
    trash: '<path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 11v6M14 11v6"/>',
    dots: '<circle cx="5" cy="12" r="1.4" fill="currentColor"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/><circle cx="19" cy="12" r="1.4" fill="currentColor"/>',
    send: '<path d="m22 2-11 11M22 2l-7 20-4-9-9-4z"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    mail: R(3, 5, 18, 14, 3) + '<path d="m3 7 9 6 9-6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    check: '<path d="m5 12 5 5 9-10"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    xc: '<circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/>',
    tag: '<path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9z"/><circle cx="7.5" cy="7.5" r="1"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    instagram: R(3, 3, 18, 18, 5) + '<circle cx="12" cy="12" r="4"/><path d="M17.3 6.7h.01"/>',
    linkedin: R(3, 3, 18, 18, 4) + '<path d="M8 11v6M8 7.5h.01M12 17v-6M12 13.5a2.8 2.8 0 0 1 5.6 0V17"/>',
    chat: '<path d="M4 20l1.3-4A8.5 8.5 0 1 1 8 18.7z"/>',
    ext: '<path d="M14 4h6v6M20 4 10 14M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/>',
    cube: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12v9M12 12 4 7.5"/>',
    monitor: R(3, 4, 18, 12, 2) + '<path d="M8 20h8M12 16v4"/>',
    sliders: '<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
    bars: '<path d="M5 20V11M12 20V4M19 20v-6"/>',
    dollar: '<circle cx="12" cy="12" r="9"/><path d="M14.5 9.2c-.4-.9-1.3-1.4-2.5-1.4-1.5 0-2.5.7-2.5 1.8s1 1.5 2.5 1.9 2.5.8 2.5 1.9-1 1.7-2.5 1.7c-1.2 0-2.2-.6-2.5-1.6M12 6v1.8M12 16.2V18"/>',
    file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h6"/>',
    trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H4v1a4 4 0 0 0 4 4M16 6h4v1a4 4 0 0 1-4 4M12 13v4M8 21h8M10 17h4"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    cloud: '<path d="M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9.5 4.3 4.3 0 0 1 17.5 18z"/>',
    utensils: '<path d="M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10M17 21V3c-2.5 1-4 4-4 8h4"/>',
    pin: '<path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
    factory: '<path d="M3 21V9l6 4V9l6 4V4h4v17zM8 21v-3M13 21v-3"/>',
    funnel: '<path d="M3 4h18l-7 9v6l-4 2v-8z"/>',
    bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/>',
    logout: '<path d="M9 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4M16 8l4 4-4 4M20 12H9"/>',
    panel: R(3, 3, 18, 18, 4) + '<path d="M9 3v18"/>',
    arrowUp: '<path d="M12 19V5M6 11l6-6 6 6"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
    palette: '<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.6-2-.5-1.2.3-2.5 1.7-2.5H18a3 3 0 0 0 3-3C21 7 17 3 12 3z"/><circle cx="7.5" cy="11" r=".9"/><circle cx="10.5" cy="7.5" r=".9"/><circle cx="15" cy="7.5" r=".9"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 8 3 8H3s3-1 3-8M10 21h4"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5zM3 13l9 5 9-5"/>',
    cross: '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',
    cpu: R(6, 6, 12, 12, 2) + R(9.5, 9.5, 5, 5, 1) + '<path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
    briefcase: R(3, 7, 18, 13, 2) + '<path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
    store: '<path d="M4 9l1-5h14l1 5a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1-5 0zM5 12v8h14v-8"/>',
    columns: R(3, 4, 18, 16, 3) + '<path d="M9 4v16M15 4v16"/>',
    repeat: '<path d="M17 2l4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3"/>',
    refresh: '<path d="M20 12a8 8 0 1 1-2.3-5.7L20 8M20 3v5h-5"/>',
    shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
    wave: '<path d="M2 12c2.5-4 5-4 7.5 0s5 4 7.5 0 3-3 5-3"/>',
    fuel: '<path d="M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M3 21h12M14 9h2a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0V8l-3-3M7 8h4"/>',
    leaf: '<path d="M5 19C5 10 10 4 20 4c0 9-5 15-13 15M5 19c2-5 5-8 9-10"/>',
    book: '<path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3zM5 17a3 3 0 0 1 3-3h11"/>',
    home: '<path d="m3 11 9-8 9 8M5 10v10h14V10M10 20v-6h4v6"/>',
    badge: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    bookmark: '<path d="M6 3h12v18l-6-4-6 4z"/>',
    sparkles: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>',
    flame: '<path d="M12 22c4 0 7-2.8 7-7 0-3-2-5-3-7-1 2-2 3-3 3 0-3-1-6-4-8 0 5-4 7-4 12 0 4 3 7 7 7z"/>',
    mapIc: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14"/>',
    download: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
    arrowL: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    lock: R(5, 11, 14, 10, 3) + '<path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    phoneOff: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 2 3M15 13l5 2v4a2 2 0 0 1-2 2c-3 0-6-1-8.5-3M3 3l18 18"/>',
    trend: '<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>',
    filter: '<path d="M4 6h16M7 12h10M10 18h4"/>',
    save: '<path d="M5 3h11l3 3v15H5zM8 3v5h7V3M8 21v-7h8v7"/>',
    upload: '<path d="M12 16V4M7 9l5-5 5 5M4 16v4h16v-4"/>',
    alert: '<path d="M12 3 2 20h20zM12 10v5M12 18v.01"/>',
    wand: '<path d="m5 19 11-11M14 4l1.5-1M19 9l1-1.5M17.5 3.5l.01 0M20.5 12l1.5.5M9 3l.5 1.5M3 9l1.5.5"/>'
  };
  window.ic = (n, s = 20, w = 1.8) => `<svg class="ic" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || ''}</svg>`;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_sales_os/salesos/icons.js", error: String((e && e.message) || e) }); }

// design_handoff_sales_os/salesos/metas.js
try { (() => {
(() => {
  const BRL = c => (c / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  const N = n => Math.round(n).toLocaleString('pt-BR');
  const pd = s => {
    const [y, m, d] = s.split('-');
    return `${d}/${m}/${y}`;
  };
  const dias = (a, b) => {
    let n = 0;
    if (!a || !b) return 0;
    const s = new Date(a + 'T12:00'),
      e = new Date(b + 'T12:00');
    for (let d = new Date(s); d <= e; d.setDate(d.getDate() + 1)) {
      const w = d.getDay();
      if (w && w < 6) n++;
    }
    return n;
  };
  const ST = [['Contato com decisor', 'Reunião agendada', 'conversas com o decisor', 'viram reunião agendada'], ['Reuniões agendadas', 'R1 realizada', 'reuniões agendadas', 'viram R1 realizada'], ['R1 realizada', 'R2 realizada', 'R1 realizadas', 'viram R2 realizada'], ['R2 realizada', 'Negociação', 'R2 realizadas', 'entram em negociação — não recusaram na proposta'], ['Negociação', 'Contrato', 'negociações', 'fecham contrato']];
  const store = () => JSON.parse(localStorage.getItem('so_metas2') || 'null') || [{
    id: 1,
    nome: 'Meta Q3 Prospecção',
    nicho: 'SaaS',
    fat: 5000000,
    tk: 250000,
    ini: '2026-07-01',
    fim: '2026-09-30',
    r: [100, 20, 70, 80, 50]
  }];
  const save = a => localStorage.setItem('so_metas2', JSON.stringify(a));
  const fresh = () => ({
    id: Date.now(),
    nome: 'Outubro | IA',
    nicho: 'Food',
    fat: 3000000,
    tk: 150000,
    ini: '2026-09-30',
    fim: '2026-10-30',
    r: [100, 20, 70, 80, 50],
    draft: 1
  });
  let list, cur;
  const calc = d => {
    const r = d.r.map(x => Math.max(1, +x || 1) / 100),
      tk = Math.max(1, d.tk);
    const c = Math.ceil(d.fat / tk),
      ng = Math.ceil(c / r[4]),
      r2 = Math.ceil(ng / r[3]),
      r1 = Math.ceil(r2 / r[2]),
      ag = Math.ceil(r1 / r[1]),
      ct = Math.ceil(ag / r[0]);
    const du = dias(d.ini, d.fim),
      sem = Math.max(1, Math.ceil(du / 5)),
      pdays = sem * 3,
      dis = ct * 3;
    return {
      c,
      ng,
      r2,
      r1,
      ag,
      ct,
      du,
      sem,
      pdays,
      dis,
      dia: Math.ceil(dis / pdays)
    };
  };
  const ten = v => {
    const x = Math.round(v / 10 * 10) / 10;
    return String(x).replace('.', ',');
  };
  const mask = el => {
    const c = +el.value.replace(/\D/g, '') || 0;
    el.value = BRL(c);
    return c;
  };
  const lbl = 'font-size:13px;font-weight:600;color:var(--t2);display:block;margin-bottom:6px';
  const sec = (t, s = '') => `<div class="ch" style="color:var(--tx);font-size:16px">${t}</div>${s ? `<div class="cs" style="margin-top:4px">${s}</div>` : ''}`;
  const PR = [['Operação Autônoma', 'Solução completa para operação com IA', 'monitor', 'bl', 'Solução', 'bl', 2500000, 'Recorrente', 'g'], ['IA Básica', 'Implementação inicial e treinamento', 'cpu', 'pu', 'Software', 'pu', 750000, 'Única', 'bl'], ['Consultoria', 'Consultoria estratégica e implementação', 'briefcase', 'am', 'Serviço', 'am', 1200000, 'Única', 'bl']];
  const prods = () => JSON.parse(localStorage.getItem('so_prods') || 'null') || PR;
  const prodRows = () => prods().map(p => `<tr><td><div class="nm">${tile(p[2], p[3], 20, 's')}<div><b>${p[0]}</b><small>${p[1]}</small></div></div></td><td>${pill(p[4], p[5])}</td><td class="num">${BRL(p[6])}</td><td>${pill(p[7], p[8])}</td><td>${dotp('Ativo', 'g')}</td></tr>`).join('');
  const item = m => `<button class="card" data-sel="${m.id}" style="text-align:left;padding:14px 16px;cursor:pointer;width:100%;${cur && cur.id === m.id ? 'outline:2px solid var(--acc)' : ''}"><div class="ct" style="font-size:15px">${m.nome}</div><div class="cs">${m.nicho} · ${m.draft ? 'Rascunho, ainda não salvo' : pd(m.ini) + ' → ' + pd(m.fim)}</div></button>`;
  const left = () => `${list.map(item).join('')}`;
  PAGES.metas = () => {
    list = store();
    if (!cur) cur = list[0];
    return `<div class="ph"><div><h1>Metas</h1><p>Informe faturamento, ticket e período. O cálculo regressivo mostra quantas ligações por dia você precisa.</p></div></div>
<div style="display:grid;grid-template-columns:minmax(220px,280px) minmax(0,1fr);gap:20px;align-items:start" class="mgl">
<div style="display:flex;flex-direction:column;gap:10px"><button class="btn btn-p" id="mn">${ic('plus', 18, 2.2)}Nova meta</button><div id="ml" style="display:flex;flex-direction:column;gap:10px">${left()}</div></div>
<div style="display:flex;flex-direction:column;gap:20px;min-width:0" id="me"></div></div>
<div class="card pad" style="margin-top:20px"><div class="chead">${tile('cube', 'ac')}<div><div class="ct">Produtos / serviços</div><div class="cs">Cadastre seus produtos. O ticket médio deles alimenta as metas.</div></div><button class="btn btn-p" id="np">${ic('plus', 18, 2.2)}Novo Produto</button></div>
<div class="tw"><table class="tbl"><thead><tr><th>Produto / Serviço</th><th>Categoria</th><th>Ticket médio</th><th>Tipo de receita</th><th>Status</th></tr></thead><tbody id="pb">${prodRows()}</tbody></table></div></div>
<style>@media(max-width:1000px){.mgl{grid-template-columns:minmax(0,1fr)!important}}.rw input[type=number]{width:70px}</style>`;
  };
  const editor = () => {
    const d = cur,
      k = calc(d);
    return `<div class="card pad" style="display:flex;align-items:center;gap:20px;flex-wrap:wrap"><div><small style="color:var(--t3);font-weight:700;letter-spacing:.08em">LIGAÇÕES POR DIA</small><div class="big" id="o-dia">${N(k.dia)}</div></div><span id="o-st">${pill(d.draft ? 'Não salvo' : 'Salvo', d.draft ? 'am' : 'g')}</span><div style="margin-left:auto;display:flex;gap:10px;flex-wrap:wrap"><button class="btn btn-d" id="md">${ic('trash', 16)}Excluir</button><button class="btn btn-p" id="ms">${ic('save', 16)}Salvar meta</button></div></div>
<div class="card pad"><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px">
<div><label style="${lbl}">Nome da meta</label><div class="field"><input data-f="nome" value="${d.nome}"></div></div>
<div><label style="${lbl}">Nicho</label><div class="field"><input data-f="nicho" value="${d.nicho}"></div></div>
<div><label style="${lbl}">Meta de faturamento no período</label><div class="field"><input data-f="fat" inputmode="numeric" value="${BRL(d.fat)}"></div></div>
<div><label style="${lbl}">Ticket médio do contrato</label><div class="field"><input data-f="tk" inputmode="numeric" value="${BRL(d.tk)}"></div></div>
<div><label style="${lbl}">Data de início</label><div class="field"><input type="date" data-f="ini" value="${d.ini}"></div></div>
<div><label style="${lbl}">Data de fim</label><div class="field"><input type="date" data-f="fim" value="${d.fim}"></div></div></div>
<div class="cs" style="margin-top:12px" id="o-du"></div></div>
<div class="card pad">${sec('Do contrato ao contato')}<div id="o-fun" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin-top:16px"></div></div>
<div class="card pad">${sec('Taxas do funil', 'Cada taxa diz quantos avançam. O número do dia, no topo, muda na hora.')}<div style="display:flex;flex-direction:column;gap:12px;margin-top:14px">${ST.map((s, i) => `<div class="card rw" style="padding:16px"><div class="ct" style="font-size:15px">${s[0]} → ${s[1]}</div><div class="cs" id="o-t${i}" style="margin:6px 0 10px"></div><div class="field" style="width:120px"><input type="number" min="1" max="100" data-r="${i}" value="${d.r[i]}"><span style="color:var(--acc);font-weight:700">%</span></div></div>`).join('')}</div></div>
<div class="card pad">${sec('Plano do dia')}<div style="display:grid;grid-template-columns:minmax(0,2fr) minmax(0,1fr);gap:14px;margin-top:14px" class="mgl"><div class="card" style="padding:16px;display:flex;flex-direction:column;gap:14px" id="o-plan"></div><div class="card" style="padding:16px" id="o-ate"></div></div></div>
<div class="card pad"><button id="gl" style="display:flex;width:100%;justify-content:space-between;align-items:center;text-align:left"><span>${sec('Glossário', 'O que conta em cada etapa: agendar entra no funil; R1 só se realizada. Sem no-show, sem secretária, sem tentativa.')}</span><span id="gc">${ic('chevD', 18)}</span></button><div id="gb" style="display:none;flex-direction:column;gap:10px;margin-top:14px">${[['R1 e R2 no Método Pódium', 'R1 é o levantamento de necessidades, a reunião de diagnóstico realizada. R2 é a apresentação da proposta, também realizada. Agendar não conta; no-show não conta.'], ['O que é contato com o decisor', 'Só conta quando você fala com quem decide. Tentativa, caixa postal, secretária e recepção ficam de fora. No plano do dia, as discagens estimam esse filtro: discagens = contatos × 3.'], ['Ticket médio e meta de faturamento', 'Ticket é o valor médio por contrato fechado. Meta é o faturamento desejado no período. A calculadora divide um pelo outro para achar quantos contratos, e daí volta o funil até os contatos.'], ['Como o cálculo regressivo funciona', 'Começa nos contratos e volta etapa por etapa até os contatos com decisor. O ×3 transforma contatos em discagens. O volume reparte em 3 dias de prospecção por semana, contando só dias úteis (seg a sex) entre início e fim.']].map(g => `<div class="card" style="padding:14px 16px"><b>${g[0]}</b><p style="margin:6px 0 0;color:var(--t2)">${g[1]}</p></div>`).join('')}</div></div>`;
  };
  const paint = () => {
    const d = cur,
      k = calc(d),
      $e = s => document.querySelector(s);
    $e('#o-dia').textContent = N(k.dia);
    $e('#o-du').innerHTML = k.du ? `<b>${k.du}</b> dias úteis entre ${pd(d.ini)} e ${pd(d.fim)}, ${k.sem} semanas, ${k.pdays} dias de prospecção. Contratos necessários: <b>${N(k.c)}</b> (${BRL(d.fat)} ÷ ${BRL(d.tk)}).` : 'Informe um período válido (início antes do fim).';
    const cards = [['CONTRATOS', k.c, ''], ['NEGOCIAÇÕES', k.ng, d.r[4] + '% → contratos'], ['R2S', k.r2, d.r[3] + '% → negociação'], ['R1S', k.r1, d.r[2] + '% → R2'], ['AGENDADAS', k.ag, d.r[1] + '% → R1'], ['CONTATOS', k.ct, d.r[0] + '% → agendada']];
    $e('#o-fun').innerHTML = cards.map((c, i) => `<div class="card" style="padding:16px;${i ? '' : 'outline:2px solid var(--acc)'}"><small style="color:var(--t3);font-weight:700;letter-spacing:.06em">${c[0]}</small><div class="big" style="margin:14px 0 6px;${i ? '' : 'color:var(--acc)'}">${N(c[1])}</div><small style="color:var(--acc);font-weight:600">${c[2]}</small></div>`).join('');
    ST.forEach((s, i) => $e('#o-t' + i).textContent = `De cada 10 ${s[2]}, ${ten(d.r[i])} ${s[3]}.`);
    const row = (l, v, p) => `<div><div style="display:flex;justify-content:space-between;align-items:baseline"><small style="color:var(--t3);font-weight:700;letter-spacing:.06em">${l}</small><b style="font-size:18px">${N(v)}</b></div>${bar(p)}</div>`;
    $e('#o-plan').innerHTML = `<small style="color:var(--t3);font-weight:700">NO PERÍODO</small>` + row('DISCAGENS', k.dis, 100) + row('DECISOR', k.ct, k.dis ? k.ct / k.dis * 100 : 0) + row('REUNIÕES', k.ag, k.dis ? k.ag / k.dis * 100 : 0);
    $e('#o-ate').innerHTML = `<small style="color:var(--t3);font-weight:700">ATÉ QUANDO</small><div style="font-size:20px;font-weight:700;margin:8px 0">${pd(d.fim)}</div><div style="display:flex;gap:6px;flex-wrap:wrap">${Array.from({
      length: Math.min(k.sem, 26)
    }, () => '<i style="width:18px;height:6px;border-radius:3px;background:var(--acc)"></i>').join('')}</div><small style="color:var(--t3);font-weight:600">${k.sem} SEM. · ${k.pdays} DIAS</small>`;
    $e('#o-st').innerHTML = pill(d.draft ? 'Não salvo' : 'Salvo', d.draft ? 'am' : 'g');
  };
  const mount = () => {
    const v = document.querySelector('#me');
    v.innerHTML = editor();
    paint();
    document.querySelector('#ml').innerHTML = left();
  };
  const dirty = () => {
    cur.draft = 1;
    paint();
  };
  INIT.metas = v => {
    mount();
    v.addEventListener('input', e => {
      const t = e.target;
      if (t.dataset.f) {
        const f = t.dataset.f;
        if (f === 'fat' || f === 'tk') {
          cur[f] = mask(t);
        } else cur[f] = t.value;
        dirty();
      } else if (t.dataset.r !== undefined) {
        let x = +t.value;
        if (x > 100) x = 100;
        cur.r[+t.dataset.r] = x;
        dirty();
      }
    });
    v.addEventListener('click', e => {
      const s = e.target.closest('[data-sel]');
      if (s) {
        cur = list.find(m => m.id == s.dataset.sel) || cur;
        mount();
        return;
      }
      if (e.target.closest('#mn')) {
        cur = fresh();
        list = [cur, ...list.filter(m => !m.draft)];
        mount();
        return;
      }
      if (e.target.closest('#ms')) {
        const d = cur;
        if (!d.nome.trim() || !d.fat || !d.tk || calc(d).du < 1) {
          toast('Preencha nome, valores e um período válido', 'alert');
          return;
        }
        delete d.draft;
        const a = store().filter(m => m.id !== d.id);
        a.unshift(JSON.parse(JSON.stringify(d)));
        save(a);
        list = a;
        mount();
        toast('Meta salva');
        return;
      }
      if (e.target.closest('#md')) {
        const a = store().filter(m => m.id !== cur.id);
        if (!a.length) {
          toast('Mantenha ao menos uma meta', 'alert');
          return;
        }
        save(a);
        list = a;
        cur = a[0];
        mount();
        toast('Meta removida', 'trash');
        return;
      }
      if (e.target.closest('#gl')) {
        const b = document.querySelector('#gb');
        b.style.display = b.style.display === 'none' ? 'flex' : 'none';
        return;
      }
      if (e.target.closest('#np')) {
        openDrawer(`<div class="dh"><div>${tile('cube', 'g', 24, 'l')}<div class="ct" style="margin-top:16px;font-size:22px">Novo produto</div></div><button class="btn btn-ic btn-sm" data-close>${ic('x', 18)}</button></div><div class="db" style="display:flex;flex-direction:column;gap:14px"><div><label style="${lbl}">Nome</label><div class="field"><input id="pn"></div></div><div><label style="${lbl}">Descrição</label><div class="field"><input id="pdsc"></div></div><div><label style="${lbl}">Ticket médio</label><div class="field"><input id="ptk" inputmode="numeric" value="R$ 0,00"></div></div></div><div class="df"><button class="btn" data-close>Cancelar</button><button class="btn btn-p" id="ps">Adicionar</button></div>`);
        document.querySelector('#ptk').oninput = e => mask(e.target);
        document.querySelector('#ps').onclick = () => {
          const n = document.querySelector('#pn').value.trim(),
            c = +document.querySelector('#ptk').value.replace(/\D/g, '') || 0;
          if (!n || !c) {
            toast('Informe nome e ticket', 'alert');
            return;
          }
          const a = prods();
          a.push([n, document.querySelector('#pdsc').value || '—', 'cube', 'ac', 'Serviço', 'am', c, 'Única', 'bl']);
          localStorage.setItem('so_prods', JSON.stringify(a));
          document.querySelector('#pb').innerHTML = prodRows();
          closeDrawer();
          toast('Produto adicionado');
        };
      }
    });
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_sales_os/salesos/metas.js", error: String((e && e.message) || e) }); }

// design_handoff_sales_os/salesos/pages1.js
try { (() => {
(() => {
  const funnel = () => {
    const v = [12400, 6800, 3200, 1500, 620, 280, 120],
      W = 1000,
      H = 230,
      m = H / 2;
    const hs = v.map(x => .03 + .97 * Math.pow(x / 12400, .75));
    const pts = [[0, hs[0]], ...hs.map((h, i) => [(i + .5) / 7 * W, h]), [W, hs[6]]];
    const mk = s => {
      const T = pts.map(([x, h]) => [x, m - h * s * m * .96]),
        B = pts.map(([x, h]) => [x, m + h * s * m * .96]).reverse();
      const seg = a => a.slice(1).map((p, i) => {
        const q = a[i],
          mx = (q[0] + p[0]) / 2;
        return `C${mx} ${q[1]},${mx} ${p[1]},${p[0]} ${p[1]}`;
      }).join('');
      return `M${T[0][0]} ${T[0][1]}${seg(T)}L${B[0][0]} ${B[0][1]}${seg(B)}Z`;
    };
    return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none"><defs><linearGradient id="fg" x1="0" x2="1" y1="0" y2="0" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#2EE6C5"/><stop offset=".5" stop-color="#4F8CFF"/><stop offset="1" stop-color="#A25CFF"/><animateTransform attributeName="gradientTransform" type="translate" values="-.08 0;.08 0;-.08 0" dur="9s" repeatCount="indefinite"/></linearGradient></defs><path class="fw" d="${mk(1)}" fill="url(#fg)" opacity=".28"/><path class="fw" d="${mk(.74)}" fill="url(#fg)" opacity=".5"/><path class="fw" d="${mk(.46)}" fill="url(#fg)" opacity=".85"/></svg>`;
  };
  const line = () => {
    const d = [55, 110, 182, 120, 120, 40, 50],
      L = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
      x0 = 46,
      x1 = 400,
      y0 = 24,
      y1 = 170,
      X = i => x0 + i * (x1 - x0) / 6,
      Y = v => y1 - v / 200 * (y1 - y0);
    const p = d.map((v, i) => [X(i), Y(v)]);
    let s = `M${p[0][0]} ${p[0][1]}`;
    p.slice(1).forEach((q, i) => {
      const a = p[i],
        mx = (a[0] + q[0]) / 2;
      s += `C${mx} ${a[1]},${mx} ${q[1]},${q[0]} ${q[1]}`;
    });
    return `<svg class="lc" viewBox="0 0 420 215" width="100%"><defs><linearGradient id="la" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--acc)" stop-opacity=".4"/><stop offset="1" stop-color="var(--acc)" stop-opacity="0"/></linearGradient></defs>${[0, 50, 100, 150, 200].map(v => `<line x1="${x0}" x2="${x1}" y1="${Y(v)}" y2="${Y(v)}" stroke="var(--ln)"/><text x="${x0 - 10}" y="${Y(v) + 4}" text-anchor="end" font-size="11" fill="var(--t3)">${v}</text>`).join('')}<path d="${s}L${x1} ${y1}L${x0} ${y1}Z" fill="url(#la)"/><path class="ln" d="${s}" fill="none" stroke="var(--acc)" stroke-width="3" stroke-linecap="round"/>${p.map((q, i) => `<circle class="pt" style="animation-delay:${.9 + i * .1}s;transform-origin:${q[0]}px ${q[1]}px" cx="${q[0]}" cy="${q[1]}" r="${i === 2 ? 6 : 4.5}" fill="var(--acc)" stroke="var(--bg)" stroke-width="2"/><text x="${q[0]}" y="196" text-anchor="middle" font-size="11.5" fill="var(--t3)">${L[i]}</text>`).join('')}<rect x="${X(2) - 20}" y="${Y(182) - 36}" width="40" height="24" rx="9" fill="var(--s-bg,#fff)" stroke="var(--ln)"/><text x="${X(2)}" y="${Y(182) - 20}" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--tx)">182</text></svg>`;
  };
  PAGES.dashboard = () => {
    let kpiOrder = JSON.parse(localStorage.getItem('kpiOrder')) || ['calls', 'funnel', 'week', 'pipeline'];
    return `
<div class="ph"><div><h1>Bem-vindo João! É aqui que os resultados acontecem!</h1><p>Outubro de 2026</p></div></div>
<div class="g2" style="gap:20px;margin-bottom:20px">
<div class="card pad"><div class="ch">${ic('zap', 18)}Execução hoje</div><div style="margin-top:14px;display:flex;align-items:baseline;gap:8px"><span class="big" style="font-size:48px">8</span><span style="color:var(--t2)">/20 ligações</span></div>
<div style="background:var(--ln);height:8px;border-radius:4px;margin-top:12px;overflow:hidden"><div style="width:40%;height:100%;background:var(--acc);transition:width .3s"></div></div>
<div class="cs" style="margin-top:10px">Meta diária de ligações</div></div>
<div class="card pad"><div class="ch">${ic('target', 18)}Meta do período</div><div style="margin-top:14px;display:flex;flex-direction:column;gap:12px">
<div><div class="cs">Faturamento</div><div class="big" style="font-size:28px">R$ 100.000</div></div>
<div><div class="cs">Ticket médio</div><div class="big" style="font-size:20px">R$ 1.500</div></div>
<div><div class="cs">Período</div><div style="font-size:13px;font-weight:600">30/09 - 30/10 (31 dias)</div></div>
</div></div>
</div>
<div class="card pad" style="margin-bottom:20px"><div class="chead">${tile('sliders', 'g', 22, 's')}<div><div class="ch" style="color:var(--tx)">KPIs do dashboard</div><div class="cs">Clique e arraste para reorganizar a ordem dos indicadores.</div></div></div>
<div class="kpigrid" id="kpigrid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px"></div></div>
<div class="card pad" style="margin-bottom:20px"><div class="chead">${tile('funnel', 'ac', 22, 's')}<div><div class="ch" style="color:var(--tx)">Funil de vendas</div><div class="cs">Da prospecção ao fechamento. Veja quantos leads avançam em cada etapa.</div></div></div>
<div class="fun"><div class="fun-c">${[['Bases importadas', '12.400', '100%', 'g'], ['Qualificados', '6.800', '55%', 'g'], ['Contato realizado', '3.200', '26%', 'bl'], ['Agendamentos', '1.500', '12%', 'bl'], ['Propostas', '620', '5%', 'pu'], ['Negociações', '280', '2%', 'pu'], ['Vendas', '120', '1%', 'pu']].map(([a, b, c, k]) => `<div><span>${a}</span><b>${b}</b>${pill(c, k)}</div>`).join('')}</div>${funnel()}</div></div>
<div class="g3" style="grid-template-columns:1.3fr 1fr 1fr">
<div class="card pad"><div class="chead">${tile('phone', 'g', 20, 's')}<div><div class="ch" style="color:var(--tx)">Ligações por dia da semana</div><div class="cs">Volume de ligações realizadas nesta semana.</div></div></div>${line()}<div class="note" style="align-items:center;margin-top:8px">${tile('bars', 'g', 18, 's')}<span><b style="color:var(--tx);font-size:14px;display:block">Quarta-feira é o pico</b>Foram realizadas 182 ligações (28% da semana).</span></div></div>
<div class="card pad"><div class="ch">${ic('target', 18)}Maior concentração de leads</div><div class="cs" style="margin-top:4px">Etapa com maior volume de oportunidades.</div><div class="conc">${tile('users', 'g', 30, 'l')}<b>Qualificados</b><b class="n">6.800</b><span class="cs">leads nesta etapa</span>${pill('55% do total', 'g')}</div><div class="note">${ic('info', 18)}<span>É aqui que está o maior volume de leads. Priorize o contato para avançar no funil.</span></div></div>
<div class="card pad"><div class="ch">${ic('dollar', 18)}Maior concentração de valor</div><div class="cs" style="margin-top:4px">Etapa com maior valor em oportunidades.</div><div class="conc">${tile('bars', 'pu', 30, 'l')}<b>Negociação</b><b class="n">R$ 85.000</b><span class="cs">em oportunidades</span>${pill('71% do pipeline filtrado', 'pu')}</div><div class="note">${ic('info', 18)}<span>A maior parte do valor está em Negociação. Mantenha o foco para acelerar os fechamentos.</span></div></div></div>`;
  };
  INIT.dashboard = v => {
    const kg = v.querySelector('#kpigrid');
    const kpiCards = {
      calls: `<div class="card pad" draggable="true"><div class="ch">${ic('phone', 18)}Ligações hoje</div><div style="margin-top:14px;font-size:32px;font-weight:700">8/20</div><div style="background:var(--ln);height:6px;border-radius:3px;margin-top:12px;overflow:hidden"><div style="width:40%;height:100%;background:var(--acc)"></div></div></div>`,
      funnel: `<div class="card pad" draggable="true"><div class="ch">${ic('funnel', 18)}Funil resumido</div><div style="margin-top:12px;display:flex;flex-direction:column;gap:6px"><div style="display:flex;justify-content:space-between"><span style="font-size:12px;color:var(--t3)">Qualificados</span><b>6.800</b></div><div style="background:var(--ln);height:4px;border-radius:2px;overflow:hidden"><div style="width:55%;height:100%;background:var(--g)"></div></div></div></div>`,
      week: `<div class="card pad" draggable="true"><div class="ch">${ic('bars', 18)}Pico da semana</div><div style="margin-top:12px"><div style="font-size:28px;font-weight:700">182</div><div style="font-size:12px;color:var(--t3)">Quarta-feira</div></div></div>`,
      pipeline: `<div class="card pad" draggable="true"><div class="ch">${ic('trend', 18)}Pipeline total</div><div style="margin-top:14px;font-size:28px;font-weight:700">R$ 120.000</div><div style="font-size:12px;color:var(--t3)">em negociação</div></div>`
    };
    const order = JSON.parse(localStorage.getItem('kpiOrder')) || ['calls', 'funnel', 'week', 'pipeline'];
    kg.innerHTML = order.map(k => kpiCards[k]).join('');
    let draggedEl = null;
    kg.addEventListener('dragstart', e => {
      draggedEl = e.target.closest('[draggable]');
      draggedEl.style.opacity = '0.5';
    });
    kg.addEventListener('dragover', e => e.preventDefault());
    kg.addEventListener('drop', e => {
      e.preventDefault();
      const target = e.target.closest('[draggable]');
      if (target && draggedEl && target !== draggedEl) {
        const all = [...kg.querySelectorAll('[draggable]')];
        const dragIdx = all.indexOf(draggedEl);
        const targetIdx = all.indexOf(target);
        if (dragIdx < targetIdx) target.after(draggedEl);else target.before(draggedEl);
        const newOrder = Array.from(kg.querySelectorAll('[draggable]')).map((el, i) => {
          for (let k in kpiCards) if (el.innerHTML === kpiCards[k]) return k;
        });
        localStorage.setItem('kpiOrder', JSON.stringify(newOrder));
      }
    });
    kg.addEventListener('dragend', e => {
      draggedEl.style.opacity = '1';
      draggedEl = null;
    });
  };
  let METAS = [{
    n: 'Meta Outubro 2026',
    p: '01/10/2026 – 31/10/2026',
    r: 'R$ 250.000',
    v: 20,
    pc: 45
  }, {
    n: 'Meta Q4',
    p: '01/10/2026 – 31/12/2026',
    r: 'R$ 900.000',
    v: 75,
    pc: 28
  }];
  const PRODS = [['Operação Autônoma', 'Solução completa para operação com IA', 'monitor', 'bl', 'Solução', 'bl', 'R$ 25.000', 'Recorrente', 'g'], ['IA Básica', 'Implementação inicial e treinamento', 'cpu', 'pu', 'Software', 'pu', 'R$ 7.500', 'Única', 'bl'], ['Consultoria', 'Consultoria estratégica e implementação', 'briefcase', 'am', 'Serviço', 'am', 'R$ 12.000', 'Única', 'bl']];
  const metaCard = m => `<div class="card mcard"><div class="mtop"><div>${pill('Ativa', 'g')}<div class="ct" style="margin-top:10px">${m.n}</div><div class="cs" style="display:flex;gap:8px;align-items:center">${ic('calendar', 15)}${m.p}</div></div>${ring(m.pc, 86, 9, '')}</div>
<div class="mst"><div><small>Receita meta</small><b>${m.r}</b></div><div><small>Vendas alvo</small><b>${m.v}</b></div></div>${bar(m.pc)}
<div class="macts"><button class="btn btn-sm" data-toast="Editando ${m.n}" data-ti="pencil">${ic('pencil', 16)}Editar</button><button class="btn btn-sm" data-toast="Meta duplicada" data-ti="copy">${ic('copy', 16)}Duplicar</button><button class="btn btn-sm btn-d" data-del="${m.n}">${ic('trash', 16)}Excluir</button></div></div>`;
  PAGES.metas = () => `<div class="ph"><div><h1>Metas</h1><p>Defina e acompanhe suas metas comerciais sem misturar com prospecção e execução.</p></div>${dateChip('Outubro 2026')}</div>
<div class="g3">${kpi('target', 'g', 'Metas ativas', '2', '+1', 'vs. mês anterior')}${kpi('bars', 'ac', 'Receita alvo do mês', 'R$ 250.000', '+25%', 'Outubro 2026')}${kpi('database', 'pu', 'Ticket médio geral', 'R$ 12.450', '+12%', 'vs. mês anterior')}</div>
<div class="card pad" style="margin-bottom:20px"><div class="chead">${tile('target', 'g')}<div><div class="ct">Metas atuais</div><div class="cs">Gerencie suas metas de receita e vendas para diferentes períodos.</div></div><button class="btn btn-p" data-new="meta">${ic('plus', 18, 2.2)}Nova Meta</button></div><div class="mgrid" id="mg">${METAS.map(metaCard).join('')}</div></div>
<div class="card pad"><div class="chead">${tile('cube', 'ac')}<div><div class="ct">Produtos / serviços</div><div class="cs">Cadastre e gerencie seus produtos e serviços. Essas informações alimentam o ticket médio nas metas.</div></div><button class="btn btn-p" data-toast="Novo produto" data-ti="plus">${ic('plus', 18, 2.2)}Novo Produto</button></div>
<div class="tw"><table class="tbl"><thead><tr><th>Produto / Serviço</th><th>Categoria</th><th>Ticket médio</th><th>Tipo de receita</th><th>Status</th><th>Ações</th></tr></thead><tbody>${PRODS.map(p => `<tr><td><div class="nm">${tile(p[2], p[3], 20, 's')}<div><b>${p[0]}</b><small>${p[1]}</small></div></div></td><td>${pill(p[4], p[5])}</td><td class="num">${p[6]}</td><td>${pill(p[7], p[8])}</td><td>${dotp('Ativo', 'g')}</td><td><div style="display:flex;gap:6px"><button class="btn btn-sm btn-ic" data-toast="Editar produto" data-ti="pencil">${ic('pencil', 16)}</button><button class="btn btn-sm btn-ic" data-menu>${ic('dots', 16)}</button></div></td></tr>`).join('')}</tbody></table></div></div>`;
  INIT.metas = v => {
    v.addEventListener('click', e => {
      const d = e.target.closest('[data-del]');
      if (d) {
        const c = d.closest('.mcard');
        c.style.opacity = 0;
        c.style.transform = 'scale(.94)';
        setTimeout(() => c.remove(), 300);
        toast('Meta excluída', 'trash');
      }
      const n = e.target.closest('[data-new]');
      if (n) newMeta();
    });
  };
  function newMeta() {
    openDrawer(`<div class="dh"><div>${tile('target', 'g', 24, 'l')}<div class="ct" style="margin-top:16px;font-size:22px">Nova meta</div><div class="cs">Defina período, receita e vendas alvo.</div></div><button class="btn btn-ic btn-sm" data-close>${ic('x', 18)}</button></div><div class="db"><div class="fg" style="display:flex;flex-direction:column;gap:14px;margin-top:14px"><div><label>Nome da meta</label><div class="field"><input id="nm" placeholder="Ex.: Meta Novembro 2026"></div></div><div><label>Receita meta</label><div class="field"><input id="nr" placeholder="R$ 0"></div></div><div><label>Vendas alvo</label><div class="field"><input id="nv" type="number" placeholder="0"></div></div></div></div><div class="df"><button class="btn" data-close>Cancelar</button><button class="btn btn-p" id="ns">Criar meta</button></div>`);
    $('#ns').onclick = () => {
      const m = {
        n: $('#nm').value || 'Nova meta',
        p: '01/11/2026 – 30/11/2026',
        r: $('#nr').value || 'R$ 0',
        v: $('#nv').value || 0,
        pc: 0
      };
      $('#mg').insertAdjacentHTML('beforeend', metaCard(m));
      closeDrawer();
      toast('Meta criada');
    };
  }
  const BASES = [['Clínicas PR', 'Clínicas e consultórios do Paraná', 'building', 'bl', 'Saúde', 'g', 2480, 1920, 540, 120, '12/10/2026', '14:32', 'Concluída', 'g'], ['SaaS Brasil', 'Empresas de software no Brasil', 'cloud', 'pu', 'Tecnologia', 'pu', 3200, 1150, 420, 310, '08/10/2026', '10:15', 'Em análise', 'bl'], ['Restaurantes Maringá', 'Restaurantes e bares de Maringá – PR', 'utensils', 'am', 'Alimentação', 'am', 1850, 980, 310, 90, '03/10/2026', '16:20', 'Concluída', 'g'], ['Google Maps Sul', 'Comércios extraídos do Google Maps', 'pin', 'bl', 'Varejo', 'bl', 4800, 2100, 680, 520, '28/09/2026', '11:08', 'Processando', 'pu'], ['Indústrias SC', 'Indústrias de Santa Catarina', 'factory', 'nn', 'Indústria', 'nn', 2150, 1270, 230, 180, '20/09/2026', '09:44', 'Concluída', 'g']];
  const mb = (n, t) => `<div style="min-width:110px"><b>${n.toLocaleString('pt-BR')}</b> <span style="color:var(--t3);font-size:12px">${Math.round(n / t * 100)}%</span>${bar(Math.round(n / t * 100), 's')}</div>`;
  PAGES.bases = () => `<div class="ph"><div><h1>Bases</h1><p>Visualize e gerencie todas as bases importadas em um só lugar.</p></div></div>
<div class="g4">${kpi('database', 'g', 'Bases ativas', '5', '+1', 'vs. mês anterior')}${kpi('users', 'pu', 'Leads importados', '12.480', '+28%', 'vs. mês anterior')}${kpi('clock', 'am', 'Não analisados', '8.420', '67%', 'do total', 'am')}${kpi('target', 'g', 'Qualificados', '2.180', '+42%', 'do total')}</div>
<div class="card frow"><div class="field">${ic('search', 18)}<input placeholder="Buscar por nome da base..." id="bq"></div>${sf('Segmento', ['Todos', 'Saúde', 'Tecnologia', 'Alimentação', 'Varejo', 'Indústria'])}${sf('Status', ['Todos', 'Concluída', 'Em análise', 'Processando'])}${sf('Responsável', ['Todos', 'Ana Silva', 'Carlos Lima'])}${sf('Período', ['Todos os períodos', 'Últimos 30 dias', 'Este trimestre'])}<button class="btn btn-p" data-toast="Nova base" data-ti="plus">${ic('plus', 18, 2.2)}Nova base</button></div>
<div class="card pad"><div class="chead">${tile('database', 'g')}<div><div class="ct">Bases importadas</div><div class="cs">Cada base é uma origem de leads, com seus próprios indicadores e status.</div></div><span class="cs">5 bases</span></div>
<div class="tw"><table class="tbl" id="bt"><thead><tr><th>Nome da base</th><th>Segmento</th><th>Total de leads</th><th>Analisados</th><th>Qualificados</th><th>Duplicados</th><th>Data de importação</th><th>Status</th><th>Ações</th></tr></thead><tbody>${BASES.map(b => `<tr data-q="${b[0].toLowerCase()}"><td><div class="nm">${tile(b[2], b[3], 20, 's')}<div><b>${b[0]}</b><small>${b[1]}</small></div></div></td><td>${pill(b[4], b[5])}</td><td class="num">${b[6].toLocaleString('pt-BR')}</td><td>${mb(b[7], b[6])}</td><td>${mb(b[8], b[6])}</td><td>${mb(b[9], b[6])}</td><td>${b[10]}<br><small style="color:var(--t3)">${b[11]}</small></td><td>${dotp(b[12], b[13])}</td><td><div style="display:flex;gap:6px"><button class="btn btn-sm btn-ic" data-toast="Editar base" data-ti="pencil">${ic('pencil', 16)}</button><button class="btn btn-sm btn-ic" data-menu>${ic('dots', 16)}</button></div></td></tr>`).join('')}</tbody></table></div></div>
<div class="card banner">${tile('bars', 'g', 26, 'l')}<div style="flex:1;min-width:260px"><div class="ct">Trabalhe com várias bases em paralelo</div><p>Importe novas bases, acompanhe o progresso de análise e qualificação, e mantenha seu pipeline sempre abastecido com novas oportunidades. Escale a prospecção com dezenas de bases ao mesmo tempo.</p></div><button class="btn btn-p" data-toast="Nova base" data-ti="plus">${ic('plus', 18, 2.2)}Nova base</button><a>Saiba mais →</a></div>`;
  INIT.bases = v => {
    $('#bq').oninput = e => $$('#bt tbody tr').forEach(r => r.hidden = !r.dataset.q.includes(e.target.value.toLowerCase()));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_sales_os/salesos/pages1.js", error: String((e && e.message) || e) }); }

// design_handoff_sales_os/salesos/pages2.js
try { (() => {
(() => {
  const L = [['Dogão do João', 'João da Silva LTDA', 'Lanchonete', 'am', 'dogaodojoao.com.br', '@dogaodojoao', '(44) 99912-3456'], ['Pizzaria Bella Roma', 'Bella Roma Pizzaria LTDA', 'Pizzaria', 'rd', 'bellaroma.com.br', '@pizzariabellaroma', '(44) 99987-6543'], ['Café Central', 'Café Central Maringá LTDA', 'Cafeteria', 'am', 'cafecentral.com.br', '@cafecentralmga', '(44) 99876-4321'], ['Sushi Maringá', 'Sushi Maringá LTDA', 'Restaurante', 'g', 'sushimaringa.com.br', '@sushimaringa', '(44) 99955-6677'], ['Bistrô do Parque', 'Bistrô do Parque LTDA', 'Restaurante', 'g', 'bistrodoparque.com.br', '@bistrodoparque', '(44) 99881-2233'], ['Hamburgueria 157', 'HC 157 Alimentos LTDA', 'Hamburgueria', 'bl', 'hamburgueria157.com.br', '@hamburgueria157', '(44) 99772-1889'], ['Cantina Nonna Maria', 'Cantina Nonna Maria LTDA', 'Italiana', 'rd', 'nonnamaria.com.br', '@cantinanonnamaria', '(44) 99661-7788'], ['Temakeria Maringá', 'Temakeria Maringá LTDA', 'Japonesa', 'bl', 'temakeria.com.br', '@temakeriamga', '(44) 99554-3323']];
  PAGES.listas = () => `<div class="ph"><div><h1>Restaurantes Maringá</h1><p>Garimpe, filtre e qualifique os melhores leads desta base.</p></div>${dateChip('Outubro 2026')}</div>
<div class="g4">${kpi('users', 'bl', 'Total de leads', '1.248', '+12%', 'vs. mês anterior')}${kpi('clock', 'pu', 'Não analisados', '892', '72%', '', 'nn')}${kpi('target', 'g', 'Qualificados', '284', '23%', '', 'g')}${kpi('xc', 'rd', 'Descartados', '72', '6%', '', 'rd')}</div>
<div class="card frow"><div class="field">${ic('search', 18)}<input id="lq" placeholder="Buscar por nome, razão social, segmento..."></div>${sf('Segmento', ['Todos', 'Lanchonete', 'Restaurante', 'Pizzaria'])}${sf('Cidade', ['Maringá - PR', 'Sarandi - PR', 'Paiçandu - PR'])}${sf('Status', ['Todos', 'Não analisado', 'Qualificado', 'Descartado'])}${sf('Ordenar por', ['Mais recentes', 'Nome (A–Z)', 'Segmento'])}<button class="btn" data-toast="Colunas atualizadas" data-ti="columns">${ic('columns', 18)}Colunas</button></div>
<div class="card pad"><div class="bulk" id="bulk"><input type="checkbox" class="cb" id="all" checked><b id="bn">3 leads selecionados</b><button class="btn btn-p btn-sm" data-toast="Leads qualificados" data-ti="check">${ic('check', 16, 2.4)}Qualificar selecionados</button><button class="btn btn-sm btn-d" data-toast="Leads descartados" data-ti="x">${ic('x', 16, 2.4)}Descartar selecionados</button><button class="btn btn-sm" data-toast="Tag adicionada" data-ti="tag">${ic('tag', 16)}Adicionar tag</button><span class="sp"></span><a id="clr" style="color:var(--t2);display:flex;gap:6px;align-items:center">${ic('x', 14)}Limpar seleção</a></div>
<div class="tw"><table class="tbl" id="lt"><thead><tr><th style="width:40px"></th><th>Nome Fantasia<br><small style="font-weight:500">Razão Social</small></th><th>Segmento</th><th>Cidade</th><th>Site</th><th>Instagram</th><th>WhatsApp</th><th>Informações</th><th>Aprovar</th></tr></thead><tbody>${L.map((r, i) => `<tr data-q="${(r[0] + r[1] + r[2]).toLowerCase()}"><td><input type="checkbox" class="cb rs" ${i < 3 ? 'checked' : ''}></td><td><div class="nm">${av(r[0])}<div><b>${r[0]}</b><small>${r[1]}</small></div></div></td><td>${pill(r[2], r[3])}</td><td>Maringá - PR</td><td><a style="display:inline-flex;gap:6px;align-items:center">${r[4]}${ic('ext', 13)}</a></td><td><span style="display:inline-flex;gap:7px;align-items:center;color:var(--t2)"><span style="color:var(--pu)">${ic('instagram', 17)}</span>${r[5]}</span></td><td><span style="display:inline-flex;gap:7px;align-items:center;color:var(--t2)"><span style="color:var(--ok)">${ic('chat', 17)}</span>${r[6]}</span></td><td><a style="display:inline-flex;gap:6px;align-items:center">${ic('file', 15)}Ver detalhes</a></td><td><input type="checkbox" class="cb ap" ${i < 3 ? 'checked' : ''}></td></tr>`).join('')}</tbody></table></div>
<div class="pg"><span id="lc">Mostrando 1–8 de 1.248 leads</span><div class="pgs"><span>Itens por página</span>${sf('', ['8', '16', '32'])}<button class="pgb">${ic('chevL', 16)}</button>${[1, 2, 3, 4, 5, '…', 156].map((p, i) => `<button class="pgb ${i ? '' : 'on'}">${p}</button>`).join('')}<button class="pgb">${ic('chevR', 16)}</button></div></div></div>`;
  INIT.listas = () => {
    const sync = () => {
      const n = $$('.rs:checked').length;
      $('#bulk').classList.toggle('hide', !n);
      $('#bn').textContent = n + (n === 1 ? ' lead selecionado' : ' leads selecionados');
      $('#all').checked = n > 0;
    };
    $$('.rs').forEach(c => c.onchange = sync);
    $('#all').onchange = e => {
      $$('.rs').forEach(c => c.checked = e.target.checked);
      sync();
    };
    $('#clr').onclick = () => {
      $$('.rs').forEach(c => c.checked = false);
      sync();
    };
    $('#lq').oninput = e => {
      let n = 0;
      $$('#lt tbody tr').forEach(r => {
        const h = !r.dataset.q.includes(e.target.value.toLowerCase());
        r.hidden = h;
        if (!h) n++;
      });
      $('#lc').textContent = n ? `Mostrando 1–${n} de 1.248 leads` : 'Nenhum lead encontrado';
    };
  };
  const Q = [{
    n: 'Alpha Consultoria',
    s: 'Consultoria em gestão',
    o: 'LinkedIn Ads',
    oi: 'linkedin',
    g: 'Consultoria',
    r: 'Ana Silva',
    st: ['Não abordado', 'rd'],
    crm: 1,
    sel: 1
  }, {
    n: 'Beta Recursos',
    s: 'RH e recrutamento',
    o: 'Website',
    oi: 'globe',
    g: 'Recursos Humanos',
    r: 'Carlos Lima',
    st: ['Tentando contato', 'am'],
    crm: 0,
    sel: 1
  }, {
    n: 'Tech Solutions',
    s: 'Soluções em TI',
    o: 'Base Comprada',
    oi: 'database',
    g: 'Tecnologia',
    r: 'Mariana Costa',
    st: ['Contato realizado', 'bl'],
    crm: 0
  }, {
    n: 'Inova Marketing',
    s: 'Marketing digital',
    o: 'Indicação',
    oi: 'users',
    g: 'Marketing',
    r: 'Ana Silva',
    st: ['Agendamento realizado', 'g'],
    crm: 1,
    sel: 1
  }, {
    n: 'Delta Logística',
    s: 'Transporte e logística',
    o: 'Evento',
    oi: 'calendar',
    g: 'Logística',
    r: 'Bruno Mendes',
    st: ['Não abordado', 'rd'],
    crm: 0
  }];
  const qrows = () => Q.map((q, i) => `<tr><td><input type="checkbox" class="cb qs" data-i="${i}" ${q.sel ? 'checked' : ''}></td><td><div class="nm">${av(q.n)}<div><b>${q.n}</b><small>${q.s}</small></div></div></td><td><span style="display:inline-flex;gap:8px;align-items:center;color:var(--t2)">${ic(q.oi, 17)}${q.o}</span></td><td>${q.g}</td><td><div class="nm">${av(q.r, 'nn', 'xs')}${q.r}</div></td><td>${pill(q.st[0], q.st[1])}</td><td>${q.crm ? pill('Novo', 'bl') : pill('Já existe', 'nn', 'user')}</td><td><button class="btn btn-sm btn-ic" data-menu>${ic('dots', 16)}</button></td></tr>`).join('');
  PAGES.qualificacao = () => `<div class="ph"><div><h1>Qualificados</h1><p>Leads aprovados de todas as bases, prontos para abordagem e envio ao pipeline.</p></div></div>
<div class="g4">${kpi('users', 'bl', 'Total de qualificados', '127', '+12%', 'vs. mês anterior')}${kpi('send', 'bl', 'Não abordados', '48', '38%', 'Aguardando primeiro contato', 'nn')}${kpi('phone', 'g', 'Tentando contato', '52', '41%', 'Em abordagem ativa', 'nn')}${kpi('calCheck', 'g', 'Agendamentos', '27', '21%', 'Reuniões marcadas', 'nn')}</div>
<div class="card pad"><div class="chead">${tile('users', 'g', '22', 's')}<div><div class="ct">Leads qualificados <span style="color:var(--t3)">(127)</span></div><div class="cs">Gerencie os leads aprovados e envie para o pipeline.</div></div><button class="btn" data-toast="Importação iniciada" data-ti="plus">${ic('plus', 18)}Importar qualificados</button><button class="btn btn-ic" data-menu>${ic('dots', 18)}</button></div>
<div class="bulk" id="qb"><input type="checkbox" class="cb" id="qa" checked><b id="qn"></b><button class="btn btn-p btn-sm" id="qsend">${ic('send', 16)}Enviar para Pipeline</button><button class="btn btn-sm" data-toast="Status alterado" data-ti="refresh">${ic('refresh', 16)}Alterar status ${ic('chevD', 14)}</button><button class="btn btn-sm" data-toast="Responsável definido" data-ti="user">${ic('user', 16)}Definir responsável</button><button class="btn btn-sm" data-toast="Tag adicionada" data-ti="tag">${ic('tag', 16)}Adicionar tag</button></div>
<div class="tw"><table class="tbl"><thead><tr><th style="width:40px"></th><th>Empresa</th><th>Base / Origem</th><th>Segmento</th><th>Responsável</th><th>Status de contato</th><th>CRM</th><th>Ações</th></tr></thead><tbody id="qt">${qrows()}</tbody></table></div>${pager('Mostrando 5 de 127 leads', [1, 2, 3, '…', 26])}</div>`;
  function qsync() {
    const n = Q.filter(q => q.sel).length;
    $('#qb').classList.toggle('hide', !n);
    $('#qn').textContent = n + (n === 1 ? ' lead selecionado' : ' leads selecionados');
    $('#qa').checked = n > 0;
  }
  INIT.qualificacao = () => {
    qsync();
    $('#qt').onchange = e => {
      const c = e.target.closest('.qs');
      if (c) {
        Q[c.dataset.i].sel = c.checked;
        qsync();
      }
    };
    $('#qa').onchange = e => {
      Q.forEach(q => q.sel = e.target.checked);
      $('#qt').innerHTML = qrows();
      qsync();
    };
    $('#qsend').onclick = () => {
      const s = Q.filter(q => q.sel),
        n = s.filter(q => q.crm),
        x = s.filter(q => !q.crm);
      const li = (q, t) => `<div class="nm" style="padding:8px 0">${av(q.n)}<div style="flex:1"><b>${q.n}</b><small>${q.s}</small></div>${t}</div>`;
      openDrawer(`<div class="dh"><div>${tile('send', 'g', 26, 'l')}<div class="ct" style="margin-top:16px;font-size:23px">Enviar leads para o Pipeline</div><div class="cs">Revise o resumo abaixo antes de enviar os leads selecionados para o pipeline.</div></div><button class="btn btn-ic btn-sm" data-close>${ic('x', 18)}</button></div>
<div class="db"><div class="opt">${tile('send', 'g', 20, 's')}<div><b>${s.length} leads selecionados</b><small>Analisamos os leads e identificamos duplicados no seu CRM.</small></div></div><div class="opt">${tile('send', 'bl', 20, 's')}<div><b>${n.length} serão enviados</b><small>Novos leads que serão criados no CRM.</small></div></div><div class="opt">${tile('user', 'nn', 20, 's')}<div><b>${x.length} já existe no CRM</b><small>Este lead já está cadastrado no CRM e não será duplicado.</small></div></div>
<div class="sh">Leads que serão enviados (${n.length})</div>${n.map(q => li(q, pill('Novo', 'bl'))).join('') || '<div class="empty">Nenhum lead novo.</div>'}<div class="sh">Leads já existentes no CRM (${x.length})</div>${x.map(q => li(q, pill('Já existe', 'nn', 'user'))).join('') || '<div class="empty">Nenhum.</div>'}<div class="note" style="margin-top:14px">${ic('info', 18)}<span><b style="color:var(--tx)">Não duplicar leads no CRM.</b> O sistema identifica automaticamente quais leads já existem, enviando apenas os novos.</span></div></div>
<div class="df"><button class="btn" data-close>Cancelar</button><button class="btn btn-p" id="qok">${ic('send', 16)}Enviar ${n.length} leads para o Pipeline</button></div>`);
      $('#qok').onclick = () => {
        closeDrawer();
        toast(n.length + ' leads enviados para o Pipeline', 'send');
      };
    };
  };
  const EX = [['Dogão do João', 'Restaurante e Delivery', 'Ligação', 'phone', 'g', '09:00', 'Qualificação', 'bl', 'Apresentar proposta', 'hoje'], ['TechFlow', 'Soluções em TI', 'E-mail', 'mail', 'bl', '10:30', 'Proposta', 'pu', 'Enviar proposta comercial', 'hoje'], ['Clínica Smile', 'Saúde e Estética', 'Reunião', 'users', 'pu', '14:00', 'Descoberta', 'am', 'Reunião de diagnóstico', 'hoje'], ['Mercado Bom Preço', 'Varejo Alimentício', 'WhatsApp', 'chat', 'g', '15:30', 'Follow-up', 'bl', 'Retornar sobre orçamento', 'hoje fu'], ['Academia Performance', 'Fitness e Bem-estar', 'Ligação', 'phone', 'g', '16:30', 'Proposta', 'pu', 'Tirar dúvidas da proposta', 'hoje']];
  const AG = [['09:00', 'Ligação', 'Dogão do João', 'phone', 'g'], ['10:30', 'E-mail', 'TechFlow', 'mail', 'bl'], ['11:30', 'Follow-up (WhatsApp)', 'Mercado Bom Preço', 'chat', 'g'], ['14:00', 'Reunião', 'Clínica Smile', 'users', 'pu'], ['15:30', 'Ligação', 'Academia Performance', 'phone', 'g'], ['16:30', 'E-mail', 'Agência Criativa', 'mail', 'bl'], ['17:00', 'Follow-up', 'Construtora Avante', 'phone', 'pu']];
  const RR = v => 'R$ ' + v.toLocaleString('pt-BR');
  let SCN = 'real';
  const SC = {
      real: null,
      low: [3, 2, 1, 0, 1, 0, 0],
      many: [7, 6, 5, 5, 1, 0, 2],
      good: [4, 3, 3, 3, 5, 4, 3]
    },
    SCL = [['real', 'Pipeline real'], ['low', 'Poucas negociações'], ['many', 'Muito pipeline, pouco fechamento'], ['good', 'Fechamento saudável']],
    AVG = [8000, 16000, 21000, 27000, 22000, 26000, 38000];
  function diag() {
    const P = window.PIPE ? PIPE() : [],
      o = SC[SCN],
      n = P.map((k, i) => o ? o[i] : k.c.length),
      v = P.map((k, i) => o ? o[i] * AVG[i] : k.c.reduce((a, c) => a + c.v, 0)),
      open = n.slice(0, 6).reduce((a, b) => a + b, 0),
      close = n[4] + n[5],
      closeV = v[4] + v[5],
      rate = open ? Math.round(close / open * 100) : 0,
      need = Math.ceil(52000 / 12450);
    let f, a;
    if (close <= 2 && open < 10) {
      f = {
        i: 'phone',
        c: 'rd',
        t: 'Gerar novas negociações',
        d: `Apenas ${close} ${close === 1 ? 'oportunidade está' : 'oportunidades estão'} em proposta ou negociação. O foco do dia é abrir novas conversas com ligações e prospecção ativa.`
      };
      a = [['phone', 'Fazer 30 ligações', 'Há 48 qualificados ainda não abordados. Priorize quem tem WhatsApp e site ativos.', 'Abrir qualificados', 'qualificacao'], ['calendar', 'Agendar reuniões', `${n[1]} leads em Contato aguardam agendamento.`, 'Ver pipeline', 'pipeline'], ['send', 'Enviar qualificados ao pipeline', 'Alimente a etapa Tentativas com novos leads.', 'Enviar leads', 'qualificacao']];
    } else if (open >= 10 && rate < 30) {
      f = {
        i: 'funnel',
        c: 'am',
        t: 'Melhorar a passagem para o fechamento',
        d: `Há ${open} oportunidades abertas, mas só ${close} (${rate}%) estão em proposta ou negociação. O gargalo está no meio do funil.`
      };
      a = [['file', 'Enviar propostas', `${n[3]} reuniões realizadas ainda sem proposta enviada.`, 'Ver pipeline', 'pipeline'], ['mail', 'Confirmar agendamentos', `${n[2]} reuniões agendadas: confirme presença e prepare a pauta.`, 'Ver pipeline', 'pipeline'], ['bars', 'Priorizar por valor', `Oportunidades em Contato somam ${RR(v[1])}. Qualifique orçamento e decisor.`, 'Ver pipeline', 'pipeline']];
    } else {
      f = {
        i: 'trophy',
        c: 'g',
        t: 'Acelerar os fechamentos',
        d: `${close} oportunidades (${RR(closeV)}) estão em proposta ou negociação. Mantenha o ritmo e continue abastecendo o topo do funil.`
      };
      a = [['dollar', 'Avançar negociações', `${n[5]} em negociação somam ${RR(v[5])}. Resolva objeções e condições.`, 'Ver pipeline', 'pipeline'], ['mail', 'Cobrar respostas de propostas', `${n[4]} propostas aguardam retorno (${RR(v[4])}).`, 'Ver pipeline', 'pipeline'], ['phone', 'Manter a prospecção', 'Reserve 10 ligações para novos leads e não esvazie o topo do funil.', 'Abrir qualificados', 'qualificacao']];
    }
    a.unshift(['clock', 'Zerar atividades atrasadas', '3 atividades vencidas. Resolva antes de iniciar novas.', 'Ver atividades', 'late']);
    return {
      f,
      a,
      open,
      close,
      closeV,
      rate,
      need
    };
  }
  const todayPanel = () => {
    const d = diag();
    return `<div class="card pad" style="margin-bottom:20px"><div class="chead">${tile('bulb', 'ac', 22, 's')}<div><div class="ct">O que devemos fazer hoje</div><div class="cs">Recomendação calculada a partir do pipeline atual e da meta do período.</div></div></div>
<div class="scn"><span>Simular cenário</span><div class="seg" id="scn">${SCL.map(([k, l]) => `<button data-s="${k}" class="${SCN === k ? 'on' : ''}">${l}</button>`).join('')}</div></div>
<div class="tdy"><div class="focus k-${d.f.c}">${tile(d.f.i, d.f.c, 26, 'l')}<div><span class="eyebrow" style="margin:0">FOCO DO DIA</span><div class="ct" style="font-size:22px;margin:4px 0">${d.f.t}</div><p class="cs">${d.f.d}</p></div></div>
<div class="facts"><div><small>Oportunidades abertas</small><b>${d.open}</b></div><div><small>Em fechamento</small><b>${d.close} <span style="font-size:14px;color:var(--t3)">${d.rate}%</span></b></div><div><small>Valor em fechamento</small><b>${RR(d.closeV)}</b></div><div><small>Falta para a meta</small><b>R$ 52.000</b> <small style="display:inline">≈ ${d.need} vendas</small></div></div></div>
<div class="acts">${d.a.map((x, i) => `<div class="act"><span class="no">${i + 1}</span>${tile(x[0], 'ac', 20, 's')}<div><b>${x[1]}</b><p class="cs">${x[2]}</p></div><button class="btn btn-sm" data-act="${x[4]}">${x[3]}${ic('chevR', 14)}</button></div>`).join('')}</div></div>`;
  };
  PAGES.execucao = () => `<div class="ph"><div><h1>Execução</h1><p>Tudo o que precisa ser feito hoje: tentativas, follow-ups, cadências e reuniões.</p></div></div>
<div class="g4">${kpi('clock', 'rd', 'Atrasadas', '3', '+3', 'vs. ontem', 'rd')}${kpi('calendar', 'g', 'Hoje', '12', '+2', 'atividades agendadas')}${kpi('mail', 'bl', 'Follow-ups', '5', '+2', 'e-mails e mensagens', 'bl')}${kpi('users', 'pu', 'Reuniões', '2', '+1', 'hoje na agenda', 'pu')}</div>
<div id="todayw">${todayPanel()}</div>
<div style="display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:20px" class="exg">
<div class="card pad"><div style="margin-bottom:18px"><div class="tabs">${[['hoje', 'Hoje'], ['late', 'Atrasadas (3)'], ['fu', 'Follow-ups (5)'], ['cad', 'Cadências (4)'], ['next', 'Próximas']].map(([k, l], i) => `<button class="tab ${i ? '' : 'on'}" data-tab="${k}">${l}</button>`).join('')}</div></div>
<div class="chead">${tile('target', 'g', 22, 's')}<div><div class="ct">Minhas atividades</div><div class="cs">Lista de todas as atividades do dia, vinculadas aos leads e empresas.</div></div><button class="btn btn-p" data-toast="Nova atividade" data-ti="plus">${ic('plus', 18, 2.2)}Nova atividade</button></div>
<div class="tw"><table class="tbl"><thead><tr><th style="width:40px"></th><th>Lead / Empresa</th><th>Tipo</th><th>Horário</th><th>Etapa atual</th><th>Próxima ação</th><th>Ações</th></tr></thead><tbody id="et">${EX.map(r => `<tr data-g="${r[9]}"><td><input type="checkbox" class="cb"></td><td><div class="nm">${av(r[0])}<div><b>${r[0]}</b><small>${r[1]}</small></div></div></td><td>${pill(r[2], r[4], r[3])}</td><td class="num">${r[5]}</td><td>${pill(r[6], r[7])}</td><td style="max-width:150px">${r[8]}</td><td><div style="display:flex;gap:8px"><button class="btn btn-p btn-sm done">${ic('check', 16, 2.4)}Concluir</button><button class="btn btn-sm" data-toast="Atividade reagendada" data-ti="calendar">${ic('calendar', 16)}Reagendar</button><button class="btn btn-sm btn-ic" data-menu>${ic('dots', 16)}</button></div></td></tr>`).join('')}</tbody></table><div class="empty" id="ee" hidden>Nenhuma atividade nesta visão.</div></div></div>
<div class="card pad"><div class="chead">${tile('calendar', 'g', 20, 's')}<div><div class="ct" style="font-size:17px">Agenda de hoje</div></div>${pill('12 atividades', 'g')}</div><div class="tl">${AG.map(a => `<div class="k-${a[4]}"><i class="d"></i><b>${a[0]}</b><div class="it"><span style="color:color-mix(in oklab,var(--c) 75%,var(--tx))">${ic(a[3], 17)}</span><div><b>${a[1]}</b><small>${a[2]}</small></div></div></div>`).join('')}</div></div></div>`;
  INIT.execucao = v => {
    $('#todayw').onclick = e => {
      const s = e.target.closest('[data-s]');
      if (s) {
        SCN = s.dataset.s;
        $('#todayw').innerHTML = todayPanel();
        return;
      }
      const a = e.target.closest('[data-act]');
      if (a) {
        const k = a.dataset.act;
        if (k === 'late') {
          const V = $('#view');
          V.scrollTo({
            top: $('.exg').getBoundingClientRect().top - V.getBoundingClientRect().top + V.scrollTop - 20,
            behavior: 'smooth'
          });
        } else go(k);
      }
    };
    $('#et').onclick = e => {
      const b = e.target.closest('.done');
      if (b) {
        const r = b.closest('tr');
        r.classList.add('done');
        b.disabled = true;
        b.innerHTML = ic('check', 16, 2.4) + 'Concluída';
        toast('Atividade concluída');
      }
    };
    v.querySelector('.tabs').onclick = e => {
      const t = e.target.closest('.tab');
      if (!t) return;
      const k = t.dataset.tab;
      let n = 0;
      $$('#et tr').forEach(r => {
        const s = k === 'hoje' || r.dataset.g.split(' ').includes(k);
        r.hidden = !s;
        if (s) n++;
      });
      $('#ee').hidden = n > 0;
    };
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_sales_os/salesos/pages2.js", error: String((e && e.message) || e) }); }

// design_handoff_sales_os/salesos/pages3.js
try { (() => {
(() => {
  const TAG = {
    'Solução': 'bl',
    'IA Básica': 'pu',
    'Consultoria': 'am',
    'Operação Autônoma': 'g'
  };
  let COLS = [['Tentativas', [['Dogão do João', 'Alimentação', 'IA Básica', 7500, 'Rafael Silva', 'Ligar amanhã'], ['Academia PowerFit', 'Saúde e Bem-estar', 'IA Básica', 5000, 'Rafael Silva', 'Enviar apresentação'], ['Loja Estilo Mix', 'Varejo', 'Operação Autônoma', 12000, 'Carla Pinto', 'Ligar amanhã']]], ['Contato', [['TechFlow', 'Tecnologia', 'Solução', 25000, 'Carla Pinto', 'Agendar reunião'], ['Farmácia Popular', 'Saúde', 'Solução', 15000, 'Lucas Mendes', 'Confirmar interesse'], ['Mercado Bom Preço', 'Varejo', 'IA Básica', 8500, 'Lucas Mendes', 'Enviar materiais']]], ['Agendamento', [['Clínica Smile', 'Saúde', 'Solução', 22000, 'Rafael Silva', 'Reunião em 22/10'], ['Escola Futuro', 'Educação', 'Solução', 20000, 'Carla Pinto', 'Reunião em 21/10']]], ['Reunião realizada', [['Construtora Horizonte', 'Construção Civil', 'Consultoria', 35000, 'Lucas Mendes', 'Enviar proposta'], ['Restaurante Sabor & Cia', 'Alimentação', 'IA Básica', 20000, 'Rafael Silva', 'Aguardando retorno']]], ['Proposta', [['Clínica Vida', 'Saúde', 'Solução', 28000, 'Rafael Silva', 'Aguardar aprovação'], ['Colégio Ideal', 'Educação', 'Solução', 22000, 'Lucas Mendes', 'Negociar condições'], ['Rede Farma+', 'Saúde', 'Consultoria', 18000, 'Carla Pinto', 'Aguardar retorno']]], ['Negociação', [['Posto Avenida', 'Combustíveis', 'Solução', 30000, 'Lucas Mendes', 'Ajustar escopo'], ['AgroCampo', 'Agronegócio', 'Consultoria', 22000, 'Rafael Silva', 'Negociar preço']]], ['Ganhos', [['Clínica Sorriso', 'Saúde', 'Solução', 45000, 'Rafael Silva', 'Contrato assinado'], ['Padaria do Centro', 'Alimentação', 'IA Básica', 33500, 'Carla Pinto', 'Implementação']]]].map(([n, c]) => ({
    n,
    c: c.map(x => ({
      n: x[0],
      s: x[1],
      t: x[2],
      v: x[3],
      o: x[4],
      a: x[5]
    }))
  }));
  let SEL = 'Clínica Smile';
  window.PIPE = () => COLS;
  window.DEAL = () => COLS.flatMap(k => k.c.map(c => ({
    ...c,
    st: k.n
  }))).find(c => c.n === SEL) || {
    n: 'Clínica Smile',
    s: 'Saúde',
    t: 'Solução',
    v: 22000,
    o: 'Rafael Silva',
    a: 'Reunião em 22/10',
    st: 'Agendamento'
  };
  const R = v => 'R$ ' + v.toLocaleString('pt-BR');
  const card = c => `<div class="kc ${c.n === SEL ? 'sel' : ''}" draggable="true" data-n="${c.n}"><div class="t">${av(c.n)}<div style="flex:1;min-width:0"><b>${c.n}</b><small>${c.s}</small></div><span style="color:var(--t3)">${ic('dots', 16)}</span></div>${pill(c.t, TAG[c.t])}<div class="v">${R(c.v)}</div><div class="f">${av(c.o, 'nn', 'xs')}${c.o}</div><div class="f">${ic(c.a === 'Contrato assinado' ? 'check' : 'calendar', 15)}${c.a}</div></div>`;
  const board = () => COLS.map((k, i) => `<div class="kcol" data-i="${i}"><div class="kh"><div>${k.n}${pill(k.c.length, 'nn')}</div><small>${R(k.c.reduce((a, c) => a + c.v, 0))}</small></div>${k.c.map(card).join('')}</div>`).join('');
  const stats = () => {
    const all = COLS.flatMap(k => k.c),
      open = COLS.slice(0, 6).flatMap(k => k.c);
    return `<div class="g4">${kpi('users', 'bl', 'Oportunidades', all.length, '+20%', 'vs. mês anterior')}${kpi('dollar', 'g', 'Valor potencial', R(open.reduce((a, c) => a + c.v, 0)), '+35%', 'vs. mês anterior')}${kpi('file', 'pu', 'Propostas', COLS[4].c.length, '+33%', 'vs. mês anterior')}${kpi('trophy', 'g', 'Ganhos', COLS[6].c.length, '+67%', 'vs. mês anterior')}</div>`;
  };
  PAGES.pipeline = () => `<div class="ph"><div><h1>Pipeline Comercial</h1><p>Acompanhe as oportunidades por etapa, mantendo contexto completo do lead.</p></div></div><div id="ps">${stats()}</div>
<div class="card frow"><div class="field">${ic('search', 18)}<input id="pq" placeholder="Buscar empresa, contato ou oportunidade..."></div>${sf('Responsável', ['Todos', 'Rafael Silva', 'Carla Pinto', 'Lucas Mendes'])}${sf('Produto', ['Todos', 'Solução', 'IA Básica', 'Consultoria'])}${sf('Origem / Base', ['Todas', 'Indicação', 'Google Maps'])}${sf('Status de contato', ['Todos', 'Interessado', 'Sem retorno'])}<button class="btn btn-p" data-toast="Nova oportunidade" data-ti="plus">${ic('plus', 18, 2.2)}Nova oportunidade</button></div>
<div class="kan" id="kan">${board()}</div>`;
  function detail(c) {
    const stage = COLS.find(k => k.c.includes(c)).n;
    const row = (i, l, v) => `<div class="dl">${ic(i, 18)}<span>${l}</span><b>${v}</b></div>`;
    openDrawer(`<div class="dh"><div style="display:flex;gap:14px;align-items:center">${tile('cross', 'bl', 26, 'l')}<div><div class="ct" style="font-size:21px">${c.n}</div><div class="cs">${c.s}${c.n === 'Clínica Smile' ? ' &nbsp;•&nbsp; CNPJ 12.345.678/0001-90' : ''}</div></div></div><button class="btn btn-ic btn-sm" data-close>${ic('x', 18)}</button></div>
<div class="db"><div class="tabs" style="margin:6px 0 10px">${['Detalhes', 'Histórico', 'Tarefas', 'Arquivos'].map((t, i) => `<button class="tab ${i ? '' : 'on'}" data-tab="${t}">${t}</button>`).join('')}</div>
<div id="dt">${row('building', 'Empresa', c.n)}${row('refresh', 'Origem / Base', 'Indicação')}${row('user', 'Contato', c.n === 'Clínica Smile' ? 'Dra. Juliana Alves<br><a>juliana@clinicasmile.com.br</a><br>(11) 98765-4321' : 'A definir')}${row('cube', 'Produto', pill(c.t, TAG[c.t]))}${row('user', 'Responsável', av(c.o, 'g', 'xs') + ' &nbsp;' + c.o)}${row('dollar', 'Valor estimado', R(c.v))}
<div class="dl">${ic('pipeline', 18)}<span>Etapa do pipeline</span>${sf('', COLS.map(k => k.n).map(n => n === stage ? n + ' ' : n).map(x => x), 'dst')}</div>${row('chat', 'Status de contato', pill('Interessado', 'g'))}${row('calendar', 'Próxima ação', c.a)}
<div class="note" style="margin-top:10px">${ic('info', 18)}<span>${c.n === 'Clínica Smile' ? 'Reunião online para apresentar a solução e entender necessidades da clínica.' : 'Sem observações registradas.'}</span></div></div></div>
<div class="df"><button class="btn btn-p" data-go="negocio">${ic('file', 16)}Abrir ficha</button><button class="btn btn-ic" style="flex:none" data-menu>${ic('dots', 18)}</button></div>`);
    const s = $('#dst');
    s.selectedIndex = COLS.findIndex(k => k.n === stage);
    s.onchange = () => {
      move(c, s.selectedIndex);
      toast('Movida para ' + COLS[s.selectedIndex].n, 'pipeline');
    };
    $('#drawer .tabs').onclick = e => {
      const t = e.target.closest('.tab');
      if (t) $('#dt').innerHTML = t.dataset.tab === 'Detalhes' ? $('#dt').dataset.h || '' : '<div class="empty">Sem registros ainda.</div>';
    };
    $('#dt').dataset.h = $('#dt').innerHTML;
  }
  const move = (c, to) => {
    COLS.forEach(k => k.c = k.c.filter(x => x !== c));
    COLS[to].c.push(c);
    $('#kan').innerHTML = board();
    $('#ps').innerHTML = stats();
  };
  INIT.pipeline = () => {
    const kan = $('#kan');
    let drag = null;
    kan.onclick = e => {
      const k = e.target.closest('.kc');
      if (!k) return;
      const c = COLS.flatMap(x => x.c).find(x => x.n === k.dataset.n);
      SEL = c.n;
      $$('.kc', kan).forEach(x => x.classList.toggle('sel', x === k));
      detail(c);
    };
    kan.ondragstart = e => {
      const k = e.target.closest('.kc');
      if (!k) return;
      drag = COLS.flatMap(x => x.c).find(x => x.n === k.dataset.n);
      k.classList.add('drag');
    };
    kan.ondragend = e => {
      e.target.classList?.remove('drag');
      $$('.kcol', kan).forEach(x => x.classList.remove('over'));
    };
    kan.ondragover = e => {
      const c = e.target.closest('.kcol');
      if (c) {
        e.preventDefault();
        $$('.kcol', kan).forEach(x => x.classList.toggle('over', x === c));
      }
    };
    kan.ondrop = e => {
      const c = e.target.closest('.kcol');
      if (c && drag) {
        e.preventDefault();
        move(drag, +c.dataset.i);
        toast('Movida para ' + COLS[+c.dataset.i].n, 'pipeline');
      }
      drag = null;
    };
    $('#pq').oninput = e => $$('.kc', kan).forEach(k => k.hidden = !k.textContent.toLowerCase().includes(e.target.value.toLowerCase()));
  };
  const EM = [['Dogão do João', 'Lanchonete', 'Maringá - PR', 'Rafael Silva', 'Lead', 'bl'], ['Clínica Smile', 'Saúde', 'São Paulo - SP', 'Rafael Silva', 'Oportunidade', 'pu'], ['TechFlow', 'Tecnologia', 'Curitiba - PR', 'Carla Pinto', 'Oportunidade', 'pu'], ['Clínica Sorriso', 'Saúde', 'Londrina - PR', 'Rafael Silva', 'Cliente', 'g'], ['Construtora Horizonte', 'Construção Civil', 'Maringá - PR', 'Lucas Mendes', 'Oportunidade', 'pu'], ['Padaria do Centro', 'Alimentação', 'Maringá - PR', 'Carla Pinto', 'Cliente', 'g'], ['Posto Avenida', 'Combustíveis', 'Cascavel - PR', 'Lucas Mendes', 'Oportunidade', 'pu'], ['Café Central', 'Cafeteria', 'Maringá - PR', 'Ana Silva', 'Lead', 'bl']];
  PAGES.empresas = () => `<div class="ph"><div><h1>Empresas</h1><p>Cadastro centralizado de todos os leads e clientes.</p></div><button class="btn btn-p" data-toast="Nova empresa" data-ti="plus">${ic('plus', 18, 2.2)}Nova empresa</button></div>
<div class="g3">${kpi('building', 'bl', 'Empresas cadastradas', '1.248')}${kpi('user', 'g', 'Clientes', '2', '', 'Contratos ativos')}${kpi('pipeline', 'pu', 'Em oportunidade', '17', '', 'Dentro do pipeline')}</div>
<div class="card pad"><div class="field" style="margin-bottom:16px">${ic('search', 18)}<input id="eq" placeholder="Buscar empresa, segmento ou cidade..."></div><div class="tw"><table class="tbl" id="et2"><thead><tr><th>Empresa</th><th>Segmento</th><th>Cidade</th><th>Responsável</th><th>Relacionamento</th><th></th></tr></thead><tbody>${EM.map(r => `<tr data-q="${r.join(' ').toLowerCase()}"><td><div class="nm">${av(r[0])}<b>${r[0]}</b></div></td><td>${r[1]}</td><td>${r[2]}</td><td><div class="nm">${av(r[3], 'nn', 'xs')}${r[3]}</div></td><td>${pill(r[4], r[5])}</td><td><button class="btn btn-sm btn-ic" data-menu>${ic('dots', 16)}</button></td></tr>`).join('')}</tbody></table></div></div>`;
  INIT.empresas = () => {
    $('#eq').oninput = e => $$('#et2 tbody tr').forEach(r => r.hidden = !r.dataset.q.includes(e.target.value.toLowerCase()));
  };
  const TPL = [['Turquesa Clean', 'Claro, relevo suave', 'light', 'neu', 1], ['Dark Futurista', 'Escuro, neon e grade', 'dark', 'future', 7], ['Azul Premium', 'Claro, vidro líquido', 'light', 'liquid', 5], ['Âmbar Elegante', 'Escuro, plano e direto', 'dark', 'flat', 15]];
  const ST = [['neu', 'Neumorfismo', 'Relevo suave de luz e sombra'], ['flat', 'Flat UI', 'Sem sombras, bordas finas'], ['material', 'Material Design', 'Elevação e campos preenchidos'], ['glass', 'Glassmorphism', 'Vidro fosco translúcido'], ['liquid', 'Liquid Glass', 'Vidro fluido com brilho'], ['clay', 'Claymorphism', 'Formas infladas e macias'], ['bento', 'Bento UI', 'Blocos compactos e tintados'], ['soft', 'Soft Minimalism', 'Ar, sombras difusas'], ['card', 'Card-based UI', 'Cartões com cabeçalho'], ['depth', '3D UI', 'Camadas e botões físicos'], ['future', 'Futuristic UI', 'Neon, grade e cantos cortados'], ['spatial', 'Spatial UI', 'Vidro profundo e perspectiva'], ['contrast', 'High Contrast UI', 'Preto e branco, bordas firmes']];
  const PN = ['Aqua', 'Índigo', 'Orquídea', 'Terracota', 'Oliva', 'Areia', 'Petróleo', 'Rosa', 'Ametista', 'Âmbar'];
  const prev = (th, su, pal) => '<div class="tp" data-theme="' + th + '" data-surface="' + su + '" style="' + palVars(pal, th) + '"><i class="bl" style="width:80px;height:80px;background:var(--b1);left:-10px;top:-14px"></i><i class="bl" style="width:90px;height:90px;background:var(--b2);right:-20px;bottom:-30px"></i><div class="card mc"><div style="display:flex;gap:8px;align-items:center"><span class="tile s" style="--c:var(--acc);width:26px;height:26px;border-radius:9px"></span><span class="bar s" style="flex:1"><i style="--w:60%;animation:none"></i></span></div><span class="mini"></span></div></div>';
  PAGES.config = () => {
    const S = SET.get(),
      t = SET.theme();
    return `<div class="ph"><div><h1>Configurações</h1><p>Personalize o Sales OS: estilo da interface, paleta de cores, modo e efeitos.</p></div></div>
<div class="tabs" style="margin-bottom:20px"><button class="tab on" data-go="config">Aparência</button><button class="tab" data-go="conta">Conta</button></div>
<div class="card pad" style="margin-bottom:20px"><div class="chead">${tile('wand', 'ac', 22, 's')}<div><div class="ct">Templates prontos</div><div class="cs">Aplique uma combinação de modo, estilo e paleta com um clique.</div></div></div><div class="tpg">${TPL.map((p, i) => `<button class="tpw ${S.mode === p[2] && S.surface === p[3] && S.pal === p[4] ? 'on' : ''}" data-tpl="${i}">${prev(p[2], p[3], p[4])}<b>${p[0]}</b><small>${p[1]}</small></button>`).join('')}</div></div>
<div class="card pad" style="margin-bottom:20px"><div class="chead">${tile('layers', 'ac', 22, 's')}<div><div class="ct">Estilo da interface</div><div class="cs">13 estilos. Mudam superfícies, sombras, bordas, cantos e profundidade em todas as telas.</div></div></div><div class="tpg">${ST.map(([k, l, d]) => `<button class="tpw ${S.surface === k ? 'on' : ''}" data-surf="${k}">${prev(t, k, S.pal)}<b>${l}</b><small>${d}</small></button>`).join('')}</div></div>
${palCard(S)}
<div class="card pad"><div class="srow"><div><b>Modo</b><small>Claro, escuro ou seguindo o sistema.</small></div><div class="seg" id="smode">${[['light', 'Claro', 'sun'], ['dark', 'Escuro', 'moon'], ['system', 'Sistema', 'monitor']].map(([k, l, i]) => `<button data-mode="${k}" class="${S.mode === k ? 'on' : ''}">${ic(i, 18)}${l}</button>`).join('')}</div></div>
<div class="srow"><div><b>Efeito liquid</b><small>Fundo fluido, indicador gotejante no menu e brilho nas barras.</small></div><button class="sw ${S.liquid ? 'on' : ''}" data-tg="liquid" aria-label="Efeito liquid"></button></div>
<div class="srow"><div><b>Animações</b><small>Transições e entradas suaves nas telas.</small></div><button class="sw ${S.motion ? 'on' : ''}" data-tg="motion" aria-label="Animações"></button></div>
<div class="srow"><div><b>Menu lateral compacto</b><small>Mostra apenas os ícones na barra lateral.</small></div><button class="sw ${S.compact ? 'on' : ''}" data-tg="compact" aria-label="Menu compacto"></button></div></div>`;
  };
  INIT.config = v => {
    v.onclick = e => {
      const b = e.target.closest('[data-tpl],[data-mode],[data-surf],[data-pal],[data-tg]');
      if (!b) return;
      const d = b.dataset;
      if (d.tpl) {
        const p = TPL[d.tpl];
        setS({
          mode: p[2],
          surface: p[3],
          pal: p[4]
        });
      } else if (d.mode) setS({
        mode: d.mode
      });else if (d.surf) setS({
        surface: d.surf
      });else if (d.pal) setS({
        pal: +d.pal
      });else if (d.tg) setS({
        [d.tg]: !SET.get()[d.tg]
      });
    };
  };
  PAGES.conta = () => `<div class="ph"><div><h1>Conta</h1><p>Dados do usuário e do workspace.</p></div></div>
<div class="tabs" style="margin-bottom:20px"><button class="tab" data-go="config">Aparência</button><button class="tab on" data-go="conta">Conta</button></div>
<div class="card pad"><div class="chead">${av('Sales Ops', 'ac')}<div><div class="ct">Perfil</div><div class="cs">Informações exibidas para o time.</div></div></div><div class="fgrid">${[['Nome', 'Usuário Sales Ops'], ['E-mail', 'usuario@avraham.com.br'], ['Workspace', 'Avraham Hub'], ['Cargo', 'Gestor comercial']].map(([l, v]) => `<div class="fg"><label>${l}</label><div class="field"><input value="${v}"></div></div>`).join('')}</div><div style="margin-top:22px;display:flex;gap:12px"><button class="btn btn-p" data-toast="Alterações salvas" data-ti="check">${ic('check', 16, 2.4)}Salvar alterações</button><button class="btn">Cancelar</button></div></div>`;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_sales_os/salesos/pages3.js", error: String((e && e.message) || e) }); }

// design_handoff_sales_os/salesos/pages4.js
try { (() => {
(() => {
  const NM = ["Turquesa", "Aqua", "Ciano Elétrico", "Azul Royal", "Azul Cobalto", "Azul Petróleo", "Índigo", "Violeta", "Roxo Premium", "Magenta", "Rosa", "Vermelho", "Coral", "Laranja", "Âmbar", "Amarelo", "Lima", "Verde", "Esmeralda", "Grafite Premium"];
  const GR = [['Frios', [0, 1, 2, 3, 4, 5, 6]], ['Roxos', [7, 8, 9, 10, 11]], ['Quentes', [11, 12, 13, 14, 15, 16]], ['Naturais', [16, 17, 18]], ['Neutro', [19]]];
  const mini = (th, su, pal) => `<div class="tp tpm" data-theme="${th}" data-surface="${su}" style="${palVars(pal, th)}"><div class="card mc"><div class="mr"><span class="mini"></span><span class="mini2"></span></div><svg viewBox="0 0 60 18" preserveAspectRatio="none"><polyline points="0,14 10,10 20,12 30,5 42,8 60,2" fill="none" stroke="var(--acc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><div class="msel"></div></div></div>`;
  window.palCard = S => `<div class="card pad" style="margin-bottom:20px"><div class="chead">${tile('palette', 'ac', 22, 's')}<div><div class="ct">Paleta de cores</div><div class="cs">20 paletas. Fundo e cartões neutros, só o destaque tem força. Cada uma mostra a versão clara (esquerda) e escura (direita) no estilo atual.</div></div></div>
${GR.map(([g, ix]) => `<div class="pgrp">${g}</div><div class="pw">${ix.map(i => {
    const p = PAL[i];
    return `<button class="tpw ${S.pal === i + 1 ? 'on' : ''}" data-pal="${i + 1}"><div class="pal2">${mini('light', S.surface, i + 1)}${mini('dark', S.surface, i + 1)}</div><b>${String(i + 1).padStart(2, '0')} · ${NM[i]}</b><div class="dots">${[p[2], p[5], p[1], p[4]].map(c => `<i style="background:${c}"></i>`).join('')}</div></button>`;
  }).join('')}</div>`).join('')}</div>`;
  const CO = [['Baco Espaço Gastronômico', 'Restaurante', 4.7, 1260, 'Av. São Paulo, 1880 - Zona 02, Maringá - PR, 87010-350', '+55 44 99910-2771', 'bacorestaurante.com.br', '@bacoespacogastronomico'], ['Black Bull Steakhouse', 'Restaurante', 4.7, 2646, 'Av. Cerro Azul, 1033 - Zona 02, Maringá - PR, 87010-000', '+55 44 3122-0247', 'blackbullsteakhouse.com.br', '@blackbullsteakhouse'], ['El Piratas – Restaurante Temático', 'Restaurante', 4.9, 1112, 'Av. Tiradentes, 211 - Centro, Maringá - PR, 87013-260', '+55 44 99135-7072', 'elpiratas.com.br', '@elpiratas.mga'], ['Restaurante Monte Líbano', 'Restaurante libanês', 4.6, 998, 'Av. São Paulo, 1374 - Zona 02, Maringá - PR, 87010-350', '+55 44 3227-2047', 'restaurantemontelibano.com.br', '@restaurantemontelibano'], ['Taberna Portuguesa', 'Restaurante português', 4.5, 640, 'Rua Néo Alves Martins, 520 - Centro, Maringá - PR', '+55 44 3026-1122', 'tabernaportuguesa.com.br', '@tabernamga'], ['Cantina do Vale', 'Restaurante italiano', 4.3, 214, 'Av. Pedro Taques, 890 - Zona 03, Maringá - PR', '+55 44 99822-3140', '', '']].map(r => ({
    n: r[0],
    g: r[1],
    r: r[2],
    rv: r[3],
    ad: r[4],
    ph: r[5],
    site: r[6],
    ig: r[7],
    crm: 0,
    alta: !r[6]
  }));
  const PS = {
    tab: 'todos',
    rat: 0,
    sort: 'rel',
    q: 'Restaurantes',
    crm: {}
  };
  const list = () => {
    let a = CO.filter(c => PS.rat <= c.r && (PS.tab === 'todos' || PS.tab === 'alta' && c.alta || PS.tab === 'site' && !c.site));
    if (PS.sort === 'az') a.sort((x, y) => x.n.localeCompare(y.n));
    if (PS.sort === 'za') a.sort((x, y) => y.n.localeCompare(x.n));
    if (PS.sort === 'av') a.sort((x, y) => y.rv - x.rv);
    return a;
  };
  const card = c => `<div class="card rc" data-c="${CO.indexOf(c)}"><div class="ac"><button class="btn btn-sm btn-ic" data-wa style="color:var(--ok)" title="WhatsApp">${ic('chat', 17)}</button><button class="btn btn-sm btn-ic" data-cp title="Copiar">${ic('copy', 16)}</button></div><h3>${c.n}</h3><div class="m">${pill(c.alta ? 'Alta oportunidade' : 'Baixa oportunidade', c.alta ? 'g' : 'nn')}${dotp('Aberto agora', 'g')}</div><div class="m"><span style="color:var(--acc-t)">${c.g}</span><span>${ic('pin', 15)}Maringá</span><span>${ic('star', 15)}${String(c.r).replace('.', ',')} (${c.rv.toLocaleString('pt-BR')} avaliações)</span></div><div class="m"><span>${ic('pin', 15)}${c.ad}</span></div><div class="m"><span>${ic('phone', 15)}${c.ph}</span>${c.site ? `<span>${ic('globe', 15)}${c.site}</span>` : `<span style="color:var(--am)">${ic('globe', 15)}Sem site</span>`}${c.ig ? `<span>${ic('instagram', 15)}${c.ig}</span>` : ''}</div><div><button class="btn btn-sm" data-crm>${ic(c.crm ? 'check' : 'database', 15)}${c.crm ? 'No CRM' : 'Adicionar ao CRM'}</button></div></div>`;
  const results = () => {
    const a = list();
    return `<div class="res">${a.map(card).join('') || '<div class="empty">Nenhuma empresa com esses filtros.</div>'}</div>`;
  };
  PAGES.prospeccao = () => `<div class="ph"><div><div class="eyebrow">PROSPECÇÃO</div><h1>Encontre empresas em segundos</h1><p>Digite um nicho, escolha o estado e a cidade, e descubra oportunidades.</p></div><button class="btn" data-go="novalista">${ic('filter', 18)}Filtros de qualidade</button></div>
<div class="card pad" style="margin-bottom:24px"><div class="frow" style="padding:0;margin:0;box-shadow:none;background:none;border:0;-webkit-backdrop-filter:none;backdrop-filter:none;align-items:flex-end"><div style="flex:2;min-width:220px"><div class="fg"><label>Nicho de mercado</label><div class="field">${ic('search', 18)}<input id="pn" value="${PS.q}"></div></div></div>${sf('Estado', ['Paraná (PR)', 'São Paulo (SP)', 'Santa Catarina (SC)'])}${sf('Cidade (opcional)', ['MARINGÁ', 'LONDRINA', 'CASCAVEL'])}<button class="btn btn-p" id="pgo" style="height:46px">${ic('search', 18)}Buscar</button></div>
<div class="chips" style="margin-top:16px"><span class="lb" style="margin:0">Sugestões populares:</span>${['Academias', 'Restaurantes', 'Pet shop', 'Clínicas odontológicas', 'Salão de beleza'].map(s => `<button class="chp" data-sg="${s}">${s}</button>`).join('')}</div></div>
<div class="eyebrow">RESULTADOS</div><div id="phd"></div><div class="tabs" id="ptabs" style="margin:14px 0"></div><div class="chips" id="pfil" style="margin-bottom:18px"></div><div id="pres"></div>`;
  const head = () => {
    const a = list();
    $('#phd').innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:4px"><h2 style="font-size:28px;font-weight:800;letter-spacing:-.02em">${a.length} empresas <span style="color:var(--t3)">· ${PS.q} em MARINGÁ, PR</span></h2><button class="btn btn-sm" data-toast="Exportação disponível no plano Pro" data-ti="lock">${ic('download', 16)}Exportar CSV · Pro</button></div>`;
    $('#ptabs').innerHTML = [['todos', 'Todos', CO.length], ['alta', 'Alta oportunidade', CO.filter(c => c.alta).length], ['site', 'Sem site', CO.filter(c => !c.site).length]].map(([k, l, n]) => `<button class="tab ${PS.tab === k ? 'on' : ''}" data-t="${k}">${l} <span style="color:var(--t3)">${n}</span></button>`).join('');
    $('#pfil').innerHTML = `<span class="lb">Avaliação:</span>${[[0, 'Todas'], [4, '4+'], [4.5, '4.5+']].map(([v, l]) => `<button class="chp ${PS.rat === v ? 'on' : ''}" data-r="${v}">${l}</button>`).join('')}<span class="lb">Ordenar:</span>${[['rel', 'Relevância'], ['az', 'A → Z'], ['za', 'Z → A'], ['av', 'Mais avaliadas']].map(([k, l]) => `<button class="chp ${PS.sort === k ? 'on' : ''}" data-o="${k}">${l}</button>`).join('')}`;
    $('#pres').innerHTML = results();
  };
  function ficha(c) {
    const H = [['Segunda', 'Fechado'], ['Terça', '11:30 – 15:00, 18:30 – 00:00'], ['Quarta', '11:30 – 15:00, 18:30 – 00:00'], ['Quinta', '11:30 – 15:00, 18:30 – 00:00'], ['Sexta', '11:00 – 15:00, 18:30 – 00:00'], ['Sábado', '11:30 – 15:00, 18:30 – 00:30'], ['Domingo', '11:30 – 15:00, 18:00 – 23:45']];
    openDrawer(`<div class="dh"><div><span class="eyebrow">FICHA COMPLETA</span><div class="ct" style="font-size:23px;margin-top:6px">${c.n}</div><div class="cs" style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:6px"><span style="color:var(--acc-t)">${c.g}</span><span style="display:inline-flex;gap:5px;align-items:center">${ic('star', 14)}${String(c.r).replace('.', ',')} (${c.rv.toLocaleString('pt-BR')})</span>${dotp('Aberto agora', 'g')}</div></div><button class="btn btn-ic btn-sm" data-close>${ic('x', 18)}</button></div>
<div class="db"><div style="margin:4px 0 12px">${pill(c.alta ? 'Alta oportunidade' : 'Baixa oportunidade', c.alta ? 'g' : 'nn')} <span class="cs" style="margin-left:8px">SCORE ${c.alta ? 72 : 0}</span></div>
<div class="opt">${tile('phone', 'bl', 18, 's')}<div><small>TELEFONE</small><b>${c.ph}</b></div></div><div class="opt">${tile('globe', c.site ? 'bl' : 'am', 18, 's')}<div><small>SITE</small><b>${c.site || 'Sem site'}</b></div></div>${c.ig ? `<div class="opt">${tile('instagram', 'pu', 18, 's')}<div><small>INSTAGRAM</small><b>${c.ig}</b></div></div>` : ''}
<div class="sec2">Endereço</div><div style="display:flex;gap:10px;align-items:center">${ic('pin', 18)}${c.ad}</div><div class="sec2">Horário de funcionamento</div><div class="hrs">${H.map(h => `<div><span>${h[0]}</span>${h[1] === 'Fechado' ? pill('Fechado', 'nn') : pill(h[1], 'g')}</div>`).join('')}</div>
<div class="note" style="margin-top:16px">${ic('info', 18)}<span>${c.alta ? 'Negócio sem site próprio: boa oportunidade para oferecer presença digital.' : 'Negócio com presença digital sólida: menor potencial de prospecção fria.'}</span></div>
<div class="card sm" style="padding:16px;margin-top:16px"><span class="eyebrow">ASSISTENTE DE ABERTURA</span><div class="ct" style="font-size:16px;margin:2px 0 12px">Gerar mensagem de abertura com IA</div><button class="btn btn-p" style="width:100%" id="gm">${ic('sparkles', 18)}Gerar mensagem</button><div id="gmo"></div></div></div>
<div class="df"><button class="btn btn-p" id="mp">${ic('check', 16, 2.4)}Marcar como prospectado</button></div>`);
    $('#gm').onclick = () => {
      $('#gmo').innerHTML = `<div class="msg" style="margin-top:12px">Olá, tudo bem? Vi o ${c.n} no Google (${String(c.r).replace('.', ',')} estrelas e ${c.rv.toLocaleString('pt-BR')} avaliações) e percebi ${c.site ? 'que vocês já têm uma boa base de clientes' : 'que vocês ainda não têm um site próprio'}. Trabalho ajudando negócios de ${c.g.toLowerCase()} a gerar mais pedidos. Posso te mostrar uma ideia rápida?</div>`;
    };
    $('#mp').onclick = () => {
      closeDrawer();
      toast('Marcado como prospectado');
    };
  }
  INIT.prospeccao = v => {
    head();
    const click = e => {
      const t = e.target.closest('[data-t]');
      if (t) {
        PS.tab = t.dataset.t;
        return head();
      }
      const r = e.target.closest('[data-r]');
      if (r) {
        PS.rat = +r.dataset.r;
        return head();
      }
      const o = e.target.closest('[data-o]');
      if (o) {
        PS.sort = o.dataset.o;
        return head();
      }
      const sg = e.target.closest('[data-sg]');
      if (sg) {
        PS.q = sg.dataset.sg;
        $('#pn').value = PS.q;
        return head();
      }
      const cb = e.target.closest('[data-crm]');
      if (cb) {
        const c = CO[cb.closest('.rc').dataset.c];
        c.crm = c.crm ? 0 : 1;
        head();
        return toast(c.crm ? 'Adicionado ao CRM' : 'Removido do CRM', 'database');
      }
      if (e.target.closest('[data-wa]')) return toast('Abrindo WhatsApp', 'chat');
      if (e.target.closest('[data-cp]')) return toast('Dados copiados', 'copy');
      const rc = e.target.closest('.rc');
      if (rc) ficha(CO[rc.dataset.c]);
    };
    v.addEventListener('click', click);
    $('#pgo').onclick = () => {
      PS.q = $('#pn').value || 'Empresas';
      head();
      toast('Busca atualizada', 'search');
    };
  };
  const QF = [['contab', 'Excluir números de escritório contábil', 1, 1, 'Ligado: a lista esconde números de escritório contábil. Desligado: eles aparecem com a tag Contabilidade.', 18], ['matriz', 'Só matriz', 1, 0, 'Sede da empresa, não filial.', 22], ['free', 'Ocultar e-mails de provedor gratuito', 0, 0, 'Gmail, Hotmail e outros provedores pessoais.', 14], ['fisc', 'Excluir endereços de escritório fiscal', 0, 0, 'O mesmo endereço em várias empresas costuma ser da contabilidade, não da loja.', 9], ['qual', 'Só empresas já qualificadas', 0, 0, 'Lista só quem já passou pela qualificação. Desligado por padrão.', 31]];
  const MF = [['simples', 'Excluir optantes do Simples', 'Regime Simples Nacional.', 12], ['dom', 'Exigir e-mail de domínio próprio', 'E-mail no domínio da empresa, não Gmail ou Hotmail.', 20], ['dec', 'Exigir decisor identificado', 'Sócio que pode decidir (quadro de sócios).', 8]];
  const NL = {
    on: {
      contab: 1
    },
    open: true,
    porte: '',
    anos: 'Qualquer'
  };
  const cnt = () => {
    let n = 112;
    QF.forEach(q => NL.on[q[0]] && (n -= q[5]));
    MF.forEach(m => NL.on[m[0]] && (n -= m[3]));
    if (NL.porte) n -= 20;
    if (NL.anos !== 'Qualquer') n -= NL.anos === '3 anos' ? 6 : NL.anos === '5 anos' ? 12 : 20;
    return Math.max(5, n);
  };
  const sw = k => `<button class="sw ${NL.on[k] ? 'on' : ''}" data-k="${k}" aria-label="${k}"></button>`;
  PAGES.novalista = () => `<div class="ph"><div><a data-go="prospeccao" style="display:inline-flex;gap:6px;align-items:center;margin-bottom:10px">${ic('arrowL', 16)}Voltar à região</a><h1>Nova lista</h1><p>Refine a busca antes de gerar a lista.</p></div></div>
<div class="chips" style="margin-bottom:14px">${['1 Nicho', '2 Região', '3 Qualidade'].map(s => `<span class="step">${s}</span>`).join('')}<span class="chp on" style="cursor:default">Pizzarias</span><span class="chp" style="cursor:default">PR · MARINGÁ</span>${pill('Sem telefone de contabilidade', 'g')}</div>
<div class="nego nl"><div><div class="card pad" style="margin-bottom:20px"><div class="chead">${tile('shield', 'ac', 22, 's')}<div><div class="ct">Qualidade do contato</div></div></div>${QF.map(q => `<div class="sq"><div><b>${q[1]}${q[2] ? `<span class="rec">RECOMENDADO</span>` : ''}</b><small>${q[4]}</small></div>${sw(q[0])}</div>`).join('')}</div>
<div class="card pad" style="margin-bottom:20px"><button class="chead" id="mf" style="width:100%;background:none;border:0;margin:0;text-align:left;color:inherit"><div class="ct" style="flex:1">Mais filtros</div><span id="mfc" style="transition:transform .3s">${ic('chevD', 20)}</span></button><div id="mfb"><div class="sec2" style="margin-top:14px">Porte</div><div class="chips">${['ME · micro', 'EPP · pequeno porte', 'Demais'].map(x => `<button class="chp ${NL.porte === x ? 'on' : ''}" data-p="${x}">${x}</button>`).join('')}</div><div class="sec2">Empresa aberta há mais de</div><div class="chips">${['Qualquer', '3 anos', '5 anos', '10 anos'].map(x => `<button class="chp ${NL.anos === x ? 'on' : ''}" data-a="${x}">${x === 'Qualquer' ? ic('check', 14, 2.6) : ''}${x}</button>`).join('')}</div><div style="margin-top:14px">${MF.map(q => `<div class="sq"><div><b>${q[1]}</b><small>${q[2]}</small></div>${sw(q[0])}</div>`).join('')}</div></div></div>
<button class="btn btn-p" style="width:100%;height:50px" id="vr">Ver resultados</button></div>
<div class="card pad sticky" style="align-self:start"><div class="ch">Empresas nesta busca</div><div class="big" id="nc" style="margin:8px 0 16px">66</div><div class="ch" style="color:var(--tx)">Onde concentra</div><div class="rows" style="margin-top:10px"><div><small>MARINGÁ - PR</small><b id="nc2">66</b></div></div>${bar(100)}<div class="cs" style="margin-top:14px;line-height:1.9" id="nst2"></div></div></div>`;
  INIT.novalista = v => {
    const upd = () => {
      const n = cnt();
      $('#nc').textContent = n;
      $('#nc2').textContent = n;
      $('#nst2').innerHTML = `Com telefone: ${n}<br>Com e-mail: ${Math.round(n * .77)}<br>Com decisor: ${Math.round(n * .94)}`;
      $('#vr').textContent = 'Ver resultados (' + n + ')';
    };
    upd();
    v.addEventListener('click', e => {
      const k = e.target.closest('[data-k]');
      if (k) {
        NL.on[k.dataset.k] = !NL.on[k.dataset.k];
        k.classList.toggle('on');
        return upd();
      }
      const p = e.target.closest('[data-p]');
      if (p) {
        NL.porte = NL.porte === p.dataset.p ? '' : p.dataset.p;
        $$('[data-p]', v).forEach(b => b.classList.toggle('on', b.dataset.p === NL.porte));
        return upd();
      }
      const a = e.target.closest('[data-a]');
      if (a) {
        NL.anos = a.dataset.a;
        $$('[data-a]', v).forEach(b => b.classList.toggle('on', b.dataset.a === NL.anos));
        return upd();
      }
      if (e.target.closest('#mf')) {
        NL.open = !NL.open;
        $('#mfb').hidden = !NL.open;
        $('#mfc').style.transform = NL.open ? '' : 'rotate(-90deg)';
      }
      if (e.target.closest('#vr')) {
        toast('Lista gerada com ' + cnt() + ' empresas', 'list');
        go('listas');
      }
    });
  };
  const NEG = {
    h: [{
      t: 'Ligar',
      x: 'Ligação feita',
      d: '22/09'
    }, {
      t: 'Ligar',
      x: 'Ligação feita',
      d: '21/09'
    }],
    tab: 'Ligar',
    stage: null,
    state: 1,
    calling: false
  };
  const TABS = [['Nota', 'file'], ['Ligar', 'phone'], ['WhatsApp', 'chat'], ['Follow-up', 'repeat'], ['Reunião', 'calendar'], ['Proposta', 'file'], ['E-mail', 'mail']];
  const ICM = {
    Nota: 'file',
    Ligar: 'phone',
    WhatsApp: 'chat',
    'Follow-up': 'repeat',
    'Reunião': 'calendar',
    Proposta: 'file',
    'E-mail': 'mail'
  };
  const hist = () => NEG.h.map(h => `<div class="hl">${ic(ICM[h.t] || 'phone', 18)}<div><b>${h.x}</b>${h.n ? `<small>${h.n}</small>` : ''}</div><span class="dt">${h.d}</span></div>`).join('');
  PAGES.negocio = () => {
    const d = DEAL(),
      st = PIPE().map(k => k.n);
    if (NEG.stage === null || NEG.deal !== d.n) {
      NEG.stage = Math.max(0, st.indexOf(d.st));
      NEG.deal = d.n;
    }
    return `<div class="ph"><div><a data-go="pipeline" style="display:inline-flex;gap:6px;align-items:center;margin-bottom:10px">${ic('arrowL', 16)}Voltar ao pipeline</a><h1 style="font-size:30px">${d.n}</h1><p>${d.s} · Maringá - PR</p></div><div class="seg" id="nstt">${['Perdido', 'Em andamento', 'Ganho'].map((x, i) => `<button data-s="${i}" class="${NEG.state === i ? 'on' : ''}">${x}</button>`).join('')}</div></div>
<div class="card pad" style="margin-bottom:20px"><div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap"><span class="btn btn-sm" style="cursor:default">${ic('phone', 16)}(44) 3122-0247</span><b>JULIANA ALVES</b><button class="btn btn-p btn-sm" id="cb">${ic('phone', 16)}<span>Ligar</span></button><span class="pill k-ac" id="ctimer" hidden></span><button class="btn btn-sm" data-toast="Abrindo WhatsApp" data-ti="chat">${ic('chat', 16)}WhatsApp</button><span class="sp"></span><span style="color:var(--t3);display:flex;gap:12px">${ic('globe', 18)}${ic('instagram', 18)}${ic('chat', 18)}${ic('pin', 18)}</span></div><div class="path" id="npath">${st.map((n, i) => `<button class="${i === NEG.stage ? 'on' : i < NEG.stage ? 'past' : ''}" data-i="${i}">${n}</button>`).join('')}</div></div>
<div class="nego"><div><div class="card" style="padding:0;overflow:hidden"><div class="tabs" id="ntabs" style="margin:14px;display:flex">${TABS.map(([t, i]) => `<button class="tab ${NEG.tab === t ? 'on' : ''}" data-t="${t}">${ic(i, 16)}${t}</button>`).join('')}</div><div style="padding:0 18px 18px"><textarea class="ta" id="nt" placeholder="O que considerar nesta ação?"></textarea><div style="display:flex;gap:14px;align-items:flex-end;margin-top:14px;flex-wrap:wrap"><div class="fg"><label>PRAZO</label><div class="field">${ic('calendar', 17)}<input id="np" value="22/09/2026"></div></div><div class="fg"><label>HORÁRIO</label><div class="field"><input id="nh" value="10:00"></div></div><span class="sp"></span><button class="btn btn-p" id="ns">Salvar</button></div></div></div>
<div class="sec2">Próximas ações</div><div class="hl">${ic('calendar', 18)}<div><b>${d.a}</b><small>Responsável: ${d.o}</small></div></div><div class="sec2">Histórico</div><div id="nh2">${hist()}</div></div>
<div style="display:flex;flex-direction:column;gap:16px"><div class="card pad"><span class="eyebrow">VALOR</span><div class="field" style="margin-top:8px"><input id="nv" value="R$ ${d.v.toLocaleString('pt-BR')},00" style="font-weight:800;font-size:20px"></div></div><div class="card pad"><span class="eyebrow">TELEFONE DA EMPRESA</span><div class="rows" style="margin-top:10px"><div><b>(44) 3122-0247</b><small>Site</small></div></div></div><div class="card pad"><span class="eyebrow">PESSOAS</span><div class="rows" style="margin-top:10px"><div><small>Juliana Alves</small><b style="font-size:13px">Decisora</b></div><div><small>Marcos</small><b style="font-size:13px">Secretário</b></div></div></div></div></div>`;
  };
  INIT.negocio = v => {
    clearInterval(window._ct);
    NEG.calling = false;
    let sec = 0;
    v.addEventListener('click', e => {
      const t = e.target.closest('#ntabs .tab');
      if (t) {
        NEG.tab = t.dataset.t;
        $$('#ntabs .tab').forEach(x => x.classList.toggle('on', x === t));
      }
      const s = e.target.closest('#nstt [data-s]');
      if (s) {
        NEG.state = +s.dataset.s;
        $$('#nstt button').forEach(x => x.classList.toggle('on', x === s));
        toast(['Negócio marcado como perdido', 'Negócio em andamento', 'Negócio ganho'][NEG.state], NEG.state === 2 ? 'trophy' : 'check');
      }
      const p = e.target.closest('#npath [data-i]');
      if (p) {
        NEG.stage = +p.dataset.i;
        $$('#npath button').forEach((b, i) => {
          b.className = i === NEG.stage ? 'on' : i < NEG.stage ? 'past' : '';
        });
        toast('Etapa: ' + p.textContent, 'pipeline');
      }
      if (e.target.closest('#ns')) {
        NEG.h.unshift({
          t: NEG.tab,
          x: NEG.tab === 'Nota' ? 'Nota registrada' : NEG.tab + ' agendado',
          n: $('#nt').value,
          d: $('#np').value.slice(0, 5)
        });
        $('#nh2').innerHTML = hist();
        $('#nt').value = '';
        toast('Registrado no histórico');
      }
      if (e.target.closest('#cb')) {
        const b = $('#cb'),
          tm = $('#ctimer');
        NEG.calling = !NEG.calling;
        if (NEG.calling) {
          sec = 0;
          tm.hidden = false;
          tm.textContent = '00:00';
          b.innerHTML = ic('phoneOff', 16) + '<span>Desligar</span>';
          window._ct = setInterval(() => {
            if (!$('#ctimer')) return clearInterval(window._ct);
            sec++;
            tm.textContent = String(Math.floor(sec / 60)).padStart(2, '0') + ':' + String(sec % 60).padStart(2, '0');
          }, 1000);
        } else {
          clearInterval(window._ct);
          b.innerHTML = ic('phone', 16) + '<span>Ligar</span>';
          tm.hidden = true;
          NEG.h.unshift({
            t: 'Ligar',
            x: 'Ligação feita',
            n: 'Duração ' + tm.textContent,
            d: 'hoje'
          });
          $('#nh2').innerHTML = hist();
          toast('Ligação registrada', 'phone');
        }
      }
    });
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_sales_os/salesos/pages4.js", error: String((e && e.message) || e) }); }

// design_handoff_sales_os/salesos/pages5.js
try { (() => {
(() => {
  const SQ = [{
    n: 'Prospecção Multicanal (Padrão)',
    s: [['WhatsApp', 0], ['E-mail', 2], ['LinkedIn', 2]]
  }];
  const CHI = {
    'WhatsApp': ['chat', 'g'],
    'E-mail': ['mail', 'bl'],
    'LinkedIn': ['linkedin', 'pu']
  };
  let DR = [{
    ch: 'WhatsApp',
    d: 0,
    sub: '',
    tx: ''
  }];
  const step = (s, i) => `<div class="it" data-i="${i}"><div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">${tile('layers', 'ac', 18, 's')}<b style="flex:1">ETAPA ${i + 1}</b><button class="btn btn-sm btn-ic btn-d" data-rm="${i}" aria-label="Remover etapa">${ic('trash', 16)}</button></div><div class="fr">${sf('Canal de contato', ['WhatsApp', 'E-mail', 'LinkedIn'])}<div class="fg"><label>Atraso (dias)</label><div class="field"><input type="number" min="0" data-f="d" value="${s.d}"></div></div></div>${s.ch === 'E-mail' ? `<div class="fg" style="margin-top:12px"><label>Assunto do e-mail</label><div class="field"><input data-f="sub" value="${s.sub}" placeholder="Ex.: dúvida rápida sobre o Google da [Empresa]"></div></div>` : ''}<div class="fg" style="margin-top:12px"><label>Texto do script (opcional)</label><textarea class="ta" data-f="tx" placeholder="Se deixar vazio, a IA gera um gancho contextualizado dinamicamente...">${s.tx}</textarea></div></div>`;
  const bld = () => {
    $('#sqb').innerHTML = DR.map(step).join('');
    $$('#sqb .sf select').forEach((s, i) => s.value = DR[i].ch);
  };
  const saved = () => SQ.map((q, k) => `<div class="card pad sm" style="margin-bottom:14px"><div class="chead" style="margin-bottom:12px"><div><div class="ct" style="font-size:17px">${q.n}</div><div class="cs">${q.s.length} passos configurados</div></div><button class="btn btn-sm btn-ic" data-toast="Editando sequência" data-ti="pencil">${ic('pencil', 16)}</button><button class="btn btn-sm btn-ic btn-d" data-del="${k}">${ic('trash', 16)}</button></div><div class="chips">${q.s.map((s, i) => pill(`Passo ${i + 1} (${s[1]}d)`, CHI[s[0]][1], CHI[s[0]][0])).join('')}</div></div>`).join('') || '<div class="empty">Nenhuma sequência salva.</div>';
  PAGES.sequencias = () => `<div class="ph"><div><h1>Sequências de prospecção</h1><p>Monte cadências de contato com atraso entre os passos. As sequências salvas aparecem no Pipeline e na Execução.</p></div></div>
<div class="g2 g2s"><div class="card pad"><div class="chead">${tile('repeat', 'ac', 22, 's')}<div><div class="ct">Criar nova sequência</div></div></div><div class="fg"><label>Nome da sequência</label><div class="field"><input id="sqn" placeholder="Ex.: Prospecção fria – Clínicas"></div></div><div class="sec2">Passos da sequência</div><div class="sqs" id="sqb"></div><div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px"><button class="btn" id="sadd">${ic('plus', 18, 2.2)}Adicionar passo</button><button class="btn btn-p" id="ssv">${ic('save', 18)}Salvar sequência</button></div></div>
<div><div class="sec2" style="margin-top:0">Suas sequências salvas</div><div id="sqs">${saved()}</div></div></div>`;
  INIT.sequencias = v => {
    DR = [{
      ch: 'WhatsApp',
      d: 0,
      sub: '',
      tx: ''
    }];
    bld();
    v.addEventListener('input', e => {
      const f = e.target.dataset.f;
      if (f) {
        const i = +e.target.closest('.it').dataset.i;
        DR[i][f] = f === 'd' ? +e.target.value : e.target.value;
      }
    });
    v.addEventListener('change', e => {
      if (e.target.matches('.sf select')) {
        const i = +e.target.closest('.it').dataset.i;
        DR[i].ch = e.target.value;
        bld();
      }
    });
    v.addEventListener('click', e => {
      if (e.target.closest('#sadd')) {
        DR.push({
          ch: 'E-mail',
          d: 2,
          sub: '',
          tx: ''
        });
        bld();
        return;
      }
      const r = e.target.closest('[data-rm]');
      if (r) {
        if (DR.length > 1) {
          DR.splice(+r.dataset.rm, 1);
          bld();
        } else toast('A sequência precisa de ao menos um passo', 'info');
        return;
      }
      const d = e.target.closest('[data-del]');
      if (d) {
        SQ.splice(+d.dataset.del, 1);
        $('#sqs').innerHTML = saved();
        toast('Sequência excluída', 'trash');
        return;
      }
      if (e.target.closest('#ssv')) {
        SQ.push({
          n: $('#sqn').value || 'Nova sequência',
          s: DR.map(s => [s.ch, s.d])
        });
        $('#sqs').innerHTML = saved();
        $('#sqn').value = '';
        DR = [{
          ch: 'WhatsApp',
          d: 0,
          sub: '',
          tx: ''
        }];
        bld();
        toast('Sequência salva', 'check');
      }
    });
  };
  const RT = {
      BRL: 1,
      USD: 5.2143,
      EUR: 5.9298,
      GBP: 6.9144
    },
    fm = (v, c) => v.toLocaleString('pt-BR', {
      style: 'currency',
      currency: c
    });
  let CL = [{
    n: 'Pedro',
    st: 'Em andamento',
    ds: 'Projeto de tráfego pago',
    wa: '44997171553',
    loc: 'Maringá / PR',
    cur: 'USD',
    val: 100,
    rec: 'Mensal',
    dia: 28,
    ini: '18/09/2026',
    org: 'Prospectei pela plataforma'
  }];
  let CF = 'Todos',
    CQ = '';
  const STS = ['Prospect', 'Em andamento', 'Ativo', 'Finalizado', 'Cancelado'],
    STC = {
      Prospect: 'bl',
      'Em andamento': 'am',
      Ativo: 'g',
      Finalizado: 'nn',
      Cancelado: 'rd'
    };
  const clsum = () => {
    const at = CL.filter(c => c.st === 'Ativo');
    return {
      n: at.length,
      m: at.filter(c => c.rec === 'Mensal').reduce((a, c) => a + c.val * RT[c.cur], 0),
      u: at.filter(c => c.rec !== 'Mensal').reduce((a, c) => a + c.val * RT[c.cur], 0)
    };
  };
  const clcard = (c, i) => `<div class="card cl"><div class="top">${av(c.n)}<b>${c.n}</b>${pill(c.st, STC[c.st])}<span class="sp"></span><button class="btn btn-sm btn-ic" style="color:var(--ok)" data-toast="Abrindo WhatsApp" data-ti="chat">${ic('chat', 16)}</button><button class="btn btn-sm btn-ic" data-ed="${i}">${ic('pencil', 16)}</button><button class="btn btn-sm btn-ic btn-d" data-dl="${i}">${ic('trash', 16)}</button></div><div class="cs">${c.ds}</div><div class="m" style="display:flex;gap:14px;flex-wrap:wrap;color:var(--t2);font-size:13px"><span style="display:inline-flex;gap:6px;align-items:center">${ic('chat', 14)}${c.wa}</span><span style="display:inline-flex;gap:6px;align-items:center">${ic('pin', 14)}${c.loc}</span></div><div style="border-top:1px solid var(--ln);padding-top:12px;display:flex;justify-content:space-between;align-items:flex-end;gap:10px"><div><small style="color:var(--t3);font-weight:700;letter-spacing:.08em">${c.rec === 'Mensal' ? 'MENSALIDADE' : 'VALOR ÚNICO'}</small><div style="font-size:22px;font-weight:800">${fm(c.val, c.cur)} ${c.cur !== 'BRL' ? `<span style="font-size:13px;color:var(--t3);font-weight:600">(${fm(c.val * RT[c.cur], 'BRL')})</span>` : ''}</div></div><div style="text-align:right;font-size:12px;color:var(--t2)"><div>Próxima: ${c.dia}/${c.ini.slice(3)}</div><div style="color:var(--t3)">Início: ${c.ini}</div></div></div></div>`;
  const clbody = () => {
    const s = clsum(),
      a = CL.filter(c => (CF === 'Todos' || c.st === CF) && c.n.toLowerCase().includes(CQ));
    $('#clk').innerHTML = `${kpi('users', 'bl', 'Clientes ativos', s.n)}${kpi('trend', 'g', 'Receita mensal (BRL)', fm(s.m, 'BRL'))}${kpi('dollar', 'pu', 'Receita única (BRL)', fm(s.u, 'BRL'))}<div class="card kpi" style="align-items:flex-start">${tile('refresh', 'ac')}<div class="kb" style="flex:1"><span class="kl">Cotação do dia</span>${['USD', 'EUR', 'GBP'].map(c => `<div style="display:flex;justify-content:space-between;font-weight:600"><span class="ks">1 ${c}</span><span>${fm(RT[c], 'BRL').replace(',', ',')}</span></div>`).join('')}</div></div>`;
    $('#clt').innerHTML = ['Todos', ...STS].map(t => `<button class="tab ${CF === t ? 'on' : ''}" data-f="${t}">${t} <span style="color:var(--t3)">${t === 'Todos' ? CL.length : CL.filter(c => c.st === t).length}</span></button>`).join('');
    $('#cll').innerHTML = a.length ? `<div class="cx">${a.map(c => clcard(c, CL.indexOf(c))).join('')}</div>` : '<div class="card pad empty">Nenhum cliente cadastrado ainda. Clique em Adicionar cliente para começar.</div>';
    $('#clq').textContent = `Plano gratuito: ${CL.length}/5 clientes.`;
  };
  PAGES.clientes = () => `<div class="ph"><div><div class="eyebrow">FINANCEIRO</div><h1>Clientes</h1><p>Gerencie seus clientes e acompanhe a receita convertida para BRL.</p></div><button class="btn btn-p" id="cadd">${ic('plus', 18, 2.2)}Adicionar cliente</button></div>
<div class="g4" id="clk"></div><div class="card" style="padding:12px 18px;margin-bottom:18px;display:flex;align-items:center;gap:12px"><span class="cs" id="clq" style="flex:1"></span><button class="btn btn-p btn-sm" data-toast="Plano Pro em breve" data-ti="sparkles">${ic('sparkles', 15)}Upgrade Pro</button></div>
<div class="tabs" id="clt" style="margin-bottom:14px"></div><div class="field" style="margin-bottom:18px">${ic('search', 18)}<input id="clsq" placeholder="Buscar cliente por nome..."></div><div id="cll"></div>`;
  function cform(i, pre) {
    const c = pre || (i >= 0 ? CL[i] : {
      n: '',
      org: 'Prospectei pela plataforma',
      val: '',
      cur: 'BRL',
      rec: 'Mensal',
      dia: 5,
      st: 'Prospect',
      ds: '',
      loc: 'Maringá / PR',
      wa: '',
      ini: '01/10/2026'
    });
    openDrawer(`<div class="dh"><div>${tile('users', 'g', 24, 'l')}<div class="ct" style="margin-top:16px;font-size:22px">${i >= 0 ? 'Editar cliente' : 'Adicionar cliente'}</div><div class="cs">Passo 1 de 2</div></div><button class="btn btn-ic btn-sm" data-close>${ic('x', 18)}</button></div><div class="db"><div class="frm"><div><label>Nome</label><div class="field"><input id="cfn" value="${c.n}"></div></div><div class="two"><div><label>Valor</label><div class="field"><input id="cfv" type="number" value="${c.val}"></div></div>${sf('Moeda', ['BRL', 'USD', 'EUR', 'GBP'], 'cfc')}</div><div class="two">${sf('Cobrança', ['Mensal', 'Única'], 'cfr')}<div><label>Dia de cobrança</label><div class="field"><input id="cfd" type="number" min="1" max="31" value="${c.dia}"></div></div></div>${sf('Status', STS, 'cfs')}<div><label>Descrição</label><div class="field"><input id="cfx" value="${c.ds}"></div></div><div class="two"><div><label>Localização</label><div class="field"><input id="cfl" value="${c.loc}"></div></div><div><label>WhatsApp</label><div class="field"><input id="cfw" value="${c.wa}"></div></div></div></div></div><div class="df"><button class="btn" data-close>Cancelar</button><button class="btn btn-p" id="cfn2">Revisar</button></div>`);
    $('#cfc').value = c.cur;
    $('#cfr').value = c.rec;
    $('#cfs').value = c.st;
    $('#cfn2').onclick = () => {
      const n = {
        ...c,
        n: $('#cfn').value || 'Sem nome',
        val: +$('#cfv').value || 0,
        cur: $('#cfc').value,
        rec: $('#cfr').value,
        dia: +$('#cfd').value || 1,
        st: $('#cfs').value,
        ds: $('#cfx').value || '—',
        loc: $('#cfl').value,
        wa: $('#cfw').value
      };
      const rows = [['Nome', n.n], ['Origem', n.org], ['Valor', fm(n.val, n.cur) + ' · ' + n.rec], ['Dia de cobrança', 'Dia ' + n.dia], ['Status', n.st], ['Descrição', n.ds], ['Localização', n.loc], ['WhatsApp', n.wa || '—']];
      openDrawer(`<div class="dh"><div>${tile('check', 'g', 24, 'l')}<div class="ct" style="margin-top:16px;font-size:22px">Tudo certo?</div><div class="cs">Confira os dados antes de salvar. Nada é gravado até você confirmar.</div></div><button class="btn btn-ic btn-sm" data-close>${ic('x', 18)}</button></div><div class="db"><div class="hrs">${rows.map(r => `<div><span style="color:var(--t3);font-weight:600;font-size:12px;letter-spacing:.06em;text-transform:uppercase">${r[0]}</span><b>${r[1]}</b></div>`).join('')}</div></div><div class="df"><button class="btn" id="cfb">${ic('arrowL', 16)}Voltar</button><button class="btn btn-p" id="cfs2">${ic('check', 16, 2.4)}Salvar alterações</button></div>`);
      $('#cfb').onclick = () => cform(i, n);
      $('#cfs2').onclick = () => {
        if (i >= 0) CL[i] = n;else CL.push(n);
        closeDrawer();
        clbody();
        toast('Cliente salvo');
      };
    };
  }
  INIT.clientes = v => {
    clbody();
    $('#cadd').onclick = () => cform(-1);
    $('#clsq').oninput = e => {
      CQ = e.target.value.toLowerCase();
      clbody();
    };
    v.addEventListener('click', e => {
      const f = e.target.closest('#clt [data-f]');
      if (f) {
        CF = f.dataset.f;
        return clbody();
      }
      const ed = e.target.closest('[data-ed]');
      if (ed) return cform(+ed.dataset.ed);
      const dl = e.target.closest('[data-dl]');
      if (dl) {
        CL.splice(+dl.dataset.dl, 1);
        clbody();
        toast('Cliente excluído', 'trash');
      }
    });
  };
  const CC = {
    fat: 180000,
    tk: 15000,
    pz: 2
  };
  const calc = () => {
    const ct = Math.ceil(CC.fat / CC.tk),
      ng = Math.ceil(ct / .4),
      r2 = Math.ceil(ng / .4),
      r1 = Math.ceil(r2 / .6),
      ag = Math.ceil(r1 / .5),
      dc = Math.ceil(ag / .25),
      lg = Math.ceil(dc / .8),
      dia = Math.ceil(lg / (CC.pz * 22));
    return {
      st: [['Contratos', ct, 'meta'], ['Negociações', ng, '40% → contratos'], ['2ª reunião', r2, '40% → negociação'], ['1ª reunião', r1, '60% → 2ª reunião'], ['Agendadas', ag, '50% → 1ª reunião'], ['Decisor no telefone', dc, '25% → agendamento'], ['Ligações', lg, '80% → decisor']],
      dia
    };
  };
  const calcH = () => {
    const c = calc();
    return `<div class="cvt">${c.st.map((s, i) => `<div class="${i === 0 ? 'hi' : ''}"><small>${s[0].toUpperCase()}</small><b>${s[1].toLocaleString('pt-BR')}</b><em>${s[2]}</em></div>`).join('')}<div class="hi"><small>LIGAÇÕES POR DIA</small><b style="color:var(--acc-t)">${c.dia}</b><em>${CC.pz * 22} dias úteis</em></div></div>`;
  };
  const _m = PAGES.metas;
  PAGES.metas = () => _m() + `<div class="card pad" style="margin-top:20px"><div class="chead">${tile('funnel', 'ac')}<div><div class="ct">Do contrato ao contato</div><div class="cs">Informe a meta e veja quantas ligações por dia são necessárias, usando as taxas de conversão do funil.</div></div><button class="btn btn-p" data-toast="Meta criada a partir da calculadora" data-ti="target">${ic('target', 18)}Salvar meta</button></div><div class="fgrid"><div class="fg"><label>Meta de faturamento no período</label><div class="field"><input type="number" data-cc="fat" value="${CC.fat}"></div></div><div class="fg"><label>Ticket médio do contrato</label><div class="field"><input type="number" data-cc="tk" value="${CC.tk}"></div></div><div class="fg"><label>Prazo para bater a meta (meses)</label><div class="field"><input type="number" min="1" data-cc="pz" value="${CC.pz}"></div></div></div><div id="cvo">${calcH()}</div></div>`;
  const _mi = INIT.metas;
  INIT.metas = v => {
    _mi(v);
    v.addEventListener('input', e => {
      const k = e.target.dataset.cc;
      if (k) {
        CC[k] = Math.max(1, +e.target.value || 1);
        $('#cvo').innerHTML = calcH();
      }
    });
  };
  let CALLS = 0;
  const GOAL = 20,
    RIT = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const work = () => {
    const done = CALLS >= GOAL,
      days = RIT.filter(Boolean).length + (done ? 1 : 0);
    return `<div class="g2" id="wk"><div class="card pad"><div style="display:flex;gap:22px;align-items:center;flex-wrap:wrap">${ring(Math.min(100, Math.round(CALLS / GOAL * 100)), 128, 13, 'hoje').replace(/<b>\d+%<\/b>/, `<b>${CALLS}/${GOAL}</b>`)}<div style="flex:1;min-width:200px"><span class="eyebrow">TRABALHO DO DIA</span><div class="ct" style="font-size:24px;margin:2px 0 10px">${done ? 'Meta de ligações batida.' : `Faltam ${GOAL - CALLS} ligações hoje.`}</div>${pill(days + ' dias de sequência', 'am', 'flame')}<div style="margin-top:14px"><button class="btn btn-p" id="lgn">${ic('phone', 18)}Ligar agora</button></div></div></div></div><div class="card pad"><div class="ch">${ic('bars', 18)}Ritmo · ligações · 14 dias</div><div class="cs" style="margin-top:4px">Cor cheia = meta batida naquele dia.</div><div class="rit">${RIT.map(x => `<i class="${x ? 'on' : ''}"></i>`).join('')}<i class="td ${done ? 'on' : ''}"></i></div><div style="display:flex;justify-content:space-between;color:var(--t3);font-size:12px"><span>14/09 → 27/09</span><b style="color:var(--tx)">${days}/14 dias na meta</b></div></div></div>`;
  };
  const _e = PAGES.execucao;
  PAGES.execucao = () => _e().replace('<div id="todayw">', work() + '<div style="height:20px"></div><div id="todayw">');
  const _ei = INIT.execucao;
  INIT.execucao = v => {
    _ei(v);
    v.addEventListener('click', e => {
      if (e.target.closest('#lgn')) {
        CALLS++;
        $('#wk').outerHTML = work();
        if (CALLS === GOAL) toast('Meta de ligações do dia batida', 'trophy');
      }
    });
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_sales_os/salesos/pages5.js", error: String((e && e.message) || e) }); }

// design_handoff_sales_os/salesos/ui.js
try { (() => {
(() => {
  const $ = (s, r = document) => r.querySelector(s),
    $$ = (s, r = document) => [...r.querySelectorAll(s)];
  Object.assign(window, {
    $,
    $$,
    PAGES: {},
    INIT: {}
  });
  const COLS = ['g', 'bl', 'pu', 'am', 'rd'];
  window.col = n => COLS[[...n].reduce((a, c) => a + c.charCodeAt(0), 0) % 5];
  window.ini = n => n.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
  window.av = (n, c, x = '') => `<span class="av ${x} k-${c || col(n)}">${ini(n)}</span>`;
  window.tile = (i, c = 'ac', s = 22, x = '') => `<span class="tile ${x} k-${c}">${ic(i, s)}</span>`;
  window.pill = (t, c = 'nn', i) => `<span class="pill k-${c}">${i ? ic(i, 13, 2) : ''}${t}</span>`;
  window.dotp = (t, c) => `<span class="k-${c}" style="display:inline-flex;align-items:center;gap:8px;color:var(--t2)"><i class="dot"></i>${t}</span>`;
  window.bar = (p, s = '') => `<div class="bar ${s}"><i style="--w:${p}%"></i></div>`;
  window.kpi = (i, c, l, v, p, s, pc = 'g') => `<div class="card kpi">${tile(i, c)}<div class="kb"><span class="kl">${l}</span><div class="kv"><b>${v}</b>${p ? `<span class="pill k-${pc}">${pc === 'g' && /^\+/.test(p) ? ic('arrowUp', 12, 2.4) : ''}${p}</span>` : ''}</div><span class="ks">${s || ''}</span></div></div>`;
  window.dateChip = (a, b) => `<button class="btn chip">${ic('calendar', 18)}<span>${a}${b ? ` &nbsp;→&nbsp; ${b}` : ''}</span>${ic('chevD', 16)}</button>`;
  window.sf = (l, o, id = '') => `<label class="sf"><small>${l}</small><select ${id ? `id="${id}"` : ''}>${o.map(x => `<option>${x}</option>`).join('')}</select>${ic('chevD', 16)}</label>`;
  window.ring = (p, sz = 120, sw = 12, sub = '') => {
    const r = (sz - sw) / 2,
      c = 2 * Math.PI * r,
      o = c * (1 - p / 100);
    return `<div class="ring" style="width:${sz}px;height:${sz}px"><svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}"><circle cx="${sz / 2}" cy="${sz / 2}" r="${r}" fill="none" stroke="var(--ln)" stroke-width="${sw}"/><circle class="ring-p" cx="${sz / 2}" cy="${sz / 2}" r="${r}" fill="none" stroke="url(#rg)" stroke-width="${sw}" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${o}" style="--c:${c}" transform="rotate(-90 ${sz / 2} ${sz / 2})"/></svg><div class="ring-t"><div><b>${p}%</b><small>${sub}</small></div></div></div>`;
  };
  window.pager = (txt, pages = [1, 2, 3, '…', 26]) => `<div class="pg"><span>${txt}</span><div class="pgs"><button class="pgb">${ic('chevL', 16)}</button>${pages.map((p, i) => `<button class="pgb ${i === 0 ? 'on' : ''}">${p}</button>`).join('')}<button class="pgb">${ic('chevR', 16)}</button></div></div>`;
  window.PAL = [['#F4FBFA', '#D7F3EE', '#00BFA5', '#081311', '#0F2621', '#1DE9B6'], ['#F2FCFC', '#D4F3F5', '#00BCD4', '#071316', '#10303A', '#26C6DA'], ['#F3FBFF', '#D9F1FA', '#00AEEF', '#06131A', '#0D2733', '#29B6F6'], ['#F5F8FF', '#DCE6FF', '#3366FF', '#0A1020', '#14264D', '#5C84FF'], ['#F4F8FF', '#D7E4FF', '#2962FF', '#09101D', '#13284A', '#4D8DFF'], ['#F3F9FB', '#D8EBF0', '#007C91', '#081114', '#123038', '#00ACC1'], ['#F6F7FF', '#E1E5FF', '#5C6CFF', '#0B0F1E', '#1A2142', '#8A94FF'], ['#FAF7FF', '#EBDDFF', '#7C4DFF', '#110C18', '#241736', '#9D7BFF'], ['#FAF6FC', '#EEDDF5', '#8E24AA', '#130C16', '#2B1933', '#BA68C8'], ['#FFF6FB', '#F7DDF0', '#D81B60', '#160C12', '#341926', '#EC407A'], ['#FFF7FA', '#FADDE8', '#E91E63', '#160D11', '#331923', '#F06292'], ['#FFF6F6', '#FADADA', '#E53935', '#180C0C', '#351818', '#FF5A5F'], ['#FFF8F6', '#FBE1DA', '#FF6F61', '#170F0D', '#341D19', '#FF8A75'], ['#FFF8F3', '#FBE4D1', '#FF7A00', '#17100B', '#352116', '#FF9E3D'], ['#FFFBEF', '#F8E7B6', '#E09F00', '#171308', '#322710', '#F4B400'], ['#FFFDF3', '#FAF1B8', '#F4C400', '#161307', '#30280F', '#FFD54F'], ['#FAFDF3', '#EDF7C8', '#A3C700', '#101207', '#232A10', '#C6E64A'], ['#F7FCF8', '#DCF2E0', '#2EAD4A', '#0B120D', '#18301D', '#4CD964'], ['#F4FCF8', '#D7F3E6', '#00A86B', '#09120E', '#153023', '#19C37D'], ['#F6F7F9', '#E2E6EC', '#4F5D75', '#0E1116', '#1A202A', '#8A98B5']];
  window.palVars = (n, t) => {
    const p = PAL[n - 1] || PAL[0],
      o = t === 'dark' ? 3 : 0;
    return `--pbg:${p[o]};--p2:${p[o + 1]};--acc:${p[o + 2]}`;
  };
  const KEY = 'salesos-settings-v3',
    DEF = {
      mode: 'light',
      surface: 'neu',
      pal: 1,
      motion: true,
      liquid: true,
      compact: false
    };
  let S = {
    ...DEF
  };
  try {
    S = {
      ...DEF,
      ...JSON.parse(localStorage.getItem(KEY) || '{}')
    };
  } catch (e) {}
  const mq = matchMedia('(prefers-color-scheme: dark)');
  const theme = () => S.mode === 'system' ? mq.matches ? 'dark' : 'light' : S.mode;
  const cur = () => location.hash.slice(1) || 'dashboard';
  window.SET = {
    get: () => S,
    theme
  };
  function apply() {
    const h = document.documentElement;
    h.dataset.theme = theme();
    h.dataset.surface = S.surface;
    h.style.cssText = palVars(S.pal, theme());
    h.dataset.motion = S.motion ? 'on' : 'off';
    h.dataset.liquid = S.liquid ? 'on' : 'off';
    $('#app').classList.toggle('col', S.compact);
    const b = $('#themeBtn');
    if (b) b.innerHTML = ic(theme() === 'dark' ? 'sun' : 'moon', 20);
    try {
      localStorage.setItem(KEY, JSON.stringify(S));
    } catch (e) {}
    setTimeout(liq, 450);
  }
  window.setS = p => {
    Object.assign(S, p);
    apply();
    if (cur() === 'config') render(true);
  };
  mq.addEventListener('change', apply);
  window.toast = (m, i = 'check') => {
    const t = document.createElement('div');
    t.className = 'card toast';
    t.innerHTML = ic(i, 20, 2.2) + `<b>${m}</b>`;
    $('#toasts').append(t);
    setTimeout(() => {
      t.classList.add('out');
      setTimeout(() => t.remove(), 400);
    }, 2600);
  };
  window.openDrawer = h => {
    $('#drawer').innerHTML = h;
    $('#drawer').classList.add('on');
    $('#scrim').classList.add('on');
  };
  window.closeDrawer = () => {
    $('#drawer').classList.remove('on');
    $('#scrim').classList.remove('on');
  };
  window.go = id => {
    location.hash = id;
  };
  window.pop = (a, items) => {
    closePop();
    const r = a.getBoundingClientRect(),
      p = document.createElement('div');
    p.id = 'pop';
    p.className = 'card';
    p.innerHTML = items.map((x, i) => `<button data-i="${i}" style="${x.d ? 'color:var(--rd)' : ''}">${ic(x.i, 18)}${x.t}</button>`).join('');
    document.body.append(p);
    const w = p.offsetWidth;
    p.style.top = Math.min(r.bottom + 8, innerHeight - p.offsetHeight - 12) + 'px';
    p.style.left = Math.max(12, Math.min(r.right - w, innerWidth - w - 12)) + 'px';
    p.onclick = e => {
      const b = e.target.closest('button');
      if (b) {
        items[b.dataset.i].f?.();
        closePop();
      }
    };
    setTimeout(() => document.addEventListener('click', closePop, {
      once: true
    }), 0);
  };
  function closePop() {
    $('#pop')?.remove();
  }
  const rowMenu = a => pop(a, [{
    i: 'pencil',
    t: 'Editar',
    f: () => toast('Edição aberta', 'pencil')
  }, {
    i: 'copy',
    t: 'Duplicar',
    f: () => toast('Item duplicado', 'copy')
  }, {
    i: 'trash',
    t: 'Excluir',
    d: 1,
    f: () => {
      a.closest('tr,.mcard')?.remove();
      toast('Item excluído', 'trash');
    }
  }]);
  const NAV = [['Execução comercial', [['dashboard', 'Dashboard', 'dashboard'], ['prospeccao', 'Prospecção', 'search'], ['metas', 'Metas', 'target'], ['bases', 'Bases', 'database'], ['listas', 'Listas', 'list'], ['qualificacao', 'Qualificação', 'qualify'], ['pipeline', 'Pipeline', 'pipeline'], ['execucao', 'Executar', 'zap'], ['sequencias', 'Sequências', 'repeat']]], ['Cadastro', [['empresas', 'Empresas', 'building'], ['clientes', 'Clientes', 'users']]], ['Sistema', [['conta', 'Conta', 'user'], ['config', 'Configurações', 'sliders']]]];
  const TITLES = {
    dashboard: 'Dashboard',
    prospeccao: 'Prospecção',
    metas: 'Metas',
    bases: 'Bases',
    qualificacao: 'Qualificados',
    pipeline: 'Pipeline',
    execucao: 'Execução',
    sequencias: 'Sequências',
    empresas: 'Empresas',
    clientes: 'Clientes',
    conta: 'Conta',
    config: 'Configurações',
    novalista: 'Nova lista',
    negocio: 'Negócio'
  };
  let grpOpen = null;
  function buildSide() {
    const id = cur(),
      open = grpOpen ?? (id === 'bases' || id === 'listas');
    $('#side').innerHTML = `<div class="brand"><div class="logo">${ic('wave', 22, 2.2)}</div><div><b>Sales OS</b><small>Execução comercial</small></div></div>
<nav class="nav" id="nav"><div class="liq" id="liq"><i></i><i></i></div>${NAV.map(([s, it]) => `<div class="sec">${s}</div>${it.map(([k, l, i]) => `<a class="ni main ${k === id || k === 'config' && id === 'conta' && 0 ? 'on' : ''}" data-go="${k}">${ic(i, 20)}<span class="lbl">${l}</span></a>`).join('')}`).join('')}
<div class="sec"></div><a class="ni grp ${open ? 'open' : ''}" id="grp">${ic('database', 20)}<span class="lbl">Bases</span><span class="bdg">2</span>${ic('chevR', 16)}</a>
<div class="subs"><a class="ni sub" data-go="bases">Todas as bases</a><a class="ni sub ${id === 'listas' ? 'on' : ''}" data-go="listas">Restaurantes Maringá</a><a class="ni sub" data-go="listas">Clínicas Curitiba</a></div></nav>
<div class="foot"><div class="usr">${av('Usuário Sales', 'ac')}<div><b>Usuário</b><small>Workspace padrão</small></div></div><a class="ni" id="out">${ic('logout', 20)}<span class="lbl">Sair</span></a><a class="ni" id="colb">${ic('panel', 20)}<span class="lbl">Recolher</span></a></div>`;
    $('#grp').onclick = () => {
      grpOpen = !$('#grp').classList.contains('open');
      $('#grp').classList.toggle('open');
      setTimeout(liq, 60);
    };
    $('#out').onclick = () => toast('Sessão encerrada nesta demonstração', 'logout');
    $('#colb').onclick = () => setS({
      compact: !S.compact
    });
    requestAnimationFrame(liq);
  }
  function liq() {
    const el = $('#nav .ni.main.on'),
      l = $('#liq');
    if (!l) return;
    const n = $('#nav');
    l.style.height = n.scrollHeight + 'px';
    const [a, b] = $$('i', l);
    if (!el) {
      a.style.height = b.style.height = '0px';
      return;
    }
    a.style.top = b.style.top = el.offsetTop + 'px';
    a.style.height = b.style.height = el.offsetHeight + 'px';
  }
  function buildTop() {
    const id = cur();
    $('#top').innerHTML = (id === 'listas' ? `<div class="crumb">${ic('list', 20)}<span>Listas</span>${ic('chevR', 14)}<b>Restaurantes Maringá</b></div>` : `<h2>${TITLES[id] || ''}</h2>`) + `<div class="sp"></div><button class="btn" id="ws">Avraham Hub ${ic('chevD', 16)}</button><button class="btn round" id="themeBtn" title="Alternar tema"></button><button class="btn chip" id="um" style="padding:0 10px 0 6px">${av('Sales Ops', 'ac', 'xs')}${ic('chevD', 16)}</button>`;
    $('#themeBtn').onclick = () => setS({
      mode: theme() === 'dark' ? 'light' : 'dark'
    });
    $('#ws').onclick = e => pop(e.currentTarget, [{
      i: 'building',
      t: 'Avraham Hub',
      f: () => {}
    }, {
      i: 'building',
      t: 'Workspace padrão',
      f: () => toast('Workspace alterado', 'building')
    }]);
    $('#um').onclick = e => pop(e.currentTarget, [{
      i: 'user',
      t: 'Conta',
      f: () => go('conta')
    }, {
      i: 'sliders',
      t: 'Configurações',
      f: () => go('config')
    }, {
      i: 'logout',
      t: 'Sair',
      f: () => toast('Sessão encerrada nesta demonstração', 'logout')
    }]);
    $('#themeBtn').innerHTML = ic(theme() === 'dark' ? 'sun' : 'moon', 20);
  }
  function render(keep) {
    const id = PAGES[cur()] ? cur() : 'dashboard';
    const v = $('#view'),
      y = v.scrollTop;
    v.classList.toggle('noanim', keep === true);
    v.innerHTML = `<div class="page">${PAGES[id]()}</div>`;
    v.scrollTop = keep === true ? y : 0;
    v._ac?.abort();
    v._ac = new AbortController();
    const _ad = EventTarget.prototype.addEventListener;
    v.addEventListener = (t, f, o) => _ad.call(v, t, f, {
      ...(typeof o === 'object' && o ? o : {}),
      signal: v._ac.signal
    });
    INIT[id]?.(v);
    buildTop();
    $$('#nav .ni.main').forEach(n => n.classList.toggle('on', n.dataset.go === id));
    $$('#nav .sub').forEach((n, i) => n.classList.toggle('on', id === 'listas' && i === 1));
    liq();
    closeDrawer();
  }
  window.render = render;
  document.addEventListener('click', e => {
    const g = e.target.closest('[data-go]');
    if (g) {
      e.preventDefault();
      go(g.dataset.go);
    }
    const m = e.target.closest('[data-menu]');
    if (m) rowMenu(m);
    const t = e.target.closest('[data-toast]');
    if (t) toast(t.dataset.toast, t.dataset.ti || 'check');
    if (e.target.closest('[data-close]')) closeDrawer();
    const tab = e.target.closest('.tab[data-tab]');
    if (tab) {
      $$('.tab', tab.parentNode).forEach(x => x.classList.toggle('on', x === tab));
    }
  });
  document.addEventListener('pointermove', e => {
    const b = e.target.closest?.('.btn-p');
    if (b) {
      const r = b.getBoundingClientRect();
      b.style.setProperty('--x', e.clientX - r.left + 'px');
      b.style.setProperty('--y', e.clientY - r.top + 'px');
    }
  });
  $('#scrim').onclick = closeDrawer;
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDrawer();
  });
  window.addEventListener('hashchange', () => {
    render();
  });
  window.SO = {
    boot() {
      apply();
      buildSide();
      render();
      $('#nav').addEventListener('scroll', () => {});
    }
  };
  const _r = render;
  window.addEventListener('hashchange', () => {});
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_sales_os/salesos/ui.js", error: String((e && e.message) || e) }); }

// salesos/bases.js
try { (() => {
(() => {
  const parseCSV = t => {
    const sep = (t.split('\n')[0].match(/;/g) || []).length > (t.split('\n')[0].match(/,/g) || []).length ? ';' : ',';
    const rows = [];
    let r = [],
      c = '',
      q = false;
    for (let i = 0; i < t.length; i++) {
      const ch = t[i];
      if (q) {
        if (ch === '"' && t[i + 1] === '"') {
          c += '"';
          i++;
        } else if (ch === '"') q = false;else c += ch;
      } else if (ch === '"') q = true;else if (ch === sep) {
        r.push(c);
        c = '';
      } else if (ch === '\n' || ch === '\r') {
        if (ch === '\r' && t[i + 1] === '\n') i++;
        r.push(c);
        c = '';
        if (r.some(x => x.trim())) rows.push(r);
        r = [];
      } else c += ch;
    }
    r.push(c);
    if (r.some(x => x.trim())) rows.push(r);
    return rows;
  };
  const loadX = () => window.XLSX ? Promise.resolve() : new Promise((ok, no) => {
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
    s.onload = ok;
    s.onerror = () => no(new Error('xlsx'));
    document.head.append(s);
  });
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;'
  })[c]);
  const read = async f => {
    const ext = f.name.split('.').pop().toLowerCase();
    if (['csv', 'txt', 'tsv'].includes(ext)) return parseCSV(await f.text());
    if (['xlsx', 'xls', 'xlsm', 'ods'].includes(ext)) {
      await loadX();
      const wb = XLSX.read(await f.arrayBuffer());
      return XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {
        header: 1,
        blankrows: false,
        defval: ''
      });
    }
    throw new Error('Formato não suportado. Use CSV, XLSX ou XLS.');
  };
  const lbl = 'font-size:13px;font-weight:600;color:var(--t2);display:block;margin-bottom:6px';
  let rows = null,
    fname = '';
  const drawer = () => {
    rows = null;
    openDrawer(`<div class="dh"><div>${tile('upload', 'g', 24, 'l')}<div class="ct" style="margin-top:16px;font-size:22px">Nova base</div><div class="cs">Envie uma planilha CSV, XLSX ou XLS. A primeira linha deve ser o cabeçalho.</div></div><button class="btn btn-ic btn-sm" data-close>${ic('x', 18)}</button></div><div class="db" style="display:flex;flex-direction:column;gap:14px"><label id="dz" style="border:2px dashed var(--ln);border-radius:16px;padding:28px 16px;text-align:center;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:8px;transition:.2s">${tile('upload', 'ac', 26, 'l')}<b>Arraste a planilha aqui ou clique para escolher</b><span class="cs">.csv, .xlsx, .xls</span><input id="bf" type="file" accept=".csv,.tsv,.txt,.xlsx,.xls,.xlsm,.ods" hidden></label><div id="bp"></div><div><label style="${lbl}">Nome da base</label><div class="field"><input id="bn" placeholder="Ex.: Clínicas PR"></div></div><div><label style="${lbl}">Segmento</label><div class="field"><input id="bs" placeholder="Ex.: Saúde"></div></div></div><div class="df"><button class="btn" data-close>Cancelar</button><button class="btn btn-p" id="bi" disabled>Importar base</button></div>`);
    const dz = document.querySelector('#dz'),
      inp = document.querySelector('#bf');
    const take = async f => {
      if (!f) return;
      const bp = document.querySelector('#bp');
      bp.innerHTML = '<div class="cs">Lendo arquivo…</div>';
      try {
        const r = await read(f);
        if (r.length < 2) throw new Error('A planilha não tem linhas de dados.');
        rows = r;
        fname = f.name;
        const bn = document.querySelector('#bn');
        if (!bn.value) bn.value = f.name.replace(/\.[^.]+$/, '');
        const h = r[0].map(String),
          pv = r.slice(1, 6);
        bp.innerHTML = `<div class="card" style="padding:14px"><div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap"><b>${esc(f.name)}</b>${pill(`${(r.length - 1).toLocaleString('pt-BR')} leads · ${h.length} colunas`, 'g', 'check')}</div><div class="tw" style="margin-top:10px;max-height:220px;overflow:auto"><table class="tbl"><thead><tr>${h.map(x => `<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${pv.map(x => `<tr>${h.map((_, i) => `<td>${esc(x[i])}</td>`).join('')}</tr>`).join('')}</tbody></table></div><div class="cs" style="margin-top:8px">Pré-visualização das 5 primeiras linhas.</div></div>`;
        document.querySelector('#bi').disabled = false;
      } catch (e) {
        rows = null;
        document.querySelector('#bi').disabled = true;
        bp.innerHTML = `<div class="note">${ic('info', 18)}<span>${esc(e.message)}</span></div>`;
      }
    };
    inp.onchange = () => take(inp.files[0]);
    dz.ondragover = e => {
      e.preventDefault();
      dz.style.borderColor = 'var(--acc)';
    };
    dz.ondragleave = () => dz.style.borderColor = '';
    dz.ondrop = e => {
      e.preventDefault();
      dz.style.borderColor = '';
      take(e.dataTransfer.files[0]);
    };
    document.querySelector('#bi').onclick = () => {
      if (!rows) return;
      const n = document.querySelector('#bn').value.trim() || fname,
        seg = document.querySelector('#bs').value.trim() || 'Geral',
        tot = rows.length - 1,
        dt = new Date(),
        tb = document.querySelector('#bt tbody');
      const tr = document.createElement('tr');
      tr.dataset.q = n.toLowerCase();
      tr.innerHTML = `<td><div class="nm">${tile('database', 'g', 20, 's')}<div><b>${esc(n)}</b><small>${esc(fname)}</small></div></div></td><td>${pill(esc(seg), 'bl')}</td><td class="num">${tot.toLocaleString('pt-BR')}</td><td><b>0</b> <span style="color:var(--t3);font-size:12px">0%</span>${bar(0, 's')}</td><td><b>0</b> <span style="color:var(--t3);font-size:12px">0%</span>${bar(0, 's')}</td><td><b>0</b> <span style="color:var(--t3);font-size:12px">0%</span>${bar(0, 's')}</td><td>${dt.toLocaleDateString('pt-BR')}<br><small style="color:var(--t3)">${dt.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
      })}</small></td><td>${dotp('Não analisada', 'am')}</td><td></td>`;
      tb.prepend(tr);
      closeDrawer();
      toast(`Base importada: ${tot.toLocaleString('pt-BR')} leads`, 'upload');
    };
  };
  const prev = INIT.bases;
  INIT.bases = v => {
    prev && prev(v);
    v.addEventListener('click', e => {
      const b = e.target.closest('[data-toast="Nova base"]');
      if (b) {
        e.stopPropagation();
        e.preventDefault();
        drawer();
      }
    }, true);
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "salesos/bases.js", error: String((e && e.message) || e) }); }

// salesos/icons.js
try { (() => {
(() => {
  const R = (x, y, w, h, r = 2) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"/>`;
  const P = {
    dashboard: R(3, 3, 7, 7, 2) + R(14, 3, 7, 7, 2) + R(14, 14, 7, 7, 2) + R(3, 14, 7, 7, 2),
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
    database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>',
    qualify: R(3, 3, 18, 18, 4) + '<path d="M12 8v8M8 12h8"/>',
    pipeline: R(3, 3, 18, 18, 4) + '<path d="M8 7v7M12 7v3M16 7v10"/>',
    zap: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    building: R(5, 3, 14, 18, 2) + '<path d="M9 7h2M13 7h2M9 11h2M13 11h2M10 21v-4h4v4"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6M16 4.7a3.5 3.5 0 0 1 0 6.6M18 14.2c2.2.6 3.5 2.6 3.5 5.3"/>',
    chevR: '<path d="m9 6 6 6-6 6"/>',
    chevD: '<path d="m6 9 6 6 6-6"/>',
    chevL: '<path d="m15 6-6 6 6 6"/>',
    moon: '<path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    calendar: R(3, 5, 18, 16, 3) + '<path d="M8 3v4M16 3v4M3 10h18"/>',
    calCheck: R(3, 5, 18, 16, 3) + '<path d="M8 3v4M16 3v4M3 10h18M9.5 15.5l2 2 3.5-3.5"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    pencil: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    copy: R(9, 9, 12, 12, 2) + '<path d="M5 15V5a2 2 0 0 1 2-2h8"/>',
    trash: '<path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 11v6M14 11v6"/>',
    dots: '<circle cx="5" cy="12" r="1.4" fill="currentColor"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/><circle cx="19" cy="12" r="1.4" fill="currentColor"/>',
    send: '<path d="m22 2-11 11M22 2l-7 20-4-9-9-4z"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    mail: R(3, 5, 18, 14, 3) + '<path d="m3 7 9 6 9-6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    check: '<path d="m5 12 5 5 9-10"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    xc: '<circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/>',
    tag: '<path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9z"/><circle cx="7.5" cy="7.5" r="1"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    instagram: R(3, 3, 18, 18, 5) + '<circle cx="12" cy="12" r="4"/><path d="M17.3 6.7h.01"/>',
    linkedin: R(3, 3, 18, 18, 4) + '<path d="M8 11v6M8 7.5h.01M12 17v-6M12 13.5a2.8 2.8 0 0 1 5.6 0V17"/>',
    chat: '<path d="M4 20l1.3-4A8.5 8.5 0 1 1 8 18.7z"/>',
    ext: '<path d="M14 4h6v6M20 4 10 14M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/>',
    cube: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12v9M12 12 4 7.5"/>',
    monitor: R(3, 4, 18, 12, 2) + '<path d="M8 20h8M12 16v4"/>',
    sliders: '<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
    bars: '<path d="M5 20V11M12 20V4M19 20v-6"/>',
    dollar: '<circle cx="12" cy="12" r="9"/><path d="M14.5 9.2c-.4-.9-1.3-1.4-2.5-1.4-1.5 0-2.5.7-2.5 1.8s1 1.5 2.5 1.9 2.5.8 2.5 1.9-1 1.7-2.5 1.7c-1.2 0-2.2-.6-2.5-1.6M12 6v1.8M12 16.2V18"/>',
    file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h6"/>',
    trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H4v1a4 4 0 0 0 4 4M16 6h4v1a4 4 0 0 1-4 4M12 13v4M8 21h8M10 17h4"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    cloud: '<path d="M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9.5 4.3 4.3 0 0 1 17.5 18z"/>',
    utensils: '<path d="M7 3v8M4 3v5a3 3 0 0 0 6 0V3M7 11v10M17 21V3c-2.5 1-4 4-4 8h4"/>',
    pin: '<path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
    factory: '<path d="M3 21V9l6 4V9l6 4V4h4v17zM8 21v-3M13 21v-3"/>',
    funnel: '<path d="M3 4h18l-7 9v6l-4 2v-8z"/>',
    bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/>',
    logout: '<path d="M9 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4M16 8l4 4-4 4M20 12H9"/>',
    panel: R(3, 3, 18, 18, 4) + '<path d="M9 3v18"/>',
    arrowUp: '<path d="M12 19V5M6 11l6-6 6 6"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
    palette: '<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.6-2-.5-1.2.3-2.5 1.7-2.5H18a3 3 0 0 0 3-3C21 7 17 3 12 3z"/><circle cx="7.5" cy="11" r=".9"/><circle cx="10.5" cy="7.5" r=".9"/><circle cx="15" cy="7.5" r=".9"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 8 3 8H3s3-1 3-8M10 21h4"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5zM3 13l9 5 9-5"/>',
    cross: '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',
    cpu: R(6, 6, 12, 12, 2) + R(9.5, 9.5, 5, 5, 1) + '<path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
    briefcase: R(3, 7, 18, 13, 2) + '<path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
    store: '<path d="M4 9l1-5h14l1 5a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1-5 0zM5 12v8h14v-8"/>',
    columns: R(3, 4, 18, 16, 3) + '<path d="M9 4v16M15 4v16"/>',
    repeat: '<path d="M17 2l4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3"/>',
    refresh: '<path d="M20 12a8 8 0 1 1-2.3-5.7L20 8M20 3v5h-5"/>',
    shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
    wave: '<path d="M2 12c2.5-4 5-4 7.5 0s5 4 7.5 0 3-3 5-3"/>',
    fuel: '<path d="M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M3 21h12M14 9h2a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0V8l-3-3M7 8h4"/>',
    leaf: '<path d="M5 19C5 10 10 4 20 4c0 9-5 15-13 15M5 19c2-5 5-8 9-10"/>',
    book: '<path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3zM5 17a3 3 0 0 1 3-3h11"/>',
    home: '<path d="m3 11 9-8 9 8M5 10v10h14V10M10 20v-6h4v6"/>',
    badge: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    bookmark: '<path d="M6 3h12v18l-6-4-6 4z"/>',
    sparkles: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>',
    flame: '<path d="M12 22c4 0 7-2.8 7-7 0-3-2-5-3-7-1 2-2 3-3 3 0-3-1-6-4-8 0 5-4 7-4 12 0 4 3 7 7 7z"/>',
    mapIc: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14"/>',
    download: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
    arrowL: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    lock: R(5, 11, 14, 10, 3) + '<path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    phoneOff: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 2 3M15 13l5 2v4a2 2 0 0 1-2 2c-3 0-6-1-8.5-3M3 3l18 18"/>',
    trend: '<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>',
    filter: '<path d="M4 6h16M7 12h10M10 18h4"/>',
    save: '<path d="M5 3h11l3 3v15H5zM8 3v5h7V3M8 21v-7h8v7"/>',
    upload: '<path d="M12 16V4M7 9l5-5 5 5M4 16v4h16v-4"/>',
    alert: '<path d="M12 3 2 20h20zM12 10v5M12 18v.01"/>',
    wand: '<path d="m5 19 11-11M14 4l1.5-1M19 9l1-1.5M17.5 3.5l.01 0M20.5 12l1.5.5M9 3l.5 1.5M3 9l1.5.5"/>'
  };
  window.ic = (n, s = 20, w = 1.8) => `<svg class="ic" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || ''}</svg>`;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "salesos/icons.js", error: String((e && e.message) || e) }); }

// salesos/metas.js
try { (() => {
(() => {
  const BRL = c => (c / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  const N = n => Math.round(n).toLocaleString('pt-BR');
  const pd = s => {
    const [y, m, d] = s.split('-');
    return `${d}/${m}/${y}`;
  };
  const dias = (a, b) => {
    let n = 0;
    if (!a || !b) return 0;
    const s = new Date(a + 'T12:00'),
      e = new Date(b + 'T12:00');
    for (let d = new Date(s); d <= e; d.setDate(d.getDate() + 1)) {
      const w = d.getDay();
      if (w && w < 6) n++;
    }
    return n;
  };
  const ST = [['Contato com decisor', 'Reunião agendada', 'conversas com o decisor', 'viram reunião agendada'], ['Reuniões agendadas', 'R1 realizada', 'reuniões agendadas', 'viram R1 realizada'], ['R1 realizada', 'R2 realizada', 'R1 realizadas', 'viram R2 realizada'], ['R2 realizada', 'Negociação', 'R2 realizadas', 'entram em negociação — não recusaram na proposta'], ['Negociação', 'Contrato', 'negociações', 'fecham contrato']];
  const store = () => JSON.parse(localStorage.getItem('so_metas2') || 'null') || [{
    id: 1,
    nome: 'Meta Q3 Prospecção',
    nicho: 'SaaS',
    fat: 5000000,
    tk: 250000,
    ini: '2026-07-01',
    fim: '2026-09-30',
    r: [100, 20, 70, 80, 50]
  }];
  const save = a => localStorage.setItem('so_metas2', JSON.stringify(a));
  const fresh = () => ({
    id: Date.now(),
    nome: 'Outubro | IA',
    nicho: 'Food',
    fat: 3000000,
    tk: 150000,
    ini: '2026-09-30',
    fim: '2026-10-30',
    r: [100, 20, 70, 80, 50],
    draft: 1
  });
  let list, cur;
  const calc = d => {
    const r = d.r.map(x => Math.max(1, +x || 1) / 100),
      tk = Math.max(1, d.tk);
    const c = Math.ceil(d.fat / tk),
      ng = Math.ceil(c / r[4]),
      r2 = Math.ceil(ng / r[3]),
      r1 = Math.ceil(r2 / r[2]),
      ag = Math.ceil(r1 / r[1]),
      ct = Math.ceil(ag / r[0]);
    const du = dias(d.ini, d.fim),
      sem = Math.max(1, Math.ceil(du / 5)),
      pdays = sem * 3,
      dis = ct * 3;
    return {
      c,
      ng,
      r2,
      r1,
      ag,
      ct,
      du,
      sem,
      pdays,
      dis,
      dia: Math.ceil(dis / pdays)
    };
  };
  const ten = v => {
    const x = Math.round(v / 10 * 10) / 10;
    return String(x).replace('.', ',');
  };
  const mask = el => {
    const c = +el.value.replace(/\D/g, '') || 0;
    el.value = BRL(c);
    return c;
  };
  const lbl = 'font-size:13px;font-weight:600;color:var(--t2);display:block;margin-bottom:6px';
  const sec = (t, s = '') => `<div class="ch" style="color:var(--tx);font-size:16px">${t}</div>${s ? `<div class="cs" style="margin-top:4px">${s}</div>` : ''}`;
  const PR = [['Operação Autônoma', 'Solução completa para operação com IA', 'monitor', 'bl', 'Solução', 'bl', 2500000, 'Recorrente', 'g'], ['IA Básica', 'Implementação inicial e treinamento', 'cpu', 'pu', 'Software', 'pu', 750000, 'Única', 'bl'], ['Consultoria', 'Consultoria estratégica e implementação', 'briefcase', 'am', 'Serviço', 'am', 1200000, 'Única', 'bl']];
  const prods = () => JSON.parse(localStorage.getItem('so_prods') || 'null') || PR;
  const prodRows = () => prods().map(p => `<tr><td><div class="nm">${tile(p[2], p[3], 20, 's')}<div><b>${p[0]}</b><small>${p[1]}</small></div></div></td><td>${pill(p[4], p[5])}</td><td class="num">${BRL(p[6])}</td><td>${pill(p[7], p[8])}</td><td>${dotp('Ativo', 'g')}</td></tr>`).join('');
  const item = m => `<button class="card" data-sel="${m.id}" style="text-align:left;padding:14px 16px;cursor:pointer;width:100%;${cur && cur.id === m.id ? 'outline:2px solid var(--acc)' : ''}"><div class="ct" style="font-size:15px">${m.nome}</div><div class="cs">${m.nicho} · ${m.draft ? 'Rascunho, ainda não salvo' : pd(m.ini) + ' → ' + pd(m.fim)}</div></button>`;
  const left = () => `${list.map(item).join('')}`;
  PAGES.metas = () => {
    list = store();
    if (!cur) cur = list[0];
    return `<div class="ph"><div><h1>Metas</h1><p>Informe faturamento, ticket e período. O cálculo regressivo mostra quantas ligações por dia você precisa.</p></div></div>
<div style="display:grid;grid-template-columns:minmax(220px,280px) minmax(0,1fr);gap:20px;align-items:start" class="mgl">
<div style="display:flex;flex-direction:column;gap:10px"><button class="btn btn-p" id="mn">${ic('plus', 18, 2.2)}Nova meta</button><div id="ml" style="display:flex;flex-direction:column;gap:10px">${left()}</div></div>
<div style="display:flex;flex-direction:column;gap:20px;min-width:0" id="me"></div></div>
<div class="card pad" style="margin-top:20px"><div class="chead">${tile('cube', 'ac')}<div><div class="ct">Produtos / serviços</div><div class="cs">Cadastre seus produtos. O ticket médio deles alimenta as metas.</div></div><button class="btn btn-p" id="np">${ic('plus', 18, 2.2)}Novo Produto</button></div>
<div class="tw"><table class="tbl"><thead><tr><th>Produto / Serviço</th><th>Categoria</th><th>Ticket médio</th><th>Tipo de receita</th><th>Status</th></tr></thead><tbody id="pb">${prodRows()}</tbody></table></div></div>
<style>@media(max-width:1000px){.mgl{grid-template-columns:minmax(0,1fr)!important}}.rw input[type=number]{width:70px}</style>`;
  };
  const editor = () => {
    const d = cur,
      k = calc(d);
    return `<div class="card pad" style="display:flex;align-items:center;gap:20px;flex-wrap:wrap"><div><small style="color:var(--t3);font-weight:700;letter-spacing:.08em">LIGAÇÕES POR DIA</small><div class="big" id="o-dia">${N(k.dia)}</div></div><span id="o-st">${pill(d.draft ? 'Não salvo' : 'Salvo', d.draft ? 'am' : 'g')}</span><div style="margin-left:auto;display:flex;gap:10px;flex-wrap:wrap"><button class="btn btn-d" id="md">${ic('trash', 16)}Excluir</button><button class="btn btn-p" id="ms">${ic('save', 16)}Salvar meta</button></div></div>
<div class="card pad"><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px">
<div><label style="${lbl}">Nome da meta</label><div class="field"><input data-f="nome" value="${d.nome}"></div></div>
<div><label style="${lbl}">Nicho</label><div class="field"><input data-f="nicho" value="${d.nicho}"></div></div>
<div><label style="${lbl}">Meta de faturamento no período</label><div class="field"><input data-f="fat" inputmode="numeric" value="${BRL(d.fat)}"></div></div>
<div><label style="${lbl}">Ticket médio do contrato</label><div class="field"><input data-f="tk" inputmode="numeric" value="${BRL(d.tk)}"></div></div>
<div><label style="${lbl}">Data de início</label><div class="field"><input type="date" data-f="ini" value="${d.ini}"></div></div>
<div><label style="${lbl}">Data de fim</label><div class="field"><input type="date" data-f="fim" value="${d.fim}"></div></div></div>
<div class="cs" style="margin-top:12px" id="o-du"></div></div>
<div class="card pad">${sec('Do contrato ao contato')}<div id="o-fun" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin-top:16px"></div></div>
<div class="card pad">${sec('Taxas do funil', 'Cada taxa diz quantos avançam. O número do dia, no topo, muda na hora.')}<div style="display:flex;flex-direction:column;gap:12px;margin-top:14px">${ST.map((s, i) => `<div class="card rw" style="padding:16px"><div class="ct" style="font-size:15px">${s[0]} → ${s[1]}</div><div class="cs" id="o-t${i}" style="margin:6px 0 10px"></div><div class="field" style="width:120px"><input type="number" min="1" max="100" data-r="${i}" value="${d.r[i]}"><span style="color:var(--acc);font-weight:700">%</span></div></div>`).join('')}</div></div>
<div class="card pad">${sec('Plano do dia')}<div style="display:grid;grid-template-columns:minmax(0,2fr) minmax(0,1fr);gap:14px;margin-top:14px" class="mgl"><div class="card" style="padding:16px;display:flex;flex-direction:column;gap:14px" id="o-plan"></div><div class="card" style="padding:16px" id="o-ate"></div></div></div>
<div class="card pad"><button id="gl" style="display:flex;width:100%;justify-content:space-between;align-items:center;text-align:left"><span>${sec('Glossário', 'O que conta em cada etapa: agendar entra no funil; R1 só se realizada. Sem no-show, sem secretária, sem tentativa.')}</span><span id="gc">${ic('chevD', 18)}</span></button><div id="gb" style="display:none;flex-direction:column;gap:10px;margin-top:14px">${[['R1 e R2 no Método Pódium', 'R1 é o levantamento de necessidades, a reunião de diagnóstico realizada. R2 é a apresentação da proposta, também realizada. Agendar não conta; no-show não conta.'], ['O que é contato com o decisor', 'Só conta quando você fala com quem decide. Tentativa, caixa postal, secretária e recepção ficam de fora. No plano do dia, as discagens estimam esse filtro: discagens = contatos × 3.'], ['Ticket médio e meta de faturamento', 'Ticket é o valor médio por contrato fechado. Meta é o faturamento desejado no período. A calculadora divide um pelo outro para achar quantos contratos, e daí volta o funil até os contatos.'], ['Como o cálculo regressivo funciona', 'Começa nos contratos e volta etapa por etapa até os contatos com decisor. O ×3 transforma contatos em discagens. O volume reparte em 3 dias de prospecção por semana, contando só dias úteis (seg a sex) entre início e fim.']].map(g => `<div class="card" style="padding:14px 16px"><b>${g[0]}</b><p style="margin:6px 0 0;color:var(--t2)">${g[1]}</p></div>`).join('')}</div></div>`;
  };
  const paint = () => {
    const d = cur,
      k = calc(d),
      $e = s => document.querySelector(s);
    $e('#o-dia').textContent = N(k.dia);
    $e('#o-du').innerHTML = k.du ? `<b>${k.du}</b> dias úteis entre ${pd(d.ini)} e ${pd(d.fim)}, ${k.sem} semanas, ${k.pdays} dias de prospecção. Contratos necessários: <b>${N(k.c)}</b> (${BRL(d.fat)} ÷ ${BRL(d.tk)}).` : 'Informe um período válido (início antes do fim).';
    const cards = [['CONTRATOS', k.c, ''], ['NEGOCIAÇÕES', k.ng, d.r[4] + '% → contratos'], ['R2S', k.r2, d.r[3] + '% → negociação'], ['R1S', k.r1, d.r[2] + '% → R2'], ['AGENDADAS', k.ag, d.r[1] + '% → R1'], ['CONTATOS', k.ct, d.r[0] + '% → agendada']];
    $e('#o-fun').innerHTML = cards.map((c, i) => `<div class="card" style="padding:16px;${i ? '' : 'outline:2px solid var(--acc)'}"><small style="color:var(--t3);font-weight:700;letter-spacing:.06em">${c[0]}</small><div class="big" style="margin:14px 0 6px;${i ? '' : 'color:var(--acc)'}">${N(c[1])}</div><small style="color:var(--acc);font-weight:600">${c[2]}</small></div>`).join('');
    ST.forEach((s, i) => $e('#o-t' + i).textContent = `De cada 10 ${s[2]}, ${ten(d.r[i])} ${s[3]}.`);
    const row = (l, v, p) => `<div><div style="display:flex;justify-content:space-between;align-items:baseline"><small style="color:var(--t3);font-weight:700;letter-spacing:.06em">${l}</small><b style="font-size:18px">${N(v)}</b></div>${bar(p)}</div>`;
    $e('#o-plan').innerHTML = `<small style="color:var(--t3);font-weight:700">NO PERÍODO</small>` + row('DISCAGENS', k.dis, 100) + row('DECISOR', k.ct, k.dis ? k.ct / k.dis * 100 : 0) + row('REUNIÕES', k.ag, k.dis ? k.ag / k.dis * 100 : 0);
    $e('#o-ate').innerHTML = `<small style="color:var(--t3);font-weight:700">ATÉ QUANDO</small><div style="font-size:20px;font-weight:700;margin:8px 0">${pd(d.fim)}</div><div style="display:flex;gap:6px;flex-wrap:wrap">${Array.from({
      length: Math.min(k.sem, 26)
    }, () => '<i style="width:18px;height:6px;border-radius:3px;background:var(--acc)"></i>').join('')}</div><small style="color:var(--t3);font-weight:600">${k.sem} SEM. · ${k.pdays} DIAS</small>`;
    $e('#o-st').innerHTML = pill(d.draft ? 'Não salvo' : 'Salvo', d.draft ? 'am' : 'g');
  };
  const mount = () => {
    const v = document.querySelector('#me');
    v.innerHTML = editor();
    paint();
    document.querySelector('#ml').innerHTML = left();
  };
  const dirty = () => {
    cur.draft = 1;
    paint();
  };
  INIT.metas = v => {
    mount();
    v.addEventListener('input', e => {
      const t = e.target;
      if (t.dataset.f) {
        const f = t.dataset.f;
        if (f === 'fat' || f === 'tk') {
          cur[f] = mask(t);
        } else cur[f] = t.value;
        dirty();
      } else if (t.dataset.r !== undefined) {
        let x = +t.value;
        if (x > 100) x = 100;
        cur.r[+t.dataset.r] = x;
        dirty();
      }
    });
    v.addEventListener('click', e => {
      const s = e.target.closest('[data-sel]');
      if (s) {
        cur = list.find(m => m.id == s.dataset.sel) || cur;
        mount();
        return;
      }
      if (e.target.closest('#mn')) {
        cur = fresh();
        list = [cur, ...list.filter(m => !m.draft)];
        mount();
        return;
      }
      if (e.target.closest('#ms')) {
        const d = cur;
        if (!d.nome.trim() || !d.fat || !d.tk || calc(d).du < 1) {
          toast('Preencha nome, valores e um período válido', 'alert');
          return;
        }
        delete d.draft;
        const a = store().filter(m => m.id !== d.id);
        a.unshift(JSON.parse(JSON.stringify(d)));
        save(a);
        list = a;
        mount();
        toast('Meta salva');
        return;
      }
      if (e.target.closest('#md')) {
        const a = store().filter(m => m.id !== cur.id);
        if (!a.length) {
          toast('Mantenha ao menos uma meta', 'alert');
          return;
        }
        save(a);
        list = a;
        cur = a[0];
        mount();
        toast('Meta removida', 'trash');
        return;
      }
      if (e.target.closest('#gl')) {
        const b = document.querySelector('#gb');
        b.style.display = b.style.display === 'none' ? 'flex' : 'none';
        return;
      }
      if (e.target.closest('#np')) {
        openDrawer(`<div class="dh"><div>${tile('cube', 'g', 24, 'l')}<div class="ct" style="margin-top:16px;font-size:22px">Novo produto</div></div><button class="btn btn-ic btn-sm" data-close>${ic('x', 18)}</button></div><div class="db" style="display:flex;flex-direction:column;gap:14px"><div><label style="${lbl}">Nome</label><div class="field"><input id="pn"></div></div><div><label style="${lbl}">Descrição</label><div class="field"><input id="pdsc"></div></div><div><label style="${lbl}">Ticket médio</label><div class="field"><input id="ptk" inputmode="numeric" value="R$ 0,00"></div></div></div><div class="df"><button class="btn" data-close>Cancelar</button><button class="btn btn-p" id="ps">Adicionar</button></div>`);
        document.querySelector('#ptk').oninput = e => mask(e.target);
        document.querySelector('#ps').onclick = () => {
          const n = document.querySelector('#pn').value.trim(),
            c = +document.querySelector('#ptk').value.replace(/\D/g, '') || 0;
          if (!n || !c) {
            toast('Informe nome e ticket', 'alert');
            return;
          }
          const a = prods();
          a.push([n, document.querySelector('#pdsc').value || '—', 'cube', 'ac', 'Serviço', 'am', c, 'Única', 'bl']);
          localStorage.setItem('so_prods', JSON.stringify(a));
          document.querySelector('#pb').innerHTML = prodRows();
          closeDrawer();
          toast('Produto adicionado');
        };
      }
    });
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "salesos/metas.js", error: String((e && e.message) || e) }); }

// salesos/pages1.js
try { (() => {
(() => {
  const funnel = () => {
    const v = [12400, 6800, 3200, 1500, 620, 280, 120],
      W = 1000,
      H = 230,
      m = H / 2;
    const hs = v.map(x => .03 + .97 * Math.pow(x / 12400, .75));
    const pts = [[0, hs[0]], ...hs.map((h, i) => [(i + .5) / 7 * W, h]), [W, hs[6]]];
    const mk = s => {
      const T = pts.map(([x, h]) => [x, m - h * s * m * .96]),
        B = pts.map(([x, h]) => [x, m + h * s * m * .96]).reverse();
      const seg = a => a.slice(1).map((p, i) => {
        const q = a[i],
          mx = (q[0] + p[0]) / 2;
        return `C${mx} ${q[1]},${mx} ${p[1]},${p[0]} ${p[1]}`;
      }).join('');
      return `M${T[0][0]} ${T[0][1]}${seg(T)}L${B[0][0]} ${B[0][1]}${seg(B)}Z`;
    };
    return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none"><defs><linearGradient id="fg" x1="0" x2="1" y1="0" y2="0" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#2EE6C5"/><stop offset=".5" stop-color="#4F8CFF"/><stop offset="1" stop-color="#A25CFF"/><animateTransform attributeName="gradientTransform" type="translate" values="-.08 0;.08 0;-.08 0" dur="9s" repeatCount="indefinite"/></linearGradient></defs><path class="fw" d="${mk(1)}" fill="url(#fg)" opacity=".28"/><path class="fw" d="${mk(.74)}" fill="url(#fg)" opacity=".5"/><path class="fw" d="${mk(.46)}" fill="url(#fg)" opacity=".85"/></svg>`;
  };
  const line = () => {
    const d = [55, 110, 182, 120, 120, 40, 50],
      L = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
      x0 = 46,
      x1 = 400,
      y0 = 24,
      y1 = 170,
      X = i => x0 + i * (x1 - x0) / 6,
      Y = v => y1 - v / 200 * (y1 - y0);
    const p = d.map((v, i) => [X(i), Y(v)]);
    let s = `M${p[0][0]} ${p[0][1]}`;
    p.slice(1).forEach((q, i) => {
      const a = p[i],
        mx = (a[0] + q[0]) / 2;
      s += `C${mx} ${a[1]},${mx} ${q[1]},${q[0]} ${q[1]}`;
    });
    return `<svg class="lc" viewBox="0 0 420 215" width="100%"><defs><linearGradient id="la" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--acc)" stop-opacity=".4"/><stop offset="1" stop-color="var(--acc)" stop-opacity="0"/></linearGradient></defs>${[0, 50, 100, 150, 200].map(v => `<line x1="${x0}" x2="${x1}" y1="${Y(v)}" y2="${Y(v)}" stroke="var(--ln)"/><text x="${x0 - 10}" y="${Y(v) + 4}" text-anchor="end" font-size="11" fill="var(--t3)">${v}</text>`).join('')}<path d="${s}L${x1} ${y1}L${x0} ${y1}Z" fill="url(#la)"/><path class="ln" d="${s}" fill="none" stroke="var(--acc)" stroke-width="3" stroke-linecap="round"/>${p.map((q, i) => `<circle class="pt" style="animation-delay:${.9 + i * .1}s;transform-origin:${q[0]}px ${q[1]}px" cx="${q[0]}" cy="${q[1]}" r="${i === 2 ? 6 : 4.5}" fill="var(--acc)" stroke="var(--bg)" stroke-width="2"/><text x="${q[0]}" y="196" text-anchor="middle" font-size="11.5" fill="var(--t3)">${L[i]}</text>`).join('')}<rect x="${X(2) - 20}" y="${Y(182) - 36}" width="40" height="24" rx="9" fill="var(--s-bg,#fff)" stroke="var(--ln)"/><text x="${X(2)}" y="${Y(182) - 20}" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--tx)">182</text></svg>`;
  };
  PAGES.dashboard = () => {
    let kpiOrder = JSON.parse(localStorage.getItem('kpiOrder')) || ['calls', 'funnel', 'week', 'pipeline'];
    return `
<div class="ph"><div><h1>Bem-vindo João! É aqui que os resultados acontecem!</h1><p>Outubro de 2026</p></div></div>
<div class="g2" style="gap:20px;margin-bottom:20px">
<div class="card pad"><div class="ch">${ic('zap', 18)}Execução hoje</div><div style="margin-top:14px;display:flex;align-items:baseline;gap:8px"><span class="big" style="font-size:48px">8</span><span style="color:var(--t2)">/20 ligações</span></div>
<div style="background:var(--ln);height:8px;border-radius:4px;margin-top:12px;overflow:hidden"><div style="width:40%;height:100%;background:var(--acc);transition:width .3s"></div></div>
<div class="cs" style="margin-top:10px">Meta diária de ligações</div></div>
<div class="card pad"><div class="ch">${ic('target', 18)}Meta do período</div><div style="margin-top:14px;display:flex;flex-direction:column;gap:12px">
<div><div class="cs">Faturamento</div><div class="big" style="font-size:28px">R$ 100.000</div></div>
<div><div class="cs">Ticket médio</div><div class="big" style="font-size:20px">R$ 1.500</div></div>
<div><div class="cs">Período</div><div style="font-size:13px;font-weight:600">30/09 - 30/10 (31 dias)</div></div>
</div></div>
</div>
<div class="card pad" style="margin-bottom:20px"><div class="chead">${tile('sliders', 'g', 22, 's')}<div><div class="ch" style="color:var(--tx)">KPIs do dashboard</div><div class="cs">Clique e arraste para reorganizar a ordem dos indicadores.</div></div></div>
<div class="kpigrid" id="kpigrid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px"></div></div>
<div class="card pad" style="margin-bottom:20px"><div class="chead">${tile('funnel', 'ac', 22, 's')}<div><div class="ch" style="color:var(--tx)">Funil de vendas</div><div class="cs">Da prospecção ao fechamento. Veja quantos leads avançam em cada etapa.</div></div></div>
<div class="fun"><div class="fun-c">${[['Bases importadas', '12.400', '100%', 'g'], ['Qualificados', '6.800', '55%', 'g'], ['Contato realizado', '3.200', '26%', 'bl'], ['Agendamentos', '1.500', '12%', 'bl'], ['Propostas', '620', '5%', 'pu'], ['Negociações', '280', '2%', 'pu'], ['Vendas', '120', '1%', 'pu']].map(([a, b, c, k]) => `<div><span>${a}</span><b>${b}</b>${pill(c, k)}</div>`).join('')}</div>${funnel()}</div></div>
<div class="g3" style="grid-template-columns:1.3fr 1fr 1fr">
<div class="card pad"><div class="chead">${tile('phone', 'g', 20, 's')}<div><div class="ch" style="color:var(--tx)">Ligações por dia da semana</div><div class="cs">Volume de ligações realizadas nesta semana.</div></div></div>${line()}<div class="note" style="align-items:center;margin-top:8px">${tile('bars', 'g', 18, 's')}<span><b style="color:var(--tx);font-size:14px;display:block">Quarta-feira é o pico</b>Foram realizadas 182 ligações (28% da semana).</span></div></div>
<div class="card pad"><div class="ch">${ic('target', 18)}Maior concentração de leads</div><div class="cs" style="margin-top:4px">Etapa com maior volume de oportunidades.</div><div class="conc">${tile('users', 'g', 30, 'l')}<b>Qualificados</b><b class="n">6.800</b><span class="cs">leads nesta etapa</span>${pill('55% do total', 'g')}</div><div class="note">${ic('info', 18)}<span>É aqui que está o maior volume de leads. Priorize o contato para avançar no funil.</span></div></div>
<div class="card pad"><div class="ch">${ic('dollar', 18)}Maior concentração de valor</div><div class="cs" style="margin-top:4px">Etapa com maior valor em oportunidades.</div><div class="conc">${tile('bars', 'pu', 30, 'l')}<b>Negociação</b><b class="n">R$ 85.000</b><span class="cs">em oportunidades</span>${pill('71% do pipeline filtrado', 'pu')}</div><div class="note">${ic('info', 18)}<span>A maior parte do valor está em Negociação. Mantenha o foco para acelerar os fechamentos.</span></div></div></div>`;
  };
  INIT.dashboard = v => {
    const kg = v.querySelector('#kpigrid');
    const kpiCards = {
      calls: `<div class="card pad" draggable="true"><div class="ch">${ic('phone', 18)}Ligações hoje</div><div style="margin-top:14px;font-size:32px;font-weight:700">8/20</div><div style="background:var(--ln);height:6px;border-radius:3px;margin-top:12px;overflow:hidden"><div style="width:40%;height:100%;background:var(--acc)"></div></div></div>`,
      funnel: `<div class="card pad" draggable="true"><div class="ch">${ic('funnel', 18)}Funil resumido</div><div style="margin-top:12px;display:flex;flex-direction:column;gap:6px"><div style="display:flex;justify-content:space-between"><span style="font-size:12px;color:var(--t3)">Qualificados</span><b>6.800</b></div><div style="background:var(--ln);height:4px;border-radius:2px;overflow:hidden"><div style="width:55%;height:100%;background:var(--g)"></div></div></div></div>`,
      week: `<div class="card pad" draggable="true"><div class="ch">${ic('bars', 18)}Pico da semana</div><div style="margin-top:12px"><div style="font-size:28px;font-weight:700">182</div><div style="font-size:12px;color:var(--t3)">Quarta-feira</div></div></div>`,
      pipeline: `<div class="card pad" draggable="true"><div class="ch">${ic('trend', 18)}Pipeline total</div><div style="margin-top:14px;font-size:28px;font-weight:700">R$ 120.000</div><div style="font-size:12px;color:var(--t3)">em negociação</div></div>`
    };
    const order = JSON.parse(localStorage.getItem('kpiOrder')) || ['calls', 'funnel', 'week', 'pipeline'];
    kg.innerHTML = order.map(k => kpiCards[k]).join('');
    let draggedEl = null;
    kg.addEventListener('dragstart', e => {
      draggedEl = e.target.closest('[draggable]');
      draggedEl.style.opacity = '0.5';
    });
    kg.addEventListener('dragover', e => e.preventDefault());
    kg.addEventListener('drop', e => {
      e.preventDefault();
      const target = e.target.closest('[draggable]');
      if (target && draggedEl && target !== draggedEl) {
        const all = [...kg.querySelectorAll('[draggable]')];
        const dragIdx = all.indexOf(draggedEl);
        const targetIdx = all.indexOf(target);
        if (dragIdx < targetIdx) target.after(draggedEl);else target.before(draggedEl);
        const newOrder = Array.from(kg.querySelectorAll('[draggable]')).map((el, i) => {
          for (let k in kpiCards) if (el.innerHTML === kpiCards[k]) return k;
        });
        localStorage.setItem('kpiOrder', JSON.stringify(newOrder));
      }
    });
    kg.addEventListener('dragend', e => {
      draggedEl.style.opacity = '1';
      draggedEl = null;
    });
  };
  let METAS = [{
    n: 'Meta Outubro 2026',
    p: '01/10/2026 – 31/10/2026',
    r: 'R$ 250.000',
    v: 20,
    pc: 45
  }, {
    n: 'Meta Q4',
    p: '01/10/2026 – 31/12/2026',
    r: 'R$ 900.000',
    v: 75,
    pc: 28
  }];
  const PRODS = [['Operação Autônoma', 'Solução completa para operação com IA', 'monitor', 'bl', 'Solução', 'bl', 'R$ 25.000', 'Recorrente', 'g'], ['IA Básica', 'Implementação inicial e treinamento', 'cpu', 'pu', 'Software', 'pu', 'R$ 7.500', 'Única', 'bl'], ['Consultoria', 'Consultoria estratégica e implementação', 'briefcase', 'am', 'Serviço', 'am', 'R$ 12.000', 'Única', 'bl']];
  const metaCard = m => `<div class="card mcard"><div class="mtop"><div>${pill('Ativa', 'g')}<div class="ct" style="margin-top:10px">${m.n}</div><div class="cs" style="display:flex;gap:8px;align-items:center">${ic('calendar', 15)}${m.p}</div></div>${ring(m.pc, 86, 9, '')}</div>
<div class="mst"><div><small>Receita meta</small><b>${m.r}</b></div><div><small>Vendas alvo</small><b>${m.v}</b></div></div>${bar(m.pc)}
<div class="macts"><button class="btn btn-sm" data-toast="Editando ${m.n}" data-ti="pencil">${ic('pencil', 16)}Editar</button><button class="btn btn-sm" data-toast="Meta duplicada" data-ti="copy">${ic('copy', 16)}Duplicar</button><button class="btn btn-sm btn-d" data-del="${m.n}">${ic('trash', 16)}Excluir</button></div></div>`;
  PAGES.metas = () => `<div class="ph"><div><h1>Metas</h1><p>Defina e acompanhe suas metas comerciais sem misturar com prospecção e execução.</p></div>${dateChip('Outubro 2026')}</div>
<div class="g3">${kpi('target', 'g', 'Metas ativas', '2', '+1', 'vs. mês anterior')}${kpi('bars', 'ac', 'Receita alvo do mês', 'R$ 250.000', '+25%', 'Outubro 2026')}${kpi('database', 'pu', 'Ticket médio geral', 'R$ 12.450', '+12%', 'vs. mês anterior')}</div>
<div class="card pad" style="margin-bottom:20px"><div class="chead">${tile('target', 'g')}<div><div class="ct">Metas atuais</div><div class="cs">Gerencie suas metas de receita e vendas para diferentes períodos.</div></div><button class="btn btn-p" data-new="meta">${ic('plus', 18, 2.2)}Nova Meta</button></div><div class="mgrid" id="mg">${METAS.map(metaCard).join('')}</div></div>
<div class="card pad"><div class="chead">${tile('cube', 'ac')}<div><div class="ct">Produtos / serviços</div><div class="cs">Cadastre e gerencie seus produtos e serviços. Essas informações alimentam o ticket médio nas metas.</div></div><button class="btn btn-p" data-toast="Novo produto" data-ti="plus">${ic('plus', 18, 2.2)}Novo Produto</button></div>
<div class="tw"><table class="tbl"><thead><tr><th>Produto / Serviço</th><th>Categoria</th><th>Ticket médio</th><th>Tipo de receita</th><th>Status</th><th>Ações</th></tr></thead><tbody>${PRODS.map(p => `<tr><td><div class="nm">${tile(p[2], p[3], 20, 's')}<div><b>${p[0]}</b><small>${p[1]}</small></div></div></td><td>${pill(p[4], p[5])}</td><td class="num">${p[6]}</td><td>${pill(p[7], p[8])}</td><td>${dotp('Ativo', 'g')}</td><td><div style="display:flex;gap:6px"><button class="btn btn-sm btn-ic" data-toast="Editar produto" data-ti="pencil">${ic('pencil', 16)}</button><button class="btn btn-sm btn-ic" data-menu>${ic('dots', 16)}</button></div></td></tr>`).join('')}</tbody></table></div></div>`;
  INIT.metas = v => {
    v.addEventListener('click', e => {
      const d = e.target.closest('[data-del]');
      if (d) {
        const c = d.closest('.mcard');
        c.style.opacity = 0;
        c.style.transform = 'scale(.94)';
        setTimeout(() => c.remove(), 300);
        toast('Meta excluída', 'trash');
      }
      const n = e.target.closest('[data-new]');
      if (n) newMeta();
    });
  };
  function newMeta() {
    openDrawer(`<div class="dh"><div>${tile('target', 'g', 24, 'l')}<div class="ct" style="margin-top:16px;font-size:22px">Nova meta</div><div class="cs">Defina período, receita e vendas alvo.</div></div><button class="btn btn-ic btn-sm" data-close>${ic('x', 18)}</button></div><div class="db"><div class="fg" style="display:flex;flex-direction:column;gap:14px;margin-top:14px"><div><label>Nome da meta</label><div class="field"><input id="nm" placeholder="Ex.: Meta Novembro 2026"></div></div><div><label>Receita meta</label><div class="field"><input id="nr" placeholder="R$ 0"></div></div><div><label>Vendas alvo</label><div class="field"><input id="nv" type="number" placeholder="0"></div></div></div></div><div class="df"><button class="btn" data-close>Cancelar</button><button class="btn btn-p" id="ns">Criar meta</button></div>`);
    $('#ns').onclick = () => {
      const m = {
        n: $('#nm').value || 'Nova meta',
        p: '01/11/2026 – 30/11/2026',
        r: $('#nr').value || 'R$ 0',
        v: $('#nv').value || 0,
        pc: 0
      };
      $('#mg').insertAdjacentHTML('beforeend', metaCard(m));
      closeDrawer();
      toast('Meta criada');
    };
  }
  const BASES = [['Clínicas PR', 'Clínicas e consultórios do Paraná', 'building', 'bl', 'Saúde', 'g', 2480, 1920, 540, 120, '12/10/2026', '14:32', 'Concluída', 'g'], ['SaaS Brasil', 'Empresas de software no Brasil', 'cloud', 'pu', 'Tecnologia', 'pu', 3200, 1150, 420, 310, '08/10/2026', '10:15', 'Em análise', 'bl'], ['Restaurantes Maringá', 'Restaurantes e bares de Maringá – PR', 'utensils', 'am', 'Alimentação', 'am', 1850, 980, 310, 90, '03/10/2026', '16:20', 'Concluída', 'g'], ['Google Maps Sul', 'Comércios extraídos do Google Maps', 'pin', 'bl', 'Varejo', 'bl', 4800, 2100, 680, 520, '28/09/2026', '11:08', 'Processando', 'pu'], ['Indústrias SC', 'Indústrias de Santa Catarina', 'factory', 'nn', 'Indústria', 'nn', 2150, 1270, 230, 180, '20/09/2026', '09:44', 'Concluída', 'g']];
  const mb = (n, t) => `<div style="min-width:110px"><b>${n.toLocaleString('pt-BR')}</b> <span style="color:var(--t3);font-size:12px">${Math.round(n / t * 100)}%</span>${bar(Math.round(n / t * 100), 's')}</div>`;
  PAGES.bases = () => `<div class="ph"><div><h1>Bases</h1><p>Visualize e gerencie todas as bases importadas em um só lugar.</p></div></div>
<div class="g4">${kpi('database', 'g', 'Bases ativas', '5', '+1', 'vs. mês anterior')}${kpi('users', 'pu', 'Leads importados', '12.480', '+28%', 'vs. mês anterior')}${kpi('clock', 'am', 'Não analisados', '8.420', '67%', 'do total', 'am')}${kpi('target', 'g', 'Qualificados', '2.180', '+42%', 'do total')}</div>
<div class="card frow"><div class="field">${ic('search', 18)}<input placeholder="Buscar por nome da base..." id="bq"></div>${sf('Segmento', ['Todos', 'Saúde', 'Tecnologia', 'Alimentação', 'Varejo', 'Indústria'])}${sf('Status', ['Todos', 'Concluída', 'Em análise', 'Processando'])}${sf('Responsável', ['Todos', 'Ana Silva', 'Carlos Lima'])}${sf('Período', ['Todos os períodos', 'Últimos 30 dias', 'Este trimestre'])}<button class="btn btn-p" data-toast="Nova base" data-ti="plus">${ic('plus', 18, 2.2)}Nova base</button></div>
<div class="card pad"><div class="chead">${tile('database', 'g')}<div><div class="ct">Bases importadas</div><div class="cs">Cada base é uma origem de leads, com seus próprios indicadores e status.</div></div><span class="cs">5 bases</span></div>
<div class="tw"><table class="tbl" id="bt"><thead><tr><th>Nome da base</th><th>Segmento</th><th>Total de leads</th><th>Analisados</th><th>Qualificados</th><th>Duplicados</th><th>Data de importação</th><th>Status</th><th>Ações</th></tr></thead><tbody>${BASES.map(b => `<tr data-q="${b[0].toLowerCase()}"><td><div class="nm">${tile(b[2], b[3], 20, 's')}<div><b>${b[0]}</b><small>${b[1]}</small></div></div></td><td>${pill(b[4], b[5])}</td><td class="num">${b[6].toLocaleString('pt-BR')}</td><td>${mb(b[7], b[6])}</td><td>${mb(b[8], b[6])}</td><td>${mb(b[9], b[6])}</td><td>${b[10]}<br><small style="color:var(--t3)">${b[11]}</small></td><td>${dotp(b[12], b[13])}</td><td><div style="display:flex;gap:6px"><button class="btn btn-sm btn-ic" data-toast="Editar base" data-ti="pencil">${ic('pencil', 16)}</button><button class="btn btn-sm btn-ic" data-menu>${ic('dots', 16)}</button></div></td></tr>`).join('')}</tbody></table></div></div>
<div class="card banner">${tile('bars', 'g', 26, 'l')}<div style="flex:1;min-width:260px"><div class="ct">Trabalhe com várias bases em paralelo</div><p>Importe novas bases, acompanhe o progresso de análise e qualificação, e mantenha seu pipeline sempre abastecido com novas oportunidades. Escale a prospecção com dezenas de bases ao mesmo tempo.</p></div><button class="btn btn-p" data-toast="Nova base" data-ti="plus">${ic('plus', 18, 2.2)}Nova base</button><a>Saiba mais →</a></div>`;
  INIT.bases = v => {
    $('#bq').oninput = e => $$('#bt tbody tr').forEach(r => r.hidden = !r.dataset.q.includes(e.target.value.toLowerCase()));
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "salesos/pages1.js", error: String((e && e.message) || e) }); }

// salesos/pages2.js
try { (() => {
(() => {
  const L = [['Dogão do João', 'João da Silva LTDA', 'Lanchonete', 'am', 'dogaodojoao.com.br', '@dogaodojoao', '(44) 99912-3456'], ['Pizzaria Bella Roma', 'Bella Roma Pizzaria LTDA', 'Pizzaria', 'rd', 'bellaroma.com.br', '@pizzariabellaroma', '(44) 99987-6543'], ['Café Central', 'Café Central Maringá LTDA', 'Cafeteria', 'am', 'cafecentral.com.br', '@cafecentralmga', '(44) 99876-4321'], ['Sushi Maringá', 'Sushi Maringá LTDA', 'Restaurante', 'g', 'sushimaringa.com.br', '@sushimaringa', '(44) 99955-6677'], ['Bistrô do Parque', 'Bistrô do Parque LTDA', 'Restaurante', 'g', 'bistrodoparque.com.br', '@bistrodoparque', '(44) 99881-2233'], ['Hamburgueria 157', 'HC 157 Alimentos LTDA', 'Hamburgueria', 'bl', 'hamburgueria157.com.br', '@hamburgueria157', '(44) 99772-1889'], ['Cantina Nonna Maria', 'Cantina Nonna Maria LTDA', 'Italiana', 'rd', 'nonnamaria.com.br', '@cantinanonnamaria', '(44) 99661-7788'], ['Temakeria Maringá', 'Temakeria Maringá LTDA', 'Japonesa', 'bl', 'temakeria.com.br', '@temakeriamga', '(44) 99554-3323']];
  PAGES.listas = () => `<div class="ph"><div><h1>Restaurantes Maringá</h1><p>Garimpe, filtre e qualifique os melhores leads desta base.</p></div>${dateChip('Outubro 2026')}</div>
<div class="g4">${kpi('users', 'bl', 'Total de leads', '1.248', '+12%', 'vs. mês anterior')}${kpi('clock', 'pu', 'Não analisados', '892', '72%', '', 'nn')}${kpi('target', 'g', 'Qualificados', '284', '23%', '', 'g')}${kpi('xc', 'rd', 'Descartados', '72', '6%', '', 'rd')}</div>
<div class="card frow"><div class="field">${ic('search', 18)}<input id="lq" placeholder="Buscar por nome, razão social, segmento..."></div>${sf('Segmento', ['Todos', 'Lanchonete', 'Restaurante', 'Pizzaria'])}${sf('Cidade', ['Maringá - PR', 'Sarandi - PR', 'Paiçandu - PR'])}${sf('Status', ['Todos', 'Não analisado', 'Qualificado', 'Descartado'])}${sf('Ordenar por', ['Mais recentes', 'Nome (A–Z)', 'Segmento'])}<button class="btn" data-toast="Colunas atualizadas" data-ti="columns">${ic('columns', 18)}Colunas</button></div>
<div class="card pad"><div class="bulk" id="bulk"><input type="checkbox" class="cb" id="all" checked><b id="bn">3 leads selecionados</b><button class="btn btn-p btn-sm" data-toast="Leads qualificados" data-ti="check">${ic('check', 16, 2.4)}Qualificar selecionados</button><button class="btn btn-sm btn-d" data-toast="Leads descartados" data-ti="x">${ic('x', 16, 2.4)}Descartar selecionados</button><button class="btn btn-sm" data-toast="Tag adicionada" data-ti="tag">${ic('tag', 16)}Adicionar tag</button><span class="sp"></span><a id="clr" style="color:var(--t2);display:flex;gap:6px;align-items:center">${ic('x', 14)}Limpar seleção</a></div>
<div class="tw"><table class="tbl" id="lt"><thead><tr><th style="width:40px"></th><th>Nome Fantasia<br><small style="font-weight:500">Razão Social</small></th><th>Segmento</th><th>Cidade</th><th>Site</th><th>Instagram</th><th>WhatsApp</th><th>Informações</th><th>Aprovar</th></tr></thead><tbody>${L.map((r, i) => `<tr data-q="${(r[0] + r[1] + r[2]).toLowerCase()}"><td><input type="checkbox" class="cb rs" ${i < 3 ? 'checked' : ''}></td><td><div class="nm">${av(r[0])}<div><b>${r[0]}</b><small>${r[1]}</small></div></div></td><td>${pill(r[2], r[3])}</td><td>Maringá - PR</td><td><a style="display:inline-flex;gap:6px;align-items:center">${r[4]}${ic('ext', 13)}</a></td><td><span style="display:inline-flex;gap:7px;align-items:center;color:var(--t2)"><span style="color:var(--pu)">${ic('instagram', 17)}</span>${r[5]}</span></td><td><span style="display:inline-flex;gap:7px;align-items:center;color:var(--t2)"><span style="color:var(--ok)">${ic('chat', 17)}</span>${r[6]}</span></td><td><a style="display:inline-flex;gap:6px;align-items:center">${ic('file', 15)}Ver detalhes</a></td><td><input type="checkbox" class="cb ap" ${i < 3 ? 'checked' : ''}></td></tr>`).join('')}</tbody></table></div>
<div class="pg"><span id="lc">Mostrando 1–8 de 1.248 leads</span><div class="pgs"><span>Itens por página</span>${sf('', ['8', '16', '32'])}<button class="pgb">${ic('chevL', 16)}</button>${[1, 2, 3, 4, 5, '…', 156].map((p, i) => `<button class="pgb ${i ? '' : 'on'}">${p}</button>`).join('')}<button class="pgb">${ic('chevR', 16)}</button></div></div></div>`;
  INIT.listas = () => {
    const sync = () => {
      const n = $$('.rs:checked').length;
      $('#bulk').classList.toggle('hide', !n);
      $('#bn').textContent = n + (n === 1 ? ' lead selecionado' : ' leads selecionados');
      $('#all').checked = n > 0;
    };
    $$('.rs').forEach(c => c.onchange = sync);
    $('#all').onchange = e => {
      $$('.rs').forEach(c => c.checked = e.target.checked);
      sync();
    };
    $('#clr').onclick = () => {
      $$('.rs').forEach(c => c.checked = false);
      sync();
    };
    $('#lq').oninput = e => {
      let n = 0;
      $$('#lt tbody tr').forEach(r => {
        const h = !r.dataset.q.includes(e.target.value.toLowerCase());
        r.hidden = h;
        if (!h) n++;
      });
      $('#lc').textContent = n ? `Mostrando 1–${n} de 1.248 leads` : 'Nenhum lead encontrado';
    };
  };
  const Q = [{
    n: 'Alpha Consultoria',
    s: 'Consultoria em gestão',
    o: 'LinkedIn Ads',
    oi: 'linkedin',
    g: 'Consultoria',
    r: 'Ana Silva',
    st: ['Não abordado', 'rd'],
    crm: 1,
    sel: 1
  }, {
    n: 'Beta Recursos',
    s: 'RH e recrutamento',
    o: 'Website',
    oi: 'globe',
    g: 'Recursos Humanos',
    r: 'Carlos Lima',
    st: ['Tentando contato', 'am'],
    crm: 0,
    sel: 1
  }, {
    n: 'Tech Solutions',
    s: 'Soluções em TI',
    o: 'Base Comprada',
    oi: 'database',
    g: 'Tecnologia',
    r: 'Mariana Costa',
    st: ['Contato realizado', 'bl'],
    crm: 0
  }, {
    n: 'Inova Marketing',
    s: 'Marketing digital',
    o: 'Indicação',
    oi: 'users',
    g: 'Marketing',
    r: 'Ana Silva',
    st: ['Agendamento realizado', 'g'],
    crm: 1,
    sel: 1
  }, {
    n: 'Delta Logística',
    s: 'Transporte e logística',
    o: 'Evento',
    oi: 'calendar',
    g: 'Logística',
    r: 'Bruno Mendes',
    st: ['Não abordado', 'rd'],
    crm: 0
  }];
  const qrows = () => Q.map((q, i) => `<tr><td><input type="checkbox" class="cb qs" data-i="${i}" ${q.sel ? 'checked' : ''}></td><td><div class="nm">${av(q.n)}<div><b>${q.n}</b><small>${q.s}</small></div></div></td><td><span style="display:inline-flex;gap:8px;align-items:center;color:var(--t2)">${ic(q.oi, 17)}${q.o}</span></td><td>${q.g}</td><td><div class="nm">${av(q.r, 'nn', 'xs')}${q.r}</div></td><td>${pill(q.st[0], q.st[1])}</td><td>${q.crm ? pill('Novo', 'bl') : pill('Já existe', 'nn', 'user')}</td><td><button class="btn btn-sm btn-ic" data-menu>${ic('dots', 16)}</button></td></tr>`).join('');
  PAGES.qualificacao = () => `<div class="ph"><div><h1>Qualificados</h1><p>Leads aprovados de todas as bases, prontos para abordagem e envio ao pipeline.</p></div></div>
<div class="g4">${kpi('users', 'bl', 'Total de qualificados', '127', '+12%', 'vs. mês anterior')}${kpi('send', 'bl', 'Não abordados', '48', '38%', 'Aguardando primeiro contato', 'nn')}${kpi('phone', 'g', 'Tentando contato', '52', '41%', 'Em abordagem ativa', 'nn')}${kpi('calCheck', 'g', 'Agendamentos', '27', '21%', 'Reuniões marcadas', 'nn')}</div>
<div class="card pad"><div class="chead">${tile('users', 'g', '22', 's')}<div><div class="ct">Leads qualificados <span style="color:var(--t3)">(127)</span></div><div class="cs">Gerencie os leads aprovados e envie para o pipeline.</div></div><button class="btn" data-toast="Importação iniciada" data-ti="plus">${ic('plus', 18)}Importar qualificados</button><button class="btn btn-ic" data-menu>${ic('dots', 18)}</button></div>
<div class="bulk" id="qb"><input type="checkbox" class="cb" id="qa" checked><b id="qn"></b><button class="btn btn-p btn-sm" id="qsend">${ic('send', 16)}Enviar para Pipeline</button><button class="btn btn-sm" data-toast="Status alterado" data-ti="refresh">${ic('refresh', 16)}Alterar status ${ic('chevD', 14)}</button><button class="btn btn-sm" data-toast="Responsável definido" data-ti="user">${ic('user', 16)}Definir responsável</button><button class="btn btn-sm" data-toast="Tag adicionada" data-ti="tag">${ic('tag', 16)}Adicionar tag</button></div>
<div class="tw"><table class="tbl"><thead><tr><th style="width:40px"></th><th>Empresa</th><th>Base / Origem</th><th>Segmento</th><th>Responsável</th><th>Status de contato</th><th>CRM</th><th>Ações</th></tr></thead><tbody id="qt">${qrows()}</tbody></table></div>${pager('Mostrando 5 de 127 leads', [1, 2, 3, '…', 26])}</div>`;
  function qsync() {
    const n = Q.filter(q => q.sel).length;
    $('#qb').classList.toggle('hide', !n);
    $('#qn').textContent = n + (n === 1 ? ' lead selecionado' : ' leads selecionados');
    $('#qa').checked = n > 0;
  }
  INIT.qualificacao = () => {
    qsync();
    $('#qt').onchange = e => {
      const c = e.target.closest('.qs');
      if (c) {
        Q[c.dataset.i].sel = c.checked;
        qsync();
      }
    };
    $('#qa').onchange = e => {
      Q.forEach(q => q.sel = e.target.checked);
      $('#qt').innerHTML = qrows();
      qsync();
    };
    $('#qsend').onclick = () => {
      const s = Q.filter(q => q.sel),
        n = s.filter(q => q.crm),
        x = s.filter(q => !q.crm);
      const li = (q, t) => `<div class="nm" style="padding:8px 0">${av(q.n)}<div style="flex:1"><b>${q.n}</b><small>${q.s}</small></div>${t}</div>`;
      openDrawer(`<div class="dh"><div>${tile('send', 'g', 26, 'l')}<div class="ct" style="margin-top:16px;font-size:23px">Enviar leads para o Pipeline</div><div class="cs">Revise o resumo abaixo antes de enviar os leads selecionados para o pipeline.</div></div><button class="btn btn-ic btn-sm" data-close>${ic('x', 18)}</button></div>
<div class="db"><div class="opt">${tile('send', 'g', 20, 's')}<div><b>${s.length} leads selecionados</b><small>Analisamos os leads e identificamos duplicados no seu CRM.</small></div></div><div class="opt">${tile('send', 'bl', 20, 's')}<div><b>${n.length} serão enviados</b><small>Novos leads que serão criados no CRM.</small></div></div><div class="opt">${tile('user', 'nn', 20, 's')}<div><b>${x.length} já existe no CRM</b><small>Este lead já está cadastrado no CRM e não será duplicado.</small></div></div>
<div class="sh">Leads que serão enviados (${n.length})</div>${n.map(q => li(q, pill('Novo', 'bl'))).join('') || '<div class="empty">Nenhum lead novo.</div>'}<div class="sh">Leads já existentes no CRM (${x.length})</div>${x.map(q => li(q, pill('Já existe', 'nn', 'user'))).join('') || '<div class="empty">Nenhum.</div>'}<div class="note" style="margin-top:14px">${ic('info', 18)}<span><b style="color:var(--tx)">Não duplicar leads no CRM.</b> O sistema identifica automaticamente quais leads já existem, enviando apenas os novos.</span></div></div>
<div class="df"><button class="btn" data-close>Cancelar</button><button class="btn btn-p" id="qok">${ic('send', 16)}Enviar ${n.length} leads para o Pipeline</button></div>`);
      $('#qok').onclick = () => {
        closeDrawer();
        toast(n.length + ' leads enviados para o Pipeline', 'send');
      };
    };
  };
  const EX = [['Dogão do João', 'Restaurante e Delivery', 'Ligação', 'phone', 'g', '09:00', 'Qualificação', 'bl', 'Apresentar proposta', 'hoje'], ['TechFlow', 'Soluções em TI', 'E-mail', 'mail', 'bl', '10:30', 'Proposta', 'pu', 'Enviar proposta comercial', 'hoje'], ['Clínica Smile', 'Saúde e Estética', 'Reunião', 'users', 'pu', '14:00', 'Descoberta', 'am', 'Reunião de diagnóstico', 'hoje'], ['Mercado Bom Preço', 'Varejo Alimentício', 'WhatsApp', 'chat', 'g', '15:30', 'Follow-up', 'bl', 'Retornar sobre orçamento', 'hoje fu'], ['Academia Performance', 'Fitness e Bem-estar', 'Ligação', 'phone', 'g', '16:30', 'Proposta', 'pu', 'Tirar dúvidas da proposta', 'hoje']];
  const AG = [['09:00', 'Ligação', 'Dogão do João', 'phone', 'g'], ['10:30', 'E-mail', 'TechFlow', 'mail', 'bl'], ['11:30', 'Follow-up (WhatsApp)', 'Mercado Bom Preço', 'chat', 'g'], ['14:00', 'Reunião', 'Clínica Smile', 'users', 'pu'], ['15:30', 'Ligação', 'Academia Performance', 'phone', 'g'], ['16:30', 'E-mail', 'Agência Criativa', 'mail', 'bl'], ['17:00', 'Follow-up', 'Construtora Avante', 'phone', 'pu']];
  const RR = v => 'R$ ' + v.toLocaleString('pt-BR');
  let SCN = 'real';
  const SC = {
      real: null,
      low: [3, 2, 1, 0, 1, 0, 0],
      many: [7, 6, 5, 5, 1, 0, 2],
      good: [4, 3, 3, 3, 5, 4, 3]
    },
    SCL = [['real', 'Pipeline real'], ['low', 'Poucas negociações'], ['many', 'Muito pipeline, pouco fechamento'], ['good', 'Fechamento saudável']],
    AVG = [8000, 16000, 21000, 27000, 22000, 26000, 38000];
  function diag() {
    const P = window.PIPE ? PIPE() : [],
      o = SC[SCN],
      n = P.map((k, i) => o ? o[i] : k.c.length),
      v = P.map((k, i) => o ? o[i] * AVG[i] : k.c.reduce((a, c) => a + c.v, 0)),
      open = n.slice(0, 6).reduce((a, b) => a + b, 0),
      close = n[4] + n[5],
      closeV = v[4] + v[5],
      rate = open ? Math.round(close / open * 100) : 0,
      need = Math.ceil(52000 / 12450);
    let f, a;
    if (close <= 2 && open < 10) {
      f = {
        i: 'phone',
        c: 'rd',
        t: 'Gerar novas negociações',
        d: `Apenas ${close} ${close === 1 ? 'oportunidade está' : 'oportunidades estão'} em proposta ou negociação. O foco do dia é abrir novas conversas com ligações e prospecção ativa.`
      };
      a = [['phone', 'Fazer 30 ligações', 'Há 48 qualificados ainda não abordados. Priorize quem tem WhatsApp e site ativos.', 'Abrir qualificados', 'qualificacao'], ['calendar', 'Agendar reuniões', `${n[1]} leads em Contato aguardam agendamento.`, 'Ver pipeline', 'pipeline'], ['send', 'Enviar qualificados ao pipeline', 'Alimente a etapa Tentativas com novos leads.', 'Enviar leads', 'qualificacao']];
    } else if (open >= 10 && rate < 30) {
      f = {
        i: 'funnel',
        c: 'am',
        t: 'Melhorar a passagem para o fechamento',
        d: `Há ${open} oportunidades abertas, mas só ${close} (${rate}%) estão em proposta ou negociação. O gargalo está no meio do funil.`
      };
      a = [['file', 'Enviar propostas', `${n[3]} reuniões realizadas ainda sem proposta enviada.`, 'Ver pipeline', 'pipeline'], ['mail', 'Confirmar agendamentos', `${n[2]} reuniões agendadas: confirme presença e prepare a pauta.`, 'Ver pipeline', 'pipeline'], ['bars', 'Priorizar por valor', `Oportunidades em Contato somam ${RR(v[1])}. Qualifique orçamento e decisor.`, 'Ver pipeline', 'pipeline']];
    } else {
      f = {
        i: 'trophy',
        c: 'g',
        t: 'Acelerar os fechamentos',
        d: `${close} oportunidades (${RR(closeV)}) estão em proposta ou negociação. Mantenha o ritmo e continue abastecendo o topo do funil.`
      };
      a = [['dollar', 'Avançar negociações', `${n[5]} em negociação somam ${RR(v[5])}. Resolva objeções e condições.`, 'Ver pipeline', 'pipeline'], ['mail', 'Cobrar respostas de propostas', `${n[4]} propostas aguardam retorno (${RR(v[4])}).`, 'Ver pipeline', 'pipeline'], ['phone', 'Manter a prospecção', 'Reserve 10 ligações para novos leads e não esvazie o topo do funil.', 'Abrir qualificados', 'qualificacao']];
    }
    a.unshift(['clock', 'Zerar atividades atrasadas', '3 atividades vencidas. Resolva antes de iniciar novas.', 'Ver atividades', 'late']);
    return {
      f,
      a,
      open,
      close,
      closeV,
      rate,
      need
    };
  }
  const todayPanel = () => {
    const d = diag();
    return `<div class="card pad" style="margin-bottom:20px"><div class="chead">${tile('bulb', 'ac', 22, 's')}<div><div class="ct">O que devemos fazer hoje</div><div class="cs">Recomendação calculada a partir do pipeline atual e da meta do período.</div></div></div>
<div class="scn"><span>Simular cenário</span><div class="seg" id="scn">${SCL.map(([k, l]) => `<button data-s="${k}" class="${SCN === k ? 'on' : ''}">${l}</button>`).join('')}</div></div>
<div class="tdy"><div class="focus k-${d.f.c}">${tile(d.f.i, d.f.c, 26, 'l')}<div><span class="eyebrow" style="margin:0">FOCO DO DIA</span><div class="ct" style="font-size:22px;margin:4px 0">${d.f.t}</div><p class="cs">${d.f.d}</p></div></div>
<div class="facts"><div><small>Oportunidades abertas</small><b>${d.open}</b></div><div><small>Em fechamento</small><b>${d.close} <span style="font-size:14px;color:var(--t3)">${d.rate}%</span></b></div><div><small>Valor em fechamento</small><b>${RR(d.closeV)}</b></div><div><small>Falta para a meta</small><b>R$ 52.000</b> <small style="display:inline">≈ ${d.need} vendas</small></div></div></div>
<div class="acts">${d.a.map((x, i) => `<div class="act"><span class="no">${i + 1}</span>${tile(x[0], 'ac', 20, 's')}<div><b>${x[1]}</b><p class="cs">${x[2]}</p></div><button class="btn btn-sm" data-act="${x[4]}">${x[3]}${ic('chevR', 14)}</button></div>`).join('')}</div></div>`;
  };
  PAGES.execucao = () => `<div class="ph"><div><h1>Execução</h1><p>Tudo o que precisa ser feito hoje: tentativas, follow-ups, cadências e reuniões.</p></div></div>
<div class="g4">${kpi('clock', 'rd', 'Atrasadas', '3', '+3', 'vs. ontem', 'rd')}${kpi('calendar', 'g', 'Hoje', '12', '+2', 'atividades agendadas')}${kpi('mail', 'bl', 'Follow-ups', '5', '+2', 'e-mails e mensagens', 'bl')}${kpi('users', 'pu', 'Reuniões', '2', '+1', 'hoje na agenda', 'pu')}</div>
<div id="todayw">${todayPanel()}</div>
<div style="display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:20px" class="exg">
<div class="card pad"><div style="margin-bottom:18px"><div class="tabs">${[['hoje', 'Hoje'], ['late', 'Atrasadas (3)'], ['fu', 'Follow-ups (5)'], ['cad', 'Cadências (4)'], ['next', 'Próximas']].map(([k, l], i) => `<button class="tab ${i ? '' : 'on'}" data-tab="${k}">${l}</button>`).join('')}</div></div>
<div class="chead">${tile('target', 'g', 22, 's')}<div><div class="ct">Minhas atividades</div><div class="cs">Lista de todas as atividades do dia, vinculadas aos leads e empresas.</div></div><button class="btn btn-p" data-toast="Nova atividade" data-ti="plus">${ic('plus', 18, 2.2)}Nova atividade</button></div>
<div class="tw"><table class="tbl"><thead><tr><th style="width:40px"></th><th>Lead / Empresa</th><th>Tipo</th><th>Horário</th><th>Etapa atual</th><th>Próxima ação</th><th>Ações</th></tr></thead><tbody id="et">${EX.map(r => `<tr data-g="${r[9]}"><td><input type="checkbox" class="cb"></td><td><div class="nm">${av(r[0])}<div><b>${r[0]}</b><small>${r[1]}</small></div></div></td><td>${pill(r[2], r[4], r[3])}</td><td class="num">${r[5]}</td><td>${pill(r[6], r[7])}</td><td style="max-width:150px">${r[8]}</td><td><div style="display:flex;gap:8px"><button class="btn btn-p btn-sm done">${ic('check', 16, 2.4)}Concluir</button><button class="btn btn-sm" data-toast="Atividade reagendada" data-ti="calendar">${ic('calendar', 16)}Reagendar</button><button class="btn btn-sm btn-ic" data-menu>${ic('dots', 16)}</button></div></td></tr>`).join('')}</tbody></table><div class="empty" id="ee" hidden>Nenhuma atividade nesta visão.</div></div></div>
<div class="card pad"><div class="chead">${tile('calendar', 'g', 20, 's')}<div><div class="ct" style="font-size:17px">Agenda de hoje</div></div>${pill('12 atividades', 'g')}</div><div class="tl">${AG.map(a => `<div class="k-${a[4]}"><i class="d"></i><b>${a[0]}</b><div class="it"><span style="color:color-mix(in oklab,var(--c) 75%,var(--tx))">${ic(a[3], 17)}</span><div><b>${a[1]}</b><small>${a[2]}</small></div></div></div>`).join('')}</div></div></div>`;
  INIT.execucao = v => {
    $('#todayw').onclick = e => {
      const s = e.target.closest('[data-s]');
      if (s) {
        SCN = s.dataset.s;
        $('#todayw').innerHTML = todayPanel();
        return;
      }
      const a = e.target.closest('[data-act]');
      if (a) {
        const k = a.dataset.act;
        if (k === 'late') {
          const V = $('#view');
          V.scrollTo({
            top: $('.exg').getBoundingClientRect().top - V.getBoundingClientRect().top + V.scrollTop - 20,
            behavior: 'smooth'
          });
        } else go(k);
      }
    };
    $('#et').onclick = e => {
      const b = e.target.closest('.done');
      if (b) {
        const r = b.closest('tr');
        r.classList.add('done');
        b.disabled = true;
        b.innerHTML = ic('check', 16, 2.4) + 'Concluída';
        toast('Atividade concluída');
      }
    };
    v.querySelector('.tabs').onclick = e => {
      const t = e.target.closest('.tab');
      if (!t) return;
      const k = t.dataset.tab;
      let n = 0;
      $$('#et tr').forEach(r => {
        const s = k === 'hoje' || r.dataset.g.split(' ').includes(k);
        r.hidden = !s;
        if (s) n++;
      });
      $('#ee').hidden = n > 0;
    };
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "salesos/pages2.js", error: String((e && e.message) || e) }); }

// salesos/pages3.js
try { (() => {
(() => {
  const TAG = {
    'Solução': 'bl',
    'IA Básica': 'pu',
    'Consultoria': 'am',
    'Operação Autônoma': 'g'
  };
  let COLS = [['Tentativas', [['Dogão do João', 'Alimentação', 'IA Básica', 7500, 'Rafael Silva', 'Ligar amanhã'], ['Academia PowerFit', 'Saúde e Bem-estar', 'IA Básica', 5000, 'Rafael Silva', 'Enviar apresentação'], ['Loja Estilo Mix', 'Varejo', 'Operação Autônoma', 12000, 'Carla Pinto', 'Ligar amanhã']]], ['Contato', [['TechFlow', 'Tecnologia', 'Solução', 25000, 'Carla Pinto', 'Agendar reunião'], ['Farmácia Popular', 'Saúde', 'Solução', 15000, 'Lucas Mendes', 'Confirmar interesse'], ['Mercado Bom Preço', 'Varejo', 'IA Básica', 8500, 'Lucas Mendes', 'Enviar materiais']]], ['Agendamento', [['Clínica Smile', 'Saúde', 'Solução', 22000, 'Rafael Silva', 'Reunião em 22/10'], ['Escola Futuro', 'Educação', 'Solução', 20000, 'Carla Pinto', 'Reunião em 21/10']]], ['Reunião realizada', [['Construtora Horizonte', 'Construção Civil', 'Consultoria', 35000, 'Lucas Mendes', 'Enviar proposta'], ['Restaurante Sabor & Cia', 'Alimentação', 'IA Básica', 20000, 'Rafael Silva', 'Aguardando retorno']]], ['Proposta', [['Clínica Vida', 'Saúde', 'Solução', 28000, 'Rafael Silva', 'Aguardar aprovação'], ['Colégio Ideal', 'Educação', 'Solução', 22000, 'Lucas Mendes', 'Negociar condições'], ['Rede Farma+', 'Saúde', 'Consultoria', 18000, 'Carla Pinto', 'Aguardar retorno']]], ['Negociação', [['Posto Avenida', 'Combustíveis', 'Solução', 30000, 'Lucas Mendes', 'Ajustar escopo'], ['AgroCampo', 'Agronegócio', 'Consultoria', 22000, 'Rafael Silva', 'Negociar preço']]], ['Ganhos', [['Clínica Sorriso', 'Saúde', 'Solução', 45000, 'Rafael Silva', 'Contrato assinado'], ['Padaria do Centro', 'Alimentação', 'IA Básica', 33500, 'Carla Pinto', 'Implementação']]]].map(([n, c]) => ({
    n,
    c: c.map(x => ({
      n: x[0],
      s: x[1],
      t: x[2],
      v: x[3],
      o: x[4],
      a: x[5]
    }))
  }));
  let SEL = 'Clínica Smile';
  window.PIPE = () => COLS;
  window.DEAL = () => COLS.flatMap(k => k.c.map(c => ({
    ...c,
    st: k.n
  }))).find(c => c.n === SEL) || {
    n: 'Clínica Smile',
    s: 'Saúde',
    t: 'Solução',
    v: 22000,
    o: 'Rafael Silva',
    a: 'Reunião em 22/10',
    st: 'Agendamento'
  };
  const R = v => 'R$ ' + v.toLocaleString('pt-BR');
  const card = c => `<div class="kc ${c.n === SEL ? 'sel' : ''}" draggable="true" data-n="${c.n}"><div class="t">${av(c.n)}<div style="flex:1;min-width:0"><b>${c.n}</b><small>${c.s}</small></div><span style="color:var(--t3)">${ic('dots', 16)}</span></div>${pill(c.t, TAG[c.t])}<div class="v">${R(c.v)}</div><div class="f">${av(c.o, 'nn', 'xs')}${c.o}</div><div class="f">${ic(c.a === 'Contrato assinado' ? 'check' : 'calendar', 15)}${c.a}</div></div>`;
  const board = () => COLS.map((k, i) => `<div class="kcol" data-i="${i}"><div class="kh"><div>${k.n}${pill(k.c.length, 'nn')}</div><small>${R(k.c.reduce((a, c) => a + c.v, 0))}</small></div>${k.c.map(card).join('')}</div>`).join('');
  const stats = () => {
    const all = COLS.flatMap(k => k.c),
      open = COLS.slice(0, 6).flatMap(k => k.c);
    return `<div class="g4">${kpi('users', 'bl', 'Oportunidades', all.length, '+20%', 'vs. mês anterior')}${kpi('dollar', 'g', 'Valor potencial', R(open.reduce((a, c) => a + c.v, 0)), '+35%', 'vs. mês anterior')}${kpi('file', 'pu', 'Propostas', COLS[4].c.length, '+33%', 'vs. mês anterior')}${kpi('trophy', 'g', 'Ganhos', COLS[6].c.length, '+67%', 'vs. mês anterior')}</div>`;
  };
  PAGES.pipeline = () => `<div class="ph"><div><h1>Pipeline Comercial</h1><p>Acompanhe as oportunidades por etapa, mantendo contexto completo do lead.</p></div></div><div id="ps">${stats()}</div>
<div class="card frow"><div class="field">${ic('search', 18)}<input id="pq" placeholder="Buscar empresa, contato ou oportunidade..."></div>${sf('Responsável', ['Todos', 'Rafael Silva', 'Carla Pinto', 'Lucas Mendes'])}${sf('Produto', ['Todos', 'Solução', 'IA Básica', 'Consultoria'])}${sf('Origem / Base', ['Todas', 'Indicação', 'Google Maps'])}${sf('Status de contato', ['Todos', 'Interessado', 'Sem retorno'])}<button class="btn btn-p" data-toast="Nova oportunidade" data-ti="plus">${ic('plus', 18, 2.2)}Nova oportunidade</button></div>
<div class="kan" id="kan">${board()}</div>`;
  function detail(c) {
    const stage = COLS.find(k => k.c.includes(c)).n;
    const row = (i, l, v) => `<div class="dl">${ic(i, 18)}<span>${l}</span><b>${v}</b></div>`;
    openDrawer(`<div class="dh"><div style="display:flex;gap:14px;align-items:center">${tile('cross', 'bl', 26, 'l')}<div><div class="ct" style="font-size:21px">${c.n}</div><div class="cs">${c.s}${c.n === 'Clínica Smile' ? ' &nbsp;•&nbsp; CNPJ 12.345.678/0001-90' : ''}</div></div></div><button class="btn btn-ic btn-sm" data-close>${ic('x', 18)}</button></div>
<div class="db"><div class="tabs" style="margin:6px 0 10px">${['Detalhes', 'Histórico', 'Tarefas', 'Arquivos'].map((t, i) => `<button class="tab ${i ? '' : 'on'}" data-tab="${t}">${t}</button>`).join('')}</div>
<div id="dt">${row('building', 'Empresa', c.n)}${row('refresh', 'Origem / Base', 'Indicação')}${row('user', 'Contato', c.n === 'Clínica Smile' ? 'Dra. Juliana Alves<br><a>juliana@clinicasmile.com.br</a><br>(11) 98765-4321' : 'A definir')}${row('cube', 'Produto', pill(c.t, TAG[c.t]))}${row('user', 'Responsável', av(c.o, 'g', 'xs') + ' &nbsp;' + c.o)}${row('dollar', 'Valor estimado', R(c.v))}
<div class="dl">${ic('pipeline', 18)}<span>Etapa do pipeline</span>${sf('', COLS.map(k => k.n).map(n => n === stage ? n + ' ' : n).map(x => x), 'dst')}</div>${row('chat', 'Status de contato', pill('Interessado', 'g'))}${row('calendar', 'Próxima ação', c.a)}
<div class="note" style="margin-top:10px">${ic('info', 18)}<span>${c.n === 'Clínica Smile' ? 'Reunião online para apresentar a solução e entender necessidades da clínica.' : 'Sem observações registradas.'}</span></div></div></div>
<div class="df"><button class="btn btn-p" data-go="negocio">${ic('file', 16)}Abrir ficha</button><button class="btn btn-ic" style="flex:none" data-menu>${ic('dots', 18)}</button></div>`);
    const s = $('#dst');
    s.selectedIndex = COLS.findIndex(k => k.n === stage);
    s.onchange = () => {
      move(c, s.selectedIndex);
      toast('Movida para ' + COLS[s.selectedIndex].n, 'pipeline');
    };
    $('#drawer .tabs').onclick = e => {
      const t = e.target.closest('.tab');
      if (t) $('#dt').innerHTML = t.dataset.tab === 'Detalhes' ? $('#dt').dataset.h || '' : '<div class="empty">Sem registros ainda.</div>';
    };
    $('#dt').dataset.h = $('#dt').innerHTML;
  }
  const move = (c, to) => {
    COLS.forEach(k => k.c = k.c.filter(x => x !== c));
    COLS[to].c.push(c);
    $('#kan').innerHTML = board();
    $('#ps').innerHTML = stats();
  };
  INIT.pipeline = () => {
    const kan = $('#kan');
    let drag = null;
    kan.onclick = e => {
      const k = e.target.closest('.kc');
      if (!k) return;
      const c = COLS.flatMap(x => x.c).find(x => x.n === k.dataset.n);
      SEL = c.n;
      $$('.kc', kan).forEach(x => x.classList.toggle('sel', x === k));
      detail(c);
    };
    kan.ondragstart = e => {
      const k = e.target.closest('.kc');
      if (!k) return;
      drag = COLS.flatMap(x => x.c).find(x => x.n === k.dataset.n);
      k.classList.add('drag');
    };
    kan.ondragend = e => {
      e.target.classList?.remove('drag');
      $$('.kcol', kan).forEach(x => x.classList.remove('over'));
    };
    kan.ondragover = e => {
      const c = e.target.closest('.kcol');
      if (c) {
        e.preventDefault();
        $$('.kcol', kan).forEach(x => x.classList.toggle('over', x === c));
      }
    };
    kan.ondrop = e => {
      const c = e.target.closest('.kcol');
      if (c && drag) {
        e.preventDefault();
        move(drag, +c.dataset.i);
        toast('Movida para ' + COLS[+c.dataset.i].n, 'pipeline');
      }
      drag = null;
    };
    $('#pq').oninput = e => $$('.kc', kan).forEach(k => k.hidden = !k.textContent.toLowerCase().includes(e.target.value.toLowerCase()));
  };
  const EM = [['Dogão do João', 'Lanchonete', 'Maringá - PR', 'Rafael Silva', 'Lead', 'bl'], ['Clínica Smile', 'Saúde', 'São Paulo - SP', 'Rafael Silva', 'Oportunidade', 'pu'], ['TechFlow', 'Tecnologia', 'Curitiba - PR', 'Carla Pinto', 'Oportunidade', 'pu'], ['Clínica Sorriso', 'Saúde', 'Londrina - PR', 'Rafael Silva', 'Cliente', 'g'], ['Construtora Horizonte', 'Construção Civil', 'Maringá - PR', 'Lucas Mendes', 'Oportunidade', 'pu'], ['Padaria do Centro', 'Alimentação', 'Maringá - PR', 'Carla Pinto', 'Cliente', 'g'], ['Posto Avenida', 'Combustíveis', 'Cascavel - PR', 'Lucas Mendes', 'Oportunidade', 'pu'], ['Café Central', 'Cafeteria', 'Maringá - PR', 'Ana Silva', 'Lead', 'bl']];
  PAGES.empresas = () => `<div class="ph"><div><h1>Empresas</h1><p>Cadastro centralizado de todos os leads e clientes.</p></div><button class="btn btn-p" data-toast="Nova empresa" data-ti="plus">${ic('plus', 18, 2.2)}Nova empresa</button></div>
<div class="g3">${kpi('building', 'bl', 'Empresas cadastradas', '1.248')}${kpi('user', 'g', 'Clientes', '2', '', 'Contratos ativos')}${kpi('pipeline', 'pu', 'Em oportunidade', '17', '', 'Dentro do pipeline')}</div>
<div class="card pad"><div class="field" style="margin-bottom:16px">${ic('search', 18)}<input id="eq" placeholder="Buscar empresa, segmento ou cidade..."></div><div class="tw"><table class="tbl" id="et2"><thead><tr><th>Empresa</th><th>Segmento</th><th>Cidade</th><th>Responsável</th><th>Relacionamento</th><th></th></tr></thead><tbody>${EM.map(r => `<tr data-q="${r.join(' ').toLowerCase()}"><td><div class="nm">${av(r[0])}<b>${r[0]}</b></div></td><td>${r[1]}</td><td>${r[2]}</td><td><div class="nm">${av(r[3], 'nn', 'xs')}${r[3]}</div></td><td>${pill(r[4], r[5])}</td><td><button class="btn btn-sm btn-ic" data-menu>${ic('dots', 16)}</button></td></tr>`).join('')}</tbody></table></div></div>`;
  INIT.empresas = () => {
    $('#eq').oninput = e => $$('#et2 tbody tr').forEach(r => r.hidden = !r.dataset.q.includes(e.target.value.toLowerCase()));
  };
  const TPL = [['Turquesa Clean', 'Claro, relevo suave', 'light', 'neu', 1], ['Dark Futurista', 'Escuro, neon e grade', 'dark', 'future', 7], ['Azul Premium', 'Claro, vidro líquido', 'light', 'liquid', 5], ['Âmbar Elegante', 'Escuro, plano e direto', 'dark', 'flat', 15]];
  const ST = [['neu', 'Neumorfismo', 'Relevo suave de luz e sombra'], ['flat', 'Flat UI', 'Sem sombras, bordas finas'], ['material', 'Material Design', 'Elevação e campos preenchidos'], ['glass', 'Glassmorphism', 'Vidro fosco translúcido'], ['liquid', 'Liquid Glass', 'Vidro fluido com brilho'], ['clay', 'Claymorphism', 'Formas infladas e macias'], ['bento', 'Bento UI', 'Blocos compactos e tintados'], ['soft', 'Soft Minimalism', 'Ar, sombras difusas'], ['card', 'Card-based UI', 'Cartões com cabeçalho'], ['depth', '3D UI', 'Camadas e botões físicos'], ['future', 'Futuristic UI', 'Neon, grade e cantos cortados'], ['spatial', 'Spatial UI', 'Vidro profundo e perspectiva'], ['contrast', 'High Contrast UI', 'Preto e branco, bordas firmes']];
  const PN = ['Aqua', 'Índigo', 'Orquídea', 'Terracota', 'Oliva', 'Areia', 'Petróleo', 'Rosa', 'Ametista', 'Âmbar'];
  const prev = (th, su, pal) => '<div class="tp" data-theme="' + th + '" data-surface="' + su + '" style="' + palVars(pal, th) + '"><i class="bl" style="width:80px;height:80px;background:var(--b1);left:-10px;top:-14px"></i><i class="bl" style="width:90px;height:90px;background:var(--b2);right:-20px;bottom:-30px"></i><div class="card mc"><div style="display:flex;gap:8px;align-items:center"><span class="tile s" style="--c:var(--acc);width:26px;height:26px;border-radius:9px"></span><span class="bar s" style="flex:1"><i style="--w:60%;animation:none"></i></span></div><span class="mini"></span></div></div>';
  PAGES.config = () => {
    const S = SET.get(),
      t = SET.theme();
    return `<div class="ph"><div><h1>Configurações</h1><p>Personalize o Sales OS: estilo da interface, paleta de cores, modo e efeitos.</p></div></div>
<div class="tabs" style="margin-bottom:20px"><button class="tab on" data-go="config">Aparência</button><button class="tab" data-go="conta">Conta</button></div>
<div class="card pad" style="margin-bottom:20px"><div class="chead">${tile('wand', 'ac', 22, 's')}<div><div class="ct">Templates prontos</div><div class="cs">Aplique uma combinação de modo, estilo e paleta com um clique.</div></div></div><div class="tpg">${TPL.map((p, i) => `<button class="tpw ${S.mode === p[2] && S.surface === p[3] && S.pal === p[4] ? 'on' : ''}" data-tpl="${i}">${prev(p[2], p[3], p[4])}<b>${p[0]}</b><small>${p[1]}</small></button>`).join('')}</div></div>
<div class="card pad" style="margin-bottom:20px"><div class="chead">${tile('layers', 'ac', 22, 's')}<div><div class="ct">Estilo da interface</div><div class="cs">13 estilos. Mudam superfícies, sombras, bordas, cantos e profundidade em todas as telas.</div></div></div><div class="tpg">${ST.map(([k, l, d]) => `<button class="tpw ${S.surface === k ? 'on' : ''}" data-surf="${k}">${prev(t, k, S.pal)}<b>${l}</b><small>${d}</small></button>`).join('')}</div></div>
${palCard(S)}
<div class="card pad"><div class="srow"><div><b>Modo</b><small>Claro, escuro ou seguindo o sistema.</small></div><div class="seg" id="smode">${[['light', 'Claro', 'sun'], ['dark', 'Escuro', 'moon'], ['system', 'Sistema', 'monitor']].map(([k, l, i]) => `<button data-mode="${k}" class="${S.mode === k ? 'on' : ''}">${ic(i, 18)}${l}</button>`).join('')}</div></div>
<div class="srow"><div><b>Efeito liquid</b><small>Fundo fluido, indicador gotejante no menu e brilho nas barras.</small></div><button class="sw ${S.liquid ? 'on' : ''}" data-tg="liquid" aria-label="Efeito liquid"></button></div>
<div class="srow"><div><b>Animações</b><small>Transições e entradas suaves nas telas.</small></div><button class="sw ${S.motion ? 'on' : ''}" data-tg="motion" aria-label="Animações"></button></div>
<div class="srow"><div><b>Menu lateral compacto</b><small>Mostra apenas os ícones na barra lateral.</small></div><button class="sw ${S.compact ? 'on' : ''}" data-tg="compact" aria-label="Menu compacto"></button></div></div>`;
  };
  INIT.config = v => {
    v.onclick = e => {
      const b = e.target.closest('[data-tpl],[data-mode],[data-surf],[data-pal],[data-tg]');
      if (!b) return;
      const d = b.dataset;
      if (d.tpl) {
        const p = TPL[d.tpl];
        setS({
          mode: p[2],
          surface: p[3],
          pal: p[4]
        });
      } else if (d.mode) setS({
        mode: d.mode
      });else if (d.surf) setS({
        surface: d.surf
      });else if (d.pal) setS({
        pal: +d.pal
      });else if (d.tg) setS({
        [d.tg]: !SET.get()[d.tg]
      });
    };
  };
  PAGES.conta = () => `<div class="ph"><div><h1>Conta</h1><p>Dados do usuário e do workspace.</p></div></div>
<div class="tabs" style="margin-bottom:20px"><button class="tab" data-go="config">Aparência</button><button class="tab on" data-go="conta">Conta</button></div>
<div class="card pad"><div class="chead">${av('Sales Ops', 'ac')}<div><div class="ct">Perfil</div><div class="cs">Informações exibidas para o time.</div></div></div><div class="fgrid">${[['Nome', 'Usuário Sales Ops'], ['E-mail', 'usuario@avraham.com.br'], ['Workspace', 'Avraham Hub'], ['Cargo', 'Gestor comercial']].map(([l, v]) => `<div class="fg"><label>${l}</label><div class="field"><input value="${v}"></div></div>`).join('')}</div><div style="margin-top:22px;display:flex;gap:12px"><button class="btn btn-p" data-toast="Alterações salvas" data-ti="check">${ic('check', 16, 2.4)}Salvar alterações</button><button class="btn">Cancelar</button></div></div>`;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "salesos/pages3.js", error: String((e && e.message) || e) }); }

// salesos/pages4.js
try { (() => {
(() => {
  const NM = ["Turquesa", "Aqua", "Ciano Elétrico", "Azul Royal", "Azul Cobalto", "Azul Petróleo", "Índigo", "Violeta", "Roxo Premium", "Magenta", "Rosa", "Vermelho", "Coral", "Laranja", "Âmbar", "Amarelo", "Lima", "Verde", "Esmeralda", "Grafite Premium"];
  const GR = [['Frios', [0, 1, 2, 3, 4, 5, 6]], ['Roxos', [7, 8, 9, 10, 11]], ['Quentes', [11, 12, 13, 14, 15, 16]], ['Naturais', [16, 17, 18]], ['Neutro', [19]]];
  const mini = (th, su, pal) => `<div class="tp tpm" data-theme="${th}" data-surface="${su}" style="${palVars(pal, th)}"><div class="card mc"><div class="mr"><span class="mini"></span><span class="mini2"></span></div><svg viewBox="0 0 60 18" preserveAspectRatio="none"><polyline points="0,14 10,10 20,12 30,5 42,8 60,2" fill="none" stroke="var(--acc)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><div class="msel"></div></div></div>`;
  window.palCard = S => `<div class="card pad" style="margin-bottom:20px"><div class="chead">${tile('palette', 'ac', 22, 's')}<div><div class="ct">Paleta de cores</div><div class="cs">20 paletas. Fundo e cartões neutros, só o destaque tem força. Cada uma mostra a versão clara (esquerda) e escura (direita) no estilo atual.</div></div></div>
${GR.map(([g, ix]) => `<div class="pgrp">${g}</div><div class="pw">${ix.map(i => {
    const p = PAL[i];
    return `<button class="tpw ${S.pal === i + 1 ? 'on' : ''}" data-pal="${i + 1}"><div class="pal2">${mini('light', S.surface, i + 1)}${mini('dark', S.surface, i + 1)}</div><b>${String(i + 1).padStart(2, '0')} · ${NM[i]}</b><div class="dots">${[p[2], p[5], p[1], p[4]].map(c => `<i style="background:${c}"></i>`).join('')}</div></button>`;
  }).join('')}</div>`).join('')}</div>`;
  const CO = [['Baco Espaço Gastronômico', 'Restaurante', 4.7, 1260, 'Av. São Paulo, 1880 - Zona 02, Maringá - PR, 87010-350', '+55 44 99910-2771', 'bacorestaurante.com.br', '@bacoespacogastronomico'], ['Black Bull Steakhouse', 'Restaurante', 4.7, 2646, 'Av. Cerro Azul, 1033 - Zona 02, Maringá - PR, 87010-000', '+55 44 3122-0247', 'blackbullsteakhouse.com.br', '@blackbullsteakhouse'], ['El Piratas – Restaurante Temático', 'Restaurante', 4.9, 1112, 'Av. Tiradentes, 211 - Centro, Maringá - PR, 87013-260', '+55 44 99135-7072', 'elpiratas.com.br', '@elpiratas.mga'], ['Restaurante Monte Líbano', 'Restaurante libanês', 4.6, 998, 'Av. São Paulo, 1374 - Zona 02, Maringá - PR, 87010-350', '+55 44 3227-2047', 'restaurantemontelibano.com.br', '@restaurantemontelibano'], ['Taberna Portuguesa', 'Restaurante português', 4.5, 640, 'Rua Néo Alves Martins, 520 - Centro, Maringá - PR', '+55 44 3026-1122', 'tabernaportuguesa.com.br', '@tabernamga'], ['Cantina do Vale', 'Restaurante italiano', 4.3, 214, 'Av. Pedro Taques, 890 - Zona 03, Maringá - PR', '+55 44 99822-3140', '', '']].map(r => ({
    n: r[0],
    g: r[1],
    r: r[2],
    rv: r[3],
    ad: r[4],
    ph: r[5],
    site: r[6],
    ig: r[7],
    crm: 0,
    alta: !r[6]
  }));
  const PS = {
    tab: 'todos',
    rat: 0,
    sort: 'rel',
    q: 'Restaurantes',
    crm: {}
  };
  const list = () => {
    let a = CO.filter(c => PS.rat <= c.r && (PS.tab === 'todos' || PS.tab === 'alta' && c.alta || PS.tab === 'site' && !c.site));
    if (PS.sort === 'az') a.sort((x, y) => x.n.localeCompare(y.n));
    if (PS.sort === 'za') a.sort((x, y) => y.n.localeCompare(x.n));
    if (PS.sort === 'av') a.sort((x, y) => y.rv - x.rv);
    return a;
  };
  const card = c => `<div class="card rc" data-c="${CO.indexOf(c)}"><div class="ac"><button class="btn btn-sm btn-ic" data-wa style="color:var(--ok)" title="WhatsApp">${ic('chat', 17)}</button><button class="btn btn-sm btn-ic" data-cp title="Copiar">${ic('copy', 16)}</button></div><h3>${c.n}</h3><div class="m">${pill(c.alta ? 'Alta oportunidade' : 'Baixa oportunidade', c.alta ? 'g' : 'nn')}${dotp('Aberto agora', 'g')}</div><div class="m"><span style="color:var(--acc-t)">${c.g}</span><span>${ic('pin', 15)}Maringá</span><span>${ic('star', 15)}${String(c.r).replace('.', ',')} (${c.rv.toLocaleString('pt-BR')} avaliações)</span></div><div class="m"><span>${ic('pin', 15)}${c.ad}</span></div><div class="m"><span>${ic('phone', 15)}${c.ph}</span>${c.site ? `<span>${ic('globe', 15)}${c.site}</span>` : `<span style="color:var(--am)">${ic('globe', 15)}Sem site</span>`}${c.ig ? `<span>${ic('instagram', 15)}${c.ig}</span>` : ''}</div><div><button class="btn btn-sm" data-crm>${ic(c.crm ? 'check' : 'database', 15)}${c.crm ? 'No CRM' : 'Adicionar ao CRM'}</button></div></div>`;
  const results = () => {
    const a = list();
    return `<div class="res">${a.map(card).join('') || '<div class="empty">Nenhuma empresa com esses filtros.</div>'}</div>`;
  };
  PAGES.prospeccao = () => `<div class="ph"><div><div class="eyebrow">PROSPECÇÃO</div><h1>Encontre empresas em segundos</h1><p>Digite um nicho, escolha o estado e a cidade, e descubra oportunidades.</p></div><button class="btn" data-go="novalista">${ic('filter', 18)}Filtros de qualidade</button></div>
<div class="card pad" style="margin-bottom:24px"><div class="frow" style="padding:0;margin:0;box-shadow:none;background:none;border:0;-webkit-backdrop-filter:none;backdrop-filter:none;align-items:flex-end"><div style="flex:2;min-width:220px"><div class="fg"><label>Nicho de mercado</label><div class="field">${ic('search', 18)}<input id="pn" value="${PS.q}"></div></div></div>${sf('Estado', ['Paraná (PR)', 'São Paulo (SP)', 'Santa Catarina (SC)'])}${sf('Cidade (opcional)', ['MARINGÁ', 'LONDRINA', 'CASCAVEL'])}<button class="btn btn-p" id="pgo" style="height:46px">${ic('search', 18)}Buscar</button></div>
<div class="chips" style="margin-top:16px"><span class="lb" style="margin:0">Sugestões populares:</span>${['Academias', 'Restaurantes', 'Pet shop', 'Clínicas odontológicas', 'Salão de beleza'].map(s => `<button class="chp" data-sg="${s}">${s}</button>`).join('')}</div></div>
<div class="eyebrow">RESULTADOS</div><div id="phd"></div><div class="tabs" id="ptabs" style="margin:14px 0"></div><div class="chips" id="pfil" style="margin-bottom:18px"></div><div id="pres"></div>`;
  const head = () => {
    const a = list();
    $('#phd').innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:4px"><h2 style="font-size:28px;font-weight:800;letter-spacing:-.02em">${a.length} empresas <span style="color:var(--t3)">· ${PS.q} em MARINGÁ, PR</span></h2><button class="btn btn-sm" data-toast="Exportação disponível no plano Pro" data-ti="lock">${ic('download', 16)}Exportar CSV · Pro</button></div>`;
    $('#ptabs').innerHTML = [['todos', 'Todos', CO.length], ['alta', 'Alta oportunidade', CO.filter(c => c.alta).length], ['site', 'Sem site', CO.filter(c => !c.site).length]].map(([k, l, n]) => `<button class="tab ${PS.tab === k ? 'on' : ''}" data-t="${k}">${l} <span style="color:var(--t3)">${n}</span></button>`).join('');
    $('#pfil').innerHTML = `<span class="lb">Avaliação:</span>${[[0, 'Todas'], [4, '4+'], [4.5, '4.5+']].map(([v, l]) => `<button class="chp ${PS.rat === v ? 'on' : ''}" data-r="${v}">${l}</button>`).join('')}<span class="lb">Ordenar:</span>${[['rel', 'Relevância'], ['az', 'A → Z'], ['za', 'Z → A'], ['av', 'Mais avaliadas']].map(([k, l]) => `<button class="chp ${PS.sort === k ? 'on' : ''}" data-o="${k}">${l}</button>`).join('')}`;
    $('#pres').innerHTML = results();
  };
  function ficha(c) {
    const H = [['Segunda', 'Fechado'], ['Terça', '11:30 – 15:00, 18:30 – 00:00'], ['Quarta', '11:30 – 15:00, 18:30 – 00:00'], ['Quinta', '11:30 – 15:00, 18:30 – 00:00'], ['Sexta', '11:00 – 15:00, 18:30 – 00:00'], ['Sábado', '11:30 – 15:00, 18:30 – 00:30'], ['Domingo', '11:30 – 15:00, 18:00 – 23:45']];
    openDrawer(`<div class="dh"><div><span class="eyebrow">FICHA COMPLETA</span><div class="ct" style="font-size:23px;margin-top:6px">${c.n}</div><div class="cs" style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:6px"><span style="color:var(--acc-t)">${c.g}</span><span style="display:inline-flex;gap:5px;align-items:center">${ic('star', 14)}${String(c.r).replace('.', ',')} (${c.rv.toLocaleString('pt-BR')})</span>${dotp('Aberto agora', 'g')}</div></div><button class="btn btn-ic btn-sm" data-close>${ic('x', 18)}</button></div>
<div class="db"><div style="margin:4px 0 12px">${pill(c.alta ? 'Alta oportunidade' : 'Baixa oportunidade', c.alta ? 'g' : 'nn')} <span class="cs" style="margin-left:8px">SCORE ${c.alta ? 72 : 0}</span></div>
<div class="opt">${tile('phone', 'bl', 18, 's')}<div><small>TELEFONE</small><b>${c.ph}</b></div></div><div class="opt">${tile('globe', c.site ? 'bl' : 'am', 18, 's')}<div><small>SITE</small><b>${c.site || 'Sem site'}</b></div></div>${c.ig ? `<div class="opt">${tile('instagram', 'pu', 18, 's')}<div><small>INSTAGRAM</small><b>${c.ig}</b></div></div>` : ''}
<div class="sec2">Endereço</div><div style="display:flex;gap:10px;align-items:center">${ic('pin', 18)}${c.ad}</div><div class="sec2">Horário de funcionamento</div><div class="hrs">${H.map(h => `<div><span>${h[0]}</span>${h[1] === 'Fechado' ? pill('Fechado', 'nn') : pill(h[1], 'g')}</div>`).join('')}</div>
<div class="note" style="margin-top:16px">${ic('info', 18)}<span>${c.alta ? 'Negócio sem site próprio: boa oportunidade para oferecer presença digital.' : 'Negócio com presença digital sólida: menor potencial de prospecção fria.'}</span></div>
<div class="card sm" style="padding:16px;margin-top:16px"><span class="eyebrow">ASSISTENTE DE ABERTURA</span><div class="ct" style="font-size:16px;margin:2px 0 12px">Gerar mensagem de abertura com IA</div><button class="btn btn-p" style="width:100%" id="gm">${ic('sparkles', 18)}Gerar mensagem</button><div id="gmo"></div></div></div>
<div class="df"><button class="btn btn-p" id="mp">${ic('check', 16, 2.4)}Marcar como prospectado</button></div>`);
    $('#gm').onclick = () => {
      $('#gmo').innerHTML = `<div class="msg" style="margin-top:12px">Olá, tudo bem? Vi o ${c.n} no Google (${String(c.r).replace('.', ',')} estrelas e ${c.rv.toLocaleString('pt-BR')} avaliações) e percebi ${c.site ? 'que vocês já têm uma boa base de clientes' : 'que vocês ainda não têm um site próprio'}. Trabalho ajudando negócios de ${c.g.toLowerCase()} a gerar mais pedidos. Posso te mostrar uma ideia rápida?</div>`;
    };
    $('#mp').onclick = () => {
      closeDrawer();
      toast('Marcado como prospectado');
    };
  }
  INIT.prospeccao = v => {
    head();
    const click = e => {
      const t = e.target.closest('[data-t]');
      if (t) {
        PS.tab = t.dataset.t;
        return head();
      }
      const r = e.target.closest('[data-r]');
      if (r) {
        PS.rat = +r.dataset.r;
        return head();
      }
      const o = e.target.closest('[data-o]');
      if (o) {
        PS.sort = o.dataset.o;
        return head();
      }
      const sg = e.target.closest('[data-sg]');
      if (sg) {
        PS.q = sg.dataset.sg;
        $('#pn').value = PS.q;
        return head();
      }
      const cb = e.target.closest('[data-crm]');
      if (cb) {
        const c = CO[cb.closest('.rc').dataset.c];
        c.crm = c.crm ? 0 : 1;
        head();
        return toast(c.crm ? 'Adicionado ao CRM' : 'Removido do CRM', 'database');
      }
      if (e.target.closest('[data-wa]')) return toast('Abrindo WhatsApp', 'chat');
      if (e.target.closest('[data-cp]')) return toast('Dados copiados', 'copy');
      const rc = e.target.closest('.rc');
      if (rc) ficha(CO[rc.dataset.c]);
    };
    v.addEventListener('click', click);
    $('#pgo').onclick = () => {
      PS.q = $('#pn').value || 'Empresas';
      head();
      toast('Busca atualizada', 'search');
    };
  };
  const QF = [['contab', 'Excluir números de escritório contábil', 1, 1, 'Ligado: a lista esconde números de escritório contábil. Desligado: eles aparecem com a tag Contabilidade.', 18], ['matriz', 'Só matriz', 1, 0, 'Sede da empresa, não filial.', 22], ['free', 'Ocultar e-mails de provedor gratuito', 0, 0, 'Gmail, Hotmail e outros provedores pessoais.', 14], ['fisc', 'Excluir endereços de escritório fiscal', 0, 0, 'O mesmo endereço em várias empresas costuma ser da contabilidade, não da loja.', 9], ['qual', 'Só empresas já qualificadas', 0, 0, 'Lista só quem já passou pela qualificação. Desligado por padrão.', 31]];
  const MF = [['simples', 'Excluir optantes do Simples', 'Regime Simples Nacional.', 12], ['dom', 'Exigir e-mail de domínio próprio', 'E-mail no domínio da empresa, não Gmail ou Hotmail.', 20], ['dec', 'Exigir decisor identificado', 'Sócio que pode decidir (quadro de sócios).', 8]];
  const NL = {
    on: {
      contab: 1
    },
    open: true,
    porte: '',
    anos: 'Qualquer'
  };
  const cnt = () => {
    let n = 112;
    QF.forEach(q => NL.on[q[0]] && (n -= q[5]));
    MF.forEach(m => NL.on[m[0]] && (n -= m[3]));
    if (NL.porte) n -= 20;
    if (NL.anos !== 'Qualquer') n -= NL.anos === '3 anos' ? 6 : NL.anos === '5 anos' ? 12 : 20;
    return Math.max(5, n);
  };
  const sw = k => `<button class="sw ${NL.on[k] ? 'on' : ''}" data-k="${k}" aria-label="${k}"></button>`;
  PAGES.novalista = () => `<div class="ph"><div><a data-go="prospeccao" style="display:inline-flex;gap:6px;align-items:center;margin-bottom:10px">${ic('arrowL', 16)}Voltar à região</a><h1>Nova lista</h1><p>Refine a busca antes de gerar a lista.</p></div></div>
<div class="chips" style="margin-bottom:14px">${['1 Nicho', '2 Região', '3 Qualidade'].map(s => `<span class="step">${s}</span>`).join('')}<span class="chp on" style="cursor:default">Pizzarias</span><span class="chp" style="cursor:default">PR · MARINGÁ</span>${pill('Sem telefone de contabilidade', 'g')}</div>
<div class="nego nl"><div><div class="card pad" style="margin-bottom:20px"><div class="chead">${tile('shield', 'ac', 22, 's')}<div><div class="ct">Qualidade do contato</div></div></div>${QF.map(q => `<div class="sq"><div><b>${q[1]}${q[2] ? `<span class="rec">RECOMENDADO</span>` : ''}</b><small>${q[4]}</small></div>${sw(q[0])}</div>`).join('')}</div>
<div class="card pad" style="margin-bottom:20px"><button class="chead" id="mf" style="width:100%;background:none;border:0;margin:0;text-align:left;color:inherit"><div class="ct" style="flex:1">Mais filtros</div><span id="mfc" style="transition:transform .3s">${ic('chevD', 20)}</span></button><div id="mfb"><div class="sec2" style="margin-top:14px">Porte</div><div class="chips">${['ME · micro', 'EPP · pequeno porte', 'Demais'].map(x => `<button class="chp ${NL.porte === x ? 'on' : ''}" data-p="${x}">${x}</button>`).join('')}</div><div class="sec2">Empresa aberta há mais de</div><div class="chips">${['Qualquer', '3 anos', '5 anos', '10 anos'].map(x => `<button class="chp ${NL.anos === x ? 'on' : ''}" data-a="${x}">${x === 'Qualquer' ? ic('check', 14, 2.6) : ''}${x}</button>`).join('')}</div><div style="margin-top:14px">${MF.map(q => `<div class="sq"><div><b>${q[1]}</b><small>${q[2]}</small></div>${sw(q[0])}</div>`).join('')}</div></div></div>
<button class="btn btn-p" style="width:100%;height:50px" id="vr">Ver resultados</button></div>
<div class="card pad sticky" style="align-self:start"><div class="ch">Empresas nesta busca</div><div class="big" id="nc" style="margin:8px 0 16px">66</div><div class="ch" style="color:var(--tx)">Onde concentra</div><div class="rows" style="margin-top:10px"><div><small>MARINGÁ - PR</small><b id="nc2">66</b></div></div>${bar(100)}<div class="cs" style="margin-top:14px;line-height:1.9" id="nst2"></div></div></div>`;
  INIT.novalista = v => {
    const upd = () => {
      const n = cnt();
      $('#nc').textContent = n;
      $('#nc2').textContent = n;
      $('#nst2').innerHTML = `Com telefone: ${n}<br>Com e-mail: ${Math.round(n * .77)}<br>Com decisor: ${Math.round(n * .94)}`;
      $('#vr').textContent = 'Ver resultados (' + n + ')';
    };
    upd();
    v.addEventListener('click', e => {
      const k = e.target.closest('[data-k]');
      if (k) {
        NL.on[k.dataset.k] = !NL.on[k.dataset.k];
        k.classList.toggle('on');
        return upd();
      }
      const p = e.target.closest('[data-p]');
      if (p) {
        NL.porte = NL.porte === p.dataset.p ? '' : p.dataset.p;
        $$('[data-p]', v).forEach(b => b.classList.toggle('on', b.dataset.p === NL.porte));
        return upd();
      }
      const a = e.target.closest('[data-a]');
      if (a) {
        NL.anos = a.dataset.a;
        $$('[data-a]', v).forEach(b => b.classList.toggle('on', b.dataset.a === NL.anos));
        return upd();
      }
      if (e.target.closest('#mf')) {
        NL.open = !NL.open;
        $('#mfb').hidden = !NL.open;
        $('#mfc').style.transform = NL.open ? '' : 'rotate(-90deg)';
      }
      if (e.target.closest('#vr')) {
        toast('Lista gerada com ' + cnt() + ' empresas', 'list');
        go('listas');
      }
    });
  };
  const NEG = {
    h: [{
      t: 'Ligar',
      x: 'Ligação feita',
      d: '22/09'
    }, {
      t: 'Ligar',
      x: 'Ligação feita',
      d: '21/09'
    }],
    tab: 'Ligar',
    stage: null,
    state: 1,
    calling: false
  };
  const TABS = [['Nota', 'file'], ['Ligar', 'phone'], ['WhatsApp', 'chat'], ['Follow-up', 'repeat'], ['Reunião', 'calendar'], ['Proposta', 'file'], ['E-mail', 'mail']];
  const ICM = {
    Nota: 'file',
    Ligar: 'phone',
    WhatsApp: 'chat',
    'Follow-up': 'repeat',
    'Reunião': 'calendar',
    Proposta: 'file',
    'E-mail': 'mail'
  };
  const hist = () => NEG.h.map(h => `<div class="hl">${ic(ICM[h.t] || 'phone', 18)}<div><b>${h.x}</b>${h.n ? `<small>${h.n}</small>` : ''}</div><span class="dt">${h.d}</span></div>`).join('');
  PAGES.negocio = () => {
    const d = DEAL(),
      st = PIPE().map(k => k.n);
    if (NEG.stage === null || NEG.deal !== d.n) {
      NEG.stage = Math.max(0, st.indexOf(d.st));
      NEG.deal = d.n;
    }
    return `<div class="ph"><div><a data-go="pipeline" style="display:inline-flex;gap:6px;align-items:center;margin-bottom:10px">${ic('arrowL', 16)}Voltar ao pipeline</a><h1 style="font-size:30px">${d.n}</h1><p>${d.s} · Maringá - PR</p></div><div class="seg" id="nstt">${['Perdido', 'Em andamento', 'Ganho'].map((x, i) => `<button data-s="${i}" class="${NEG.state === i ? 'on' : ''}">${x}</button>`).join('')}</div></div>
<div class="card pad" style="margin-bottom:20px"><div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap"><span class="btn btn-sm" style="cursor:default">${ic('phone', 16)}(44) 3122-0247</span><b>JULIANA ALVES</b><button class="btn btn-p btn-sm" id="cb">${ic('phone', 16)}<span>Ligar</span></button><span class="pill k-ac" id="ctimer" hidden></span><button class="btn btn-sm" data-toast="Abrindo WhatsApp" data-ti="chat">${ic('chat', 16)}WhatsApp</button><span class="sp"></span><span style="color:var(--t3);display:flex;gap:12px">${ic('globe', 18)}${ic('instagram', 18)}${ic('chat', 18)}${ic('pin', 18)}</span></div><div class="path" id="npath">${st.map((n, i) => `<button class="${i === NEG.stage ? 'on' : i < NEG.stage ? 'past' : ''}" data-i="${i}">${n}</button>`).join('')}</div></div>
<div class="nego"><div><div class="card" style="padding:0;overflow:hidden"><div class="tabs" id="ntabs" style="margin:14px;display:flex">${TABS.map(([t, i]) => `<button class="tab ${NEG.tab === t ? 'on' : ''}" data-t="${t}">${ic(i, 16)}${t}</button>`).join('')}</div><div style="padding:0 18px 18px"><textarea class="ta" id="nt" placeholder="O que considerar nesta ação?"></textarea><div style="display:flex;gap:14px;align-items:flex-end;margin-top:14px;flex-wrap:wrap"><div class="fg"><label>PRAZO</label><div class="field">${ic('calendar', 17)}<input id="np" value="22/09/2026"></div></div><div class="fg"><label>HORÁRIO</label><div class="field"><input id="nh" value="10:00"></div></div><span class="sp"></span><button class="btn btn-p" id="ns">Salvar</button></div></div></div>
<div class="sec2">Próximas ações</div><div class="hl">${ic('calendar', 18)}<div><b>${d.a}</b><small>Responsável: ${d.o}</small></div></div><div class="sec2">Histórico</div><div id="nh2">${hist()}</div></div>
<div style="display:flex;flex-direction:column;gap:16px"><div class="card pad"><span class="eyebrow">VALOR</span><div class="field" style="margin-top:8px"><input id="nv" value="R$ ${d.v.toLocaleString('pt-BR')},00" style="font-weight:800;font-size:20px"></div></div><div class="card pad"><span class="eyebrow">TELEFONE DA EMPRESA</span><div class="rows" style="margin-top:10px"><div><b>(44) 3122-0247</b><small>Site</small></div></div></div><div class="card pad"><span class="eyebrow">PESSOAS</span><div class="rows" style="margin-top:10px"><div><small>Juliana Alves</small><b style="font-size:13px">Decisora</b></div><div><small>Marcos</small><b style="font-size:13px">Secretário</b></div></div></div></div></div>`;
  };
  INIT.negocio = v => {
    clearInterval(window._ct);
    NEG.calling = false;
    let sec = 0;
    v.addEventListener('click', e => {
      const t = e.target.closest('#ntabs .tab');
      if (t) {
        NEG.tab = t.dataset.t;
        $$('#ntabs .tab').forEach(x => x.classList.toggle('on', x === t));
      }
      const s = e.target.closest('#nstt [data-s]');
      if (s) {
        NEG.state = +s.dataset.s;
        $$('#nstt button').forEach(x => x.classList.toggle('on', x === s));
        toast(['Negócio marcado como perdido', 'Negócio em andamento', 'Negócio ganho'][NEG.state], NEG.state === 2 ? 'trophy' : 'check');
      }
      const p = e.target.closest('#npath [data-i]');
      if (p) {
        NEG.stage = +p.dataset.i;
        $$('#npath button').forEach((b, i) => {
          b.className = i === NEG.stage ? 'on' : i < NEG.stage ? 'past' : '';
        });
        toast('Etapa: ' + p.textContent, 'pipeline');
      }
      if (e.target.closest('#ns')) {
        NEG.h.unshift({
          t: NEG.tab,
          x: NEG.tab === 'Nota' ? 'Nota registrada' : NEG.tab + ' agendado',
          n: $('#nt').value,
          d: $('#np').value.slice(0, 5)
        });
        $('#nh2').innerHTML = hist();
        $('#nt').value = '';
        toast('Registrado no histórico');
      }
      if (e.target.closest('#cb')) {
        const b = $('#cb'),
          tm = $('#ctimer');
        NEG.calling = !NEG.calling;
        if (NEG.calling) {
          sec = 0;
          tm.hidden = false;
          tm.textContent = '00:00';
          b.innerHTML = ic('phoneOff', 16) + '<span>Desligar</span>';
          window._ct = setInterval(() => {
            if (!$('#ctimer')) return clearInterval(window._ct);
            sec++;
            tm.textContent = String(Math.floor(sec / 60)).padStart(2, '0') + ':' + String(sec % 60).padStart(2, '0');
          }, 1000);
        } else {
          clearInterval(window._ct);
          b.innerHTML = ic('phone', 16) + '<span>Ligar</span>';
          tm.hidden = true;
          NEG.h.unshift({
            t: 'Ligar',
            x: 'Ligação feita',
            n: 'Duração ' + tm.textContent,
            d: 'hoje'
          });
          $('#nh2').innerHTML = hist();
          toast('Ligação registrada', 'phone');
        }
      }
    });
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "salesos/pages4.js", error: String((e && e.message) || e) }); }

// salesos/pages5.js
try { (() => {
(() => {
  const SQ = [{
    n: 'Prospecção Multicanal (Padrão)',
    s: [['WhatsApp', 0], ['E-mail', 2], ['LinkedIn', 2]]
  }];
  const CHI = {
    'WhatsApp': ['chat', 'g'],
    'E-mail': ['mail', 'bl'],
    'LinkedIn': ['linkedin', 'pu']
  };
  let DR = [{
    ch: 'WhatsApp',
    d: 0,
    sub: '',
    tx: ''
  }];
  const step = (s, i) => `<div class="it" data-i="${i}"><div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">${tile('layers', 'ac', 18, 's')}<b style="flex:1">ETAPA ${i + 1}</b><button class="btn btn-sm btn-ic btn-d" data-rm="${i}" aria-label="Remover etapa">${ic('trash', 16)}</button></div><div class="fr">${sf('Canal de contato', ['WhatsApp', 'E-mail', 'LinkedIn'])}<div class="fg"><label>Atraso (dias)</label><div class="field"><input type="number" min="0" data-f="d" value="${s.d}"></div></div></div>${s.ch === 'E-mail' ? `<div class="fg" style="margin-top:12px"><label>Assunto do e-mail</label><div class="field"><input data-f="sub" value="${s.sub}" placeholder="Ex.: dúvida rápida sobre o Google da [Empresa]"></div></div>` : ''}<div class="fg" style="margin-top:12px"><label>Texto do script (opcional)</label><textarea class="ta" data-f="tx" placeholder="Se deixar vazio, a IA gera um gancho contextualizado dinamicamente...">${s.tx}</textarea></div></div>`;
  const bld = () => {
    $('#sqb').innerHTML = DR.map(step).join('');
    $$('#sqb .sf select').forEach((s, i) => s.value = DR[i].ch);
  };
  const saved = () => SQ.map((q, k) => `<div class="card pad sm" style="margin-bottom:14px"><div class="chead" style="margin-bottom:12px"><div><div class="ct" style="font-size:17px">${q.n}</div><div class="cs">${q.s.length} passos configurados</div></div><button class="btn btn-sm btn-ic" data-toast="Editando sequência" data-ti="pencil">${ic('pencil', 16)}</button><button class="btn btn-sm btn-ic btn-d" data-del="${k}">${ic('trash', 16)}</button></div><div class="chips">${q.s.map((s, i) => pill(`Passo ${i + 1} (${s[1]}d)`, CHI[s[0]][1], CHI[s[0]][0])).join('')}</div></div>`).join('') || '<div class="empty">Nenhuma sequência salva.</div>';
  PAGES.sequencias = () => `<div class="ph"><div><h1>Sequências de prospecção</h1><p>Monte cadências de contato com atraso entre os passos. As sequências salvas aparecem no Pipeline e na Execução.</p></div></div>
<div class="g2 g2s"><div class="card pad"><div class="chead">${tile('repeat', 'ac', 22, 's')}<div><div class="ct">Criar nova sequência</div></div></div><div class="fg"><label>Nome da sequência</label><div class="field"><input id="sqn" placeholder="Ex.: Prospecção fria – Clínicas"></div></div><div class="sec2">Passos da sequência</div><div class="sqs" id="sqb"></div><div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px"><button class="btn" id="sadd">${ic('plus', 18, 2.2)}Adicionar passo</button><button class="btn btn-p" id="ssv">${ic('save', 18)}Salvar sequência</button></div></div>
<div><div class="sec2" style="margin-top:0">Suas sequências salvas</div><div id="sqs">${saved()}</div></div></div>`;
  INIT.sequencias = v => {
    DR = [{
      ch: 'WhatsApp',
      d: 0,
      sub: '',
      tx: ''
    }];
    bld();
    v.addEventListener('input', e => {
      const f = e.target.dataset.f;
      if (f) {
        const i = +e.target.closest('.it').dataset.i;
        DR[i][f] = f === 'd' ? +e.target.value : e.target.value;
      }
    });
    v.addEventListener('change', e => {
      if (e.target.matches('.sf select')) {
        const i = +e.target.closest('.it').dataset.i;
        DR[i].ch = e.target.value;
        bld();
      }
    });
    v.addEventListener('click', e => {
      if (e.target.closest('#sadd')) {
        DR.push({
          ch: 'E-mail',
          d: 2,
          sub: '',
          tx: ''
        });
        bld();
        return;
      }
      const r = e.target.closest('[data-rm]');
      if (r) {
        if (DR.length > 1) {
          DR.splice(+r.dataset.rm, 1);
          bld();
        } else toast('A sequência precisa de ao menos um passo', 'info');
        return;
      }
      const d = e.target.closest('[data-del]');
      if (d) {
        SQ.splice(+d.dataset.del, 1);
        $('#sqs').innerHTML = saved();
        toast('Sequência excluída', 'trash');
        return;
      }
      if (e.target.closest('#ssv')) {
        SQ.push({
          n: $('#sqn').value || 'Nova sequência',
          s: DR.map(s => [s.ch, s.d])
        });
        $('#sqs').innerHTML = saved();
        $('#sqn').value = '';
        DR = [{
          ch: 'WhatsApp',
          d: 0,
          sub: '',
          tx: ''
        }];
        bld();
        toast('Sequência salva', 'check');
      }
    });
  };
  const RT = {
      BRL: 1,
      USD: 5.2143,
      EUR: 5.9298,
      GBP: 6.9144
    },
    fm = (v, c) => v.toLocaleString('pt-BR', {
      style: 'currency',
      currency: c
    });
  let CL = [{
    n: 'Pedro',
    st: 'Em andamento',
    ds: 'Projeto de tráfego pago',
    wa: '44997171553',
    loc: 'Maringá / PR',
    cur: 'USD',
    val: 100,
    rec: 'Mensal',
    dia: 28,
    ini: '18/09/2026',
    org: 'Prospectei pela plataforma'
  }];
  let CF = 'Todos',
    CQ = '';
  const STS = ['Prospect', 'Em andamento', 'Ativo', 'Finalizado', 'Cancelado'],
    STC = {
      Prospect: 'bl',
      'Em andamento': 'am',
      Ativo: 'g',
      Finalizado: 'nn',
      Cancelado: 'rd'
    };
  const clsum = () => {
    const at = CL.filter(c => c.st === 'Ativo');
    return {
      n: at.length,
      m: at.filter(c => c.rec === 'Mensal').reduce((a, c) => a + c.val * RT[c.cur], 0),
      u: at.filter(c => c.rec !== 'Mensal').reduce((a, c) => a + c.val * RT[c.cur], 0)
    };
  };
  const clcard = (c, i) => `<div class="card cl"><div class="top">${av(c.n)}<b>${c.n}</b>${pill(c.st, STC[c.st])}<span class="sp"></span><button class="btn btn-sm btn-ic" style="color:var(--ok)" data-toast="Abrindo WhatsApp" data-ti="chat">${ic('chat', 16)}</button><button class="btn btn-sm btn-ic" data-ed="${i}">${ic('pencil', 16)}</button><button class="btn btn-sm btn-ic btn-d" data-dl="${i}">${ic('trash', 16)}</button></div><div class="cs">${c.ds}</div><div class="m" style="display:flex;gap:14px;flex-wrap:wrap;color:var(--t2);font-size:13px"><span style="display:inline-flex;gap:6px;align-items:center">${ic('chat', 14)}${c.wa}</span><span style="display:inline-flex;gap:6px;align-items:center">${ic('pin', 14)}${c.loc}</span></div><div style="border-top:1px solid var(--ln);padding-top:12px;display:flex;justify-content:space-between;align-items:flex-end;gap:10px"><div><small style="color:var(--t3);font-weight:700;letter-spacing:.08em">${c.rec === 'Mensal' ? 'MENSALIDADE' : 'VALOR ÚNICO'}</small><div style="font-size:22px;font-weight:800">${fm(c.val, c.cur)} ${c.cur !== 'BRL' ? `<span style="font-size:13px;color:var(--t3);font-weight:600">(${fm(c.val * RT[c.cur], 'BRL')})</span>` : ''}</div></div><div style="text-align:right;font-size:12px;color:var(--t2)"><div>Próxima: ${c.dia}/${c.ini.slice(3)}</div><div style="color:var(--t3)">Início: ${c.ini}</div></div></div></div>`;
  const clbody = () => {
    const s = clsum(),
      a = CL.filter(c => (CF === 'Todos' || c.st === CF) && c.n.toLowerCase().includes(CQ));
    $('#clk').innerHTML = `${kpi('users', 'bl', 'Clientes ativos', s.n)}${kpi('trend', 'g', 'Receita mensal (BRL)', fm(s.m, 'BRL'))}${kpi('dollar', 'pu', 'Receita única (BRL)', fm(s.u, 'BRL'))}<div class="card kpi" style="align-items:flex-start">${tile('refresh', 'ac')}<div class="kb" style="flex:1"><span class="kl">Cotação do dia</span>${['USD', 'EUR', 'GBP'].map(c => `<div style="display:flex;justify-content:space-between;font-weight:600"><span class="ks">1 ${c}</span><span>${fm(RT[c], 'BRL').replace(',', ',')}</span></div>`).join('')}</div></div>`;
    $('#clt').innerHTML = ['Todos', ...STS].map(t => `<button class="tab ${CF === t ? 'on' : ''}" data-f="${t}">${t} <span style="color:var(--t3)">${t === 'Todos' ? CL.length : CL.filter(c => c.st === t).length}</span></button>`).join('');
    $('#cll').innerHTML = a.length ? `<div class="cx">${a.map(c => clcard(c, CL.indexOf(c))).join('')}</div>` : '<div class="card pad empty">Nenhum cliente cadastrado ainda. Clique em Adicionar cliente para começar.</div>';
    $('#clq').textContent = `Plano gratuito: ${CL.length}/5 clientes.`;
  };
  PAGES.clientes = () => `<div class="ph"><div><div class="eyebrow">FINANCEIRO</div><h1>Clientes</h1><p>Gerencie seus clientes e acompanhe a receita convertida para BRL.</p></div><button class="btn btn-p" id="cadd">${ic('plus', 18, 2.2)}Adicionar cliente</button></div>
<div class="g4" id="clk"></div><div class="card" style="padding:12px 18px;margin-bottom:18px;display:flex;align-items:center;gap:12px"><span class="cs" id="clq" style="flex:1"></span><button class="btn btn-p btn-sm" data-toast="Plano Pro em breve" data-ti="sparkles">${ic('sparkles', 15)}Upgrade Pro</button></div>
<div class="tabs" id="clt" style="margin-bottom:14px"></div><div class="field" style="margin-bottom:18px">${ic('search', 18)}<input id="clsq" placeholder="Buscar cliente por nome..."></div><div id="cll"></div>`;
  function cform(i, pre) {
    const c = pre || (i >= 0 ? CL[i] : {
      n: '',
      org: 'Prospectei pela plataforma',
      val: '',
      cur: 'BRL',
      rec: 'Mensal',
      dia: 5,
      st: 'Prospect',
      ds: '',
      loc: 'Maringá / PR',
      wa: '',
      ini: '01/10/2026'
    });
    openDrawer(`<div class="dh"><div>${tile('users', 'g', 24, 'l')}<div class="ct" style="margin-top:16px;font-size:22px">${i >= 0 ? 'Editar cliente' : 'Adicionar cliente'}</div><div class="cs">Passo 1 de 2</div></div><button class="btn btn-ic btn-sm" data-close>${ic('x', 18)}</button></div><div class="db"><div class="frm"><div><label>Nome</label><div class="field"><input id="cfn" value="${c.n}"></div></div><div class="two"><div><label>Valor</label><div class="field"><input id="cfv" type="number" value="${c.val}"></div></div>${sf('Moeda', ['BRL', 'USD', 'EUR', 'GBP'], 'cfc')}</div><div class="two">${sf('Cobrança', ['Mensal', 'Única'], 'cfr')}<div><label>Dia de cobrança</label><div class="field"><input id="cfd" type="number" min="1" max="31" value="${c.dia}"></div></div></div>${sf('Status', STS, 'cfs')}<div><label>Descrição</label><div class="field"><input id="cfx" value="${c.ds}"></div></div><div class="two"><div><label>Localização</label><div class="field"><input id="cfl" value="${c.loc}"></div></div><div><label>WhatsApp</label><div class="field"><input id="cfw" value="${c.wa}"></div></div></div></div></div><div class="df"><button class="btn" data-close>Cancelar</button><button class="btn btn-p" id="cfn2">Revisar</button></div>`);
    $('#cfc').value = c.cur;
    $('#cfr').value = c.rec;
    $('#cfs').value = c.st;
    $('#cfn2').onclick = () => {
      const n = {
        ...c,
        n: $('#cfn').value || 'Sem nome',
        val: +$('#cfv').value || 0,
        cur: $('#cfc').value,
        rec: $('#cfr').value,
        dia: +$('#cfd').value || 1,
        st: $('#cfs').value,
        ds: $('#cfx').value || '—',
        loc: $('#cfl').value,
        wa: $('#cfw').value
      };
      const rows = [['Nome', n.n], ['Origem', n.org], ['Valor', fm(n.val, n.cur) + ' · ' + n.rec], ['Dia de cobrança', 'Dia ' + n.dia], ['Status', n.st], ['Descrição', n.ds], ['Localização', n.loc], ['WhatsApp', n.wa || '—']];
      openDrawer(`<div class="dh"><div>${tile('check', 'g', 24, 'l')}<div class="ct" style="margin-top:16px;font-size:22px">Tudo certo?</div><div class="cs">Confira os dados antes de salvar. Nada é gravado até você confirmar.</div></div><button class="btn btn-ic btn-sm" data-close>${ic('x', 18)}</button></div><div class="db"><div class="hrs">${rows.map(r => `<div><span style="color:var(--t3);font-weight:600;font-size:12px;letter-spacing:.06em;text-transform:uppercase">${r[0]}</span><b>${r[1]}</b></div>`).join('')}</div></div><div class="df"><button class="btn" id="cfb">${ic('arrowL', 16)}Voltar</button><button class="btn btn-p" id="cfs2">${ic('check', 16, 2.4)}Salvar alterações</button></div>`);
      $('#cfb').onclick = () => cform(i, n);
      $('#cfs2').onclick = () => {
        if (i >= 0) CL[i] = n;else CL.push(n);
        closeDrawer();
        clbody();
        toast('Cliente salvo');
      };
    };
  }
  INIT.clientes = v => {
    clbody();
    $('#cadd').onclick = () => cform(-1);
    $('#clsq').oninput = e => {
      CQ = e.target.value.toLowerCase();
      clbody();
    };
    v.addEventListener('click', e => {
      const f = e.target.closest('#clt [data-f]');
      if (f) {
        CF = f.dataset.f;
        return clbody();
      }
      const ed = e.target.closest('[data-ed]');
      if (ed) return cform(+ed.dataset.ed);
      const dl = e.target.closest('[data-dl]');
      if (dl) {
        CL.splice(+dl.dataset.dl, 1);
        clbody();
        toast('Cliente excluído', 'trash');
      }
    });
  };
  const CC = {
    fat: 180000,
    tk: 15000,
    pz: 2
  };
  const calc = () => {
    const ct = Math.ceil(CC.fat / CC.tk),
      ng = Math.ceil(ct / .4),
      r2 = Math.ceil(ng / .4),
      r1 = Math.ceil(r2 / .6),
      ag = Math.ceil(r1 / .5),
      dc = Math.ceil(ag / .25),
      lg = Math.ceil(dc / .8),
      dia = Math.ceil(lg / (CC.pz * 22));
    return {
      st: [['Contratos', ct, 'meta'], ['Negociações', ng, '40% → contratos'], ['2ª reunião', r2, '40% → negociação'], ['1ª reunião', r1, '60% → 2ª reunião'], ['Agendadas', ag, '50% → 1ª reunião'], ['Decisor no telefone', dc, '25% → agendamento'], ['Ligações', lg, '80% → decisor']],
      dia
    };
  };
  const calcH = () => {
    const c = calc();
    return `<div class="cvt">${c.st.map((s, i) => `<div class="${i === 0 ? 'hi' : ''}"><small>${s[0].toUpperCase()}</small><b>${s[1].toLocaleString('pt-BR')}</b><em>${s[2]}</em></div>`).join('')}<div class="hi"><small>LIGAÇÕES POR DIA</small><b style="color:var(--acc-t)">${c.dia}</b><em>${CC.pz * 22} dias úteis</em></div></div>`;
  };
  const _m = PAGES.metas;
  PAGES.metas = () => _m() + `<div class="card pad" style="margin-top:20px"><div class="chead">${tile('funnel', 'ac')}<div><div class="ct">Do contrato ao contato</div><div class="cs">Informe a meta e veja quantas ligações por dia são necessárias, usando as taxas de conversão do funil.</div></div><button class="btn btn-p" data-toast="Meta criada a partir da calculadora" data-ti="target">${ic('target', 18)}Salvar meta</button></div><div class="fgrid"><div class="fg"><label>Meta de faturamento no período</label><div class="field"><input type="number" data-cc="fat" value="${CC.fat}"></div></div><div class="fg"><label>Ticket médio do contrato</label><div class="field"><input type="number" data-cc="tk" value="${CC.tk}"></div></div><div class="fg"><label>Prazo para bater a meta (meses)</label><div class="field"><input type="number" min="1" data-cc="pz" value="${CC.pz}"></div></div></div><div id="cvo">${calcH()}</div></div>`;
  const _mi = INIT.metas;
  INIT.metas = v => {
    _mi(v);
    v.addEventListener('input', e => {
      const k = e.target.dataset.cc;
      if (k) {
        CC[k] = Math.max(1, +e.target.value || 1);
        $('#cvo').innerHTML = calcH();
      }
    });
  };
  let CALLS = 0;
  const GOAL = 20,
    RIT = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const work = () => {
    const done = CALLS >= GOAL,
      days = RIT.filter(Boolean).length + (done ? 1 : 0);
    return `<div class="g2" id="wk"><div class="card pad"><div style="display:flex;gap:22px;align-items:center;flex-wrap:wrap">${ring(Math.min(100, Math.round(CALLS / GOAL * 100)), 128, 13, 'hoje').replace(/<b>\d+%<\/b>/, `<b>${CALLS}/${GOAL}</b>`)}<div style="flex:1;min-width:200px"><span class="eyebrow">TRABALHO DO DIA</span><div class="ct" style="font-size:24px;margin:2px 0 10px">${done ? 'Meta de ligações batida.' : `Faltam ${GOAL - CALLS} ligações hoje.`}</div>${pill(days + ' dias de sequência', 'am', 'flame')}<div style="margin-top:14px"><button class="btn btn-p" id="lgn">${ic('phone', 18)}Ligar agora</button></div></div></div></div><div class="card pad"><div class="ch">${ic('bars', 18)}Ritmo · ligações · 14 dias</div><div class="cs" style="margin-top:4px">Cor cheia = meta batida naquele dia.</div><div class="rit">${RIT.map(x => `<i class="${x ? 'on' : ''}"></i>`).join('')}<i class="td ${done ? 'on' : ''}"></i></div><div style="display:flex;justify-content:space-between;color:var(--t3);font-size:12px"><span>14/09 → 27/09</span><b style="color:var(--tx)">${days}/14 dias na meta</b></div></div></div>`;
  };
  const _e = PAGES.execucao;
  PAGES.execucao = () => _e().replace('<div id="todayw">', work() + '<div style="height:20px"></div><div id="todayw">');
  const _ei = INIT.execucao;
  INIT.execucao = v => {
    _ei(v);
    v.addEventListener('click', e => {
      if (e.target.closest('#lgn')) {
        CALLS++;
        $('#wk').outerHTML = work();
        if (CALLS === GOAL) toast('Meta de ligações do dia batida', 'trophy');
      }
    });
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "salesos/pages5.js", error: String((e && e.message) || e) }); }

// salesos/ui.js
try { (() => {
(() => {
  const $ = (s, r = document) => r.querySelector(s),
    $$ = (s, r = document) => [...r.querySelectorAll(s)];
  Object.assign(window, {
    $,
    $$,
    PAGES: {},
    INIT: {}
  });
  const COLS = ['g', 'bl', 'pu', 'am', 'rd'];
  window.col = n => COLS[[...n].reduce((a, c) => a + c.charCodeAt(0), 0) % 5];
  window.ini = n => n.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
  window.av = (n, c, x = '') => `<span class="av ${x} k-${c || col(n)}">${ini(n)}</span>`;
  window.tile = (i, c = 'ac', s = 22, x = '') => `<span class="tile ${x} k-${c}">${ic(i, s)}</span>`;
  window.pill = (t, c = 'nn', i) => `<span class="pill k-${c}">${i ? ic(i, 13, 2) : ''}${t}</span>`;
  window.dotp = (t, c) => `<span class="k-${c}" style="display:inline-flex;align-items:center;gap:8px;color:var(--t2)"><i class="dot"></i>${t}</span>`;
  window.bar = (p, s = '') => `<div class="bar ${s}"><i style="--w:${p}%"></i></div>`;
  window.kpi = (i, c, l, v, p, s, pc = 'g') => `<div class="card kpi">${tile(i, c)}<div class="kb"><span class="kl">${l}</span><div class="kv"><b>${v}</b>${p ? `<span class="pill k-${pc}">${pc === 'g' && /^\+/.test(p) ? ic('arrowUp', 12, 2.4) : ''}${p}</span>` : ''}</div><span class="ks">${s || ''}</span></div></div>`;
  window.dateChip = (a, b) => `<button class="btn chip">${ic('calendar', 18)}<span>${a}${b ? ` &nbsp;→&nbsp; ${b}` : ''}</span>${ic('chevD', 16)}</button>`;
  window.sf = (l, o, id = '') => `<label class="sf"><small>${l}</small><select ${id ? `id="${id}"` : ''}>${o.map(x => `<option>${x}</option>`).join('')}</select>${ic('chevD', 16)}</label>`;
  window.ring = (p, sz = 120, sw = 12, sub = '') => {
    const r = (sz - sw) / 2,
      c = 2 * Math.PI * r,
      o = c * (1 - p / 100);
    return `<div class="ring" style="width:${sz}px;height:${sz}px"><svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}"><circle cx="${sz / 2}" cy="${sz / 2}" r="${r}" fill="none" stroke="var(--ln)" stroke-width="${sw}"/><circle class="ring-p" cx="${sz / 2}" cy="${sz / 2}" r="${r}" fill="none" stroke="url(#rg)" stroke-width="${sw}" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${o}" style="--c:${c}" transform="rotate(-90 ${sz / 2} ${sz / 2})"/></svg><div class="ring-t"><div><b>${p}%</b><small>${sub}</small></div></div></div>`;
  };
  window.pager = (txt, pages = [1, 2, 3, '…', 26]) => `<div class="pg"><span>${txt}</span><div class="pgs"><button class="pgb">${ic('chevL', 16)}</button>${pages.map((p, i) => `<button class="pgb ${i === 0 ? 'on' : ''}">${p}</button>`).join('')}<button class="pgb">${ic('chevR', 16)}</button></div></div>`;
  window.PAL = [['#F4FBFA', '#D7F3EE', '#00BFA5', '#081311', '#0F2621', '#1DE9B6'], ['#F2FCFC', '#D4F3F5', '#00BCD4', '#071316', '#10303A', '#26C6DA'], ['#F3FBFF', '#D9F1FA', '#00AEEF', '#06131A', '#0D2733', '#29B6F6'], ['#F5F8FF', '#DCE6FF', '#3366FF', '#0A1020', '#14264D', '#5C84FF'], ['#F4F8FF', '#D7E4FF', '#2962FF', '#09101D', '#13284A', '#4D8DFF'], ['#F3F9FB', '#D8EBF0', '#007C91', '#081114', '#123038', '#00ACC1'], ['#F6F7FF', '#E1E5FF', '#5C6CFF', '#0B0F1E', '#1A2142', '#8A94FF'], ['#FAF7FF', '#EBDDFF', '#7C4DFF', '#110C18', '#241736', '#9D7BFF'], ['#FAF6FC', '#EEDDF5', '#8E24AA', '#130C16', '#2B1933', '#BA68C8'], ['#FFF6FB', '#F7DDF0', '#D81B60', '#160C12', '#341926', '#EC407A'], ['#FFF7FA', '#FADDE8', '#E91E63', '#160D11', '#331923', '#F06292'], ['#FFF6F6', '#FADADA', '#E53935', '#180C0C', '#351818', '#FF5A5F'], ['#FFF8F6', '#FBE1DA', '#FF6F61', '#170F0D', '#341D19', '#FF8A75'], ['#FFF8F3', '#FBE4D1', '#FF7A00', '#17100B', '#352116', '#FF9E3D'], ['#FFFBEF', '#F8E7B6', '#E09F00', '#171308', '#322710', '#F4B400'], ['#FFFDF3', '#FAF1B8', '#F4C400', '#161307', '#30280F', '#FFD54F'], ['#FAFDF3', '#EDF7C8', '#A3C700', '#101207', '#232A10', '#C6E64A'], ['#F7FCF8', '#DCF2E0', '#2EAD4A', '#0B120D', '#18301D', '#4CD964'], ['#F4FCF8', '#D7F3E6', '#00A86B', '#09120E', '#153023', '#19C37D'], ['#F6F7F9', '#E2E6EC', '#4F5D75', '#0E1116', '#1A202A', '#8A98B5']];
  window.palVars = (n, t) => {
    const p = PAL[n - 1] || PAL[0],
      o = t === 'dark' ? 3 : 0;
    return `--pbg:${p[o]};--p2:${p[o + 1]};--acc:${p[o + 2]}`;
  };
  const KEY = 'salesos-settings-v3',
    DEF = {
      mode: 'light',
      surface: 'neu',
      pal: 1,
      motion: true,
      liquid: true,
      compact: false
    };
  let S = {
    ...DEF
  };
  try {
    S = {
      ...DEF,
      ...JSON.parse(localStorage.getItem(KEY) || '{}')
    };
  } catch (e) {}
  const mq = matchMedia('(prefers-color-scheme: dark)');
  const theme = () => S.mode === 'system' ? mq.matches ? 'dark' : 'light' : S.mode;
  const cur = () => location.hash.slice(1) || 'dashboard';
  window.SET = {
    get: () => S,
    theme
  };
  function apply() {
    const h = document.documentElement;
    h.dataset.theme = theme();
    h.dataset.surface = S.surface;
    h.style.cssText = palVars(S.pal, theme());
    h.dataset.motion = S.motion ? 'on' : 'off';
    h.dataset.liquid = S.liquid ? 'on' : 'off';
    $('#app').classList.toggle('col', S.compact);
    const b = $('#themeBtn');
    if (b) b.innerHTML = ic(theme() === 'dark' ? 'sun' : 'moon', 20);
    try {
      localStorage.setItem(KEY, JSON.stringify(S));
    } catch (e) {}
    setTimeout(liq, 450);
  }
  window.setS = p => {
    Object.assign(S, p);
    apply();
    if (cur() === 'config') render(true);
  };
  mq.addEventListener('change', apply);
  window.toast = (m, i = 'check') => {
    const t = document.createElement('div');
    t.className = 'card toast';
    t.innerHTML = ic(i, 20, 2.2) + `<b>${m}</b>`;
    $('#toasts').append(t);
    setTimeout(() => {
      t.classList.add('out');
      setTimeout(() => t.remove(), 400);
    }, 2600);
  };
  window.openDrawer = h => {
    $('#drawer').innerHTML = h;
    $('#drawer').classList.add('on');
    $('#scrim').classList.add('on');
  };
  window.closeDrawer = () => {
    $('#drawer').classList.remove('on');
    $('#scrim').classList.remove('on');
  };
  window.go = id => {
    location.hash = id;
  };
  window.pop = (a, items) => {
    closePop();
    const r = a.getBoundingClientRect(),
      p = document.createElement('div');
    p.id = 'pop';
    p.className = 'card';
    p.innerHTML = items.map((x, i) => `<button data-i="${i}" style="${x.d ? 'color:var(--rd)' : ''}">${ic(x.i, 18)}${x.t}</button>`).join('');
    document.body.append(p);
    const w = p.offsetWidth;
    p.style.top = Math.min(r.bottom + 8, innerHeight - p.offsetHeight - 12) + 'px';
    p.style.left = Math.max(12, Math.min(r.right - w, innerWidth - w - 12)) + 'px';
    p.onclick = e => {
      const b = e.target.closest('button');
      if (b) {
        items[b.dataset.i].f?.();
        closePop();
      }
    };
    setTimeout(() => document.addEventListener('click', closePop, {
      once: true
    }), 0);
  };
  function closePop() {
    $('#pop')?.remove();
  }
  const rowMenu = a => pop(a, [{
    i: 'pencil',
    t: 'Editar',
    f: () => toast('Edição aberta', 'pencil')
  }, {
    i: 'copy',
    t: 'Duplicar',
    f: () => toast('Item duplicado', 'copy')
  }, {
    i: 'trash',
    t: 'Excluir',
    d: 1,
    f: () => {
      a.closest('tr,.mcard')?.remove();
      toast('Item excluído', 'trash');
    }
  }]);
  const NAV = [['Execução comercial', [['dashboard', 'Dashboard', 'dashboard'], ['prospeccao', 'Prospecção', 'search'], ['metas', 'Metas', 'target'], ['bases', 'Bases', 'database'], ['listas', 'Listas', 'list'], ['qualificacao', 'Qualificação', 'qualify'], ['pipeline', 'Pipeline', 'pipeline'], ['execucao', 'Executar', 'zap'], ['sequencias', 'Sequências', 'repeat']]], ['Cadastro', [['empresas', 'Empresas', 'building'], ['clientes', 'Clientes', 'users']]], ['Sistema', [['conta', 'Conta', 'user'], ['config', 'Configurações', 'sliders']]]];
  const TITLES = {
    dashboard: 'Dashboard',
    prospeccao: 'Prospecção',
    metas: 'Metas',
    bases: 'Bases',
    qualificacao: 'Qualificados',
    pipeline: 'Pipeline',
    execucao: 'Execução',
    sequencias: 'Sequências',
    empresas: 'Empresas',
    clientes: 'Clientes',
    conta: 'Conta',
    config: 'Configurações',
    novalista: 'Nova lista',
    negocio: 'Negócio'
  };
  let grpOpen = null;
  function buildSide() {
    const id = cur(),
      open = grpOpen ?? (id === 'bases' || id === 'listas');
    $('#side').innerHTML = `<div class="brand"><div class="logo">${ic('wave', 22, 2.2)}</div><div><b>Sales OS</b><small>Execução comercial</small></div></div>
<nav class="nav" id="nav"><div class="liq" id="liq"><i></i><i></i></div>${NAV.map(([s, it]) => `<div class="sec">${s}</div>${it.map(([k, l, i]) => `<a class="ni main ${k === id || k === 'config' && id === 'conta' && 0 ? 'on' : ''}" data-go="${k}">${ic(i, 20)}<span class="lbl">${l}</span></a>`).join('')}`).join('')}
<div class="sec"></div><a class="ni grp ${open ? 'open' : ''}" id="grp">${ic('database', 20)}<span class="lbl">Bases</span><span class="bdg">2</span>${ic('chevR', 16)}</a>
<div class="subs"><a class="ni sub" data-go="bases">Todas as bases</a><a class="ni sub ${id === 'listas' ? 'on' : ''}" data-go="listas">Restaurantes Maringá</a><a class="ni sub" data-go="listas">Clínicas Curitiba</a></div></nav>
<div class="foot"><div class="usr">${av('Usuário Sales', 'ac')}<div><b>Usuário</b><small>Workspace padrão</small></div></div><a class="ni" id="out">${ic('logout', 20)}<span class="lbl">Sair</span></a><a class="ni" id="colb">${ic('panel', 20)}<span class="lbl">Recolher</span></a></div>`;
    $('#grp').onclick = () => {
      grpOpen = !$('#grp').classList.contains('open');
      $('#grp').classList.toggle('open');
      setTimeout(liq, 60);
    };
    $('#out').onclick = () => toast('Sessão encerrada nesta demonstração', 'logout');
    $('#colb').onclick = () => setS({
      compact: !S.compact
    });
    requestAnimationFrame(liq);
  }
  function liq() {
    const el = $('#nav .ni.main.on'),
      l = $('#liq');
    if (!l) return;
    const n = $('#nav');
    l.style.height = n.scrollHeight + 'px';
    const [a, b] = $$('i', l);
    if (!el) {
      a.style.height = b.style.height = '0px';
      return;
    }
    a.style.top = b.style.top = el.offsetTop + 'px';
    a.style.height = b.style.height = el.offsetHeight + 'px';
  }
  function buildTop() {
    const id = cur();
    $('#top').innerHTML = (id === 'listas' ? `<div class="crumb">${ic('list', 20)}<span>Listas</span>${ic('chevR', 14)}<b>Restaurantes Maringá</b></div>` : `<h2>${TITLES[id] || ''}</h2>`) + `<div class="sp"></div><button class="btn" id="ws">Avraham Hub ${ic('chevD', 16)}</button><button class="btn round" id="themeBtn" title="Alternar tema"></button><button class="btn chip" id="um" style="padding:0 10px 0 6px">${av('Sales Ops', 'ac', 'xs')}${ic('chevD', 16)}</button>`;
    $('#themeBtn').onclick = () => setS({
      mode: theme() === 'dark' ? 'light' : 'dark'
    });
    $('#ws').onclick = e => pop(e.currentTarget, [{
      i: 'building',
      t: 'Avraham Hub',
      f: () => {}
    }, {
      i: 'building',
      t: 'Workspace padrão',
      f: () => toast('Workspace alterado', 'building')
    }]);
    $('#um').onclick = e => pop(e.currentTarget, [{
      i: 'user',
      t: 'Conta',
      f: () => go('conta')
    }, {
      i: 'sliders',
      t: 'Configurações',
      f: () => go('config')
    }, {
      i: 'logout',
      t: 'Sair',
      f: () => toast('Sessão encerrada nesta demonstração', 'logout')
    }]);
    $('#themeBtn').innerHTML = ic(theme() === 'dark' ? 'sun' : 'moon', 20);
  }
  function render(keep) {
    const id = PAGES[cur()] ? cur() : 'dashboard';
    const v = $('#view'),
      y = v.scrollTop;
    v.classList.toggle('noanim', keep === true);
    v.innerHTML = `<div class="page">${PAGES[id]()}</div>`;
    v.scrollTop = keep === true ? y : 0;
    v._ac?.abort();
    v._ac = new AbortController();
    const _ad = EventTarget.prototype.addEventListener;
    v.addEventListener = (t, f, o) => _ad.call(v, t, f, {
      ...(typeof o === 'object' && o ? o : {}),
      signal: v._ac.signal
    });
    INIT[id]?.(v);
    buildTop();
    $$('#nav .ni.main').forEach(n => n.classList.toggle('on', n.dataset.go === id));
    $$('#nav .sub').forEach((n, i) => n.classList.toggle('on', id === 'listas' && i === 1));
    liq();
    closeDrawer();
  }
  window.render = render;
  document.addEventListener('click', e => {
    const g = e.target.closest('[data-go]');
    if (g) {
      e.preventDefault();
      go(g.dataset.go);
    }
    const m = e.target.closest('[data-menu]');
    if (m) rowMenu(m);
    const t = e.target.closest('[data-toast]');
    if (t) toast(t.dataset.toast, t.dataset.ti || 'check');
    if (e.target.closest('[data-close]')) closeDrawer();
    const tab = e.target.closest('.tab[data-tab]');
    if (tab) {
      $$('.tab', tab.parentNode).forEach(x => x.classList.toggle('on', x === tab));
    }
  });
  document.addEventListener('pointermove', e => {
    const b = e.target.closest?.('.btn-p');
    if (b) {
      const r = b.getBoundingClientRect();
      b.style.setProperty('--x', e.clientX - r.left + 'px');
      b.style.setProperty('--y', e.clientY - r.top + 'px');
    }
  });
  $('#scrim').onclick = closeDrawer;
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDrawer();
  });
  window.addEventListener('hashchange', () => {
    render();
  });
  window.SO = {
    boot() {
      apply();
      buildSide();
      render();
      $('#nav').addEventListener('scroll', () => {});
    }
  };
  const _r = render;
  window.addEventListener('hashchange', () => {});
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "salesos/ui.js", error: String((e && e.message) || e) }); }

// ui_kits/sales-os/App.jsx
try { (() => {
(function () {
  const {
    useState,
    useEffect
  } = React;
  const {
    Sidebar,
    Toast,
    Avatar,
    Button
  } = window.DS;
  const GROUPS = [{
    items: [{
      id: 'dashboard',
      icon: 'space_dashboard',
      label: 'Dashboard'
    }, {
      id: 'execucao',
      icon: 'bolt',
      label: 'Execução',
      count: 6
    }, {
      id: 'bases',
      icon: 'database',
      label: 'Bases'
    }, {
      id: 'leads',
      icon: 'person_search',
      label: 'Leads'
    }, {
      id: 'pipeline',
      icon: 'view_kanban',
      label: 'Pipeline'
    }]
  }];
  const SCREENS = {
    dashboard: 'DashboardScreen',
    execucao: 'ExecutionScreen',
    bases: 'BasesScreen',
    leads: 'LeadsScreen',
    pipeline: 'PipelineScreen'
  };
  function App() {
    const [route, setRoute] = useState(() => localStorage.getItem('so-route') || 'dashboard');
    const [theme, setTheme] = useState(() => localStorage.getItem('so-theme') || 'dark');
    const [toasts, setToasts] = useState([]);
    useEffect(() => {
      localStorage.setItem('so-route', route);
    }, [route]);
    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('so-theme', theme);
    }, [theme]);
    const toast = (tone, message, actionLabel, onAction) => {
      const id = Date.now() + Math.random();
      const close = () => setToasts(t => t.filter(x => x.id !== id));
      setToasts(t => t.concat({
        id,
        tone,
        message,
        actionLabel,
        onAction: () => {
          onAction && onAction();
          close();
        },
        close
      }));
      if (tone !== 'error') setTimeout(close, 5000);
    };
    const Screen = window[SCREENS[route]];
    return /*#__PURE__*/React.createElement("div", {
      className: "sx-app"
    }, /*#__PURE__*/React.createElement(Sidebar, {
      groups: GROUPS,
      activeId: route,
      onNavigate: setRoute,
      footer: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        size: "sm",
        icon: theme === 'dark' ? 'light_mode' : 'dark_mode',
        onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark')
      }, theme === 'dark' ? 'Tema claro' : 'Tema escuro'), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '0 8px'
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: "Marina Costa"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13
        }
      }, "Marina Costa")))
    }), /*#__PURE__*/React.createElement("main", {
      className: "sx-main"
    }, /*#__PURE__*/React.createElement(Screen, {
      key: route,
      toast: toast
    })), /*#__PURE__*/React.createElement("div", {
      className: "sx-toasts"
    }, toasts.map(t => /*#__PURE__*/React.createElement(Toast, {
      key: t.id,
      tone: t.tone,
      message: t.message,
      actionLabel: t.actionLabel,
      onAction: t.onAction,
      onClose: t.close
    }))));
  }
  ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sales-os/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sales-os/BasesScreen.jsx
try { (() => {
(function () {
  const {
    useState
  } = React;
  const {
    PageHeader,
    Button,
    DataTable,
    EmptyState,
    Modal,
    Input,
    ConfirmDialog,
    StatusBadge
  } = window.DS;
  const nf = new Intl.NumberFormat('pt-BR');
  function BasesScreen({
    toast
  }) {
    const [bases, setBases] = useState(window.SOData.bases);
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('');
    const [err, setErr] = useState('');
    const [del, setDel] = useState(null);
    const create = () => {
      if (!name.trim()) return setErr('Informe um nome para a base.');
      setBases([{
        id: Date.now(),
        nome: name,
        leads: 0,
        qual: 0,
        data: '1 out',
        tipo: 'Planilha'
      }].concat(bases));
      setModal(false);
      setName('');
      setErr('');
      toast('success', 'Base criada.');
    };
    const remove = () => {
      setBases(bases.filter(b => b.id !== del.id));
      toast('success', 'Base removida.');
      setDel(null);
    };
    const cols = [{
      key: 'nome',
      header: 'Base',
      sortable: true,
      render: r => /*#__PURE__*/React.createElement("div", {
        className: "sx-cell-stack"
      }, /*#__PURE__*/React.createElement("div", {
        className: "sx-cell-main"
      }, r.nome), /*#__PURE__*/React.createElement("div", {
        className: "sx-cell-sub"
      }, "Importada em ", r.data, " \xB7 ", r.tipo))
    }, {
      key: 'leads',
      header: 'Leads',
      align: 'right',
      sortable: true,
      render: r => nf.format(r.leads)
    }, {
      key: 'qual',
      header: 'Qualificados',
      align: 'right',
      render: r => r.leads ? /*#__PURE__*/React.createElement("span", null, nf.format(r.qual), " ", /*#__PURE__*/React.createElement("span", {
        className: "sx-cell-sub",
        style: {
          display: 'inline'
        }
      }, "(", Math.round(r.qual / r.leads * 100), "%)")) : '0'
    }, {
      key: 'st',
      header: 'Situação',
      render: r => r.qual === 0 && r.leads ? /*#__PURE__*/React.createElement(StatusBadge, {
        kind: "qualificacao",
        value: "N\xE3o analisado"
      }) : /*#__PURE__*/React.createElement(StatusBadge, {
        kind: "qualificacao",
        value: "Qualificado"
      })
    }];
    return /*#__PURE__*/React.createElement("div", {
      className: "sx-page"
    }, /*#__PURE__*/React.createElement(PageHeader, {
      title: "Bases",
      description: "Listas de empresas importadas para prospec\xE7\xE3o.",
      primaryAction: /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        icon: "add",
        onClick: () => setModal(true)
      }, "Nova base")
    }), /*#__PURE__*/React.createElement(DataTable, {
      columns: cols,
      rows: bases,
      sort: {
        key: 'nome',
        dir: 'asc'
      },
      rowActions: () => [{
        id: 'edit',
        label: 'Renomear',
        icon: 'edit'
      }, {
        id: 'dup',
        label: 'Duplicar',
        icon: 'content_copy'
      }, {
        id: 'exp',
        label: 'Exportar',
        icon: 'download'
      }, {
        separator: true
      }, {
        id: 'del',
        label: 'Excluir',
        icon: 'delete',
        danger: true
      }],
      onRowAction: (it, r) => it.id === 'del' ? setDel(r) : toast('success', it.id === 'dup' ? 'Base duplicada.' : it.id === 'exp' ? 'Exportação iniciada.' : 'Alterações salvas.'),
      empty: /*#__PURE__*/React.createElement(EmptyState, {
        title: "Nenhuma base importada ainda.",
        description: "Importe uma planilha ou busque empresas para come\xE7ar a prospectar.",
        action: /*#__PURE__*/React.createElement(Button, {
          variant: "primary",
          icon: "upload",
          onClick: () => setModal(true)
        }, "Importar primeira base")
      })
    }), /*#__PURE__*/React.createElement(Modal, {
      open: modal,
      title: "Nova base",
      subtitle: "D\xEA um nome para organizar seus leads.",
      onClose: () => {
        setModal(false);
        setErr('');
      },
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        onClick: () => {
          setModal(false);
          setErr('');
        }
      }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        onClick: create
      }, "Criar base"))
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Nome da base",
      required: true,
      value: name,
      error: err,
      onChange: e => setName(e.target.value),
      hint: "Ex.: Restaurantes Maring\xE1"
    })), /*#__PURE__*/React.createElement(ConfirmDialog, {
      open: !!del,
      title: "Excluir base",
      description: del ? 'A base ' + del.nome + ' e seus ' + nf.format(del.leads) + ' leads serão removidos. Esta ação não pode ser desfeita.' : '',
      confirmLabel: "Excluir base",
      confirmText: del && del.leads >= 1000 ? 'EXCLUIR' : undefined,
      onConfirm: remove,
      onCancel: () => setDel(null)
    }));
  }
  window.BasesScreen = BasesScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sales-os/BasesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sales-os/DashboardScreen.jsx
try { (() => {
(function () {
  const {
    useState
  } = React;
  const {
    PageHeader,
    KpiCard,
    ChartContainer,
    BarChart,
    AreaChart,
    FunnelChart,
    DateRangeSelector
  } = window.DS;
  const mil = v => 'R$ ' + Math.round(v / 1000) + ' mil';
  function DashboardScreen() {
    const [period, setPeriod] = useState('month');
    const st = window.SOData.stages;
    const tot = n => st.find(s => s.name === n).deals.reduce((t, d) => t + d.valor, 0);
    return /*#__PURE__*/React.createElement("div", {
      className: "sx-page"
    }, /*#__PURE__*/React.createElement(PageHeader, {
      title: "Dashboard",
      description: "Onde estamos em rela\xE7\xE3o \xE0 meta de setembro.",
      actions: /*#__PURE__*/React.createElement(DateRangeSelector, {
        value: period,
        onChange: setPeriod
      })
    }), /*#__PURE__*/React.createElement("div", {
      className: "sx-grid-kpi",
      style: {
        gridTemplateColumns: 'repeat(3,minmax(0,1fr))'
      }
    }, /*#__PURE__*/React.createElement(KpiCard, {
      label: "Quanto vendemos?",
      value: "R$ 184.200",
      progress: 74,
      context: "74% da meta de R$ 250.000",
      trend: {
        dir: 'up',
        value: '12%'
      }
    }), /*#__PURE__*/React.createElement(KpiCard, {
      label: "Quanto falta para a meta?",
      value: "R$ 65.800",
      context: "12 dias \xFAteis restantes"
    }), /*#__PURE__*/React.createElement(KpiCard, {
      label: "Quanto existe em negocia\xE7\xE3o?",
      value: "R$ 175.200",
      context: "Proposta e Negocia\xE7\xE3o \xB7 4 oportunidades"
    })), /*#__PURE__*/React.createElement("div", {
      className: "sx-grid-kpi",
      style: {
        gridTemplateColumns: 'repeat(4,minmax(0,1fr))'
      }
    }, /*#__PURE__*/React.createElement(KpiCard, {
      label: "Liga\xE7\xF5es",
      value: "412",
      trend: {
        dir: 'up',
        value: '8%'
      },
      context: "vs. per\xEDodo anterior"
    }), /*#__PURE__*/React.createElement(KpiCard, {
      label: "Contatos realizados",
      value: "168",
      trend: {
        dir: 'up',
        value: '5%'
      },
      context: "41% das liga\xE7\xF5es"
    }), /*#__PURE__*/React.createElement(KpiCard, {
      label: "Agendamentos",
      value: "54",
      trend: {
        dir: 'down',
        value: '3%'
      },
      context: "vs. per\xEDodo anterior"
    }), /*#__PURE__*/React.createElement(KpiCard, {
      label: "Reuni\xF5es",
      value: "31",
      trend: {
        dir: 'flat',
        value: '0%'
      },
      context: "vs. per\xEDodo anterior"
    })), /*#__PURE__*/React.createElement("div", {
      className: "sx-grid-2"
    }, /*#__PURE__*/React.createElement(ChartContainer, {
      title: "Pipeline nas etapas finais",
      subtitle: "Valor em aberto por etapa \xB7 setembro",
      insight: "Proposta concentra o maior valor em aberto."
    }, /*#__PURE__*/React.createElement(BarChart, {
      data: [{
        label: 'Reunião',
        value: tot('Reunião')
      }, {
        label: 'Proposta',
        value: tot('Proposta')
      }, {
        label: 'Negociação',
        value: tot('Negociação')
      }],
      highlightIndex: 1,
      format: mil,
      height: 180
    })), /*#__PURE__*/React.createElement(ChartContainer, {
      title: "Vendas acumuladas",
      subtitle: "Setembro, comparado ao m\xEAs anterior",
      legend: [{
        label: 'Este mês',
        color: 'var(--accent)'
      }, {
        label: 'Mês anterior',
        color: 'var(--t4)'
      }],
      insight: "O m\xEAs est\xE1 R$ 20 mil acima do ritmo de agosto."
    }, /*#__PURE__*/React.createElement(AreaChart, {
      data: [{
        label: '01',
        value: 10
      }, {
        label: '08',
        value: 48
      }, {
        label: '15',
        value: 92
      }, {
        label: '22',
        value: 140
      }, {
        label: '30',
        value: 184
      }],
      compare: [{
        label: '',
        value: 8
      }, {
        label: '',
        value: 40
      }, {
        label: '',
        value: 70
      }, {
        label: '',
        value: 120
      }, {
        label: '',
        value: 164
      }],
      highlightIndex: 4,
      format: v => 'R$ ' + v + ' mil',
      height: 180
    }))), /*#__PURE__*/React.createElement(ChartContainer, {
      title: "Funil completo",
      subtitle: "Leads por etapa \xB7 percentual sobre Tentativas",
      insight: "A maior perda est\xE1 entre Tentativas e Contato: 47% avan\xE7am."
    }, /*#__PURE__*/React.createElement(FunnelChart, {
      stages: [{
        label: 'Tentativas',
        value: 1200
      }, {
        label: 'Contato',
        value: 640
      }, {
        label: 'Agendamento',
        value: 310
      }, {
        label: 'Reunião',
        value: 190
      }, {
        label: 'Proposta',
        value: 96
      }, {
        label: 'Negociação',
        value: 52
      }, {
        label: 'Ganho',
        value: 28
      }]
    })), /*#__PURE__*/React.createElement("div", {
      className: "sx-grid-2"
    }, /*#__PURE__*/React.createElement(ChartContainer, {
      title: "Liga\xE7\xF5es por dia",
      subtitle: "\xDAltimos 7 dias",
      insight: "Quarta-feira concentra o maior volume de liga\xE7\xF5es."
    }, /*#__PURE__*/React.createElement(BarChart, {
      data: [{
        label: 'Seg',
        value: 42
      }, {
        label: 'Ter',
        value: 51
      }, {
        label: 'Qua',
        value: 78
      }, {
        label: 'Qui',
        value: 60
      }, {
        label: 'Sex',
        value: 47
      }, {
        label: 'Sáb',
        value: 12
      }, {
        label: 'Dom',
        value: 4
      }],
      highlightIndex: 2,
      height: 180
    })), /*#__PURE__*/React.createElement(ChartContainer, {
      title: "Vendas por segmento",
      subtitle: "Setembro \xB7 participa\xE7\xE3o na receita",
      insight: "Restaurantes responde por mais da metade das vendas."
    }, /*#__PURE__*/React.createElement(BarChart, {
      data: [{
        label: 'Restaurantes',
        value: 54
      }, {
        label: 'Varejo',
        value: 21
      }, {
        label: 'Padarias',
        value: 14
      }, {
        label: 'Saúde',
        value: 8
      }, {
        label: 'Serviços',
        value: 3
      }],
      highlightIndex: 0,
      format: v => v + '%',
      height: 180
    }))));
  }
  window.DashboardScreen = DashboardScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sales-os/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sales-os/ExecutionScreen.jsx
try { (() => {
(function () {
  const {
    useState
  } = React;
  const {
    PageHeader,
    Button,
    KpiCard,
    Tabs,
    ActivityRow,
    EmptyState
  } = window.DS;
  function ExecutionScreen({
    toast
  }) {
    const [acts, setActs] = useState(window.SOData.acts);
    const [tab, setTab] = useState('hoje');
    const count = b => acts.filter(a => a.bucket === b && !a.done).length;
    const list = acts.filter(a => a.bucket === tab);
    const done = a => {
      setActs(acts.map(x => x.id === a.id ? {
        ...x,
        done: !x.done
      } : x));
      if (!a.done) toast('success', 'Atividade concluída.', 'Desfazer', () => setActs(p => p.map(x => x.id === a.id ? {
        ...x,
        done: false
      } : x)));
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "sx-page"
    }, /*#__PURE__*/React.createElement(PageHeader, {
      title: "Execu\xE7\xE3o",
      description: "O que fazer agora, em ordem de hor\xE1rio.",
      meta: /*#__PURE__*/React.createElement("span", null, "Quinta-feira, 1 de outubro"),
      primaryAction: /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        icon: "add"
      }, "Nova atividade")
    }), /*#__PURE__*/React.createElement("div", {
      className: "sx-grid-kpi"
    }, /*#__PURE__*/React.createElement(KpiCard, {
      label: "Atividades hoje",
      value: String(count('hoje')),
      context: "4 liga\xE7\xF5es restantes"
    }), /*#__PURE__*/React.createElement(KpiCard, {
      label: "Atrasadas",
      value: String(count('atrasadas')),
      context: "Resolver antes das 12h"
    }), /*#__PURE__*/React.createElement(KpiCard, {
      label: "Conclu\xEDdas hoje",
      value: "9",
      trend: {
        dir: 'up',
        value: '3'
      },
      context: "vs. ontem"
    })), /*#__PURE__*/React.createElement("div", {
      className: "sx-table-card"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 var(--sp-4)'
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab,
      tabs: [{
        id: 'hoje',
        label: 'Hoje',
        count: count('hoje')
      }, {
        id: 'atrasadas',
        label: 'Atrasadas',
        count: count('atrasadas')
      }, {
        id: 'proximas',
        label: 'Próximas',
        count: count('proximas')
      }]
    })), list.length ? list.map(a => /*#__PURE__*/React.createElement(ActivityRow, {
      key: a.id,
      activity: a,
      onComplete: () => done(a)
    })) : /*#__PURE__*/React.createElement(EmptyState, {
      title: "Nenhuma atividade nesta lista.",
      description: "Novas atividades aparecem aqui quando forem agendadas."
    })));
  }
  window.ExecutionScreen = ExecutionScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sales-os/ExecutionScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sales-os/LeadsScreen.jsx
try { (() => {
(function () {
  const {
    useState,
    useEffect,
    useMemo
  } = React;
  const {
    PageHeader,
    Button,
    DataTable,
    FilterBar,
    DateRangeSelector,
    Pagination,
    BulkActionBar,
    StatusBadge,
    EmptyState,
    Drawer,
    ConfirmDialog,
    Input,
    Select,
    Avatar
  } = window.DS;
  const SEG = ['Restaurantes', 'Padarias', 'Varejo', 'Saúde', 'Serviços'].map(s => ({
    value: s,
    label: s
  }));
  const QUAL = ['Não analisado', 'Qualificado', 'Descartado'].map(s => ({
    value: s,
    label: s
  }));
  const CONT = ['Não abordado', 'Tentando contato', 'Contato realizado', 'Agendamento realizado'].map(s => ({
    value: s,
    label: s
  }));
  function LeadsScreen({
    toast
  }) {
    const [all, setAll] = useState(window.SOData.leads);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [f, setF] = useState({});
    const [period, setPeriod] = useState('30d');
    const [sort, setSort] = useState({
      key: 'fantasia',
      dir: 'asc'
    });
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [sel, setSel] = useState([]);
    const [open, setOpen] = useState(null);
    const [confirm, setConfirm] = useState(null);
    useEffect(() => {
      const t = setTimeout(() => setLoading(false), 700);
      return () => clearTimeout(t);
    }, []);
    const filtered = useMemo(() => {
      let r = all.filter(l => (!search || (l.fantasia + l.razao).toLowerCase().includes(search.toLowerCase())) && (!f.segmento || l.segmento === f.segmento) && (!f.qualificacao || l.qualificacao === f.qualificacao) && (!f.contato || l.contato === f.contato));
      r = r.slice().sort((a, b) => String(a[sort.key]).localeCompare(String(b[sort.key]), 'pt-BR') * (sort.dir === 'asc' ? 1 : -1));
      return r;
    }, [all, search, f, sort]);
    const rows = filtered.slice((page - 1) * pageSize, page * pageSize);
    const patch = (ids, p) => setAll(a => a.map(l => ids.includes(l.id) ? {
      ...l,
      ...p
    } : l));
    const withUndo = (ids, p, msg) => {
      const prev = all.filter(l => ids.includes(l.id)).map(l => ({
        id: l.id,
        qualificacao: l.qualificacao
      }));
      patch(ids, p);
      toast('success', msg, 'Desfazer', () => prev.forEach(x => patch([x.id], {
        qualificacao: x.qualificacao
      })));
    };
    const plural = (n, a, b) => n + ' ' + (n === 1 ? a : b);
    const bulk = a => {
      const n = sel.length;
      if (a.id === 'q') {
        withUndo(sel, {
          qualificacao: 'Qualificado'
        }, plural(n, 'lead foi qualificado.', 'leads foram qualificados.'));
        setSel([]);
      } else if (a.id === 's') {
        patch(sel, {
          contato: 'Tentando contato'
        });
        toast('success', plural(n, 'lead atualizado', 'leads atualizados') + ' para Tentando contato.');
        setSel([]);
      } else if (a.id === 't') {
        toast('success', 'Tag adicionada a ' + plural(n, 'lead.', 'leads.'));
        setSel([]);
      } else if (a.id === 'p') {
        const ex = Math.min(3, n);
        toast('success', n - ex + ' oportunidades criadas. ' + ex + ' já existiam.');
        setSel([]);
      } else if (a.id === 'd') setConfirm({
        ids: sel
      });
    };
    const rowAct = (it, r) => {
      if (it.id === 'open') setOpen(r);else if (it.id === 'q') withUndo([r.id], {
        qualificacao: 'Qualificado'
      }, 'Lead qualificado.');else if (it.id === 'x') withUndo([r.id], {
        qualificacao: 'Descartado'
      }, 'Lead descartado.');else if (it.id === 'del') setConfirm({
        ids: [r.id]
      });
    };
    const del = () => {
      const n = confirm.ids.length;
      setAll(all.filter(l => !confirm.ids.includes(l.id)));
      setSel(sel.filter(x => !confirm.ids.includes(x)));
      setConfirm(null);
      toast('success', n === 1 ? 'Lead removido.' : n + ' leads removidos.');
    };
    const cols = [{
      key: 'fantasia',
      header: 'Empresa',
      sortable: true,
      render: r => /*#__PURE__*/React.createElement("div", {
        className: "sx-cell-stack"
      }, /*#__PURE__*/React.createElement("div", {
        className: "sx-cell-main"
      }, r.fantasia), /*#__PURE__*/React.createElement("div", {
        className: "sx-cell-sub"
      }, r.razao))
    }, {
      key: 'cidade',
      header: 'Cidade',
      sortable: true,
      render: r => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, r.cidade), /*#__PURE__*/React.createElement("div", {
        className: "sx-cell-sub"
      }, r.segmento))
    }, {
      key: 'qualificacao',
      header: 'Qualificação',
      render: r => /*#__PURE__*/React.createElement(StatusBadge, {
        kind: "qualificacao",
        value: r.qualificacao
      })
    }, {
      key: 'contato',
      header: 'Contato',
      render: r => /*#__PURE__*/React.createElement(StatusBadge, {
        kind: "contato",
        value: r.contato
      })
    }, {
      key: 'owner',
      header: 'Responsável',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          gap: 8,
          alignItems: 'center'
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: r.owner,
        size: "sm"
      }), r.owner.split(' ')[0])
    }];
    const nBig = confirm && confirm.ids.length >= 20;
    return /*#__PURE__*/React.createElement("div", {
      className: "sx-page",
      "data-width": "wide"
    }, /*#__PURE__*/React.createElement(PageHeader, {
      title: "Leads",
      description: "Empresas das suas bases, prontas para qualificar e abordar.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        icon: "download"
      }, "Exportar"),
      primaryAction: /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        icon: "add"
      }, "Novo lead")
    }), /*#__PURE__*/React.createElement(DataTable, {
      columns: cols,
      rows: rows,
      loading: loading,
      selectable: true,
      selected: sel,
      onSelectedChange: setSel,
      sort: sort,
      onSortChange: s => {
        setSort(s);
        setPage(1);
      },
      onRowClick: setOpen,
      customizableColumns: true,
      rowActions: () => [{
        id: 'open',
        label: 'Abrir detalhes',
        icon: 'right_panel_open'
      }, {
        id: 'q',
        label: 'Qualificar',
        icon: 'verified'
      }, {
        id: 'x',
        label: 'Descartar',
        icon: 'block'
      }, {
        separator: true
      }, {
        id: 'del',
        label: 'Excluir',
        icon: 'delete',
        danger: true
      }],
      onRowAction: rowAct,
      toolbar: /*#__PURE__*/React.createElement(FilterBar, {
        search: search,
        onSearchChange: v => {
          setSearch(v);
          setPage(1);
        },
        searchPlaceholder: "Buscar empresa ou raz\xE3o social",
        onClear: () => {
          setSearch('');
          setF({});
          setPage(1);
        },
        onFilterChange: (id, v) => {
          setF({
            ...f,
            [id]: v
          });
          setPage(1);
        },
        filters: [{
          id: 'segmento',
          label: 'Segmento',
          value: f.segmento,
          options: SEG
        }, {
          id: 'qualificacao',
          label: 'Qualificação',
          value: f.qualificacao,
          options: QUAL
        }, {
          id: 'contato',
          label: 'Contato',
          value: f.contato,
          options: CONT
        }],
        period: /*#__PURE__*/React.createElement(DateRangeSelector, {
          value: period,
          onChange: setPeriod
        })
      }),
      bulkBar: /*#__PURE__*/React.createElement(BulkActionBar, {
        count: sel.length,
        onClear: () => setSel([]),
        onAction: bulk,
        actions: [{
          id: 'q',
          label: 'Qualificar',
          icon: 'verified'
        }, {
          id: 's',
          label: 'Alterar status',
          icon: 'swap_horiz'
        }, {
          id: 't',
          label: 'Adicionar tag',
          icon: 'sell'
        }, {
          id: 'p',
          label: 'Enviar para Pipeline',
          icon: 'send'
        }, {
          id: 'd',
          label: 'Excluir',
          icon: 'delete',
          danger: true
        }]
      }),
      empty: /*#__PURE__*/React.createElement(EmptyState, {
        kind: "no-results",
        title: "Nenhum resultado encontrado para estes filtros.",
        action: /*#__PURE__*/React.createElement(Button, {
          variant: "secondary",
          onClick: () => {
            setSearch('');
            setF({});
          }
        }, "Limpar filtros")
      }),
      pagination: /*#__PURE__*/React.createElement(Pagination, {
        page: page,
        pageSize: pageSize,
        total: filtered.length,
        onPageChange: setPage,
        onPageSizeChange: n => {
          setPageSize(n);
          setPage(1);
        }
      })
    }), /*#__PURE__*/React.createElement(Drawer, {
      open: !!open,
      title: open && open.fantasia,
      subtitle: open && open.razao,
      onClose: () => setOpen(null),
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        onClick: () => setOpen(null)
      }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        onClick: () => {
          setOpen(null);
          toast('success', 'Alterações salvas.');
        }
      }, "Salvar"))
    }, open ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(StatusBadge, {
      kind: "qualificacao",
      value: open.qualificacao
    }), /*#__PURE__*/React.createElement(StatusBadge, {
      kind: "contato",
      value: open.contato
    })), /*#__PURE__*/React.createElement(Input, {
      label: "Nome fantasia",
      required: true,
      defaultValue: open.fantasia
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Telefone",
      defaultValue: open.telefone
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Respons\xE1vel",
      options: ['Marina Costa', 'Rafael Lima', 'Bianca Rocha'],
      defaultValue: open.owner
    }), /*#__PURE__*/React.createElement("div", {
      className: "sx-eyebrow",
      style: {
        marginTop: 8
      }
    }, "Hist\xF3rico"), ['Lead importado da base Restaurantes Maringá', 'Qualificado por Marina Costa', 'Ligação sem resposta'].map((h, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "sx-cell-sub",
      style: {
        fontSize: 13,
        color: 'var(--t2)'
      }
    }, h, /*#__PURE__*/React.createElement("div", {
      className: "sx-cell-sub"
    }, 12 + i, " set")))) : null), /*#__PURE__*/React.createElement(ConfirmDialog, {
      open: !!confirm,
      title: confirm && confirm.ids.length === 1 ? 'Excluir lead' : 'Excluir ' + (confirm ? confirm.ids.length : 0) + ' leads',
      description: "Os leads e o hist\xF3rico de atividades ser\xE3o removidos. Esta a\xE7\xE3o n\xE3o pode ser desfeita.",
      confirmLabel: "Excluir",
      confirmText: nBig ? 'EXCLUIR' : undefined,
      onConfirm: del,
      onCancel: () => setConfirm(null)
    }));
  }
  window.LeadsScreen = LeadsScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sales-os/LeadsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sales-os/PipelineScreen.jsx
try { (() => {
(function () {
  const {
    useState
  } = React;
  const {
    PageHeader,
    Button,
    KpiCard,
    StatusBadge,
    PipelineCard,
    Drawer,
    Select,
    Input,
    DateRangeSelector
  } = window.DS;
  const brl = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  });
  function PipelineScreen({
    toast
  }) {
    const [stages, setStages] = useState(window.SOData.stages);
    const [drag, setDrag] = useState(null);
    const [over, setOver] = useState(null);
    const [open, setOpen] = useState(null);
    const [period, setPeriod] = useState('month');
    const sum = names => stages.filter(s => names.includes(s.name)).reduce((t, s) => t + s.deals.reduce((x, d) => x + d.valor, 0), 0);
    const drop = to => {
      setOver(null);
      if (!drag || drag.from === to) return setDrag(null);
      let deal;
      const next = stages.map(s => {
        if (s.name === drag.from) {
          deal = s.deals.find(d => d.id === drag.id);
          return {
            ...s,
            deals: s.deals.filter(d => d.id !== drag.id)
          };
        }
        return s;
      }).map(s => s.name === to ? {
        ...s,
        deals: [{
          ...deal,
          dias: 0,
          stalled: false
        }].concat(s.deals)
      } : s);
      setStages(next);
      setDrag(null);
      toast('success', deal.empresa + ' movida para ' + to + '.');
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "sx-page",
      "data-width": "wide"
    }, /*#__PURE__*/React.createElement(PageHeader, {
      title: "Pipeline",
      description: "Oportunidades por etapa. Arraste o card para mudar de etapa.",
      actions: /*#__PURE__*/React.createElement(DateRangeSelector, {
        value: period,
        onChange: setPeriod
      }),
      primaryAction: /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        icon: "add"
      }, "Criar oportunidade")
    }), /*#__PURE__*/React.createElement("div", {
      className: "sx-grid-kpi"
    }, /*#__PURE__*/React.createElement(KpiCard, {
      label: "Em aberto",
      value: brl.format(sum(['Tentativas', 'Contato', 'Agendamento', 'Reunião', 'Proposta', 'Negociação'])),
      context: "13 oportunidades"
    }), /*#__PURE__*/React.createElement(KpiCard, {
      label: "Em negocia\xE7\xE3o",
      value: brl.format(sum(['Negociação'])),
      context: "2 oportunidades"
    }), /*#__PURE__*/React.createElement(KpiCard, {
      label: "Ganho no m\xEAs",
      value: brl.format(sum(['Ganho'])),
      trend: {
        dir: 'up',
        value: '1'
      },
      context: "vs. m\xEAs anterior"
    })), /*#__PURE__*/React.createElement("div", {
      className: "sx-kanban"
    }, stages.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.name,
      className: "sx-kanban__col",
      style: over === s.name ? {
        outline: '2px dashed var(--accent-line)'
      } : undefined,
      onDragOver: e => {
        e.preventDefault();
        setOver(s.name);
      },
      onDragLeave: () => setOver(null),
      onDrop: () => drop(s.name)
    }, /*#__PURE__*/React.createElement("div", {
      className: "sx-kanban__head"
    }, /*#__PURE__*/React.createElement(StatusBadge, {
      kind: "pipeline",
      value: s.name
    }), /*#__PURE__*/React.createElement("span", {
      className: "sx-kanban__sum"
    }, s.deals.length, " \xB7 ", brl.format(s.deals.reduce((t, d) => t + d.valor, 0)))), s.deals.map(d => /*#__PURE__*/React.createElement("div", {
      key: d.id,
      draggable: true,
      onDragStart: () => setDrag({
        id: d.id,
        from: s.name
      }),
      onDragEnd: () => {
        setDrag(null);
        setOver(null);
      }
    }, /*#__PURE__*/React.createElement(PipelineCard, {
      deal: d,
      dragging: drag && drag.id === d.id,
      onOpen: () => setOpen({
        ...d,
        etapa: s.name
      })
    })))))), /*#__PURE__*/React.createElement(Drawer, {
      open: !!open,
      title: open && open.empresa,
      subtitle: open && open.produto,
      onClose: () => setOpen(null),
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        onClick: () => setOpen(null)
      }, "Fechar"), /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        onClick: () => {
          setOpen(null);
          toast('success', 'Alterações salvas.');
        }
      }, "Salvar"))
    }, open ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBadge, {
      kind: "pipeline",
      value: open.etapa
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Valor",
      defaultValue: brl.format(open.valor)
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Previs\xE3o de fechamento",
      defaultValue: open.previsao
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Respons\xE1vel",
      options: ['Marina Costa', 'Rafael Lima', 'Bianca Rocha'],
      defaultValue: open.owner
    })) : null));
  }
  window.PipelineScreen = PipelineScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sales-os/PipelineScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sales-os/data.js
try { (() => {
(function () {
  var emp = [['Dogão do João', 'João da Silva Comércio de Alimentos LTDA', 'Restaurantes', 'Maringá, PR'], ['Padaria Central', 'Central Panificação Ltda', 'Padarias', 'Londrina, PR'], ['Bistrô Verde', 'Verde Gastronomia ME', 'Restaurantes', 'Curitiba, PR'], ['Casa do Pastel', 'Pastelaria Casa do Pastel EIRELI', 'Restaurantes', 'Maringá, PR'], ['Mercado Bom Preço', 'Bom Preço Supermercados Ltda', 'Varejo', 'Cascavel, PR'], ['Clínica Sorriso', 'Sorriso Odontologia S/S', 'Saúde', 'Londrina, PR'], ['Pizzaria Napoli', 'Napoli Alimentos Ltda', 'Restaurantes', 'Ponta Grossa, PR'], ['Auto Peças Silva', 'Silva & Filhos Comércio de Peças', 'Varejo', 'Maringá, PR'], ['Academia Pulse', 'Pulse Fitness Ltda', 'Serviços', 'Curitiba, PR'], ['Café do Largo', 'Largo Cafeteria ME', 'Padarias', 'Londrina, PR'], ['Churrascaria Gaúcha', 'Gaúcha Grill Restaurante Ltda', 'Restaurantes', 'Foz do Iguaçu, PR'], ['Ótica Visão', 'Visão Ótica Comércio Ltda', 'Varejo', 'Maringá, PR'], ['Lavanderia Express', 'Express Lavanderia ME', 'Serviços', 'Cascavel, PR'], ['Sushi Hana', 'Hana Culinária Oriental Ltda', 'Restaurantes', 'Curitiba, PR'], ['Pet Shop Amigo Fiel', 'Amigo Fiel Produtos Pet Ltda', 'Varejo', 'Londrina, PR'], ['Panificadora Trigo Bom', 'Trigo Bom Alimentos S/A', 'Padarias', 'Maringá, PR']];
  var q = ['Não analisado', 'Qualificado', 'Descartado', 'Qualificado', 'Não analisado'],
    c = ['Não abordado', 'Tentando contato', 'Contato realizado', 'Agendamento realizado', 'Não abordado'],
    own = ['Marina Costa', 'Rafael Lima', 'Bianca Rocha'];
  var leads = [];
  for (var i = 0; i < 48; i++) {
    var e = emp[i % emp.length];
    var qq = q[i * 3 % 5];
    var cc = qq === 'Descartado' ? 'Não abordado' : c[i * 2 % 5];
    leads.push({
      id: i + 1,
      fantasia: e[0] + (i >= emp.length ? ' ' + (Math.floor(i / emp.length) + 1) : ''),
      razao: e[1],
      segmento: e[2],
      cidade: e[3],
      telefone: '(44) 9' + (9000 + i * 137 % 1000) + '-' + (1000 + i * 263 % 9000),
      owner: own[i % 3],
      qualificacao: qq,
      contato: cc,
      tags: []
    });
  }
  var dealsBase = [['Tentativas', [['Dogão do João', 'Plano Essencial', 9600, '12 out', 'Marina Costa', 2], ['Casa do Pastel', 'Plano Essencial', 9600, '14 out', 'Bianca Rocha', 5], ['Padaria Central', 'Plano Pro', 18600, '20 out', 'Rafael Lima', 1]]], ['Contato', [['Bistrô Verde', 'Plano Pro', 22800, '15 out', 'Marina Costa', 4], ['Café do Largo', 'Plano Essencial', 9600, '18 out', 'Rafael Lima', 9]]], ['Agendamento', [['Pizzaria Napoli', 'Plano Pro', 22800, '10 out', 'Bianca Rocha', 3]]], ['Reunião', [['Clínica Sorriso', 'Plano Enterprise', 64000, '08 out', 'Marina Costa', 6], ['Ótica Visão', 'Plano Pro', 22800, '11 out', 'Rafael Lima', 2]]], ['Proposta', [['Mercado Bom Preço', 'Plano Enterprise', 96000, '05 out', 'Rafael Lima', 12], ['Academia Pulse', 'Plano Pro', 26400, '09 out', 'Bianca Rocha', 4]]], ['Negociação', [['Churrascaria Gaúcha', 'Plano Enterprise', 72000, '03 out', 'Marina Costa', 16], ['Sushi Hana', 'Plano Pro', 31200, '06 out', 'Bianca Rocha', 3]]], ['Ganho', [['Auto Peças Silva', 'Plano Pro', 28800, '28 set', 'Rafael Lima', 0]]]];
  var id = 0,
    stages = dealsBase.map(function (s) {
      return {
        name: s[0],
        deals: s[1].map(function (d) {
          return {
            id: ++id,
            empresa: d[0],
            produto: d[1],
            valor: d[2],
            previsao: d[3],
            owner: d[4],
            dias: d[5],
            stalled: d[5] >= 10
          };
        })
      };
    });
  var acts = [{
    id: 1,
    type: 'ligacao',
    title: 'Ligar para Dogão do João',
    lead: 'Maringá, PR',
    note: '2ª tentativa',
    time: '09:30',
    contato: 'Tentando contato',
    bucket: 'hoje'
  }, {
    id: 2,
    type: 'whatsapp',
    title: 'Enviar proposta para Padaria Central',
    lead: 'Londrina, PR',
    time: '11:00',
    bucket: 'hoje'
  }, {
    id: 3,
    type: 'reuniao',
    title: 'Reunião de diagnóstico: Clínica Sorriso',
    lead: 'Londrina, PR',
    time: '14:00',
    bucket: 'hoje'
  }, {
    id: 4,
    type: 'email',
    title: 'Follow-up para Mercado Bom Preço',
    lead: 'Cascavel, PR',
    time: '16:30',
    bucket: 'hoje'
  }, {
    id: 5,
    type: 'ligacao',
    title: 'Ligar para Bistrô Verde',
    lead: 'Curitiba, PR',
    note: 'Retorno combinado',
    time: 'Ontem',
    late: true,
    bucket: 'atrasadas'
  }, {
    id: 6,
    type: 'whatsapp',
    title: 'Confirmar reunião com Ótica Visão',
    lead: 'Maringá, PR',
    time: '2 dias',
    late: true,
    bucket: 'atrasadas'
  }, {
    id: 7,
    type: 'tarefa',
    title: 'Preparar contrato de Churrascaria Gaúcha',
    lead: 'Foz do Iguaçu, PR',
    time: '02 out',
    bucket: 'proximas'
  }, {
    id: 8,
    type: 'ligacao',
    title: 'Ligar para Academia Pulse',
    lead: 'Curitiba, PR',
    time: '03 out',
    bucket: 'proximas'
  }];
  var bases = [{
    id: 1,
    nome: 'Restaurantes Maringá',
    leads: 1240,
    qual: 312,
    data: '12 set',
    tipo: 'Planilha'
  }, {
    id: 2,
    nome: 'Padarias Norte do Paraná',
    leads: 860,
    qual: 204,
    data: '03 set',
    tipo: 'Planilha'
  }, {
    id: 3,
    nome: 'Clínicas Londrina',
    leads: 420,
    qual: 96,
    data: '28 ago',
    tipo: 'Receita Federal'
  }, {
    id: 4,
    nome: 'Varejo Cascavel',
    leads: 2000,
    qual: 0,
    data: '15 ago',
    tipo: 'Planilha'
  }];
  window.SOData = {
    leads: leads,
    stages: stages,
    acts: acts,
    bases: bases
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sales-os/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Dropdown = __ds_scope.Dropdown;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.ActivityRow = __ds_scope.ActivityRow;

__ds_ns.LeadCard = __ds_scope.LeadCard;

__ds_ns.PipelineCard = __ds_scope.PipelineCard;

__ds_ns.AreaChart = __ds_scope.AreaChart;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.BulkActionBar = __ds_scope.BulkActionBar;

__ds_ns.ChartContainer = __ds_scope.ChartContainer;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.FilterBar = __ds_scope.FilterBar;

__ds_ns.FunnelChart = __ds_scope.FunnelChart;

__ds_ns.KpiCard = __ds_scope.KpiCard;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.DateRangeSelector = __ds_scope.DateRangeSelector;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.PageHeader = __ds_scope.PageHeader;

__ds_ns.Sidebar = __ds_scope.Sidebar;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.ConfirmDialog = __ds_scope.ConfirmDialog;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Toast = __ds_scope.Toast;

})();
