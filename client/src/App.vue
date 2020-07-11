<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view />
    </div>
</template>
<script>
import axios from 'axios';
export default {
    async mounted() {
        console.log('inside mounted');
        const res = await axios.get('/api/test');
        console.log(res.data);

        const albums = await axios.get('/api/albumList');
        const id = albums.data[1]._id;
        const body = { id, number: 10 };
        const r = await axios.post('/api/album', body);
        console.log(r.data);
    },
};
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
