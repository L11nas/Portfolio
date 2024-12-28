import React from 'react';
import { useDarkMode } from '../../ThemeContext';

const Info = () => {
  const { darkMode } = useDarkMode();

  const handleIconClick = (url) => {
    window.open(url, '_blank'); // Atidaro nuorodą naujame lange
  };

  const codeAcademyLogo = '/img/codeAcademyLogo.jpg';
  const iamJuniorLogo = '/img/iamJuniorLogo.jpg';

  return (
    <div className={`about__info grid ${darkMode ? 'dark-mode' : ''}`}>
      <div
        className='about__box'
        onClick={() => handleIconClick('/img/codeacademy.jpg')}
        style={{ cursor: 'pointer' }}
      >
        <img
          src={codeAcademyLogo}
          alt='Code Academy logotipo nuotrauka, simbolizuojanti mano išsilavinimą front-end programavime'
          className='about__icon'
        />
        <h3 className='about__title'>Code Academy</h3>
        <h4 className='about__subtitle'>Front-end programuotojas</h4>
        <span>
          Baigimo atestatas <i className='bx bx-award'></i>
        </span>
      </div>

      <div
        className='about__box'
        onClick={() => handleIconClick('/img/Pažymėjimas.png')}
        style={{ cursor: 'pointer' }}
      >
        <img
          src={iamJuniorLogo}
          alt='Iam Junior Logo'
          className='about__icon'
        />
        <h3 className='about__title'>Iam Junior</h3>
        <h4 className='about__subtitle'>Web programavimas su JavaScript</h4>
        <span>
          Baigimo atestatas <i className='bx bx-award'></i>
        </span>
      </div>
    </div>
  );
};

export default Info;
