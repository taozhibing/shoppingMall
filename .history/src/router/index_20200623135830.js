import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        meta: {
          title: '商城页'
        }
      },
      {
        path: 'classiFication',
        name: 'ClassiFication',
        component: () => import('../views/classiFication/ClassiFication'),
        meta: {
          title: '分类页'
        }
      },
      {
        path: 'shoppingCart',
        name: 'ShoppingCart',
        component: () => import('../views/shoppingCart/ShopingCart'),
        meta: {
          title: '购物车页'
        }
      },
      {
        path: 'myself',
        name: 'Myself',
        component: () => import('../views/myself/Myself'),
        meta: {
          title: '我的页'
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
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/profile/Profile'),
    meta: {
      title: '个人资料页'
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
  {
    path: '/addressList',
    name: 'AddressList',
    component: () => import('../views/addressList/AddressList'),
    meta: {
      title: '地址列表页'
    }
  },
  {
    path: '/addressEdit',
    name: 'AddressEdit',
    component: () => import('../views/addressEdit/AddressEdit'),
    meta: {
      title: '地址编辑页'
    }
  },
  {
    path: '/addressEdits',
    name: 'AddressEdits',
    component: () => import('../views/addressEdits/AddressEdits'),
    meta: {
      title: '地址编辑页'
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
