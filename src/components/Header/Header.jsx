import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDarkMode } from '../../ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import './header.css';

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header.classList.add('scroll-header', 'shrink');
      } else {
        header.classList.remove('scroll-header', 'shrink');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when window is resized above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  const sections = [
    {
      id: '#home',
      label: language === 'LT' ? 'Pradžia' : 'Home',
      icon: 'bx-home',
    },
    {
      id: '#about',
      label: language === 'LT' ? 'Apie' : 'About',
      icon: 'bx-user',
    },
    {
      id: '#skills',
      label: language === 'LT' ? 'Įgūdžiai' : 'Skills',
      icon: 'bx-brain',
    },
    {
      id: '#services',
      label: language === 'LT' ? 'Paslaugos' : 'Services',
      icon: 'bx-briefcase',
    },
    {
      id: '#projects',
      label: language === 'LT' ? 'Projektai' : 'Projects',
      icon: 'bx-folder',
    },
    {
      id: '#inspiration',
      label: language === 'LT' ? 'Įkvėpimas' : 'Inspiration',
      icon: 'bx-bulb',
    },
    {
      id: '#contact',
      label: language === 'LT' ? 'Kontaktai' : 'Contact',
      icon: 'bx-envelope',
    },
  ];

  const handleNavigation = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveNav(sectionId);
      setMenuOpen(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          {language === 'LT' ? 'Linaswebdev | Pradžia' : 'Linaswebdev | Home'}
        </title>
        <meta
          name='description'
          content={
            language === 'LT'
              ? 'Sveiki atvykę į Linaswebdev svetainę. Atraskite mano paslaugas, įgūdžius ir portfolio.'
              : 'Welcome to Linaswebdev. Discover my services, skills, and portfolio.'
          }
        />
        <meta
          name='keywords'
          content='Web Development, Portfolio, Services, Skills, React, Frontend'
        />
        <meta name='author' content='Linas Ulevičius' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta charSet='UTF-8' />
        <link rel='canonical' href='https://linaswebdev.lt' />
      </Helmet>

      <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
        <nav className='nav container'>
          <div className='nav__left'>
            <a href='#home' className='nav__logo'>
              <span className='logo-text gradient-logo'>Linaswebdev</span>
            </a>
          </div>

          <div className='nav__right'>
            <div className='nav__buttons'>
              <div
                className='dark-mode-toggle'
                onClick={toggleDarkMode}
                aria-label='Toggle theme'
              >
                <i className={`bx ${darkMode ? 'bx-sun' : 'bx-moon'}`}></i>
                <span className='toggle-text'>
                  {darkMode
                    ? language === 'LT'
                      ? 'Šviesus režimas'
                      : 'Light Mode'
                    : language === 'LT'
                    ? 'Tamsus režimas'
                    : 'Dark Mode'}
                </span>
              </div>
              <div className='language-toggle'>
                <button onClick={toggleLanguage} aria-label='Toggle language'>
                  {language === 'LT' ? 'EN' : 'LT'}
                </button>
              </div>
              <div
                className='nav__toggle'
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label='Toggle menu'
              >
                <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}></i>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile navigation menu */}
        <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          <ul className='mobile-nav__list'>
            {sections.map((section) => (
              <li className='mobile-nav__item' key={section.id}>
                <a
                  href={section.id}
                  onClick={() => handleNavigation(section.id)}
                  className={`mobile-nav__link ${
                    activeNav === section.id ? 'active__link' : ''
                  }`}
                >
                  <i className={`bx ${section.icon} nav__icon`}></i>
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop navigation menu */}
        <div className='desktop-nav'>
          <ul className='nav__list'>
            {sections.map((section) => (
              <li className='nav__item' key={section.id}>
                <a
                  href={section.id}
                  onClick={() => handleNavigation(section.id)}
                  className={`nav__link ${
                    activeNav === section.id ? 'active__link' : ''
                  }`}
                >
                  <i className={`bx ${section.icon} nav__icon`}></i>
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
