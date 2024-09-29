// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],
  typescript: {
    strict: true // atau false, tergantung kebutuhan
  },
  ssr: true, // jika menggunakan SSR
  // nitro: {
  //   preset: 'vercel',
  // },

  auth: {
    isEnabled: true,
    originEnvKey: 'AUTH_ORIGIN',
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
      type: 'authjs'
    },
    globalAppMiddleware: {
      isEnabled: false
    },
  },

  runtimeConfig: {
    public: {
      authSecret: process.env.AUTH_SECRET || 'BWASTARTUP_s3r3t_k3y',
      baseURL: process.env.BASE_URL // URL backend Anda
    },
    auth: {
      computed: {
        origin: process.env.AUTH_ORIGIN ,
        pathname: '/api/auth',
        fullBaseUrl: `${process.env.AUTH_ORIGIN}/api/auth`
      },
      isEnabled: true,
      originEnvKey: 'AUTH_ORIGIN',
    }
  },

  css: ['~/assets/css/tailwind.css'],

  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' }]
    }
  }
})