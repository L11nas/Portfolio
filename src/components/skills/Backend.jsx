import React from 'react';
import { useDarkMode } from '../../ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

const Backend = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  const translations = {
    LT: {
      title: 'Backend',
      skills: [
        { name: 'NodeJS', level: 'Bazinis', percentage: 50 },
        { name: 'SQL', level: 'Bazinis', percentage: 55 },
        { name: 'NoSQL - MongoDB', level: 'Bazinis', percentage: 45 },
      ],
    },
    EN: {
      title: 'Backend',
      skills: [
        { name: 'NodeJS', level: 'Basic', percentage: 50 },
        { name: 'SQL', level: 'Basic', percentage: 55 },
        { name: 'NoSQL - MongoDB', level: 'Basic', percentage: 45 },
      ],
    },
  };

  const { title, skills } = translations[language];

  return (
    <div
      className={`skills__content ${darkMode ? 'dark-mode' : ''}`}
      data-aos='fade-up'
      data-aos-duration='1000'
    >
      <h3 className='skills__title'>{title}</h3>

      <div
        className='skills__box'
        role='group'
        aria-labelledby='backend-skills'
      >
        <div className='skills__group' id='backend-skills'>
          {skills.map((skill, index) => (
            <div className='skills__data' key={skill.name}>
              <i className='bx bx-badge-check'></i>

              <div style={{ width: '100%' }}>
                <div className='skills__info'>
                  <h4 className='skills__name'>{skill.name}</h4>
                  <span className='skills__level'>{skill.level}</span>
                </div>

                <div className='skills__progress'>
                  <div
                    className='skills__progress-bar'
                    style={{
                      width: `${skill.percentage}%`,
                      animationDelay: `${0.7 + index * 0.1}s`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Backend;
