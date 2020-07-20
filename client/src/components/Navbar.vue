<template>
  <div class="Navbar">
    <v-toolbar  extended extension-height="100">
      <v-btn icon>
        <v-icon size="30">mdi-magnify</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <v-toolbar-title style="font-size:30px">A R M Y</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Navbar"
};
</script>
<style scoped>
.Navbar {
  font-family: "Montserrat", sans-serif;
}
</style>
