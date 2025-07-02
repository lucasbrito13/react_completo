import React from 'react'
import  Titulo  from './Titulo';

const Home = () => {
  return (
    <section>
      <Titulo texto="Home" />
      <p style={{ maxWidth: "60ch", lineHeight: "1.5" }}>
        Este projeto foi realizado como um desafio prático em React. A proposta era reproduzir a estrutura de uma interface apresentada em aula, utilizando uma lista de produtos para exibir informações dinâmicas na tela. 
        O desafio também exigia a separação do código em componentes reutilizáveis, como <strong>Titulo</strong> e <strong>Produto</strong>, a fim de promover a organização e a reutilização do código. 
        A navegação entre as páginas "Home" e "Produtos" foi implementada com base no caminho da URL (<code>window.location.pathname</code>), sem o uso de bibliotecas externas de roteamento.
      </p>
    </section>
  )
}

export default Home;
