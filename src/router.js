import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue'
import HomeDetails from './pages/HomeDetails.vue'


const routes=[
    {name:'home',path:'/',component:Home},
    {name:'homeDetails',path:'/homeDetails',component:HomeDetails},
]

const router=createRouter({
    history:createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ left: 0, top: 0 })
          }, 500)
        })
      },
})

export default router;