import React from 'react';
import useLocalStorage from './useLocalStorage';

const App = () => {
  const [mensagem, setMensagem] = useLocalStorage('mensagem', []);
  const [input, setInput] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === '') return;

    const novasMensagens = [...mensagem, input];
    setMensagem(novasMensagens);
    setInput('');
  };

  function clearMenssage() {
    setMensagem([]);
  }

  return (
    <div>
      <h1>Mensagens</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(evento) => setInput(evento.target.value)}
          placeholder="Digite sua mensagem"
        />
        <button type="submit">Enviar</button>
      </form>
      <button onClick={clearMenssage}>Limpar Mensagens</button>

      <ul>
        {mensagem.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
