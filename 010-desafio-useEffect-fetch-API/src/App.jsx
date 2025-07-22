import React from 'react';
import Produto from './Produto';

const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoSalvo = window.localStorage.getItem('produto');
    if (produtoSalvo !== null) setProduto(produtoSalvo);
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }
  

  return (
    <div>
      <p>Retorno do botão: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <Produto produto={produto} />
    </div>
  );
};

export default App;
