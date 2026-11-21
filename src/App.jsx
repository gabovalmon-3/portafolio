import { LanguageProvider, useLanguage } from './i18n/LanguageContext.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Journey from './components/Journey.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { ScrollTop, WhatsAppChat } from './components/Floating.jsx';

function Page() {
  const { t } = useLanguage();
  return (
    <>
      <a className="skip" href="#contenido">
        {t.skip}
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
      <WhatsAppChat />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  );
}
