import React from 'react';
import scrollSvg from '/scroll-down.svg';
import { useLanguage } from '../../context/LanguageContext';

const ScrollDown = () => {
  const { language } = useLanguage();

  // Translation object
  const translations = {
    LT: {
      scrollName: 'Slinkite žemyn',
      ariaLabel: 'slinkti žemyn į Apie skyrių',
    },
    EN: {
      scrollName: 'Scroll Down',
      ariaLabel: 'scroll down to About Section',
    },
  };

  const t = translations[language];

  const handleScroll = (event) => {
    event.preventDefault(); // Prevent default anchor click behavior
    const targetSection = document.querySelector('#about');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='home__scroll'>
      <a
        href='#Apie'
        className='home__scroll-button button--flex'
        aria-label={t.ariaLabel}
        onClick={handleScroll} // Use the handleScroll function
        tabIndex='0'
      >
        <img src={scrollSvg} alt='Scroll Down' className='home__scroll-arrow' />
        <span className='home__scroll-name'>{t.scrollName}</span>
        <i className='uil uil-arrow-down home__scroll-arrow'></i>
      </a>
    </div>
  );
};

export default ScrollDown;
