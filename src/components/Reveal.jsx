import { useReveal } from '../hooks/hooks.js';

// Envuelve contenido y lo anima al entrar en pantalla.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({ eyebrow, title, id }) {
  return (
    <Reveal className="heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="heading__title">
        {title}
      </h2>
    </Reveal>
  );
}
