import { defineConfig } from 'vite';

export default defineConfig({
  // Relative Asset-Pfade, damit der Build auch unter einem Unterpfad läuft
  base: './',
  server: {
    port: 5173,
  },
  build: {
    // dist/src und dist/test gehören dem tsc-Build für die Tests
    outDir: 'dist/web',
    emptyOutDir: true,
    // Phaser allein ist ~1,4 MB minifiziert
    chunkSizeWarningLimit: 1600,
  },
});
