<template>
  <div class="home">
    <Navbar />
    <!-- <Carousels /> -->
    <Album/>
    
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Carousels from "../components/Carousels";
import Album from "../components/Album";
// @ is an alias to /src
export default {
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
  height: 200vh;
}
</style>
