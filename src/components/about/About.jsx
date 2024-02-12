import React from 'react';
import './about.css';
import img from '/src/assets/portfolio.jpg';
import Info from './Info';
import { useDarkMode } from '../../ThemeContext';

const About = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <section className='about__section' id='about'>
        <h2 className='section__title'>About Me</h2>
        <span className='section__subtitle'></span>
        <div className='about__container container__grid'>
          <img src={img} alt='' className='about__img' />

          <div className='about__data'>
            <Info />
            <p className='about__description'></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
