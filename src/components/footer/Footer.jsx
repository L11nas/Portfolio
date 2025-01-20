import React from 'react';
import './footer.css';
import { useDarkMode } from '../../ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  // Vertimų objektas
  const translations = {
    LT: {
      title: 'Linas',
      about: 'Apie',
      projects: 'Projektas',
      facebookTitle: 'Sekite mane Facebook',
      linkedinTitle: 'Sekite mus LinkedIn',
      githubTitle: 'Sekite mus GitHub',
      copyright: 'Visos teisės saugomos &reg; Linas',
    },
    EN: {
      title: 'Linas',
      about: 'About',
      projects: 'Project',
      facebookTitle: 'Follow me on Facebook',
      linkedinTitle: 'Follow us on LinkedIn',
      githubTitle: 'Follow us on GitHub',
      copyright: 'All rights reserved &reg; Linas',
    },
  };

  const t = translations[language];

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <footer className='footer'>
        <div className='footer__container container'>
          <h1 className='footer__title'>{t.title}</h1>
          <nav>
            <ul className='footer__list'>
              <li>
                <a href='#Apie' className='footer__link'>
                  {t.about}
                </a>
              </li>
              <li>
                <a href='#Portfolio' className='footer__link'>
                  {t.projects}
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
              title={t.facebookTitle}
            >
              <i className='bx bxl-facebook-circle'></i>
            </a>
            <a
              href='https://lt.linkedin.com/in/linas-ulevi%C4%8Dius-48366113b'
              className='footer__social-link'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
              title={t.linkedinTitle}
            >
              <i className='bx bxl-linkedin-square'></i>
            </a>
            <a
              href='https://github.com/L11nas'
              className='footer__social-link'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
              title={t.githubTitle}
            >
              <i className='bx bxl-github'></i>
            </a>
          </div>
          <span
            className='footer__copy'
            dangerouslySetInnerHTML={{ __html: t.copyright }}
          ></span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
