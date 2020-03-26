module.exports = {
    publicPath: '/',
    outputDir   : 'dist',
    assetsDir   : 'assets',
    devServer   : {
        host: "127.12.1.107"
    },
    // 以下是pwa配置
    pwa: {
      iconPaths: {
        favicon32     : 'favicon.ico',
        favicon16     : 'favicon.ico',
        appleTouchIcon: 'favicon.ico',
        maskIcon      : 'favicon.ico',
        msTileImage   : 'favicon.ico'
      }
    }
  }