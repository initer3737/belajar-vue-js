<script>
import axios from 'axios'
//untuk mengimport komponeny
// import HelloWorld from './components/HelloWorld.vue'
//https://vuejs.org/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state
// https://router.vuejs.org/guide/essentials/navigation.html
//https://youtu.be/TiBCLraUFvA
//https://youtu.be/Tr21cH-kjGs
//importirovat
export default{
    data(){
      return{
        city:'',
        error:'',
        jam:new Date().toLocaleTimeString(),
        users:null
      }
    },
    computed:{
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
      }
    },
    mounted(){
      const url=`https://jsonplaceholder.typicode.com/users`
      this.getUsers(url)
      setInterval(()=>{
          this.jam=new Date().toLocaleTimeString()
        },1000);
    },
    methods:{
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
    watch(){
        this.city;
        // this.jam;
    }
}
</script>

<template>
  <div class="wrapper">
   <h1>{{ city === '' ?'region : wates city yogyakarta':validateRegion()}}</h1>
   <h1>{{ jam }}</h1>
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
 <div class="" v-if="this.users != null">
   <p>{{this.users.data[0]}}</p>
   <p>username {{getUsername}}</p>
   <p>name {{getUserFirstname}}</p>
   <p>email {{getUseremail}}</p>
 </div>
 <hr>
</template>

<style scoped>
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
      /* color: goldenrod; */
      box-shadow: 0px 0px 12px white,
                  0px 0px 12px white,
                  0px 0px 12px white,
                  0px 12px 12px purple,
                  12px 13px 12px purple;
    }
  }
</style>
