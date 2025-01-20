import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDarkMode } from '../../ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import './header.css';

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

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
      {/* SEO Metadata */}
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

      {/* Header Section */}
      <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
        <nav className='nav container'>
          <a href='#home' className='nav__logo'>
            <span className='logo-text'>Linaswebdev</span>
          </a>

          {/* Dark/Light Mode Toggle */}
          <div className='dark-mode-toggle' onClick={toggleDarkMode}>
            <i className={`bx ${darkMode ? 'bx-sun' : 'bx-moon'}`}></i>
            <span>
              {darkMode
                ? language === 'LT'
                  ? 'Šviesus režimas'
                  : 'Light Mode'
                : language === 'LT'
                ? 'Tamsus režimas'
                : 'Dark Mode'}
            </span>
          </div>

          {/* Language Toggle */}
          <div className='language-toggle'>
            <button onClick={toggleLanguage}>
              {language === 'LT' ? 'EN' : 'LT'}
            </button>
          </div>

          {/* Menu Toggle */}
          <div className='nav__toggle' onClick={() => setMenuOpen(!menuOpen)}>
            <i className='bx bx-menu'></i>
          </div>

          <div className={menuOpen ? 'nav__menu show-menu' : 'nav__menu'}>
            <i
              className='bx bx-x nav__close'
              onClick={() => setMenuOpen(false)}
            ></i>
            <ul className='nav__list grid'>
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
        </nav>
      </header>
    </>
  );
};

export default Header;
