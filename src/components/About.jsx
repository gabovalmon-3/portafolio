import { useLanguage } from '../i18n/LanguageContext.jsx';
import { profile } from '../data/profile.js';
import Reveal, { SectionHeading } from './Reveal.jsx';
import { GitHubIcon, LinkedInIcon } from './Icons.jsx';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="section" aria-labelledby="about-title">
      <div className="container">
        <div className="about">
          <Reveal as="figure" className="portrait">
            <img src="./gabriel.jpg" alt={t.about.photoAlt} width="853" height="1280" loading="lazy" />
            <figcaption className="portrait__caption">{t.about.photoCaption}</figcaption>
          </Reveal>

          <div>
            <SectionHeading id="about-title" eyebrow={t.about.eyebrow} title={t.about.title} />
            <Reveal delay={80}>
              <p className="prose">{t.about.p1}</p>
              <p className="prose">{t.about.p2}</p>
              <p className="prose">{t.about.p3}</p>
              <ul className="social">
                <li>
                  <a className="social__link" href={profile.github} target="_blank" rel="noreferrer">
                    <GitHubIcon /> GitHub
                  </a>
                </li>
                <li>
                  <a className="social__link" href={profile.linkedin} target="_blank" rel="noreferrer">
                    <LinkedInIcon /> LinkedIn
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>

        <ul className="principles">
          {t.about.cards.map(([title, body], index) => (
            <Reveal as="li" className="principle" key={title} delay={index * 90}>
              <h3 className="principle__title">{title}</h3>
              <p>{body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
