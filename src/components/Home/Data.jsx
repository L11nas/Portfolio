import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Data = () => {
  const { language } = useLanguage();

  const translations = {
    LT: {
      greeting: 'Sveiki, aš esu',
      name: 'Linas',
      profession: 'Front-end programuotojas',
      description:
        'Esu patikimas ir profesionalus programuotojas, kuriantis modernias svetaines ir aplikacijas su React, kuriuos optimizuoti įvairiems įrenginiams.',
      button: 'Susisiekite',
    },
    EN: {
      greeting: "Hello, I'm",
      name: 'Linas',
      profession: 'Front-end Developer',
      description:
        "I'm a reliable and professional developer creating modern websites and applications with React, optimized for various devices.",
      button: 'Contact Me',
    },
  };

  const t = translations[language] || translations.EN;

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='home__data'>
      <h1 className='home__title'>
        {t.greeting} <br />
        <span>{t.name}</span>
      </h1>

      <h3 className='home__subtitle'>{t.profession}</h3>
      <p className='home__description'>{t.description}</p>

      <button id='helloButton' onClick={scrollToContact}>
        {t.button} &nbsp; <i className='uil uil-message'></i>
      </button>
    </div>
  );
};

export default Data;
