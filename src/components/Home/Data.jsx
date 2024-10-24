import React from 'react';

const Data = () => {
  const handleSayHello = () => {
    // Change the URL to '/contact'
    window.location.href = '#contact';
  };
  return (
    <div className='home__data'>
      <h1 className='home__title'>Linas Ulevičius</h1>
      <h3 className='home__subtitle'>Front End Developer</h3>
      <p className='home__description'>
        Jūsų vizija, mano kodas, sukurkime kažką nepaprasto!
      </p>

      <button id='helloButton' onClick={handleSayHello}>
        Labas
      </button>
    </div>
  );
};
export default Data;
