<script setup>
//setup properties in script tag are use when u want to import some assets
import weejio from '../../../assets/winter.mp4'
</script>
<script>
document.addEventListener('mousemove',(e)=>{
    const target=document.getElementById('weejio')
    target.style.width=-100+e.pageX/100+'vw'
    target.style.height=-100+e.pageX/100+'vh'
})
//properties
export default {
    data(){
       return {
        // audio:new Audio(xolodno),
        formtodo:'',
        lists:[
            'eat tahu tempe',
            'makan bakso ku waaaah',
            'nonton anime kny season 3'

            ]
       }
    },
    methods:{
        addTodo(list){
            this.lists=[...this.lists,list]
            setTimeout(()=>{
                this.lists=''
            },1000)
        },
        deleteTodo(list){
            return this.lists=this.lists.filter(value=>value != list)
        }
    },
    computed:{
        getList(){
            return this.lists
        }
    },
    // mounted(){
    // //    const audio=this.audio
    // //         audio.loop=true
    // //         audio.autoplay=true
    //         // audio.play()
    // },
//   unmounted(){
//     // const audio=this.audio
//     //         audio.pause()
//   }  
}
</script>
<template>
   <div class="about-container">
        <h1 class="title-harvest">todo list</h1>
        <h1>what iam gonna to do tomorow?</h1>
        <hr>
        <h1>challange codding to you</h1>
        <h1>find the bug of this program!!!!</h1>
        <hr>
        <li v-for="item in getList" class="todo-list-container">
            {{ item}} 
            <button @click="deleteTodo(item)">delete</button>
        </li>
        <hr>
        <div class="input-container">
            <input v-model="this.formtodo" type="text" placeholder="what is the next move??"> 
            <button v-if="this.formtodo.length <5?undefined:'s'" @click="addTodo(formtodo)">send</button>
        </div>
       <hr/> 
   </div>
    <video :src="weejio" autoplay loop class="weejio-bg" id="weejio"></video>
</template> 
<style scoped>
.todo-list-container button{
    pointer-events: all;
}
.todo-list-container{
    display: flex;
    justify-content: space-between;
}
.input-container button:active{
    position: relative;
    top: 5px;
}
.input-container button:hover{
    background: linear-gradient(45deg,purple,black);
    transition: all 2s;
    animation:kelip_button_hover 2s alternate-reverse infinite;
}
@keyframes kelip_button_hover {
    from{}
    to{
        background: linear-gradient(65deg,purple,white);
    }
}
.input-container button{
    font-size: 18px;
    padding: 5px 25px;
    background: transparent;
    color: #fff;
    cursor: pointer;
    border-bottom: 2px solid purple;
    box-shadow: 1px 5px 12px white;
    transition: all 3s;
    animation:kelip_button 2s alternate infinite;
}
@keyframes kelip_button {
    from{}
    to{
        border-bottom: 2px solid white;
        box-shadow: 1px 5px 12px purple;
    }
}
.input-container input::placeholder{
    color: #fff;
    border-bottom: 2px dotted white;
}
.input-container input:focus{
    outline: none;
    border-bottom: 2px solid purple;
    box-shadow: 1px 5px 12px white;
    transition: ease 2s;
    animation:kelip_input 2s alternate infinite;
}
@keyframes kelip_input {
    from{}
    to{
        border-bottom: 2px solid white;
        box-shadow: 1px 5px 12px purple;
    }
}
.input-container input{
    border: 0;
    font-size: 16px;
    color:#fff;
    padding: 3px 2px;
    background: transparent;
    border-bottom: 2px solid white;
}
.input-container{
    pointer-events: all;
    z-index: 12;
    display: flex;
    flex-flow: row nowrap;
    gap: 6px;
    justify-content: space-around;
    align-items: center;
}
.weejio-bg{
    position: absolute;
    inset: 0;
    object-fit: cover;
    object-position: center;
    width: 100%;
    min-height: 100%;
    filter: brightness(45%);
    z-index: -1;
}
.about-container{
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 17px;
    text-transform: capitalize;
    line-height: 23px;
    display: flex;
    flex-flow: column nowrap;
    gap: 14px;
    pointer-events: none;
}
.title-harvest{
    margin-left: 12px;
}
</style>   