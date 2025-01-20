import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { useLanguage } from '../../context/LanguageContext';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: {
    xs: 2, // Pritaikymas mobiliesiems
    sm: 3, // Pritaikymas planšetėms
    md: 4, // Pritaikymas dideliems ekranams
  },
  borderRadius: 2,
  overflow: 'auto', // Pridėta, kad turinys galėtų slinkti
  maxHeight: '80vh', // Nustatomas maksimalus aukštis
};

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  const { language } = useLanguage();

  // Vertimų objektas
  const translations = {
    LT: {
      title: 'Privatumo politika',
      description:
        'Mes gerbiame jūsų privatumą ir įsipareigojame užtikrinti jūsų asmeninės informacijos apsaugą. Šioje privatumo politikoje paaiškinama, kaip mes renkame, naudojame ir saugome jūsų duomenis.',
      section1: '1. Surinkti duomenys:',
      section1Content:
        'Mes galime rinkti jūsų vardą, el. paštą ir kitą informaciją, kurią pateikiate mūsų kontaktų formoje.',
      section2: '2. Kodėl renkami duomenys?',
      section2Content:
        'Jūsų pateikti duomenys naudojami tik tam, kad galėtume atsakyti į jūsų užklausą. Mes nenaudojame jūsų duomenų jokiais kitais tikslais.',
      section3: '3. Kaip ilgai saugomi duomenys?',
      section3Content:
        'Jūsų pateikti duomenys saugomi tik tol, kol atsakome į jūsų užklausą. Po to jie pašalinami.',
      section4: '4. Duomenų perdavimas trečiosioms šalims',
      section4Content:
        'Jūsų žinutės siunčiamos naudojant trečiosios šalies paslaugą – Email.js. Ši paslauga užtikrina žinučių siuntimą el. paštu. Naudojant šią paslaugą, jūsų duomenys yra tvarkomi pagal Email.js privatumo politiką. Taip pat naudojame SEO įrankius, kurie gali rinkti ir analizuoti tam tikrus duomenis siekiant pagerinti mūsų svetainės našumą.',
      section5: '5. Slapukai ir stebėjimo technologijos',
      section5Content:
        'Šiuo metu mes nenaudojame slapukų ar kitų stebėjimo technologijų. Jei ateityje tai bus pakeista, apie tai informuosime jus iš anksto.',
      section6: '6. Jūsų teisės',
      section6Content: 'Pagal BDAR jūs turite teisę:',
      rights: [
        'Susipažinti su savo pateiktais duomenimis;',
        'Prašyti juos ištaisyti arba ištrinti;',
        'Atsisakyti jų tvarkymo arba apriboti jų naudojimą.',
      ],
      section7: '7. Kontaktinė informacija',
      section7Content:
        'Jeigu turite klausimų apie savo duomenų apsaugą ar norite pasinaudoti savo teisėmis, susisiekite el. paštu: linwebdev@gmail.com.',
      closeButton: 'Užverti',
    },
    EN: {
      title: 'Privacy Policy',
      description:
        'We respect your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and protect your data.',
      section1: '1. Data Collected:',
      section1Content:
        'We may collect your name, email, and other information you provide in our contact form.',
      section2: '2. Why is the data collected?',
      section2Content:
        'The data you provide is used solely to respond to your inquiry. We do not use your data for any other purposes.',
      section3: '3. How long is the data retained?',
      section3Content:
        'The data you provide is retained only until we respond to your inquiry. After that, it is deleted.',
      section4: '4. Data Transfer to Third Parties',
      section4Content:
        'Your messages are sent using a third-party service – Email.js. This service ensures the sending of messages via email. When using this service, your data is processed according to Email.js privacy policy. We also use SEO tools that may collect and analyze certain data to improve our website performance.',
      section5: '5. Cookies and Tracking Technologies',
      section5Content:
        'Currently, we do not use cookies or other tracking technologies. If this changes in the future, we will inform you in advance.',
      section6: '6. Your Rights',
      section6Content: 'Under GDPR, you have the right to:',
      rights: [
        'Access your submitted data;',
        'Request to correct or delete it;',
        'Object to its processing or restrict its use.',
      ],
      section7: '7. Contact Information',
      section7Content:
        'If you have questions about your data protection or want to exercise your rights, please contact us at: linwebdev@gmail.com.',
      closeButton: 'Close',
    },
  };

  const t = translations[language];

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby='privacy-policy-title'
    >
      <Box sx={modalStyle}>
        <Typography
          id='privacy-policy-title'
          variant='h6'
          component='h2'
          sx={{ color: 'text.primary' }}
        >
          {t.title}
        </Typography>
        <Typography variant='body1' sx={{ mt: 2 }}>
          {t.description}
        </Typography>
        <Typography variant='body2' sx={{ mt: 2 }}>
          <strong>{t.section1}</strong> {t.section1Content}
        </Typography>
        <Typography variant='body2' sx={{ mt: 2 }}>
          <strong>{t.section2}</strong>
          <br />
          {t.section2Content}
        </Typography>
        <Typography variant='body2' sx={{ mt: 2 }}>
          <strong>{t.section3}</strong>
          <br />
          {t.section3Content}
        </Typography>
        <Typography variant='body2' sx={{ mt: 2 }}>
          <strong>{t.section4}</strong>
          <br />
          {t.section4Content}
        </Typography>
        <Typography variant='body2' sx={{ mt: 2 }}>
          <strong>{t.section5}</strong>
          <br />
          {t.section5Content}
        </Typography>
        <Typography variant='body2' sx={{ mt: 2 }}>
          <strong>{t.section6}</strong>
          <br />
          {t.section6Content}
        </Typography>
        <Box component='ul' sx={{ pl: 2, mt: 1 }}>
          {t.rights.map((right, index) => (
            <li key={index}>{right}</li>
          ))}
        </Box>
        <Typography variant='body2' sx={{ mt: 2 }}>
          <strong>{t.section7}</strong>
          <br />
          {t.section7Content}
        </Typography>
        <Button
          variant='contained'
          onClick={onClose}
          sx={{
            mt: 3,
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {t.closeButton}
        </Button>
      </Box>
    </Modal>
  );
};

export default PrivacyPolicyModal;
