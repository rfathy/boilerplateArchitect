module.exports = {
  // module: {
  //   rules: [
  //     {
  //       test: /\.scss$/,
  //       use: [
  //         'vue-style-loader',
  //         'css-loader',
  //         {
  //           loader: 'sass-loader',
  //           options: {
  //             indentedSyntax: true
  //             // sass-loader version >= 8
  //             // sassOptions: {
  //             //   indentedSyntax: true
  //             // }
  //           }
  //         }
  //       ]
  //     }
  //   ]
  // },  
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'ar',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  configureWebpack: {
    plugins: [

    ]
  }
}
