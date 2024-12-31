import React from 'react';
import scrollSvg from '/scroll-down.svg';

const ScrollDown = () => {
  return (
    <div className='home__scroll'>
      <a
        href='#Apie'
        className='home__scroll-button button--flex'
        aria-label='scroll Down to About Section'
        tabIndex='0'
      >
        <img src={scrollSvg} alt='Scroll Down' className='home__scroll-arrow' />
        <span className='home__scroll-name'>Slinkite žemyn</span>
        <i className='uil uil-arrow-down home__scroll-arrow'></i>
      </a>
    </div>
  );
};
export default ScrollDown;
