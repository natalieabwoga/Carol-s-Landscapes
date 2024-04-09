<script>
import Home from "./Home.vue"
import AboutUs from "./AboutUs.vue"
import Projects from "./Projects.vue"
import LandscapingServices from "./LandscapingServices.vue"
import ContactUs from "./ContactUs.vue"
</script>

<template>
    <v-app>
      <v-app-bar color="#395A30" dense>
        <div class="navbar-item">
          <img src="/src/assets/images/logo.jpg" alt="Logo" class="logo"> 
        </div>
        <div class="navbar-item flex-grow">
          <v-btn to="/" class="nav-link" color="black" dark> Home</v-btn>
        </div>
        <div class="navbar-item flex-grow">
          <v-btn to="/AboutUs" class="nav-link" color="black" dark>About Us</v-btn>
        </div>
        <div class="navbar-item flex-grow">
          <v-btn to="/Projects" class="nav-link" color="black" dark>Projects</v-btn>
        </div>
        <div class="navbar-item flex-grow">
          <v-btn to="/LandscapingServices" class="nav-link" color="black" dark>Landscaping Services</v-btn>
        </div>
        <div class="navbar-item flex-grow">
          <v-btn to="/ContactUs" class="nav-link" color="black" dark>Contact Us</v-btn>
        </div>
      </v-app-bar>
    </v-app>
  </template>
  
  <style>

  .nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: italiana, sans-serif;
    font-weight: bolder;
    font-size: 20px;
    width: 100%;

  }
  
  .logo {
    width: 60px; 
    margin-right: 10px; 
    margin-bottom: -10px; 
  }
  
  .navbar-item {
    margin: 0 15px; 
  }
  
  .flex-grow {
    flex-grow: 1; 
  }
  </style>
  
  