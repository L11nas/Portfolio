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
        { name: 'NodeJS', level: 'Bazinis' },
        { name: 'SQL', level: 'Bazinis' },
        { name: 'NoSQL - MongoDB', level: 'Bazinis' },
      ],
    },
    EN: {
      title: 'Backend',
      skills: [
        { name: 'NodeJS', level: 'Basic' },
        { name: 'SQL', level: 'Basic' },
        { name: 'NoSQL - MongoDB', level: 'Basic' },
      ],
    },
  };

  const { title, skills } = translations[language];

  return (
    <div className={`skills__content ${darkMode ? 'dark-mode' : ''}`}>
      <h3 className='skills__title'>{title}</h3>
      <div
        className='skills__box'
        role='group'
        aria-labelledby='backend-skills'
      >
        <div className='skills__group' id='backend-skills'>
          {skills.map((skill) => (
            <div className='skills__data' key={skill.name}>
              <i className='bx bx-badge-check'></i>
              <div>
                <h4 className='skills__name'>{skill.name}</h4>
                <span className='skills__level'>{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Backend;
