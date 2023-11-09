import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Linas</h1>
        <ul className='footer__list'>
          <li>
            <a href='#About' className='footer__link'>
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
            <i className='uil uil-github'></i>
          </a>
        </div>
        <span className='footer__copy'>
          &#169;LinasWebStudio. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
export default Footer;
