<template>
   <div class="wrapper">
      <NavLog v-if="isLogin" />
      <Navbar v-else />
      <div class="wave-top"><div class="vec"></div></div>
      <div class="main">
         <div class="card" v-if="isLogin">
            <div class="top">
               <h1>Discover Polls</h1>
               <h3>You can find lots of pre-made polls</h3>
               <form class="search-field">
                  <input type="text" placeholder="Search..." />
                  <div class="search-box">
                     <img
                        src="../../public/img/discover-search-icon.svg"
                        alt=""
                     />
                  </div>
               </form>
            </div>
            <h2>Trending Polls</h2>
            <div class="wrapper-poll" id="wrapper1">
               <div
                  v-for="(item, index) in trendings"
                  :key="item"
                  class="trending-card"
                  @click="openTrending(index)"
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
            <div class="wrapper-poll">
               <div
                  v-for="(item, index) in newest"
                  :key="item"
                  class="trending-card"
                  @click="openNewest(index)"
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
         <div class="card" v-if="!isLogin">
            <div class="top">
               <h1>Discover Polls</h1>
               <h3>You can find lots of pre-made polls</h3>
               <form class="search-field">
                  <input type="text" placeholder="Search..." />
                  <div class="search-box">
                     <img
                        src="../../public/img/discover-search-icon.svg"
                        alt=""
                     />
                  </div>
               </form>
            </div>
            <h2>Trending Polls</h2>
            <div class="wrapper-poll" id="wrapper1">
               <div
                  v-for="(item, index) in trendings"
                  :key="item"
                  class="trending-card"
                  @click="openSignIn"
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
            <div class="wrapper-poll">
               <div
                  v-for="(item, index) in newest"
                  :key="item"
                  class="trending-card"
                  @click="openSignIn"
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
      methods: {
         openTrending(index) {
            this.$router.push(`/Poll/${this.trendings[index].id}`);
         },
         openNewest(index) {
            this.$router.push(`/Poll/${this.newest[index].id}`);
         },
         openSignIn() {
            alert("please login before");
            this.$router.push("/SignIn");
         },
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
      width: 1140px;
      min-height: 846px;
      background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
      margin: 100px auto;
      padding: 30px 30px 60px;
   }

   .top h1 {
      font-family: "Kanit", sans-serif;
      font-weight: 600;
      font-size: 48px;
      color: #eaf5ff;
      margin-bottom: 20px;
   }

   .top h3 {
      font-family: "Kanit", sans-serif;
      font-weight: 500;
      font-size: 24px;
      color: #eaf5ff;
      margin-bottom: 30px;
   }

   .search-field {
      margin-bottom: 60px;
      border: solid #539be0;
      border-radius: 20px;
      width: 715px;
      display: flex;
   }

   .search-field input {
      outline: none;
      padding-left: 15px;
      width: 630px;
      border: none;
      border-top-left-radius: 21px;
      border-bottom-left-radius: 21px;
   }

   .search-box {
      width: 85px;
      background-color: #bde0ff;
      border-top-right-radius: 21px;
      border-bottom-right-radius: 21px;
      padding: 6px 30px;
   }

   h2 {
      font-family: "Kanit", sans-serif;
      font-weight: 600;
      font-size: 30px;
      color: #eaf5ff;
      margin-bottom: 30px;
   }

   #wrapper1 {
      margin-bottom: 60px;
   }

   .wrapper-poll {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
   }

   .trending-card {
      cursor: pointer;
      display: flex;
      background-color: #eaf5ff;
      border: solid #539be0;
      width: 312px;
      height: 70px;
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
