import React from 'react';
import { useDarkMode } from '../../ThemeContext';

const Backend = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`skills__content ${darkMode ? 'dark-mode' : ''}`}>
      <h3 className='skills__title'>Backend</h3>
      <div
        className='skills__box'
        role='group'
        aria-labelledby='backend-skills'
      >
        <div className='skills__group' id='backend-skills'>
          {['NodeJS', 'SQL', 'NoSQL - MongoDB'].map((skill) => (
            <div className='skills__data' key={skill}>
              <i className='bx bx-badge-check'></i>
              <div>
                <h3 className='skills__name'>{skill}</h3>
                <span className='skills__level'>Bazinis</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Backend;
