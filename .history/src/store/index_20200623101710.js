import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    citya:'',
    name:'',
    tel:'',
    county:'',
    city : '',
    areaCode : '',
    addressDetail : '',
    address : ''
  },
  mutations: {
    setCity(state,data) {
      state.citya = data
    },
    steName(state,data) {
      state.name = data
    },
    setTel(state,data) {
      state.tel = data
    },
    setCounty(state,data) {
      state.county = data
    },
    setCity(state,data) {
      state.city = data
    },
    setAreaCode(state,data) {
      state.areaCode = data
    },
    setAddressDetail(state,data) {
      state.addressDetail = data
    },
    setAddress(state,data) {
      state.address = data
    }
  },
  actions: {
  },
  modules: {
  }
})
