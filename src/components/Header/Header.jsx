// Header.jsx (atnaujinta su geresniu mobilumo palaikymu)
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
        header.classList.add('shrink');
      } else {
        header.classList.remove('shrink');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Helmet>
        <title>
          {language === 'LT'
            ? 'LinasWebDev | Profesionalus svetainių kūrimas'
            : 'LinasWebDev | Professional Website Development'}
        </title>
        <meta
          name='description'
          content={
            language === 'LT'
              ? 'Profesionalus svetainių kūrimas ir dizainas. Modernus, greitai veikiantis ir funkcionalus web dizainas verslui ir asmeniniam naudojimui.'
              : 'Professional website development and design. Modern, fast and functional web design for business and personal use.'
          }
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Helmet>

      <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
        <nav className='nav container'>
          <div className='nav__left'>
            <a href='#home' className='nav__logo'>
              <span className='logo-text gradient-logo'>LinasWebDev</span>
            </a>
          </div>

          <div className='nav__right'>
            <div className='nav__buttons'>
              <div
                className='dark-mode-toggle'
                onClick={toggleDarkMode}
                aria-label={
                  darkMode
                    ? 'Perjungti į šviesų režimą'
                    : 'Perjungti į tamsų režimą'
                }
              >
                <i className={`bx ${darkMode ? 'bx-sun' : 'bx-moon'}`}></i>
              </div>
              <div className='language-toggle'>
                <button onClick={toggleLanguage}>
                  {language === 'LT' ? 'EN' : 'LT'}
                </button>
              </div>
              <div
                className='nav__toggle'
                onClick={toggleMenu}
                aria-expanded={menuOpen}
                aria-controls='mobile-nav'
                aria-label={menuOpen ? 'Uždaryti meniu' : 'Atidaryti meniu'}
              >
                <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}></i>
              </div>
            </div>
          </div>
        </nav>

        <div className={`mobile-nav ${menuOpen ? 'open' : ''}`} id='mobile-nav'>
          <ul className='mobile-nav__list'>
            {sections.map((section) => (
              <li className='mobile-nav__item' key={section.id}>
                <a
                  href={section.id}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(section.id);
                  }}
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

        <div className='desktop-nav'>
          <ul className='nav__list'>
            {sections.map((section) => (
              <li className='nav__item' key={section.id}>
                <a
                  href={section.id}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(section.id);
                  }}
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
