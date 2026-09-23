// Visi svetainės tekstai vienoje vietoje (LT / EN).
// Kainos, DUK ir kontaktai laikomi src/data/*.json – juos galima redaguoti per /admin (Decap CMS).
import contacts from './data/contacts.json';
import pricingLt from './data/pricing-lt.json';
import pricingEn from './data/pricing-en.json';
import faqLt from './data/faq-lt.json';
import faqEn from './data/faq-en.json';

export const CONTACTS = contacts;

const projectImages = {
  builders: '/img/builders.jpg',
  kirpeja: '/img/kirpeja.jpg',
};

export const content = {
  LT: {
    meta: {
      title: 'Svetainių kūrimas Kaune ir visoje Lietuvoje | LinasWebDev',
      description:
        'Svetainių kūrėjas Kaune: modernios, greitos ir telefonams pritaikytos svetainės verslui. Individualus dizainas, SEO pagrindai ir paleidimas. Kainos nuo 450 €.',
    },
    nav: {
      links: [
        { id: 'services', label: 'Paslaugos' },
        { id: 'work', label: 'Darbai' },
        { id: 'process', label: 'Procesas' },
        { id: 'pricing', label: 'Kainos' },
        { id: 'faq', label: 'DUK' },
      ],
      cta: 'Gauti pasiūlymą',
      openMenu: 'Atidaryti meniu',
      closeMenu: 'Uždaryti meniu',
      switchLang: 'Switch to English',
      home: 'LinasWebDev – į pradžią',
      skip: 'Pereiti prie turinio',
    },
    hero: {
      eyebrow: 'Svetainių kūrimas Kaune ir visoje Lietuvoje',
      title: 'Modernios svetainės Lietuvos verslui',
      lead: 'Kuriu greitas, profesionalias ir telefonams pritaikytas svetaines, kurios padeda jūsų verslui atrodyti patikimai internete ir gauti daugiau užklausų.',
      primary: 'Gauti pasiūlymą',
      secondary: 'Peržiūrėti darbus',
      checks: [
        'Individualus dizainas',
        'Pritaikyta telefonams',
        'SEO pagrindai',
        'Greitas veikimas',
      ],
      visualLabel: 'Klientams sukurtų svetainių pavyzdžiai',
    },
    clients: {
      title: 'Svetainės, sukurtos realiems verslams',
      items: [
        { name: 'S.L. Builders LTD', note: 'Statyba ir renovacija, JK' },
        { name: 'Kirpėja Virginija', note: 'Grožio paslaugos, Kaunas' },
      ],
    },
    value: {
      eyebrow: 'Kodėl tai svarbu',
      title: 'Jūsų svetainė turi ne tik gražiai atrodyti',
      text: 'Svetainė – vienas pirmųjų dalykų, kuriuos apie jūsų verslą pamato potencialus klientas. Todėl svarbu ne tik dizainas, bet ir aiški struktūra, greitis, patogumas telefone ir galimybė lengvai susisiekti.',
      cards: [
        {
          icon: 'bx-shield-quarter',
          title: 'Profesionalus įvaizdis',
          text: 'Svetainė, kuri padeda jūsų verslui atrodyti patikimai nuo pirmo apsilankymo.',
        },
        {
          icon: 'bx-mobile-alt',
          title: 'Patogu naudotis',
          text: 'Aiški struktūra ir sklandus veikimas telefone, planšetėje ir kompiuteryje.',
        },
        {
          icon: 'bx-search-alt',
          title: 'Google pagrindai',
          text: 'Tvarkinga techninė struktūra, paruošta paieškai ir tolimesniam SEO darbui.',
        },
        {
          icon: 'bx-message-rounded-dots',
          title: 'Daugiau užklausų',
          text: 'Aiškūs mygtukai ir kontaktų keliai, kad klientui būtų lengva parašyti ar paskambinti.',
        },
      ],
    },
    services: {
      eyebrow: 'Paslaugos',
      title: 'Kuo galiu padėti?',
      lead: 'Aiškios paslaugos be techninio žargono – jūs sakote, ko reikia verslui, aš pasirūpinu likusia dalimi.',
      featured: {
        title: 'Verslo svetainė',
        text: 'Profesionali svetainė įmonei ar paslaugų verslui – nuo struktūros iki paleidimo jūsų domene.',
        includesLabel: 'Įskaičiuota:',
        includes: [
          'Individuali struktūra ir dizainas',
          'Pritaikymas telefonams ir planšetėms',
          'Kontaktų forma',
          'SEO pagrindai',
          'Google Analytics',
          'Google Maps, jei reikia',
          'Paleidimas jūsų domene',
        ],
        cta: 'Gauti pasiūlymą',
      },
      items: [
        {
          icon: 'bx-target-lock',
          title: 'Landing page',
          text: 'Vienas koncentruotas puslapis paslaugai, produktui ar reklamos kampanijai.',
        },
        {
          icon: 'bx-refresh',
          title: 'Svetainės atnaujinimas',
          text: 'Turite seną ar nepatogią svetainę? Modernizuoju ją ir pritaikau šiuolaikiniams įrenginiams.',
        },
        {
          icon: 'bx-line-chart',
          title: 'SEO pagrindai',
          text: 'Sutvarkau metaduomenis, antraščių struktūrą, sitemap ir kitus bazinius SEO elementus. Pozicijų Google negarantuoju – bet paruošiu tvirtą pagrindą.',
        },
        {
          icon: 'bx-extension',
          title: 'Individualūs sprendimai',
          text: 'Reikia specifinės funkcijos ar integracijos? Sprendimą pritaikau pagal jūsų verslo poreikius.',
        },
      ],
    },
    work: {
      eyebrow: 'Darbai',
      title: 'Naujausi darbai',
      lead: 'Realūs projektai, sukurti skirtingiems verslams ir poreikiams.',
      labels: {
        goal: 'Tikslas',
        solution: 'Sprendimas',
        result: 'Rezultatas',
        visit: 'Peržiūrėti svetainę',
      },
      projects: [
        {
          name: 'S.L. Builders LTD',
          url: 'https://slbuildersltd.co.uk',
          domain: 'slbuildersltd.co.uk',
          image: projectImages.builders,
          type: 'Verslo svetainė statybų ir renovacijos įmonei Jungtinėje Karalystėje',
          tags: ['Verslo svetainė', 'Lokalus SEO', 'Responsive'],
          goal: 'Profesionaliai pristatyti virtuvių montavimo, grindų ir renovacijos paslaugas bei gauti užklausas iš konkrečių miestų.',
          solution:
            'Individualus dizainas, paslaugų ir atliktų darbų skiltys, į aptarnaujamus miestus orientuota SEO struktūra ir greiti kontaktai per SMS bei WhatsApp.',
          result:
            'Lankytojas iš karto mato, ką įmonė daro ir kur dirba, ir gali susisiekti vienu paspaudimu.',
        },
        {
          name: 'Kirpėja Virginija',
          url: 'https://kirpeja-virginija.lt',
          domain: 'kirpeja-virginija.lt',
          image: projectImages.kirpeja,
          type: 'Paslaugų verslo svetainė kirpėjai Kaune',
          tags: ['Verslo svetainė', 'Lokalus SEO', 'Registracija internetu', 'LT / EN'],
          goal: 'Pristatyti kirpimo paslaugas Kaune ir leisti klientams lengvai užsiregistruoti vizitui.',
          solution:
            'Šiltas, švarus dizainas, paslaugų, atsiliepimų ir galerijos skiltys, registracija internetu, skambučio mygtukas ir dvi kalbos.',
          result:
            'Klientas randa paslaugas, pamato darbus ir užsiregistruoja – tiesiai iš telefono.',
        },
      ],
      side: {
        name: 'Beauty Assistant',
        icon: 'bx-spa',
        label: 'Kuriama',
        text: 'Šiuo metu kuriu programėlę grožio paslaugų verslui. Daugiau informacijos – netrukus.',
      },
    },
    pricing: {
      eyebrow: 'Kainos',
      title: 'Kiek kainuoja svetainė?',
      lead: 'Aiškūs paketai kaip atspirties taškas. Tikslią kainą pateiksiu, kai trumpai papasakosite apie savo projektą.',
      from: 'nuo',
      badge: 'Rekomenduojamas',
      plans: pricingLt.plans,
      note: pricingLt.note,
      extrasTitle: pricingLt.extrasTitle,
      extras: pricingLt.extras,
      excluded: pricingLt.excluded,
    },
    process: {
      eyebrow: 'Procesas',
      title: 'Nuo idėjos iki veikiančios svetainės',
      steps: [
        {
          title: 'Susipažįstame',
          text: 'Trumpai aptariame jūsų verslą, tikslus ir ko reikia svetainei.',
        },
        {
          title: 'Suplanuojame',
          text: 'Sudarome puslapių struktūrą ir suderiname pagrindines funkcijas.',
        },
        {
          title: 'Kuriu',
          text: 'Sukuriu dizainą ir suprogramuoju svetainę, tarpinius rezultatus rodau jums.',
        },
        {
          title: 'Testuojame',
          text: 'Patikrinu vaizdą telefone ir kompiuteryje, greitį, formas ir SEO pagrindus.',
        },
        {
          title: 'Paleidžiame',
          text: 'Svetainė perkeliama į jūsų domeną ir paruošiama priimti klientus.',
        },
      ],
    },
    about: {
      eyebrow: 'Apie',
      title: 'Kas yra LinasWebDev?',
      paragraphs: [
        'Esu Linas – svetainių kūrėjas iš Kauno. Kuriu modernias svetaines verslams Kaune, visoje Lietuvoje ir užsienyje. Dirbu individualiai, todėl visą projektą bendraujate tiesiogiai su žmogumi, kuris jį kuria.',
        'Mano tikslas – ne tiesiog sukurti gražų puslapį, o svetainę, kuri būtų aiški jūsų klientams ir naudinga jūsų verslui.',
      ],
      personal:
        'Laisvalaikiu bėgioju trailus – iš ten ir mano požiūris į darbą: nuoseklumas ir darbas iki rezultato.',
      points: [
        'Tiesioginis bendravimas be tarpininkų',
        'Aiški kaina prieš pradedant darbą',
        'Pagalba ir po svetainės paleidimo',
      ],
      photoAlt: 'Linas, LinasWebDev svetainių kūrėjas',
    },
    faq: {
      eyebrow: 'DUK',
      title: 'Dažniausiai užduodami klausimai',
      items: faqLt.items,
    },
    cta: {
      title: 'Turite verslą? Reikia geresnės svetainės?',
      text: 'Papasakokite trumpai apie savo projektą – atsakysiu su preliminaria kaina ir pasiūlymu.',
      primary: 'Gauti pasiūlymą',
      secondary: 'Peržiūrėti darbus',
    },
    contact: {
      eyebrow: 'Kontaktai',
      title: 'Gauti pasiūlymą',
      lead: 'Paskambinkite arba parašykite trumpai apie savo verslą ir kokios svetainės reikia – atsakysiu su preliminaria kaina ir pasiūlymu.',
      location: 'Kaunas · dirbu su klientais visoje Lietuvoje',
      phoneLabel: 'Telefonas',
      phoneAction: 'Skambinti',
      emailLabel: 'El. paštas',
      emailAction: 'Rašyti',
      emailSubject: 'Svetainės kūrimo užklausa',
      hint: 'Rašydami trumpai nurodykite, kuo užsiima jūsų verslas, ko reikia svetainei ir, jei turite, patinkančių svetainių pavyzdžių.',
    },
    footer: {
      tagline: 'Svetainių kūrimas verslui. Kaunas, Lietuva.',
      navTitle: 'Navigacija',
      contactTitle: 'Kontaktai',
      links: [
        { id: 'services', label: 'Paslaugos' },
        { id: 'work', label: 'Darbai' },
        { id: 'pricing', label: 'Kainos' },
        { id: 'faq', label: 'DUK' },
        { id: 'contact', label: 'Kontaktai' },
      ],
      privacy: 'Privatumo politika',
      terms: 'Naudojimosi taisyklės',
      rights: 'Visos teisės saugomos.',
    },
  },

  EN: {
    meta: {
      title: 'Website Development in Kaunas, Lithuania | LinasWebDev',
      description:
        'I build modern, fast websites for small and medium businesses. Custom design, mobile-friendly, SEO foundations and launch. Prices from €450.',
    },
    nav: {
      links: [
        { id: 'services', label: 'Services' },
        { id: 'work', label: 'Work' },
        { id: 'process', label: 'Process' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'faq', label: 'FAQ' },
      ],
      cta: 'Get a quote',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      switchLang: 'Perjungti į lietuvių kalbą',
      home: 'LinasWebDev – home',
      skip: 'Skip to content',
    },
    hero: {
      eyebrow: 'Web design & development · Kaunas, Lithuania',
      title: 'Modern websites for growing businesses',
      lead: 'I build fast, professional, mobile-friendly websites that help your business look trustworthy online and get more enquiries.',
      primary: 'Get a quote',
      secondary: 'See my work',
      checks: ['Custom design', 'Mobile-friendly', 'SEO foundations', 'Fast loading'],
      visualLabel: 'Examples of websites built for clients',
    },
    clients: {
      title: 'Websites built for real businesses',
      items: [
        { name: 'S.L. Builders LTD', note: 'Construction & renovation, UK' },
        { name: 'Kirpėja Virginija', note: 'Hair salon, Kaunas' },
      ],
    },
    value: {
      eyebrow: 'Why it matters',
      title: 'Your website needs to do more than look good',
      text: 'Your website is one of the first things a potential customer sees. That is why design alone is not enough — clear structure, speed, a great mobile experience and an easy way to get in touch matter just as much.',
      cards: [
        {
          icon: 'bx-shield-quarter',
          title: 'Professional image',
          text: 'A website that makes your business look trustworthy from the first visit.',
        },
        {
          icon: 'bx-mobile-alt',
          title: 'Easy to use',
          text: 'Clear structure that works smoothly on phones, tablets and desktops.',
        },
        {
          icon: 'bx-search-alt',
          title: 'Google foundations',
          text: 'A clean technical structure, ready for search and further SEO work.',
        },
        {
          icon: 'bx-message-rounded-dots',
          title: 'More enquiries',
          text: 'Clear calls to action so customers can easily write or call you.',
        },
      ],
    },
    services: {
      eyebrow: 'Services',
      title: 'How can I help?',
      lead: 'Clear services without technical jargon — you tell me what your business needs, I take care of the rest.',
      featured: {
        title: 'Business website',
        text: 'A professional website for your company or service business — from structure to launch on your domain.',
        includesLabel: 'Included:',
        includes: [
          'Custom structure and design',
          'Mobile and tablet friendly',
          'Contact form',
          'SEO foundations',
          'Google Analytics',
          'Google Maps if needed',
          'Launch on your domain',
        ],
        cta: 'Get a quote',
      },
      items: [
        {
          icon: 'bx-target-lock',
          title: 'Landing page',
          text: 'One focused page for a service, product or advertising campaign.',
        },
        {
          icon: 'bx-refresh',
          title: 'Website redesign',
          text: 'Have an old or clunky website? I will modernise it and make it work on today’s devices.',
        },
        {
          icon: 'bx-line-chart',
          title: 'SEO foundations',
          text: 'Metadata, heading structure, sitemap and other technical basics. I don’t guarantee Google rankings — but I build a solid foundation.',
        },
        {
          icon: 'bx-extension',
          title: 'Custom solutions',
          text: 'Need a specific feature or integration? I tailor the solution to your business.',
        },
      ],
    },
    work: {
      eyebrow: 'Work',
      title: 'Recent work',
      lead: 'Real projects built for different businesses and needs.',
      labels: {
        goal: 'Goal',
        solution: 'Solution',
        result: 'Result',
        visit: 'Visit website',
      },
      projects: [
        {
          name: 'S.L. Builders LTD',
          url: 'https://slbuildersltd.co.uk',
          domain: 'slbuildersltd.co.uk',
          image: projectImages.builders,
          type: 'Business website for a construction and renovation company in the UK',
          tags: ['Business website', 'Local SEO', 'Responsive'],
          goal: 'Present kitchen fitting, flooring and renovation services professionally and get enquiries from specific cities.',
          solution:
            'Custom design, service and project sections, an SEO structure focused on the cities served, and quick contact via SMS and WhatsApp.',
          result:
            'Visitors instantly see what the company does and where it works — and can get in touch with one tap.',
        },
        {
          name: 'Kirpėja Virginija',
          url: 'https://kirpeja-virginija.lt',
          domain: 'kirpeja-virginija.lt',
          image: projectImages.kirpeja,
          type: 'Service business website for a hairdresser in Kaunas',
          tags: ['Business website', 'Local SEO', 'Online booking', 'LT / EN'],
          goal: 'Present hairdressing services in Kaunas and let clients book an appointment easily.',
          solution:
            'A warm, clean design with services, reviews and gallery sections, online booking, a call button and two languages.',
          result: 'Clients find the services, see the work and book — straight from their phone.',
        },
      ],
      side: {
        name: 'Beauty Assistant',
        icon: 'bx-spa',
        label: 'In development',
        text: 'I’m currently building an app for beauty service businesses. More details coming soon.',
      },
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'How much does a website cost?',
      lead: 'Clear packages as a starting point. I will give you an exact price once you tell me a little about your project.',
      from: 'from',
      badge: 'Recommended',
      plans: pricingEn.plans,
      note: pricingEn.note,
      extrasTitle: pricingEn.extrasTitle,
      extras: pricingEn.extras,
      excluded: pricingEn.excluded,
    },
    process: {
      eyebrow: 'Process',
      title: 'From idea to a working website',
      steps: [
        { title: 'We get to know each other', text: 'We briefly discuss your business, goals and what the website needs.' },
        { title: 'We plan', text: 'We agree on the page structure and key features.' },
        { title: 'I build', text: 'I design and develop the website and show you progress along the way.' },
        { title: 'We test', text: 'I check mobile and desktop, speed, forms and SEO basics.' },
        { title: 'We launch', text: 'The website goes live on your domain, ready for customers.' },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'Who is LinasWebDev?',
      paragraphs: [
        'I’m Linas — a web developer based in Kaunas, Lithuania. I build modern websites for businesses in Lithuania and abroad. I work independently, so throughout the project you talk directly to the person building it.',
        'My goal is not just a nice-looking page, but a website that is clear to your customers and useful for your business.',
      ],
      personal:
        'In my free time I run trails — that’s where my approach to work comes from: consistency and seeing things through.',
      points: [
        'Direct communication, no middlemen',
        'Clear price before work starts',
        'Support after launch',
      ],
      photoAlt: 'Linas, website developer at LinasWebDev',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      items: faqEn.items,
    },
    cta: {
      title: 'Have a business? Need a better website?',
      text: 'Tell me briefly about your project — I will reply with a preliminary price and proposal.',
      primary: 'Get a quote',
      secondary: 'See my work',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Get a quote',
      lead: 'Call or write briefly about your business and the website you need — I will reply with a preliminary price and proposal.',
      location: 'Kaunas, Lithuania · working with clients across Lithuania and abroad',
      phoneLabel: 'Phone',
      phoneAction: 'Call',
      emailLabel: 'Email',
      emailAction: 'Write',
      emailSubject: 'Website enquiry',
      hint: 'When writing, briefly mention what your business does, what the website needs and, if you have them, examples of websites you like.',
    },
    footer: {
      tagline: 'Websites for businesses. Kaunas, Lithuania.',
      navTitle: 'Navigation',
      contactTitle: 'Contact',
      links: [
        { id: 'services', label: 'Services' },
        { id: 'work', label: 'Work' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'faq', label: 'FAQ' },
        { id: 'contact', label: 'Contact' },
      ],
      privacy: 'Privacy policy',
      terms: 'Terms of service',
      rights: 'All rights reserved.',
    },
  },
};
