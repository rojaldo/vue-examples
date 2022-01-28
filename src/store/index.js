import { createStore } from 'vuex'
import {Hero} from '../model/Hero'

export default createStore({
  state: {
    beers: {
      range: [3,5],
      list: [],
    },
    heroes: {
      list: [new Hero('Hulk', 'Bruce Banner')],
      newHero: new Hero('Ironman', 'Tony Stark')
    }
  },
  getters: {
    getRange: state => state.beers.range,
    getList: state => state.beers.list,
    getHeroes: state => state.heroes.list,
    getNewHero: state => state.heroes.newHero,
  },
  mutations: {
    setRange(state, range) {
      console.log('setRange', range);
      state.beers.range = range
    },
    setList(state, list) {
      console.log('setList', list);
      state.beers.list = list
    },
    setHeroes(state, heroes) {
      console.log('setHeroes', heroes);
      state.heroes.list = heroes
    },
    addHero(state, hero) {
      console.log('addHero', hero);
      state.heroes.list.push(hero)
      state.heroes.newHero = new Hero('', '')
    },
    setNewHero(state, hero) {
      console.log('setNewHero', hero);
      state.heroes.newHero = hero
    }
  },
  actions: {
    async fetchBeers({commit}) {
      if(this.getters.getList.length > 0) {
        console.log('Fetching beers from store');
      }else {
        console.log('Fetching beers from API');
        const response = await fetch(`https://api.punkapi.com/v2/beers`)
        const data = await response.json()
        commit('setList', data)  
      }
    }

  },
  modules: {
  }
})
