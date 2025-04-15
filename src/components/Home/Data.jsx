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
        'Esu profesionalus front-end programuotojas, kuriantis modernias ir greitas svetaines su React. Specializuojuosi responsyviame dizaino kūrime ir SEO optimizuotuose sprendimuose, kurie puikiai veikia visuose įrenginiuose.',
      button: 'Susisiekite',
    },
    EN: {
      greeting: "Hello, I'm",
      name: 'Linas',
      profession: 'Front-end Developer',
      description:
        'I’m a professional front-end developer building fast, modern websites and applications using React. I specialize in responsive design and SEO-friendly solutions that work seamlessly across all devices.',
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
