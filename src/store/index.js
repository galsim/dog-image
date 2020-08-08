import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    breedList: [],
    dogImageList: []
  },
  mutations: {
    setBreedList (state, payload) {
      state.breedList = payload
    },
    setDogImageList (state, payload) {
      state.dogImageList = state.dogImageList.concat(payload)
    }
  },
  actions: {
    async setBreedList ({ commit }) {
      const breedList = await axios.get('https://dog.ceo/api/breeds/list/all')
      commit('setBreedList', Object.keys(breedList.data.message))
    },
    async setDogImageList ({ commit }) {
      const list = await axios.get('https://dog.ceo/api/breeds/image/random/20')
      commit('setDogImageList', list.data.message)
    }
  },
  getters: {
    getBreedList (state) {
      return state.breedList
    },
    getDogImageList (state) {
      return state.dogImageList
    }
  }
})

export default store
