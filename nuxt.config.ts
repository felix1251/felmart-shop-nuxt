// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Felmart PH",
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    components: [{ path: '~/components', pathPrefix: false }],
    css: ['@/assets/css/main.css'],
    modules: ['@formkit/nuxt'],
})
