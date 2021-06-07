<template>
  <div class="home">
    <Navbar />
    <div id="hero-section">
      <Hero />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Herosection.vue";



export default {
  name: 'Home',
  components: {
    Navbar,Hero
    
  }
}
</script>
