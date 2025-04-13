import React from 'react';
import { useDarkMode } from '../../ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import './about.css';

const Info = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  const translations = {
    LT: {
      codeAcademy: {
        title: 'Code Academy',
        subtitle: 'Front-end programuotojas',
        certificate: 'Baigimo atestatas',
      },
      iamJunior: {
        title: 'Iam Junior',
        subtitle: 'Web programavimas su JavaScript',
        certificate: 'Baigimo atestatas',
      },
    },
    EN: {
      codeAcademy: {
        title: 'Code Academy',
        subtitle: 'Front-end Developer',
        certificate: 'Completion Certificate',
      },
      iamJunior: {
        title: 'Iam Junior',
        subtitle: 'Web Programming with JavaScript',
        certificate: 'Completion Certificate',
      },
    },
  };

  const {
    title: codeAcademyTitle,
    subtitle: codeAcademySubtitle,
    certificate: codeAcademyCertificate,
  } = translations[language].codeAcademy;
  const {
    title: iamJuniorTitle,
    subtitle: iamJuniorSubtitle,
    certificate: iamJuniorCertificate,
  } = translations[language].iamJunior;

  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };

  const codeAcademyLogo = '/img/codeAcademyLogo.jpg';
  const iamJuniorLogo = '/img/iamJuniorLogo.jpg';

  return (
    <div className={`about__info grid ${darkMode ? 'dark-mode' : ''}`}>
      <div
        className='about__box'
        data-aos='fade-up'
        data-aos-delay='0'
        onClick={() => handleIconClick('/img/codeacademy.jpg')}
        style={{ cursor: 'pointer' }}
        role='button'
        tabIndex={0}
        onKeyPress={(e) =>
          e.key === 'Enter' && handleIconClick('/img/codeacademy.jpg')
        }
      >
        <img
          src={codeAcademyLogo}
          alt='Code Academy certificate, symbolizing my education in front-end development'
          className='about__icon'
        />
        <h3 className='about__title'>{codeAcademyTitle}</h3>
        <h4 className='about__subtitle'>{codeAcademySubtitle}</h4>
        <span>
          {codeAcademyCertificate} <i className='bx bx-award'></i>
        </span>
      </div>

      <div
        className='about__box'
        data-aos='fade-up'
        data-aos-delay='100'
        onClick={() => handleIconClick('/img/Pažymėjimas.png')}
        style={{ cursor: 'pointer' }}
        role='button'
        tabIndex={0}
        onKeyPress={(e) =>
          e.key === 'Enter' && handleIconClick('/img/Pažymėjimas.png')
        }
      >
        <img
          src={iamJuniorLogo}
          alt='Iam Junior certificate, symbolizing my knowledge in web programming'
          className='about__icon'
        />
        <h3 className='about__title'>{iamJuniorTitle}</h3>
        <h4 className='about__subtitle'>{iamJuniorSubtitle}</h4>
        <span>
          {iamJuniorCertificate} <i className='bx bx-award'></i>
        </span>
      </div>
    </div>
  );
};

export default Info;
