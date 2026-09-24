import { useContent } from '../context/LanguageContext';
import { goToContact, scrollToId } from '../utils';
import './Hero.css';

const BrowserShot = ({ domain, image, className, eager }) => (
  <figure className={`browser ${className}`}>
    <div className='browser__bar' aria-hidden='true'>
      <span className='browser__dot' />
      <span className='browser__dot' />
      <span className='browser__dot' />
      <span className='browser__url'>{domain}</span>
    </div>
    <img
      src={image}
      alt=''
      width='1440'
      height='900'
      loading={eager ? 'eager' : 'lazy'}
      fetchpriority={eager ? 'high' : undefined}
      decoding='async'
    />
  </figure>
);

const Hero = () => {
  const { hero, clients, work } = useContent();
  const [builders, kirpeja] = work.projects;

  return (
    <section className='hero' id='top' aria-labelledby='hero-title'>
      <div className='hero__inner container'>
        <div className='hero__copy'>
          <p className='eyebrow'>{hero.eyebrow}</p>
          <h1 id='hero-title' className='hero__title'>
            {hero.title}
          </h1>
          <p className='hero__lead'>{hero.lead}</p>

          <div className='hero__actions'>
            <a
              href='#contact'
              className='btn btn--primary'
              onClick={(e) => {
                e.preventDefault();
                goToContact();
              }}
            >
              {hero.primary}
              <i className='bx bx-right-arrow-alt' aria-hidden='true'></i>
            </a>
            <a
              href='#pricing'
              className='btn btn--ghost'
              onClick={(e) => {
                e.preventDefault();
                scrollToId('pricing');
              }}
            >
              {hero.secondary}
            </a>
          </div>

          <ul className='hero__checks'>
            {hero.checks.map((item) => (
              <li key={item}>
                <i className='bx bx-check' aria-hidden='true'></i>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className='hero__visual' role='img' aria-label={hero.visualLabel}>
          <BrowserShot
            className='hero__shot hero__shot--back'
            domain={builders.domain}
            image={builders.image}
          />
          <BrowserShot
            className='hero__shot hero__shot--front'
            domain={kirpeja.domain}
            image={kirpeja.image}
            eager
          />
        </div>
      </div>

      <div className='clients container'>
        <p className='clients__title'>{clients.title}</p>
        <ul className='clients__list'>
          {clients.items.map((client) => (
            <li key={client.name}>
              <strong>{client.name}</strong>
              <span>{client.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
