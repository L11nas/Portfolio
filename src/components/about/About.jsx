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
        <span className='section__subtitle'></span>
        <div className='about__container container__grid'>
          <div className='about__data'>
            <Info />
            <p className='about__description'>
              Esu front-end junior programuotojas, kuris domisi įdomiomis ir
              nestandartinėmis idėjomis. Mano aistra kurti interaktyvias ir
              vizualiai patrauklias naudotojo sąsajas skatina nuolat mokytis ir
              tobulėti. Man patinka eksperimentuoti su naujomis technologijomis
              ir sprendimais, kad įgyvendinčiau savo vizijas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
