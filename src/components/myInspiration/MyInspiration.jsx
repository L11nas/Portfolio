import React, { useEffect, useState } from 'react';
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
  const [cols, setCols] = useState(3);

  // Handle responsive columns
  useEffect(() => {
    const updateCols = () => {
      if (window.innerWidth <= 576) {
        setCols(1);
      } else if (window.innerWidth <= 768) {
        setCols(2);
      } else {
        setCols(3);
      }
    };

    // Initial call
    updateCols();

    // Set up listener
    window.addEventListener('resize', updateCols);

    // Cleanup
    return () => window.removeEventListener('resize', updateCols);
  }, []);

  // Refresh AOS when component mounts

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

  // Enhanced itemData with better descriptions and captions
  const itemData = [
    {
      img: '/img/kaunomaratonas.jpg',
      title: 'Kauno maratonas',
      subtitle: language === 'LT' ? '2023 m. gegužė' : 'May 2023',
      description:
        language === 'LT'
          ? 'Vienas iš pagrindinių metų bėgimo renginių Kaune'
          : 'One of the main running events of the year in Kaunas',
    },
    {
      img: '/img/ironman.jpg',
      title: 'Ironman',
      subtitle:
        language === 'LT' ? 'Triatlono varžybos' : 'Triathlon competition',
      description:
        language === 'LT'
          ? 'Vienas sudėtingiausių ištvermės renginių'
          : 'One of the most challenging endurance events',
    },
    {
      img: '/img/134835.jpg',
      title: 'Saulėtekio maratonas',
      subtitle: language === 'LT' ? 'Vilnius' : 'Vilnius',
      description:
        language === 'LT'
          ? 'Bėgimas aplink Saulėtekio kampusą'
          : 'Running around Sunrise campus',
    },
    {
      img: '/img/maratonas2024.jpg',
      title: 'Kauno maratonas',
      subtitle: language === 'LT' ? '2024 m.' : '2024',
      description:
        language === 'LT'
          ? 'Naujas asmeninis rekordas!'
          : 'New personal record!',
    },
    {
      img: '/img/191319.jpg',
      title: 'Ironman Maastricht',
      subtitle: language === 'LT' ? 'Nyderlandai' : 'Netherlands',
      description:
        language === 'LT'
          ? 'Tarptautinės triatlono varžybos'
          : 'International triathlon competition',
    },
    {
      img: '/img/1623610342632.jpg',
      title: 'Jonavos maratonas',
      subtitle: language === 'LT' ? 'Puikus oras' : 'Great weather',
      description:
        language === 'LT' ? 'Mėgstamas vietos renginys' : 'Popular local event',
    },
    {
      img: '/img/1648968564148.jpg',
      title: 'Druskininkų pusmaratonis',
      subtitle: language === 'LT' ? '21 km' : '21 km',
      description:
        language === 'LT'
          ? 'Bėgimas tarp miško ir ežero'
          : 'Running between forest and lake',
    },
    {
      img: '/img/1655576449371.jpg',
      title: 'Olimpinė diena',
      subtitle: language === 'LT' ? 'Kaunas' : 'Kaunas',
      description:
        language === 'LT'
          ? 'Masinės bėgimo varžybos'
          : 'Mass running competition',
    },
    {
      img: '/img/1657362673507.jpg',
      title: 'Karaliaus Mindaugo taurė',
      subtitle: language === 'LT' ? 'Liepos 6 d.' : 'July 6',
      description:
        language === 'LT'
          ? 'Valstybės dienos minėjimas'
          : 'State Day celebration',
    },
    {
      img: '/img/1657466566251.jpg',
      title: 'Širvintų maratonas',
      subtitle: language === 'LT' ? 'Vasaros karštis' : 'Summer heat',
      description:
        language === 'LT'
          ? 'Sudėtinga trasa kalvotoje vietovėje'
          : 'Challenging route in hilly area',
    },
    // Continue with the rest of the images with similar detailed information
    {
      img: '/img/135855.jpg',
      title: 'Kauno maratonas',
      subtitle: language === 'LT' ? 'Finišo linija' : 'Finish line',
      description: language === 'LT' ? 'Pasiektas tikslas!' : 'Goal achieved!',
    },
    {
      img: '/img/195650.jpg',
      title: 'Ironman Tallin',
      subtitle: language === 'LT' ? 'Estija' : 'Estonia',
      description:
        language === 'LT'
          ? 'Plaukimas, dviratis, bėgimas'
          : 'Swimming, cycling, running',
    },
    {
      img: '/img/121614.jpg',
      title: 'Vilniaus pusmaratonis',
      subtitle: language === 'LT' ? 'Senamiestis' : 'Old Town',
      description:
        language === 'LT'
          ? 'Bėgimas per istorinį miesto centrą'
          : 'Running through historic city center',
    },
    {
      img: '/img/154525.jpg',
      title: 'Jonava',
      subtitle: language === 'LT' ? 'Pavasaris' : 'Spring',
      description:
        language === 'LT'
          ? 'Tradicinis miesto bėgimas'
          : 'Traditional city run',
    },
    {
      img: '/img/164925.jpg',
      title: 'Druskininkų pusmaratonis',
      subtitle: language === 'LT' ? 'Medalis' : 'Medal',
      description:
        language === 'LT' ? 'Apdovanojimų ceremonija' : 'Award ceremony',
    },
    {
      img: '/img/155812.jpg',
      title: 'Sūduvos taurė',
      subtitle: language === 'LT' ? 'Marijampolė' : 'Marijampole',
      description:
        language === 'LT' ? 'Regioninės varžybos' : 'Regional competition',
    },
    {
      img: '/img/162233.jpg',
      title: 'Medininkai',
      subtitle: language === 'LT' ? 'Rudens bėgimas' : 'Autumn run',
      description:
        language === 'LT'
          ? 'Bėgimas prie istorinės pilies'
          : 'Running by the historic castle',
    },
    {
      img: '/img/165846.jpg',
      title: 'Alytaus pusmaratonis',
      subtitle: language === 'LT' ? 'Dzūkijos sostinė' : 'Capital of Dzukija',
      description:
        language === 'LT'
          ? 'Bėgimas per miesto parkus'
          : 'Running through city parks',
    },
    {
      img: '/img/sauletekis.jpg',
      title: 'Saulėtekio maratonas',
      subtitle:
        language === 'LT' ? 'Universiteto kampusas' : 'University campus',
      description:
        language === 'LT'
          ? 'Studentų ir dėstytojų bėgimas'
          : 'Students and teachers running',
    },
    {
      img: '/img/342.webp',
      title: 'Mindauginės',
      subtitle: language === 'LT' ? 'Liepos renginys' : 'July event',
      description:
        language === 'LT'
          ? 'Valstybės dienos minėjimas'
          : 'State Day celebration',
    },
    {
      img: '/img/551.webp',
      title: 'Širvintų maratonas',
      subtitle: language === 'LT' ? 'Sub3' : 'Sub3',
      description:
        language === 'LT' ? 'Bėgimo klubo nariai' : 'Running club members',
    },
    {
      img: '/img/V.jpg',
      title: 'Vilties bėgimas',
      subtitle: language === 'LT' ? 'Labdaros renginys' : 'Charity event',
      description:
        language === 'LT'
          ? 'Parama onkologiniams ligoniams'
          : 'Support for cancer patients',
    },
    {
      img: '/img/673.webp',
      title: 'Mastricht',
      subtitle: language === 'LT' ? 'Finišas' : 'Finish',
      description:
        language === 'LT' ? 'Pergalės momentas' : 'Moment of victory',
    },
    {
      img: '/img/317033579575096.jpeg',
      title: 'Ironman',
      subtitle: language === 'LT' ? 'Triatlonas' : 'Triathlon',
      description:
        language === 'LT'
          ? 'Vienas sudėtingiausių sportinių iššūkių'
          : 'One of the most difficult sports challenges',
    },
    {
      img: '/img/437614981753426.jpeg',
      title: 'Ironman',
      subtitle: language === 'LT' ? 'Apdovanojimai' : 'Awards',
      description: language === 'LT' ? 'Po varžybų' : 'After competition',
    },
    {
      img: '/img/4965070230287149.jpeg',
      title: 'Estafetė 5x5',
      subtitle: language === 'LT' ? 'Komandinis bėgimas' : 'Team running',
      description:
        language === 'LT' ? '5 žmonės po 5 km' : '5 people, 5 km each',
    },
    {
      img: '/img/225159.jpg',
      title: 'Labdaros bėgimas',
      subtitle: language === 'LT' ? 'Pagalba vaikams' : 'Help for children',
      description:
        language === 'LT'
          ? 'Lėšų rinkimas geram tikslui'
          : 'Fundraising for a good cause',
    },
  ];

  return (
    <section
      className={`inspiration__section ${darkMode ? 'dark-mode' : ''}`}
      id='inspiration'
    >
      <div className='inspiration__container container'>
        <h1 className='section__title' data-aos='fade-up'>
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

          <div className='inspiration__gallery-container'>
            <ImageList
              variant='masonry'
              cols={cols}
              gap={12}
              className='inspiration__gallery'
            >
              {itemData.map((item, index) => (
                <ImageListItem
                  key={`${item.img}-${index}`}
                  className='inspiration__gallery-item'
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    loading='eager'
                    className='inspiration__image'
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/img/placeholder-image.jpg'; // Fallback image
                      console.log(`Failed to load image: ${item.img}`);
                    }}
                  />
                  <ImageListItemBar
                    title={
                      <span style={{ fontWeight: 600 }}>{item.title}</span>
                    }
                    subtitle={
                      <span style={{ opacity: 0.8 }}>{item.subtitle}</span>
                    }
                    sx={{
                      background: 'var(--caption-bg)',
                      color: 'var(--caption-text)',
                      padding: '0.75rem 1rem',
                      borderTop: '1px solid rgba(0,0,0,0.1)',
                    }}
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
