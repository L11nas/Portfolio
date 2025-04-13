import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import DOMPurify from 'dompurify';
import './contact.css';
import { useDarkMode } from '../../ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

const Contact = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
  });

  // Refresh AOS when component mounts
  useEffect(() => {
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  const sendEmail = (name, email, project) => {
    setIsSubmitting(true);

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
        setFormData({ name: '', email: '', project: '' });
        setSubmitStatus('success');
        setIsSubmitting(false);

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const sanitizedName = DOMPurify.sanitize(formData.name);
    const sanitizedEmail = DOMPurify.sanitize(formData.email);
    const sanitizedProject = DOMPurify.sanitize(formData.project);

    if (!sanitizedName || !sanitizedEmail || !sanitizedProject) {
      setSubmitStatus('incomplete');
      return;
    }

    setSubmitStatus(null);
    sendEmail(sanitizedName, sanitizedEmail, sanitizedProject);
  };

  const translations = {
    LT: {
      sectionTitle: 'Susisiekite',
      sectionSubtitle: 'Pradėkime bendradarbiauti',
      talkToMe: 'Susisiekite su manimi',
      projectInquiry: 'Papasakokite apie savo projektą',
      name: 'Vardas',
      email: 'El. paštas',
      project: 'Projektas',
      sendMessage: 'Siųsti žinutę',
      namePlaceholder: 'Įrašykite savo vardą',
      emailPlaceholder: 'Įrašykite savo el. paštą',
      projectPlaceholder: 'Apibūdinkite savo projektą',
      errorIncomplete: 'Prašome užpildyti visus laukus',
      errorSubmit: 'Klaida siunčiant žinutę. Bandykite dar kartą',
      successMessage: 'Žinutė išsiųsta sėkmingai!',
      sending: 'Siunčiama...',
    },
    EN: {
      sectionTitle: 'Contact Me',
      sectionSubtitle: "Let's work together",
      talkToMe: 'Get in touch',
      projectInquiry: 'Tell me about your project',
      name: 'Name',
      email: 'Email',
      project: 'Project',
      sendMessage: 'Send Message',
      namePlaceholder: 'Enter your name',
      emailPlaceholder: 'Enter your email',
      projectPlaceholder: 'Describe your project',
      errorIncomplete: 'Please fill all fields',
      errorSubmit: 'Error sending message. Please try again',
      successMessage: 'Message sent successfully!',
      sending: 'Sending...',
    },
  };

  const t = translations[language];

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <section className='contact__section' id='contact'>
        <div className='contact__container container'>
          <h1 className='section__title' data-aos='fade-down'>
            {t.sectionTitle}
          </h1>
          <h2
            className='section__subtitle'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            {t.sectionSubtitle}
          </h2>

          <div className='contact__content-grid'>
            {/* Contact Information */}
            <div
              className='contact__info-container'
              data-aos='fade-right'
              data-aos-delay='300'
            >
              <h3 className='contact__title'>{t.talkToMe}</h3>

              <div className='contact__cards'>
                <ContactCard
                  icon='bx bx-mail-send'
                  title='Email'
                  data='linaswebdev@email.com'
                  link='mailto:linaswebdev@email.com?subject=Kontaktas iš portfolio&body=Labas, Linas!'
                  language={language}
                  darkMode={darkMode}
                  delay={400}
                />
                <ContactCard
                  icon='bx bxl-whatsapp'
                  title='WhatsApp'
                  data='+37067206686'
                  link='https://wa.me/37067206686?text=Labas,%20Linas!'
                  language={language}
                  darkMode={darkMode}
                  delay={500}
                />
                <ContactCard
                  icon='bx bxl-messenger'
                  title='Messenger'
                  data='Facebook'
                  link='https://m.me/linas.ulevicius.3'
                  language={language}
                  darkMode={darkMode}
                  delay={600}
                />
              </div>
            </div>

            {/* Contact Form */}
            <div
              className='contact__form-container'
              data-aos='fade-left'
              data-aos-delay='300'
            >
              <h3 className='contact__title'>{t.projectInquiry}</h3>

              <form
                ref={form}
                onSubmit={handleSubmit}
                className='contact__form'
              >
                <div className='form__fields'>
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
                </div>

                <div className='form__footer'>
                  <button
                    type='submit'
                    className='contact__submit-button'
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t.sending : t.sendMessage}
                    {!isSubmitting && <i className='bx bx-send'></i>}
                  </button>

                  {submitStatus === 'incomplete' && (
                    <p className='form__message form__message--error'>
                      {t.errorIncomplete}
                    </p>
                  )}
                  {submitStatus === 'error' && (
                    <p className='form__message form__message--error'>
                      {t.errorSubmit}
                    </p>
                  )}
                  {submitStatus === 'success' && (
                    <p className='form__message form__message--success'>
                      {t.successMessage}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactCard = ({
  icon,
  title,
  data,
  link,
  language,
  darkMode,
  delay,
}) => {
  const translations = {
    LT: {
      write: 'Rašyti',
    },
    EN: {
      write: 'Write',
    },
  };

  return (
    <div className='contact__card' data-aos='zoom-in' data-aos-delay={delay}>
      <div className='contact__card-icon-container'>
        <i className={icon}></i>
      </div>
      <h3 className='contact__card-title'>{title}</h3>
      <span className='contact__card-data'>{data}</span>
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='contact__card-button'
      >
        {translations[language]?.write || 'Write'}
        <i className='bx bx-right-arrow-alt contact__button-icon'></i>
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
  <div className='form__field'>
    <label className='form__label'>{label}</label>
    <input
      type={type}
      name={name}
      className='form__input'
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
  <div className='form__field form__field--textarea'>
    <label className='form__label'>{label}</label>
    <textarea
      name={name}
      className='form__input form__textarea'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    ></textarea>
  </div>
);

export default Contact;
