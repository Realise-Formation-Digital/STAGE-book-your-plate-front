import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home"
import Booking from "@/components/Booking"
import ContactUs from "@/components/ContactUs"
import Users from "@/components/admin/Users"
Vue.use(VueRouter)

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/Booking', component: Booking },
  { path: '/ContactUs', component: ContactUs },
  { path: '/Users', component: Users },
]


// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export default new VueRouter({
  mode: 'history',
  routes: routes // short for `routes: routes`
})
