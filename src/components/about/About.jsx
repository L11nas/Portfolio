import React from 'react';
import './about.css';
import Info from './Info';
import { useDarkMode } from '../../ThemeContext';

const About = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <section className='about__section' id='Apie'>
        <h2 className='section__title'>Apie mane</h2>
        <span className='section__subtitle'>Front-end programuotojas</span>
        <div className='about__container container__grid'>
          <div className='about__data'>
            <Info />
            <p className='about__description'>
              Kaip front-end junior programuotojas, specializuojuosi kuriant
              švarius ir funkcionalius dizainus, pritaikytus tiek stacionariems,
              tiek mobiliems įrenginiams. Man patinka kurti dinamiškus
              sprendimus, naudojant HTML, CSS, JavaScript ir React.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
