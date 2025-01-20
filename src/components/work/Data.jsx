import Work2 from '/Portfoliogit.png';
import Work4 from '/womenshoe.jpg';
import work5 from '/img/2.png';
import work6 from '/img/runweb.jpg';

export const projectsData = [
  {
    id: 2,
    image: Work2,
    title: 'Portfolio',
    category: 'Pages',
    categoryLT: 'Puslapiai', // Added Lithuanian category
    Link: 'https://linaswebdev.netlify.app',
    githubLink: 'https://github.com/L11nas/Portfolio.git',
  },
  {
    id: 4,
    image: Work4,
    title: 'Shoe Sale Banner',
    category: 'Banners',
    categoryLT: 'Baneriai', // Added Lithuanian category
    Link: 'https://l11nas.github.io/Baneris/',
    githubLink: 'https://github.com/L11nas/Baneris.git',
  },
  {
    id: 5,
    image: work5,
    title: 'Design Project', // Added title for consistency
    category: 'Design',
    categoryLT: 'Dizainas', // Added Lithuanian category
    statusLT: 'Ruošiama',
    status: 'Still in preparation',
    Link: '', // Placeholder for link
    githubLink: '', // Placeholder for GitHub link
  },
  {
    id: 6,
    image: work6,
    title: 'Running Plan Page',
    category: 'Pages',
    categoryLT: 'Bėgimo plano puslapis', // Added Lithuanian category
    Link: 'https://begimoplanas.netlify.app/',
    githubLink: 'https://github.com/L11nas/Runwebas.git',
  },
];

export const projectsNav = [
  { key: 'filter.all', nameLT: 'Visi', nameEN: 'All' },
  { key: 'filter.pages', nameLT: 'Puslapiai', nameEN: 'Pages' },
  { key: 'filter.banners', nameLT: 'Baneriai', nameEN: 'Banners' },
  { key: 'filter.design', nameLT: 'Dizainas', nameEN: 'Design' },
];
