// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-facebook-chat"],
  devtools: { enabled: true },
  app: {
    baseURL: '/nuxt-demo/',
    buildAssetsDir: 'assets'
  },
  runtimeConfig: {
    var1: '123',
    public: {
      var2: '456',
      lineNotifyToken: ''
    }
  }
})
