<template>
  <div id="app" :style="{backgroundColor:currentColor}">
    <button @click="onClick">Changer</button>
    <h1>{{counter}} clics</h1>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import {dbLightsRef} from './firebase.config'

  export default {
    name: 'app',
    created() {
      this.$store.dispatch('setLightsRef', dbLightsRef)
    },
    computed: {
      ...mapGetters([
        'currentColor',
        'counter'
      ])
    },
    methods: {
      ...mapActions({
        changeIndex: 'changeIndex',
        incCounter: 'incCounter'
      }),
      onClick() {
        this.changeIndex()
        this.incCounter()
      }
    }
  }
</script>

<style>
  #app {
    height: 100vh;
    width: 100%;
  }

  button {
    height: 70px;
    width: 73px;
  }

  h1 {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
</style>
