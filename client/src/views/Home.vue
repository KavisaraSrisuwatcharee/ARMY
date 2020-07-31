<template>
  <div class="home">
    <Navbar />
    <!-- <Carousels /> -->
    <v-container>
      <v-row>
        <v-col class="albumList" v-for="(data,index) in albums" :key="index" cols="4">
          <Album :data="data" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Carousels from "../components/Carousels";
import Album from "../components/Album";
// @ is an alias to /src
export default {
  data() {
    return {
      albums: [
        {
          name: "test1",
          img: "Photo/Mapof.jpg",
        },
        {
          name: "test2",
          img: "Photo/cool.jpeg",
        },
        {
          name: "test3",
          img: "Photo/face.jpg",
        },
        {
          name:"test4",
          img:"Photo/BTS-19.jpg",
        },
        {
          name:"test5",
          img:"Photo/skool.jpeg",
        },
        {
          name:"test6",
          img:"Photo/wings.webp",
        }
      ],
    };
  },
  components: {
    Navbar,
    Carousels,
    Album,
  },
};
</script>
<style scoped>
.home {
  width: 100vw;
  height: 100vh;
}
.albumList{
  padding: 5% 2%;
}
</style>