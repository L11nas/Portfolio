import { useContent } from '../context/LanguageContext';
import { goToContact, scrollToId } from '../utils';
import './Cta.css';

const Cta = () => {
  const { cta } = useContent();

  return (
    <section className='cta-band' aria-labelledby='cta-title'>
      <div className='container'>
        <div className='cta-band__box reveal'>
          <h2 id='cta-title' className='cta-band__title'>
            {cta.title}
          </h2>
          <p className='cta-band__text'>{cta.text}</p>
          <div className='cta-band__actions'>
            <a
              href='#contact'
              className='btn btn--light'
              onClick={(e) => {
                e.preventDefault();
                goToContact();
              }}
            >
              {cta.primary}
              <i className='bx bx-right-arrow-alt' aria-hidden='true'></i>
            </a>
            <a
              href='#work'
              className='btn cta-band__secondary'
              onClick={(e) => {
                e.preventDefault();
                scrollToId('work');
              }}
            >
              {cta.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
