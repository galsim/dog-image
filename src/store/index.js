import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    breedList: []
  },
  mutations: {
    setBreedList (state, payload) {
      state.breedList = payload
    }
  },
  actions: {
    setBreedList ({ commit }) {
      axios
        .get('https://dog.ceo/api/breeds/list/all')
        .then(res => commit('setBreedList', Object.keys(res.data.message)))
        .catch(e => console.error(e))
    }
  },
  getters: {
    getBreedList (state) {
      return state.breedList
    }
  }
})

export default store
