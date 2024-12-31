import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

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
          Privatumo politika
        </Typography>
        <Typography variant='body1' sx={{ mt: 2 }}>
          Mes gerbiame jūsų privatumą ir įsipareigojame užtikrinti jūsų
          asmeninės informacijos apsaugą. Šioje privatumo politikoje
          paaiškinama, kaip mes renkame, naudojame ir saugome jūsų duomenis.
        </Typography>
        <Typography variant='body2' sx={{ mt: 2 }}>
          <strong>1. Surinkti duomenys:</strong> Mes galime rinkti jūsų vardą,
          el. paštą ir kitą informaciją, kurią pateikiate mūsų kontaktų formoje.
        </Typography>
        <Typography variant='body2' sx={{ mt: 2 }}>
          <strong>2. Kodėl renkami duomenys?</strong>
          <br />
          Jūsų pateikti duomenys naudojami tik tam, kad galėtume atsakyti į jūsų
          užklausą. Mes nenaudojame jūsų duomenų jokiais kitais tikslais.
        </Typography>
        <Typography variant='body2' sx={{ mt: 2 }}>
          <strong>3. Kaip ilgai saugomi duomenys?</strong>
          <br />
          Jūsų pateikti duomenys saugomi tik tol, kol atsakome į jūsų užklausą.
          Po to jie pašalinami.
        </Typography>
        <Typography variant='body2' sx={{ mt: 2 }}>
          <strong>4. Duomenų perdavimas trečiosioms šalims</strong>
          <br />
          Jūsų žinutės siunčiamos naudojant trečiosios šalies paslaugą –{' '}
          <strong>Email.js</strong>. Ši paslauga užtikrina žinučių siuntimą el.
          paštu. Naudojant šią paslaugą, jūsų duomenys yra tvarkomi pagal{' '}
          <strong>Email.js</strong> privatumo politiką. Taip pat naudojame{' '}
          <strong>SEO įrankius</strong>, kurie gali rinkti ir analizuoti tam
          tikrus duomenis siekiant pagerinti mūsų svetainės našumą.
        </Typography>
        <Typography variant='body2' sx={{ mt: 2 }}>
          <strong>5. Slapukai ir stebėjimo technologijos</strong>
          <br />
          Šiuo metu mes nenaudojame slapukų ar kitų stebėjimo technologijų. Jei
          ateityje tai bus pakeista, apie tai informuosime jus iš anksto.
        </Typography>
        <Typography variant='body2' sx={{ mt: 2 }}>
          <strong>6. Jūsų teisės</strong>
          <br />
          Pagal BDAR jūs turite teisę:
          <ul>
            <li>Susipažinti su savo pateiktais duomenimis;</li>
            <li>Prašyti juos ištaisyti arba ištrinti;</li>
            <li>Atsisakyti jų tvarkymo arba apriboti jų naudojimą.</li>
          </ul>
        </Typography>
        <Typography variant='body2' sx={{ mt: 2 }}>
          <strong>7. Kontaktinė informacija</strong>
          <br />
          Jeigu turite klausimų apie savo duomenų apsaugą ar norite pasinaudoti
          savo teisėmis, susisiekite el. paštu:{' '}
          <strong>linaswebdev@gmail.com</strong>.
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
          Užverti
        </Button>
      </Box>
    </Modal>
  );
};

export default PrivacyPolicyModal;
