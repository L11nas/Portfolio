import React, { useEffect } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { useLanguage } from '../../context/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { translations } from './TermsOfServiceTranslations'; // Importuojame vertimus iš antro failo

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

const TermsOfServiceModal = ({ isOpen, onClose }) => {
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
        aria-labelledby='terms-of-service-title'
        aria-describedby='terms-of-service-description'
      >
        <Box
          sx={modalStyle}
          role='dialog'
          aria-modal='true'
          aria-labelledby='terms-of-service-title'
        >
          <Typography
            id='terms-of-service-title'
            variant='h4'
            component='h1'
            sx={{
              color: 'text.primary',
              fontWeight: 'bold',
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
            }}
          >
            {t.pageTitle}
          </Typography>

          <Typography
            id='terms-of-service-description'
            variant='body1'
            sx={{
              mt: 2,
              mb: 3,
              fontSize: { xs: '0.9rem', sm: '1rem' },
              lineHeight: 1.6,
            }}
          >
            {t.introduction}
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
            {t.section2_1}
          </Typography>
          <Typography variant='body2' sx={{ mt: 1, lineHeight: 1.6 }}>
            {t.section2_1Content}
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
            component='h3'
            sx={{
              mt: 2,
              mb: 1,
              fontSize: { xs: '0.9rem', sm: '1rem' },
              fontWeight: 'bold',
            }}
          >
            {t.section3_1}
          </Typography>
          <Typography variant='body2' sx={{ mt: 1, lineHeight: 1.6 }}>
            {t.section3_1Content}
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
          <Typography variant='body2' sx={{ mt: 1, lineHeight: 1.6 }}>
            {t.section6Content}
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
            {t.section11}
          </Typography>
          <Typography variant='body2' sx={{ mt: 1, lineHeight: 1.6 }}>
            {t.section11Content}
          </Typography>

          <Button
            variant='contained'
            onClick={onClose}
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

export default TermsOfServiceModal;
