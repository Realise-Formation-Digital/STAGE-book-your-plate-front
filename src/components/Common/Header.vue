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
      <div class="Navigation">
        <router-link to="/">
          <h2 class="router">About us</h2>
        </router-link>

        <router-link to="/">
          <h2 class="router">login</h2>
        </router-link>

        <router-link to="/">
          <h2 class="router">Feedback</h2>
        </router-link>
      </div>
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
  vertical-align: middle;
  position: fixed;
  width: 100%;
  top: 0%;
}

.container1 {}

.container2 {
  width: 50%;
}

.logo {
  width: 50%;
}

.Navigation{
  display: flex;

  justify-content: space-evenly;
}

.router {
  color: black;
}
</style>
