import { useContent } from '../context/LanguageContext';
import { CONTACTS } from '../content';
import './Contact.css';
import Icon from '../components/Icon';

const Contact = () => {
  const { contact } = useContent();

  const channels = [
    {
      icon: 'bx-phone',
      label: contact.phoneLabel,
      value: CONTACTS.phone,
      href: `tel:${CONTACTS.phoneHref}`,
      action: contact.phoneAction,
    },
    {
      icon: 'bx-envelope',
      label: contact.emailLabel,
      value: CONTACTS.email,
      href: `mailto:${CONTACTS.email}?subject=${encodeURIComponent(contact.emailSubject)}`,
      action: contact.emailAction,
    },
  ];

  return (
    <section className='section' id='contact' aria-labelledby='contact-title'>
      <div className='container contact'>
        <div className='contact__intro reveal'>
          <p className='eyebrow'>{contact.eyebrow}</p>
          <h2 id='contact-title' className='section-title'>
            {contact.title}
          </h2>
          <p className='section-lead'>{contact.lead}</p>
          <p className='contact__location'>
            <Icon name='bx-map' />
            {contact.location}
          </p>
        </div>

        <div className='contact__side reveal'>
          <ul className='contact__channels'>
            {channels.map((channel) => (
              <li key={channel.label}>
                <a href={channel.href} className='channel'>
                  <Icon name={channel.icon} className='channel__icon' />
                  <span className='channel__text'>
                    <span className='channel__label'>{channel.label}</span>
                    <span className='channel__value'>{channel.value}</span>
                  </span>
                  <span className='channel__action'>
                    {channel.action}
                    <Icon name='bx-right-arrow-alt' />
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className='contact__hint'>{contact.hint}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
