const fs = require('fs');
const rep = (f, pairs) => {
  let s = fs.readFileSync(f, 'utf8');
  for (const [a, b] of pairs) {
    if (!s.includes(a)) { console.error(f + ' NO MATCH: ' + a.slice(0, 70)); process.exit(1); }
    s = s.split(a).join(b);
  }
  fs.writeFileSync(f, s);
};
rep('src/sections/Hero.jsx', [
  [`const BrowserShot = ({ domain, image, className, eager }) => (`, `const BrowserShot = ({ domain, image, alt, className, eager }) => (`],
  [`      alt=''`, `      alt={alt}`],
  [`        <div className='hero__visual' role='img' aria-label={hero.visualLabel}>`, `        <div className='hero__visual'>`],
  [`            domain={builders.domain}\n            image={builders.image}`, `            domain={builders.domain}\n            image={builders.image}\n            alt={\`\${builders.name}: \${builders.type}\`}`],
  [`            domain={kirpeja.domain}\n            image={kirpeja.image}`, `            domain={kirpeja.domain}\n            image={kirpeja.image}\n            alt={\`\${kirpeja.name}: \${kirpeja.type}\`}`],
]);
rep('src/sections/Work.jsx', [
  [`                    src={project.image}\n                    alt=''`, `                    src={project.image}\n                    alt={\`\${project.name}: \${project.type}\`}`],
]);
console.log('ok');
