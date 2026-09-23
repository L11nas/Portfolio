import { useContent } from '../context/LanguageContext';
import './Faq.css';

const Faq = () => {
  const { faq } = useContent();

  return (
    <section className='section section--soft' id='faq' aria-labelledby='faq-title'>
      <div className='container faq'>
        <div className='faq__head reveal'>
          <p className='eyebrow'>{faq.eyebrow}</p>
          <h2 id='faq-title' className='section-title'>
            {faq.title}
          </h2>
        </div>

        <div className='faq__list reveal'>
          {faq.items.map((item) => (
            <details className='faq__item' key={item.q}>
              <summary>
                <span>{item.q}</span>
                <i className='bx bx-plus' aria-hidden='true'></i>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
