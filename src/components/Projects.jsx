import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { projects, categories } from '../data/projects.js';
import Reveal, { SectionHeading } from './Reveal.jsx';
import { ArrowRightIcon, CloseIcon, GitHubIcon } from './Icons.jsx';

// Visor de capturas dentro de la ventana modal: imagen principal + miniaturas.
function Shots({ project, lang }) {
  const [current, setCurrent] = useState(0);
  const shot = project.images[current] ?? project.images[0];

  return (
    <div className="shots">
      <img className="shots__main" key={shot.src} src={shot.src} alt={shot[lang]} />
      <p className="shots__caption">{shot[lang]}</p>
      {project.images.length > 1 && (
        <ul className="shots__thumbs">
          {project.images.map((image, index) => (
            <li key={image.src}>
              <button
                type="button"
                className="shots__thumb"
                aria-pressed={index === current}
                aria-label={image[lang]}
                onClick={() => setCurrent(index)}
              >
                <img src={image.src} alt="" loading="lazy" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Cover({ project }) {
  if (project.images?.length) {
    return <img className="cover cover--image" src={project.images[0].src} alt="" loading="lazy" />;
  }
  return (
    <div className={`cover cover--${project.pattern}`} aria-hidden="true">
      <span className="cover__mark">{project.mark}</span>
      <span className="cover__tech">{project.stack[0]}</span>
    </div>
  );
}

export default function Projects() {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);

  const visible = projects.filter((project) => filter === 'all' || project.category === filter);
  const titleOf = (project) => (lang === 'en' && project.titleEn) || project.title;

  // Abre o cierra la ventana modal nativa <dialog>.
  useEffect(() => {
    const node = dialog.current;
    if (!node) return;
    if (selected && !node.open) node.showModal();
    if (!selected && node.open) node.close();
  }, [selected]);

  return (
    <section id="proyectos" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading id="projects-title" eyebrow={t.projects.eyebrow} title={t.projects.title} />
        <Reveal delay={60}>
          <p className="prose prose--intro">{t.projects.intro}</p>

          <div className="filters">
            <div className="filters__list" role="group" aria-label={t.projects.filterLabel}>
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className="filters__btn"
                  aria-pressed={filter === category}
                  onClick={() => setFilter(category)}
                >
                  {t.projects.filters[category]}
                </button>
              ))}
            </div>
            <p className="filters__count" aria-live="polite">
              {t.projects.count(visible.length)}
            </p>
          </div>
        </Reveal>

        <ul className="gallery">
          {visible.map((project, index) => (
            <li className="gallery__item" key={`${filter}-${project.id}`} style={{ '--i': index }}>
              <article className="card">
                <Cover project={project} />
                <div className="card__body">
                  <p className="card__tags">
                    <span className="tag">{t.projects.filters[project.category]}</span>
                  </p>
                  <h3 className="card__title">{titleOf(project)}</h3>
                  <p className="card__summary">{project[lang].summary}</p>
                  <button type="button" className="card__more" onClick={() => setSelected(project)}>
                    {t.projects.more}
                    <span className="sr-only">: {titleOf(project)}</span> <ArrowRightIcon />
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialog}
        className="modal"
        aria-labelledby="modal-title"
        onClose={() => setSelected(null)}
        onClick={(event) => event.target === dialog.current && setSelected(null)}
      >
        {selected && (
          <div className="modal__content">
            <button type="button" className="modal__close" aria-label={t.projects.close} onClick={() => setSelected(null)}>
              <CloseIcon />
            </button>
            {selected.images?.length ? (
              <Shots key={selected.id} project={selected} lang={lang} />
            ) : (
              <Cover project={selected} />
            )}
            <div className="modal__body">
              <p className="card__tags">
                <span className="tag">{t.projects.filters[selected.category]}</span>
              </p>
              <h3 id="modal-title" className="modal__title">
                {titleOf(selected)}
              </h3>
              <p>{selected[lang].detail}</p>
              <h4 className="modal__label">{t.projects.role}</h4>
              <p>{selected[lang].role}</p>
              <h4 className="modal__label">{t.projects.stack}</h4>
              <ul className="chips chips--static">
                {selected.stack.map((tech) => (
                  <li className="chip chip--light" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
              {selected.repo ? (
                <a className="btn btn--accent" href={selected.repo} target="_blank" rel="noreferrer">
                  <GitHubIcon /> {t.projects.repo}
                </a>
              ) : (
                <p className="modal__private">{t.projects.privateRepo}</p>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
