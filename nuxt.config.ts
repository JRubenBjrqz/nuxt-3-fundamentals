// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/image"],
  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY,
    },
  },
  image: {
    domains: ["m.media-amazon.com"],
  },
  routeRules: {
    "/spa": { ssr: false },
    "/static": { static: true },
    "/swr": { swr: true },
  },
});
