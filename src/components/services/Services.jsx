import React, { useState } from 'react';
import './services.css';
import { Helmet } from 'react-helmet-async';
import { useDarkMode } from '../../ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

const Services = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState(null);

  const translations = {
    LT: {
      pageTitle: 'Paslaugos | Mano Portfolio',
      pageDescription:
        'Sužinokite daugiau apie siūlomas paslaugas, įskaitant produktų dizainą, UI/UX ir kitas paslaugas.',
      sectionTitle: 'Paslaugos',
      serviceTitles: [
        'Produktai\nDizainas',
        'Ui/Ux Dizaino',
        'Kitos paslaugos',
      ],
      modalTitles: [
        'Produkto dizainerio informacija',
        'Ui/Ux dizaino informacija',
        'Kita paslaugų informacija',
      ],
      serviceInfo: [
        [
          'Svetainių dizaino projektai, pritaikyti mobiliesiems įrenginiams.',
          'Interaktyvių prototipų kūrimas',
          'Naudotojo sąsajos ir vartotojo patirties optimizavimas',
        ],
        [
          'Patirtis su „Landing Page“ ir el. pašto šablonais',
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
      serviceTitles: ['Products\nDesign', 'UI/UX Design', 'Other Services'],
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
        <section className='services section' id='services'>
          <h1 className='section__title'>{t.sectionTitle}</h1>

          <div className='services__container container grid'>
            {t.serviceTitles.map((title, index) => (
              <div className='services__content' key={index}>
                <div>
                  <i
                    className={`bx bx-${
                      index === 0 ? 'grid-alt' : index === 1 ? 'pencil' : 'edit'
                    } services__icon`}
                  ></i>
                  <h2 className='services__title'>{title}</h2>
                </div>
                <button
                  className='services__button'
                  onClick={() => setActiveTab(index)}
                  aria-expanded={activeTab === index}
                  aria-controls={`modal-${index}`}
                >
                  {t.viewMore}{' '}
                  <i className='bx bx-right-arrow-alt services__button-icon'></i>
                </button>
                {activeTab === index && (
                  <div
                    className={`services__modal active__modal ${
                      darkMode ? 'dark-mode' : ''
                    }`}
                    id={`modal-${index}`}
                    role='dialog'
                    aria-labelledby={`modal-title-${index}`}
                    aria-describedby={`modal-description-${index}`}
                  >
                    <div className='services__modal-content'>
                      <h3
                        className='services__modal-title'
                        id={`modal-title-${index}`}
                      >
                        {t.modalTitles[index]}
                      </h3>
                      <ul
                        className='services__modal-services-grid'
                        id={`modal-description-${index}`}
                      >
                        {t.serviceInfo[index].map((info, idx) => (
                          <li key={idx} className='services__modal-service'>
                            <i className='bx bx-check-circle services__modal-icon'></i>
                            <p className='services__modal-info'>{info}</p>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => setActiveTab(null)}
                        className='services__modal-close-button'
                        aria-label={t.closeButton}
                      >
                        {t.closeButton}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
