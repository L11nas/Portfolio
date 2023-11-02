import React from 'react';
import './about.css';
import img from '/src/assets/portfolio.jpg';
import Info from './Info';
const About = () => {
  return (
    <section className='about__section' id='about'>
      <h2 className='section__title'>About me</h2>
      <span className='section__subtitle'>My introduction</span>
      <div className='about__container container__grid'>
        <img src={img} alt='' className='about__img' />

        <div className='about__data'>
          <Info />
          <p className='about__description'>
            Aprasyti ka as kuriu, kokius projektus kuriau
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
