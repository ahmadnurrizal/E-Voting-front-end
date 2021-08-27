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
            <h2>Trending Polls</h2>
            <div class="trending-poll">
               <div
                  v-for="(item, index) in trendings"
                  :key="item"
                  class="trending-card"
               >
                  <img src="../../public/img/discover-icon.svg" alt="" />
                  <div class="info">
                     <p class="title">{{ trendings[index].title }}</p>
                     <br />
                     <p class="createdOn">
                        created on {{ trendings[index].created_at }}
                     </p>
                  </div>
               </div>
            </div>
            <h2>Newest Polls</h2>
            <div class="trending-poll">
               <div
                  v-for="(item, index) in newest"
                  :key="item"
                  class="trending-card"
               >
                  <img src="../../public/img/discover-icon.svg" alt="" />
                  <div class="info">
                     <p class="title">{{ newest[index].title }}</p>
                     <br />
                     <p class="createdOn">
                        created on {{ newest[index].created_at }}
                     </p>
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
            trendings: [],
            newest: [],
         };
      },
      async created() {
         let token = localStorage.getItem("token");
         if (!token) {
            this.isLogin = false;
         } else {
            this.isLogin = true;
         }

         const res_trendingPoll = await axios.get("api/v1/polls/trending");
         this.trendings = res_trendingPoll.data.message;

         const res_newPoll = await axios.get("api/v1/polls/newest");
         this.newest = res_newPoll.data.message;
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

   .trending-poll {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
   }

   .trending-card {
      display: flex;
      background-color: #eaf5ff;
      border: solid #539be0;
   }

   .title {
      color: #539be0;
   }

   .createdOn {
      color: #616161;
   }

   .title,
   .createdOn {
      font-family: "Roboto", sans-serif;
      font-size: 18px;
   }
</style>
