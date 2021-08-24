<template>
   <div class="wrapper">
      <NavLog v-if="isLogin" />
      <Navbar v-else />
      <div class="wave-top"><div class="vec"></div></div>
      <div class="main">
         <div class="card">
            <div class="top">
               <h1>Discover Polls</h1>
               <h3>You can find lots of pre-made polls</h3>
               <input type="text" placeholder="search.." />
            </div>
            <div class="trending-poll"></div>
            <div class="new-poll"></div>
         </div>
      </div>
      <Footer />
   </div>
</template>

<script>
   import Navbar from "@/components/Navbar.vue";
   import NavLog from "@/components/NavLog.vue";
   import Footer from "../components/Footer.vue";

   import axios from "axios";
   export default {
      name: "Discover",
      components: {
         Navbar,
         NavLog,
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
            this.isLogin = false;
         } else {
            this.isLogin = true;
         }
      },
   };
</script>

<style scoped>
   @import url("https://fonts.googleapis.com/css2?family=Kanit:wght@500;600&family=Roboto&display=swap");

   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
   }

   .wave-top {
      padding-top: 60px;
   }

   .vec {
      padding-top: 200px;
      padding-bottom: 170px;
      background-image: url("../../public/img/vector/signup-wave.svg");
      background-size: cover;
      background-repeat: no-repeat;
   }

   .wrapper {
      background-color: #eaf5ff;
   }

   .card {
      width: 948px;
      height: 939px;
      background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
      margin: 100px auto;
      padding: 30px 30px 60px;
   }
</style>
