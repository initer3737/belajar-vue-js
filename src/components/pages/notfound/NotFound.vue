<script setup>
import { harvest } from '../../globalstate/harvestmoon';
import weejio from '../../../assets/weejio.mp4'
import swamp from '../../../assets/swamp.mp3'
document.addEventListener('mousemove',(e)=>{
    const target=document.getElementById('weejio')
    target.style.width=-100+e.pageX/100+'vw'
    target.style.height=-100+e.pageX/100+'vh'
})
</script>
<script>
    export default{
        data(){
           return {
             audio:new Audio(swamp)
           }
        },
    mounted(){
       const audio=this.audio
            audio.loop=true
            audio.autoplay=true
            audio.play()
    },
  unmounted(){
    const audio=this.audio
            audio.pause()
  } 
    }
</script>
<style scoped>
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
.title-gideon{
    margin-left: 12px;
}
</style>
<template>
   <div class="about-container">
        <h1 class="title-gideon">page not found</h1>
        <h1>status code 404</h1>
        <hr>
        <!-- <h3>route will be {{ $route.fullPath.split('/')[1].toLocaleLowerCase() }}</h3> -->
   </div>
    <video :src="weejio" autoplay loop class="weejio-bg" id="weejio"></video>
</template>    