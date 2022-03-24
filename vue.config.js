module.exports = {
  devServer: {
    https: false,
    disableHostCheck: true,
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/global/global.scss";`,
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
        .loader("vue-loader")
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
