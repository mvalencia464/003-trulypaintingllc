import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        portfolio: resolve(__dirname, 'portfolio.html'),
        services: resolve(__dirname, 'services.html'),
        team: resolve(__dirname, 'team.html'),
        visualizer: resolve(__dirname, 'visualizer.html'),
        thankYou: resolve(__dirname, 'thank-you.html'),
      },
    },
  },
});
