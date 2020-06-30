import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    citya: '',
    num : ''
  },
  mutations: {
    setNumber(state,data) {
      state.num = data
    }
  },
  actions: {
  },
  modules: {
  }
})
