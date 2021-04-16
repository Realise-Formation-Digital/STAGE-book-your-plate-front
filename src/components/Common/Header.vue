<template>
  <div id="Header">
    <v-app-bar color="#94969a" class="v-app-bar">
      <v-toolbar-title>
        <!-- logo Réalise -->
        <router-link to="/">
          <img
            to="/"
            id="logo"
            src="../../assets/logo-Réalise.svg"
            alt="logo"
          />
        </router-link>
      </v-toolbar-title>

      <v-container class="NavContainer">
        <!-- About us button -->
        <v-btn
          id="Aboutus"
          to="/"
          color="black"
          class="ma-2 white--text"
          @click="loader = 'loading3'"
        >
          About us
        </v-btn>

        <!-- Feedback button -->
        <v-btn
          id="Feedback"
          to="/"
          color="black"
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
              icon color="black"
              v-bind="attrs"
              v-on="on">
              <v-icon>mdi-account</v-icon>
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

      </v-container>
      <!-- Hamburger -->
        <v-app-bar-nav-icon class="Hamburger" @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      class="v-navigation-drawer"
      v-model="drawer"
      absolute
      temporary
      right
      dark
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="dark--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Test</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Test</v-list-item-title>
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
.NavContainer {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}

#logo {
  width: 144px;

}

.Hamburger

.v-app-bar {
  display: flex;
}

@media (max-width: 780px) {
  #Header {
    background-color: #032e5a;
  }

  #Aboutus {
    display: none;
  }

  #Feedback {
    display: none;
  }
}
</style>
