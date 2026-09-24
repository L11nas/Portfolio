import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import './App.css';
import { ThemeProvider } from './ThemeContext';
import { LanguageProvider, useContent } from './context/LanguageContext';
import CookieConsent from './components/cookieconsent/CookieConsent';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Value from './sections/Value';
import Services from './sections/Services';
import Work from './sections/Work';
import Pricing from './sections/Pricing';
import Process from './sections/Process';
import About from './sections/About';
import Faq from './sections/Faq';
import Cta from './sections/Cta';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

// Subtilus „fade-up“ elementams su klase .reveal, kai jie patenka į ekraną
const useReveal = () => {
  useEffect(() => {
    const root = document.documentElement;
    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }
    root.classList.add('reveal-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      root.classList.remove('reveal-ready');
    };
  }, []);
};

const noop = () => {};

const Page = () => {
  const t = useContent();
  useReveal();

  return (
    <>
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name='description' content={t.meta.description} />
      </Helmet>
      <a href='#main' className='skip-link'>
        {t.nav.skip}
      </a>
      <CookieConsent onConsentChange={noop} />
      <Header />
      <main id='main'>
        <Hero />
        <Value />
        <Services />
        <Work />
        <Process />
        <Pricing />
        <About />
        <Faq />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

const App = () => (
  <HelmetProvider>
    <LanguageProvider>
      <ThemeProvider>
        <Page />
      </ThemeProvider>
    </LanguageProvider>
  </HelmetProvider>
);

export default App;
