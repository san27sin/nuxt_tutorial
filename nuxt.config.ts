// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Tutorial project',
      meta: [
        { name: 'charset', content: 'utf-8' }
      ]
    }
  },
  modules: ['usebootstrap']
})