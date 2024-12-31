import Work2 from '/Portfoliogit.png';
import Work4 from '/womenshoe.jpg';
import work5 from '/img/2.png';
import work6 from '/img/runweb.jpg';

export const projectsData = [
  {
    id: 2,
    image: Work2,
    title: 'Portfolio',
    category: 'Puslapiai',
    Link: 'https://linaswebdev.netlify.app',
    githubLink: 'https://github.com/L11nas/Portfolio.git',
  },
  {
    id: 4,
    image: Work4,
    title: 'Shoe Sale Banner',
    category: 'Baneriai',
    Link: 'https://l11nas.github.io/Baneris/',
    githubLink: 'https://github.com/L11nas/Baneris.git',
  },
  {
    id: 5,
    image: work5,
    category: 'Dizainas',

    status: 'Dar ruošiamas',
  },
  {
    id: 6,
    image: work6,
    title: 'Bėgimo plano puslapis',
    category: 'Puslapiai',
    Link: 'https://begimoplanas.netlify.app/',
    githubLink: 'https://github.com/L11nas/Runwebas.git',
  },
];

export const projectsNav = [
  { name: 'Visi' },
  { name: 'Puslapiai' },
  { name: 'Baneriai' },
  { name: 'Dizainas' },
];
