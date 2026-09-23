import { useContent } from '../context/LanguageContext';
import './Value.css';

const Value = () => {
  const { value } = useContent();

  return (
    <section className='section section--soft' id='value' aria-labelledby='value-title'>
      <div className='container value'>
        <div className='value__intro reveal'>
          <p className='eyebrow'>{value.eyebrow}</p>
          <h2 id='value-title' className='section-title'>
            {value.title}
          </h2>
          <p className='section-lead'>{value.text}</p>
        </div>

        <ul className='value__grid'>
          {value.cards.map((card) => (
            <li className='value__card reveal' key={card.title}>
              <i className={`bx ${card.icon} value__icon`} aria-hidden='true'></i>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Value;
