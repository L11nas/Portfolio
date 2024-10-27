import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import { useDarkMode } from '../../ThemeContext';

const Skills = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <section className='skills section' id='Įgūdžiai'>
        <h2 className='section__title'>Įgūdžiai</h2>
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
