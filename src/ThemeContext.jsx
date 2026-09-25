import { createContext, useContext, useState, useEffect } from 'react';

// Tamsaus režimo jungiklio svetainėje nebėra, bet kontekstą naudoja slapukų juosta.
// MUI tema čia nebenaudojama – ji pakraudavo visą MUI biblioteką su pirmu puslapiu.
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a ThemeProvider');
  }
  return context;
};
