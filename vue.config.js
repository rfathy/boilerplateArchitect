module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'ar',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  configureWebpack: {
    devtool: 'source-map',
    plugins: []
  },
  css: {
      sourceMap: true,
      extract: false,
      
  },
  productionSourceMap: true
}
