import React from 'react';
import { useDarkMode } from '../../ThemeContext';

const Info = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`about__info grid ${darkMode ? 'dark-mode' : ''}`}>
      <div className='about__box'>
        <i className='bx bx-award about__icon'></i>

        <h3 className='about__title'>Patirtis</h3>
        <span className='about__subtitle'>1,5 metai.</span>
      </div>
      <div className='about__box'>
        <i className='bx bx-briefcase-alt about__icon'></i>
        <h3 className='about__title'>Užbaigti projektai</h3>
        <span className='about__subtitle'>2 projektai</span>
      </div>
      <div className='about__box'>
        <i className='bx bx-support about__icon'></i>
        <h3 className='about__title'>Pagalba</h3>
        <span className='about__subtitle'>24/7</span>
      </div>
    </div>
  );
};

export default Info;
