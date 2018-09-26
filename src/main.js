import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

// Global components
// import Characters from './Characters.vue'
//
// Vue.component('characters', Characters);

Vue.use(VueResource);

// Filters
Vue.filter('to-uppercase', function(value) {
  return value.toUpperCase();
});

Vue.filter('snippet', function(value) {
  return value.slice(0, 100) + '...';
});

new Vue({
  el: '#app',
  render: h => h(App)
});