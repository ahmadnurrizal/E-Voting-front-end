<template>
   <div class="wrapper">
      <NavLog v-if="isLogin" />
      <Navbar v-else />
      <div class="wave-top"><div class="vec"></div></div>
      <div class="main">
         <div class="card">
            <div class="title">
               <h1>Tutorials</h1>
            </div>
            <div class="body">
               <div class="side">
                  <sideHelp />
               </div>
               <div class="content">
                  isi Tutorials
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
   name: "Tutorials",
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
   height: 2381px;
   background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
}

h1,
h2,
h3,
p {
   color: #eaf5ff;
}

.title {
   border-bottom: 3px #bde0ff solid;
   margin: auto 30px;
}

.title h1 {
   text-align: left;
   margin: 30px auto 60px 10px;
}

.side {
   border-right: 3px #bde0ff solid;
   margin-top: 10px;
   height: 2196px;
}

.body {
   display: flex;
}
</style>
