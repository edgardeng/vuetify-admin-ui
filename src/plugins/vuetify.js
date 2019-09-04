import Vue from 'vue'
// import Vuetify from 'vuetify/lib'; // without cdn
import Vuetify from 'vuetify' // use externals when cdn
// import i18n from '../i18n'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
      dark: {
        primary: '#1890FF',
        secondary: '#1F3070',
        accent: '#5267B3',
        error: '#FF6370',
        info: '#6DDCB5',
        success: '#2baf59',
        warning: '#FFC107',
      }
    },
  },
  icons: {
    iconfont: 'mdi',
  },
  lang: {
    // t: (key, ...params) => i18n.t(key, params),
    current: 'zhHans'
  }
});
