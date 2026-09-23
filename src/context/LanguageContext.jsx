// LanguageContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import { content } from '../content';

const LanguageContext = createContext();

const readSavedLanguage = () => {
  try {
    const saved = localStorage.getItem('language');
    return saved === 'EN' || saved === 'LT' ? saved : 'LT';
  } catch {
    return 'LT';
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(readSavedLanguage);

  useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
    try {
      localStorage.setItem('language', language);
    } catch {
      /* localStorage gali būti neprieinamas – kalba tiesiog neišsisaugos */
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'EN' ? 'LT' : 'EN'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

// Grąžina visus pasirinktos kalbos tekstus iš content.js
export const useContent = () => content[useLanguage().language];
