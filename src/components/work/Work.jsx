import React, { useState, useEffect } from 'react';
import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems';
import './work.css';
import { useDarkMode } from '../../ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

const Work = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('filter.all'); // Default filter key

  useEffect(() => {
    const filteredProjects =
      activeFilter === 'filter.all'
        ? projectsData
        : projectsData.filter((project) =>
            language === 'LT'
              ? project.categoryLT ===
                projectsNav.find((nav) => nav.key === activeFilter)?.nameLT
              : project.category ===
                projectsNav.find((nav) => nav.key === activeFilter)?.nameEN
          );
    setProjects(filteredProjects);
  }, [activeFilter, language]);

  const handleFilterClick = (filterKey) => {
    setActiveFilter(filterKey);
  };

  return (
    <div id='projects' className={darkMode ? 'dark-mode' : ''}>
      <h1 className='portfolio-title'>
        {language === 'LT' ? 'Projektai' : 'Projects'}
      </h1>
      <div
        className='work__filters'
        role='navigation'
        aria-label='Project Categories'
      >
        {projectsNav.map((filter, index) => (
          <span
            key={index}
            onClick={() => handleFilterClick(filter.key)}
            className={`work__item ${
              activeFilter === filter.key ? 'active__work' : ''
            }`}
            aria-current={activeFilter === filter.key ? 'true' : 'false'}
          >
            {language === 'LT' ? filter.nameLT : filter.nameEN}
          </span>
        ))}
      </div>
      <div className='work__container container grid'>
        {projects.length > 0 ? (
          projects.map((project) => (
            <WorkItems key={project.id} item={project} language={language} />
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
  );
};

export default Work;
