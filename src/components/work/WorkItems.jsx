import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import './work.css';

const WorkItems = ({ item }) => {
  return (
    <div className='work__card'>
      <img src={item.image} alt={item.title} className='work__img' />
      <h3 className='work__title'>{item.title}</h3>
      <p className='work__status'>{item.status}</p>
      <a
        href={item.Link}
        className='work__button'
        target='_blank'
        rel='noopener noreferrer'
      >
        Demo <i className='bx bx-right-arrow-alt work__button-icon'></i>
      </a>
      <a
        href={item.githubLink}
        target='_blank'
        rel='noopener noreferrer'
        className='work__github-link'
        aria-label='GitHub'
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
    </div>
  );
};

export default WorkItems;
