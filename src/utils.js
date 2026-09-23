// Sklandus slinkimas į sekciją (atsižvelgia į sticky header aukštį per CSS scroll-margin-top)
export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const goToContact = () => scrollToId('contact');
