import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Createpoll from "../views/CreatePoll.vue";
import Signup from "../views/SignUp.vue";
import Signin from "../views/SignIn.vue";
import Notlog from "../views/notLog.vue";
import Profile from "../views/Profile.vue";

const routes = [
   {
      path: "/",
      name: "Home",
      component: Home,
   },
   {
      path: "/Auth",
      name: "Notlog",
      component: Notlog,
   },
   {
      path: "/CreatePoll",
      name: "Createpoll",
      component: Createpoll,
   },
   {
      path: "/SignIn",
      name: "SignIn",
      component: Signin,
   },
   {
      path: "/SignUp",
      name: "SignUp",
      component: Signup,
   },
   {
      path: "/Profile",
      name: "Profile",
      component: Profile,
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
