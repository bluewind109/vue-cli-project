<!-- ROOT component -->

<template>
  <div>
    <h1>{{title}}</h1>
    <characters></characters>
  </div>
</template>

<script>
import Characters from './Characters.vue'

export default {
  //Local components
  components: {
    'characters': Characters
  },
  data () {
    return {
      title: 'FlyK App'
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">

</style>
