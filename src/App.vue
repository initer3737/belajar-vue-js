<script>
//untuk mengimport komponeny
// import HelloWorld from './components/HelloWorld.vue'
//https://vuejs.org/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state
// https://router.vuejs.org/guide/essentials/navigation.html
//https://youtu.be/TiBCLraUFvA
export default{
    data(){
      return{
        city:'',
        error:'',
        jam:new Date().toLocaleTimeString()
      }
    },
    computed:{
      cityName(){
        return this.city
      }
    },
    mounted(){
      setInterval(()=>{
          this.jam=new Date().toLocaleTimeString()
        },1000);
    },
    methods:{
        getWeather(){
          if(this.city.trim().length < 2){
              this.error='input field city must more than 2 character'
              return false;
          }else{
            this.error=''
            return false
          }
        }
    },
    watch(){
        this.city;
        this.jam;
    }
}
</script>

<template>
  <div class="wrapper">
   <h1>aplikasi {{ city === '' ?'wates city yogyakarta':cityName}}</h1>
   <h1>{{ jam }}</h1>
   <p>belajar vue js</p>
   <!-- i dont know what is this -->
   <!-- <input type="text" :placeholder="'tulis'" @input="this.city=$event.target.value"> -->
   <!-- model data binding -->
   <input type="text" :placeholder="'city'" v-model="this.city">
   <!-- <button v-show="city !=''">tulis</button> -->
   <button v-if="city !=''" @click="getWeather()">send</button>
   <button disabled v-else>tulis</button>
    <p class="error-text">{{ this.error }}</p>
  </div>
</template>

<style scoped>
.error-text{
  text-align: center;
  color: silver;
  background: linear-gradient(45deg,red,blue);
  box-shadow: 0 0 12px white;
}
  .wrapper{
    width: 900px;
    height: 500px;
    border-radius: 50px;
    background: #1f0f0f24;
    padding: 20px;
    text-align: center;
    color: #fff;
  }
  .wrapper h1{
    margin-top: 50px;
  }
  .wrapper p{
    margin-top: 20px;
  }
  .wrapper input{
    margin-top: 30px;
    background: transparent;
    border: 0;
    border-bottom: 2px solid #110813;
    color: #fcfcfc;
    font-size: 14px;
    padding: 5px 8px;
    outline: none;
  }

  .wrapper input:focus{
    border-bottom-color: purple;
  }

  .wrapper button{
    box-shadow: 0px 0px 12px #fff;
    background: linear-gradient(45deg,blue,purple);
    color:white;
    border-radius:10px;
    border:2px solid darkorchid;
    padding:10px 15px;
    margin-left: 20px;
    cursor: pointer;
    transition: transform .5s ease;
    /* animation: kelip-button alternate-reverse infinite 2s; */
  }
  .wrapper button:hover{
    transform: scale(1,1) translateY(-5px);
    animation: kelip-button alternate-reverse infinite 2s;
  }
  .wrapper button:active{
    transform: scale(1,1) translateY(5px);
  }
  .wrapper button:disabled{
    pointer-events: none;
    transform: none;
    background: linear-gradient(45deg,blue,purple);
    border: none;
    padding: 10px 22px;
    box-shadow: 0px 0px 12px #fff,
    0px 0px 12px #fff;
  }

  @keyframes kelip-button {
    from{}
    to{
      background: linear-gradient(150deg,blue,purple);
      /* color: goldenrod; */
      box-shadow: 0px 0px 12px white,
                  0px 0px 12px white,
                  0px 0px 12px white,
                  0px 12px 12px purple,
                  12px 13px 12px purple;
    }
  }
</style>
