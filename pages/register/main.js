// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import ElementUI from 'element-ui'
import '../theme/index.css'
Vue.use(ElementUI);
import './main.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',

  components: { App },
  template: '<App/>'
})