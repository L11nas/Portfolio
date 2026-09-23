import { useContent } from '../context/LanguageContext';
import './Process.css';

const Process = () => {
  const { process } = useContent();

  return (
    <section className='section section--soft' id='process' aria-labelledby='process-title'>
      <div className='container'>
        <div className='section-head reveal'>
          <p className='eyebrow'>{process.eyebrow}</p>
          <h2 id='process-title' className='section-title'>
            {process.title}
          </h2>
        </div>

        <ol className='steps'>
          {process.steps.map((step, index) => (
            <li className='step reveal' key={step.title}>
              <span className='step__num' aria-hidden='true'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className='step__title'>{step.title}</h3>
              <p className='step__text'>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
