<template>
  <div id="app">
    <nav>
      <ul>
        <li> <router-link to="/about">About</router-link> </li>

        <li><router-link to="/contact">contact</router-link></li>

      </ul>
      <router-view></router-view>
    </nav>
    <div>
      <button @click="show = true">View more</button>
      <div v-if="show">
      <modal>

      </modal>
      </div>
    </div>
    <div>
      <button @click="selectedComponent = 'login'" class="bins">Login</button>
      <button @click="selectedComponent = 'signUp'" class="bins">Sign Up</button>
    </div>
    <div class="d-flex justify-content-center">
      <keep-alive>
      <component :is="selectedComponent"></component>
      </keep-alive>
    </div>

  </div>

</template>

<script>
import about from './components/about.vue'
import login from './components/login.vue'
import signUp from './components/signUp.vue'

export default {
  name: 'app',
  components: {
   login,
    signUp,
    about,
    modal: () => import ("@/components/modal")
  },
  data() {
    return {
      selectedComponent: 'login',
      show: false
    }
  }
}
</script>

<style>

  nav{


  }
  ul{

  }
  li{

    list-style-type: none;
    display:inline;
    color: black;
  }
  a{
    color: black;
    font-size: 20px;
    margin-left:20px;
    text-decoration: none;
    letter-spacing: 5px;
  }
.bins{
  width: 125px;
  height: 45px;
  margin-top: 7px;
  background-color: dodgerblue;
  border-radius: 5px;
  text-transform: uppercase;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
  letter-spacing: 2px;
}

</style>
