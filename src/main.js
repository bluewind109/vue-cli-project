import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from './routes';

// Global components
// import Characters from './Characters.vue'
//
// Vue.component('characters', Characters);

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});

// Filters
// Vue.filter('to-uppercase', function(value) {
//   return value.toUpperCase();
// });
//
// Vue.filter('snippet', function(value) {
//   return value.slice(0, 100) + '...';
// });

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});