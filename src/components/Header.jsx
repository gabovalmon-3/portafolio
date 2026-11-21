import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useActiveSection } from '../hooks/hooks.js';
import { profile } from '../data/profile.js';
import { Logo, MenuIcon, CloseIcon } from './Icons.jsx';
import LanguageSwitch from './LanguageSwitch.jsx';

const SECTIONS = ['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'trayectoria', 'contacto'];
const NAV = [
  ['sobre-mi', 'about'],
  ['habilidades', 'skills'],
  ['proyectos', 'projects'],
  ['trayectoria', 'journey'],
  ['contacto', 'contact'],
];

export default function Header() {
  const { t } = useLanguage();
  const active = useActiveSection(SECTIONS);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  // Cierra el menú móvil con Escape.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Barra de progreso de lectura: crece según cuánto se ha bajado en la página.
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(window.scrollY / total, 1) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <header className="header">
      <span className="header__progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div className="container header__inner">
        <a className="brand" href="#inicio" aria-label={`${profile.name} — ${t.nav.home}`}>
          <Logo size={38} />
          <span className="brand__name">{profile.name}</span>
        </a>

        <nav id="menu" className={`nav ${open ? 'is-open' : ''}`} aria-label={t.nav.label}>
          <ul className="nav__list">
            {NAV.map(([id, key]) => (
              <li key={id}>
                <a
                  className="nav__link"
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {t.nav[key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__tools">
          <LanguageSwitch />
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
