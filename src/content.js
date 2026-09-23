// Visi svetainės tekstai vienoje vietoje (LT / EN).
// Norėdami pakeisti tekstą ar kainą – keiskite čia, komponentų liesti nereikia.

export const CONTACTS = {
  email: 'linaswebdev@email.com',
  phone: '+370 672 06686',
  phoneHref: '+37067206686',
  whatsapp: 'https://wa.me/37067206686',
  messenger: 'https://m.me/linas.ulevicius.3',
  facebook: 'https://www.facebook.com/linas.ulevicius.3',
  linkedin: 'https://lt.linkedin.com/in/linas-ulevi%C4%8Dius-48366113b',
  github: 'https://github.com/L11nas',
  googleBusiness: 'https://maps.google.com/?cid=3194892452271804915',
};

const projectImages = {
  builders: '/img/builders.jpg',
  kirpeja: '/img/kirpeja.jpg',
  running: '/img/runweb.jpg',
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
        name: 'Bėgimo planas',
        url: 'https://begimoplanas.netlify.app',
        image: projectImages.running,
        label: 'Nuosavas projektas',
        text: 'Interaktyvi svetainė bėgimo planams kurti ir sekti, su registracija ir naudotojų paskyromis.',
      },
    },
    pricing: {
      eyebrow: 'Kainos',
      title: 'Kiek kainuoja svetainė?',
      lead: 'Aiškūs paketai kaip atspirties taškas. Tikslią kainą pateiksiu, kai trumpai papasakosite apie savo projektą.',
      from: 'nuo',
      badge: 'Rekomenduojamas',
      plans: [
        {
          id: 'start',
          name: 'Start',
          price: '450',
          fit: 'Mažam verslui ar specialistui, kuriam reikia profesionalaus puslapio internete.',
          features: [
            'Iki 5 puslapių',
            'Pritaikymas telefonams',
            'Kontaktų forma',
            'Bazinis SEO',
            'Google Analytics',
            'Paleidimas',
          ],
          cta: 'Gauti pasiūlymą',
        },
        {
          id: 'business',
          name: 'Verslas',
          price: '750',
          featured: true,
          fit: 'Įmonei, kuri nori aiškiai pristatyti kelias paslaugas ir gauti užklausas.',
          features: [
            'Individualus dizainas',
            'Iki 10 puslapių',
            'Paslaugų puslapių struktūra',
            'SEO pagrindai',
            'Google Analytics',
            'Kontaktų integracijos',
            'Greičio optimizavimas',
          ],
          cta: 'Gauti pasiūlymą',
        },
        {
          id: 'custom',
          name: 'Individualus',
          price: '1 200',
          fit: 'Projektui, kuriam reikia sudėtingesnės struktūros ar specifinių funkcijų.',
          features: [
            'Individualus sprendimas',
            'Sudėtingesnė struktūra',
            'Integracijos su kitomis sistemomis',
            'Specifinis funkcionalumas',
          ],
          cta: 'Aptarti projektą',
        },
      ],
      note: 'Galutinė kaina priklauso nuo projekto apimties ir funkcionalumo. Parašykite, ko reikia – pateiksiu preliminarų pasiūlymą.',
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
      items: [
        {
          q: 'Kiek kainuoja svetainės sukūrimas?',
          a: 'Kainos prasideda nuo 450 € (Start paketas). Galutinė kaina priklauso nuo puslapių skaičiaus, dizaino ir reikalingų funkcijų – parašykite, ko reikia, ir pateiksiu preliminarų pasiūlymą.',
        },
        {
          q: 'Per kiek laiko sukuriama svetainė?',
          a: 'Terminas priklauso nuo projekto dydžio ir nuo to, kaip greitai pateikiamas turinys (tekstai, nuotraukos). Nedidelė svetainė paprastai sukuriama per kelias savaites.',
        },
        {
          q: 'Ar padedate su domenu ir talpinimu?',
          a: 'Taip. Jei reikia, padėsiu pasirinkti ir sukonfigūruoti domeną bei talpinimą (hostingą).',
        },
        {
          q: 'Ar svetainė gerai veiks telefone?',
          a: 'Taip. Visos svetainės kuriamos pritaikant jas telefonams, planšetėms ir kompiuteriams.',
        },
        {
          q: 'Ar galite sutvarkyti SEO?',
          a: 'Atlieku bazinius techninius SEO darbus: metaduomenis, antraščių struktūrą, sitemap, greitį. Svetainė bus paruošta tolimesniam SEO. Konkrečių pozicijų Google negarantuoju – to sąžiningai negali pažadėti niekas.',
        },
        {
          q: 'Ar galėsiu vėliau pats keisti svetainės turinį?',
          a: 'Tai priklauso nuo pasirinkto sprendimo. Jei norite patys redaguoti tekstus ar nuotraukas, turinio valdymo galimybę aptarsime prieš pradedant projektą.',
        },
        {
          q: 'Ar galite atnaujinti mano dabartinę svetainę?',
          a: 'Taip. Galiu modernizuoti esamą svetainę arba sukurti naują, išsaugodamas tai, kas jau veikia gerai.',
        },
        {
          q: 'Ar dirbate tik su Kauno verslais?',
          a: 'Ne. Esu įsikūręs Kaune, todėl su Kauno klientais galime susitikti ir gyvai, tačiau dirbu ir nuotoliu – su verslais visoje Lietuvoje bei užsienyje.',
        },
        {
          q: 'Ar prižiūrite svetainę po paleidimo?',
          a: 'Taip, dėl priežiūros ir pakeitimų po paleidimo galime susitarti atskirai – pagal jūsų poreikius.',
        },
      ],
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
        name: 'Running plan',
        url: 'https://begimoplanas.netlify.app',
        image: projectImages.running,
        label: 'Own project',
        text: 'An interactive website for creating and tracking running plans, with sign-up and user accounts.',
      },
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'How much does a website cost?',
      lead: 'Clear packages as a starting point. I will give you an exact price once you tell me a little about your project.',
      from: 'from',
      badge: 'Recommended',
      plans: [
        {
          id: 'start',
          name: 'Start',
          price: '450',
          fit: 'For a small business or specialist who needs a professional presence online.',
          features: [
            'Up to 5 pages',
            'Mobile-friendly',
            'Contact form',
            'Basic SEO',
            'Google Analytics',
            'Launch',
          ],
          cta: 'Get a quote',
        },
        {
          id: 'business',
          name: 'Business',
          price: '750',
          featured: true,
          fit: 'For a company that wants to present several services clearly and get enquiries.',
          features: [
            'Custom design',
            'Up to 10 pages',
            'Service page structure',
            'SEO foundations',
            'Google Analytics',
            'Contact integrations',
            'Speed optimisation',
          ],
          cta: 'Get a quote',
        },
        {
          id: 'custom',
          name: 'Custom',
          price: '1,200',
          fit: 'For projects that need a more complex structure or specific features.',
          features: [
            'Tailored solution',
            'More complex structure',
            'Integrations with other systems',
            'Specific functionality',
          ],
          cta: 'Discuss your project',
        },
      ],
      note: 'The final price depends on the scope and functionality. Tell me what you need and I will send a preliminary quote.',
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
      items: [
        {
          q: 'How much does a website cost?',
          a: 'Prices start at €450 (Start package). The final price depends on the number of pages, design and features — tell me what you need and I will send a preliminary quote.',
        },
        {
          q: 'How long does it take?',
          a: 'It depends on the size of the project and how quickly content (texts, photos) is provided. A small website usually takes a few weeks.',
        },
        {
          q: 'Can you help with the domain and hosting?',
          a: 'Yes. If needed, I will help you choose and set up a domain and hosting.',
        },
        {
          q: 'Will the website work on phones?',
          a: 'Yes. Every website is built to work on phones, tablets and desktops.',
        },
        {
          q: 'Can you do SEO?',
          a: 'I do the technical SEO basics: metadata, heading structure, sitemap and speed, so your site is ready for further SEO. I don’t guarantee Google rankings — honestly, nobody can.',
        },
        {
          q: 'Will I be able to edit the content myself?',
          a: 'It depends on the chosen solution. If you want to edit texts or photos yourself, we will discuss a content management option before starting.',
        },
        {
          q: 'Can you update my current website?',
          a: 'Yes. I can modernise your existing website or build a new one, keeping what already works well.',
        },
        {
          q: 'Do you only work with businesses in Kaunas?',
          a: 'No. I’m based in Kaunas, so we can meet in person there, but I also work remotely with businesses across Lithuania and abroad.',
        },
        {
          q: 'Do you maintain the website after launch?',
          a: 'Yes, we can agree on maintenance and changes after launch separately, based on your needs.',
        },
      ],
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
