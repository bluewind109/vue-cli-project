import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

// Global components
// import Characters from './Characters.vue'
//
// Vue.component('characters', Characters);

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
});