<template>
   <div class="wrapper">
      <NavLog v-if="isLogin" />
      <Navbar v-else />
      <div class="wave-top"><div class="vec"></div></div>
      <div class="main">
         <div class="card">
            <div class="title">
               <h1>Help Center</h1>
            </div>
            <div class="body">
               <div class="side">
                  <sideHelp />
               </div>
               <div class="content">
                  <p class="p1">
                     Welcome to fingerVote’s help center. On the help center page, On the left side you will find various topics from guides for baginners. We try to cover as many topics as possible from the creation of the first poll to
                     the documentation of special features of fingerVote polls.
                  </p>
                  <p class="p2">
                     If you are new to fingervote, and you are confused about how to create a poll you can read the <span><router-link to="/Help/Tutorials" style="color: #1E6599; text-decoration: none;">Tutorials</router-link> </span> page
                  </p>
                  <p class="p3">
                     If you still have questions or need help, please contact our community on our <span><router-link to="/Contact" style="color: #1E6599; text-decoration: none;">Contact Us</router-link> </span> via email.
                  </p>
               </div>
            </div>
         </div>
      </div>
      <Footer />
   </div>
</template>

<script>
import NavLog from "@/components/NavLog.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "../components/Footer.vue";

import sideHelp from "../components/SideHelp.vue";

export default {
   name: "Help",
   components: {
      NavLog,
      Navbar,
      Footer,
      sideHelp,
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
   height: 558px;
   background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
   margin: 100px auto;
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
   height: 373px;
}

.body {
   display: flex;
}

.content {
   padding: 30px;
}

.p1,
.p2,
.p3 {
   font-family: "Roboto", sans-serif;
   font-size: 18px;
   margin-bottom: 30px;
}
</style>
