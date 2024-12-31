import React, { useState, useEffect } from 'react';
import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems';

const Works = () => {
  const [item, setItem] = useState({ name: 'All' });
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const categoryName = item.name.trim().toLowerCase();
    const filteredProjects =
      categoryName === 'all'
        ? projectsData
        : projectsData.filter(
            (project) => project.category.trim().toLowerCase() === categoryName
          );
    setProjects(filteredProjects);
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div>
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
            {navItem.name}
          </span>
        ))}
      </div>
      <div className='work__container container grid' role='main'>
        {projects.length > 0 ? (
          projects.map((project) => (
            <WorkItems item={project} key={project.id} />
          ))
        ) : (
          <p>No projects found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Works;
