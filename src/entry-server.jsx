// Naudojamas tik kompiliuojant: sugeneruoja pradinio puslapio HTML (prerender),
// kad turinį matytų ir JavaScript nevykdantys robotai (Bing, AI paieškos, soc. tinklai).
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export const render = () => renderToString(<App />);
