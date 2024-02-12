import React, { useState, useEffect } from 'react';
import { projectsData } from './Data';
import { projectsNav } from './Data';
import WorkItems from './WorkItems';

const Works = () => {
  const [item, setItem] = useState({ name: 'All' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const categoryName = item.name.trim().toLowerCase();
    if (categoryName === 'all') {
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
    <div>
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
