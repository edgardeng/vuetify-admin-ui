import Vue from 'vue';

import Vuetify, {
  // Vuetify,
  VApp,
  VAlert,
  VAutocomplete,
  VAvatar,
  VBadge,
  VBreadcrumbs,
  VBtn,
  // VBottomNav,
  VBtnToggle,
  VCard,
  VCheckbox,
  VCombobox,
  VDataTable,
  VDataIterator,
  VDatePicker,
  VDialog,
  VDivider,
  VExpansionPanel,
  VFooter,
  VForm,
  // VGrid,
  VIcon,
  VImg,
  VInput,
  VLabel,
  VList,
  VMenu,
  VMessages,
  VNavigationDrawer,
  VOverflowBtn,
  VPagination,
  VProgressCircular,
  VProgressLinear,
  VRadioGroup,
  VRangeSlider,
  VSelect,
  VSlider,
  VSnackbar,
  VSpeedDial,
  VStepper,
  VSubheader,
  VSwitch,
  VSystemBar,
  VTabs,
  VTextField,
  VTextarea,
  VTimePicker,
  VToolbar,
  VTooltip,
  // transitions,
} from 'vuetify/lib';

// import Vue from 'vue'
// import Vuetify, {
//   VCard,
//   VRating,
//   VToolbar,
// } from 'vuetify/lib'
// import { Ripple } from 'vuetify/lib/directives'
//
// Vue.use(Vuetify, {
//   components: {
//     VCard,
//     VRating,
//     VToolbar,
//   },
//   directives: {
//     Ripple,
//   },
// })
//
// export default new Vuetify({ ... })
// const vuetify = new Vuetify({
//   theme: {
//     themes: {
//       light: {
//         primary: '#3f51b5',
//         secondary: '#b0bec5',
//         accent: '#8c9eff',
//         error: '#b71c1c',
//       },
//     },
//   },
// })


import * as directives from 'vuetify/lib/directives';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import enLang from 'vuetify/es5/locale/en';
import zhLang from 'vuetify/es5/locale/zh-Hans';
import i18n from '../i18n';
import Snackbar from '../components/snackbar/index';
// import '../stylus/main.styl';

Vue.use(Vuetify, {
  components: {
    VApp,
    VAlert,
    VAutocomplete,
    VAvatar,
    VBadge,
    VBreadcrumbs,
    VBtn,
    // VBottomNav,
    VBtnToggle,
    VCard,
    VCheckbox,
    VCombobox,
    VDataTable,
    VDataIterator,
    VDatePicker,
    VDialog,
    VDivider,
    VExpansionPanel,
    VFooter,
    VForm,
    // VGrid,
    VIcon,
    VImg,
    VInput,
    VLabel,
    VList,
    VMenu,
    VMessages,
    VNavigationDrawer,
    VOverflowBtn,
    VPagination,
    VProgressCircular,
    VProgressLinear,
    VRadioGroup,
    VRangeSlider,
    VSelect,
    VSlider,
    VSnackbar,
    VSpeedDial,
    VStepper,
    VSubheader,
    VSwitch,
    VSystemBar,
    VTabs,
    VTextField,
    VTextarea,
    VTimePicker,
    VToolbar,
    VTooltip,
    // transitions,
  },
  directives
});

Vue.prototype.$message = Snackbar;

const vuefity = new Vuetify({
  theme: {
    primary: "#ee44aa",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  },
  customProperties: true,
  lang: {
    locales: { enLang, zhLang },
    current: 'enLang',
  },
})


Vue.prototype.$vuetify = vuefity

const that = Vue.prototype;
console.log(that);
that.$locale = {
  use(lang) {
    i18n.locale = lang;
    that.$vuetify.lang.current = lang === 'zh-CN' ? 'zhLang' : 'enLang';
    localStorage.setItem('VUE-ADMIN-VUETIFY_LANGUAGE', lang);
  },
  current() {
    return i18n.locale;
  },
};
