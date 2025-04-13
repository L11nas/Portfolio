import { useState, useEffect } from 'react';
import PrivacyPolicyModal from '../privacyPolicy/PrivacyPolicyModal';
import { useLanguage } from '../../context/LanguageContext';
import { useDarkMode } from '../../ThemeContext';
import './cookieconsent.css';

const GOOGLE_ANALYTICS_ID = 'G-JPV4WJL4C4';

const CookieConsent = ({ onConsentChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const { language } = useLanguage();
  const { darkMode } = useDarkMode();

  useEffect(() => {
    // Check if user has already interacted with the consent banner
    const consentStatus = localStorage.getItem('cookieConsentStatus');

    if (!consentStatus) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);

      return () => clearTimeout(timer);
    } else {
      // Apply the saved consent setting
      if (consentStatus === 'accepted') {
        enableGoogleAnalytics();
        onConsentChange(true);
      } else {
        disableGoogleAnalytics();
        onConsentChange(false);
      }
      setHasInteracted(true);
    }
  }, [onConsentChange]);

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
    setHasInteracted(true);
    enableGoogleAnalytics();
    onConsentChange(true);
    localStorage.setItem('cookieConsentStatus', 'accepted');
  };

  const handleDecline = () => {
    setIsVisible(false);
    setHasInteracted(true);
    disableGoogleAnalytics();
    onConsentChange(false);
    localStorage.setItem('cookieConsentStatus', 'declined');
  };

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!isVisible || hasInteracted) return null;

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

      <div
        className={`cookie-consent ${darkMode ? 'dark-mode' : ''} ${
          !isVisible ? 'hidden' : ''
        }`}
      >
        <div className='cookie-consent__container'>
          <div className='cookie-consent__content'>
            <div className='cookie-consent__icon'>
              <i className='bx bx-cookie'></i>
            </div>

            <div className='cookie-consent__text'>
              <h3 className='cookie-consent__title'>{t.notice}</h3>
              <p className='cookie-consent__message'>
                {t.message}{' '}
                <button
                  className='cookie-consent__link'
                  onClick={handleOpenModal}
                >
                  {t.privacyPolicy}
                </button>
              </p>
            </div>
          </div>

          <div className='cookie-consent__actions'>
            <button
              onClick={handleAccept}
              className='cookie-consent__button cookie-consent__button--accept'
              aria-label={t.allowCookies}
            >
              {t.allowCookies}
            </button>

            <button
              onClick={handleDecline}
              className='cookie-consent__button cookie-consent__button--decline'
              aria-label={t.necessaryOnly}
            >
              {t.necessaryOnly}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
