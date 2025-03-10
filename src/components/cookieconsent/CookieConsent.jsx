import { useState, useEffect } from 'react';
import PrivacyPolicyModal from '../privacyPolicy/PrivacyPolicyModal';
import './CookieConsent.css';

const GOOGLE_ANALYTICS_ID = 'G-JPV4WJL4C4';

const CookieConsent = ({ onConsentChange }) => {
  const [isVisible, setIsVisible] = useState(true); // Always show the banner
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Remove useEffect - we don't need to check localStorage anymore
  useEffect(() => {
    //Always show banner
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
    // localStorage.removeItem('cookieConsent'); // Remove persistent storage
    enableGoogleAnalytics();
    onConsentChange(true);
  };

  const handleDecline = () => {
    setIsVisible(false);
    // localStorage.removeItem('cookieConsent'); // Remove persistent storage
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

  return (
    <>
      <PrivacyPolicyModal isOpen={isModalOpen} onClose={handleCloseModal} />

      <div className={`cookie-consent-banner ${!isVisible ? 'hidden' : ''}`}>
        <div className='cookie-consent-text'>
          <p>
            <strong>Svarbus pranešimas dėl privatumo:</strong> Chrome naršyklė
            netrukus apribos trečiųjų šalių slapukų naudojimą. Mūsų svetainė
            naudoja Google Analytics (ID: {GOOGLE_ANALYTICS_ID}) svetainės
            analizei ir būtinus slapukus funkcionalumui užtikrinti.{' '}
            <a
              href='#'
              className='cookie-consent-link'
              onClick={handleOpenModal}
            >
              Privatumo politika
            </a>
          </p>
        </div>

        <div className='cookie-consent-buttons'>
          <button
            onClick={handleAccept}
            className='cookie-consent-button'
            aria-label='Sutikti su Analytics slapukų naudojimu'
          >
            Leisti Analytics
          </button>
          <button
            onClick={handleDecline}
            className='cookie-consent-button cookie-consent-decline-button'
            aria-label='Naudoti tik būtinus slapukus'
          >
            Tik būtini slapukai
          </button>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
