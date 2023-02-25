import About from '../components/pages/about/About.vue'
import Learning from '../components/pages/learning/Learning.vue'
import Harvest from '../components/pages/harvestmoon/Harvest.vue'
import NotFound from '../components/pages/notfound/NotFound.vue'
import Hello from '../components/HelloWorld.vue'
import { createRouter, createWebHistory } from 'vue-router'

//importirovat
const routes=[
    {
        path:'/',component:Learning,name:'home'
    },
    {
        path:'/about/:id',component:About,name:'about'
    },
    {
        path:'/about/',component:About,name:'about'
    },
    {
        path:'/harvest/',component:Harvest,name:'harvest'
    },
    {
        path:'/hello',component:Hello,name:'hello'
    },
    {
        path:'/:pathMatch(.*)*',component:NotFound,name:'not found'
    },
]

const router=createRouter({
    routes,
    history:createWebHistory() //pake dulu jagonya belakangan
})
//exportirovat
export default router