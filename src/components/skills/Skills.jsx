import React from 'react';
import { Helmet } from 'react-helmet-async';
import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import { useDarkMode } from '../../ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

const Skills = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  const translations = {
    LT: {
      sectionTitle: 'Įgūdžiai',
      sectionSubtitle: 'Mano techniniai įgūdžiai',
      pageTitle: 'Įgūdžiai | Linaswebdev',
      metaDescription:
        'Sužinokite apie mano techninius įgūdžius, įskaitant Frontend (HTML, CSS, ReactJS) ir Backend (NodeJS, SQL).',
    },
    EN: {
      sectionTitle: 'Skills',
      sectionSubtitle: 'My technical skills',
      pageTitle: 'Skills | Linaswebdev',
      metaDescription:
        'Discover my technical skills, including Frontend (HTML, CSS, ReactJS) and Backend (NodeJS, SQL).',
    },
  };

  const { sectionTitle, sectionSubtitle, pageTitle, metaDescription } =
    translations[language];

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name='description' content={metaDescription} />
        <meta
          name='keywords'
          content='Frontend, Backend, HTML, CSS, ReactJS, NodeJS, SQL'
        />
        <meta name='author' content='Linas Ulevičius' />
        <link rel='canonical' href='https://linaswebdev.lt/skills' />
      </Helmet>

      <div className={darkMode ? 'dark-mode' : ''}>
        <section className='skills section' id='skills'>
          <h1 className='section__title'>{sectionTitle}</h1>
          <h2 className='section__subtitle'>{sectionSubtitle}</h2>
          <div
            className='skills__container container grid'
            role='group'
            aria-labelledby='skills'
          >
            <Frontend />
            <Backend />
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;
