import React from 'react';
import './footer.css';
import { useDarkMode } from '../../ThemeContext';

const Footer = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <footer className='footer'>
        <div className='footer__container container'>
          <h1 className='footer__title'>Linas</h1>
          <ul className='footer__list'>
            <li>
              <a href='#about' className='footer__link'>
                About
              </a>
            </li>
            <li>
              <a href='#portfolio' className='footer__link'>
                Project
              </a>
            </li>
          </ul>
          <div className='footer__social'>
            <a
              href='https://www.facebook.com'
              className='footer__social-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='bx bxl-facebook-circle'></i>
            </a>

            <a
              href='https://www.linkedin.com/in/linas-ulevi%C4%8Dius-48366113b/'
              className='footer__social-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='bx bxl-linkedin-square'></i>
            </a>
            <a
              href='https://github.com/L11nas'
              className='footer__social-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='bx bxl-github'></i>
            </a>
          </div>
          <span className='footer__copy'>All Rights Reserved</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
