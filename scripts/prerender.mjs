// Paleidžiamas po `vite build`: įrašo sugeneruotą HTML į dist/index.html,
// prideda struktūrizuotus duomenis (JSON-LD) iš src/data ir atnaujina sitemap datą.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const readJson = (file) => JSON.parse(fs.readFileSync(path.join(root, 'src/data', file), 'utf8'));

const SITE = 'https://linaswebdev.lt/';
const contacts = readJson('contacts.json');
const pricing = readJson('pricing-lt.json');
const faq = readJson('faq-lt.json');

const indexPath = path.join(dist, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');
const description = html.match(/<meta\s+name="description"\s+content="([^"]*)"/)?.[1] ?? '';

// 1. Puslapio turinys
const { render } = await import(pathToFileURL(path.join(root, 'dist-ssr/entry-server.js')).href);
const appHtml = render();
if (!html.includes('<div id="root"></div>')) throw new Error('dist/index.html: nerastas <div id="root"></div>');
html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

// 2. Struktūrizuoti duomenys – visada sutampa su tuo, kas redaguojama per /admin
const toNumber = (price) => Number(String(price).replace(/[^\d]/g, ''));
const offers = [...pricing.plans, ...(pricing.extras ?? [])].map((item) => ({
  '@type': 'Offer',
  name: item.name,
  ...(item.fit || item.text ? { description: item.fit || item.text } : {}),
  priceSpecification: {
    '@type': 'PriceSpecification',
    minPrice: toNumber(item.price),
    priceCurrency: 'EUR',
  },
}));

const business = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE}#business`,
  name: 'LinasWebDev',
  description,
  url: SITE,
  image: `${SITE}img/kirpeja.jpg`,
  logo: `${SITE}logo.jpg`,
  email: contacts.email,
  telephone: contacts.phoneHref,
  priceRange: '€€',
  address: { '@type': 'PostalAddress', addressLocality: 'Kaunas', addressCountry: 'LT' },
  areaServed: [
    { '@type': 'City', name: 'Kaunas' },
    { '@type': 'Country', name: 'Lithuania' },
  ],
  hasMap: contacts.googleBusiness,
  sameAs: [contacts.googleBusiness, contacts.facebook, contacts.linkedin].filter(Boolean),
  founder: { '@type': 'Person', name: 'Linas Ulevičius', jobTitle: 'Svetainių kūrėjas' },
  knowsLanguage: ['lt', 'en'],
  hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Svetainių kūrimo paslaugos', itemListElement: offers },
};

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE}#website`,
  name: 'LinasWebDev',
  url: SITE,
  inLanguage: 'lt',
  publisher: { '@id': `${SITE}#business` },
};

const faqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const jsonLd = [business, website, faqPage]
  .map((data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`)
  .join('\n    ');
if (!html.includes('<!--json-ld-->')) throw new Error('dist/index.html: nerasta <!--json-ld--> vieta');
html = html.replace('<!--json-ld-->', jsonLd);

fs.writeFileSync(indexPath, html);

// 3. Sitemap: paskutinio atnaujinimo data = kompiliavimo data
const sitemapPath = path.join(dist, 'sitemap.xml');
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(
  sitemapPath,
  fs.readFileSync(sitemapPath, 'utf8').replace(/<lastmod>[^<]*<\/lastmod>/, `<lastmod>${today}</lastmod>`)
);

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`Prerender: ${Math.round(appHtml.length / 1024)} KB HTML, ${offers.length} pasiūlymai, ${faq.items.length} DUK`);
