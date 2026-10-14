# Instruções para agentes de desenvolvimento

Este arquivo é um template para ser copiado para o repositório de implementação quando ele existir. Ele não altera as instruções globais da máquina.

## Princípios

- Leia `outputs/spec-gptmaker/README.md` e o documento do seu módulo antes de editar.
- Preserve a stack decidida: Next.js App Router, TypeScript strict, worker Node, PostgreSQL, Auth.js, Drizzle e pg-boss.
- UI e microcopy em pt-BR; código, rotas, pacotes, commits e enums em inglês.
- Você não está sozinho no código. Não reverta alterações feitas por outros agentes.
- Declare ownership dos arquivos antes de editar quando houver trabalho paralelo.
- Não crie recurso pago, deploy, remote GitHub, domínio ou credencial real sem autorização humana.
- Não chame GPT Maker do browser.
- Não exponha token, senha de banco, chave de cifra, URL assinada ou payload sensível.
- Não libere capability sem evidência autenticada.

## Gates

P0 de segurança bloqueia piloto:

- isolamento entre organizações;
- segredos fora do cliente/logs;
- operação externa durável;
- timeout sem retry cego;
- auditoria de ações sensíveis;
- backup/restore exercitado antes de dados reais.

## Organização de trabalho

Siga os owners de `06-AGENTES-E-SKILLS.md`:

- A00 coordenação;
- A01 produto;
- A02 UX/design;
- A03 frontend;
- A04 backend/BFF;
- A05 GPT Maker adapter;
- A06 dados/Auth.js/isolamento;
- A07 worker/jobs;
- A08 QA;
- A09 segurança;
- A10 DevOps.

PRs devem citar FR/UI/QA/BK e testes executados.
