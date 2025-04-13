import React, { useEffect } from 'react';
import './footer.css';
import { useDarkMode } from '../../ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  // Refresh AOS when component mounts
  useEffect(() => {
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  // Vertimų objektas
  const translations = {
    LT: {
      title: 'Linas',
      subtitle: 'Front-end programuotojas',
      about: 'Apie',
      skills: 'Įgūdžiai',
      services: 'Paslaugos',
      projects: 'Projektai',
      inspiration: 'Įkvėpimas',
      contact: 'Kontaktai',
      facebookTitle: 'Sekite mane Facebook',
      linkedinTitle: 'Sekite mane LinkedIn',
      githubTitle: 'Sekite mane GitHub',
      copyright: 'Visos teisės saugomos © 2023-2024 Linas',
    },
    EN: {
      title: 'Linas',
      subtitle: 'Front-end Developer',
      about: 'About',
      skills: 'Skills',
      services: 'Services',
      projects: 'Projects',
      inspiration: 'Inspiration',
      contact: 'Contact',
      facebookTitle: 'Follow me on Facebook',
      linkedinTitle: 'Follow me on LinkedIn',
      githubTitle: 'Follow me on GitHub',
      copyright: 'All rights reserved © 2023-2024 Linas Ulevičius',
    },
  };

  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${darkMode ? 'dark-mode' : ''}`}>
      <div className='footer__container container'>
        <div className='footer__content'>
          <div
            className='footer__info'
            data-aos='fade-right'
            data-aos-delay='100'
          >
            <h1 className='footer__title'>{t.title}</h1>
            <p className='footer__subtitle'>{t.subtitle}</p>
          </div>

          <div
            className='footer__links'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            <h3 className='footer__links-title'>
              {language === 'LT' ? 'Navigacija' : 'Navigation'}
            </h3>
            <nav>
              <ul className='footer__list'>
                <li>
                  <a href='#about' className='footer__link'>
                    {t.about}
                  </a>
                </li>
                <li>
                  <a href='#skills' className='footer__link'>
                    {t.skills}
                  </a>
                </li>
                <li>
                  <a href='#services' className='footer__link'>
                    {t.services}
                  </a>
                </li>
                <li>
                  <a href='#projects' className='footer__link'>
                    {t.projects}
                  </a>
                </li>
                <li>
                  <a href='#inspiration' className='footer__link'>
                    {t.inspiration}
                  </a>
                </li>
                <li>
                  <a href='#contact' className='footer__link'>
                    {t.contact}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div
            className='footer__social-container'
            data-aos='fade-left'
            data-aos-delay='300'
          >
            <h3 className='footer__social-title'>
              {language === 'LT' ? 'Socialiniai tinklai' : 'Social Media'}
            </h3>
            <div className='footer__social'>
              <a
                href='https://www.facebook.com'
                className='footer__social-link'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Facebook'
                title={t.facebookTitle}
              >
                <i className='bx bxl-facebook'></i>
              </a>
              <a
                href='https://lt.linkedin.com/in/linas-ulevi%C4%8Dius-48366113b'
                className='footer__social-link'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
                title={t.linkedinTitle}
              >
                <i className='bx bxl-linkedin'></i>
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
          </div>
        </div>

        <div className='footer__bottom' data-aos='fade-up' data-aos-delay='400'>
          <span className='footer__copy'>{t.copyright}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
