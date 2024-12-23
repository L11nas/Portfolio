import React, { useEffect, useState } from 'react';
import './header.css';
import { useDarkMode } from '../../ThemeContext';

const Header = () => {
  const { toggleDarkMode, darkMode } = useDarkMode();
  const [toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    const handleInitialScroll = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    handleInitialScroll();

    const handleScroll = () => {};

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleDarkMode = () => {
    toggleDarkMode();
  };

  const handleNavigation = (navItem) => {
    const sectionId = navItem.slice(1);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveNav(navItem);
    }
  };

  return (
    <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
      <nav className='nav container'>
        <a href='index.html' className='nav__logo'>
          <span className='logo-text'>Linaswebdev</span>
        </a>

        <div className='dark-mode-toggle' onClick={handleToggleDarkMode}>
          <i className={`bx ${darkMode ? 'bx-sun' : 'bx-moon'}`} />
          <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </div>

        <div className='nav__toggle' onClick={() => showMenu(!toggle)}>
          <i className='bx bx-menu' aria-label='Toggle menu'></i>
        </div>

        <div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <i
            className='bx bx-x nav__close'
            onClick={() => showMenu(false)}
            aria-label='Close menu'
          ></i>
          <ul className='nav__list grid'>
            {[
              'Apie',
              'Įgūdžiai',
              'Paslaugos',
              'Portfolio',
              'Mano Įkvėpimas',
              'Kontaktai',
            ].map((item) => (
              <li className='nav__item' key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => handleNavigation(`#${item}`)}
                  className={
                    activeNav === `#${item}`
                      ? 'nav__link active__link'
                      : 'nav__link'
                  }
                >
                  <i
                    className={`bx bx-$
                      {item === 'Mano Įkvėpimas'
                        ? 'heart'
                        : item === 'Portfolio'
                        ? 'rocket'
                        : item === 'Paslaugos'
                        ? 'briefcase-alt'
                        : item === 'Įgūdžiai'
                        ? 'spreadsheet'
                        : 'user'
                    } nav__icon`}
                  ></i>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
