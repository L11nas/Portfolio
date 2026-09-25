import { icons } from '../icons';

// SVG ikona boxicons pavadinimu (pvz. 'bx-check'). Dydis = šrifto dydis, spalva = teksto spalva,
// todėl esami CSS stiliai (pvz. `.btn i { font-size }`) veikia kaip su boxicons šriftu.
const Icon = ({ name, className = '' }) => (
  <i
    className={`icon icon--${name} ${className}`.trim()}
    aria-hidden='true'
    dangerouslySetInnerHTML={{
      __html: `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" focusable="false">${icons[name] ?? ''}</svg>`,
    }}
  />
);

export default Icon;
