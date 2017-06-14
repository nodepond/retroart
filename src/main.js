// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    selectedColor: '#ff0000'
  },
  actions: {
    PICKED_COLOR ({ commit }, color) {
      commit('SET_COLOR', color)
    }
  },
  mutations: {
    SET_COLOR (state, color) {
      state.selectedColor = color
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
