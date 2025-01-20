import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Data = () => {
  const { language } = useLanguage();

  // Vertimų objektas
  const translations = {
    LT: {
      title: 'Linas',
      subtitle: 'Front-end programuotojas',
      description:
        'Jūsų vizija, mano pastangos. Kuriu paprastus, bet funkcionalius sprendimus jūsų idėjoms!',
      button: 'Labas',
    },
    EN: {
      title: 'Linas',
      subtitle: 'Front-end Developer',
      description:
        'Your vision, my effort. I create simple yet functional solutions for your ideas!',
      button: 'Hello',
    },
  };

  const t = translations[language];

  const handleSayHello = () => {
    window.location.href = '#contact';
  };

  return (
    <div className='home__data'>
      <h1 className='home__title'>{t.title}</h1>
      <h3 className='home__subtitle'>{t.subtitle}</h3>
      <p className='home__description'>{t.description}</p>

      <button id='helloButton' onClick={handleSayHello}>
        {t.button}
      </button>
    </div>
  );
};

export default Data;
