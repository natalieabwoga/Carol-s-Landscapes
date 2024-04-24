<script setup>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import SplashScreen from './components/SplashScreen.vue';


const showSplash = ref(true);

setTimeout(() => {
  showSplash.value = false;
}, 2000);
</script>

<template>
  <v-app> 
    <SplashScreen v-if="showSplash" />
    <div v-else>
      <navbar></navbar>

      <main>
        <RouterView></RouterView>
      </main>

      <Footer></Footer>
    </div>
  </v-app>
</template>









