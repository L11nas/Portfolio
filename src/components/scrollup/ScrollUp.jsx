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
    <a
      href='#top'
      className='scrollup scrollup__icon'
      aria-label='Return to top'
      role='button'
      tabIndex={0}
    >
      <i className='bx bx-up-arrow-circle' aria-hidden='true'></i>
    </a>
  );
};

export default ScrollUp;
