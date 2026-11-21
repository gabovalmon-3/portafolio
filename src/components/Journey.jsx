import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Reveal, { SectionHeading } from './Reveal.jsx';
import { ChevronIcon } from './Icons.jsx';

// Acordeón interactivo: cada etapa se expande para mostrar el detalle.
export default function Journey() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(0);

  return (
    <section id="trayectoria" className="section section--tint" aria-labelledby="journey-title">
      <div className="container journey">
        <SectionHeading id="journey-title" eyebrow={t.journey.eyebrow} title={t.journey.title} />

        <ol className="accordion">
          {t.journey.items.map((item, index) => {
            const isOpen = open === index;
            return (
              <Reveal as="li" className={`accordion__item ${isOpen ? 'is-open' : ''}`} key={item.title} delay={index * 70}>
                <h3 className="accordion__heading">
                  <button
                    type="button"
                    className="accordion__trigger"
                    id={`journey-btn-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`journey-panel-${index}`}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    <span className="accordion__when">{item.when}</span>
                    <span className="accordion__title">
                      {item.title}
                      <span className="accordion__place">{item.place}</span>
                    </span>
                    <ChevronIcon className="accordion__chevron" />
                  </button>
                </h3>
                <div
                  className="accordion__panel"
                  id={`journey-panel-${index}`}
                  role="region"
                  aria-labelledby={`journey-btn-${index}`}
                  inert={isOpen ? undefined : ''}
                >
                  <div className="accordion__inner">
                    <p>{item.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
