import { lazy, Suspense, useState } from 'react';
import { useContent } from '../context/LanguageContext';
import { CONTACTS } from '../content';
import { scrollToId } from '../utils';
import './Footer.css';
import Icon from '../components/Icon';

// Teisiniai langai (su MUI) įkeliami tik juos atidarius – pirmas puslapis kraunasi greičiau
const PrivacyPolicyModal = lazy(() => import('../components/privacyPolicy/PrivacyPolicyModal'));
const TermsOfServiceModal = lazy(() => import('../components/privacyPolicy/TermsOfServiceModal'));

const socials = [
  { href: CONTACTS.googleBusiness, icon: 'bxl-google', label: 'Google' },
  { href: CONTACTS.facebook, icon: 'bxl-facebook', label: 'Facebook' },
  { href: CONTACTS.linkedin, icon: 'bxl-linkedin', label: 'LinkedIn' },
];

const Footer = () => {
  const { footer } = useContent();
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__grid'>
          <div className='footer__brand'>
            <p className='logo'>
              Linas<span>WebDev</span>
            </p>
            <p className='footer__tagline'>{footer.tagline}</p>
            <ul className='footer__socials'>
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target='_blank' rel='noopener noreferrer' aria-label={s.label}>
                    <Icon name={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label={footer.navTitle}>
            <p className='footer__heading'>{footer.navTitle}</p>
            <ul className='footer__links'>
              {footer.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(link.id);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className='footer__heading'>{footer.contactTitle}</p>
            <ul className='footer__links'>
              <li>
                <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
              </li>
              <li>
                <a href={`tel:${CONTACTS.phoneHref}`}>{CONTACTS.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='footer__bottom'>
          <p>
            © 2023–{new Date().getFullYear()} LinasWebDev. {footer.rights}
          </p>
          <div className='footer__legal'>
            <button type='button' onClick={() => setPrivacyOpen(true)}>
              {footer.privacy}
            </button>
            <button type='button' onClick={() => setTermsOpen(true)}>
              {footer.terms}
            </button>
          </div>
        </div>
      </div>

      <Suspense fallback={null}>
        {privacyOpen && <PrivacyPolicyModal isOpen onClose={() => setPrivacyOpen(false)} />}
        {termsOpen && <TermsOfServiceModal isOpen onClose={() => setTermsOpen(false)} />}
      </Suspense>
    </footer>
  );
};

export default Footer;
