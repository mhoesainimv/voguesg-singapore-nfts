
export default {
  target: 'static',
  ssr: true,
  /*
  
  ** Headers of the page
  */
  head: {
    title: 'Vogue Singapore September 2021: New Beginnings',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Vogue Singapore's September 2021 issue is dedicated to Non-Fungible Tokens (NFTs), as we explore the creative renaissance born out of digital innovation."}
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: 'https://mtrphn.com/vogue-singapore-nfts/favicon-192.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/hamburger.css',
    '~/assets/scss/main.scss'
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
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
  ],
  /*
  ** Build configuration
  */

 router:{
  base: '/vogue-singapore-nfts/', 
 },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  }
}
