<template>
  <div class="Navbar">
    <v-toolbar>
      <v-col cols="8">
        <v-btn icon>
          <v-icon size="30">mdi-magnify</v-icon>
        </v-btn>
        
        <v-btn text x-large>A R M Y</v-btn>
        
        <v-btn icon>
          <v-icon size="30">mdi-dots-vertical</v-icon>
        </v-btn>
      </v-col>
      <!-- <v-btn icon>
      <v-icon size="30">mdi-magnify</v-icon>
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn text x-large>A R M Y</v-btn>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon size="30">mdi-dots-vertical</v-icon>
      </v-btn>-->
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
