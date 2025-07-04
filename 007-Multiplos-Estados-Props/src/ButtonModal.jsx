import React from 'react';

const ButtonModal = ({modal, setModal}) => {
  if (modal) return null;

  return <button onClick={() => setModal(true)}>Abrir modal</button>;
}

export default ButtonModal;
