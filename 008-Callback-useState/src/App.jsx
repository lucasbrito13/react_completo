import React from 'react';

const App = () => {
  const [contar, setContar] = React.useState(1);
  const [click, setClick] = React.useState(['Click 1'])
  function handleClick() {
    setContar(contar +1)
    setClick((click) => [...click, 'Click' + (contar + 1)]);
  }

  return (
    <div>
      {click.map((click) => (
        <li key={click}>{click}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};

export default App;
