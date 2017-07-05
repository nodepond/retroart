// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import { Row, Col } from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.component(Row)
Vue.component(Col)

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    selectedColor: '#C2C3C7',
    mousedown: false,
    width: 32,
    height: 32,
    pixelsize: 20
  },
  actions: {
    pickedColor ({ commit }, color) {
      commit('SET_COLOR', color)
    },
    mouseDown ({ commit }) {
      commit('SET_MOUSEDOWN', true)
    },
    mouseUp ({ commit }) {
      commit('SET_MOUSEDOWN', false)
    },
    changeSize ({ commit }, payload) {
      commit('SET_SIZE', payload)
    }
  },
  mutations: {
    SET_COLOR (state, color) {
      state.selectedColor = color
    },
    SET_MOUSEDOWN (state, pressed) {
      state.mousedown = pressed
    },
    SET_SIZE (state, payload) {
      state.width = payload.width
      state.height = payload.height
      state.pixelsize = payload.pixelsize
    }
  }
}

)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
