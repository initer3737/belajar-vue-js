<script>
import axios from 'axios'
import cenit from '/src/assets/button.mp3'
import { harvest } from '../../globalstate/harvestmoon'
//untuk mengimport komponeny
// import HelloWorld from './components/HelloWorld.vue'
//https://vuejs.org/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state
// https://router.vuejs.org/guide/essentials/navigation.html
//https://youtu.be/TiBCLraUFvA
//https://youtu.be/Tr21cH-kjGs
//importirovat
//not shame as react js component name in vue js depend on the filename
export default{
    data(){
      return{
        city:'',
        error:'',
        jam:new Date().toLocaleTimeString(),
        users:null,
        count:0,
        harvestmoon:harvest(),
      }
    },
    computed:{
      getStatusCounting(){
        let statusCounting
          if(this.counting <= 12)statusCounting='sangat relax'
          if(this.counting <= 32)statusCounting='relax'
          if(this.counting <= 52)statusCounting='lambat'
          if(this.counting <= 132)statusCounting='sangat lambat'
          if(this.counting <= 152)statusCounting='sayang'
          if(this.counting <= 232)statusCounting='sangat sayang'
          if(this.counting <= 292)statusCounting='lebih sayang'
          if(this.counting <= 332)statusCounting='ultimate'
          if(this.counting <= 532)statusCounting='sangat ultimate'
          if(this.counting <= 632)statusCounting='sopan'
          if(this.counting <= 732)statusCounting='sangat sopan'
          if(this.counting >= 732)statusCounting='bener bener sangat sopan'
        return statusCounting;
      },
        //if u need to perform data manipulation from data(){property} via computed property
      counting:{
          //getter method
        get(){
          return this.count
        },
        //setter method
        set(value){
          this.count+=value
        }
      },
      //if u need to perform getting data from data(){property} via computed property
      cityName(){
        return this.city
      },
      getUsername(){
        return this.users.data[0].username
      },
      getUseremail(){
        return this.users.data[0].email
      },
      getUserFirstname(){
        return this.users.data[0].name
      },
      getJam(){
        return this.jam
      },
      getHarvestName(){
        return this.harvestmoon.get_name
      },
      getHarvestHouseLevel(){
        return this.harvestmoon.get_house
      },
      getHarvestWife(){
         return this.harvestmoon.get_wife
      },
      getHarvestExp(){
         return this.harvestmoon.get_exp
      },
      getHarvestSeason(){
         return this.harvestmoon.get_season
      },
    },
    mounted(){
        //mounted is like useEffect in react its perform what is the first we do as web developper 
        //when this page are access by the user
        //so i will perform simple get request from api endpoint and then deliver it to the user interface 
      const url=`https://jsonplaceholder.typicode.com/users`
      this.getUsers(url)
      setInterval(()=>{
          this.jam=new Date().toLocaleTimeString()
        },1000);
    },
    methods:{
      cenit(src){
        return new Audio(src)
      },
      countingApp(){
          //use the setter method on this methods {countingApp} 
          //nb : computed method are to perform reactive value it mean if u retrive
          // data or send data to api it will automatic update without refreshing the browser 
          //it like react js useEffect[is to monitoring state] && useState[is like re render data when state got new value/mutating ]
        this.counting=1 //setter
        this.cenit(cenit).play()
      },
      incrementExp(){
        this.cenit(cenit).play()
        return this.harvestmoon.incrementExp(1)
      },
      decrementExp(){
        this.cenit(cenit).play()
        return this.harvestmoon.decrementExp(1)
      },
        getValidateCity(lengthChar){
           const char=lengthChar
          if(this.city.trim().length < char){
              this.error=`input field city must more than ${char} character`
              return;
          }
        },
      validateRegion(){
          const lengthChar=5
         this.getValidateCity(lengthChar)
         const textLengthCity=this.cityName.trim().length
         if(textLengthCity < lengthChar){
            return this.error;
         }
          // if(textLengthCity == 0)alert('zero null')
            this.error=''
         return 'region: '+this.cityName
      },
      async getUsers(url){
          const data=await axios.get(url)
              this.users={...data}
          console.log('res from api will be : ',this.users)
      }  
    },
    //i dont know yet watch method is for what ,maybe latter
    watch(){
        this.city;
        // this.jam;
    }
}
</script>

<template>
      <div class="wrapper">
   <h1>{{ city === '' ?'region : wates city yogyakarta':validateRegion()}}</h1>
   <h1>{{ getJam }}</h1>
   <p>20 &deg;F</p>
   <p>belajar vue js</p>
   <!-- i dont know what is this -->
   <!-- <input type="text" :placeholder="'tulis'" @input="this.city=$event.target.value"> -->
   <!-- model data binding -->
   <input type="text" :placeholder="'city'" v-model="this.city">
   <!-- <button v-show="city !=''">tulis</button> -->
   <button v-if="city !=''">send</button>
   <button disabled v-else>tulis</button>
    <p class="error-text">{{ this.city.trim().length==0?this.error='':this.error }}</p>
  </div>
  <div class="weather-wrapper" id="id21af2c089eebf" a='{"t":"b","v":"1.2","lang":"id","locs":[],"ssot":"c","sics":"ds","cbkg":"#7B1FA2","cfnt":"#FFFFFF","ceb":"#FFFFFF","cef":"#000000"}'><a href="https://cuacalab.id/widget/">Weather widget html for website by cuacalab.id</a></div>
 <h1>consume api</h1>
 <hr>
 <div class="consume-api-container" v-if="this.users != null">
   <p>{{this.users.data[0]}}</p>
   <p>username {{getUsername}}</p>
   <p>name {{getUserFirstname}}</p>
   <p>email {{getUseremail}}</p>
 </div> 
 <hr>
<div class="counter-app-container">
  <h1>counter app</h1>
 <div class="counter-child">
      <h3>{{ getStatusCounting }}</h3>
      {{ counting }} 
    <button @click="countingApp()">counter app</button>
 </div>
</div>
<hr>
<div class="harvest-moon-container">
  <h1>harvest moon state management pinia</h1>
 <div class="harvest-moon-child">
   <h3>name: {{ getHarvestName }}</h3>
   <h3>wife: {{ getHarvestWife }}</h3>
   <h3>exp: {{ getHarvestExp }}</h3>
   <h3>season: {{ getHarvestSeason }}</h3>
   <h3>house level: {{ getHarvestHouseLevel }}</h3>
   <button @click="incrementExp()">add exp</button>
   <button @click="decrementExp()">subtract exp</button>
  </div>
</div>
<hr>
</template>
<style scoped>
.consume-api-container{
  margin: 12px;
}
.counter-child button{
  background: linear-gradient(45deg , blue ,silver);
  padding: 14px;
  border-radius: 5px;
  color: aliceblue;
  font-size: 19px;
  cursor: pointer;
  animation: kelip-button alternate-reverse infinite 2s;
}
.harvest-moon-container{
  display: flex;
  gap: 45px;
  flex-flow: column nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.harvest-moon-child{
  /* display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  font-family: Georgia, 'Times New Roman', Times, serif; */
  font-size: 2rem;
}
.harvest-moon-child button{
  background: linear-gradient(45deg , blue ,silver);
  padding: 14px;
  border-radius: 5px;
  color: aliceblue;
  font-size: 19px;
  cursor: pointer;
  animation: kelip-button alternate-reverse infinite 2s;
  margin: 12px;
}
.counter-app-container{
  display: flex;
  gap: 45px;
  flex-flow: column nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.counter-child{
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 3rem;
}
.weather-wrapper{
  position: absolute;
  top: 0;
  right: 0;
}
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
      color: goldenrod;
      box-shadow: 0px 0px 12px white,
                  0px 0px 12px white,
                  0px 0px 12px white,
                  0px 12px 12px purple,
                  12px 13px 12px purple;
    }
  } 
</style> 