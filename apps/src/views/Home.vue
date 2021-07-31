<template>
   <div class="body">
      <NavLog v-if="isLogin" />
      <Navbar v-else />
      <Hero v-if="isLogin" />
      <notLogged v-else />
      <Poll />
      <About-poll v-if="isLogin" />
      <notAbt v-else />
      <Features />
      <Footer />
   </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import NavLog from "@/components/NavLog.vue";
import Hero from "@/components/Herosection.vue";
import Poll from "@/components/Poll.vue";
import AboutPoll from "../components/About-poll.vue";
import Features from "../components/Features.vue";
import Footer from "../components/Footer.vue";

import notLogged from "../components/notlogHero.vue";
import notAbt from "../components/notlogAbt.vue";

import axios from "axios";

export default {
   name: "Home",
   components: {
      Navbar,
      NavLog,
      Hero,
      Poll,
      AboutPoll,
      Features,
      Footer,
      notLogged,
      notAbt,
   },
   data() {
      return {
         isLogin: false,
      };
   },
   created() {
      let token = localStorage.getItem("token");
      if (!token) {
         console.log("tidak ada token !");
         this.isLogin = false;
      } else {
         console.log("ada token");
         this.isLogin = true;
      }
   },
};
</script>
