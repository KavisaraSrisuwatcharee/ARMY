<template>
<<<<<<< HEAD
    <div class="album">
        <v-card max-width="350">
            <v-img
                class="white--text align-end"
                height="350px"
                :src="data.img"
            ></v-img>

            <v-card-title class="pb-0" size="20px">{{
                data.name
            }}</v-card-title>

            <v-card-actions>
                <v-btn color="orange" text>Buy</v-btn>

                <v-btn color="orange" text>Sell</v-btn>
            </v-card-actions>
        </v-card>
    </div>
=======
    <v-card class="mx-auto album">
      <v-row>
        <v-col :cols="12">
        <v-img class="white--text align-end" width="100%" :src="data.img"></v-img>
        </v-col>
        <v-col :cols="12">
          <div class="pb-0" size="20px">{{data.name}}></div>
        </v-col>
        <v-col :cols="12">
          <v-btn color="orange" text>Buy</v-btn>

          <v-btn color="orange" text>Sell</v-btn>
        </v-col>
      </v-row>
    </v-card>
  
>>>>>>> a765701b9a27c43e6833d70442970e2c5441a5f6
</template>
<script>
import axios from 'axios';
export default {
<<<<<<< HEAD
    props: ['data'],
=======
  props: ["data"],
>>>>>>> a765701b9a27c43e6833d70442970e2c5441a5f6
};
</script>
<style scoped>
.album {
}
</style>
