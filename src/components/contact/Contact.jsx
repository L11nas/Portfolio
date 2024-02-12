import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { useDarkMode } from '../../ThemeContext';

const Contact = () => {
  const { darkMode } = useDarkMode();
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = () => {
    if (errorMessage) {
      console.log('Email not sent due to error message:', errorMessage);
      return;
    }
    emailjs
      .sendForm(
        'service_cq925wv',
        'template_tpbxg1u',
        form.current,
        '_rcfn7hJ6U87uOIyl'
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
        setFormData({ name: '', email: '', project: '' }); // Reset the form after successful email send
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the required fields are empty
    if (!formData.name || !formData.email || !formData.project) {
      setErrorMessage('Fields are empty. Please fill them.');
      return;
    }

    setFormData({ name: '', email: '', project: '' });
    setErrorMessage('');

    sendEmail(); // Move the call to sendEmail here, after resetting the form data
  };
  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <section className='contact section' id='contact'>
        <h2 className='section__title'>Get in touch</h2>
        <span className='section__subtitle'>Contact me</span>

        <div className='contact__container container grid'>
          <div className='contact__content '>
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
                <a
                  href='https://wa.me/+37067206686'
                  className='contact__button'
                >
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
            <form ref={form} onSubmit={handleSubmit} className='contact__form'>
              <div className='contact__form-div'>
                <label className='contact__form-tag'>Name</label>
                <input
                  type='text'
                  name='name'
                  className={`contact__form-input ${
                    darkMode ? 'dark-mode' : ''
                  }`}
                  placeholder='Insert Your name'
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className='contact__form-div'>
                <label className='contact__form-tag'>Mail</label>
                <input
                  type='email'
                  name='email'
                  className={`contact__form-input ${
                    darkMode ? 'dark-mode' : ''
                  }`}
                  placeholder='insert Your email'
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className='contact__form-div contact__form-area'>
                <label className='contact__form-tag'>Project</label>
                <textarea
                  name='project'
                  cols='30'
                  rows='10'
                  className={`contact__form-input ${
                    darkMode ? 'dark-mode' : ''
                  }`}
                  placeholder='Write your project'
                  value={formData.project}
                  onChange={(e) =>
                    setFormData({ ...formData, project: e.target.value })
                  }
                ></textarea>
              </div>
              <button type='submit' id='helloButton'>
                Send Message
              </button>
              {errorMessage && <p className='error-message'>{errorMessage}</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
