import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useTypewriter } from '../hooks/hooks.js';
import { profile } from '../data/profile.js';
import { ArrowRightIcon } from './Icons.jsx';

const TECH = ['React', 'Flutter', 'Angular', 'Spring Boot', '.NET', 'Python', 'Docker', 'TypeScript', 'PostgreSQL', 'Next.js'];

export default function Hero() {
  const { t } = useLanguage();
  const typed = useTypewriter(t.hero.typed);
  const [first, ...rest] = profile.name.split(' ');

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="eyebrow hero__in" style={{ '--i': 0 }}>
            {t.hero.eyebrow}
          </p>
          <h1 id="hero-title" className="hero__title hero__in" style={{ '--i': 1 }}>
            {first}
            <span className="hero__title-accent">{rest.join(' ')}</span>
          </h1>
          <p className="hero__typed hero__in" style={{ '--i': 2 }} aria-hidden="true">
            <span className="hero__prompt">&gt;</span> {t.hero.typedPrefix}{' '}
            <span className="hero__typed-word">{typed}</span>
            <span className="hero__caret" />
          </p>
          <p className="hero__lead hero__in" style={{ '--i': 3 }}>
            {t.hero.lead}
          </p>
          <div className="hero__actions hero__in" style={{ '--i': 4 }}>
            <a className="btn btn--accent" href="#proyectos">
              {t.hero.ctaProjects} <ArrowRightIcon />
            </a>
            <a className="btn btn--ghost" href="#contacto">
              {t.hero.ctaContact}
            </a>
          </div>
        </div>

        <aside className="sheet hero__in" style={{ '--i': 3 }} aria-label={t.hero.sheetTitle}>
          <p className="sheet__title">
            <span>{t.hero.sheetTitle}</span>
            <span>{profile.initials}-01</span>
          </p>
          <dl className="sheet__list">
            {t.hero.sheet.map(([label, value]) => (
              <div className="sheet__row" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <p className="sheet__status">
            <span className="sheet__dot" /> {t.hero.status}
          </p>
        </aside>
      </div>

      {/* Cinta de tecnologías en movimiento continuo (decorativa) */}
      <div className="marquee hero__in" style={{ '--i': 5 }} aria-hidden="true">
        <div className="marquee__track">
          {[...TECH, ...TECH].map((tech, index) => (
            <span className="marquee__item" key={index}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
