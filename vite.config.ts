import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Nom du dépôt GitHub (pour GitHub Pages)
  build: {
    outDir: 'dist', // Le dossier où le build est généré
    emptyOutDir: true, // Supprime les fichiers précédents dans 'dist' avant le build
  },
});