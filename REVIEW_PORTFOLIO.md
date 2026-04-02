# Revisão rápida do portfólio

## Pontos fortes

- Estrutura em componentes está clara e fácil de manter (`Navbar`, `Home`, `Project`, `Contacts`, `Footer`).
- Visual consistente com tema centralizado no `GlobalStyle`.
- Dados pessoais centralizados em `src/utils/userData.ts`, o que facilita personalização.

## Melhorias prioritárias

1. **Acessibilidade (alto impacto)**
   - Incluir navegação por teclado e foco visível em todos os links/botões.
   - Revisar hierarquia de headings (`h1`, `h2`, etc.) para semântica correta em toda a página.
   - Adicionar `aria-label` em links que exibem só ícone.

2. **SEO e conteúdo (alto impacto)**
   - Adicionar `meta description`, `og:title`, `og:description` e `og:image` no `index.html`.
   - Transformar o texto de apresentação em blocos menores para aumentar legibilidade.
   - Destacar resultados concretos nos projetos (ex.: métricas, stack, problema resolvido).

3. **Conversão/contato (alto impacto)**
   - Criar um CTA principal único no topo (ex.: “Fale comigo”).
   - Adicionar botão de download de currículo (PDF).
   - Incluir formulário curto de contato (nome, e-mail, mensagem) com validação.

4. **Projetos (médio impacto)**
   - Ordenar projetos por relevância.
   - Mostrar status (em produção, estudo, legado) e responsabilidades.
   - Considerar carregar projetos via API do GitHub com cache para reduzir manutenção manual.

5. **Performance (médio impacto)**
   - Otimizar imagens e considerar formatos modernos (`webp`/`avif`).
   - Avaliar lazy loading para imagens abaixo da dobra.
   - Revisar animações em dispositivos móveis para evitar engasgos.

## Ajustes aplicados nesta revisão

- Corrigido link de e-mail para usar `mailto:` corretamente.
- Corrigido link de WhatsApp para formato consistente, removendo caracteres inválidos.
- Melhorada segurança dos links externos com `rel="noreferrer"`.
- Removido código não utilizado no componente de projetos.

