import { useContent } from '../context/LanguageContext';
import photo from '../assets/portfolio.jpg';
import './About.css';

const About = () => {
  const { about } = useContent();

  return (
    <section className='section' id='about' aria-labelledby='about-title'>
      <div className='container about'>
        <img
          src={photo}
          alt={about.photoAlt}
          width='1600'
          height='1200'
          loading='lazy'
          decoding='async'
          className='about__photo reveal'
        />

        <div className='about__body reveal'>
          <p className='eyebrow'>{about.eyebrow}</p>
          <h2 id='about-title' className='section-title'>
            {about.title}
          </h2>
          {about.paragraphs.map((text) => (
            <p className='about__text' key={text}>
              {text}
            </p>
          ))}
          <ul className='check-list about__points'>
            {about.points.map((point) => (
              <li key={point}>
                <i className='bx bx-check' aria-hidden='true'></i>
                {point}
              </li>
            ))}
          </ul>
          {about.personal && <p className='about__personal'>{about.personal}</p>}
        </div>
      </div>
    </section>
  );
};

export default About;
