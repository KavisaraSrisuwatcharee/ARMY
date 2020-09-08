<template>
  <div class="Navbar">
    <v-toolbar>
      <v-col cols="3"></v-col>
      <v-col cols="6" style="display:flex; justify-content:space-around;">
        <v-btn icon>
          <v-icon size="30">mdi-cart</v-icon>
        </v-btn>
        <v-btn text x-large>A R M Y</v-btn>
        <div v-if="current_user==null">
          <a href="/auth/google">
            <v-btn icon>
              <v-icon size="30">mdi-account-multiple</v-icon>
            </v-btn>
          </a>
        </div>
        <div v-else>
          {{current_user.name}}
          {{current_user.money}}
          <a href="/api/logout">Logout</a>
        </div>
      </v-col>
      <v-col cols="3"></v-col>
    </v-toolbar>
  </div>
</template>

<script>
import axios from "../axios/axios.js";
// @ is an alias to /src
export default {
  name: "Navbar",
  data() {
    return {
      current_user: null,
    };
  },
  mounted() {
    axios.get("/current_user").then((response) => {
      this.current_user = response.data;
      console.log(response.data);
    });
  },
  methods: {
  },
};
</script>
<style scoped>
.Navbar {
  font-family: "Montserrat", sans-serif;
}
</style>
