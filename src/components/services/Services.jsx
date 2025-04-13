import React, { useState, useEffect } from 'react';
import './services.css';
import { Helmet } from 'react-helmet-async';
import { useDarkMode } from '../../ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

const Services = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState(null);

  // Refresh AOS when component mounts
  useEffect(() => {
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setActiveTab(null);
      }
    };
    window.addEventListener('keydown', handleEsc);

    // Prevent body scroll when modal is open
    if (activeTab !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [activeTab]);

  const translations = {
    LT: {
      pageTitle: 'Paslaugos | Mano Portfolio',
      pageDescription:
        'Sužinokite daugiau apie siūlomas paslaugas, įskaitant produktų dizainą, UI/UX ir kitas paslaugas.',
      sectionTitle: 'Paslaugos',
      sectionSubtitle: 'Ką aš siūlau',
      serviceTitles: [
        'Produktų\nDizainas',
        'UI/UX\nDizainas',
        'Kitos\nPaslaugos',
      ],
      modalTitles: [
        'Produkto dizainerio informacija',
        'UI/UX dizaino informacija',
        'Kita paslaugų informacija',
      ],
      serviceInfo: [
        [
          'Svetainių dizaino projektai, pritaikyti mobiliesiems įrenginiams.',
          'Interaktyvių prototipų kūrimas',
          'Naudotojo sąsajos ir vartotojo patirties optimizavimas',
        ],
        [
          'Patirtis su „Landing Page" ir el. pašto šablonais',
          'Praktika kuriant dizaino sprendimus',
          'Dizaino ir maketavimo paslaugos smulkioms įmonėms - Canva',
        ],
        [
          'SQL lentelių kūrimas ir administravimas: efektyvus duomenų valdymas.',
          'CRUD operacijų įgyvendinimas: pilnas duomenų valdymo ciklas.',
          'Back-end sprendimai: sistemų integracija ir optimizavimas.',
        ],
      ],
      closeButton: 'Uždaryti',
      viewMore: 'Žiūrėti daugiau',
    },
    EN: {
      pageTitle: 'Services | My Portfolio',
      pageDescription:
        'Learn more about offered services, including product design, UI/UX, and other solutions.',
      sectionTitle: 'Services',
      sectionSubtitle: 'What I offer',
      serviceTitles: ['Product\nDesign', 'UI/UX\nDesign', 'Other\nServices'],
      modalTitles: [
        'Product Designer Information',
        'UI/UX Design Information',
        'Other Service Information',
      ],
      serviceInfo: [
        [
          'Website design projects optimized for mobile devices.',
          'Creation of interactive prototypes',
          'User interface and user experience optimization',
        ],
        [
          'Experience with landing pages and email templates',
          'Practice in creating design solutions',
          'Design and layout services for small businesses - Canva',
        ],
        [
          'SQL table creation and administration: efficient data management.',
          'Implementation of CRUD operations: complete data management cycle.',
          'Back-end solutions: systems integration and optimization.',
        ],
      ],
      closeButton: 'Close',
      viewMore: 'View More',
    },
  };

  const t = translations[language];

  const serviceIcons = ['layout', 'palette', 'code-alt'];

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>{t.pageTitle}</title>
        <meta name='description' content={t.pageDescription} />
        <meta
          name='keywords'
          content='Services, Product Design, UI/UX, SQL, CRUD'
        />
        <meta name='author' content='Linas Ulevičius' />
        <meta property='og:title' content={t.pageTitle} />
        <meta property='og:description' content={t.pageDescription} />
        <meta property='og:url' content='https://linaswebdev.lt/services' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/img/og-image.jpg' />
        <meta name='twitter:title' content={t.pageTitle} />
        <meta name='twitter:description' content={t.pageDescription} />
        <meta name='twitter:card' content='summary_large_image' />
      </Helmet>

      {/* JSON-LD Schema.org Data */}
      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          provider: {
            '@type': 'Person',
            name: 'Linas Ulevičius',
          },
          name: t.sectionTitle,
          description: t.pageDescription,
        })}
      </script>

      <div className={darkMode ? 'dark-mode' : ''}>
        <section className='services__section' id='services'>
          <div className='services__container container'>
            <h1 className='section__title' data-aos='fade-down'>
              {t.sectionTitle}
            </h1>
            <h2
              className='section__subtitle'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              {t.sectionSubtitle}
            </h2>

            <div className='services__content-grid'>
              {t.serviceTitles.map((title, index) => (
                <div
                  className='services__card'
                  key={index}
                  data-aos='fade-up'
                  data-aos-delay={300 + index * 100}
                >
                  <div className='services__card-header'>
                    <div className='services__icon-container'>
                      <i
                        className={`bx bx-${serviceIcons[index]} services__icon`}
                      ></i>
                    </div>
                    <h3 className='services__title'>
                      {title.split('\n').map((line, i) => (
                        <span key={i} className='services__title-line'>
                          {line}
                        </span>
                      ))}
                    </h3>
                  </div>

                  <button
                    className='services__button'
                    onClick={() => setActiveTab(index)}
                    aria-expanded={activeTab === index}
                    aria-controls={`modal-${index}`}
                  >
                    {t.viewMore}
                    <i className='bx bx-right-arrow-alt services__button-icon'></i>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Modal */}
          {activeTab !== null && (
            <div
              className={`services__modal ${
                activeTab !== null ? 'active__modal' : ''
              }`}
              id={`modal-${activeTab}`}
              role='dialog'
              aria-labelledby={`modal-title-${activeTab}`}
              aria-describedby={`modal-description-${activeTab}`}
              onClick={(e) => {
                if (e.target.classList.contains('services__modal')) {
                  setActiveTab(null);
                }
              }}
            >
              <div
                className='services__modal-content'
                data-aos='zoom-in'
                data-aos-duration='300'
              >
                <div className='services__modal-header'>
                  <h3
                    className='services__modal-title'
                    id={`modal-title-${activeTab}`}
                  >
                    {t.modalTitles[activeTab]}
                  </h3>
                  <button
                    className='services__modal-close'
                    onClick={() => setActiveTab(null)}
                    aria-label={t.closeButton}
                  >
                    <i className='bx bx-x'></i>
                  </button>
                </div>

                <div className='services__modal-body'>
                  <ul
                    className='services__modal-list'
                    id={`modal-description-${activeTab}`}
                  >
                    {t.serviceInfo[activeTab].map((info, idx) => (
                      <li key={idx} className='services__modal-item'>
                        <i className='bx bx-check-circle services__modal-icon'></i>
                        <p className='services__modal-info'>{info}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='services__modal-footer'>
                  <button
                    onClick={() => setActiveTab(null)}
                    className='services__modal-button'
                  >
                    {t.closeButton}
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Services;
