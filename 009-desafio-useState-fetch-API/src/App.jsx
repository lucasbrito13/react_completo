import React from 'react';
import Produto from './produto';

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);
  const [clickedButton, setClickedButton] = React.useState('');

  async function handleClick(event) {
    setCarregando(true);
    const produto = event.target.innerText.toLowerCase();
    setClickedButton(produto);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${produto}`,
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  const botaoStyle = (nome) => ({
    height: '2rem',
    margin: '.5rem',
    backgroundColor: clickedButton === nome ? '#555' : '#ccc',
    color: '#000',
    border: 'none',
    padding: '0 1rem',
    cursor: 'pointer',
  });

  return (
    <div>
      <button onClick={handleClick} style={botaoStyle('tablet')}>
        tablet
      </button>
      <button onClick={handleClick} style={botaoStyle('notebook')}>
        notebook
      </button>
      <button onClick={handleClick} style={botaoStyle('smartphone')}>
        smartphone
      </button>

      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  );
};

export default App;
