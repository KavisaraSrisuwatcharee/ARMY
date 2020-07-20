<template>
  <div class="home">
    <Navbar />
    <Carousels />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Carousels from "../components/Carousels";
// @ is an alias to /src
export default {
  components: {
    Navbar,
    Carousels
  }
};
</script>
<style scoped>
.home {
  width: 100vw;
  height: 200vh;
}
</style>
