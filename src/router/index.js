import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Discover from '../components/discover/Discover.vue'
import FindMusic from '../components/FindMusic.vue'
import MyMusic from '../components/mymusic/MyMusic.vue'
import MyMusicLogin from '../components/mymusic/MyMusicLogin.vue'
import FriendLogin from '../components/friend/FriendLogin.vue'
import Friend from '../components/friend/Friend.vue'
import MyCollection from '../components/mymusic/MyCollection.vue'
import MyArtist from '../components/mymusic/MyArtist.vue'
import MyVideo from '../components/mymusic/MyVideo.vue'
import MyLoveMusic from '../components/mymusic/MyLoveMusic.vue'
import Vincent from '../components/Vincent.vue'
import Videoplanet from '../components/Videoplanet.vue'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
const router = new VueRouter({
  routes: [
    
    {
      path: '/',
      component: Home,
      children: [
          {
            path: '/vincent',
            component: Vincent,
            beforeEnter: (to, from, next) => {
              var alreadylogin = window.sessionStorage.getItem('token');
              if(alreadylogin){
                next();
              } else {
                next('/mylogin')
              } 
            }
          },
          {
              path: '/planet',
              component: Videoplanet,
              beforeEnter: (to, from, next) => {
                var alreadylogin = window.sessionStorage.getItem('token');
                if(alreadylogin){
                  next();
                } else {
                  next('/mylogin')
                } 
              }      
          },
          {
            path: '/',
            component: FindMusic,
            children: [
              {
                path: '/',
                component: Discover
              },
              {
                path: '/discover',
                component: Discover
              }
          ]
        },
        {
          path: '/mylogin',
          component: MyMusicLogin,
          beforeEnter: (to, from, next) => {
            var alreadylogin = window.sessionStorage.getItem('token');
            if(alreadylogin){
              next('/my');
            } else {
              next()
            } 
          }
        },
        {
          path: '/my',
          component: MyMusic,
          redirect: '/myLoveMusic',
          beforeEnter: (to, from, next) => {
            var alreadylogin = window.sessionStorage.getItem('token');
            if(alreadylogin){
              next();
            } else {
              next('/mylogin')
            } 
          },
          children: [
            {
              path: '/myArtist',
              component: MyArtist,
              beforeEnter: (to, from, next) => {
                var alreadylogin = window.sessionStorage.getItem('token');
                
                if(alreadylogin){
                  next();
                } else {
                  next('/mylogin')
                } 
              }
            },
            {
              path: '/myCollection',
              component: MyCollection,
              beforeEnter: (to, from, next) => {
                var alreadylogin = window.sessionStorage.getItem('token');
             
                if(alreadylogin){
                  next();
                } else {
                  next('/mylogin')
                } 
              }
            },
            {
              path: '/myVideo',
              component: MyVideo,
              beforeEnter: (to, from, next) => {
                var alreadylogin = window.sessionStorage.getItem('token');
          
                if(alreadylogin){
                  next();
                } else {
                  next('/mylogin')
                } 
              }
            },
            {
              path: '/myLoveMusic',
              component: MyLoveMusic,
              beforeEnter: (to, from, next) => {
                var alreadylogin = window.sessionStorage.getItem('token');

                if(alreadylogin){
                  next();
                } else {
                  next('/mylogin')
                } 
              }
            }

          ]
        },
        {
          path: '/friendlogin',
          component: FriendLogin,
          beforeEnter: (to, from, next) => {
            var alreadylogin = window.sessionStorage.getItem('token');
            if(alreadylogin){
              next('/friend');
            } else {
              next();
            } 
          }
        },
        {
          path: '/friend',
          component: Friend,
          beforeEnter: (to, from, next) => {
            var alreadylogin = window.sessionStorage.getItem('token');
  
            if(alreadylogin){
              next();
            } else {
              next('/friendlogin')
            } 
          }
        }
      ]
    },
    
  ]
})
          
export default router
