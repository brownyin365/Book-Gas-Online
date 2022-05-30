import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import Profile from './views/Profile.vue'
import Userbook from './views/Userbook.vue'

import { fb } from './firebase'


Vue.use(VueRouter)

// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
  const routes = [

    {
      path: '/',
      name: 'home',
      component: Home
    },  
    {
      path: '/dash',
      name: 'dash',
      component: () => import(/* webpackChunkName: "dash" */ './views/Dash.vue')
    },
    {
      path: '/reservations',
      name: 'reservations',
      component: () => import(/* webpackChunkName: "reservations" */ './views/Reservations.vue')
    },
    {
      path: '/ordergas',
      name: 'ordergas',
      component: () => import(/* webpackChunkName: "ordergas" */ './views/Ordergas.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import(/* webpackChunkName: "users" */ './views/Users.vue')
    },
    {
      path: '/signinadmin',
      name: 'Signinadmin',
      component: () => import(/* webpackChunkName: "signinadmin" */ './views/Signinadmin.vue')
    },
    {
      path: '/signin',
      name: 'Signin',
      component: () => import(/* webpackChunkName: "signin" */ './views/Signin.vue')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import(/* webpackChunkName: "signup" */ './views/Signup.vue')
    },
    {
      path: '/userbook',
      name: 'userbook',
      component: Userbook,
      meta: { requiresAuth: true }
      },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { requiresAuth: true },

      children: [
        
      ]
    },



    {
      path: '/user/:id',
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'users',
          name: 'users',
          component: () => import(/* webpackChunkName: "Users" */ './views/Users.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'reservations',
          name: 'reservations',
          component: () => import(/* webpackChunkName: "Reservations" */ './views/Reservations.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'addreservation',
          name: 'addreservation',
          component: () => import(/* webpackChunkName: "Addreservation" */ './views/Addreservation.vue'),
          // meta: { requiresAuth: true },
        },
      ]
    },
  ]
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  });
  
  router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = fb.auth().currentUser
  
    if (requiresAuth && !currentUser) {
      next('/')
    }else if (requiresAuth && currentUser) {
      next()
    }else {
      next()
    }
  })
  
  export default router

