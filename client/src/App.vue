<template>
 <div>
   <router-view/>
 </div>
</template>

<script>

export default {
<<<<<<< HEAD
    async mounted() {
        let chk = false;
        if (!chk) return;
        console.log('inside mounted');
        const res = await axios.get('/api/test');
        console.log(res.data);

        const albums = await axios.get('/api/albumlist');
        const id = albums.data[1]._id;
        const body = { id, number: 12 };
        const r = await axios.post('/api/buy/album', body);
        // const r = await axios.post('/api/sell/album', body);
        console.log(r.data);
    },
=======
 

  data: () => ({
    //
  }),
>>>>>>> 4a519450c71bc8805c135a159e3baa98efef1e4a
};
</script>
