<template>
   <div class="body">
      <Navbar />
      <Hero />
      <Poll />
      <!-- <About-poll />
      <Features />
      <Footer /> -->
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
};
</script>
