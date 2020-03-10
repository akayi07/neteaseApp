import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import SlideShow from '../components/SlideShow.vue'
import MainContent from '../components/MainContent.vue'
Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      redirect: '/index',
      children: [{
        path: '/index',
        component: SlideShow,
        redirect: '/main',
        children: [
          {
            path: '/main',
            component: MainContent
          }
        ]
      }]
    }
  ]
})

export default router
