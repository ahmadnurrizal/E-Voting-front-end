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
import Result from "../views/Result.vue";
import Aftervote from "../views/AfterVote.vue";
import ForgotPass from "../views/ForgotPass.vue";
import ResetPass from "../views/ResetPass.vue";
import Discover from "../views/Discover.vue";
import EditPoll from "../views/EditPoll.vue";

import pageNotFound from "../views/pageNotFound.vue";

const routes = [
   {
      path: "/",
      name: "Home",
      component: Home,
   },
   {
      path: "/Auth",
      name: "Uncredential User",
      component: Notlog,
   },
   {
      path: "/CreatePoll",
      name: "Create poll",
      component: Createpoll,
   },
   {
      path: "/SignIn",
      name: "Sign In",
      component: Signin,
   },
   {
      path: "/SignUp",
      name: "Sign Up",
      component: Signup,
   },
   {
      path: "/Settings",
      name: "Settings",
      component: settings,
   },
   {
      path: "/Settings/Password",
      name: "Edit Password",
      component: EditPass,
   },
   {
      path: "/Settings/DeleteAccount",
      name: "Delete Account",
      component: Delete,
   },
   {
      path: "/Help",
      name: "Help Center",
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
      name: "About Us",
      component: About,
   },
   {
      path: "/Contact",
      name: "Contact",
      component: Contact,
   },
   {
      path: "/Dashboard",
      name: "Dashboard",
      component: Dashboard,
   },
   {
      path: "/Poll/:id",
      name: "Poll",
      component: Poll,
   },
   {
      path: "/Poll/:id/result",
      name: "Result",
      component: Result,
   },
   {
      path: "/Poll/:id/voted",
      name: "After vote",
      component: Aftervote,
   },
   {
      path: "/forgot-password",
      name: "Forgot Password",
      component: ForgotPass,
   },
   {
      path: "/api/v1/reset-password",
      name: "Reset Password",
      component: ResetPass,
   },
   {
      path: "/Discover",
      name: "Discover",
      component: Discover,
   },
   {
      path: "/edit/:id",
      name: "Edit Poll",
      component: EditPoll,
   },
   {
      path: "/:pathMatch(.*)*",
      name: "404 NOT FOUND",
      component: pageNotFound,
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

router.beforeEach((to, from, next) => {
   document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`;
   next();
});

export default router;
