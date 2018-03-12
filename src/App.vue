<template>
  <div id="app" :style="{backgroundColor:currentColor}">
    <button @click="onClick">Changer</button>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import {dbLightsRef} from './firebase.config'

  export default {
    name: 'app',
    created() {
      this.$store.dispatch('setLightsRef',dbLightsRef)
    },
    computed: {
      ...mapGetters([
        'currentColor'
      ])
    },
    methods: {
      ...mapActions([
        'addColor',
        'changeColorIndex'
      ]),
      onClick() {
        // this.addColor({values: ['green', 'orange', 'red'], index: 2})
        this.changeColorIndex()
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
  }
</style>
