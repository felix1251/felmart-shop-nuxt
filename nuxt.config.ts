// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    build: {
        postcss: {
          postcssOptions: {
            plugins: {
              tailwindcss: {},
              autoprefixer: {},
            },
          },
        },
    },
    components: [
      {
        path: '~/components',
        pathPrefix: false,
      },
    ],
})
