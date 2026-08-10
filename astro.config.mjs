// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import typography from '@tailwindcss/typography';
import Icons from 'unplugin-icons/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  site: 'https://maicolorti.github.io/',
  
  integrations: [mdx()],
  
  vite: {
    plugins: [
      basicSsl(),
      tailwindcss(),
      Icons({
        compiler: 'astro',
      }),
    ],
  },
});