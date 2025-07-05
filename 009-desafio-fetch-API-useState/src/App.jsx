import React from 'react';
import Produto from './produto';

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true)
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <div>
      <button style={{ height: '2rem', margin: '.5rem' }} onClick={handleClick}>
        tablet
      </button>
      <button style={{ height: '2rem', margin: '.5rem' }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ height: '2rem', margin: '.5rem' }} onClick={handleClick}>
        smartphone
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados}/>}
    </div>
  );
};

export default App;
