// nuxt.config.ts
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

  // Private & Public environment variables mapping pipeline
  runtimeConfig: {
    emailUser: process.env.EMAIL_USER,
    emailPass: process.env.EMAIL_PASS,
    adminEmail: process.env.ADMIN_EMAIL,
    noreplyAlias: process.env.NOREPLY_ALIAS,
    public: {
      instagramAccessToken: process.env.NUXT_INSTAGRAM_ACCESS_TOKEN || ''
    }
  },

  // Vite configuration for Tailwind v4 compiler
  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  // App configuration for premium fonts and SEO head tags
  app: {
    head: {
      title: 'FIT2PRO | Elite Personal Training & Performance',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Turn fitness into professional-grade execution. Premium training programs by FIT2PRO.' },
        { name: 'theme-color', content: '#000000' }, // Matches your sleek dark aesthetic

        // Open Graph / Facebook / iMessage / WhatsApp Link Preview Metadata
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://fit2protraining.com' },
        { property: 'og:title', content: 'FIT2PRO | Elite Personal Training & Performance' },
        { property: 'og:description', content: 'Turn fitness into professional-grade execution. Premium training programs by Coach Michael Billups.' },
        { property: 'og:image', content: 'https://fit2protraining.com/fit2pro-logo.png' }, // Full URL required for crawlers
        { property: 'og:image:alt', content: 'FIT2PRO Performance Training Branding' },

        // Twitter Card Preview Metadata
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://fit2protraining.com' },
        { name: 'twitter:title', content: 'FIT2PRO | Elite Personal Training & Performance' },
        { name: 'twitter:description', content: 'Turn fitness into professional-grade execution. Premium training programs by Coach Michael Billups.' },
        { name: 'twitter:image', content: 'https://fit2protraining.com/fit2pro-logo.png' }
      ],
      link: [
        // App Icons & Favicons (Placed inside your /public directory)
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#4c1d95' }, // Pinned tab mask icon color matching your purple accent

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