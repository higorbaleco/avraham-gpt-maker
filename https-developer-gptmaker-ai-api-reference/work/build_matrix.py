import json,re,hashlib
from pathlib import Path
s=json.load(open('work/openapi.json'))
def schema(v):
 if '$ref' in v: return v['$ref'].split('/')[-1]
 if 'oneOf' in v:return ' OU '.join((x.get('title','Variante')+': '+schema(x)) for x in v['oneOf'])
 if v.get('type')=='array':return 'lista de '+schema(v.get('items',{}))
 if 'properties' in v:return ', '.join('`'+k+'`'+(' (obrigatório)' if k in v.get('required',[]) else '') for k in v['properties']) or 'objeto vazio'
 return v.get('type','sem schema detalhado')
def area(p):
 if 'trainings' in p or '/training/' in p:return 'Conhecimento'
 if 'idle-actions' in p or 'transfer-rules' in p:return 'Automações'
 if 'mcp' in p or 'intention' in p:return 'Ferramentas'
 if '/chat/' in p or '/chats' in p:return 'Atendimento'
 if 'contact' in p or 'custom-field' in p or p=='/v2/workspace/{workspaceId}/search':return 'Contatos'
 if 'channel' in p or p=='/v2/agent/{agentId}/search':return 'Canais'
 if 'interaction' in p or 'export' in p or 'credits' in p:return 'Indicadores e uso'
 if p=='/v2/workspaces':return 'Conexão e provisionamento'
 return 'Agentes'
def note(p,m,o):
 n=[]
 actual=set(re.findall(r'{([^}]+)}',p));decl={x['name'] for x in o.get('parameters',[]) if x.get('in')=='path'}
 if actual!=decl:n.append('Divergência nos parâmetros de rota: conferir o contrato antes de gerar cliente.')
 if 'trainings' in p and m=='post':n.append('Quatro tipos de criação; confirmar processamento por callback/reconsulta, não apenas sucesso HTTP.')
 if '/training/' in p and m=='put':n.append('Somente texto; demais tipos requerem substituição.')
 if 'start-human' in p:n.append('Não recebe operador local; atribuição e concorrência ficam no nosso sistema.')
 if 'stop-human' in p:n.append('A resposta da IA retorna na próxima interação do cliente.')
 if 'send-message' in p or 'start-conversation' in p:n.append('Envio pode produzir efeito externo; não repetir cegamente após timeout.')
 if 'start-conversation' in p:n.append('Documentado apenas para WhatsApp não oficial.')
 if '/message/{messageId}' in p:n.append('Restrito a Z-API, Telegram e Widget.')
 if '/mcp/' in p and m=='get' and any(x in p for x in ['/active','/inactive','sync-tools']):n.append('GET com alteração de estado: desabilitar cache e prefetch.')
 if 'webhooks' in p:n.append('Configura URLs; payloads e garantias de entrega precisam ser capturados/homologados.')
 if 'create-channel' in p:n.append('Registro de canal não comprova autorização/conexão completa por tipo.')
 if p.endswith('/config'):n.append('Homologar campos por tipo; não enviar tenant recebido do navegador.')
 if '/export' in p:n.append('Descrição CSV versus resposta JSON; formato e filtros precisam ser validados.')
 if p.endswith('/interactions'):n.append('Sem filtro temporal documentado; snapshots locais e reconciliação paginada.')
 if 'credits-spent' in p:n.append('Agregado por data/modelo; não fornece custo individual por chat.')
 if 'conversation' in p and 'start-' not in p:n.append('contextId isolado por organização/sessão; sandbox para testes; callback opcional.')
 if m=='delete':n.append('Operação destrutiva: prever confirmação explícita e escopo.')
 return ' '.join(n) or 'Homologar formato, permissões, paginação quando aplicável e leitura após alteração.'
out=['# Matriz documental da API GPT Maker','', 'Consulta em 09/10/2026. 72 operações. Nenhuma foi homologada em conta autenticada.','', 'Fonte: [OpenAPI oficial](https://developer.gptmaker.ai/api-reference/openapi.json). Os nomes abaixo são elementos de interface técnica. Não são contratos internos já implementados.','', 'Todas as chamadas usam o backend e Bearer do provedor. Toda rota exige verificação local de organização e papel. Campos listados sem marca de obrigatoriedade podem ter exigências reais que o schema não descreve.','']
n=0
for p,ms in s['paths'].items():
 for m,o in ms.items():
  if m not in ['get','post','put','patch','delete']:continue
  n+=1
  body='; '.join(schema(x.get('schema',{})) for x in o.get('requestBody',{}).get('content',{}).values()) or 'Sem corpo documentado'
  response='; '.join(schema(x.get('schema',{})) for x in o.get('responses',{}).get('200',{}).get('content',{}).values()) or 'Sem schema 200 detalhado'
  params=', '.join('`'+x['name']+'` ('+x['in']+(' obrigatório' if x.get('required') else '')+')' for x in o.get('parameters',[])) or 'Nenhum declarado'
  out.extend([f'## {n:02}. {m.upper()} `{p}`','',f'- **Tela/módulo:** {area(p)}.',f'- **Parâmetros:** {params}.',f'- **Corpo:** {body}.',f'- **Resposta 200:** {response}.',f'- **Validação/limite:** {note(p,m,o)}',''])
assert n==72
Path('outputs/MATRIZ-API.md').write_text('\n'.join(out))
print('Matriz criada:',n,'operações.')
print('SHA256 da fonte consultada:',hashlib.sha256(Path('work/openapi.json').read_bytes()).hexdigest())
