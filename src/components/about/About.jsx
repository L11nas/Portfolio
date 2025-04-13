import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useDarkMode } from '../../ThemeContext';
import './textContent.css';

const TextContent = () => {
  const { language } = useLanguage();
  const { darkMode } = useDarkMode();

  const translations = {
    LT: {
      heading:
        'Profesionalus svetainių kūrimas ir pritaikymas mobiliesiems įrenginiams',
      paragraph:
        'Specializuojuosi kuriant švarius, funkcionalius ir modernius svetainių dizainus, pritaikytus tiek stacionariems, tiek mobiliems įrenginiams. Dirbu su HTML, CSS, JavaScript ir React – užtikrinu greitą, patogią ir SEO optimizuotą svetainę.',
      features: [
        'Šiuolaikiškas dizainas',
        'Responsyvus pritaikymas',
        'Greitas veikimas',
        'SEO optimizacija',
        'Patogus valdymas',
      ],
    },
    EN: {
      heading:
        'Professional website development and adaptation for mobile devices',
      paragraph:
        'I specialize in creating clean, functional and modern website designs that are optimized for both desktop and mobile devices. I work with HTML, CSS, JavaScript and React – ensuring a fast, user-friendly, and SEO-optimized website.',
      features: [
        'Modern design',
        'Responsive adaptation',
        'Fast performance',
        'SEO optimization',
        'User-friendly management',
      ],
    },
  };

  const t = translations[language] || translations.LT;

  return (
    <div className={`text-content-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className='text-content-inner' data-aos='fade-up'>
        <h2 className='text-content-heading'>{t.heading}</h2>

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
                <span className='feature-icon'>
                  <i className='bx bx-check'></i>
                </span>
                <span className='feature-text'>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextContent;
