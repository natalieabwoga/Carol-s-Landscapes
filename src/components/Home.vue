<template>
  <div id="Home" class="container-wrapper">
    <div class="container">
      <p class="head">❀ Developing Distinctive Indoor & Outdoor Spaces with ❀ Creative Garden Inspired Ideas</p>
      <p class="body">
          <i class="fas fa-clock"></i> Open Monday-Friday from 9:00AM - 4:00PM
      </p>
            
      <div class="text-wrapper">
      <div class="right-text1">
        <i class="fas fa-map-marker-alt"></i>
        <p>Plant Nursery at No. 746A, Githunguri Road Estate Gate A, Githunguri Road, Kileleshwa.</p>
      </div>
      <img src="/src/assets/images/Home.jpg" class="home-image">
      <div class="left-text">
        <i class="fas fa-seedling"></i>
        <p>Garden Centre, LeafyGreen, along Kanjata Road, off James Gichuru Road, Lavington.</p>
      </div>
    </div>
  </div>
  </div>
</template>

<style>
.container {
  background-image: url('/src/assets/images/leafprintedited.jpg');
  margin: 0;
  padding: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}


.text-wrapper {
  display: flex;
  align-items: center;
}

.left-text,
.right-text1 {
  font-family: "Inria Serif", serif;
  font-weight: 700;
  font-size: 35px;
  flex: 1;
}

.head {
  font-family: "Inria Serif", serif;
  font-weight: 700;
  font-size: 58px;
  color: #000000;
}

.body {
  font-family: "Inria Serif", serif;
  font-weight: 700;
  font-size: 30px;
  color: #395A30;
  display: flex;
  align-items: center;
}

.body i {
  margin-right: 10px; 
}

.fas {
  color: #000;
}


</style>

  
  

  