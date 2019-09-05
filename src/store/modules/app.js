import { getObject, setObject } from "@/utils/cookie";

const app = {
  state: {
    isLoading: false,
    theme: 'light', // default light theme
    language: 'zh',
    collapsed: false, // nav drawer is collapsed
    notices: 3 // notification
  },
  mutations: {
    SET_LOADING: (state, info) => {
      state.isLoading = info
    },
    SET_NOTICE_COUNT: (state, info) => {
      state.notices = info
    },
    CAL_NOTICE_COUNT: (state, info) => {
      state.notices += info
    },
    SET_THEME: (state, info) => {
      state.theme = info
      setObject('theme', info)
    },
    SET_LANGUAGE: (state, info) => {
      state.language = info
      setObject('language', info)
    },
    /** init app state with theme, collapse, language */
    INIT_STATE: (state) => {
      state.collapsed = getObject('collapsed') === 'true'
      let t = getObject('theme')
      if (t) {
        state.theme = t
      }
      let l = getObject('language')
      if (l) {
        state.language = l
      }
    }
  },
  actions: {
    START_LOADING ({ commit }, load) {
      commit('SET_LOADING', load)
    },
    CHANGE_THEME: ({ commit }, value) => {
      commit('SET_THEME', value)
    },
    CHANGE_LANGUAGE: ({ commit }, lang) => {
      commit('SET_LANGUAGE', lang)
    },
    CHANGE_NOTICE_COUNT: ({ commit }, value) => {
      commit('SET_NOTICE_COUNT', value)
    },
    CALCULATE_NOTICE_COUNT: ({ commit }, value) => {
      commit('CAL_NOTICE_COUNT', value)
    }
  },
  getters: {
    isLoading (state) {
      return state.isLoading
    },
    theme (state) {
      return state.theme
    },
    language (state) {
      return state.language
    },
    notices: (state) => { return state.notices }
  }
}


export default app
