<template>
  <div id="AboutUs" class="container-wrapper">
    <div class="container1">
      <p class="text">About</p>
      <img src="/src/assets/images/About Us Picture-modified.png" class="aboutimage">
      <div class="right-text">
        <p>Carol’s Landscapes was founded by Caroline Dimba-Abwoga in 2017</p>
      </div>
    </div>
    <div class="container2">
      <div class="dropdown" style="padding-right: 100px;">
        <button class="mission-button">Mission Statement</button>
        <div class="content">
          <li>☘ The key to our success is our commercial and residential clients.</li>
          <li>☘ We have grown into a full-scale landscape design and garden maintenance business through client referrals.</li>
          <li>☘ We strive to provide every client with the best personalized service to win confidence with high performance.</li>   
        </div>
      </div>
      <div class="dropdown" style="padding-right: 100px;">
        <button class="core-button">Core Values</button>
        <div class="content">
          <li>☘ Passion</li>
          <li>☘ Dedication</li>
          <li>☘ Integrity</li>
          <li>☘ Resourcefulness</li>
          <li>☘ Teamwork</li>   
        </div>
      </div>
      <div class="dropdown" style="padding-right: 100px;">
        <button class="vision-button">Vision Statement</button>
        <div class="content">
          <p>To create a sustainable & aesthetically pleasing landscape!</p>
          <p>Our environmental sustainability agenda includes the following:</p>
          <li>☘ Using indigenous plants wherever possible.</li>
          <li>☘ Creating gardens that attract pollinators such as birds, etc.</li>
          <li>☘ Growing organic food gardens (herbs, vegetables).</li>
          <li>☘ Reducing waste by composting and grasscycling.</li>
          <li>☘ Adding natural water features to serve as a drinking spots for birds.</li>
          <li>☘ Xeriscaping by using plants that are low maintenance and drought tolerant.</li>   
        </div>
      </div>

      <div class="v-card-container">
        <v-card class="custom-card" color="#86B98B">
          <v-card-text class="v-card1">
            <ul style="line-height: 1.0;">
              <li style="font-size: 30px; margin-bottom: 20px; font-weight: bold;">☘ We specialize in landscape design & implementation, water features and garden/lawn care & maintenance.</li>
              <li style="font-size: 30px; margin-bottom: 20px; font-weight: bold ">☘ Our customers rely on us to design, install, maintain and enhance the interior and exterior appearances for commercial & residential spaces.</li>
              <li style="font-size: 30px; margin-bottom: 20px; font-weight: bold">☘ Our knowledge & technical capabilities allow us to create unique, green spaces.</li>
              <li style="font-size: 30px; margin-bottom: 20px; font-weight: bold">☘ We offer personal and professional services to meet customer needs.</li>
              <li style="font-size: 30px; margin-bottom: 20px; font-weight: bold ">☘ Fulfilling customer needs through customized concepts and designs is our greatest priority.</li>
            </ul>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<style>


.container1 {
  background-image: url('/src/assets/images/leafprintedited.jpg');
  margin: 0;
  padding: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  padding-left: 50px;
  flex: 1;
}

.aboutimage {
  width: 65%; 
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

.right-text {
  align-self: flex-start;
  padding-left: 3px;
  font-family: 'Inria Serif', serif;
  font-weight: 700;
}

.container2 {
  background-image: url('/src/assets/images/leafprintedited.jpg');
  margin: 0;
  padding: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
  display: flex;
  width: 78%;
  justify-content: center;
  flex-wrap: wrap; 
}

.v-card-container {
  width: 80%; 
  margin-top: 20px;
  margin-left: -50px;
   
}

.custom-card {
  width: 1000px;
  margin-bottom: 40px;
  margin-top: 180px; 
  margin-left: 40px;
}

.v-card1 {
  font-family: 'Inria Serif', serif;
  font-weight: 700;
  font-size: 20px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown button {
  
  color: rgb(0, 0, 0);
  font-family: italiana, sans-serif;
  font-size: 35px;
  font-weight: 900;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  margin: 20px;
  margin-left: 20px;
}

.mission-button{
  background-color: #86B98B;
}

.core-button{
  background-color: #395A30;
}

.vision-button{
  background-color: #4D9558;
}

.dropdown p,
.dropdown li {
  display: block;
  color: black;
  font-family: italiana, sans-serif;
  font-size: 25px;
  font-weight: 900;
  text-decoration: none;
  padding: 10px 15px;
}

.dropdown .content {
  display: none;
  position: absolute;
  background-color: hsl(0, 0%, 95%);
  min-width: 100px;
  box-shadow: 2px 2px 5px hsla(0, 0%, 0%, 0.8);
  z-index: 999;
}

.dropdown:hover .content {
  display: block;
}

.dropdown:hover button {
  background-color: hsl(0, 0%, 70%);
}

.dropdown a:hover {
  background-color: hsl(0, 0%, 90%);
}
</style>

  
  
  
  
  
  


  

