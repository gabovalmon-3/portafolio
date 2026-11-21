# Portafolio profesional · Gabriel Valverde

Portafolio web one-page hecho con React 18, Vite 5 y CSS.
Prueba de suficiencia BISOFT-23 Portafolio Profesional, Universidad CENFOTEC.

## Ejecutar

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # compila el sitio en /docs
npm run preview  # sirve el sitio compilado
```

## Datos personales

Correo del formulario, WhatsApp, GitHub y LinkedIn se cambian en `src/data/profile.js`.
Los proyectos de la galería están en `src/data/projects.js` y los textos en
español e inglés en `src/i18n/translations.js`.

## Publicación

GitHub Pages publica la carpeta `/docs` de la rama `main`
(Settings → Pages → Deploy from a branch → main → /docs).
Después de cualquier cambio: `npm run build`, commit y push.

## Formulario de contacto

Los mensajes se envían con [FormSubmit](https://formsubmit.co) al correo definido en
`profile.js`. El primer envío genera un correo de activación que hay que confirmar una vez.

La estructura de archivos completa está en `entrega/ESTRUCTURA.txt`.
