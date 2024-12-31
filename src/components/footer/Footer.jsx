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
          <nav>
            <ul className='footer__list'>
              <li>
                <a href='#Apie' className='footer__link'>
                  Apie
                </a>
              </li>
              <li>
                <a href='#Portfolio' className='footer__link'>
                  Projektas
                </a>
              </li>
            </ul>
          </nav>
          <div className='footer__social'>
            <a
              href='https://www.facebook.com'
              className='footer__social-link'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
              title='Sekite mane Facebook'
            >
              <i className='bx bxl-facebook-circle'></i>
            </a>
            <a
              href='https://lt.linkedin.com/in/linas-ulevi%C4%8Dius-48366113b'
              className='footer__social-link'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
              title='Sekite mus LinkedIn'
            >
              <i className='bx bxl-linkedin-square'></i>
            </a>
            <a
              href='https://github.com/L11nas'
              className='footer__social-link'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
              title='Sekite mus GitHub'
            >
              <i className='bx bxl-github'></i>
            </a>
          </div>
          <span className='footer__copy'>
            Visos teisės saugomos &reg; Linas
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
