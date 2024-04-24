<template>
  <div id="Projects" class="container-wrapper2">
    <p class="Projects">Projects</p>
    <v-carousel class="carousel" cycle hide-delimiter-background :interval="4000" style="height: 800px;">
      <v-carousel-item v-for="(image, index) in imageList" :key="index">
        <div class="carousel-item">
          <img :src="image" :alt="'Project ' + (index + 1)" style="max-height: 40%;">
          <div class="carousel-description">{{ getTextBoxContent(index) }}</div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageList: [
        "/src/assets/images/Project.png",
        "/src/assets/images/Project1.jpg",
        "/src/assets/images/Project2.jpg",
        "/src/assets/images/Project3.jpg",
        "/src/assets/images/Project4.jpg",
        "/src/assets/images/Project5.jpg",
        "/src/assets/images/Project6.jpg",
        "/src/assets/images/Project7.jpg",
        "/src/assets/images/Project8.jpg",
        "/src/assets/images/Project9.jpg",
        "/src/assets/images/Project10.jpg",
        "/src/assets/images/Project16.jpg",
        "/src/assets/images/Project17.jpg",
        "/src/assets/images/Project18.jpg",
        "/src/assets/images/Project19.jpg",
        "/src/assets/images/Project20.jpg",
        "/src/assets/images/Project21.jpg"
      ]
    };
  },
  methods: {
    getTextBoxContent(index) {
      if (index === 0) {
        return "Our Team";
      } else if (index === 1) {
        return "Functional & Aesthetic walkway";
      } else if (index === 12) {
        return "Eco-friendly screening done using Bamboo and Italian Cypress Trees and Lemon Cypress Shrubs";
      }
      else {
        return "Project " + index;
      }
    }
  }
};
</script>

<style>
.container-wrapper2 {
  padding-top: 70px;
  background-image: url('/src/assets/images/leafprintedited.jpg');
  margin: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
}

.Projects {
  font-family: italiana, sans-serif;
  font-weight: 700;
  font-size: 80px;
  color: #395a30;
  text-align: left;
  margin-left: 20px;
}

.carousel {
  margin-bottom: 30px;
  padding-top: 50px;
}

.v-carousel-item {
  align-items: center;
  justify-content: center;
  text-align: center;
}

.carousel-item {
  position: relative;
}

.carousel-description {
  position: absolute;
  top: 10px; 
  left: 30px; 
  color: #ffffff;
  padding: 10px;
  box-sizing: border-box;
  font-family: 'Inria Serif', serif;
  font-weight: 900;
  font-size: 30px;
  background: #395a30; 
  border-radius: 5px; 
}
</style>




