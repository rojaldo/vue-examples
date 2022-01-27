import { createStore } from 'vuex'

export default createStore({
  state: {
    beers: {
      range: [3,5],
      list: [],
    }
  },
  getters: {
    getRange: state => state.beers.range,
    getList: state => state.beers.list,
  },
  mutations: {
    setRange(state, range) {
      console.log('setRange', range);
      state.beers.range = range
    }
  },
  actions: {

  },
  modules: {
  }
})
