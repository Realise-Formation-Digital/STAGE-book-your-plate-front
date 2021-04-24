<template>
  <div id="Header">
    <v-app-bar color="white" class="v-app-bar">
      <v-container class="NavContainer">
        <!-- logo Réalise -->
        <router-link to="/">
          <img
            id="logo"
            src="../../assets/logo-Réalise.svg"
            alt="logo"
          />
        </router-link>

        <!-- buttons-------------------------------------------------------------------------------->
        <div>
          <nav class="navbar navbar-expand-lg fixed-top row">

            <!-- Feedback -->
            <router-link
            class="btn router"
            to="/ContactUs"
            >
                    Feedback
            </router-link>

            <!-- Plats -->
               <router-link
            class="btn router"
            to="/Plates"
            >
                    Plats
            </router-link>

            <!-- Réservations -->
              <router-link
            class="btn router"
            to="/Bookings"
            >
                    Réservations
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

    <!-- Navigation Drawer -->
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
          
          <!-- Plates -->
          <v-list-item to="/Plates">
            <v-list-item-icon>
              <v-icon
              color="yellow darken-2"
              >mdi-noodles</v-icon>
            </v-list-item-icon>
            
            <v-list-item-title>
                <div>
                  <h1>Plats</h1>
                </div>
            </v-list-item-title>

          </v-list-item>
          
          <!-- Réservations -->
          <v-list-item to="/Bookings">
            <v-list-item-icon>
              <v-icon
              color="red"
              >mdi-cart-outline</v-icon>
            </v-list-item-icon>
            
            <v-list-item-title>
                <div>
                  <h1>Réservations</h1>
                </div>
            </v-list-item-title>

          </v-list-item>
          
          <!-- Feedback -->
          <v-list-item to="/ContactUs">
            <v-list-item-icon>
              <v-icon
              large
              role="img"
              color="blue darken-2"
              >
              mdi-message-text
              </v-icon>
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
  color: #b83030;
  background-color: #009db2;
  cursor: pointer;
  transition: 0.3s;
  color: white;
}

.btn {
  text-decoration: none;
  color: #032e5a;
  font-size: 20px;
  font-weight: 400;
  height: 70px;
  line-height: 35px;
  padding: 0px 21px;
  margin-top: 3px;
  padding: 15px 15px 15px 15px;
  margin-left: 20px;
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
