import React from 'react';
import { ContextoGlobal } from './ContextoGlobal';

const Produto = () => {
  const global = React.useContext(ContextoGlobal);
  return(
    <div> {global.dados === null ? (<p>Nenhum produto disponível.</p>) : (
      <>
      {global.dados.map((produto)=>(
        <>
        <h1>{produto.nome}</h1>
        <p>Preço: R${produto.preco}</p>
        </>
        ))}
      </>
    )}
    {global.dados && (<button onClick={global.limparDados}>Limpar Dados</button>)}
    <button onClick={global.voltarDados}>Voltar Dados</button>
    </div>
  );
};

export default Produto;
