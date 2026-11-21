import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' => rutas relativas, funciona en cualquier subcarpeta de GitHub Pages.
// outDir 'docs' => GitHub Pages publica directamente la carpeta /docs de la rama main.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: { outDir: 'docs', emptyOutDir: true },
});
