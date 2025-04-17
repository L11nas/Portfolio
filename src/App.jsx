import React, { useEffect } from 'react'; // 👈 čia reikia importuoti useEffect

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Work from './components/work/Work';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as CustomThemeProvider } from './ThemeContext';
import MyInspiration from './components/myInspiration/MyInspiration';
import { LanguageProvider } from './context/LanguageContext';
import { HelmetProvider } from 'react-helmet-async';
import CookieConsent from './components/cookieconsent/CookieConsent';

const App = () => {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <CustomThemeProvider>
          <CookieConsent onConsentChange={(consent) => {}} />
          <Header />
          <main className='main'>
            <Home />
            <About />
            <Skills />
            <Services />
            <Work />
            <MyInspiration />
            <Contact />
          </main>
          <Footer />
          <ScrollUp />
        </CustomThemeProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
};

export default App;
