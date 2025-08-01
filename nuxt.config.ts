// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  nitro: {
    output: {
      dir: 'docs',
      publicDir: 'docs'
    },
    prerender: {
      routes: ['/']
    }
  },
  app: {
    baseURL: '/diaper-shower-nicolas/',
    buildAssetsDir: '/_nuxt/',
    head: {
      title: '🍼 Chá de Fraldas do Nicolas 💙',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Chá de fraldas do Nicolas - Ajude-nos a preparar a chegada do nosso pequeno príncipe' },
        { name: 'theme-color', content: '#4A90E2' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/diaper-shower-nicolas/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/diaper-shower-nicolas/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/diaper-shower-nicolas/favicon.svg' }
      ]
    }
  },
  experimental: {
    payloadExtraction: false
  }
})
