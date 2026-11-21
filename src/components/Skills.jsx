import { useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Reveal, { SectionHeading } from './Reveal.jsx';

// Pestañas interactivas (patrón ARIA tabs con navegación por flechas).
export default function Skills() {
  const { t } = useLanguage();
  const groups = t.skills.groups;
  const [current, setCurrent] = useState(groups[0].id);
  const tabs = useRef({});
  const group = groups.find((item) => item.id === current) ?? groups[0];

  const onKeyDown = (event) => {
    const index = groups.findIndex((item) => item.id === current);
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % groups.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + groups.length) % groups.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = groups.length - 1;
    else return;
    event.preventDefault();
    setCurrent(groups[next].id);
    tabs.current[groups[next].id]?.focus();
  };

  return (
    <section id="habilidades" className="section section--dark" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading id="skills-title" eyebrow={t.skills.eyebrow} title={t.skills.title} />

        <Reveal className="tabs" delay={80}>
          <div className="tabs__list" role="tablist" aria-label={t.skills.tabsLabel} onKeyDown={onKeyDown}>
            {groups.map((item) => (
              <button
                key={item.id}
                ref={(node) => (tabs.current[item.id] = node)}
                type="button"
                role="tab"
                id={`tab-${item.id}`}
                aria-selected={item.id === current}
                aria-controls="skills-panel"
                tabIndex={item.id === current ? 0 : -1}
                className="tabs__tab"
                onClick={() => setCurrent(item.id)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div
            id="skills-panel"
            role="tabpanel"
            aria-labelledby={`tab-${group.id}`}
            className="tabs__panel"
            key={group.id}
            tabIndex={0}
          >
            <p className="tabs__note">{group.note}</p>
            <ul className="chips">
              {group.items.map((skill, index) => (
                <li className="chip" key={skill} style={{ '--i': index }}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
