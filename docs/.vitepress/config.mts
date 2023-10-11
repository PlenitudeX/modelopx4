import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pets & cia",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '#banner' },
      { text: 'Destaque', link: '#destaque' },
      { text: 'Equipe', link: '#equipe' },
      { text: 'Serviços', link: '#services' },
      { text: 'Contato', link: '#contato' },
    ],
  }
})
