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
      title: 'Svetainių kūrimas smulkiam verslui Kaune | Linas – linaswebdev.lt',
      description:
        'Paprasta svetainė smulkiam verslui su aiškia kaina. Viskas registruojama jūsų vardu. Kaunas ir visa Lietuva.',
    },
    nav: {
      links: [
        { id: 'services', label: 'Paslaugos' },
        { id: 'work', label: 'Darbai' },
        { id: 'process', label: 'Kaip dirbu' },
        { id: 'pricing', label: 'Kainos' },
        { id: 'faq', label: 'DUK' },
      ],
      cta: 'Parašykite man',
      openMenu: 'Atidaryti meniu',
      closeMenu: 'Uždaryti meniu',
      switchLang: 'Switch to English',
      home: 'LinasWebDev – į pradžią',
      skip: 'Pereiti prie turinio',
    },
    hero: {
      eyebrow: 'Svetainių kūrimas Kaune ir visoje Lietuvoje',
      title: 'Žinot, kad reikia svetainės, bet vis neprisiruošiat?',
      lead: 'Aš viską padarysiu, o jūs tik patvirtinsit. Paprasta svetainė smulkiam verslui, registruota jūsų vardu, su aiškia kaina ir žmogumi, kuris atsiliepia.',
      primary: 'Parašykite man',
      secondary: 'Kiek kainuoja?',
      checks: [
        'Viskas jūsų vardu',
        'Aiški kaina iš anksto',
        'Gerai atrodo telefone',
        'Jus ras Google',
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
      eyebrow: 'Kodėl aš',
      title: 'Svetainę pasidaryti gali visi. Dauguma taip ir nepasidaro.',
      text: 'Aš padarau už jus, be galvos skausmo. Ir viskas skaidru: žinote, ką gaunate, kiek mokate ir kam priklauso svetainė.',
      cards: [
        {
          icon: 'bx-key',
          title: 'Viskas jūsų vardu',
          text: 'Domenas, hostingas ir el. paštas registruojami jūsų vardu. Jei kada nuspręsite išeiti, pasiimsite viską be jokių klausimų.',
        },
        {
          icon: 'bx-receipt',
          title: 'Aiški kaina iš anksto',
          text: 'Jokio „kaina sutartinė“. Prieš pradedant žinote, kiek mokėsite ir už ką.',
        },
        {
          icon: 'bx-conversation',
          title: 'Kalbu paprastai',
          text: 'Be IT žargono. Paaiškinu taip, kad suprastumėte, už ką mokate.',
        },
        {
          icon: 'bx-phone-call',
          title: 'Atsiliepiu',
          text: 'Į žinutes atsakau per [1 darbo dieną]. Nedingstu po to, kai svetainė paleista.',
        },
      ],
    },
    services: {
      eyebrow: 'Paslaugos',
      title: 'Kuo galiu padėti?',
      lead: 'Aiškios paslaugos be techninio žargono – jūs sakote, ko reikia verslui, aš pasirūpinu likusia dalimi.',
      featured: {
        title: 'Verslo svetainė',
        text: 'Paprasta, tvarkinga svetainė jūsų verslui – nuo pirmo pokalbio iki paleidimo jūsų vardu registruotame domene.',
        includesLabel: 'Įskaičiuota:',
        includes: [
          'Dizainas pagal jūsų verslą',
          'Gerai atrodo telefone',
          'Kontaktų forma',
          'Jus ras Google',
          'Lankytojų statistika',
          'Google žemėlapis, jei reikia',
          'Galite patys keisti tekstus ir kainas',
        ],
        cta: 'Parašykite man',
      },
      items: [
        {
          icon: 'bx-map-pin',
          title: 'Google verslo profilis',
          text: 'Sukuriu arba sutvarkau jūsų Google profilį: nuotraukos, darbo laikas, kontaktai. Kartais to užtenka ir svetainės nereikia.',
        },
        {
          icon: 'bx-target-lock',
          title: 'Vieno puslapio svetainė',
          text: 'Vienas aiškus puslapis paslaugai, produktui ar reklamos kampanijai.',
        },
        {
          icon: 'bx-refresh',
          title: 'Svetainės atnaujinimas',
          text: 'Turite seną ar nepatogią svetainę? Atnaujinu ją, kad gerai atrodytų ir telefone.',
        },
        {
          icon: 'bx-search-alt',
          title: 'Kad jus rastų Google',
          text: 'Sutvarkau tai, ko reikia, kad Google suprastų jūsų svetainę. Pirmos vietos negarantuoju – bet paruošiu tvirtą pagrindą.',
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
          tags: ['Verslo svetainė', 'Randama Google', 'Gerai atrodo telefone'],
          goal: 'Profesionaliai pristatyti virtuvių montavimo, grindų ir renovacijos paslaugas bei gauti užklausas iš konkrečių miestų.',
          solution:
            'Individualus dizainas, paslaugų ir atliktų darbų skiltys, struktūra, kad įmonę Google rastų aptarnaujamuose miestuose, ir greiti kontaktai per SMS bei WhatsApp.',
          result:
            'Lankytojas iš karto mato, ką įmonė daro ir kur dirba, ir gali susisiekti vienu paspaudimu.',
        },
        {
          name: 'Kirpėja Virginija',
          url: 'https://kirpeja-virginija.lt',
          domain: 'kirpeja-virginija.lt',
          image: projectImages.kirpeja,
          type: 'Paslaugų verslo svetainė kirpėjai Kaune',
          tags: ['Verslo svetainė', 'Randama Google', 'Registracija internetu', 'LT / EN'],
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
      title: 'Kiek kainuoja?',
      lead: 'Jokio „kaina sutartinė“. Prieš pradedant žinote, kiek mokėsite ir už ką.',
      from: 'nuo',
      badge: 'Dažniausiai renkamasi',
      plans: pricingLt.plans,
      note: pricingLt.note,
      extrasTitle: pricingLt.extrasTitle,
      extras: pricingLt.extras,
      excluded: pricingLt.excluded,
    },
    guarantee: {
      title: 'Pirmus 3 mėnesius po paleidimo viską, kas neveikia, taisau nemokamai.',
      text: 'Ir jei svetainės jums nereikia, pasakysiu tai atvirai.',
    },
    process: {
      eyebrow: 'Kaip dirbu',
      title: 'Nuo pokalbio iki veikiančios svetainės',
      steps: [
        {
          title: 'Pasikalbam',
          text: '20 min. pokalbis telefonu arba susitikimas. Pasakote, ką veikiate, aš pasiūlau, ko jums reikia (ir ko nereikia).',
        },
        {
          title: 'Pasiūlymas',
          text: 'Gaunate aiškią kainą ir terminą raštu.',
        },
        {
          title: 'Kuriu, jūs tvirtinat',
          text: 'Parodau svetainę dar prieš paleidžiant ir pataisau, ką norite.',
        },
        {
          title: 'Paleidžiam ir prižiūriu',
          text: 'Svetainė veikia, jus randa Google. Jei reikia, pasirūpinu ja ir toliau.',
        },
      ],
    },
    about: {
      eyebrow: 'Apie mane',
      title: 'Labas, aš Linas.',
      paragraphs: [
        'Daugiau nei 20 metų dirbau sandėliuose ir logistikoje: nuo darbuotojo iki vadovo. Žinau, kaip atrodo darbas, kai svetainei laiko tiesiog nelieka.',
        'Išmokau programuoti ir dabar padedu smulkiems verslams atsirasti internete: kirpykloms, meistrams, mažoms įmonėms. Tokiems pat dirbantiems žmonėms kaip aš.',
        'Man svarbu, kad žinotumėte, už ką mokate, kad viskas būtų jūsų vardu ir kad galėtumėte man tiesiog paskambinti. Jokių didelių žodžių, tik darbas, kuris veikia.',
      ],
      points: [
        'Tiesioginis bendravimas be tarpininkų',
        'Aiški kaina prieš pradedant darbą',
        'Pagalba ir po svetainės paleidimo',
      ],
      photoAlt: 'Linas, svetainių kūrėjas iš Kauno',
    },
    faq: {
      eyebrow: 'DUK',
      title: 'Dažniausiai užduodami klausimai',
      items: faqLt.items,
    },
    cta: {
      title: 'Turite verslą, bet dar neturite svetainės?',
      text: 'Parašykite ar paskambinkite – pasikalbėsim, ko jums iš tikrųjų reikia, ir pasakysiu aiškią kainą.',
      primary: 'Parašykite man',
      secondary: 'Peržiūrėti darbus',
    },
    contact: {
      eyebrow: 'Kontaktai',
      title: 'Parašykite, pasikalbėsim, net jei dar nežinot, ko tiksliai reikia.',
      lead: 'Paskambinkite arba parašykite el. paštu. Užtenka kelių sakinių apie tai, ką veikiate.',
      location: 'Kaunas · dirbu su klientais visoje Lietuvoje',
      phoneLabel: 'Telefonas',
      phoneAction: 'Skambinti',
      emailLabel: 'El. paštas',
      emailAction: 'Rašyti',
      emailSubject: 'Svetainės kūrimo užklausa',
      hint: 'Atsakau per [1 darbo dieną]. Pokalbis nieko neįpareigoja.',
    },
    footer: {
      tagline: 'Svetainių kūrimas smulkiam verslui. Kaunas, Lietuva.',
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
      title: 'Websites for small businesses in Kaunas | Linas – linaswebdev.lt',
      description:
        'A simple website for your small business at a clear price. Everything is registered in your name. Kaunas and all of Lithuania.',
    },
    nav: {
      links: [
        { id: 'services', label: 'Services' },
        { id: 'work', label: 'Work' },
        { id: 'process', label: 'How I work' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'faq', label: 'FAQ' },
      ],
      cta: 'Write to me',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      switchLang: 'Perjungti į lietuvių kalbą',
      home: 'LinasWebDev – home',
      skip: 'Skip to content',
    },
    hero: {
      eyebrow: 'Websites for businesses · Kaunas, Lithuania',
      title: 'You know you need a website, but never get round to it?',
      lead: 'I do all the work, you just approve it. A simple website for your small business, registered in your name, at a clear price, with a person who actually answers.',
      primary: 'Write to me',
      secondary: 'How much is it?',
      checks: [
        'Everything in your name',
        'Clear price up front',
        'Looks good on phones',
        'Google will find you',
      ],
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
      eyebrow: 'Why me',
      title: 'Anyone can make a website. Most people never do.',
      text: 'I do it for you, without the headache. And everything is transparent: you know what you get, what you pay and who owns the website.',
      cards: [
        {
          icon: 'bx-key',
          title: 'Everything in your name',
          text: 'The domain, hosting and email are registered in your name. If you ever decide to leave, you take everything with you, no questions asked.',
        },
        {
          icon: 'bx-receipt',
          title: 'Clear price up front',
          text: 'No “price on request”. Before we start, you know what you will pay and what for.',
        },
        {
          icon: 'bx-conversation',
          title: 'I speak plainly',
          text: 'No IT jargon. I explain things so you understand what you are paying for.',
        },
        {
          icon: 'bx-phone-call',
          title: 'I answer',
          text: 'I reply to messages within [1 business day]. I don’t disappear once the website is live.',
        },
      ],
    },
    services: {
      eyebrow: 'Services',
      title: 'How can I help?',
      lead: 'Clear services without technical jargon — you tell me what your business needs, I take care of the rest.',
      featured: {
        title: 'Business website',
        text: 'A simple, tidy website for your business — from the first conversation to launch on a domain registered in your name.',
        includesLabel: 'Included:',
        includes: [
          'Design that fits your business',
          'Looks good on phones',
          'Contact form',
          'Google will find you',
          'Visitor statistics',
          'Google Maps if needed',
          'You can edit texts and prices yourself',
        ],
        cta: 'Write to me',
      },
      items: [
        {
          icon: 'bx-map-pin',
          title: 'Google Business Profile',
          text: 'I create or tidy up your Google profile: photos, opening hours, contacts. Sometimes that is enough and you don’t need a website.',
        },
        {
          icon: 'bx-target-lock',
          title: 'One-page website',
          text: 'One clear page for a service, product or advertising campaign.',
        },
        {
          icon: 'bx-refresh',
          title: 'Website update',
          text: 'Have an old or clunky website? I will update it so it looks good on phones too.',
        },
        {
          icon: 'bx-search-alt',
          title: 'So Google finds you',
          text: 'I set up what Google needs to understand your website. I don’t guarantee first place — but I build a solid foundation.',
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
          tags: ['Business website', 'Found on Google', 'Looks good on phones'],
          goal: 'Present kitchen fitting, flooring and renovation services professionally and get enquiries from specific cities.',
          solution:
            'Custom design, service and project sections, a structure that helps Google show the company in the cities it serves, and quick contact via SMS and WhatsApp.',
          result:
            'Visitors instantly see what the company does and where it works — and can get in touch with one tap.',
        },
        {
          name: 'Kirpėja Virginija',
          url: 'https://kirpeja-virginija.lt',
          domain: 'kirpeja-virginija.lt',
          image: projectImages.kirpeja,
          type: 'Service business website for a hairdresser in Kaunas',
          tags: ['Business website', 'Found on Google', 'Online booking', 'LT / EN'],
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
      title: 'How much is it?',
      lead: 'No “price on request”. Before we start, you know what you will pay and what for.',
      from: 'from',
      badge: 'Most popular',
      plans: pricingEn.plans,
      note: pricingEn.note,
      extrasTitle: pricingEn.extrasTitle,
      extras: pricingEn.extras,
      excluded: pricingEn.excluded,
    },
    guarantee: {
      title: 'For the first 3 months after launch, I fix anything that doesn’t work for free.',
      text: 'And if you don’t need a website, I will tell you honestly.',
    },
    process: {
      eyebrow: 'How I work',
      title: 'From a conversation to a working website',
      steps: [
        {
          title: 'We talk',
          text: 'A 20-minute phone call or a meeting. You tell me what you do, I suggest what you need (and what you don’t).',
        },
        { title: 'Proposal', text: 'You get a clear price and timeline in writing.' },
        {
          title: 'I build, you approve',
          text: 'I show you the website before it goes live and change whatever you want.',
        },
        {
          title: 'Launch and care',
          text: 'The website is live and Google finds you. If you need, I keep looking after it.',
        },
      ],
    },
    about: {
      eyebrow: 'About me',
      title: 'Hi, I’m Linas.',
      paragraphs: [
        'For more than 20 years I worked in warehouses and logistics, from worker to manager. I know what work looks like when there is simply no time left for a website.',
        'I learned to code and now I help small businesses get online: hair salons, tradespeople, small companies. Working people just like me.',
        'It matters to me that you know what you are paying for, that everything is in your name and that you can simply give me a call. No big words, just work that works.',
      ],
      points: [
        'Direct communication, no middlemen',
        'Clear price before work starts',
        'Support after launch',
      ],
      photoAlt: 'Linas, website developer from Kaunas',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      items: faqEn.items,
    },
    cta: {
      title: 'Have a business but no website yet?',
      text: 'Write or call — we will talk about what you really need, and I will give you a clear price.',
      primary: 'Write to me',
      secondary: 'See my work',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Write to me and we’ll talk, even if you don’t know exactly what you need yet.',
      lead: 'Call or send an email. A few sentences about what you do is enough.',
      location: 'Kaunas, Lithuania · working with clients across Lithuania and abroad',
      phoneLabel: 'Phone',
      phoneAction: 'Call',
      emailLabel: 'Email',
      emailAction: 'Write',
      emailSubject: 'Website enquiry',
      hint: 'I reply within [1 business day]. A conversation doesn’t commit you to anything.',
    },
    footer: {
      tagline: 'Websites for small businesses. Kaunas, Lithuania.',
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
