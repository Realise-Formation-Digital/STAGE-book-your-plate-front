<template>
  <div id="Home">
   <div class="Home">
    <img class="réalisebackground" src="../assets/home-colors-Réalise.png">

    <img class="cafet" src="../assets/27.jpg">
   </div>  
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    drawer: false,
    group: null,
  }),
  components: {},
};
</script>

<style scoped>
#Home{
  background-color: red;
  
}

.logo{
  width: 144px;
}


.Home{
  display: flex;
  

}

.réalisebackground{
    background-image: url(../assets/home-colors-Réalise.png);
    background-size: auto 50%;
    position: absolute;
    display: flex;
    
}

.cafet{
  display: flex;
  position: unset;
  height: 462px;
  width: 90%;
  margin-left: 200px;
  
}
</style>
