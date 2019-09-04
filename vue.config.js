// example
const authApi = 'xxx';
const commonApi = 'xxx';
const svgoConfig = require('./config/svgo-config.json');

module.exports = {
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios',
      'vuetify': 'Vuetify',
      'echarts': 'echarts'
    }
  },
  devServer: {
    proxy: {
      '/api/auth': {
        target: authApi,
        changeOrigin: true,
        pathRewrite: { '/api/auth': '/auth' },
      },
      '/api/common': {
        target: commonApi,
        changeOrigin: true,
        pathRewrite: { '/api/common': '/api' },
      },
    },
    host: '0.0.0.0',
    port: 8090,
    https: false,
    open: true,
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: {
    sourceMap: true,
  },
  productionSourceMap: false,
  runtimeCompiler: true,
  transpileDependencies: [
    /\/node_modules\/vue-echarts\//,
    /\/node_modules\/resize-detector\//,
  ]
};
