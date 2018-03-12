import Vue from 'vue'
import Vuex from 'vuex'
import Axios from '../axios.config'


import {firebaseMutations, firebaseAction} from 'vuexfire'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    lights:{
      color:{
        akey:{
          values:['white'],
          index:0
        }
      }
    }
  },
  getters: {
    getLights:state => state.lights,
    currentColor: state => {
      const firstColorKey = Object.keys(state.lights.color)[0]
      const firstColor = state.lights.color[firstColorKey]
      return  firstColor.values[firstColor.index]
    }
  },
  mutations: {
    ...firebaseMutations,
  },
  actions: {
    addColor: ({commit}, color) => {
      Axios.post('/color.json', color)
        .catch(e => console.log(e))
    },
    changeColorIndex({state,commit}) {
      const firstColorKey = Object.keys(state.lights.color)[0]
      const firstColor = state.lights.color[firstColorKey]
      let firstColorIndex = 0

      if (firstColor.index < firstColor.values.length -1) {
        firstColorIndex = firstColor.index + 1
      }

      Axios.put('/color/'+firstColorKey+'/index.json', firstColorIndex)
        .catch(e => console.log(e))
    },
    setLightsRef: firebaseAction(({bindFirebaseRef}, {ref}) => {
      bindFirebaseRef('lights', ref)
    })
  }
})
