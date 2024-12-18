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
        'oGVarAmtx8lNifnjE'
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

    setErrorMessage('');
    sendEmail(); // Call sendEmail only if there are no errors
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <section className='contact section' id='Kontaktai'>
        <h2 className='section__title'>Susisiekite</h2>

        <div className='contact__container container grid'>
          <div className='contact__content'>
            <h3 className='contact__title'>Pasikalbėk su manimi</h3>

            <div className='contact__info'>
              {/* Contact Cards */}
              {/* El.paštas */}
              <div className='contact__card'>
                <i className='bx bx-mail-send contact__card-icon'></i>
                <h3 className='contact__card-title'>El.paštas</h3>
                <span className='contact__card-data'>
                  linas.webdev@gmail.com
                </span>
                <a
                  href='mailto:linas.webdev@gmail.com'
                  className='contact__button'
                >
                  Parašyk man{' '}
                  <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                </a>
              </div>
              {/* Whatsapp */}
              <div className='contact__card'>
                <i className='bx bxl-whatsapp contact__card-icon'></i>
                <h3 className='contact__card-title'>Whatsapp</h3>
                <span className='contact__card-data'>+37067206686</span>
                <a
                  href='https://wa.me/+37067206686'
                  className='contact__button'
                >
                  Parašyk man{' '}
                  <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                </a>
              </div>
              {/* Messenger */}
              <div className='contact__card'>
                <i className='bx bxl-messenger contact__card-icon'></i>
                <h3 className='contact__card-title'>Messenger</h3>
                <span className='contact__card-data'>Linas</span>
                <a
                  href='https://www.facebook.com/linas.ulevicius.3'
                  className='contact__button'
                >
                  Parašyk man{' '}
                  <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                </a>
              </div>
            </div>
          </div>

          <div className='contact__content'>
            <h3 className='contact__title'>Parašyk man apie savo projektą</h3>
            <form ref={form} onSubmit={handleSubmit} className='contact__form'>
              <div className='contact__form-div'>
                <label className='contact__form-tag'>Vardas</label>
                <input
                  type='text'
                  name='name'
                  className={`contact__form-input ${
                    darkMode ? 'dark-mode' : ''
                  }`}
                  placeholder='Įrašyk savo vardą'
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className='contact__form-div'>
                <label className='contact__form-tag'>El.paštas</label>
                <input
                  type='email'
                  name='email'
                  className={`contact__form-input ${
                    darkMode ? 'dark-mode' : ''
                  }`}
                  placeholder='Įrašyk savo el.paštą'
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className='contact__form-div contact__form-area'>
                <label className='contact__form-tag'>Projektas</label>
                <textarea
                  name='project'
                  cols='30'
                  rows='10'
                  className={`contact__form-input ${
                    darkMode ? 'dark-mode' : ''
                  }`}
                  placeholder='Rašyk apie projektą'
                  value={formData.project}
                  onChange={(e) =>
                    setFormData({ ...formData, project: e.target.value })
                  }
                ></textarea>
              </div>
              <button type='submit' id='helloButton'>
                Siųsti žinutę
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
