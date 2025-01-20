import React, { useEffect } from 'react';
import './scrollup.css';
import { useLanguage } from '../../context/LanguageContext';

const ScrollUp = () => {
  const { language } = useLanguage();

  // Vertimų objektas
  const translations = {
    LT: {
      ariaLabel: 'Grįžti į viršų',
    },
    EN: {
      ariaLabel: 'Return to top',
    },
  };

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector('.scrollup');
      if (window.scrollY >= 50) {
        scrollUp.classList.add('show-scroll');
      } else {
        scrollUp.classList.remove('show-scroll');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a
      href='#top'
      className='scrollup scrollup__icon'
      aria-label={t.ariaLabel}
      role='button'
      tabIndex={0}
    >
      <i className='bx bx-up-arrow-circle' aria-hidden='true'></i>
    </a>
  );
};

export default ScrollUp;
