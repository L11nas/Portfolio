import React from 'react';
import './scrollup.css';
const ScrollUp = () => {
  window.addEventListener('scroll', function () {
    const scrollUp = document.querySelector('.scrollup');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
  });
  return (
    <a href='#' className='scrollup scrollup__icon'>
      <i className='bx bx-up-arrow-circle'></i>
    </a>
  );
};
export default ScrollUp;
