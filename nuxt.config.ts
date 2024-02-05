// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@vuepic/vue-datepicker/dist/main.css', '~/assets/scss/reset.scss'],
  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },
  modules: [
    '@vee-validate/nuxt',
  ],
})
