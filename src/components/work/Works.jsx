import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems';
import { useLanguage } from '../../context/LanguageContext';

const Works = () => {
  const { language } = useLanguage();
  const [item, setItem] = useState({
    name: language === 'LT' ? 'Visi' : 'All',
  });
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const categoryName = item.name.trim().toLowerCase();

    const filteredProjects =
      (language === 'LT' && categoryName === 'visi') ||
      (language === 'EN' && categoryName === 'all')
        ? projectsData
        : projectsData.filter((project) => {
            const projectCategory =
              language === 'LT' ? project.categoryLT : project.category;
            return projectCategory.trim().toLowerCase() === categoryName;
          });

    setProjects(filteredProjects);
  }, [item, language]);

  const handleClick = (e, index) => {
    const clickedName = e.target.textContent;
    setItem({ name: clickedName });
    setActive(index);
  };

  const seoTitle =
    language === 'LT'
      ? 'Mano projektai | Portfolio'
      : 'My Projects | Portfolio';
  const seoDescription =
    language === 'LT'
      ? 'Peržiūrėkite mano projektus, įskaitant puslapius, banerius ir dizaino projektus.'
      : 'Explore my projects, including pages, banners, and design works.';

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name='description' content={seoDescription} />
        <meta
          name='keywords'
          content='projects, portfolio, web development, React, JavaScript'
        />
        <meta name='author' content='Linas' />
        <link rel='canonical' href='https://linaswebdev.lt/projects' />
        <meta property='og:title' content={seoTitle} />
        <meta property='og:description' content={seoDescription} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://linaswebdev.lt/projects' />
      </Helmet>

      <div>
        <h1 className='section__title'>
          {language === 'LT' ? 'Projektai' : 'Projects'}
        </h1>
        <div
          className='work__filters'
          role='navigation'
          aria-label='Project Categories'
        >
          {projectsNav.map((navItem, index) => (
            <span
              onClick={(e) => handleClick(e, index)}
              className={`work__item ${active === index ? 'active__work' : ''}`}
              key={index}
              aria-current={active === index ? 'true' : 'false'}
            >
              {language === 'LT' ? navItem.nameLT : navItem.name}
            </span>
          ))}
        </div>
        <div className='work__container container grid' role='main'>
          {projects.length > 0 ? (
            projects.map((project) => (
              <WorkItems item={project} key={project.id} language={language} />
            ))
          ) : (
            <p>
              {language === 'LT'
                ? 'Šioje kategorijoje projektų nerasta.'
                : 'No projects found in this category.'}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Works;
