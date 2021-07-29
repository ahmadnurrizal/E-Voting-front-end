<template>
   <div class="wrapper">
      <NavLog v-if="isLogin" />
      <Navbar v-else />
      <div class="wave-top"><div class="vec"></div></div>
      <div class="main">
         <div class="card">
            <h1>FAQs</h1>
            <div class="body">
               <sideHelp />
               <div class="content">
                  isi FAQs
               </div>
            </div>
         </div>
      </div>
      <Footer />
   </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import NavLog from "@/components/NavLog.vue";
import Footer from "../components/Footer.vue";

import sideHelp from "../components/SideHelp.vue";

export default {
   name: "FAQs",
   components: {
      Navbar,
      NavLog,
      Footer,
      sideHelp,
   },
   data() {
      return {
         isLogin: false,
      };
   },
   async created() {
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
   height: 980px;
}

.body {
   display: flex;
}
</style>
