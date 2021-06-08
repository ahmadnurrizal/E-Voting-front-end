<template>
  <div class="home">
    <Navbar />
    <Hero />
    <Poll />
    <About-poll />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Herosection.vue";
import Poll from "@/components/Poll.vue";
import AboutPoll from '../components/About-poll.vue';



export default {
  name: 'Home',
  components: {
    Navbar,Hero,Poll,
    AboutPoll
    
  }
}
</script>
