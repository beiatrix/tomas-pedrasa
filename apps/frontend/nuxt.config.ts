// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/sanity"
  ],
  sanity: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: 'production'
  }
});
