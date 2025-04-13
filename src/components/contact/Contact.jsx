import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import DOMPurify from 'dompurify';
import './contact.css';
import { useDarkMode } from '../../ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { Helmet } from 'react-helmet-async';

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
      sectionSubtitle: 'Pradėkime kurti jūsų svetainę',
      talkToMe: 'Susisiekite su manimi',
      projectInquiry: 'Papasakokite apie savo projektą',
      name: 'Vardas',
      email: 'El. paštas',
      project: 'Projektas',
      sendMessage: 'Siųsti užklausą',
      namePlaceholder: 'Įrašykite savo vardą',
      emailPlaceholder: 'Įrašykite savo el. paštą',
      projectPlaceholder: 'Apibūdinkite kokios svetainės ieškote',
      errorIncomplete: 'Prašome užpildyti visus laukus',
      errorSubmit: 'Klaida siunčiant žinutę. Bandykite dar kartą',
      successMessage: 'Žinutė išsiųsta sėkmingai! Susisieksiu netrukus.',
      sending: 'Siunčiama...',
      pageTitle: 'Susisiekite - Profesionalus svetainių kūrimas | LinasWebDev',
      pageDescription:
        'Susisiekite dėl profesionalių svetainių kūrimo paslaugų. Aptarkime jūsų projektą ir sukurkime modernią, funkcionalią ir SEO optimizuotą svetainę jūsų verslui.',
    },
    EN: {
      sectionTitle: 'Contact Me',
      sectionSubtitle: "Let's create your website",
      talkToMe: 'Get in touch',
      projectInquiry: 'Tell me about your project',
      name: 'Name',
      email: 'Email',
      project: 'Project',
      sendMessage: 'Send Inquiry',
      namePlaceholder: 'Enter your name',
      emailPlaceholder: 'Enter your email',
      projectPlaceholder: 'Describe the website you need',
      errorIncomplete: 'Please fill all fields',
      errorSubmit: 'Error sending message. Please try again',
      successMessage: 'Message sent successfully! I will contact you soon.',
      sending: 'Sending...',
      pageTitle: 'Contact - Professional Website Development | LinasWebDev',
      pageDescription:
        "Contact for professional website development services. Let's discuss your project and create a modern, functional, and SEO-optimized website for your business.",
    },
  };

  const t = translations[language];

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Helmet>
        <title>{t.pageTitle}</title>
        <meta name='description' content={t.pageDescription} />
        <meta
          name='keywords'
          content={
            language === 'LT'
              ? 'svetainių kūrimas, interneto svetainės, kontaktai, web dizainas, svetainių vystymas, susisiekite, nemokama konsultacija'
              : 'website development, web design, contact, web development services, professional websites, free consultation'
          }
        />
        <meta property='og:title' content={t.pageTitle} />
        <meta property='og:description' content={t.pageDescription} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.linaswebdev.lt/contact' />
      </Helmet>

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
                  link='mailto:linaswebdev@email.com?subject=Svetainės kūrimo užklausa&body=Sveiki, norėčiau sužinoti daugiau apie jūsų svetainių kūrimo paslaugas.'
                  language={language}
                  darkMode={darkMode}
                  delay={400}
                  ariaLabel='Siųsti el. laišką'
                />
                <ContactCard
                  icon='bx bxl-whatsapp'
                  title='WhatsApp'
                  data='+37067206686'
                  link='https://wa.me/37067206686?text=Sveiki, norėčiau sužinoti daugiau apie jūsų svetainių kūrimo paslaugas.'
                  language={language}
                  darkMode={darkMode}
                  delay={500}
                  ariaLabel='Susisiekti per WhatsApp'
                />
                <ContactCard
                  icon='bx bxl-messenger'
                  title='Messenger'
                  data='Facebook'
                  link='https://m.me/linas.ulevicius.3'
                  language={language}
                  darkMode={darkMode}
                  delay={600}
                  ariaLabel='Susisiekti per Messenger'
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
                aria-label={
                  language === 'LT' ? 'Kontaktų forma' : 'Contact form'
                }
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
                    ariaLabel={
                      language === 'LT'
                        ? 'Įveskite savo vardą'
                        : 'Enter your name'
                    }
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
                    ariaLabel={
                      language === 'LT'
                        ? 'Įveskite savo el. paštą'
                        : 'Enter your email'
                    }
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
                    ariaLabel={
                      language === 'LT'
                        ? 'Apibūdinkite savo projektą'
                        : 'Describe your project'
                    }
                  />
                </div>

                <div className='form__footer'>
                  <button
                    type='submit'
                    className='contact__submit-button'
                    disabled={isSubmitting}
                    aria-label={
                      isSubmitting
                        ? language === 'LT'
                          ? 'Siunčiama...'
                          : 'Sending...'
                        : language === 'LT'
                        ? 'Siųsti užklausą'
                        : 'Send inquiry'
                    }
                  >
                    {isSubmitting ? t.sending : t.sendMessage}
                    {!isSubmitting && (
                      <i className='bx bx-send' aria-hidden='true'></i>
                    )}
                  </button>

                  {submitStatus === 'incomplete' && (
                    <p
                      className='form__message form__message--error'
                      role='alert'
                    >
                      {t.errorIncomplete}
                    </p>
                  )}
                  {submitStatus === 'error' && (
                    <p
                      className='form__message form__message--error'
                      role='alert'
                    >
                      {t.errorSubmit}
                    </p>
                  )}
                  {submitStatus === 'success' && (
                    <p
                      className='form__message form__message--success'
                      role='status'
                    >
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
  ariaLabel,
}) => {
  const translations = {
    LT: {
      write: 'Susisiekti',
    },
    EN: {
      write: 'Contact',
    },
  };

  return (
    <div className='contact__card' data-aos='zoom-in' data-aos-delay={delay}>
      <div className='contact__card-icon-container'>
        <i className={icon} aria-hidden='true'></i>
      </div>
      <h3 className='contact__card-title'>{title}</h3>
      <span className='contact__card-data'>{data}</span>
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='contact__card-button'
        aria-label={ariaLabel || translations[language]?.write}
      >
        {translations[language]?.write || 'Contact'}
        <i
          className='bx bx-right-arrow-alt contact__button-icon'
          aria-hidden='true'
        ></i>
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
  ariaLabel,
}) => (
  <div className='form__field'>
    <label className='form__label' htmlFor={name}>
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      className='form__input'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      aria-label={ariaLabel || label}
      aria-required={required ? 'true' : 'false'}
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
  ariaLabel,
}) => (
  <div className='form__field form__field--textarea'>
    <label className='form__label' htmlFor={name}>
      {label}
    </label>
    <textarea
      name={name}
      id={name}
      className='form__input form__textarea'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      aria-label={ariaLabel || label}
      aria-required={required ? 'true' : 'false'}
    ></textarea>
  </div>
);

export default Contact;
