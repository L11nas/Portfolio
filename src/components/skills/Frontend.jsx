import React from 'react';
import { useDarkMode } from '../../ThemeContext';
const Frontend = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={`skills__content ${darkMode ? 'dark-mode' : ''}`}>
      <h3 className='skills__title'>Frontend</h3>

      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>HTML</h3>
              <span className='skills__level'>Mid-level</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>CSS</h3>
              <span className='skills__level'>Mid-level</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>JavaScript</h3>
              <span className='skills__level'>Mid-level</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>Git</h3>
              <span className='skills__level'>Mid-level</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className='skills__name'>ReactJS</h3>
              <span className='skills__level'>Mid-level</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Frontend;
