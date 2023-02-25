<script>
  export default{
    computed:{
      navigasi(){
        const positionpath=this.$route.fullPath.split('/')[1].toLocaleLowerCase()
          return positionpath
      }
    },
    methods:{
      navigatsiyastil(url){
        return this.navigasi == url?'active':''
      }
    }
  }
</script>
<template>
  <!-- router-view is to render the component in the routes directory depent on on the route-->
  <nav :class="'nav'">
    <div class="cling"></div>
    <router-link to="/" :class="`nav-link ${navigatsiyastil('')}`">home</router-link>
    <router-link to="/about" :class="`nav-link ${navigatsiyastil('about')}`">about</router-link>
    <router-link to="/harvest" :class="`nav-link ${navigatsiyastil('harvest')}`">harvest</router-link>
  </nav>
<router-view></router-view>
</template> 

<style>
.cling{
  width: 12px;
  height: 100%;
}
/* by default style are global */
.active{
  animation: aktif alternate 2s infinite;
}
@keyframes aktif {
  from{}
  to{
    color: slateblue;
  }
}
.nav{
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  gap: 9px;
  color: white;
  font-size: 21px;
  z-index: 999;
  padding: 16px;
  background: rgba(0,0,0,.5);
  min-width: 100%;
}
.nav-link{
  text-decoration: none !important;
  transition: all 2s;
}
.nav-link:hover{
  color: blue !important;
  transition: all .2s;
  /* transform: translateY(23px); */
}
.nav-link:visited{
  color: white;
}
</style>
