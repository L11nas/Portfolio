import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useDarkMode } from '../../ThemeContext';
import '../Home/scrollDown.css'; // Make sure this matches the exact filename

const ScrollDown = () => {
  const { language } = useLanguage();
  const { darkMode } = useDarkMode();

  const translations = {
    LT: {
      scrollText: 'Slinkite žemyn',
    },
    EN: {
      scrollText: 'Scroll down',
    },
  };

  const t = translations[language] || translations.EN;

  const scrollToNextSection = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`scroll-down-container ${darkMode ? 'dark-mode' : ''}`}
      data-aos='fade-up'
      data-aos-delay='800'
    >
      <button
        className='scroll-down-button'
        onClick={scrollToNextSection}
        aria-label={t.scrollText}
      >
        <div className='scroll-down-text'>{t.scrollText}</div>
        <div className='scroll-down-arrow'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  );
};

export default ScrollDown;
