import React, { useState } from 'react';
import './worksection.css';
import { Data } from './Data';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const WorkSection = () => {
  const [showHiddenText, setShowHiddenText] = useState(
    Array(Data.length).fill(false)
  );

  const handleViewMoreClick = (index) => {
    const updatedShowHiddenText = [...showHiddenText];
    updatedShowHiddenText[index] = !showHiddenText[index]; // Toggle the state
    setShowHiddenText(updatedShowHiddenText);
  };

  return (
    <section className='worksection container section'>
      <h2 className='section__title'>My work</h2>
      <span className='section__subtitle'>What I offer</span>
      <Swiper
        className='worksection__container'
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(
          (
            { id, image, title, description, hiddenText, githubLink },
            index
          ) => {
            return (
              <SwiperSlide className='worksection__card' key={id}>
                <img src={image} alt='' className='worksection__img' />
                <div className='worksection__name'>
                  <h3>{title}</h3>
                  <a
                    href={githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='bx bxl-github icon'></i>
                  </a>
                </div>
                <p className='worksection__description'>{description}</p>
                {showHiddenText[index] ? (
                  <div>
                    <p className='worksection__hidden-text'>{hiddenText}</p>
                    <button
                      className='worksection__view-more'
                      onClick={() => handleViewMoreClick(index)}
                    >
                      View Less
                    </button>
                  </div>
                ) : (
                  <button
                    className='worksection__view-more'
                    onClick={() => handleViewMoreClick(index)}
                  >
                    View More
                  </button>
                )}
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </section>
  );
};

export default WorkSection;
