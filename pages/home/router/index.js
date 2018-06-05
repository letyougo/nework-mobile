import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home'
import step1 from '../views/skill/step1.vue'
import step2 from '../views/skill/step2.vue'
import step3 from '../views/skill/step3.vue'
import step4 from '../views/skill/step4.vue'
import step5 from '../views/skill/step5.vue'
import step6 from '../views/skill/step6.vue'
import step7 from '../views/skill/step7.vue'
import step8 from '../views/skill/step8.vue'
import demo from '../views/demo/demo1'

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
    },
    {
      path: '/skill3',
      name: 'skill3',
      component: step3
    },
    {
      path: '/skill4',
      name: 'skill4',
      component: step4
    },
    {
      path: '/skill5',
      name: 'skill5',
      component: step5
    },
    {
      path: '/skill6',
      name: 'skill6',
      component: step6
    },
    {
      path: '/skill7',
      name: 'skill7',
      component: step7
    },
    {
      path: '/skill8',
      name: 'skill8',
      component: step8
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    }
  ]
})
