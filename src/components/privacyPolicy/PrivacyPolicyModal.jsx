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
    xs: 2,
    sm: 3,
    md: 4,
  },
  borderRadius: 2,
  overflow: 'auto',
  maxHeight: '80vh',
};

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  const { language } = useLanguage();

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
      section2aTitle: '2.1. Teisinis pagrindas duomenų tvarkymui:',
      section2aContent:
        'Jūsų duomenys tvarkomi remiantis jūsų sutikimu, kurį išreiškiate pateikdami savo duomenis kontaktų formoje, bei mūsų teisėtu interesu atsakyti į jūsų užklausas.',
      section3: '3. Kaip ilgai saugomi duomenys?',
      section3Content:
        'Jūsų pateikti duomenys saugomi tik tol, kol atsakome į jūsų užklausą. Po to jie pašalinami.',
      section4: '4. Duomenų perdavimas trečiosioms šalims',
      section4Content:
        'Jūsų žinutės siunčiamos naudojant trečiosios šalies paslaugą – Email.js. Ši paslauga užtikrina žinučių siuntimą el. paštu. Naudojant šią paslaugą, jūsų duomenys yra tvarkomi pagal Email.js privatumo politiką. Taip pat naudojame SEO įrankius, kurie gali rinkti ir analizuoti tam tikrus duomenis siekiant pagerinti mūsų svetainės našumą.',
      section4aTitle: '4.1. Tarptautiniai duomenų perdavimai:',
      section4aContent:
        'Email.js ir Google Analytics gali perduoti duomenis už Europos Sąjungos ar Europos ekonominės erdvės ribų. Šie perdavimai vykdomi remiantis tinkamomis apsaugos priemonėmis, tokiomis kaip Europos Komisijos patvirtintos standartinės duomenų apsaugos sąlygos.',
      section5: '5. Slapukai ir stebėjimo technologijos',
      section5Content:
        'Mes naudojame slapukus, kad užtikrintume geriausią patirtį naršant mūsų svetainę. Taip pat naudojame "Google Analytics" paslaugą, kuri padeda analizuoti svetainės lankomumą ir suprasti, kaip lankytojai naudoja mūsų svetainę. "Google Analytics" renka anoniminę informaciją apie jūsų apsilankymą, įskaitant puslapius, kuriuos lankėte, laiką, praleistą svetainėje, ir kitą bendrą informaciją.',
      section5aTitle: '5.1. Slapukų tipai:',
      section5aContent: 'Mūsų svetainėje naudojami šie slapukų tipai:',
      cookieTypes: [
        'Būtinieji slapukai: reikalingi svetainės veikimui (galioja iki naršyklės uždarymo);',
        'Funkciniai slapukai: gerina jūsų naršymo patirtį (galioja iki 1 mėnesio);',
        'Analitiniai slapukai: padeda mums suprasti, kaip naudojama svetainė (galioja iki 2 metų).',
      ],
      section5bTitle: '5.2. Slapukų valdymas:',
      section5bContent:
        'Jūs galite valdyti ir ištrinti slapukus bet kuriuo metu, keisdami savo naršyklės nustatymus. Tačiau atkreipiame dėmesį, kad išjungus kai kuriuos slapukus, svetainė gali veikti netinkamai.',
      section6: '6. Jūsų teisės',
      section6Content: 'Pagal BDAR jūs turite teisę:',
      rights: [
        'Susipažinti su savo pateiktais duomenimis;',
        'Prašyti juos ištaisyti arba ištrinti;',
        'Atsisakyti jų tvarkymo arba apriboti jų naudojimą;',
        'Pateikti skundą Valstybinei duomenų apsaugos inspekcijai.',
      ],
      section7: '7. Duomenų saugumo priemonės',
      section7Content:
        'Mes taikome tinkamas technines ir organizacines priemones jūsų duomenų apsaugai užtikrinti, įskaitant šifravimą, prieigos kontrolę ir reguliarų saugumo priemonių vertinimą.',
      section8: '8. Vaikų privatumas',
      section8Content:
        'Mūsų svetainė nėra skirta jaunesniems nei 16 metų asmenims, ir mes sąmoningai nerenkame asmeninės informacijos iš vaikų.',
      section9: '9. Privatumo politikos atnaujinimai',
      section9Content:
        'Ši privatumo politika gali būti periodiškai atnaujinama. Apie reikšmingus pakeitimus informuosime paskelbdami atnaujintą politiką savo svetainėje. Rekomenduojame reguliariai peržiūrėti šią politiką.',
      section10: '10. Kontaktinė informacija',
      section10Content:
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
      section2aTitle: '2.1. Legal Basis for Data Processing:',
      section2aContent:
        'Your data is processed based on your consent, which you express by submitting your data through the contact form, and our legitimate interest to respond to your inquiries.',
      section3: '3. How long is the data retained?',
      section3Content:
        'The data you provide is retained only until we respond to your inquiry. After that, it is deleted.',
      section4: '4. Data Transfer to Third Parties',
      section4Content:
        'Your messages are sent using a third-party service – Email.js. This service ensures the sending of messages via email. When using this service, your data is processed according to Email.js privacy policy. We also use SEO tools that may collect and analyze certain data to improve our website performance.',
      section4aTitle: '4.1. International Data Transfers:',
      section4aContent:
        'Email.js and Google Analytics may transfer data outside the European Union or European Economic Area. These transfers are carried out based on appropriate safeguards, such as the European Commission-approved standard data protection clauses.',
      section5: '5. Cookies and Tracking Technologies',
      section5Content:
        'We use cookies to ensure the best experience while browsing our website. We also use the Google Analytics service, which helps analyze website traffic and understand how visitors use our site. Google Analytics collects anonymous information about your visit, including the pages you visited, time spent on the site, and other general information.',
      section5aTitle: '5.1. Types of Cookies:',
      section5aContent: 'Our website uses the following types of cookies:',
      cookieTypes: [
        'Essential cookies: necessary for website functioning (valid until browser closing);',
        'Functional cookies: improve your browsing experience (valid up to 1 month);',
        'Analytical cookies: help us understand how the website is used (valid up to 2 years).',
      ],
      section5bTitle: '5.2. Cookie Management:',
      section5bContent:
        'You can manage and delete cookies at any time by changing your browser settings. However, please note that disabling certain cookies may affect the proper functioning of the website.',
      section6: '6. Your Rights',
      section6Content: 'Under GDPR, you have the right to:',
      rights: [
        'Access your submitted data;',
        'Request to correct or delete it;',
        'Object to its processing or restrict its use;',
        'Lodge a complaint with your local data protection authority.',
      ],
      section7: '7. Data Security Measures',
      section7Content:
        'We implement appropriate technical and organizational measures to ensure the security of your data, including encryption, access control, and regular security measures assessment.',
      section8: "8. Children's Privacy",
      section8Content:
        'Our website is not intended for individuals under the age of 16, and we do not knowingly collect personal information from children.',
      section9: '9. Privacy Policy Updates',
      section9Content:
        'This privacy policy may be updated periodically. We will notify you of significant changes by posting the updated policy on our website. We recommend reviewing this policy regularly.',
      section10: '10. Contact Information',
      section10Content:
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
        <Typography variant='body2' sx={{ mt: 1 }}>
          <strong>{t.section2aTitle}</strong>
          <br />
          {t.section2aContent}
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
        <Typography variant='body2' sx={{ mt: 1 }}>
          <strong>{t.section4aTitle}</strong>
          <br />
          {t.section4aContent}
        </Typography>
        <Typography variant='body2' sx={{ mt: 2 }}>
          <strong>{t.section5}</strong>
          <br />
          {t.section5Content}
        </Typography>
        <Typography variant='body2' sx={{ mt: 1 }}>
          <strong>{t.section5aTitle}</strong>
          <br />
          {t.section5aContent}
        </Typography>
        <Box component='ul' sx={{ pl: 2, mt: 1 }}>
          {t.cookieTypes.map((cookieType, index) => (
            <li key={index}>{cookieType}</li>
          ))}
        </Box>
        <Typography variant='body2' sx={{ mt: 1 }}>
          <strong>{t.section5bTitle}</strong>
          <br />
          {t.section5bContent}
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
        <Typography variant='body2' sx={{ mt: 2 }}>
          <strong>{t.section8}</strong>
          <br />
          {t.section8Content}
        </Typography>
        <Typography variant='body2' sx={{ mt: 2 }}>
          <strong>{t.section9}</strong>
          <br />
          {t.section9Content}
        </Typography>
        <Typography variant='body2' sx={{ mt: 2 }}>
          <strong>{t.section10}</strong>
          <br />
          {t.section10Content}
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
