import React from 'react';
import './work.css';
import Works from './Works';
import { useDarkMode } from '../../ThemeContext';
const Work = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <section className='work section' id='portfolio'>
        <h2 className='section__title'>Portfolio</h2>
        <span className='section__subtitle'></span>
        <Works />
      </section>
    </div>
  );
};
export default Work;
