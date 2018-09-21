import Vue from 'vue';
import App from './App.vue';
// Global components
// import Characters from './Characters.vue'
//
// Vue.component('characters', Characters);

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})