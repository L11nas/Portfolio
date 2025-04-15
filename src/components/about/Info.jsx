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
      viewCertificate: 'Peržiūrėti pažymėjimą',
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
      viewCertificate: 'View Certificate',
    },
  };

  const { sectionTitle, codeAcademy, iamJunior, viewCertificate } =
    translations[language] || translations.LT;

  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };

  const codeAcademyLogo = '/img/codeAcademyLogo.jpg';
  const iamJuniorLogo = '/img/iamJuniorLogo.jpg';

  return (
    <section
      className={`certifications__section ${darkMode ? 'dark-mode' : ''}`}
      data-aos='fade-up'
    >
      <h2 className='section__title' data-aos='fade-down'>
        {sectionTitle}
      </h2>
      <div className='cert__line' data-aos='fade-up' data-aos-delay='200'></div>

      <div className='certifications__container'>
        {/* Code Academy card */}
        <div
          className='certification__card'
          data-aos='fade-right'
          data-aos-delay='300'
        >
          <div
            className='certification__logo-container'
            data-aos='zoom-in'
            data-aos-delay='400'
          >
            <img
              src={codeAcademyLogo}
              alt={`${codeAcademy.title} sertifikatas`}
              className='certification__logo'
            />
          </div>

          <h3
            className='certification__title'
            data-aos='fade-up'
            data-aos-delay='500'
          >
            {codeAcademy.title}
          </h3>

          <p
            className='certification__subtitle'
            data-aos='fade-up'
            data-aos-delay='600'
          >
            {codeAcademy.subtitle}
          </p>

          <div
            className='certification__badge'
            data-aos='fade-up'
            data-aos-delay='700'
          >
            <i className='bx bx-award' aria-hidden='true'></i>
            <span>{codeAcademy.certificate}</span>
          </div>

          <a
            href='/img/codeacademy.jpg'
            target='_blank'
            rel='noopener noreferrer'
            className='certification__button'
            data-aos='fade-up'
            data-aos-delay='800'
          >
            {viewCertificate} <i className='bx bx-right-arrow-alt'></i>
          </a>
        </div>

        {/* Iam Junior card */}
        <div
          className='certification__card'
          data-aos='fade-left'
          data-aos-delay='300'
        >
          <div
            className='certification__logo-container'
            data-aos='zoom-in'
            data-aos-delay='400'
          >
            <img
              src={iamJuniorLogo}
              alt={`${iamJunior.title} sertifikatas`}
              className='certification__logo'
            />
          </div>

          <h3
            className='certification__title'
            data-aos='fade-up'
            data-aos-delay='500'
          >
            {iamJunior.title}
          </h3>

          <p
            className='certification__subtitle'
            data-aos='fade-up'
            data-aos-delay='600'
          >
            {iamJunior.subtitle}
          </p>

          <div
            className='certification__badge'
            data-aos='fade-up'
            data-aos-delay='700'
          >
            <i className='bx bx-award' aria-hidden='true'></i>
            <span>{iamJunior.certificate}</span>
          </div>

          <a
            href='/img/Pažymėjimas.png'
            target='_blank'
            rel='noopener noreferrer'
            className='certification__button'
            data-aos='fade-up'
            data-aos-delay='800'
          >
            {viewCertificate} <i className='bx bx-right-arrow-alt'></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Info;
