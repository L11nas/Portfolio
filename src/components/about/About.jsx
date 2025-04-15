import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './about.css';
import Info from './Info';

import { useDarkMode } from '../../ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

const About = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  useEffect(() => {
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  const translations = {
    LT: {
      title: 'Apie mane',

      pageTitle: 'Apie mane | Linaswebdev',
      metaDescription:
        'Sužinokite apie Linaswebdev kaip front-end programuotoją, jo patirtį ir pasiekimus.',
      heading: 'Profesionalus svetainių kūrimas visoms platformoms',
      paragraph:
        'Esu svetainių kūrimo specialistas, kuris sukuria patrauklias, greitai veikiančias ir funkcionalias svetaines verslui ir asmeniniam naudojimui. Naudoju HTML, CSS, JavaScript ir React technologijas, užtikrindamas jūsų svetainės optimalų veikimą visuose įrenginiuose ir aukštą poziciją paieškos sistemose.',
      features: [
        'Modernus ir unikalus dizainas',
        'Pilnas pritaikymas mobiliesiems įrenginiams',
        'Greitas puslapių krovimosi laikas',
        'Google paieškos sistemai optimizuotas turinys',
        'Intuityvi vartotojo sąsaja ir patogus valdymas',
      ],
    },
    EN: {
      title: 'About Me',

      pageTitle: 'About Me | Linaswebdev',
      metaDescription:
        'Learn about Linaswebdev as a front-end developer, his experience, and achievements.',
      heading: 'Professional website development for all platforms',
      paragraph:
        'I am a website development specialist who creates attractive, fast-loading, and functional websites for business and personal use. Using HTML, CSS, JavaScript, and React technologies, I ensure your website performs optimally on all devices and ranks high in search engines.',
      features: [
        'Modern and unique design',
        'Fully responsive on all devices',
        'Fast page loading speed',
        'Google search engine optimized content',
        'Intuitive user interface and easy management',
      ],
    },
  };

  const {
    title,
    subtitle,
    pageTitle,
    metaDescription,
    heading,
    paragraph,
    features,
  } = translations[language] || translations.LT;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name='description' content={metaDescription} />
        <meta
          name='keywords'
          content='Front-end Developer, React, HTML, CSS, JavaScript'
        />
        <meta name='author' content='Linas Ulevičius' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='canonical' href='https://linaswebdev.lt/about' />
      </Helmet>

      <div className={darkMode ? 'dark-mode' : ''}>
        <section className='about__section' id='about'>
          <h1 className='section__title' data-aos='fade-down'>
            {title}
          </h1>
          <h2
            className='section__subtitle'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            {subtitle}
          </h2>

          {/* Paslaugų aprašymo sekcija */}
          <section
            className={`text-content-container ${darkMode ? 'dark-mode' : ''}`}
            aria-labelledby='services-heading'
          >
            <div className='text-content-inner' data-aos='fade-up'>
              <h2 id='services-heading' className='text-content-heading'>
                {heading}
              </h2>
              <div className='text-content-body'>
                <p
                  className='text-content-paragraph'
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  {paragraph}
                </p>
                <div
                  className='text-content-features'
                  data-aos='fade-up'
                  data-aos-delay='300'
                >
                  {features.map((feature, index) => (
                    <div
                      className='feature-item'
                      key={index}
                      data-aos='fade-right'
                      data-aos-delay={400 + index * 100}
                    >
                      <span className='feature-icon' aria-hidden='true'>
                        <i className='bx bx-check'></i>
                      </span>
                      <span className='feature-text'>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Sertifikatų kortelės sekcija */}
          <Info />
        </section>
      </div>
    </>
  );
};

export default About;
