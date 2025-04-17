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
        { name: 'HTML', level: 'Vidutinio lygio', percentage: 80 },
        { name: 'CSS', level: 'Vidutinio lygio', percentage: 75 },
        { name: 'JavaScript', level: 'Vidutinio lygio', percentage: 70 },
        { name: 'Git', level: 'Vidutinio lygio', percentage: 65 },
        { name: 'ReactJS', level: 'Vidutinio lygio', percentage: 75 },
      ],
    },
    EN: {
      title: 'Frontend',
      skills: [
        { name: 'HTML', level: 'Mid-level', percentage: 80 },
        { name: 'CSS', level: 'Mid-level', percentage: 75 },
        { name: 'JavaScript', level: 'Mid-level', percentage: 70 },
        { name: 'Git', level: 'Mid-level', percentage: 65 },
        { name: 'ReactJS', level: 'Mid-level', percentage: 75 },
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
        aria-labelledby='frontend-skills'
      >
        <div className='skills__group' id='frontend-skills'>
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
                      animationDelay: `${0.5 + index * 0.1}s`,
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

export default Frontend;
