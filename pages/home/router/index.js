import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home'


//技能页面
import step1 from '../views/skill/step1.vue'
import step2 from '../views/skill/step2.vue'
import step3 from '../views/skill/step3.vue'
import step4 from '../views/skill/step4.vue'
import step5 from '../views/skill/step5.vue'
import step6 from '../views/skill/step6.vue'
import step7 from '../views/skill/step7.vue'
import step8 from '../views/skill/step8.vue'
import step9 from '../views/skill/step9.vue'
import step10 from '../views/skill/step10.vue'
import step11 from '../views/skill/step11.vue'
import demo from '../views/demo/demo1'

import profile from '../views/profile/edit/index'
import profile_compony from '../views/profile/compony'
import profile_edit from '../views/profile/edit/index'
import skill1 from '../views/profile/edit/skill'
import skill2 from '../views/profile/edit/skill2'
import check from '../views/profile/edit/Check'
import phoneCheck from '../views/profile/edit/PhoneCheck'

import login from '../views/login/index'
import register from '../views/register/index'
import forget from '../views/forget/index.vue'

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
      path: '/skill9',
      name: 'skill9',
      component: step9
    },
    {
      path: '/skill10',
      name: 'skill10',
      component: step10
    },
    {
      path: '/skill11',
      name: 'skill11',
      component: step11
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },

    {
      path:'/profile/compony',
      name:'profile_compony',
      component:profile_compony
    },
    {
      path:'/profile',
      name:'profile',
      component:profile_edit
    },
    {
      path:'/profile/skill1',
      name:'profile_editSkill1',
      component:skill1
    },
    {
      path:'/profile/skill2',
      name:'profile_editSkill1',
      component:skill2
    },
    {
      path:'/profile/check',
      name:'profile_check',
      component:check
    }, {
      path:'/profile',
      name:'profile',
      component:profile
    },

    {
      path:'/profile/phone_check',
      name:'phone-check',
      component:phoneCheck
    },

    {
      path:'/login',
      name:'login',
      component:login
    },

    {
      path:'/register',
      name:'register',
      component:register
    },


    {
      path:'/forget',
      name:'forget',
      component:forget
    },
  ]
})
