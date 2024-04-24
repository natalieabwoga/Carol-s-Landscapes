<template>
  <div id="Projects" class="container-wrapper2">
    <p class="Projects">Projects</p>
    <v-carousel class="carousel" cycle hide-delimiter-background :interval="4000" style="height: 100vh;">
      <v-carousel-item v-for="(image, index) in imageList" :key="index">
        <div class="carousel-item">
          <img :src="image" :alt="'Project ' + (index + 1)" style="max-height: 100vh;">
          <div class="carousel-description">
            <div class="carousel-description-text">{{ getTextBoxContent(index) }}</div>
          </div>
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
      ]
    };
  },
  methods: {
    getTextBoxContent(index) {
      if (index === 0) {
        return "Team Carol's Landscapes";
      } else if (index === 1) {
        return "Succulent garden 🌵 with concrete walkway pavers";
      } else if (index === 12) {
        return "Eco-friendly screening done using Bamboo and Italian Cypress Trees and Lemon Cypress Shrubs";
      } else if (index === 2) {
        return "Garden swing seat on lush arabic lawn grass";
      } else if (index === 3) {
        return "Backyard garden with meditation garden bench";
      } else if (index === 4) {
        return "Beautiful pemba lawn grass with natural stone firepit";
      } else if (index === 5) {
        return "Balcony garden with hanging and potted ground plants";
      } else if (index === 6) {
        return "Patio with screening snake plants in concrete troughs";
      } else if (index === 7) {
        return "Balcony garden with potted Areca Palms";
      } else if (index === 8) {
        return "Patio Garden";
      } else if (index === 9) {
        return "Balcony garden with potted rosemary shrubs";
      } else if (index === 10) {
        return "Arbor with aesthetic pots";
      } else if (index === 11) {
        return "Garden Gazebos";
      } else if (index === 12) {
        return "Bamboo screen garden";
      } else if (index === 13) {
        return "Boutique hotel garden";
      } else if (index === 14) {
        return "Boutique hotel garden";
      } else if (index === 15) {
        return "Patio garden";
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
  padding-left: 30px;
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
  padding-top: 10px;
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
  left: 10px;
  bottom: 20px;
  padding: 10px;
  box-sizing: border-box;
}

.carousel-description-text {
  color: #ffffff;
  font-family: 'Inria Serif', serif;
  font-weight: 900;
  font-size: 30px;
  background: #395a30;
  border-radius: 5px;
  padding: 10px;
}

.carousel-item img {
  margin-top: 100px;
  height: 1000px;
  padding-bottom: 200px; 
}

</style>









