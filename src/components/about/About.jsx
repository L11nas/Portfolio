import React from 'react';
import { Helmet } from 'react-helmet-async';
import './about.css';
import Info from './Info';
import { useDarkMode } from '../../ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

const About = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  const translations = {
    LT: {
      title: 'Apie mane',
      subtitle: 'Front-end programuotojas',
      description: `Profesionalus svetainių kūrimas ir pritaikymas mobiliesiems įrenginiams.

Specializuojuosi kuriant švarius, funkcionalius ir modernius svetainių dizainus, pritaikytus tiek stacionariems, tiek mobiliems įrenginiams. Dirbu su HTML, CSS, JavaScript ir React, todėl galiu užtikrinti, kad jūsų svetainė bus greita, patogi vartotojui ir SEO optimizuota.

Ką siūlau?

✔️ Svetainių kūrimas – nuo dizaino iki pilno veikimo
✔️ Responsyvus dizainas – jūsų svetainė puikiai atrodys visuose įrenginiuose
✔️ Individualiai pritaikytos funkcijos – pagal jūsų verslo poreikius
✔️ Google Analytics integracija – stebėkite lankytojų srautus ir elgseną

Dirbu atsakingai ir patikimai. Jei ieškote modernios, efektyvios ir profesionalios svetainės, susisiekite!`,
      pageTitle: 'Apie mane | Linaswebdev',
      metaDescription:
        'Sužinokite apie Linaswebdev kaip front-end programuotoją, jo patirtį ir pasiekimus.',
    },
    EN: {
      title: 'About Me',
      subtitle: 'Front-end Developer',
      description: `Professional website development and adaptation for mobile devices.

I specialize in creating clean, functional and modern website designs that are optimized for both desktop and mobile devices. I work with HTML, CSS, JavaScript and React, so I can make sure your website is fast, user friendly and SEO optimized.

What do I offer?

✔️ Website development - from design to full operation
✔️ Responsive design – your website will look great on all devices
✔️ Customized features - according to your business needs
✔️ Google Analytics integration - monitor visitor traffic and behavior

I work responsibly and reliably. If you are looking for a modern, efficient and professional website, get in touch!`,
      pageTitle: 'About Me | Linaswebdev',

      metaDescription:
        'Learn about Linaswebdev as a front-end developer, his experience, and achievements.',
    },
  };

  const { title, subtitle, description, pageTitle, metaDescription } =
    translations[language] || translations.LT;

  return (
    <>
      {/* SEO Metadata */}
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

      {/* About Section */}
      <div className={darkMode ? 'dark-mode' : ''}>
        <section className='about__section' id='about'>
          <h1 className='section__title'>{title}</h1>
          <h2 className='section__subtitle'>{subtitle}</h2>
          <div className='about__container container__grid'>
            <div className='about__data'>
              <Info />
              <p className='about__description'>{description}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
