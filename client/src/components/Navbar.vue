<template>
  <div class="Navbar">
    <v-toolbar>
      <v-col cols="3"></v-col>
      <v-col cols="6" style="display:flex; justify-content:space-around;">
        <v-btn icon>
          <v-icon size="30">mdi-cart</v-icon>
        </v-btn>
        <v-btn text x-large>A R M Y</v-btn>
         <a href="/auth/google">
          <v-btn icon>
            <v-icon size="30">mdi-account-multiple</v-icon>
          </v-btn>
        </a> 
      </v-col>
      <v-col cols="3"></v-col>
    </v-toolbar>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Navbar",
};
</script>
<style scoped>
.Navbar {
  font-family: "Montserrat", sans-serif;
}
</style>
