// Info.jsx
import React from 'react';
import { useDarkMode } from '../../ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import './about.css';

const Info = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  const translations = {
    LT: {
      sectionTitle: 'Kvalifikacijos ir sertifikatai',
      codeAcademy: {
        title: 'Code Academy',
        subtitle: 'Svetainių kūrimas ir programavimas',
        certificate: 'Profesionalus sertifikatas',
      },
      iamJunior: {
        title: 'Iam Junior',
        subtitle: 'Web programavimas ir modernios technologijos',
        certificate: 'Kvalifikacijos pažymėjimas',
      },
    },
    EN: {
      sectionTitle: 'Qualifications and Certifications',
      codeAcademy: {
        title: 'Code Academy',
        subtitle: 'Website Development and Programming',
        certificate: 'Professional Certificate',
      },
      iamJunior: {
        title: 'Iam Junior',
        subtitle: 'Web Programming and Modern Technologies',
        certificate: 'Qualification Certificate',
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

  const sectionTitle = translations[language].sectionTitle;

  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };

  const codeAcademyLogo = '/img/codeAcademyLogo.jpg';
  const iamJuniorLogo = '/img/iamJuniorLogo.jpg';

  return (
    <section
      className={`about__certifications ${darkMode ? 'dark-mode' : ''}`}
      aria-labelledby='certifications-heading'
    >
      <h2 id='certifications-heading' className='section__title'>
        {sectionTitle}
      </h2>
      <div className='about__info grid'>
        <div
          className='about__box'
          data-aos='fade-up'
          data-aos-delay='0'
          onClick={() => handleIconClick('/img/codeacademy.jpg')}
          style={{ cursor: 'pointer' }}
          role='button'
          aria-label={`${codeAcademyTitle} ${codeAcademySubtitle} sertifikatas - Spustelėkite, kad pamatytumėte`}
          tabIndex={0}
          onKeyPress={(e) =>
            e.key === 'Enter' && handleIconClick('/img/codeacademy.jpg')
          }
        >
          <img
            src={codeAcademyLogo}
            alt={`${codeAcademyTitle} sertifikatas, patvirtinantis mano įgūdžius svetainių kūrime`}
            className='about__icon'
          />
          <h3 className='about__title'>{codeAcademyTitle}</h3>
          <h4 className='about__subtitle'>{codeAcademySubtitle}</h4>
          <span>
            {codeAcademyCertificate}{' '}
            <i className='bx bx-award' aria-hidden='true'></i>
          </span>
        </div>
        <div
          className='about__box'
          data-aos='fade-up'
          data-aos-delay='100'
          onClick={() => handleIconClick('/img/Pažymėjimas.png')}
          style={{ cursor: 'pointer' }}
          role='button'
          aria-label={`${iamJuniorTitle} ${iamJuniorSubtitle} sertifikatas - Spustelėkite, kad pamatytumėte`}
          tabIndex={0}
          onKeyPress={(e) =>
            e.key === 'Enter' && handleIconClick('/img/Pažymėjimas.png')
          }
        >
          <img
            src={iamJuniorLogo}
            alt={`${iamJuniorTitle} sertifikatas, patvirtinantis mano žinias programavimo srityje`}
            className='about__icon'
          />
          <h3 className='about__title'>{iamJuniorTitle}</h3>
          <h4 className='about__subtitle'>{iamJuniorSubtitle}</h4>
          <span>
            {iamJuniorCertificate}{' '}
            <i className='bx bx-award' aria-hidden='true'></i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Info;
