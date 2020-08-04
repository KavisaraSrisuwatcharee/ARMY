<template>
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
</template>
<script>
import axios from 'axios';
export default {
    props: ['data'],
};
</script>
<style scoped>
.album {
}
</style>
