// TextContent.jsx
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useDarkMode } from '../../ThemeContext';
import './textContent.css';

const TextContent = () => {
  const { language } = useLanguage();
  const { darkMode } = useDarkMode();

  const translations = {
    LT: {
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

  const t = translations[language] || translations.LT;

  return (
    <section
      className={`text-content-container ${darkMode ? 'dark-mode' : ''}`}
      aria-labelledby='services-heading'
    >
      <div className='text-content-inner' data-aos='fade-up'>
        <h2 id='services-heading' className='text-content-heading'>
          {t.heading}
        </h2>
        <div className='text-content-body'>
          <p
            className='text-content-paragraph'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            {t.paragraph}
          </p>
          <div
            className='text-content-features'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            {t.features.map((feature, index) => (
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
  );
};

export default TextContent;
