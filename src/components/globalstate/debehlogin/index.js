import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const debeh=defineStore('debehLoginstoreId',{
    state:()=>({
        username:'admin',
        password:'admin',
        msg:'',
        token:false
    }),
    getters:{
        getUser(){
            return this.username
        },
        getPass(){
            return this.password
        },
        getMsg(){
            return this.msg
        },
        getToken(){
            return this.token
        },
    },
    actions:{
        setToken(setToken){
            return this.$state.token=setToken
        },
        setMsg(msg){
            this.$state.msg=msg
        },
        login({username,password}){
                const userDebeh=this.getUser
                const passDebeh=this.getPass
                const userChek= username === userDebeh
                const passChek=password === passDebeh
            if(userChek && passChek){
                this.setToken(true)
                this.setMsg('login sukses!')
            }else{
                this.setToken(false)
                this.setMsg('login gagal!')
            }
        }
    }
})