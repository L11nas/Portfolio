import React, { useState } from 'react';
import './services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState(null);

  const openModal = (index) => {
    setActiveTab(index);
  };

  const closeModal = () => {
    setActiveTab(null);
  };

  return (
    <section className='services section' id='services'>
      <h2 className='section__title'>Services</h2>
      <span className='section__subtitle'>What I offer</span>

      <div className='services__container container grid'>
        {/* Service 1 */}
        <div className='services__content'>
          <div>
            <i className='uil uil-web-grid services__icon'></i>
            <h3 className='services__title'>
              Product
              <br />
              Designer
            </h3>
          </div>

          <span className='services__button' onClick={() => openModal(1)}>
            View More{' '}
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>

          {activeTab === 1 && (
            <div className='services__modal active__modal'>
              <div className='services__modal-content'>
                <i
                  onClick={closeModal}
                  className='uil-times services__modal-close'
                ></i>
                <h3 className='services__modal-title'>
                  Product Designer Details
                </h3>
                <p className='services__modal-description'>work experience</p>
                <ul className='services__modal-services-grid'>
                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>what I create</p>
                  </li>
                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>
                      I position your company brand
                    </p>
                  </li>
                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>
                      Design and mockups of products for companies
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Service 2 */}
        <div className='services__content'>
          <div>
            <i className='uil uil-arrow services__icon'></i>
            <h3 className='services__title'>Ui/Ux Designer</h3>
          </div>

          <span className='services__button' onClick={() => openModal(2)}>
            View More{' '}
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>

          {activeTab === 2 && (
            <div className='services__modal active__modal'>
              <div className='services__modal-content'>
                <i
                  onClick={closeModal}
                  className='uil-times services__modal-close'
                ></i>
                <h3 className='services__modal-title'>
                  Ui/Ux Designer Details
                </h3>
                <p className='services__modal-description'>work experience</p>
                <ul className='services__modal-services-grid'>
                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>what I create</p>
                  </li>
                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>
                      I position your company brand
                    </p>
                  </li>
                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>
                      Design and mockups of products for companies
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Service 3 */}
        <div className='services__content'>
          <div>
            <i className='bx bx-edit services__icon'></i>
            <h3 className='services__title'>Other Service</h3>
          </div>

          <span className='services__button' onClick={() => openModal(3)}>
            View More{' '}
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>

          {activeTab === 3 && (
            <div className='services__modal active__modal'>
              <div className='services__modal-content'>
                <i
                  onClick={closeModal}
                  className='uil-times services__modal-close'
                ></i>
                <h3 className='services__modal-title'>Other Service Details</h3>
                <p className='services__modal-description'>work experience</p>
                <ul className='services__modal-services-grid'>
                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>what I create</p>
                  </li>
                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>
                      I position your company brand
                    </p>
                  </li>
                  <li className='services__modal-service'>
                    <i className='uil uil-check-circle services__modal-icon'></i>
                    <p className='services__modal-info'>
                      Design and mockups of products for companies
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
