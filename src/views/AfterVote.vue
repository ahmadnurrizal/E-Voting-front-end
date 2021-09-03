<template>
   <div class="wrapper">
      <Navlog />
      <div class="top-vec"><div class="vec"></div></div>

      <div class="main">
         <div class="card">
            <div class="content">
               <h1>Thank You for Your Participation</h1>
               <h3>We really appreciate your vote</h3>
               <img src="../../public/img/aftervote-main-icon.svg" alt="" />
            </div>
            <div class="submission">
               <router-link :to="{ name: 'Result', params: { id: pollId } }">
                  <button class="result">view result</button>
               </router-link>
               <div class="sub-link">
                  <router-link :to="{ name: 'Poll', params: { id: pollId } }">
                     <button class="type1">Back to poll</button>
                  </router-link>
                  <router-link to="" @click="shareClick"
                     ><button class="type2">Share</button></router-link
                  >
               </div>
            </div>
         </div>
         <Sharepoll id="scrollHere" />
      </div>
      <Footer />
   </div>
</template>

<script>
   import Navlog from "@/components/NavLog.vue";
   import Footer from "../components/Footer.vue";

   import Sharepoll from "../components/Sharepoll.vue";
   import axios from "axios";
   export default {
      name: "Aftervote",
      components: {
         Navlog,
         Footer,
         Sharepoll,
      },
      data() {
         return {
            idMatched: null,
            pollId: this.$route.params.id,
         };
      },
      methods: {
         shareClick() {
            let scroll = document.getElementById("scrollHere");
            window.scroll({
               top: scroll.offsetTop - 100,
               left: 0,
               behavior: "smooth",
            });
         },
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

   .top-vec {
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

   .main {
      display: inline;
   }

   .card {
      width: 948px;
      min-height: 700px;
      border: none;
      border-radius: 10px;
      box-shadow: 0 20px 26px rgba(54, 37, 37, 0.2);
      background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
      margin: 100px auto;
      padding: 30px 30px 60px;
   }

   .content {
      text-align: center;
   }

   .content h1 {
      color: #eaf5ff;
      font-weight: 600;
      font-size: 48px;
   }

   .content h3 {
      font-family: "Kanit", sans-serif;
      color: #eaf5ff;
      font-weight: 500;
      font-size: 24px;
   }

   .content img {
      margin: 60px auto;
   }

   .submission {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
   }
   .submission .result {
      background-color: #ff7070;
      width: 200px;
      height: 50px;
      border: none;
      border-radius: 25px;
      color: #ffffff;
      font-family: "Kanit", sans-serif;
      font-weight: 500;
      font-size: 20px;
      cursor: pointer;
   }

   .result:hover {
      background-color: #f55454;
   }

   .type1,
   .type2 {
      padding-left: 15px;
      border: none;
      border-radius: 25px;
      width: 200px;
      height: 50px;
      background-color: #eaf5ff;
      font-family: "Kanit", sans-serif;
      font-weight: 500;
      font-size: 20px;
      color: #1e6599;
      cursor: pointer;
   }
   .type1 {
      background-image: url("../../public/img/polling-backpoll-icon.svg");
      background-repeat: no-repeat;
      background-position: 20px;
      margin-right: 30px;
   }

   .type1:hover,
   .type2:hover {
      background-color: #dbe8f5;
   }

   .type2 {
      background-image: url("../../public/img/polling-share-icon.svg");
      background-repeat: no-repeat;
      background-position: 40px;
   }
</style>
