// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Felmart PH",
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
    css: ['@/assets/css/main.css'],
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        '@formkit/nuxt',
    ],
})
