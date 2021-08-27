<template>
   <div class="wrapper">
      <Navbar />
      <div class="wave-top"><div class="vec"></div></div>

      <div class="main">
         <div class="card">
            <h1>Youre not logged!</h1>
         </div>
      </div>
      <Footer />
   </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
   name: "Notlog",
   components: {
      Navbar,
      Footer,
   },
};
</script>

<style scoped>
* {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
}

.wave-top {
   padding-top: 60px;
}

.vec {
   padding-top: 150px;
   padding-bottom: 170px;
   background-image: url("../../public/img/vector/signup-wave.svg");
   background-size: cover;
   background-repeat: no-repeat;
}

.wrapper {
   background-color: #eaf5ff;
}

.main {
   padding: 80px 20px;
}

.card {
   background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
   width: 470px;
   height: 200px;
   border: none;
   border-radius: 10px;
   box-shadow: 0 20px 26px rgba(54, 37, 37, 0.2);
   text-align: center;
   padding: 60px;
}

h1 {
   font-size: 32px;
   color: #eaf5ff;
}
</style>
