import About from '../components/pages/about/About.vue'
import Learning from '../components/pages/learning/Learning.vue'
import Harvest from '../components/pages/harvestmoon/Harvest.vue'
import Hello from '../components/HelloWorld.vue'
import { createRouter, createWebHistory } from 'vue-router'

//importirovat
const routes=[
    {path:'/',component:Learning},
    {path:'/about/:id',component:About},
    {path:'/about/',component:About},
    {path:'/harvest/',component:Harvest},
    {path:'/hello',component:Hello},
]

const router=createRouter({
    routes,
    history:createWebHistory() //pake dulu jagonya belakangan
})

export default router