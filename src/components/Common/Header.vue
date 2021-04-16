<template>
  <div>
    <v-app-bar
        color="deep-purple"
        dark
    >

      <v-toolbar-title>
        <v-img
          to="/"
          class="logo"
          src="../../assets/logo-Réalise.svg"
          alt="logo"
      />
      </v-toolbar-title>
      <v-spacer/>

      <!-- About us button -->
      <v-btn
          id="Aboutus"
          to="/"
          color="blue-grey"
          class="ma-2 white--text"
          @click="loader = 'loading3'"
      >
        About us
      </v-btn>

      <!-- Feedback button -->
      <v-btn
          id="Feedback"
          to="/"
          color="blue-grey"
          class="ma-2 white--text"
          @click="loader = 'loading3'"
      >
        <div class="router">Feedback</div>
      </v-btn>

      <!-- Account button -->
      <v-menu class="accountlogo" bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              to="/"
              icon color="yellow"
              v-bind="attrs"
              v-on="on">
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>
              <router-link to="/">
                Log In
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <router-link to="/">
                Sign up
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- Hamburger -->
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        right
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
#Header {
  background-color: #94969a;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;

}

.container1 {
  display: flex;
  padding-left: 20px;
  width: 100%;
}

.container2 {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.logo {
  width: 144px;
}


@media (max-width: 700px) {
  #Header {
    background-color: #032e5a;
  }

  .accountlogo {
    display: none;
  }

  #Aboutus {
    display: none;
  }

  #Feedback {
    display: none;
  }
}
</style>
