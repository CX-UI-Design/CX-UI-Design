// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@babel/polyfill';
import Vue from 'vue';
import App from './App';

//load  UI / plugins / style / components
import './UI/index';

//load vuex for data store
import store from './store';

//load router && page
import router from './router';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
