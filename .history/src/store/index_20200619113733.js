import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    addressComponent:[]
  },
  mutations: {
    onComplete(state,data) {
      state.addressComponent = data
    }
  },
  actions: {
  },
  modules: {
  }
})
