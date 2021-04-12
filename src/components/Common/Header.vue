<template>
  <div id="Header">
    <div class="container1">
      <!-- Logo -->
      <div>
        <router-link to="/">
          <img class="logo" src="../../assets/logo.png" alt="logo" />
        </router-link>
      </div>
    </div>
    <div class="container2">
      <!-- Navigation -->
      <ul class="Navigation">
        <router-link to="/">
          <div class="router">About us</div>
        </router-link>

        <router-link to="/">
          <div class="router">login</div>
        </router-link>

        <router-link to="/">
          <div class="router">Feedback</div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
#Header {
  background-color: #94969a;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  align-items: center;
  
  
  width: 100%;
}

.container1 {
}

.container2 {
  width: 50%;
}

.logo {
  width: 50%;
}

.Navigation {
  display: flex;

  justify-content: space-evenly;
}

.router {
  color: black;
}
</style>
