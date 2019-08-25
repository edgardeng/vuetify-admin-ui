import Vue from 'vue';

import Vuetify, {
  // Vuetify,
  VContent,
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


import * as directives from 'vuetify/lib/directives';
import enLang from 'vuetify/es5/locale/en';
import zhLang from 'vuetify/es5/locale/zh-Hans';
import Snackbar from '../components/snackbar/index';

Vue.use(Vuetify, {
  components: {
    VApp,
    VContent,
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

export default new Vuetify({
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

// Vue.prototype.$vuetify = vuefity
//
// const that = Vue.prototype;
// console.log(that);
// that.$locale = {
//   use(lang) {
//     i18n.locale = lang;
//     that.$vuetify.lang.current = lang === 'zh-CN' ? 'zhLang' : 'enLang';
//     localStorage.setItem('VUE-ADMIN-VUETIFY_LANGUAGE', lang);
//   },
//   current() {
//     return i18n.locale;
//   },
// };
