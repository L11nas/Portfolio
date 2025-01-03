import React from 'react';

const Data = () => {
  const handleSayHello = () => {
    window.location.href = '#Kontaktai';
  };
  return (
    <div className='home__data'>
      <h1 className='home__title'>Linas</h1>
      <h3 className='home__subtitle'>Front-end programuotojas</h3>
      <p className='home__description'>
        Jūsų vizija, mano pastangos. Kuriu paprastus, bet funkcionalius
        sprendimus jūsų idėjoms!
      </p>

      <button id='helloButton' onClick={handleSayHello}>
        Labas
      </button>
    </div>
  );
};
export default Data;
