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
                  <h2>How To Create Poll ?</h2>
                  <p>On this tutorials page, we will tell you how to create a poll and how to do a poll</p>
                  <div class="step">
                     <h3>Step 1 : Fill out the form</h3>
                     <img src="" alt="" />
                     <p>in this step, you can give a title, a description of the poll and give several answer options, you can also add a photo for the answer.</p>
                  </div>
                  <div class="step">
                     <h3>Step 2 : Choose settings</h3>
                     <img src="" alt="" />
                     <p>
                        You can add settings to your poll, you can set your poll to private by selecting "Only via direct link", you can also make your poll multiple choices by selecting "Allow multiple choices", you must add a deadline to
                        your poll and Finally, you can add a poster to make your poll cooler.
                     </p>
                  </div>
                  <div class="step">
                     <h3>Step 3 : Share your poll</h3>
                     <img src="" alt="" />
                     <p>After your poll has been successfully created, you can share your poll with your friends, you can use a copy link or you can direct a direct link through the application.</p>
                  </div>
                  <div class="step">
                     <h3>Step 4 : View result</h3>
                     <img src="" alt="" />
                     <p>After that you can also see the results of the poll you made.</p>
                  </div>
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
   height: 2381px;
   background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
}

.content {
   padding: 30px;
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
