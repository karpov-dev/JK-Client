module.exports = {
  devServer: {
    https: false,
    disableHostCheck: true,
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/style.scss";`,
      },
    },
  },


  chainWebpack: config => {
    const svgRule = config.module.rule("svg")
    svgRule.uses.clear()

    config.module
        .rule("svg")
        .oneOf("inline-svg")
        .resourceQuery(/inline/)
        .use("vue-loader")
        .loader("vue-loader") // or `vue-loader-v16` if you are using a preview support of Vue 3 in Vue CLI
        .end()
        .use("vue-svg-loader")
        .loader("vue-svg-loader")
        .end()
        .end()
        .oneOf("file")
        .use("file-loader")
        .loader("file-loader")
        .end()
        .end()
  },

};
