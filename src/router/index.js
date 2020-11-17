import { Form } from 'element-ui'
import Vue from 'vue'
import Router from 'vue-router'

import store from '../store/index'

Vue.use(Router)
function vd(url){
  return store.state.liftlist.menus_url.some(item=>item==url)
}

export let apd = [
  {
    path: "/gly",
    component: () => import('../two/cly/cly'),
    name: '管理员管理',
    beforeEnter: (to, from, next) => {
      vd('/gly')?next():next('/index')
    }
  },
  {
    path: '/cdgl',
    component: () => import('../two/caidan/caidan'),
    name: '菜单管理'
    ,
    beforeEnter: (to, from, next) => {
      vd('/cdgl')?next():next('/index')
    }
    
  }, {
    path: '/jsgl',
    component: () => import('../two/jueseguanli/jsgl'),
    name: '角色管理',
    beforeEnter: (to, from, next) => {
      vd('/jsgl')?next():next('/index')
    }
  }, {
    path: '/spfl',
    component: () => import('../two/spfl/spfl'),
    name: '商品分类',
    beforeEnter: (to, from, next) => {
      vd('/spfl')?next():next('/index')
    }
  },
  {
    path: "/spgg",
    component: () => import('../two/spgg/spgg'),
    name: '商品规格',
    beforeEnter: (to, from, next) => {
      vd('/spgg')?next():next('/index')
    }
  },
  {
    path: "/spgl",
    component: () => import('../two/spgl/spgl'),
    name: '商品管理',
    beforeEnter: (to, from, next) => {
      vd('/spgl')?next():next('/index')
    }
  },
  {
    path: "/huiyuan",
    component: () => import('../two/huiyuan/huiyuan'),
    name: '会员管理',
    beforeEnter: (to, from, next) => {
      vd('/huiyuan')?next():next('/index')
    }
  },

  {
    path: "/lbt",
    component: () => import('../two/lbt/lbt'),
    name: '录播图',
    beforeEnter: (to, from, next) => {
      vd('/lbt')?next():next('/index')
    }
  },
  {
    path: "/ms",
    component: () => import('../two/ms/ms'),
    name: '秒杀',
    beforeEnter: (to, from, next) => {
      vd('/ms')?next():next('/index')
    }
  }
]
const router = new Router({
  routes: [
    {
      path: '/login',
      component: () => import('../pages/login.vue'),
      // redirect:'/login'
    },
    {
      path: '/index',
      component: () => import('../pages/index.vue'),
      children: [
        {
          path: '/shouye',
          component: () => import('../two/shouye/shouye'),
          name: '首页'
          
        },
        ...apd,
        {
          path: '',
          redirect: '/shouye'
        }
      ]
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
router.beforeEach((to,form,next)=>{
    if(to.path=='/login'){
      next()
      return
    }
    if(sessionStorage.getItem('user')){
      next()
      return
    }
    next('/login')
})
export default router
