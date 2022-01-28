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
    },
    setList(state, list) {
      console.log('setList', list);
      state.beers.list = list
    }
  },
  actions: {
    async fetchBeers(context) {
      if(this.getters.getList.length > 0) {
        console.log('Fetching beers from store');
      }else {
        console.log('Fetching beers from API');
        const response = await fetch(`https://api.punkapi.com/v2/beers`)
        const data = await response.json()
        context.commit('setList', data)  
      }
    }

  },
  modules: {
  }
})
