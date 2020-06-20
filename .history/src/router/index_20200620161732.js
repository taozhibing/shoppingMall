import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
          title: '商城页'
        }
      },
      {
        path:'classiFication',
        name:'ClassiFication',
        component:() => import('../views/classiFication/ClassiFication'),
        meta:{
          title:'分类页'
        }
      },
      {
        path:'shoppingCart',
        name:'ShoppingCart',
        component:() => import('../views/shoppingCart/ShopingCart'),
        meta:{
          title:'购物车页'
        }
      },
      {
        path:'myself',
        name:'Myself',
        component:() => import('../views/myself/Myself'),
        meta:{
          title:'我的页'
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login'),
    meta: {
      title: '登录页'
    }
  },
  {
    path: '/city',
    name: 'City',
    component: () => import('../views/city/City'),
    meta: {
      title: '定位页'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router
