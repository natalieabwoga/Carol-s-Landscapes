<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <v-app>
    <div class="background">
      <navbar></navbar>
      
      <main>
        <RouterView></RouterView>
      </main>
    </div>
  </v-app>
</template>

<style scoped>
.background {
  background-image: url('@/assets/images/leafprintedited.jpg'); 
  background-size: cover;
  background-position: center;
  height: 100vh;
}
</style>
