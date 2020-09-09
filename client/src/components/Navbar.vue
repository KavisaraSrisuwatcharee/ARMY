<template>
  <div class="Navbar">
    <v-toolbar>
      <v-col cols="2"></v-col>
      <v-col cols="8" style="display:flex; justify-content:space-around;">
        <v-btn text x-large>A R M Y</v-btn>
        <div v-if="current_user==null">
          <a href="/auth/google">
            <v-btn icon>
              <v-icon size="30">mdi-account-multiple</v-icon>
            </v-btn>
          </a>
        </div>
        <div class="login" v-else>
          <p>Name :</p>
          <div class="name">{{current_user.name}}</div>
          <p>Money :</p>
          <div class="money">{{current_user.money}}</div>
          <v-btn icon style="padding:0px 10px">
            <v-icon size="30">mdi-cart</v-icon>
          </v-btn>
          <a href="/api/logout">Logout</a>
        </div>
      </v-col>
      <v-col cols="2"></v-col>
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
  methods: {},
};
</script>
<style scoped>
.Navbar {
  font-family: "Montserrat", sans-serif;
}
.login {
  display: flex;
  align-items: center;
  background-color: aquamarine;
}
.login p {
  padding-top: 16px;
  padding-right: 8px;
  padding-left: 8px;
}

</style>
