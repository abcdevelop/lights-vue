
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from '../axios.config'
import {firebaseMutations, firebaseAction} from 'vuexfire'

Vue.use(Vuex)

const state = {
  lights: {
    colors: {
      '0': 'blue',
      '1': 'white',
      '2': 'red',
      '3': 'orange',
      '4': 'green',
      '5': 'purple'
    },
    counter: 0,
    index: 0
  }
}

const getters = {
  lights: state => state.lights,
  colors: state => state.lights.colors,
  currentColor: state => state.lights.colors[state.lights.index],
  counter: state => state.lights.counter
}

const mutations = {
  ...firebaseMutations,
  ADD_COLOR: (state, color) => state.lights.colors.push(color),
  CHANGE_INDEX: (state, index) => state.lights.index = index,
  INC_COUNTER: (state, counter) => state.lights.counter = counter
}

const actions = {
  // nuxtServerInit({dispatch}, context) {
  //   console.log('nuxtServerInit')
  // },
  addColor: ({commit}, color) => {
    //commit('ADD_COLOR', color)
    Axios.post('/lights/color.json', color)
      .catch(e => console.log(e))
  },
  changeIndex({state, commit}) {
    let index = 0
    if (state.lights.index < state.lights.colors.length - 1) {
      index = state.lights.index + 1
    }
    // commit('CHANGE_INDEX', index)
    return Axios.put('/index.json', index)
      .catch(e => console.log(e))
  },
  incCounter({state, commit}) {
    const counter = state.lights.counter + 1
    // commit('INC_COUNTER', counter)
    return Axios.put('/counter.json', counter)
      .catch(e => console.log(e))
  },
  setLightsRef: firebaseAction(({bindFirebaseRef}, {ref}) => bindFirebaseRef('lights', ref))
}

const store = () => {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions
  })
}

export default store
