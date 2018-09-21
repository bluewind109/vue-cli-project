<template>
<ul>
  <li v-for="character in characters">{{character}}</li>
</ul>
</template>

<script>
export default {
  data () {
    return {
      characters: ['Khan', 'Dzu', 'Yi']
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">

</style>
