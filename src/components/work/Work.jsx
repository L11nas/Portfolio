import React, { useState, useEffect } from 'react';
import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems';
import './work.css';
import { useDarkMode } from '../../ThemeContext';
const Works = () => {
  const { darkMode } = useDarkMode();
  const [item, setItem] = useState({ name: 'Visi' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const categoryName = item.name.trim().toLowerCase();
    if (categoryName === 'visi') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.trim().toLowerCase() === categoryName;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div id='Portfolio' className={darkMode ? 'dark-mode' : ''}>
      <h1 className='portfolio-title'>Portfolio</h1> {/* Pridėta CSS klasė */}
      <div className='work__filters'>
        {projectsNav.map((navItem, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`work__item ${active === index ? 'active__work' : ''}`}
              key={index}
            >
              {navItem.name}
            </span>
          );
        })}
      </div>
      <div className='work__container container grid'>
        {projects.map((project) => {
          return <WorkItems item={project} key={project.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
