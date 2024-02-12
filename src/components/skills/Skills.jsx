import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import { useDarkMode } from '../../ThemeContext';

const Skills = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <section className='skills section' id='skills'>
        <h2 className='section__title'>Skills</h2>
        <span className='section__subtitle'></span>
        <div className='skills__container container grid'>
          <Frontend />
          <Backend />
        </div>
      </section>
    </div>
  );
};
export default Skills;
