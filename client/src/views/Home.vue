<template>
  <div class="home">
    <Navbar />
    <!-- <Carousels /> -->
    <v-container>
    <div class="alb-1">
      <v-row>
      <div  v-for="(data,index) in albums" :key="index">
        <v-col style="backgroud-color:red" cols="4">

        <Album :data="data" />
        </v-col>
      </div>
        </v-row>
    </div>
    </v-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Carousels from "../components/Carousels";
import Album from "../components/Album";
// @ is an alias to /src
export default {
  data(){
    return {
    albums: [
      {
        name: "test1",
        img: "Mapof.jpg",
      },
      {
        name: "test2",
        img: "cool.jpeg",
      },
      {
        name: "test3",
        img: "face.jpg",
      },
    ]
  }},
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
.alb-1 {
  display: flex;
  flex-wrap: wrap;
}
</style>