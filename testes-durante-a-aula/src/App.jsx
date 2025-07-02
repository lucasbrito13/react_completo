import React from 'react';
import Header from './Header';
import Footer from './Footer';


const Titulo = (props) => {
  return <h1 style={{color: props.cor}}>{props.texto}</h1>
}

const App = () => {
  return (
    <div>
      <p> <Titulo texto="Fazendo testes" cor="blue"/> </p>
      <p> <Titulo texto="Novo teste" cor="Pink" /> </p>
      <Header />
      <Footer /> 
    </div>
  );
};

export default App;
