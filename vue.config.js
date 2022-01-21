const path = require('path')

module.exports = {
  devServer: {
    https: false,
    disableHostCheck: true
  },

  css: {
    requireModuleExtension: true,
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/style.scss";`
      },
    },
    extract: {
      ignoreOrder: true,
      fileName: '[name].css'
    }
  },
};
