import React, { useEffect } from 'react';
import './scrollup.css';

const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector('.scrollup');
      if (window.scrollY >= 50) {
        scrollUp.classList.add('show-scroll');
      } else {
        scrollUp.classList.remove('show-scroll');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a href='#' className='scrollup scrollup__icon' aria-label='Return to top'>
      <i className='bx bx-up-arrow-circle'></i>
    </a>
  );
};

export default ScrollUp;
