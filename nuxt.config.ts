import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Global CSS registration
  css: ['~/assets/css/main.css'],

  // Modules config
  modules: [
    '@nuxt/image',
    '@vueuse/motion/nuxt'
  ],

  // Vite configuration for Tailwind v4 compiler
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },

  // App configuration for premium fonts and SEO head tags
  app: {
    head: {
      title: 'FIT2PRO | Elite Personal Training & Performance',
      meta: [
        { name: 'description', content: 'Turn fitness into professional-grade execution. Premium training programs by FIT2PRO.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        // Google Fonts connection
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' }
      ]
    }
  },

  // Build config optimizations
  build: {
    transpile: ['swiper']
  }
})