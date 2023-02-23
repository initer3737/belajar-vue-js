import About from '../components/pages/about/About.vue'
import Learning from '../components/pages/learning/Learning.vue'
import Hello from '../components/HelloWorld.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes=[
    {path:'/',component:Learning},
    {path:'/about/:id',component:About},
    {path:'/about/',component:About},
    {path:'/hello',component:Hello},
]

const router=createRouter({
    routes,
    history:createWebHistory() //pake dulu jagonya belakangan
})

export default router