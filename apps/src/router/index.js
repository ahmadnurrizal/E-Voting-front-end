import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Createpoll from "../views/CreatePoll.vue";
import Signup from "../views/SignUp.vue";
import Signin from "../views/SignIn.vue";
import Notlog from "../views/notLog.vue";
import settings from "../views/EditProfile.vue";
import EditPass from "../views/ChangePass.vue";
import Delete from "../views/DelAcc.vue";

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
      path: "/Settings",
      name: "settings",
      component: settings,
   },
   {
      path: "/Settings/Password",
      name: "EditPass",
      component: EditPass,
   },
   {
      path: "/Settings/DeleteAccount",
      name: "DeleteAcc",
      component: Delete,
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
