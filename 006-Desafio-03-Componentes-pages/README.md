# 🧩 Desafio de Componentes com React

Este projeto foi desenvolvido como parte de um desafio prático em React, com o objetivo de aplicar conceitos como **componentização**, **props**, **renderização condicional** e uso do objeto `window.location` para simular rotas simples.

## 📋 Descrição do desafio

O exercício consistia em:

- Reproduzir uma interface apresentada em aula.
- Utilizar a array de produtos fornecida para exibir informações dinamicamente.
- Dividir o código em **componentes reutilizáveis**, como `Titulo`, `Produto` e `Header`.
- Simular navegação entre páginas (Home e Produtos) utilizando:
  ```js
  const { pathname } = window.location;

## 📁 Estrutura de Arquivos

```text
src/
├── App.jsx
├── Header.jsx
├── Home.jsx
├── Produto.jsx
├── Produtos.jsx
├── Titulo.jsx
└── main.jsx
```

## 🧪 Array de produtos usada
```js
const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];
```

## 🛠️ Tecnologias utilizadas
- React
- Vite (ambiente de desenvolvimento)
- JavaScript (ES6+)
- HTML5 & CSS3 (via JSX inline styles)

## ✨ Resultado esperado
- Página inicial com título "Home" e descrição do desafio.
- Página "Produtos" com dois produtos listados, cada um com suas propriedades.
- Navegação simples entre as páginas via URL.

## 📌 Observações
- Este projeto não utiliza bibliotecas de roteamento como react-router-dom. A navegação é controlada manualmente via window.location.pathname.
- O projeto foca na prática de componentização e props no React.
