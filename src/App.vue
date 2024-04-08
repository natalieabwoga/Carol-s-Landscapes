<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <v-app>
    <navbar></navbar>
    
    <main>
      <RouterView></RouterView>
    </main>
  </v-app>
  </template>
