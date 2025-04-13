import React, { useEffect } from 'react';
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

  // Refresh AOS when component mounts
  useEffect(() => {
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  // Vertimų objektas
  const translations = {
    LT: {
      title: 'Mano įkvėpimas',
      subtitle: 'Bėgimo aistra',
      description:
        'Ši kolekcija atspindi mano bėgimo patirtį ir motyvaciją. Kiekvienas vaizdas turi savo istoriją ir primena apie pastangas, ištvermę bei džiaugsmą, patirtą siekiant sporto tikslų.',
    },
    EN: {
      title: 'My Inspiration',
      subtitle: 'Running Passion',
      description:
        'This collection reflects my running experience and motivation. Each image has its own story and reminds of the effort, endurance and joy experienced in pursuing sports goals.',
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
      className={`inspiration__section ${darkMode ? 'dark-mode' : ''}`}
      id='inspiration'
    >
      <div className='inspiration__container container'>
        <h1 className='section__title' data-aos='fade-down'>
          {t.title}
        </h1>
        <h2
          className='section__subtitle'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          {t.subtitle}
        </h2>

        <div
          className='inspiration__content'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          <p className='inspiration__description'>{t.description}</p>

          <div
            className='inspiration__gallery-container'
            data-aos='fade-up'
            data-aos-delay='400'
          >
            <ImageList
              variant='masonry'
              cols={window.innerWidth <= 768 ? 2 : 3}
              gap={12}
              className='inspiration__gallery'
            >
              {itemData.map((item, index) => (
                <ImageListItem
                  key={item.img}
                  className='inspiration__gallery-item'
                  data-aos='zoom-in'
                  data-aos-delay={400 + (index % 5) * 100}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    loading='lazy'
                    className='inspiration__image'
                  />
                  <ImageListItemBar
                    title={item.title}
                    className='inspiration__image-caption'
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
      </div>
    </section>
  );
}
