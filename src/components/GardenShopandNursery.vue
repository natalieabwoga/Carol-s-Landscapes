<template>
  <div id="GardenShopandNursery" class="container-wrapper2">
    <div class="section">
      <p class="GardenShop">Garden Shop</p>
      <div class="image-container">
        <img src="/src/assets/images/Placeholder.png" class="image">
      </div>
      <v-card class="custom-card2" color="#395A30">
        <v-card-text class="v-card2">
          <ul style="font-size: 30px; font-family: 'Inria Serif', serif; line-height: 1.0;">
            <li style="margin-bottom: 20px; font-weight: bold; color: black;">LeafyGreen Garden Shop is a garden centre located at Bwibo Mall off James Gichuru Road along Muthangari Drive, Lavington. </li>
            <li style="margin-bottom: 20px; font-weight: bold; color: black;">LeafyGreen Garden Shop which is affiliated to Carol's Landscapes, sells plants, plant/garden accessories and related products as its primary business. </li>
            <li style="margin-bottom: 20px; font-weight: bold; color: black;">All plants sold at LeafyGreen Garden Shop are from the specialist plant nurseries of Carol's Landscapes.</li>
          </ul>
        </v-card-text>
      </v-card>
    </div>

    <div class="section">
      <p class="Nursery">Nursery</p>
      <div class="image-container">
        <img src="/src/assets/images/Placeholder.png" class="image">
      </div>
      <v-card class="custom-card3" color="#4D9558">
        <v-card-text class="v-card3">
          <ul style="font-size: 30px; font-family: 'Inria Serif', serif; line-height: 1.0;">
            <li style="margin-bottom: 20px; font-weight: bold; color: black;">Discover Carol's Landscapes Plant Nursery nestled at No. 746A, Githunguri Road Estate Gate A, along the picturesque Githunguri Road in Kileleshwa. Our tranquil oasis awaits, providing a verdant escape amidst the hustle and bustle of city life. Explore our diverse array of botanical treasures, thoughtfully curated to flourish in the unique climate of Nairobi. Visit us today and let the beauty of nature inspire your gardening journey. </li>
          </ul>
        </v-card-text>
      </v-card>
    </div>

  </div>
</template>

<style>
  .GardenShop {
    font-family: italiana, sans-serif;
    font-weight: 700;
    font-size: 80px;
    color: #395a30;
    text-align: center;
    margin-left: 20px;
  }

  .Nursery {
    font-family: italiana, sans-serif;
    font-weight: 700;
    font-size: 80px;
    color: #395a30;
    text-align: center;
    margin-left: 20px;
  }

  .image-container {
    height: 200px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-bottom: 100px;
    margin: 0 auto; 
  }

  .image {
    max-width: 300px; /* Ensure the image fits within its container */
    max-height: 300px;
    padding: 60px; /* Ensure the image fits within its container */
  }

  .custom-card2,
  .custom-card3 {
    width: 780px;
    height: auto; /* Change height to auto to accommodate variable content */
    margin: 0 auto; /* Center the cards horizontally */
    background-color: transparent; /* Remove background color */
    position: relative; /* Change position to relative */
  }

  .section {
    text-align: center;
    margin-bottom: 70px; /* Add margin bottom to create space between sections */
  }
</style>

  

  
  
 
  