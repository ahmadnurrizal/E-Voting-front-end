<template>
   <div class="wrapper">
      <NavLog v-if="isLogin" />
      <Navbar v-else />
      <div class="wave-top"><div class="vec"></div></div>
      <div class="main">
         <div class="card">
            <div class="title">
               <h1>FAQs</h1>
            </div>
            <div class="body">
               <div class="side">
                  <sideHelp />
               </div>
               <div class="content">
                  <h2>Frequently asked questions</h2>
                  <p>On this page we will try to answer questions that may be asked frequently</p>
                  <div class="question">
                     <h3>Is it free to make polls?</h3>
                     <p>Yes, you can create lots of polls for free.</p>
                  </div>
                  <div class="question">
                     <h3>What are the advantages of using fingerVote?</h3>
                     <p>The advantage of using fingerVote is that our website is free to create and vote, you can manage your poll via the dashboard menu</p>
                  </div>
                  <div class="question">
                     <h3>Can the poll be shared?</h3>
                     <p>
                        Yes, you and participants can share the poll that you created, for how to share the poll you can see the
                        <span><router-link to="/Help/Tutorials" style="color: #1E6599; text-decoration: none;">Tutorials</router-link></span> page
                     </p>
                  </div>
                  <div class="question">
                     <h3>Are we looking for someone else's poll?</h3>
                     <p>Of course, you can search for various kinds of polls that have been created previously on the discover page, there you can search for the poll you want to find.</p>
                  </div>
                  <div class="question">
                     <h3>Can i add a photo when i create a poll ?</h3>
                     <p>Of course, to beautify or clarify your poll, you can add a photo to the add photo button on the create poll page</p>
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
   height: 998px;
   background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
}

h1,
h2,
h3,
p {
   color: #eaf5ff;
}

.title {
   border-bottom: 2px #bde0ff solid;
   margin: auto 30px;
}

.title h1 {
   font-size: 48px;
   text-align: left;
   margin: 30px auto 60px 10px;
}

.side {
   border-right: 2px #bde0ff solid;
   margin-top: 10px;
   height: 810px;
}

.body {
   display: flex;
}

.content {
   padding-top: 30px;
   padding-left: 23.25px;
   padding-right: 41px;
}

h2 {
   font-size: 30px;
}

h3 {
   font-size: 24px;
}

.content h2,
.question h3 {
   margin-bottom: 20px;
   font-family: "Kanit", sans-serif;
}

.question p,
.content p {
   margin-bottom: 30px;
   font-family: "Roboto", sans-serif;
   font-size: 18px;
}
</style>
