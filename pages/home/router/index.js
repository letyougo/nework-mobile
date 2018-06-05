import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home'
import step1 from '../views/skill/step1.vue'
import step2 from '../views/skill/step2.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/skill1',
      name: 'skill1',
      component: step1
    },
    {
      path: '/skill2',
      name: 'skill2',
      component: step2
    }
  ]
})
