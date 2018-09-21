<!-- ROOT component -->

<template>
  <div>
    <app-header :title="title"></app-header>
    <app-characters :characters="characters"></app-characters>
    <app-footer :title="title"></app-footer>
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
    'app-characters': Characters,
    'app-footer': Footer
  },
  data () {
    return {
      characters: [
        {name: 'Ryu', speciality: 'Vue Components', show: false},
        {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', speciality: 'Click Events', show: false},
        {name: 'Tango', speciality: 'Conditionals', show: false},
        {name: 'Kami', speciality: 'Webpack', show: false},
        {name: 'Yoshi', speciality: 'Data Diggin', show: false}
      ],
      title: 'Vue Characters'
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
