import { useLanguage } from '../i18n/LanguageContext.jsx';
import { profile } from '../data/profile.js';
import { GitHubIcon, LinkedInIcon, Logo, WhatsAppIcon } from './Icons.jsx';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a className="brand" href="#inicio" aria-label={`${profile.name} — ${t.nav.home}`}>
          <Logo size={38} />
          <span className="brand__name">{profile.name}</span>
        </a>

        <div className="palette" role="img" aria-label={t.footer.palette}>
          <span className="palette__label">{t.footer.palette}</span>
          <span className="palette__bar">
            <span className="palette__c60">60%</span>
            <span className="palette__c30">30%</span>
            <span className="palette__c10">10%</span>
          </span>
        </div>

        <ul className="footer__social" aria-label={t.footer.social}>
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
          </li>
        </ul>
      </div>
      <p className="container footer__legal">
        <small>
          © {new Date().getFullYear()} {profile.name}. {t.footer.rights} {t.footer.built}
        </small>
      </p>
    </footer>
  );
}
