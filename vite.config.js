import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  // Prerender build'e subundlinam bibliotekas, kurios neturi tvarkingo Node ESM
  ssr: { noExternal: [/^@mui\//, /^@emotion\//, 'react-helmet-async'] },
});
