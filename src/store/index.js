import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    breedList: [],
    dogImageList: [],
    dogByBreedImageList: []
  },
  mutations: {
    setBreedList (state, payload) {
      state.breedList = payload
    },
    setDogImageList (state, payload) {
      state.dogImageList = state.dogImageList.concat(payload)
    },
    setDogByBreedImageList (state, payload) {
      state.dogByBreedImageList = state.dogByBreedImageList.concat(payload)
    },
    clearDogImageList (state) {
      state.dogImageList = []
    },
    clearDogByBreedImageList (state) {
      state.dogByBreedImageList = []
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
    },
    async setDogByBreedImageList ({ commit }, breed) {
      const list = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random/20`)
      commit('setDogByBreedImageList', list.data.message)
    }
  },
  getters: {
    getBreedList (state) {
      return state.breedList
    },
    getDogImageList (state) {
      return state.dogImageList
    },
    getDogByBreedImageList (state) {
      return state.dogByBreedImageList
    }
  }
})

export default store
