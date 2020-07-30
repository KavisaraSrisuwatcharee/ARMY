<template>
    <div class="home">
        <Navbar />
        <v-container>
            <v-row>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    v-for="(data, index) in albums"
                    :key="index"
                >
                    <Album :data="data"></Album>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Carousels from '../components/Carousels';
import Album from '../components/Album';
// @ is an alias to /src
export default {
    data() {
        return {
            albums: [
                {
                    name: 'test1',
                    img: 'Mapof.jpg',
                },
                {
                    name: 'test2',
                    img: 'cool.jpeg',
                },
                {
                    name: 'test3',
                    img: 'face.jpg',
                },
                {
                    name: 'test4',
                    img: 'face.jpg',
                },
            ],
        };
    },
    components: {
        Navbar,
        Carousels,
        Album,
    },
};
</script>
<style scoped></style>
