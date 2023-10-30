import React from 'react';

const Social = () => {
  return (
    <div className='home__social'>
      <a
        href='https://www.instagram.com/uleviciuslinas'
        className='home__social-icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='uil uil-instagram'></i>
      </a>

      <a
        href='https://www.linkedin.com/in/linas-ulevi%C4%8Dius-48366113b/'
        className='home__social-icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='uil uil-linkedin'></i>
      </a>
      <a
        href='https://github.com/L11nas'
        className='home__social-icon'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='uil uil-github'></i>
      </a>
    </div>
  );
};
export default Social;
