import About from '../components/pages/about/About.vue'
import Learning from '../components/pages/learning/Learning.vue'
import Harvest from '../components/pages/harvestmoon/Harvest.vue'
import NotFound from '../components/pages/notfound/NotFound.vue'
import TodoList from '../components/pages/todolist/TodoList.vue'
import Login from '../components/pages/login/Login.vue'
import Hello from '../components/HelloWorld.vue'
import { createRouter, createWebHistory } from 'vue-router'
import {debeh} from '../components/globalstate/debehlogin'
//importirovat
const routes=[
    {
        path:'/',component:Learning,name:'home',meta: { requiresAuth: true }
    },
    {
        path:'/about/:id',component:About,name:'about',meta: { requiresAuth: true }
    },
    {
        path:'/about/',component:About,name:'about',meta: { requiresAuth: true }
    },
    {
        path:'/harvest/',component:Harvest,name:'harvest',meta: { requiresAuth: true }
    },
    {
        path:'/hello',component:Hello,name:'hello',meta: { requiresAuth: true }
    },
    {
        path:'/todo',component:TodoList,name:'todo',meta: { requiresAuth: true }
    },
    {
        path:'/login',component:Login,name:'login',meta: { requiresAuth: false }
    },
    {
        path:'/:pathMatch(.*)*',component:NotFound,name:'not found'
    },
]

const router=createRouter({
    routes,
    history:createWebHistory() //pake dulu jagonya belakangan
})

router.beforeEach((to,from,next)=>{
        //to: halaman yang ingin dituju
        //from :halaman saat ini
        //next :redirect
        const {getToken}=debeh()
        if(to.meta.requiresAuth === true && !getToken){
            next('/login')
        }else{
            next()
        }
        console.log(from)
        console.log(to.meta)
})

//exportirovat
export default router