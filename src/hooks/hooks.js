import { useEffect, useRef, useState } from 'react';

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Marca el elemento como visible cuando entra en pantalla (animación de aparición). */
export function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion() || !('IntersectionObserver' in window)) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

/** Devuelve el id de la sección que está actualmente en pantalla (scroll spy). */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.35;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids]);

  return active;
}

/** true cuando la página se desplazó más de `offset` píxeles. */
export function useScrolled(offset) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);
  return scrolled;
}

/** Efecto de máquina de escribir que rota entre varias frases. */
export function useTypewriter(words) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (reducedMotion()) {
      setText(words[0]);
      return undefined;
    }
    let word = 0;
    let length = 0;
    let deleting = false;
    let timer;
    const tick = () => {
      const full = words[word];
      length += deleting ? -1 : 1;
      setText(full.slice(0, length));
      let delay = deleting ? 35 : 70;
      if (!deleting && length === full.length) {
        deleting = true;
        delay = 1600;
      } else if (deleting && length === 0) {
        deleting = false;
        word = (word + 1) % words.length;
        delay = 300;
      }
      timer = setTimeout(tick, delay);
    };
    setText('');
    timer = setTimeout(tick, 300);
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}
