import React from 'react';
import Modal from './Modal';
import ButtonModal from './ButtonModal';

const App = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      <Modal modal={modal} setModal={setModal}/>
      <ButtonModal modal={modal} setModal={setModal} />
    </div>
  );
};

export default App;
