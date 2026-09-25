import { useContent } from '../context/LanguageContext';
import './Work.css';
import Icon from '../components/Icon';

const Work = () => {
  const { work } = useContent();
  const { labels, side } = work;

  return (
    <section className='section section--soft' id='work' aria-labelledby='work-title'>
      <div className='container'>
        <div className='section-head reveal'>
          <p className='eyebrow'>{work.eyebrow}</p>
          <h2 id='work-title' className='section-title'>
            {work.title}
          </h2>
          <p className='section-lead'>{work.lead}</p>
        </div>

        <div className='cases'>
          {work.projects.map((project, index) => (
            <article
              className={`case reveal ${index % 2 ? 'case--flip' : ''}`}
              key={project.name}
              aria-labelledby={`case-${index}`}
            >
              <a
                href={project.url}
                target='_blank'
                rel='noopener noreferrer'
                className='case__media'
                tabIndex={-1}
                aria-hidden='true'
              >
                <figure className='browser'>
                  <div className='browser__bar'>
                    <span className='browser__dot' />
                    <span className='browser__dot' />
                    <span className='browser__dot' />
                    <span className='browser__url'>{project.domain}</span>
                  </div>
                  <img
                    src={project.image}
                    alt={`${project.name}: ${project.type}`}
                    width='1440'
                    height='900'
                    loading='lazy'
                    decoding='async'
                  />
                </figure>
              </a>

              <div className='case__body'>
                <h3 id={`case-${index}`} className='case__title'>
                  {project.name}
                </h3>
                <p className='case__type'>{project.type}</p>
                <ul className='case__tags'>
                  {project.tags.map((tag) => (
                    <li className='tag' key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>

                <dl className='case__facts'>
                  <div>
                    <dt>{labels.goal}</dt>
                    <dd>{project.goal}</dd>
                  </div>
                  <div>
                    <dt>{labels.solution}</dt>
                    <dd>{project.solution}</dd>
                  </div>
                  <div>
                    <dt>{labels.result}</dt>
                    <dd>{project.result}</dd>
                  </div>
                </dl>

                <a
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='link-arrow'
                >
                  {labels.visit}
                  <span className='sr-only'>: {project.name}</span>
                  <Icon name='bx-right-arrow-alt' />
                </a>
              </div>
            </article>
          ))}

          <article className='case-side reveal'>
            {side.image ? (
              <img
                src={side.image}
                alt=''
                width='1440'
                height='900'
                loading='lazy'
                decoding='async'
                className='case-side__img'
              />
            ) : (
              <div className='case-side__img case-side__placeholder' aria-hidden='true'>
                <Icon name={side.icon} />
              </div>
            )}
            <div>
              <span className='tag'>{side.label}</span>
              <h3 className='case-side__title'>{side.name}</h3>
              <p className='case-side__text'>{side.text}</p>
              {side.url && (
                <a
                  href={side.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='link-arrow'
                >
                  {labels.visit}
                  <span className='sr-only'>: {side.name}</span>
                  <Icon name='bx-right-arrow-alt' />
                </a>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Work;
