import { useContent } from '../context/LanguageContext';
import { goToContact } from '../utils';
import './Pricing.css';
import Icon from '../components/Icon';

const Pricing = () => {
  const { pricing, guarantee } = useContent();

  return (
    <section className='section' id='pricing' aria-labelledby='pricing-title'>
      <div className='container'>
        <div className='section-head section-head--center reveal'>
          <p className='eyebrow'>{pricing.eyebrow}</p>
          <h2 id='pricing-title' className='section-title'>
            {pricing.title}
          </h2>
          <p className='section-lead'>{pricing.lead}</p>
        </div>

        <ul className='plans'>
          {pricing.plans.map((plan) => (
            <li
              key={plan.id}
              className={`plan reveal ${plan.featured ? 'plan--featured' : ''}`}
            >
              {plan.featured && <span className='plan__badge'>{pricing.badge}</span>}
              <h3 className='plan__name'>{plan.name}</h3>
              <p className='plan__price'>
                {plan.from !== false && <span className='plan__from'>{pricing.from}</span>}
                <span className='plan__amount'>{plan.price}&nbsp;€</span>
                {plan.unit && <span className='plan__from'>{plan.unit}</span>}
              </p>
              {plan.fit && <p className='plan__fit'>{plan.fit}</p>}
              <ul className='check-list plan__features'>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Icon name='bx-check' />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href='#contact'
                className={`btn btn--block ${plan.featured ? 'btn--primary' : 'btn--ghost'}`}
                onClick={(e) => {
                  e.preventDefault();
                  goToContact();
                }}
              >
                {plan.cta}
              </a>
            </li>
          ))}
        </ul>

        {pricing.extras?.length > 0 && (
          <div className='extras reveal'>
            <h3 className='extras__title'>{pricing.extrasTitle}</h3>
            <ul className='extras__list'>
              {pricing.extras.map((extra) => (
                <li className='extra' key={extra.name}>
                  <div>
                    <p className='extra__name'>{extra.name}</p>
                    <p className='extra__text'>{extra.text}</p>
                  </div>
                  <p className='extra__price'>
                    <span className='plan__from'>{pricing.from}</span> {extra.price}&nbsp;€
                    {extra.unit && <span className='extra__unit'> {extra.unit}</span>}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className='plans__notes reveal'>
          <p>{pricing.note}</p>
          <p>{pricing.excluded}</p>
        </div>

        <aside className='guarantee reveal'>
          <Icon name='bx-check-shield' className='guarantee__icon' />
          <div>
            <p className='guarantee__title'>{guarantee.title}</p>
            <p className='guarantee__text'>{guarantee.text}</p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Pricing;
