import React from 'react';

const Services = () => {
  return (
    <section className='services section' id='services'>
      <h2 className='section__title'>Services</h2>
      <span className='section__subtitle'>What i offer</span>
      <div className='services__container grid'>
        <div className='services__content'>
          <div>
            <i className='uil uil services_icon'></i>
            <h3 className='srvices__title'></h3>
          </div>

          <span className='services__button'>
            View More{' '}
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>
          <div className='services__modal'></div>
          <div className='services__modal-content'>
            <i className='uil-times services__modal-close'></i>
            <h3 className='services__modal-title'></h3>
            <p className='services__modal-description'>Darbo patirtis</p>

            <ul className='services__modal-services-grid'>
              <li className='services__modal-service'>
                <i className='uil uil-check-circle services__modal-icon'>
                  <p className='services__modal-info'>
                    sukuriau at ir ta vartototjo sasaja
                  </p>
                </i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
