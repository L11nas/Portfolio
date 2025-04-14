import React, { useEffect } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { useLanguage } from '../../context/LanguageContext';
import { Helmet } from 'react-helmet-async';
import './modalStyles.css';
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

  // Blokuojame slinkimą, kai modalinis langas atidarytas
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const translations = {
    LT: {
      title: 'Privatumo politika | LinasWebDev',
      metaDescription:
        'LinasWebDev privatumo politika - sužinokite, kaip mes renkame, naudojame ir saugome jūsų asmens duomenis.',
      pageTitle: 'Privatumo politika',
      description:
        'Mes, LinasWebDev, gerbiame jūsų privatumą ir įsipareigojame užtikrinti jūsų asmeninės informacijos apsaugą. Šioje privatumo politikoje paaiškinama, kaip mes renkame, naudojame ir saugome jūsų duomenis.',
      section1: '1. Surinkti duomenys:',
      section1Content:
        'Mes galime rinkti jūsų vardą, el. paštą ir kitą informaciją, kurią pateikiate mūsų kontaktų formoje svetainės kūrimo paslaugų užklausoms.',
      section2: '2. Kodėl renkami duomenys?',
      section2Content:
        'Jūsų pateikti duomenys naudojami tik tam, kad galėtume atsakyti į jūsų užklausą dėl svetainių kūrimo paslaugų. Mes nenaudojame jūsų duomenų jokiais kitais tikslais.',
      section2aTitle: '2.1. Teisinis pagrindas duomenų tvarkymui:',
      section2aContent:
        'Jūsų duomenys tvarkomi remiantis jūsų sutikimu, kurį išreiškiate pateikdami savo duomenis kontaktų formoje, bei mūsų teisėtu interesu atsakyti į jūsų užklausas dėl svetainių kūrimo paslaugų.',
      section3: '3. Kaip ilgai saugomi duomenys?',
      section3Content:
        'Jūsų pateikti duomenys saugomi tik tol, kol atsakome į jūsų užklausą. Po to jie pašalinami, nebent susitariame dėl tolimesnio bendradarbiavimo.',
      section4: '4. Duomenų perdavimas trečiosioms šalims',
      section4Content:
        'Jūsų žinutės siunčiamos naudojant trečiosios šalies paslaugą – Email.js. Ši paslauga užtikrina žinučių siuntimą el. paštu. Naudojant šią paslaugą, jūsų duomenys yra tvarkomi pagal Email.js privatumo politiką. Taip pat naudojame Google Analytics įrankį, kuris padeda analizuoti svetainės lankomumą ir gerinti vartotojo patirtį.',
      section4aTitle: '4.1. Tarptautiniai duomenų perdavimai:',
      section4aContent:
        'Email.js ir Google Analytics gali perduoti duomenis už Europos Sąjungos ar Europos ekonominės erdvės ribų. Šie perdavimai vykdomi remiantis tinkamomis apsaugos priemonėmis, tokiomis kaip Europos Komisijos patvirtintos standartinės duomenų apsaugos sąlygos.',
      section5: '5. Slapukai ir stebėjimo technologijos',
      section5Content:
        'Mes naudojame slapukus, kad užtikrintume geriausią patirtį naršant mūsų svetainėje. Taip pat naudojame "Google Analytics" paslaugą, kuri padeda analizuoti svetainės lankomumą ir suprasti, kaip lankytojai naudoja mūsų svetainę. "Google Analytics" renka anoniminę informaciją apie jūsų apsilankymą, įskaitant puslapius, kuriuos lankėte, laiką, praleistą svetainėje, ir kitą bendrą informaciją.',
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
        'Mūsų svetainė ir teikiamos svetainių kūrimo paslaugos nėra skirtos jaunesniems nei 16 metų asmenims, ir mes sąmoningai nerenkame asmeninės informacijos iš vaikų.',
      section9: '9. Privatumo politikos atnaujinimai',
      section9Content:
        'Ši privatumo politika gali būti periodiškai atnaujinama. Apie reikšmingus pakeitimus informuosime paskelbdami atnaujintą politiką savo svetainėje. Rekomenduojame reguliariai peržiūrėti šią politiką.',
      section10: '10. Kontaktinė informacija',
      section10Content:
        'Jeigu turite klausimų apie savo duomenų apsaugą, mūsų svetainių kūrimo paslaugas ar norite pasinaudoti savo teisėmis, susisiekite el. paštu: linaswebdev@email.com.',
      closeButton: 'Uždaryti',
      accessibilityLabel: 'Uždaryti privatumo politikos langą',
    },
    EN: {
      title: 'Privacy Policy | LinasWebDev',
      metaDescription:
        'LinasWebDev privacy policy - learn how we collect, use and protect your personal data.',
      pageTitle: 'Privacy Policy',
      description:
        'We, LinasWebDev, respect your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and protect your data.',
      section1: '1. Data Collected:',
      section1Content:
        'We may collect your name, email, and other information you provide in our contact form for website development service inquiries.',
      section2: '2. Why is the data collected?',
      section2Content:
        'The data you provide is used solely to respond to your inquiry about our website development services. We do not use your data for any other purposes.',
      section2aTitle: '2.1. Legal Basis for Data Processing:',
      section2aContent:
        'Your data is processed based on your consent, which you express by submitting your data through the contact form, and our legitimate interest to respond to your inquiries about our website development services.',
      section3: '3. How long is the data retained?',
      section3Content:
        'The data you provide is retained only until we respond to your inquiry. After that, it is deleted, unless we agree on further collaboration.',
      section4: '4. Data Transfer to Third Parties',
      section4Content:
        'Your messages are sent using a third-party service – Email.js. This service ensures the sending of messages via email. When using this service, your data is processed according to Email.js privacy policy. We also use Google Analytics that helps analyze website traffic and improve user experience.',
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
        'Our website and website development services are not intended for individuals under the age of 16, and we do not knowingly collect personal information from children.',
      section9: '9. Privacy Policy Updates',
      section9Content:
        'This privacy policy may be updated periodically. We will notify you of significant changes by posting the updated policy on our website. We recommend reviewing this policy regularly.',
      section10: '10. Contact Information',
      section10Content:
        'If you have questions about your data protection, our website development services, or want to exercise your rights, please contact us at: linaswebdev@email.com.',
      closeButton: 'Close',
      accessibilityLabel: 'Close privacy policy modal',
    },
  };

  const t = translations[language];

  return (
    <>
      {isOpen && (
        <Helmet>
          <title>{t.title}</title>
          <meta name='description' content={t.metaDescription} />
          <meta name='robots' content='noindex, nofollow' />
        </Helmet>
      )}
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby='privacy-policy-title'
        aria-describedby='privacy-policy-description'
      >
        <Box
          sx={modalStyle}
          role='dialog'
          aria-modal='true'
          aria-labelledby='privacy-policy-title'
        >
          <Typography
            id='privacy-policy-title'
            variant='h4'
            component='h1'
            className='modal-title'
            sx={{
              color: 'text.primary',
              fontWeight: 'bold',
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
            }}
          >
            {t.pageTitle}
          </Typography>

          <Typography
            id='privacy-policy-description'
            variant='body1'
            sx={{
              mt: 2,
              mb: 3,
              fontSize: { xs: '0.9rem', sm: '1rem' },
              lineHeight: 1.6,
            }}
          >
            {t.description}
          </Typography>

          <Typography
            variant='h6'
            component='h2'
            className='modal-section-title'
            sx={{
              mt: 3,
              mb: 1,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              fontWeight: 'bold',
              color: 'primary.main',
            }}
          >
            {t.section1}
          </Typography>
          <Typography variant='body2' sx={{ mt: 1, lineHeight: 1.6 }}>
            {t.section1Content}
          </Typography>

          <Typography
            variant='h6'
            component='h2'
            sx={{
              mt: 3,
              mb: 1,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              fontWeight: 'bold',
              color: 'primary.main',
            }}
          >
            {t.section2}
          </Typography>
          <Typography variant='body2' sx={{ mt: 1, lineHeight: 1.6 }}>
            {t.section2Content}
          </Typography>

          <Typography
            variant='h6'
            component='h3'
            sx={{
              mt: 2,
              mb: 1,
              fontSize: { xs: '0.9rem', sm: '1rem' },
              fontWeight: 'bold',
            }}
          >
            {t.section2aTitle}
          </Typography>
          <Typography variant='body2' sx={{ mt: 1, lineHeight: 1.6 }}>
            {t.section2aContent}
          </Typography>

          <Typography
            variant='h6'
            component='h2'
            sx={{
              mt: 3,
              mb: 1,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              fontWeight: 'bold',
              color: 'primary.main',
            }}
          >
            {t.section3}
          </Typography>
          <Typography variant='body2' sx={{ mt: 1, lineHeight: 1.6 }}>
            {t.section3Content}
          </Typography>

          <Typography
            variant='h6'
            component='h2'
            sx={{
              mt: 3,
              mb: 1,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              fontWeight: 'bold',
              color: 'primary.main',
            }}
          >
            {t.section4}
          </Typography>
          <Typography variant='body2' sx={{ mt: 1, lineHeight: 1.6 }}>
            {t.section4Content}
          </Typography>

          <Typography
            variant='h6'
            component='h3'
            sx={{
              mt: 2,
              mb: 1,
              fontSize: { xs: '0.9rem', sm: '1rem' },
              fontWeight: 'bold',
            }}
          >
            {t.section4aTitle}
          </Typography>
          <Typography variant='body2' sx={{ mt: 1, lineHeight: 1.6 }}>
            {t.section4aContent}
          </Typography>

          <Typography
            variant='h6'
            component='h2'
            sx={{
              mt: 3,
              mb: 1,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              fontWeight: 'bold',
              color: 'primary.main',
            }}
          >
            {t.section5}
          </Typography>
          <Typography variant='body2' sx={{ mt: 1, lineHeight: 1.6 }}>
            {t.section5Content}
          </Typography>

          <Typography
            variant='h6'
            component='h3'
            sx={{
              mt: 2,
              mb: 1,
              fontSize: { xs: '0.9rem', sm: '1rem' },
              fontWeight: 'bold',
            }}
          >
            {t.section5aTitle}
          </Typography>
          <Typography variant='body2' sx={{ mt: 1, mb: 1, lineHeight: 1.6 }}>
            {t.section5aContent}
          </Typography>

          <Box
            component='ul'
            sx={{ pl: 4, mt: 0.5, mb: 2 }}
            aria-label={
              language === 'LT' ? 'Slapukų tipai' : 'Types of cookies'
            }
          >
            {t.cookieTypes.map((cookieType, index) => (
              <Box
                component='li'
                key={index}
                sx={{
                  mb: 1,
                  fontSize: { xs: '0.8rem', sm: '0.875rem' },
                  lineHeight: 1.6,
                }}
              >
                {cookieType}
              </Box>
            ))}
          </Box>

          <Typography
            variant='h6'
            component='h3'
            sx={{
              mt: 2,
              mb: 1,
              fontSize: { xs: '0.9rem', sm: '1rem' },
              fontWeight: 'bold',
            }}
          >
            {t.section5bTitle}
          </Typography>
          <Typography variant='body2' sx={{ mt: 1, lineHeight: 1.6 }}>
            {t.section5bContent}
          </Typography>

          <Typography
            variant='h6'
            component='h2'
            sx={{
              mt: 3,
              mb: 1,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              fontWeight: 'bold',
              color: 'primary.main',
            }}
          >
            {t.section6}
          </Typography>
          <Typography variant='body2' sx={{ mt: 1, mb: 1, lineHeight: 1.6 }}>
            {t.section6Content}
          </Typography>

          <Box
            component='ul'
            sx={{ pl: 4, mt: 0.5, mb: 2 }}
            aria-label={language === 'LT' ? 'Jūsų teisės' : 'Your rights'}
          >
            {t.rights.map((right, index) => (
              <Box
                component='li'
                key={index}
                sx={{
                  mb: 1,
                  fontSize: { xs: '0.8rem', sm: '0.875rem' },
                  lineHeight: 1.6,
                }}
              >
                {right}
              </Box>
            ))}
          </Box>

          <Typography
            variant='h6'
            component='h2'
            sx={{
              mt: 3,
              mb: 1,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              fontWeight: 'bold',
              color: 'primary.main',
            }}
          >
            {t.section7}
          </Typography>
          <Typography variant='body2' sx={{ mt: 1, lineHeight: 1.6 }}>
            {t.section7Content}
          </Typography>

          <Typography
            variant='h6'
            component='h2'
            sx={{
              mt: 3,
              mb: 1,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              fontWeight: 'bold',
              color: 'primary.main',
            }}
          >
            {t.section8}
          </Typography>
          <Typography variant='body2' sx={{ mt: 1, lineHeight: 1.6 }}>
            {t.section8Content}
          </Typography>

          <Typography
            variant='h6'
            component='h2'
            sx={{
              mt: 3,
              mb: 1,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              fontWeight: 'bold',
              color: 'primary.main',
            }}
          >
            {t.section9}
          </Typography>
          <Typography variant='body2' sx={{ mt: 1, lineHeight: 1.6 }}>
            {t.section9Content}
          </Typography>

          <Typography
            variant='h6'
            component='h2'
            sx={{
              mt: 3,
              mb: 1,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              fontWeight: 'bold',
              color: 'primary.main',
            }}
          >
            {t.section10}
          </Typography>
          <Typography variant='body2' sx={{ mt: 1, lineHeight: 1.6 }}>
            {t.section10Content}
          </Typography>

          <Button
            variant='contained'
            onClick={onClose}
            className='modal-button'
            aria-label={t.accessibilityLabel}
            sx={{
              mt: 4,
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              px: 4,
              py: 1,
              fontSize: { xs: '0.9rem', sm: '1rem' },
              fontWeight: 'medium',
              borderRadius: 2,
              boxShadow: 2,
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 3,
              },
              transition: 'all 0.3s ease',
            }}
          >
            {t.closeButton}
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default PrivacyPolicyModal;
