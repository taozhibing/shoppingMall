import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    citya:''
  },
  mutations: {
    setCity(state,data) {
      state.citya = data
    }
  },
  actions: {
  },
  modules: {
  }
})
