import React, { useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useDarkMode } from '../../ThemeContext';

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
          marginTop: '100px',
          color: darkMode ? '#fff' : '#333',
        }}
      >
        <div id='MyInspirationSection'>My Inspiration</div>
      </h1>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '16px',
          borderRadius: '16px',
          maxWidth: '800px',
          margintop: '20px',
          margin: '0 auto',

          backgroundColor: darkMode ? '#000' : 'var(--container-color)',
          color: darkMode ? '#fff' : '#333',
          '@media screen and (max-width: 992px)': {
            backgroundColor: darkMode ? '#111' : '#f0f0f0', // Example change for screens up to 992px
          },
          '@media screen and (max-width: 768px)': {
            padding: '8px', // Example change for screens up to 768px
          },
          '@media screen and (max-width: 576px)': {
            flexDirection: 'column-reverse', // Example change for screens up to 576px
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            overflowY: 'scroll',
            margin: '20px 0',
            marginBottom: '10%',
          }}
        >
          <ImageList variant='masonry' cols={3} gap={4}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading='lazy'
                  style={{ borderRadius: '8px' }}
                />
                <ImageListItemBar position='below' title={item.author} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </div>
  );
}
const itemData = [
  {
    img: '/personal/kaunomaratonas.jpg',
    title: 'Bed',
    author: 'swabdesign',
  },
  {
    img: '/personal/ironman.jpg',
    title: 'Books',
    author: 'Pavel Nekoranec',
  },
  {
    img: '/personal/20211205_134835.jpg',
    title: 'Boo',
    author: 'Pavel Nekoranec',
  },
];
