import React from "react";

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};
  const App = () => {
  const dados = mario; // ou luana

  const total = dados.compras.map(item => Number(item.preco.replace('R$ ',''))).reduce((totalCompras, preco) => totalCompras + preco, 0) 

  const avisoComprasAltas = total > 10000 ? (
    <p style={{color: 'red'}} > Suas compras estão muito altas, reduza os seus gastos!</p>
  ) : null;

  return (
    <div 
    style={{
      height: '100vh',
      backgroundColor: '#8FBABF',
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center',
      justifyContent: 'center',

    }}>
      <section
      style={{
        height: '350px',
        width: '300px',
        padding:'10px',
        borderRadius:'5px',
        boxShadow:'1px 1px 1px black',
        backgroundColor: 'white'
      }}
      >
      <h1>Nome: {dados.cliente}</h1>
      <p>Idade: {dados.idade}</p>
      <p style={{
        color: "white",
        backgroundColor: dados.ativa ? 'green' : 'red',
        padding: '3px',
        width: '50px',
        borderRadius:'5px'
        }}>{dados.ativa ? 'Ativa' : 'Inativa'}
        </p>
        <h2>Compas:</h2>
        <ul>
          {dados.compras.map((item, index) => (
            <li key={index}>
              {item.nome} - {item.preco}
            </li>
            ))}
        </ul>
        <p>
          Total das compras: {total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})}
        </p>

        {avisoComprasAltas}
        </section>
    </div>
  )
};

export default App