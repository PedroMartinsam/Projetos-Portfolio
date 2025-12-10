# 🌿 Calculadora de Emissão de CO₂


Projeto educativo / portfólio que estima emissões de CO₂ por rota e transporte.


## Estrutura
Veja a árvore do projeto no topo deste documento.


## Como usar
1. Abra `index.html` em um servidor local (ou direto no navegador).
2. Selecione origem e destino (datalist com cidades pré-definidas).
3. Se a distância não for encontrada automaticamente, marque "Inserir distância manualmente" e digite o valor.
4. Selecione o meio de transporte e clique em "Calcular Emissão".


## Recursos extras implementados
- Histórico (localStorage) com botão "Ver Histórico" e opção para limpar.
- Tema Dark / Light com persistência em localStorage.
- Score ambiental (Excelente / Médio / Alto impacto).
- Estimativa de compensação (nº de árvores e custo em USD).
- Loader simples durante busca de distância.
- Testes simples em `js/tests.js` para validação básica.
- Hooks para integração com Chart.js para visualização.


## Próximos passos sugeridos
- Integrar com API real de rotas / geocoding (Google Maps, OpenRouteService).
- Adicionar login e backend para armazenar histórico do usuário.
- Implementar PWA (service worker, manifest, instalação).
- Melhorar os valores de emissões com fontes oficiais e parametrizáveis.


## Licença
MIT — sinta-se livre para adaptar e usar.