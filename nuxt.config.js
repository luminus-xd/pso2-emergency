
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'PSO2の緊急予告を一週間分見ることが出来るサイトです！ホーム画面に追加することですぐPSO2の緊急を見ることが出来るので試してみてください。' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'PSO2 EQ notice' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://midnight-emergency.firebaseapp.com' },
      { hid: 'og:title', property: 'og:title', content: 'PSO2 EQ notice' },
      { hid: 'og:description', property: 'og:description', content: 'PSO2の緊急予告を一週間分見ることが出来るサイトです！ホーム画面に追加することですぐPSO2の緊急を見ることが出来るので試してみてください。' },
      { hid: 'og:image', property: 'og:image', content: 'https://midnight-emergency.firebaseapp.com/ogp.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@midnight_dev2' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#292929' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
