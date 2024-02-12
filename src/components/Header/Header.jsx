import React, { useEffect, useState } from 'react';
import './header.css';
import { useDarkMode } from '../../ThemeContext';
import { Switch } from '@mui/material';

const Header = () => {
  const { toggleDarkMode, darkMode } = useDarkMode();
  const [toggle, showMenu] = useState(false);
  const [activeNav, setaActiveNav] = useState('#home');

  useEffect(() => {
    // Scroll to the home section when the component mounts
    const handleInitialScroll = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    handleInitialScroll();

    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY >= 80) header.classList.add('scroll-header');
      else header.classList.remove('scroll-header');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleDarkMode = () => {
    toggleDarkMode();
  };

  const handleNavigation = (navItem) => {
    const sectionId = navItem.slice(1); // Remove the "#" from the navItem
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setaActiveNav(navItem);
    }
  };
  return (
    <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
      <nav className='nav container'>
        <a href='index.html' className='nav__logo'>
          LinasWebStudio
        </a>
        <div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a
                href='#home'
                onClick={() => setaActiveNav('#home')}
                className={
                  activeNav === '#home' ? 'nav__link active__link' : 'nav__link'
                }
              >
                <i className='uil uil-estate nav__icon'></i>Home
              </a>
            </li>
            <li className='nav__item'>
              <a
                href='#about'
                onClick={() => setaActiveNav('#about')}
                className={
                  activeNav === '#about'
                    ? 'nav__link active__link'
                    : 'nav__link'
                }
              >
                <i className='uil uil-user nav__icon'></i>About
              </a>
            </li>
            <li className='nav__item'>
              <a
                href='#skills'
                onClick={() => setaActiveNav('#skills')}
                className={
                  activeNav === '#skills'
                    ? 'nav__link active__link'
                    : 'nav__link'
                }
              >
                <i className='uil uil-file-alt nav__icon'></i>Skills
              </a>
            </li>
            <li className='nav__item'>
              <a
                href='#services'
                onClick={() => setaActiveNav('#services')}
                className={
                  activeNav === '#services'
                    ? 'nav__link active__link'
                    : 'nav__link'
                }
              >
                <i className='uil uil-briefcase-alt nav__icon'></i>Services
              </a>
            </li>
            <li className='nav__item'>
              <a
                href='#portfolio'
                onClick={() => setaActiveNav('#portfolio')}
                className={
                  activeNav === '#portfolio'
                    ? 'nav__link active__link'
                    : 'nav__link'
                }
              >
                <i className='uil uil-scenery nav__icon'></i>Portfolio
              </a>
            </li>
            <li className='nav__item'>
              <a
                href='#MyInspirationSection'
                onClick={() => handleNavigation('#My Inspiration')}
                className={
                  activeNav === '#My Inspiration'
                    ? 'nav__link active__link'
                    : 'nav__link'
                }
              >
                <i className='uil uil-heart nav__icon'></i>My Inspiration
              </a>
            </li>
            <li className='nav__item'>
              <a
                href='#contact'
                onClick={() => setaActiveNav('#contact')}
                className={
                  activeNav === '#contact'
                    ? 'nav__link active__link'
                    : 'nav__link'
                }
              >
                <i className='uil uil-message nav__icon'></i> Contact
              </a>
            </li>
          </ul>
          <i
            className='uil uil-times nav__close'
            onClick={() => showMenu(!toggle)}
          ></i>
          <div className='dark-mode-toggle' onClick={handleToggleDarkMode}>
            {darkMode ? 'White Mode' : 'Dark Mode'}
            <Switch
              checked={darkMode}
              color='default'
              name='darkModeSwitch'
              inputProps={{ 'aria-label': 'toggle dark mode' }}
            />
          </div>
        </div>

        <div className='nav__toggle' onClick={() => showMenu(!toggle)}>
          <i className='uil uil-apps'></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
