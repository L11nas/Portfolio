import React from 'react';
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

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CustomThemeProvider>
        <CssBaseline />
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
    </ThemeProvider>
  );
};

export default App;
