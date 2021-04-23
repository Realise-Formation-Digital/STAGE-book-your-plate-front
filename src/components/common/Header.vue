<template>
  <div id="Header">
    <v-app-bar color="white" class="v-app-bar">
      <v-container class="NavContainer">
        <!-- logo Réalise -->
        <router-link to="/">
          <img
            to="/"
            id="logo"
            src="../../assets/logo-Réalise.svg"
            alt="logo"
          />
        </router-link>

        <!-- buttons-------------------------------------------------------------------------------->
        <div>
          <nav class="navbar navbar-expand-lg fixed-top row">
            
              <router-link
                  class="router"
                  class-active="active"
                  to="/ContactUs"
                  exact
                >
                  <div class="btn">
                    Feedback
                  </div>
              </router-link>
              
          </nav>
        </div>
        <!--  Button test
          <div class="container Feedback">
            <router-link to="/ContactUs">
              <button 
              class="button type1">
                Feedback
              </button>
            </router-link>

            <router-link to="/Booking">
              <button 
              class="button type1 test">
                Test
              </button>
            </router-link>

          </div>
        -->
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <!-- Account button -->
            <div class="accountlogo">
              <v-btn to="/" icon color="black" v-bind="attrs" v-on="on">
                <v-icon>mdi-account</v-icon>
              </v-btn>
            </div>
          </template>

          <v-list>
            <LoginModal />
          </v-list>
        </v-menu>
      </v-container>
      <!-- Hamburger -->
      <v-app-bar-nav-icon
        class="Hamburger"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-if="drawer"
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

          <v-list-item to="/ContactUs">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            
            <v-list-item-title>
                <div>
                  <h1>Feedback</h1>
                </div>
            </v-list-item-title>

          </v-list-item>
          
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import LoginModal from "./LoginModal";

export default {
  name: "Header",
  components: {
    LoginModal,
  },
  data: () => ({
    drawer: false,
    group: null,
    dialog: false,
  }),
};
</script>

<style scoped>
/* nav Button */
nav .btn:hover,
nav .btn:active {
  background-color: #009db2;
  cursor: pointer;
  transition: 0.3s;
}

.router {
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-size: 25px;
  font-weight: 500;
  
}

.router:hover{
  color: white;
}

.btn {
  margin-top: 3px;
  padding: 15px 15px 15px 15px;
  border-radius: 2%;
}

.FeedbackIn{
  text-decoration: none;
  color: rgb(255, 255, 255);
  background-color: #009db2;
}

.v-app-bar {
  padding-top: 10px;
  padding-bottom: 75px;
}

.NavContainer {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

#logo {
  height: 40px;
  align-items: center;
  display: flex;
}

.accountlogo {
  align-items: center;
  display: flex;
}

.Hamburger .v-app-bar {
  display: flex;
}

@media (max-width: 768px) {
  .btn {
    display: none;
  }

  .test {
    display: none;
  }

  .NavContainer {
    display: flex;
  }

  #logo {
    margin-top: 4px;
    height: 40px;
  }
}

@media (min-width: 769px) {
  .Hamburger {
    display: none;
  }
}

.Feedback {
  text-align: center;
}

/* Buttons ----------------------------------------------------*/

@import url("https://fonts.googleapis.com/css?family=Raleway");
* {
  box-sizing: border-box;
}

.button {
  position: relative;
  padding: 1em 1.5em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 18px;
  margin: 1em 0.8em;
}
.button.type1 {
  color: #000000;
}
.button.type1.type1::after,
.button.type1.type1::before {
  content: "";
  display: block;
  position: absolute;
  width: 30%;
  height: 40%;
  border: 2px solid;
  transition: all 0.4s ease;
  border-radius: 2px;
}
/* border colors */
.button.type1.type1::after {
  bottom: 0;
  right: 0;
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-color: #735656;
  border-right-color: #566473;
}
.button.type1.type1::before {
  top: 0;
  left: 0;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-top-color: #566473;
  border-left-color: #566473;
}
.button.type1.type1:hover:after,
.button.type1.type1:hover:before {
  width: 100%;
  height: 100%;
}
</style>
