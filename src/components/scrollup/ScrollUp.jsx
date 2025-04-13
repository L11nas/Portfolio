import React, { useEffect, useState } from 'react';
import './scrollup.css';
import { useLanguage } from '../../context/LanguageContext';
import { useDarkMode } from '../../ThemeContext';

const ScrollUp = () => {
  const { language } = useLanguage();
  const { darkMode } = useDarkMode();
  const [isVisible, setIsVisible] = useState(false);

  // Vertimų objektas
  const translations = {
    LT: {
      ariaLabel: 'Grįžti į viršų',
      tooltip: 'Į viršų',
    },
    EN: {
      ariaLabel: 'Return to top',
      tooltip: 'Go to top',
    },
  };

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`scrollup ${isVisible ? 'show-scroll' : ''} ${
        darkMode ? 'dark-mode' : ''
      }`}
      aria-label={t.ariaLabel}
      onClick={scrollToTop}
      title={t.tooltip}
    >
      <i className='bx bx-up-arrow-alt scrollup__icon' aria-hidden='true'></i>
    </button>
  );
};

export default ScrollUp;
