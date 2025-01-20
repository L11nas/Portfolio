import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useDarkMode } from '../../ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import './myinspiration.css';

export default function MyInspiration() {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  const inspirationRef = useRef(null);

  // Vertimų objektas
  const translations = {
    LT: {
      title: 'Mano įkvėpimas',
      description:
        'Ši kolekcija atspindi mano bėgimo patirtį ir motyvaciją. Kiekvienas vaizdas turi savo istoriją.',
    },
    EN: {
      title: 'My Inspiration',
      description:
        'This collection reflects my running experience and motivation. Each image has its own story.',
    },
  };

  const t = translations[language];

  // Tinkamai įtrauktas `itemData`
  const itemData = [
    { img: '/personal/kaunomaratonas.jpg', title: 'Kauno maratonas' },
    { img: '/personal/ironman.jpg', title: 'Ironman' },
    { img: '/personal/134835.jpg', title: 'Sulėtekio maratonas' },
    { img: '/personal/maratonas2024.jpg', title: 'Kauno maratonas' },
    { img: '/img/191319.jpg', title: 'Ironman Maastricht' },
    { img: '/img/1623610342632.jpg', title: 'Jonavos maratonas' },
    { img: '/img/1648968564148.jpg', title: 'Druskininkų pusmaratonis' },
    { img: '/img/1655576449371.jpg', title: 'Olimpinė diena' },
    { img: '/img/1657362673507.jpg', title: 'Karaliaus Mindaugo' },
    { img: '/img/1657466566251.jpg', title: 'Širvintų maratonas' },
    { img: '/img/135855.jpg', title: 'Kauno maratonas' },
    { img: '/img/195650.jpg', title: 'Ironman Tallin' },
    { img: '/img/121614.jpg', title: 'Vilniaus pusmaratonis' },
    { img: '/img/154525.jpg', title: 'Jonava' },
    { img: '/img/164925.jpg', title: 'Druskininkų pusmaratonis' },
    { img: '/img/155812.jpg', title: 'Sūduvos taurė' },
    { img: '/img/162233.jpg', title: 'Medininkai' },
    { img: '/img/165846.jpg', title: 'Alytaus pusmaratonis' },
    { img: '/img/sauletekis.jpg', title: 'Saulėtekio maratonas' },
    { img: '/img/342.jpg', title: 'Mindauginės' },
    { img: '/img/551.jpg', title: 'Širvintų maratonas' },
    { img: '/img/673.jpg', title: 'Vilties bėgimas' },
    { img: '/img/V.jpg', title: 'Ironman Tallin' },
    { img: '/img/317033579575096.jpeg', title: 'Ironman' },
    { img: '/img/437614981753426.jpeg', title: 'Ironman' },
    { img: '/img/4965070230287149.jpeg', title: 'Estafetė 5x5' },
    { img: '/img/225159.jpg', title: 'Labdaros bėgimas' },
  ];

  return (
    <section
      ref={inspirationRef}
      className={darkMode ? 'dark-mode' : ''}
      id='inspiration'
    >
      <h1 className='inspiration-title'>{t.title}</h1>
      <p className='inspiration-description'>{t.description}</p>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '16px',
          borderRadius: '16px',
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: darkMode ? '#333' : 'var(--container-color)',
          color: darkMode ? '#fff' : '#333',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '400px',
            overflowY: 'auto',
            margin: '20px 0',
            marginBottom: '10%',
          }}
        >
          <ImageList variant='masonry' cols={3} gap={4}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={item.img}
                  alt={item.title}
                  loading='lazy'
                  className='hover-image'
                  style={{ borderRadius: '8px' }}
                />
                <ImageListItemBar position='below' title={item.title} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </section>
  );
}
