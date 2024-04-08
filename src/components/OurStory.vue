<template>
  <div class="center">CSS</div>
  
  <div style="background-color: black;"
    div id = 'ourstory'>

    <v-card
    class="mx-auto my-8"
    max-width="500"
    height="500"
    image="https://i.pinimg.com/564x/f4/34/f8/f434f83096903815a922c9dc47108c8e.jpg"
    title=""
    theme="dark"
  ></v-card>

  <v-card
  color="black"
    class="mx-auto my-0"
    height="65vh"
    max-width="800"
  >
  
    <v-card-text>
      <div>
        Word of the Day
      </div>
      <p class="text-h4 text--primary">
        ar·tis.t·c·ult·u.re 
      </p>
      <p>adjective</p>
      <div class="text--primary">
        refers to the shared beliefs, values, practices, and traditions that characterize the community of individuals engaged in artistic pursuits.
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        variant="text"
        color="#E8B9AB"
        @click="reveal = true"
      >
        Learn More
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card height="100%"
      color="black"
        v-if="reveal"
        class="v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">
            Origin
          </p>
          <p>
"ArtistCulture was born out of a shared passion among a group of artists seeking to create a digital space that transcends artistic boundaries. Recognizing the need for a hub that celebrates creativity across various disciplines, the founders envisioned a platform where artists from around the globe could connect, showcase their work, and foster a vibrant community dedicated to the diverse and ever-evolving world of art." </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            variant="text"
            color="#E8B9AB"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
  </div>
</template>


<script>
  export default {
    data: () => ({
      reveal: false,
    }),
  }
</script>


