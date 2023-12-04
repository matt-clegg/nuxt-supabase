// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  components: [
    {
      path: "~/components",
      pathPrefix: false
    }
  ],

  modules: [
    "@nuxtjs/supabase",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts"
  ],

  supabase: {
    redirect: false
  },

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700]
    }
  }
});
