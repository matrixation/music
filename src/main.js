// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './route'
import store from './store'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import 'common/stylus/index.styl'

/* eslint-disable no-new */
fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
