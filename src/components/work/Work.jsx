import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { projectsData } from './Data';
import WorkItems from './WorkItems';
import './work.css';
import { useDarkMode } from '../../ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

const Work = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  const [projects, setProjects] = useState([]);

  // Refresh AOS when component mounts
  useEffect(() => {
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  // Set projects when language changes
  useEffect(() => {
    setProjects(projectsData);
  }, [language]);

  const seoTitle =
    language === 'LT'
      ? 'Mano projektai | Portfolio'
      : 'My Projects | Portfolio';
  const seoDescription =
    language === 'LT'
      ? 'Peržiūrėkite mano baigtus projektus, įskaitant asmeninę portfolio svetainę, bėgimo plano svetainę ir kitus darbus.'
      : 'Explore my completed projects, including my personal portfolio, running plan website, and other works.';

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name='description' content={seoDescription} />
        <meta
          name='keywords'
          content='projects, portfolio, web development, React, JavaScript'
        />
        <meta name='author' content='Linas Ulevičius' />
        <link rel='canonical' href='https://linaswebdev.lt/projects' />
        <meta property='og:title' content={seoTitle} />
        <meta property='og:description' content={seoDescription} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://linaswebdev.lt/projects' />
      </Helmet>

      <div className={darkMode ? 'dark-mode' : ''}>
        <section className='projects__section' id='projects'>
          <div className='projects__container container'>
            <h1 className='section__title' data-aos='fade-down'>
              {language === 'LT' ? 'Baigti Projektai' : 'Completed Projects'}
            </h1>
            <h2
              className='section__subtitle'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              {language === 'LT' ? 'Mano naujausi darbai' : 'My recent work'}
            </h2>

            <div
              className='projects__grid'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              {projects.length > 0 ? (
                projects.map((project, index) => (
                  <WorkItems
                    key={project.id}
                    item={project}
                    language={language}
                    data-aos='fade-up'
                    data-aos-delay={300 + index * 100}
                  />
                ))
              ) : (
                <p className='projects__empty-message'>
                  {language === 'LT'
                    ? 'Baigtų projektų nerasta.'
                    : 'No completed projects found.'}
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Work;
