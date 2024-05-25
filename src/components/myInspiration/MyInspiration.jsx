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
  },
  {
    img: '/personal/ironman.jpg',
    title: 'Books',
  },
  {
    img: '/personal/20211205_134835.jpg',
    title: 'Boo',
  },
  {
    img: '/personal/Kauno maratonas2024.jpg',
    title: 'Laikas 3.19 val.',
  },
  {
    img: '/My inspiration foto/20220807_191319.jpg',
    title: '0',
  },
  {
    img: '/My inspiration foto/FB_IMG_1623610342632.jpg',
    title: '0',
  },
  {
    img: '/My inspiration foto/FB_IMG_1648968564148.jpg',
    title: '0',
  },
  {
    img: '/My inspiration foto/FB_IMG_1655576449371.jpg',
    title: '0',
  },
  {
    img: '/My inspiration foto/FB_IMG_1657362673507.jpg',
    title: '0',
  },
  {
    img: '/My inspiration foto/FB_IMG_1657466566251.jpg',
    title: '0',
  },
  {
    img: '/My inspiration foto/GarminConnect_20200606-135855.jpg',
    title: '0',
  },
  {
    img: '/My inspiration foto/GarminConnect_20200910-195650.jpg',
    title: '0',
  },
  {
    img: '/My inspiration foto/GarminConnect_20200913-121614.jpg',
    title: '0',
  },
  {
    img: '/My inspiration foto/GarminConnect_20220213-154525.jpg',
    title: '0',
  },
  {
    img: '/My inspiration foto/GarminConnect_20220402-164925.jpg',
    title: '0',
  },
  {
    img: '/My inspiration foto/GarminConnect_20220515-155812.jpg',
    title: '0',
  },
  {
    img: '/My inspiration foto/GarminConnect_20220731-162233.jpg',
    title: '0',
  },
  {
    img: '/My inspiration foto/GarminConnect_20220808-222142.jpg',
    title: '0',
  },
  {
    img: '/My inspiration foto/GarminConnect_20220828-165846.jpg',
    title: '0',
  },
  {
    img: '/My inspiration foto/IMG_20211208_231133_350.jpg',
    title: '0',
  },
  {
    img: '/My inspiration foto/IMG_20220424_151744_513.jpg',
    title: '0',
  },
  {
    img: '/My inspiration foto/IMG_20220706_234300_342.jpg',
    title: '0',
  },
  {
    img: '/My inspiration foto/IMG_20220710_172107_551.jpg',
    title: '0',
  },
  {
    img: '/My inspiration foto/IMG_20220808_224428_673.jpg',
    title: '0',
  },
  {
    img: '/My inspiration foto/IMG-a170c9ecd1e512e0460d27c9709d8eaa-V.jpg',
    title: '0',
  },
  {
    img: '/My inspiration foto/received_317033579575096.jpeg',
    title: '0',
  },
  {
    img: '/My inspiration foto/received_437614981753426.jpeg',
    title: '0',
  },
  {
    img: '/My inspiration foto/received_4965070230287149.jpeg',
    title: '0',
  },
  {
    img: '/My inspiration foto/Screenshot_20210803_225159.jpg',
    title: '0',
  },
];
