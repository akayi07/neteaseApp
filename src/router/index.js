import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Discover from '../components/discover/Discover.vue'
import FindMusic from '../components/FindMusic.vue'
import MyMusic from '../components/mymusic/MyMusic.vue'
import MyMusicLogin from '../components/mymusic/MyMusicLogin.vue'
import Friend from '../components/Friend.vue'
import Download from '../components/Download.vue'
import Toplist from '../components/findmusicothers/Toplist.vue'
import Playlist from '../components/findmusicothers/Playlist.vue'
import Djradio from '../components/findmusicothers/Djradio.vue'
import Artist from '../components/findmusicothers/Artist.vue'
import Album from '../components/findmusicothers/Album.vue'


Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      children: [{
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
            },
            {
              path: '/toplist',
              component: Toplist
            },
            {
              path: '/playlist',
              component: Playlist
            },
            {
              path: '/djradio',
              component: Djradio,

            },
            {
              path: '/artist',
              component: Artist
            },
            {
              path: '/album',
              component: Album
            }
          ]
        },
        {
          path: '/mylogin',
          component: MyMusicLogin
        },
        {
          path: '/my',
          component: MyMusic 
        },
        {
          path: '/friend',
          component: Friend
        },
        {
          path: '/download',
          component: Download
        }]
    },
    
  ]
})

export default router
