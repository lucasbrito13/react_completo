import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setDados(json));
  },[]);

  function limparDados() {
    setDados(null)
  }
  function voltarDados() {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }

  return (
    <GlobalContext.Provider value={{ dados, limparDados, voltarDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
