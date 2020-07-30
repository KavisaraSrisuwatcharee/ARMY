<template>
    <div class="album">
        <img :src="data.img" width="100%" />
        <div class="title">
            <h3>{{ data.name }}</h3>
        </div>
    </div>
</template>
<script>
export default {
    props: ['data'],
};
</script>
<style scoped>
.album {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.title {
    padding: 5px;
    background-color: whitesmoke;
}
</style>
