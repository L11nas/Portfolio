import React from 'react';
import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import { useDarkMode } from '../../ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

const Home = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  // Jei reikia, pridėkite vertimų objektą
  const translations = {
    LT: {
      sectionTitle: 'Pradžia',
    },
    EN: {
      sectionTitle: 'Home',
    },
  };

  const t = translations[language];

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <section className='home__section' id='home'>
        <div className='home__container container grid'>
          <div className='home__content grid'>
            <Social />
            <div className='home__img'></div>

            <Data />
          </div>
          <ScrollDown />
        </div>
      </section>
    </div>
  );
};

export default Home;
