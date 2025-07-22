import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);
  
  return (
    <div>
      {global.dados === null ? (<p>Nenhum produto disponível.</p>) : (
        <>
        {global.dados.map((produto) => (
          <React.Fragment key={produto.id}>
          <h2>{produto.nome}</h2>
          <p>Preço: R${produto.preco}</p>
          <p>{produto.descricao}</p>
          </React.Fragment>
        ))}
        </>
      )}
      {global.dados && (<button onClick={global.limparDados}>Limpar Dados</button>)}
      
      <button onClick={global.voltarDados}>Voltar Dados</button>
    </div>
  );
};

export default Produto;
