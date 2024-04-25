<script>
import Home from "./Home.vue"
import AboutUs from "./AboutUs.vue"
import GardenShopandNursery from './GardenShopandNursery.vue'
import Projects from "./Projects.vue"
import LandscapingServices from "./LandscapingServices.vue"
import ContactUs from "./ContactUs.vue"
</script>

<template>
      <v-app-bar color="#395A30" >
        <div class="navbar-item">
          <img src="/src/assets/images/logo.jpg" alt="Logo" class="logo1"> 
        </div>
        <div class="navbar-item flex-grow">
          <v-btn to="/" style="font-size: 25px" class="nav-link" color="white" dark> Home</v-btn>
        </div>
        <div class="navbar-item flex-grow">
          <v-btn to="/AboutUs"  style="font-size: 25px"class="nav-link" color="white" dark>About Us</v-btn>
        </div>
        <div class="navbar-item flex-grow">
          <v-btn to="/GardenShopandNursery" style="font-size: 25px" class="nav-link" color="white" dark>Garden Shop and Nursery</v-btn>
        </div>
        <div class="navbar-item flex-grow">
          <v-btn to="/Projects"style="font-size: 25px"  class="nav-link" color="white" dark>Projects</v-btn>
        </div>
        <div class="navbar-item flex-grow">
          <v-btn to="/LandscapingServices"style="font-size: 25px"  class="nav-link" color="white" dark>Landscaping Services</v-btn>
        </div>
        <div class="navbar-item flex-grow">
          <v-btn to="/ContactUs"style="font-size: 25px"  class="nav-link" color="white" dark>Contact Us</v-btn>
        </div>
      </v-app-bar>
  </template>
  
  <style>

.logo1 {
    padding: 5px;
    width: 80px;
    height: auto; 
    display: inline-block;
  }

  .nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: italiana, sans-serif;
    font-weight: bolder;
    font-size: 20px;
    width: 100%;

  }
  
  .navbar-item {
    margin: 0 15px; 
    position: relative;
  }
  
  .flex-grow {
    flex-grow: 1; 
  }

  </style>
  
  