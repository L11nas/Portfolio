import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import './work.css';

const WorkItems = ({ item, language }) => {
  const projectTitle = language === 'LT' ? item.titleLT : item.title;
  const demoText = language === 'LT' ? 'Demonstracija' : 'Demo';
  const githubText =
    language === 'LT'
      ? `GitHub saugykla ${projectTitle}`
      : `GitHub repository for ${projectTitle}`;
  const statusText = language === 'LT' ? item.statusLT : item.status;

  return (
    <div
      className='work__card'
      aria-labelledby={`title-${item.id}`}
      role='article'
    >
      <img
        src={item.image}
        alt={`${projectTitle} - ${language === 'LT' ? 'Projektas' : 'Project'}`}
        className='work__img'
      />
      <h3 id={`title-${item.id}`} className='work__title'>
        {projectTitle}
      </h3>
      {item.status && <p className='work__status'>{statusText}</p>}
      {item.Link && (
        <a
          href={item.Link}
          className='work__button'
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`${demoText} ${projectTitle}`}
        >
          {demoText}
          <i className='bx bx-right-arrow-alt work__button-icon'></i>
        </a>
      )}
      {item.githubLink && (
        <a
          href={item.githubLink}
          target='_blank'
          rel='noopener noreferrer'
          className='work__github-link'
          aria-label={githubText}
        >
          <GitHubIcon
            style={{
              fontSize: '24px',
              marginLeft: '8px',
              color: 'black',
              marginTop: '8px',
            }}
          />
        </a>
      )}
    </div>
  );
};

export default WorkItems;
