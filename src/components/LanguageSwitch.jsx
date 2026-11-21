import { useLanguage } from '../i18n/LanguageContext.jsx';

// Componente Switch de idioma: apagado = español, encendido = inglés.
export default function LanguageSwitch() {
  const { lang, toggle, t } = useLanguage();
  const isEnglish = lang === 'en';

  return (
    <div className="lang">
      <span className={`lang__code ${!isEnglish ? 'is-active' : ''}`} aria-hidden="true">
        ES
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={isEnglish}
        aria-label={t.lang.label}
        className="switch"
        onClick={toggle}
      >
        <span className="switch__thumb" />
      </button>
      <span className={`lang__code ${isEnglish ? 'is-active' : ''}`} aria-hidden="true">
        EN
      </span>
    </div>
  );
}
