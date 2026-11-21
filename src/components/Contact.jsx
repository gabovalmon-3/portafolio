import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { profile } from '../data/profile.js';
import Reveal, { SectionHeading } from './Reveal.jsx';
import { GitHubIcon, LinkedInIcon, MailIcon, SendIcon, WhatsAppIcon } from './Icons.jsx';

const EMPTY = { name: '', email: '', subject: '', message: '' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_MESSAGE = 1000;

// Devuelve la clave del error de un campo, o '' si es válido.
function validate(field, rawValue) {
  const value = rawValue.trim();
  switch (field) {
    case 'name':
      if (!value) return 'nameRequired';
      return value.length < 2 ? 'nameShort' : '';
    case 'email':
      if (!value) return 'emailRequired';
      return EMAIL_PATTERN.test(value) ? '' : 'emailInvalid';
    case 'subject':
      if (!value) return 'subjectRequired';
      return value.length < 3 ? 'subjectShort' : '';
    case 'message':
      if (!value) return 'messageRequired';
      if (value.length < 10) return 'messageShort';
      return value.length > MAX_MESSAGE ? 'messageLong' : '';
    default:
      return '';
  }
}

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [honey, setHoney] = useState('');
  const [status, setStatus] = useState('idle'); // idle | invalid | sending | success | error

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: validate(name, value) }));
  };

  const onBlur = (event) => {
    const { name, value } = event.target;
    setErrors((current) => ({ ...current, [name]: validate(name, value) }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const found = Object.fromEntries(Object.keys(EMPTY).map((field) => [field, validate(field, values[field])]));
    setErrors(found);
    const firstInvalid = Object.keys(found).find((field) => found[field]);
    if (firstInvalid) {
      setStatus('invalid');
      event.target.elements[firstInvalid]?.focus();
      return;
    }
    if (honey) return; // campo trampa: solo lo llenan los bots

    setStatus('sending');
    try {
      // FormSubmit reenvía el mensaje directamente al buzón configurado en profile.js
      const response = await fetch(`https://formsubmit.co/ajax/${profile.contactEmail}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
          _subject: `Portafolio: ${values.subject.trim()}`,
          _replyto: values.email.trim(),
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || String(data.success) !== 'true') throw new Error('send failed');
      setValues(EMPTY);
      setErrors({});
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const field = (name, type, extra = {}) => {
    const error = errors[name];
    const Tag = type === 'textarea' ? 'textarea' : 'input';
    return (
      <div className={`field ${error ? 'has-error' : ''}`}>
        <label htmlFor={`contact-${name}`}>{c[name]}</label>
        <Tag
          id={`contact-${name}`}
          name={name}
          type={type === 'textarea' ? undefined : type}
          value={values[name]}
          placeholder={c[`${name}Ph`]}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? `contact-${name}-error` : undefined}
          required
          {...extra}
        />
        {name === 'message' && (
          <span className="field__count" aria-hidden="true">
            {values.message.length}/{MAX_MESSAGE}
          </span>
        )}
        {error && (
          <p className="field__error" id={`contact-${name}-error`}>
            {c.errors[error]}
          </p>
        )}
      </div>
    );
  };

  const feedback = { invalid: c.fixErrors, success: c.success, error: c.error }[status];

  return (
    <section id="contacto" className="section section--dark" aria-labelledby="contact-title">
      <div className="container contact">
        <div>
          <SectionHeading id="contact-title" eyebrow={c.eyebrow} title={c.title} />
          <Reveal delay={80}>
            <p className="prose">{c.intro}</p>
            <h3 className="contact__label">{c.channels}</h3>
            <ul className="channels">
              <li>
                <a className="channels__link" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer">
                  <WhatsAppIcon /> WhatsApp
                </a>
              </li>
              <li>
                <a className="channels__link" href={`mailto:${profile.contactEmail}`}>
                  <MailIcon /> {profile.contactEmail}
                </a>
              </li>
              <li>
                <a className="channels__link" href={profile.github} target="_blank" rel="noreferrer">
                  <GitHubIcon /> GitHub
                </a>
              </li>
              <li>
                <a className="channels__link" href={profile.linkedin} target="_blank" rel="noreferrer">
                  <LinkedInIcon /> LinkedIn
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <form className="form" onSubmit={onSubmit} noValidate>
            <div className="form__row">
              {field('name', 'text', { autoComplete: 'name', maxLength: 80 })}
              {field('email', 'email', { autoComplete: 'email', maxLength: 120 })}
            </div>
            {field('subject', 'text', { maxLength: 120 })}
            {field('message', 'textarea', { rows: 6, maxLength: MAX_MESSAGE })}

            {/* Campo trampa anti-spam, oculto para personas */}
            <input
              className="form__honey"
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={honey}
              onChange={(event) => setHoney(event.target.value)}
            />

            <div className="form__footer">
              <button type="submit" className="btn btn--accent" disabled={status === 'sending'}>
                {status === 'sending' ? c.sending : c.send} <SendIcon />
              </button>
              <p className={`form__status form__status--${status}`} role="status" aria-live="polite">
                {feedback}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
