import { useEffect, useState } from 'react';
import { useContent, useLanguage } from '../context/LanguageContext';
import { scrollToId } from '../utils';
import './Header.css';
import Icon from '../components/Icon';

const Header = () => {
  const t = useContent().nav;
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Paryškina meniu punktą, kurio sekcija šiuo metu ekrano viduryje
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    document.querySelectorAll('main section[id]').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const go = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToId(id);
  };

  const navLinks = t.links.map((link) => (
    <li key={link.id}>
      <a
        href={`#${link.id}`}
        onClick={(e) => go(e, link.id)}
        className={`nav__link ${active === link.id ? 'is-active' : ''}`}
        aria-current={active === link.id ? 'true' : undefined}
      >
        {link.label}
      </a>
    </li>
  ));

  return (
    <header className={`header ${scrolled || menuOpen ? 'is-scrolled' : ''}`}>
      <div className='header__inner container'>
        <a
          href='#top'
          className='logo'
          aria-label={t.home}
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Linas<span>WebDev</span>
        </a>

        <nav className='nav nav--desktop' aria-label='Main'>
          <ul className='nav__list'>{navLinks}</ul>
        </nav>

        <div className='header__actions'>
          <button
            type='button'
            className='lang-toggle'
            onClick={toggleLanguage}
            aria-label={t.switchLang}
          >
            {language === 'LT' ? 'EN' : 'LT'}
          </button>
          <a
            href='#contact'
            className='btn btn--primary header__cta'
            onClick={(e) => go(e, 'contact')}
          >
            {t.cta}
          </a>
          <button
            type='button'
            className='menu-toggle'
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls='mobile-menu'
            aria-label={menuOpen ? t.closeMenu : t.openMenu}
          >
            <Icon name={menuOpen ? 'bx-x' : 'bx-menu'} />
          </button>
        </div>
      </div>

      <nav
        id='mobile-menu'
        className={`nav nav--mobile ${menuOpen ? 'is-open' : ''}`}
        aria-label='Mobile'
        hidden={!menuOpen}
      >
        <ul className='nav__list container'>
          {navLinks}
          <li>
            <a
              href='#contact'
              className='btn btn--primary btn--block'
              onClick={(e) => go(e, 'contact')}
            >
              {t.cta}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
