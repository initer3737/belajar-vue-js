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
    <router-link to="/" :class="`nav-link ${navigatsiyastil('')}`">home</router-link>
    <router-link to="/about" :class="`nav-link ${navigatsiyastil('about')}`">about</router-link>
  </nav>
<router-view></router-view>
</template>

<style>
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
  left: 12px;
  display: flex;
  gap: 9px;
  color: white;
  font-size: 21px;
  text-decoration: none;
  z-index: 999;
}
.nav-link:hover{
  color: black;
  /* transform: translateY(23px); */
}
.nav-link:visited{
  color: white;
}
</style>
