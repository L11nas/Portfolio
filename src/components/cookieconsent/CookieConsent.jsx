import { useState, useEffect } from 'react';
import PrivacyPolicyModal from '../privacyPolicy/PrivacyPolicyModal';
import { useLanguage } from '../../context/LanguageContext';
import './cookieconsent.css';

const GOOGLE_ANALYTICS_ID = 'G-JPV4WJL4C4';

const CookieConsent = ({ onConsentChange }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const enableGoogleAnalytics = () => {
    window[`ga-disable-${GOOGLE_ANALYTICS_ID}`] = false;
  };

  const disableGoogleAnalytics = () => {
    window[`ga-disable-${GOOGLE_ANALYTICS_ID}`] = true;
    deleteGoogleAnalyticsCookies();
  };

  const deleteGoogleAnalyticsCookies = () => {
    const cookiesToDelete = [
      '_ga',
      '_gid',
      '_gat',
      `_ga_${GOOGLE_ANALYTICS_ID.replace(/^G-/, '')}`,
    ];
    cookiesToDelete.forEach(deleteCookie);
  };

  const deleteCookie = (cookieName) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`;
  };

  const handleAccept = () => {
    setIsVisible(false);
    enableGoogleAnalytics();
    onConsentChange(true);
  };

  const handleDecline = () => {
    setIsVisible(false);
    disableGoogleAnalytics();
    onConsentChange(true);
  };

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!isVisible) return null;

  const translations = {
    LT: {
      notice: 'Svarbus pranešimas dėl privatumo:',
      message:
        'Chrome naršyklė netrukus apribos trečiųjų šalių slapukų naudojimą. Mūsų svetainė naudoja Google Analytics svetainės analizei ir būtinus slapukus funkcionalumui užtikrinti.',
      privacyPolicy: 'Privatumo politika',
      allowCookies: 'Leisti slapukus',
      necessaryOnly: 'Tik būtini slapukai',
    },
    EN: {
      notice: 'Important Privacy Notice:',
      message:
        'Chrome will soon restrict the use of third-party cookies. Our website uses Google Analytics for site analysis and essential cookies to ensure functionality.',
      privacyPolicy: 'Privacy Policy',
      allowCookies: 'Allow Cookies',
      necessaryOnly: 'Necessary Only',
    },
  };

  const t = translations[language];

  return (
    <>
      <PrivacyPolicyModal isOpen={isModalOpen} onClose={handleCloseModal} />

      <div className={`cookie-consent-banner ${!isVisible ? 'hidden' : ''}`}>
        <div className='cookie-consent-text'>
          <p>
            <strong>{t.notice}</strong> {t.message}{' '}
            <a
              href='#'
              className='cookie-consent-link'
              onClick={handleOpenModal}
            >
              {t.privacyPolicy}
            </a>
          </p>
        </div>

        <div className='cookie-consent-buttons'>
          <button
            onClick={handleAccept}
            className='cookie-consent-button'
            aria-label={t.allowCookies}
          >
            {t.allowCookies}
          </button>
          <button
            onClick={handleDecline}
            className='cookie-consent-button cookie-consent-decline-button'
            aria-label={t.necessaryOnly}
          >
            {t.necessaryOnly}
          </button>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
