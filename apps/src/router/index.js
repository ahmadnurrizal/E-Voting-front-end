import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Createpoll from "../views/CreatePoll.vue";
import Signup from "../views/SignUp.vue";
import Signin from "../views/SignIn.vue";
import Notlog from "../views/notLog.vue";
import settings from "../views/EditProfile.vue";
import EditPass from "../views/ChangePass.vue";
import Delete from "../views/DelAcc.vue";
import Help from "../views/HelpCenter.vue";
import Tutorials from "../views/Tutorials.vue";
import FAQs from "../views/FAQs.vue";
import Contact from "../views/Contact.vue";
import About from "../views/AboutUs.vue";
import Dashboard from "../views/Dashboard.vue";
import Poll from "../views/Poll.vue";

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
   {
      path: "/Help",
      name: "HelpCenter",
      component: Help,
   },
   {
      path: "/Help/Tutorials",
      name: "Tutorials",
      component: Tutorials,
   },
   {
      path: "/Help/FAQs",
      name: "FAQs",
      component: FAQs,
   },
   {
      path: "/About",
      name: "About-Us",
      component: About,
   },
   {
      path: "/Contact",
      name: "Contact",
      component: Contact,
   },
   {
      path: "/Dashboard",
      name: "dashboard",
      component: Dashboard,
   },
   {
      path: "/:user/Poll/:id",
      name: "Poll",
      component: Poll
   }
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
