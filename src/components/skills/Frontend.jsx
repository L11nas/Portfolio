import React from 'react';
import { useDarkMode } from '../../ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

const Frontend = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  const translations = {
    LT: {
      title: 'Frontend',
      skills: [
        { name: 'HTML', level: 'Vidutinio lygio' },
        { name: 'CSS', level: 'Vidutinio lygio' },
        { name: 'JavaScript', level: 'Vidutinio lygio' },
        { name: 'Git', level: 'Vidutinio lygio' },
        { name: 'ReactJS', level: 'Vidutinio lygio' },
      ],
    },
    EN: {
      title: 'Frontend',
      skills: [
        { name: 'HTML', level: 'Mid-level' },
        { name: 'CSS', level: 'Mid-level' },
        { name: 'JavaScript', level: 'Mid-level' },
        { name: 'Git', level: 'Mid-level' },
        { name: 'ReactJS', level: 'Mid-level' },
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
        aria-labelledby='frontend-skills'
      >
        <div className='skills__group' id='frontend-skills'>
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

export default Frontend;
