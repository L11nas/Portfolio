import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import DOMPurify from 'dompurify';
import './contact.css';
import { useDarkMode } from '../../ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import PrivacyPolicyModal from '../privacyPolicy/PrivacyPolicyModal';

const Contact = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
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
        language === 'LT'
          ? 'Laukai yra tušti arba privatumo politika nepriimta. Prašome užpildyti visus privalomus laukus.'
          : 'Fields are empty or Privacy Policy is not accepted. Please fill all required fields.'
      );
      return;
    }

    setErrorMessage('');
    sendEmail(sanitizedName, sanitizedEmail, sanitizedProject);
  };

  const translations = {
    LT: {
      sectionTitle: 'SUSISIEKITE',
      talkToMe: 'Pasikalbėk su manimi',
      projectInquiry: 'Parašyk man apie savo projektą',
      name: 'Vardas',
      email: 'El.paštas',
      project: 'Projektas',
      privacyPolicy: 'Sutinku su Privatumo politika',
      privacyPolicyLink: '(Privatumo politika)', // Added translation for the link text
      sendMessage: 'Siųsti žinutę',
      namePlaceholder: 'Įrašyk savo vardą',
      emailPlaceholder: 'Įrašyk savo el.paštą',
      projectPlaceholder: 'Rašyk apie projektą',
    },
    EN: {
      sectionTitle: 'CONTACT',
      talkToMe: 'Talk to me',
      projectInquiry: 'Tell me about your project',
      name: 'Name',
      email: 'Email',
      project: 'Project',
      privacyPolicy: 'I agree to the Privacy Policy',
      privacyPolicyLink: '(Privacy Policy)', // Added translation for the link text
      sendMessage: 'Send Message',
      namePlaceholder: 'Enter your name',
      emailPlaceholder: 'Enter your email',
      projectPlaceholder: 'Write about the project',
    },
  };

  const t = translations[language];

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <section className='contact section' id='contact'>
        <h2 className='section__title'>{t.sectionTitle}</h2>
        <div className='contact__container container grid'>
          {/* "Talk to Me" Section */}
          <div className='contact__content'>
            <h3 className='contact__title'>{t.talkToMe}</h3>
            <div className='contact__info'>
              <ContactCard
                icon='bx bx-mail-send'
                title='Email'
                data='linaswebdev@email.com'
                link='mailto:linaswebdev@email.com?subject=Kontaktas iš portfolio&body=Labas, Linas!'
                language={language} // Pass the language
              />
              <ContactCard
                icon='bx bxl-whatsapp'
                title='WhatsApp'
                data='+37067206686'
                link='https://wa.me/37067206686?text=Labas,%20Linas!'
                language={language} // Pass the language
              />
              <ContactCard
                icon='bx bxl-messenger'
                title='Messenger'
                data='Facebook'
                link='https://m.me/linas.ulevicius.3'
                language={language} // Pass the language
              />
            </div>
          </div>

          {/* "Tell Me About Your Project" Section */}
          <div className='contact__content'>
            <h3 className='contact__title'>{t.projectInquiry}</h3>
            <form ref={form} onSubmit={handleSubmit} className='contact__form'>
              <InputField
                label={t.name}
                type='text'
                name='name'
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                darkMode={darkMode}
                placeholder={t.namePlaceholder}
                required
              />
              <InputField
                label={t.email}
                type='email'
                name='email'
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                darkMode={darkMode}
                placeholder={t.emailPlaceholder}
                required
              />
              <TextAreaField
                label={t.project}
                name='project'
                value={formData.project}
                onChange={(e) =>
                  setFormData({ ...formData, project: e.target.value })
                }
                darkMode={darkMode}
                placeholder={t.projectPlaceholder}
                required
              />
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
                  {t.privacyPolicy}
                  <span
                    className='privacy-policy-link'
                    onClick={openModal}
                    style={{
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      color: 'blue',
                    }}
                  >
                    {' '}
                    {t.privacyPolicyLink}
                  </span>
                </label>
              </div>
              <button type='submit' id='helloButton'>
                {t.sendMessage}
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

const ContactCard = ({ icon, title, data, link, language }) => {
  const translations = {
    LT: {
      write: 'Parašyk',
    },
    EN: {
      write: 'Write',
    },
  };

  return (
    <div className='contact__card'>
      <i className={icon + ' contact__card-icon'}></i>
      <h3 className='contact__card-title'>{title}</h3>
      <span className='contact__card-data'>{data}</span>
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='contact__button'
      >
        {translations[language]?.write || 'Write'}
      </a>
    </div>
  );
};

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  darkMode,
  placeholder,
  required,
}) => (
  <div className='contact__form-div'>
    <label className='contact__form-tag'>{label}</label>
    <input
      type={type}
      name={name}
      className={`contact__form-input ${darkMode ? 'dark-mode' : ''}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

const TextAreaField = ({
  label,
  name,
  value,
  onChange,
  darkMode,
  placeholder,
  required,
}) => (
  <div className='contact__form-div contact__form-area'>
    <label className='contact__form-tag'>{label}</label>
    <textarea
      name={name}
      cols='30'
      rows='10'
      className={`contact__form-input ${darkMode ? 'dark-mode' : ''}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    ></textarea>
  </div>
);

export default Contact;
