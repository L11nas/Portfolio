import { useContent } from '../context/LanguageContext';
import { goToContact } from '../utils';
import './Services.css';
import Icon from '../components/Icon';

const Services = () => {
  const { services } = useContent();
  const { featured } = services;

  return (
    <section className='section' id='services' aria-labelledby='services-title'>
      <div className='container'>
        <div className='section-head reveal'>
          <p className='eyebrow'>{services.eyebrow}</p>
          <h2 id='services-title' className='section-title'>
            {services.title}
          </h2>
          <p className='section-lead'>{services.lead}</p>
        </div>

        <div className='services'>
          <article className='service-featured reveal'>
            <div>
              <h3 className='service-featured__title'>{featured.title}</h3>
              <p className='service-featured__text'>{featured.text}</p>
              <a
                href='#contact'
                className='btn btn--light'
                onClick={(e) => {
                  e.preventDefault();
                  goToContact();
                }}
              >
                {featured.cta}
                <Icon name='bx-right-arrow-alt' />
              </a>
            </div>
            <div>
              <p className='service-featured__label'>{featured.includesLabel}</p>
              <ul className='check-list'>
                {featured.includes.map((item) => (
                  <li key={item}>
                    <Icon name='bx-check' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <ul className='services__grid'>
            {services.items.map((item) => (
              <li className='service-card reveal' key={item.title}>
                <Icon name={item.icon} className='service-card__icon' />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
