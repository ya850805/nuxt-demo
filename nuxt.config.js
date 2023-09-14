// https://nuxt.com/docs/api/configuration/nuxt-config
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  app: {
    baseURL: '/nuxt-demo/'
  }
} : {}

export default defineNuxtConfig({
  modules: ["nuxt-facebook-chat"],
  devtools: { enabled: true },
  ...routerBase,
})
