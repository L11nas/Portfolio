import React, { useEffect } from 'react';
import './services.css';
import { Helmet } from 'react-helmet-async';
import { useDarkMode } from '../../ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

const Services = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  // Refresh AOS when component mounts

  const translations = {
    LT: {
      pageTitle: 'Paslaugos | Linaswebdev',
      pageDescription:
        'Profesionalios web kūrimo paslaugos: produkto dizainas, UI/UX sprendimai ir back-end programavimas. Sukurkite savo verslui optimalų interneto sprendimą.',
      sectionTitle: 'Paslaugos',
      sectionSubtitle: 'Ką aš siūlau',
      services: [
        {
          title: 'Produkto dizainas',
          description:
            'Kuriu svetainių dizaino sprendimus, pritaikytus mobiliesiems įrenginiams ir interaktyviems prototipams. Optimizuoju naudotojo sąsają (UI) ir patirtį (UX), kad jūsų verslo svetainė būtų funkcionali ir patraukli.',
          icon: 'layout',
        },
        {
          title: 'UI/UX dizainas',
          description:
            'Turiu patirties kuriant „Landing Page" ir el. pašto šablonus. Naudoju Canva bei kitus įrankius maketavimui ir dizaino sprendimams smulkioms įmonėms.',
          icon: 'palette',
        },
        {
          title: 'Back-end sprendimai',
          description:
            'Kuriu SQL duomenų bazes ir įgyvendinu CRUD operacijas. Siūlau sistemų integraciją ir optimizavimą – nuo duomenų valdymo iki back-end logikos.',
          icon: 'code-alt',
        },
      ],
    },
    EN: {
      pageTitle: 'Services | Linaswebdev',
      pageDescription:
        'Professional web development services: product design, UI/UX solutions, and back-end programming. Create an optimal online solution for your business.',
      sectionTitle: 'Services',
      sectionSubtitle: 'What I offer',
      services: [
        {
          title: 'Product Design',
          description:
            'I create website design solutions optimized for mobile devices and interactive prototypes. I optimize user interface (UI) and experience (UX) to make your business website functional and attractive.',
          icon: 'layout',
        },
        {
          title: 'UI/UX Design',
          description:
            'I have experience creating landing pages and email templates. I use Canva and other tools for layout and design solutions for small businesses.',
          icon: 'palette',
        },
        {
          title: 'Back-end Solutions',
          description:
            'I create SQL databases and implement CRUD operations. I offer system integration and optimization - from data management to back-end logic.',
          icon: 'code-alt',
        },
      ],
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
          content='Web Development, Product Design, UI/UX Design, Back-end Solutions, SQL, CRUD, Front-end, React, JavaScript, Responsive Design, Mobile-Friendly Websites'
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
          '@type': 'ItemList',
          itemListElement: t.services.map((service, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@type': 'Service',
              name: service.title,
              description: service.description,
              provider: {
                '@type': 'Person',
                name: 'Linas Ulevičius',
                url: 'https://linaswebdev.lt',
              },
            },
          })),
        })}
      </script>

      <div className={darkMode ? 'dark-mode' : ''}>
        <section className='services__section' id='services'>
          <div className='services__container container'>
            <h1 className='section__title' data-aos='fade-up'>
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
              {t.services.map((service, index) => (
                <div
                  className='services__card'
                  key={index}
                  data-aos='fade-up'
                  data-aos-delay={300 + index * 100}
                >
                  <div className='services__card-header'>
                    <div className='services__icon-container'>
                      <i className={`bx bx-${service.icon} services__icon`}></i>
                    </div>
                    <h3 className='services__title'>{service.title}</h3>
                  </div>

                  <div className='services__content'>
                    <p className='services__description'>
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
