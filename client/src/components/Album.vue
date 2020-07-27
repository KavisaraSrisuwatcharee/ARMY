<template>
 <div class="album">
      <v-container fluid>
        <v-row>
          <v-col cols="14">
            <v-row :align="alignment" :justify="justify" class="white" style="height: 300px;">
              <v-card id="Map" class="mx-auto" max-width="350">
                <v-img class="white--text align-end" height="350px" src="../assets/Mapof.jpg"></v-img>

                <v-card-title class="pb-0" size="20px">Map Of The Soul 7</v-card-title>

                <v-card-actions>
                  <v-btn color="orange" text>Buy</v-btn>

                  <v-btn color="orange" text>Sell</v-btn>
                </v-card-actions>
              </v-card>
              <!-- Album2 -->
              <v-card id="Map" class="mx-auto" max-width="350">
                <v-img class="white--text align-end" height="350px" src="../assets/face.jpg"></v-img>

                <v-card-title class="pb-0" size="20px">Face Yourself</v-card-title>

                <v-card-actions>
                  <v-btn color="orange" text>Buy</v-btn>

                  <v-btn color="orange" text>Sell</v-btn>
                </v-card-actions>
              </v-card>
              <!-- album3 -->
               <v-card id="Map" class="mx-auto" max-width="350">
                <v-img class="white--text align-end" height="350px" src="../assets/face.jpg"></v-img>

                <v-card-title class="pb-0" size="20px">Face Yourself</v-card-title>

                <v-card-actions>
                  <v-btn color="orange" text>Buy</v-btn>

                  <v-btn color="orange" text>Sell</v-btn>
                </v-card-actions>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>
<style scoped>
.album{
  margin: 20px;
}
</style>