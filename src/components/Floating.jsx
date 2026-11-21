import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useScrolled } from '../hooks/hooks.js';
import { profile } from '../data/profile.js';
import { ArrowUpIcon, CloseIcon, SendIcon, WhatsAppIcon } from './Icons.jsx';

// Botón "volver al inicio": aparece al bajar por la página.
export function ScrollTop() {
  const { t } = useLanguage();
  const visible = useScrolled(500);

  return (
    <button
      type="button"
      className={`fab fab--top ${visible ? 'is-visible' : ''}`}
      aria-label={t.scrollTop}
      title={t.scrollTop}
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUpIcon />
    </button>
  );
}

// Chat flotante de WhatsApp: abre una conversación con el mensaje escrito.
export function WhatsAppChat() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const input = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    input.current?.focus();
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const onSubmit = (event) => {
    event.preventDefault();
    const text = message.trim() || t.wa.defaultMsg;
    window.open(`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    setMessage('');
    setOpen(false);
  };

  return (
    <div className="wa">
      {open && (
        <section id="wa-panel" className="wa__panel" aria-label={t.wa.title}>
          <header className="wa__header">
            <WhatsAppIcon width={28} height={28} />
            <p>
              <strong>{t.wa.title}</strong>
              <span>{t.wa.subtitle}</span>
            </p>
          </header>
          <div className="wa__body">
            <p className="wa__bubble">{t.wa.greeting}</p>
          </div>
          <form className="wa__form" onSubmit={onSubmit}>
            <label className="sr-only" htmlFor="wa-message">
              {t.wa.placeholder}
            </label>
            <input
              ref={input}
              id="wa-message"
              type="text"
              value={message}
              placeholder={t.wa.placeholder}
              maxLength={500}
              autoComplete="off"
              onChange={(event) => setMessage(event.target.value)}
            />
            <button type="submit" aria-label={t.wa.send} title={t.wa.send}>
              <SendIcon />
            </button>
          </form>
        </section>
      )}
      <button
        type="button"
        className="fab fab--wa is-visible"
        aria-expanded={open}
        aria-controls="wa-panel"
        aria-label={open ? t.wa.close : t.wa.open}
        title={open ? t.wa.close : t.wa.open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <CloseIcon /> : <WhatsAppIcon width={28} height={28} />}
      </button>
    </div>
  );
}
