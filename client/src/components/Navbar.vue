<template>
  <div>
    <div class="nav">
      <div class="left-nav">
        <button>Home</button>
        <div class="line">
        </div>
        <button>About</button>
        <div class="line">
        </div>
        <button>Contract me</button>
       
      </div>
      <div class="right-nav">
         <v-icon size="50">fas fa-bars</v-icon>
      </div>
    </div>
    
  </div>
</template>

<script>

// @ is an alias to /src
export default {
    
};
</script>
<style scoped>
.home {
  margin: 0%;
  padding: 0%;
  height: 100vh;
  width: 100vw;
  /* height: 10vh;
  width: 100vw;
  background-color: whitesmoke;
  display: flex;
  justify-content: space-between;*/
}
.nav {
  /* margin: auto;
  padding: auto;
  height: 10%;
  width: 100%; */
  /* width: 100vw; */
  height: 15vh;
  background-color: whitesmoke;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left-nav{
  margin-right: 250px;
  padding-right: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left-nav button{
  margin-right: 100px;
}
.right-nav{
  margin-left: 500px;
}
.nav button{
  border: none;
  background: none;
  font-family: 'Amatic SC', cursive;
  font-size: 50px;
}
.nav .line{
    width: 2px;
    height: 50px;
    background-color:dimgray ;
    margin-right: 70px;
  
}
</style>
