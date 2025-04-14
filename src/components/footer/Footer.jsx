import React, { useEffect, useState } from 'react';
import './footer.css';
import { useDarkMode } from '../../ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import PrivacyPolicyModal from '../privacypolicy/PrivacyPolicyModal';

import TermsOfServiceModal from '../privacypolicy/TermsOfServiceModal';

const Footer = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  // Pridedame state modaliniams langams
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  // Refresh AOS when component mounts
  useEffect(() => {
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  // Vertimų objektas
  const translations = {
    LT: {
      title: 'LinasWebDev',
      subtitle: 'Profesionalus svetainių kūrimas',
      about: 'Apie mane',
      skills: 'Technologijos',
      services: 'Paslaugos',
      projects: 'Projektai',
      inspiration: 'Įkvėpimas',
      contact: 'Kontaktai',
      facebookTitle: 'Sekite mane Facebook',
      linkedinTitle: 'Sekite mane LinkedIn',
      githubTitle: 'Sekite mane GitHub',
      copyright: `Visos teisės saugomos © 2023-${new Date().getFullYear()} Linas`,
      privacyPolicy: 'Privatumo politika',
      termsOfService: 'Naudojimosi taisyklės',
      websiteCreation: 'Svetainių kūrimas',
      webDesign: 'Web dizainas',
      eCommerce: 'El. parduotuvės',
      seo: 'SEO optimizacija',
      development: 'Vystymas',
      support: 'Priežiūra',
      services_title: 'Paslaugos',
    },
    EN: {
      title: 'LinasWebDev',
      subtitle: 'Professional Website Development',
      about: 'About me',
      skills: 'Technologies',
      services: 'Services',
      projects: 'Projects',
      inspiration: 'Inspiration',
      contact: 'Contact',
      facebookTitle: 'Follow me on Facebook',
      linkedinTitle: 'Follow me on LinkedIn',
      githubTitle: 'Follow me on GitHub',
      copyright: `All rights reserved © 2023-${new Date().getFullYear()} Linas`,
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      websiteCreation: 'Website Creation',
      webDesign: 'Web Design',
      eCommerce: 'E-Commerce',
      seo: 'SEO Optimization',
      development: 'Development',
      support: 'Maintenance',
      services_title: 'Services',
    },
  };

  const t = translations[language];

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Pridedame modalinių langų atidarymo funkcijas
  const openPrivacyModal = (e) => {
    e.preventDefault();
    setPrivacyModalOpen(true);
  };

  const openTermsModal = (e) => {
    e.preventDefault();
    setTermsModalOpen(true);
  };

  return (
    <footer
      className={`footer ${darkMode ? 'dark-mode' : ''}`}
      role='contentinfo'
    >
      <div className='footer__container container'>
        <div className='footer__content'>
          <div
            className='footer__info'
            data-aos='fade-right'
            data-aos-delay='100'
          >
            <h2 className='footer__title'>{t.title}</h2>
            <p className='footer__subtitle'>{t.subtitle}</p>
            <p className='footer__description'>
              {language === 'LT'
                ? 'Kuriu modernias, greitai veikiančias ir funkcionalias svetaines verslui ir asmeniniam naudojimui.'
                : 'Creating modern, fast-loading, and functional websites for business and personal use.'}
            </p>
            <button
              onClick={handleScrollToTop}
              className='footer__scroll-top'
              aria-label={
                language === 'LT' ? 'Grįžti į viršų' : 'Scroll to top'
              }
            >
              <i className='bx bx-chevron-up'></i>
              {language === 'LT' ? 'Grįžti į viršų' : 'Back to top'}
            </button>
          </div>

          <div
            className='footer__links'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            <h3 className='footer__links-title'>
              {language === 'LT' ? 'Navigacija' : 'Navigation'}
            </h3>
            <nav
              aria-label={
                language === 'LT' ? 'Puslapio navigacija' : 'Site navigation'
              }
            >
              <ul className='footer__list'>
                <li>
                  <a href='#about' className='footer__link'>
                    {t.about}
                  </a>
                </li>
                <li>
                  <a href='#skills' className='footer__link'>
                    {t.skills}
                  </a>
                </li>
                <li>
                  <a href='#services' className='footer__link'>
                    {t.services}
                  </a>
                </li>
                <li>
                  <a href='#projects' className='footer__link'>
                    {t.projects}
                  </a>
                </li>
                <li>
                  <a href='#inspiration' className='footer__link'>
                    {t.inspiration}
                  </a>
                </li>
                <li>
                  <a href='#contact' className='footer__link'>
                    {t.contact}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div
            className='footer__services'
            data-aos='fade-up'
            data-aos-delay='250'
          >
            <h3 className='footer__services-title'>{t.services_title}</h3>
            <ul className='footer__services-list'>
              <li>
                <a href='#services' className='footer__service-link'>
                  {t.websiteCreation}
                </a>
              </li>
              <li>
                <a href='#services' className='footer__service-link'>
                  {t.webDesign}
                </a>
              </li>
              <li>
                <a href='#services' className='footer__service-link'>
                  {t.eCommerce}
                </a>
              </li>
              <li>
                <a href='#services' className='footer__service-link'>
                  {t.seo}
                </a>
              </li>
              <li>
                <a href='#services' className='footer__service-link'>
                  {t.development}
                </a>
              </li>
              <li>
                <a href='#services' className='footer__service-link'>
                  {t.support}
                </a>
              </li>
            </ul>
          </div>

          <div
            className='footer__social-container'
            data-aos='fade-left'
            data-aos-delay='300'
          >
            <h3 className='footer__social-title'>
              {language === 'LT' ? 'Socialiniai tinklai' : 'Social Media'}
            </h3>
            <div className='footer__social'>
              <a
                href='https://www.facebook.com'
                className='footer__social-link'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Facebook'
                title={t.facebookTitle}
              >
                <i className='bx bxl-facebook'></i>
              </a>
              <a
                href='https://lt.linkedin.com/in/linas-ulevi%C4%8Dius-48366113b'
                className='footer__social-link'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
                title={t.linkedinTitle}
              >
                <i className='bx bxl-linkedin'></i>
              </a>
              <a
                href='https://github.com/L11nas'
                className='footer__social-link'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'
                title={t.githubTitle}
              >
                <i className='bx bxl-github'></i>
              </a>
            </div>
          </div>
        </div>

        <div className='footer__bottom' data-aos='fade-up' data-aos-delay='400'>
          <span className='footer__copy'>{t.copyright}</span>
          <div className='footer__legal'>
            {/* Pakeičiame nuorodas į href="#" su onClick handleriams */}
            <a
              href='#'
              className='footer__legal-link'
              onClick={openPrivacyModal}
              aria-label={
                language === 'LT'
                  ? 'Atidaryti privatumo politiką'
                  : 'Open privacy policy'
              }
            >
              {t.privacyPolicy}
            </a>
            <a
              href='#'
              className='footer__legal-link'
              onClick={openTermsModal}
              aria-label={
                language === 'LT'
                  ? 'Atidaryti naudojimosi taisykles'
                  : 'Open terms of service'
              }
            >
              {t.termsOfService}
            </a>
          </div>
        </div>

        {/* Schema.org structured data (hidden) */}
        <div
          className='footer__schema'
          itemScope
          itemType='http://schema.org/Organization'
        >
          <meta itemProp='name' content='LinasWebDev' />
          <meta
            itemProp='description'
            content={
              language === 'LT'
                ? 'Profesionalus svetainių kūrimas ir web dizaino paslaugos Lietuvoje'
                : 'Professional website development and web design services'
            }
          />
          <link itemProp='url' href='https://www.linaswebdev.lt' />
          <link itemProp='logo' href='https://www.linaswebdev.lt/logo.jpg' />
          <div
            itemProp='address'
            itemScope
            itemType='http://schema.org/PostalAddress'
          >
            <meta itemProp='addressCountry' content='LT' />
          </div>
          <meta itemProp='email' content='linaswebdev@email.com' />
          <link itemProp='sameAs' href='https://www.facebook.com' />
          <link
            itemProp='sameAs'
            href='https://lt.linkedin.com/in/linas-ulevi%C4%8Dius-48366113b'
          />
          <link itemProp='sameAs' href='https://github.com/L11nas' />
        </div>
      </div>

      {/* Pridedame modalinius langus */}
      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      <TermsOfServiceModal
        isOpen={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
      />
    </footer>
  );
};

export default Footer;
