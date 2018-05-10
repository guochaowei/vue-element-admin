import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/layout/Layout'),
      children: [
        {
          path: 'HelloWorldOne',
          component: () => import('@/components/HelloWorld')
        }, {
          path: 'HelloVue',
          component: () => import('@/components/HelloVue')
        }]
    }
  ]
})
