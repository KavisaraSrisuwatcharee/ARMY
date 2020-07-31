<template>
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
  
</template>
<script>
export default {
  props: ["data"],
};
</script>
<style scoped>
.album {
}
</style>