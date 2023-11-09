import React from 'react';
import './contact.css';
const Contact = () => {
  return (
    <section className='contact section' id='contact'>
      <h2 className='section__title'>Get in touch</h2>
      <span className='section__subtitle'>Contact me</span>

      <div className='contact__container container grid'>
        <div className='contact__content'>
          <h3 className='contact__title'>Talk to me</h3>

          <div className='contact__info'>
            <div className='contact__card'>
              <i className='bx bx-mail-send contact__card-icon'></i>
              <h3 className='contact__card-title'>Email</h3>
              <span className='contact__card-data'>
                linaswebstudio@gmail.com
              </span>
              <a
                href='mailto:linaswebstudio@gmail.com'
                className='contact__button'
              >
                Write me{' '}
                <i className='bx bx-right-arrow-alt contact__button-icon '></i>
              </a>
            </div>
            <div className='contact__card'>
              <i className='bx bxl-whatsapp contact__card-icon'></i>
              <h3 className='contact__card-title'>Whatsapp</h3>
              <span className='contact__card-data'>+37067206686</span>
              <a href='https://wa.me/+37067206686' className='contact__button'>
                Write me{' '}
                <i className='bx bx-right-arrow-alt contact__button-icon '></i>
              </a>
            </div>
            <div className='contact__card'>
              <i className='bx bxl-messenger contact__card-icon'></i>
              <h3 className='contact__card-title'>Messenger</h3>
              <span className='contact__card-data'>Linas</span>
              <a
                href='https://m.me/USER_OR_PAGE_ID
'
                className='contact__button'
              >
                Write me{' '}
                <i className='bx bx-right-arrow-alt contact__button-icon '></i>
              </a>
            </div>
          </div>
        </div>

        <div className='contact__content'>
          <h3 className='contact__title'>Write me your project</h3>
          <form action='' className='contact__form'>
            <div className='contact__form-div'>
              <label className='contact__form-tag'>Mail</label>
              <input
                type='email'
                name='email'
                className='contact__form-input'
                placeholder='insert Your email'
              />
            </div>
            <div className='contact__form-div'>
              <label className='contact__form-tag'>Name</label>
              <input
                type='email'
                name='email'
                className='contact__form-input'
                placeholder='insert Your email'
              />
            </div>
            <div className='contact__form-div contact__form-area'>
              <label className='contact__form-tag'>Project</label>
              <textarea
                name='Project'
                cols='30'
                rows='10'
                className='contact__form-input'
                placeholder='Write your project'
              ></textarea>
            </div>
            <button id='helloButton'>Say Hello</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
