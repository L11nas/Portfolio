import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import DOMPurify from 'dompurify'; // Įtraukiame DOMPurify
import './contact.css';
import { useDarkMode } from '../../ThemeContext';
import PrivacyPolicyModal from '../privacyPolicy/PrivacyPolicyModal';

const Contact = () => {
  const { darkMode } = useDarkMode();
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    privacyPolicy: false,
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const sendEmail = (name, email, project) => {
    const templateParams = {
      name,
      email,
      project,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
        setFormData({ name: '', email: '', project: '', privacyPolicy: false });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const sanitizedName = DOMPurify.sanitize(formData.name);
    const sanitizedEmail = DOMPurify.sanitize(formData.email);
    const sanitizedProject = DOMPurify.sanitize(formData.project);

    if (
      !sanitizedName ||
      !sanitizedEmail ||
      !sanitizedProject ||
      !formData.privacyPolicy
    ) {
      setErrorMessage(
        'Fields are empty or Privacy Policy is not accepted. Please fill all required fields.'
      );
      return;
    }

    setErrorMessage('');
    sendEmail(sanitizedName, sanitizedEmail, sanitizedProject);
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <section className='contact section' id='Kontaktai'>
        <h2 className='section__title'>Susisiekite</h2>
        <div className='contact__container container grid'>
          {/* "Pasikalbėk su manimi" skyrius */}
          <div className='contact__content'>
            <h3 className='contact__title'>Pasikalbėk su manimi</h3>
            <div className='contact__info'>
              <div className='contact__card'>
                <i className='bx bx-mail-send contact__card-icon'></i>
                <h3 className='contact__card-title'>Email</h3>
                <span className='contact__card-data'>
                  linaswebdev@email.com
                </span>
                <a
                  href='mailto:linaswebdev@email.com?subject=Kontaktas iš portfolio&body=Labas, Linas!'
                  className='contact__button'
                >
                  Parašyk
                </a>
              </div>
              <div className='contact__card'>
                <i className='bx bxl-whatsapp contact__card-icon'></i>
                <h3 className='contact__card-title'>WhatsApp</h3>
                <span className='contact__card-data'>+37067206686</span>
                <a
                  href='https://wa.me/37067206686?text=Labas,%20Linas!'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='contact__button'
                >
                  Parašyk
                </a>
              </div>
              <div className='contact__card'>
                <i className='bx bxl-messenger contact__card-icon'></i>
                <h3 className='contact__card-title'>Messenger</h3>
                <span className='contact__card-data'>Facebook</span>
                <a
                  href='https://m.me/linas.ulevicius.3'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='contact__button'
                >
                  Parašyk
                </a>
              </div>
            </div>
          </div>

          {/* "Parašyk man apie savo projektą" skyrius */}
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
                  required
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
                  required
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
                  required
                ></textarea>
              </div>
              <div className='contact__form-div'>
                <label className='contact__form-checkbox'>
                  <input
                    type='checkbox'
                    name='privacyPolicy'
                    required
                    checked={formData.privacyPolicy}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        privacyPolicy: e.target.checked,
                      })
                    }
                  />
                  Sutinku su{' '}
                  <span
                    className='privacy-policy-link'
                    onClick={openModal}
                    style={{
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      color: 'blue',
                    }}
                  >
                    Privatumo politika
                  </span>
                </label>
              </div>
              <button type='submit' id='helloButton'>
                Siųsti žinutę
              </button>
              {errorMessage && <p className='error-message'>{errorMessage}</p>}
            </form>
          </div>
        </div>
      </section>
      <PrivacyPolicyModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Contact;
