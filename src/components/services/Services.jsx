import React, { useState } from 'react';
import './services.css';
import { useDarkMode } from '../../ThemeContext';

const Services = () => {
  const { darkMode } = useDarkMode();
  const [activeTab, setActiveTab] = useState(null);

  const openModal = (index) => {
    setActiveTab(index);
  };

  const closeModal = () => {
    setActiveTab(null);
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <section className='services section' id='Paslaugos'>
        <h2 className='section__title'>Paslaugos</h2>
        <span className='section__subtitle'></span>

        <div className='services__container container grid'>
          {/* Service 1 */}
          <div className='services__content'>
            <div>
              <i className='bx bx-grid-alt services__icon'></i>
              <h3 className='services__title'>
                Produktai
                <br />
                Dizainas
              </h3>
            </div>
            <span className='services__button' onClick={() => openModal(1)}>
              Žiūrėti daugiau{' '}
              <i className='bx bx-right-arrow-alt services__button-icon'></i>
            </span>
            {activeTab === 1 && (
              <div className='services__modal active__modal'>
                <div className='services__modal-content'>
                  <h3 className='services__modal-title'>
                    Produkto dizainerio informacija
                  </h3>
                  <p className='services__modal-description'></p>
                  <ul className='services__modal-services-grid'>
                    <li className='services__modal-service'>
                      <i className='bx bx-check-circle services__modal-icon'></i>
                      <p className='services__modal-info'>
                        Svetainių dizaino projektai, pritaikyti mobiliesiems
                        įrenginiams. Koduodamas dizainą, sukurtą Figma
                        platformoje, užtikrinu tinkamą jo adaptaciją įvairiems
                        ekranų dydžiams.
                      </p>
                    </li>
                    <li className='services__modal-service'>
                      <i className='bx bx-check-circle services__modal-icon'></i>
                      <p className='services__modal-info'>
                        Interaktyvių prototipų kūrimas
                      </p>
                    </li>
                    <li className='services__modal-service'>
                      <i className='bx bx-check-circle services__modal-icon'></i>
                      <p className='services__modal-info'>
                        Naudotojo sąsajos ir vartotojo patirties optimizavimas
                      </p>
                    </li>
                  </ul>
                  <button
                    onClick={closeModal}
                    className='services__modal-close-button'
                  >
                    Uždaryti
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Service 2 */}
          <div className='services__content'>
            <div>
              <i className='bx bx-pencil services__icon'></i>
              <h3 className='services__title'>Ui/Ux Dizaino</h3>
            </div>
            <span className='services__button' onClick={() => openModal(2)}>
              Žiūrėti daugiau{' '}
              <i className='bx bx-right-arrow-alt services__button-icon'></i>
            </span>
            {activeTab === 2 && (
              <div className='services__modal active__modal'>
                <div className='services__modal-content'>
                  <h3 className='services__modal-title'>
                    Ui/Ux dizaino informacija
                  </h3>
                  <p className='services__modal-description'></p>
                  <ul className='services__modal-services-grid'>
                    <li className='services__modal-service'>
                      <i className='bx bx-check-circle services__modal-icon'></i>
                      <p className='services__modal-info'>
                        Patirtis su „Landing Page“ ir el. pašto šablonais
                      </p>
                    </li>
                    <li className='services__modal-service'>
                      <i className='bx bx-check-circle services__modal-icon'></i>
                      <p className='services__modal-info'>
                        Praktika kuriant dizaino sprendimus įvairiems projektams
                      </p>
                    </li>
                    <li className='services__modal-service'>
                      <i className='bx bx-check-circle services__modal-icon'></i>
                      <p className='services__modal-info'>
                        Dizaino ir maketavimo paslaugos smulkioms įmonėms- Canva
                      </p>
                    </li>
                  </ul>
                  <button
                    onClick={closeModal}
                    className='services__modal-close-button'
                  >
                    Uždaryti
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Service 3 */}
          <div className='services__content'>
            <div>
              <i className='bx bx-edit services__icon'></i>
              <h3 className='services__title'>Kitos paslaugos</h3>
            </div>
            <span className='services__button' onClick={() => openModal(3)}>
              Žiūrėti daugiau{' '}
              <i className='bx bx-right-arrow-alt services__button-icon'></i>
            </span>
            {activeTab === 3 && (
              <div className='services__modal active__modal'>
                <div className='services__modal-content'>
                  <h3 className='services__modal-title'>
                    Kita paslaugų informacija
                  </h3>
                  <p className='services__modal-description'></p>
                  <ul className='services__modal-services-grid'>
                    <li className='services__modal-service'>
                      <i className='bx bx-check-circle services__modal-icon'></i>
                      <p className='services__modal-info'>
                        SQL lentelių kūrimas ir administravimas: efektyvus
                        duomenų valdymas ir struktūrizavimas.
                      </p>
                    </li>
                    <li className='services__modal-service'>
                      <i className='bx bx-check-circle services__modal-icon'></i>
                      <p className='services__modal-info'>
                        CRUD operacijų įgyvendinimas: pilnas duomenų valdymo
                        ciklas – kurti, skaityti, atnaujinti ir šalinti.
                      </p>
                    </li>
                    <li className='services__modal-service'>
                      <i className='bx bx-check-circle services__modal-icon'></i>
                      <p className='services__modal-info'>
                        Back-end sprendimai: sistemų integracija ir
                        optimizavimas.
                      </p>
                    </li>
                  </ul>
                  <button
                    onClick={closeModal}
                    className='services__modal-close-button'
                  >
                    Uždaryti
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
