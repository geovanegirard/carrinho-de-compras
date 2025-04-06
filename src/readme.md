<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: auto; padding: 20px;">

  <h1>🛒 Shopee Cart (Carrinho de Compras)</h1>
  <p>
    Este é um projeto simples de um sistema de carrinho de compras, desenvolvido em <strong>JavaScript (ES Modules)</strong>,
    simulando o processo de adicionar, remover e calcular o total de itens no carrinho — semelhante ao funcionamento de um e-commerce como a Shopee.
  </p>

  <hr>

  <h2>🚀 Funcionalidades</h2>
  <ul>
    <li>✅ Adicionar itens ao carrinho</li>
    <li>🗑️ Remover itens individualmente (quantidade -1)</li>
    <li>❌ Deletar item por completo</li>
    <li>💰 Calcular o total geral da compra</li>
    <li>📄 Exibir os itens do carrinho com subtotal atualizado</li>
  </ul>

  <hr>

  <h2>📁 Estrutura do Projeto</h2>
  <pre><code>
📦shopee-cart
 ┣ 📜index.js
 ┣ 📂services
 ┃ ┣ 📜cart.js
 ┃ ┗ 📜item.js
  </code></pre>

  <hr>

  <h2>📌 Tecnologias Utilizadas</h2>
  <ul>
    <li>JavaScript</li>
    <li>Node.js</li>
  </ul>

  <hr>

  <h2>🔍 Etapas do Projeto</h2>

  <h3>1. Criação de itens (<code>item.js</code>)</h3>
  <p>Cria objetos com nome, preço, quantidade e uma função <code>subtotal()</code> dinâmica que calcula o subtotal com base na quantidade atual.</p>

  <h3>2. Gerenciamento do carrinho (<code>cart.js</code>)</h3>
  <ul>
    <li><code>addItem()</code>: Adiciona um item ao carrinho.</li>
    <li><code>removeItem()</code>: Remove uma unidade do item (se <code>quantity > 1</code>, subtrai 1; senão, remove do carrinho).</li>
    <li><code>deleteItem()</code>: Remove o item por completo pelo nome.</li>
    <li><code>displayCart()</code>: Exibe todos os itens com preço, quantidade e subtotal.</li>
    <li><code>calculateTotal()</code>: Soma todos os subtotais e exibe o total final do carrinho.</li>
  </ul>

  <h3>3. Execução principal (<code>index.js</code>)</h3>
  <p>Cria os itens, adiciona ao carrinho, executa remoções e exibe o conteúdo e total final do carrinho.</p>

  <hr>

  <h2>📦 Exemplo de Saída</h2>
  <pre><code>
Welcome to the your Shopee cart!

Shopee cart list: 
1. Tela para projetor - R$ 88.99 | 2X | Subtotal = 177.98

Shopee cart TOTAL is: 
🛒Total: 177.98
  </code></pre>

  <hr>

  <h2>✍️ Autor</h2>
  <p>
    Desenvolvido por <strong>Geovane Girard</strong><br>
    Entre em contato: <a href="mailto:g.ng2009@hotmail.com">g.ng2009@hotmail.com</a> |
    <a href="https://github.com/geovanegirard" target="_blank">GitHub</a>
  </p>

</body>
</html>
