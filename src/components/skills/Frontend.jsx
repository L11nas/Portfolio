import React from 'react';
import { useDarkMode } from '../../ThemeContext';

const Frontend = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`skills__content ${darkMode ? 'dark-mode' : ''}`}>
      <h3 className='skills__title'>Frontend</h3>
      <div
        className='skills__box'
        role='group'
        aria-labelledby='frontend-skills'
      >
        <div className='skills__group' id='frontend-skills'>
          {['HTML', 'CSS', 'JavaScript', 'Git', 'ReactJS'].map((skill) => (
            <div className='skills__data' key={skill}>
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className='skills__name'>{skill}</h3>
                <span className='skills__level'>Mid-level</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
