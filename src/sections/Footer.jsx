import { useState } from 'react';
import { useContent } from '../context/LanguageContext';
import { CONTACTS } from '../content';
import { scrollToId } from '../utils';
import PrivacyPolicyModal from '../components/privacyPolicy/PrivacyPolicyModal';
import TermsOfServiceModal from '../components/privacyPolicy/TermsOfServiceModal';
import './Footer.css';

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
                    <i className={`bx ${s.icon}`} aria-hidden='true'></i>
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

      <PrivacyPolicyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsOfServiceModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
    </footer>
  );
};

export default Footer;
