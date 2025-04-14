import React, { useEffect } from 'react';
import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import { useDarkMode } from '../../ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
// Importuokite nuotrauką - pakeiskite kelią į savo tikrą kelią
import ProfileImage from '/src/assets/portfolio.jpg';

const Home = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  // Pridėkite preload hint dinamiškai
  useEffect(() => {
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = ProfileImage;
    preloadLink.fetchpriority = 'high';
    document.head.appendChild(preloadLink);

    return () => {
      if (document.head.contains(preloadLink)) {
        document.head.removeChild(preloadLink);
      }
    };
  }, []);

  // Vertimų objektas
  const translations = {
    LT: {
      sectionTitle: 'Pradžia',
      profileAlt: 'Linas Ulevičius profilio nuotrauka',
    },
    EN: {
      sectionTitle: 'Home',
      profileAlt: 'Linas Ulevičius profile picture',
    },
  };

  const t = translations[language];

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <section className='home__section' id='home'>
        <div className='home__container container'>
          <div className='home__content'>
            <Social />

            <div className='home__img-content-wrapper'>
              <div className='home__img-container'>
                <img
                  src={ProfileImage}
                  alt={t.profileAlt}
                  className='home__img'
                  loading='eager'
                  fetchpriority='high'
                  width='300'
                  height='300'
                />
              </div>

              <Data />
            </div>
          </div>

          <ScrollDown />
        </div>
      </section>
    </div>
  );
};

export default Home;
