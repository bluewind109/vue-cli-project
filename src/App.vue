<!-- ROOT component -->

<template>
  <div>
    <app-header></app-header>
    <characters></characters>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Characters from './components/Characters.vue';
import Footer from './components/Footer.vue';

export default {
  //Local components
  components: {
    'app-header': Header,
    'characters': Characters,
    'app-footer': Footer
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

<style scoped lang="scss">
  h1 {
    color: purple;
  }
</style>
