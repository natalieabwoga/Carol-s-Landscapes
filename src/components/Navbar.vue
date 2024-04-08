<script>
import Home from "./Home.vue"
import Artists from "./Artists.vue"
import Exhibitions from "./Exhibitions.vue"
import OurStory from "./OurStory.vue"
import Shop from "./Shop.vue"
</script>

<template>
    <v-app-bar color="black" >
        <div>
            <v-btn to="/" color="#E8B9AB" dark >Home </v-btn>
        </div>
        <div>
            <v-btn to="/Artists" color="#ADBCA5" dark >Artists </v-btn>
        </div>
        <div>
            <v-btn to="/Exhibitions" color="#E09891" dark >Exhibitions </v-btn>
        </div>
        <div>
            <v-btn to="/OurStory" color="#ADBCA5" dark >OurStory </v-btn>
        </div>
        <div>
            <v-btn to="/Shop" color="#E8B9AB" dark >Shop </v-btn>
        </div>
        
</v-app-bar>
</template>