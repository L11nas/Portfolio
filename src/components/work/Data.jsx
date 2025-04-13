import React from 'react';
import './work.css';

const WorkItems = ({ item, language }) => {
  const projectTitle =
    language === 'LT' ? item.titleLT || item.title : item.title;
  const projectDescription =
    language === 'LT'
      ? item.descriptionLT || item.description
      : item.description;
  const viewText = language === 'LT' ? 'Atidaryti' : 'Visit Site';

  return (
    <article className='project__card'>
      <div className='project__image-container'>
        {item.preview ? (
          <div className='project__preview'>
            <iframe
              src={item.url}
              title={projectTitle}
              className='project__iframe'
              loading='lazy'
              sandbox='allow-same-origin'
            />
            <div className='project__preview-overlay'>
              <span className='project__preview-text'>
                {language === 'LT' ? 'Apsilankyti' : 'Visit Website'}
              </span>
            </div>
          </div>
        ) : (
          <img
            src={item.image}
            alt={`${projectTitle} - ${
              language === 'LT' ? 'Projektas' : 'Project'
            }`}
            className='project__img'
            loading='lazy'
          />
        )}
      </div>

      <div className='project__content'>
        <h3 className='project__title'>{projectTitle}</h3>

        {projectDescription && (
          <p className='project__description'>{projectDescription}</p>
        )}

        <div className='project__category'>
          <span className='project__category-tag'>
            {language === 'LT' ? item.categoryLT : item.category}
          </span>
        </div>

        <div className='project__actions'>
          {item.Link && (
            <a
              href={item.Link}
              className='project__button project__demo-button'
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`${viewText} ${projectTitle}`}
            >
              <i className='bx bx-link-external'></i>
              {viewText}
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default WorkItems;
