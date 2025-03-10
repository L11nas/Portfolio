import React, { useState, useEffect } from 'react';
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

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    // If the user has already made a choice, show the content
    if (consent === 'accepted' || consent === 'declined') {
      setShowContent(true);
    }
  }, []);

  return (
    <HelmetProvider>
      <LanguageProvider>
        <CustomThemeProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <CookieConsent
              onConsentChange={(consent) => {
                if (consent) {
                  setShowContent(true);
                }
              }}
            />

            {showContent && (
              <main className='main'>
                <Header />
                <Home />
                <About />
                <Skills />
                <Services />
                <Work />
                <MyInspiration />
                <Contact />
              </main>
            )}
            {showContent && <Footer />}
            {showContent && <ScrollUp />}
          </ThemeProvider>
        </CustomThemeProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
};

export default App;
