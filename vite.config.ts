import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

const pathResolve = (dir: string) => resolve(__dirname, dir);

export default defineConfig({
  server: {
    host: '0.0.0.0',
    open: true
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': pathResolve('./src'),
      'pages': pathResolve('./src/pages'),
      'components': pathResolve('./src/components'),
      'assets': pathResolve('./src/assets'),
      'utils': pathResolve('./src/utils'),
      'plugins': pathResolve('./src/plugins'),
      'requests': pathResolve('./src/requests'),
      'hooks': pathResolve('./src/hooks'),
      'store': pathResolve('./src/store'),
      'configs': pathResolve('./src/configs')
    }
  }
});
