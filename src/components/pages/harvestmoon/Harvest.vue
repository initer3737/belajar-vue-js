<script setup>
//setup properties in script tag are use when u want to import some assets
import weejio from '../../../assets/winter.mp4'
import xolodno from '../../../assets/xolodno.mp3'
</script>
<script>
import { harvest } from '../../globalstate/harvestmoon';
// document.addEventListener('mousemove',(e)=>{
//     const target=document.getElementById('weejio')
//     target.style.width=-100+e.pageX/100+'vw'
//     target.style.height=-100+e.pageX/100+'vh'
// })
//properties
export default {
    data(){
       return {
        harvestData:harvest,
        audio:new Audio(xolodno)
       }
    },
    computed:{
        utils(){
            return this.harvestData().get_utils_list
        },
        name(){
            return this.harvestData().get_name
        },
        house_level(){
            return this.harvestData().get_house
        },
        wife(){
            return this.harvestData().get_wife
        },
        season(){
            return this.harvestData().get_season
        },
        exp(){
            return this.harvestData().get_exp
        },
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
const harvestDataPinia=harvest
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
.title-harvest{
    margin-left: 12px;
}
</style>
<template>
   <div class="about-container">
        <h1 class="title-harvest">harvest moon</h1>
        <h1>back to the nature</h1>
        <hr>
        <h3>harvester: {{ name }}</h3>
        <h3>wife: {{ wife }}</h3>
        <h3>season: {{ season }}</h3>
        <h3>house level: {{ house_level }}</h3>
        <h3>utils: {{ utils }}</h3>
        <h3>exp: {{ exp }}</h3>
        <h3>temperature: -15&deg; C</h3>
        <hr>
   </div>
    <video :src="weejio" autoplay loop class="weejio-bg" id="weejio"></video>
</template>    