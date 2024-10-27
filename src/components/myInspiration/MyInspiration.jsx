import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useDarkMode } from '../../ThemeContext';
import './myinspiration.css'; // Make sure to import the CSS file

export default function TitlebarBelowMasonryImageList() {
  const { darkMode } = useDarkMode();
  const inspirationRef = useRef(null);

  return (
    <div ref={inspirationRef} className={darkMode ? 'dark-mode' : ''}>
      <h1
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '100px',
          marginTop: '0px',
          color: darkMode ? '#fff' : '#333',
        }}
      >
        <div id='Mano Įkvėpimas'>Mano įkvėpimas</div>
      </h1>
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
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x, ${item.img}?w=124&fit=crop&auto=format 1x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading='lazy'
                  className='hover-image' // Add this class
                  style={{ borderRadius: '8px' }}
                />
                <ImageListItemBar position='below' title={item.title} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </div>
  );
}

const itemData = [
  { img: '/personal/kaunomaratonas.jpg', title: 'Kauno maratonas' },
  { img: '/personal/ironman.jpg', title: 'Ironman' },
  { img: '/personal/134835.jpg', title: 'Sulėtekio maratonas' },
  { img: '/personal/maratonas2024.jpg', title: 'Kauno maratonas' },
  { img: '/img/191319.jpg', title: 'Ironman Maastricht' },
  {
    img: 'img/1623610342632.jpg',
    title: 'Jonavos maratonas',
  },
  {
    img: '/img/1648968564148.jpg',
    title: 'Druskininkų pusmaratonis',
  },
  {
    img: '/img/1655576449371.jpg',
    title: 'Olimpinė diena',
  },
  {
    img: '/img/1657362673507.jpg',
    title: 'Karaliaus Mindaugo',
  },
  {
    img: '/img/1657466566251.jpg',
    title: 'Širvintų maratonas',
  },
  {
    img: '/img/135855.jpg',
    title: 'Kauno maratonas',
  },
  {
    img: '/img/195650.jpg',
    title: 'Ironman Tallin',
  },
  {
    img: '/img/121614.jpg',
    title: 'Vilniaus pusmaratonis',
  },
  {
    img: '/img/154525.jpg',
    title: 'Jonava',
  },
  {
    img: '/img/164925.jpg',
    title: 'Druskininkų pusmaratonis',
  },
  {
    img: '/img/155812.jpg',
    title: 'Sūduvos taurė',
  },
  {
    img: '/img/162233.jpg',
    title: 'Medininkai',
  },
  {
    img: '/img/165846.jpg',
    title: 'Alytaus pusmaratonis',
  },
  {
    img: '/img/sauletekis.jpg',
    title: 'Saulėtekio maratonas',
  },
  {
    img: '/img/342.jpg',
    title: 'Mindauginės',
  },
  {
    img: '/img/551.jpg',
    title: 'Širvintų maratonas',
  },

  {
    img: '/img/673.jpg',
    title: 'Vilties bėgimas',
  },
  {
    img: 'img/V.jpg',
    title: 'Ironman Tallin',
  },
  {
    img: '/img/317033579575096.jpeg',
    title: 'Ironman',
  },
  {
    img: '/img/437614981753426.jpeg',
    title: 'Ironman',
  },
  {
    img: '/img/4965070230287149.jpeg',
    title: 'Estafetė 5x5',
  },
  {
    img: '/img/225159.jpg',
    title: 'Labdaros bėgimas',
  },
];
