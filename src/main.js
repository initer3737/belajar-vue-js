import { createApp } from 'vue'
import './assets/main.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
//importirovat

    // const pinia=createPinia() //register pinia into the root aplikatsi
const app=createApp(App)
        app.use(createPinia())
        app.use(router)
        app.mount('#app')
