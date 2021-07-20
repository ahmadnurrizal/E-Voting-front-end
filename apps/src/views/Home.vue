<template>
   <div class="body">
      <Navbar v-if="isLogin" />
      <!-- <Navbar2 v-else="isLogin" /> -->
      <Hero />
      <Poll />
      <About-poll />
      <Features />
      <Footer />
   </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Herosection.vue";
import Poll from "@/components/Poll.vue";
import AboutPoll from "../components/About-poll.vue";
import Features from "../components/Features.vue";
import Footer from "../components/Footer.vue";

import axios from "axios";

export default {
   name: "Home",
   components: {
      Navbar,
      Hero,
      Poll,
      AboutPoll,
      Features,
      Footer,
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
