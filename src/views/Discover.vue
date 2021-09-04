<template>
   <div class="wrapper">
      <NavLog v-if="isLogin" />
      <Navbar v-else />
      <div class="wave-top"><div class="vec"></div></div>
      <div class="main">
         <!-- login user -->
         <div class="card" v-if="isLogin">
            <div class="top">
               <h1>Discover Polls</h1>
               <h3>You can find lots of pre-made polls</h3>
               <form @submit.prevent="searchTitle" class="search-field">
                  <input
                     type="text"
                     placeholder="Search..."
                     v-model="titleName"
                  />
                  <div class="search-box">
                     <input type="submit" style="opacity: 0; display: none" />
                     <img
                        src="../../public/img/discover-search-icon.svg"
                        alt=""
                        @click="searchTitle"
                        v-if="!searchElement"
                     />
                     <div
                        class="silang"
                        v-if="searchElement"
                        @click="closeSearch"
                     >
                        X
                     </div>
                  </div>
               </form>
            </div>
            <div class="outlayer" v-if="!searchElement">
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
                        <div class="wrapper-title">
                           <p class="title">{{ trendings[index].title }}</p>
                        </div>
                        <p class="createdOn">
                           created on
                           {{
                              new Date(trendings[index].created_at)
                                 .toLocaleDateString("en-GB", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                 })
                                 .replace(/ /g, " ")
                           }}
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
                        <div class="wrapper-title">
                           <p class="title">{{ newest[index].title }}</p>
                        </div>

                        <p class="createdOn">
                           created on
                           {{
                              new Date(newest[index].created_at)
                                 .toLocaleDateString("en-GB", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                 })
                                 .replace(/ /g, " ")
                           }}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <div class="wrapper-poll" v-if="searchElement">
               <div
                  class="trending-card"
                  v-for="(item, index) in searchList"
                  :key="item"
               >
                  <img src="../../public/img/discover-icon.svg" alt="" />
                  <div class="info">
                     <div class="wrapper-title">
                        <p class="title">{{ searchList[index].title }}</p>
                     </div>
                     <p class="createdOn">
                        created on
                        {{
                           new Date(searchList[index].created_at)
                              .toLocaleDateString("en-GB", {
                                 day: "numeric",
                                 month: "short",
                                 year: "numeric",
                              })
                              .replace(/ /g, " ")
                        }}
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <!-- end of login user -->

         <!-- not loged user -->
         <div class="card" v-if="!isLogin">
            <div class="top">
               <h1>Discover Polls</h1>
               <h3>You can find lots of pre-made polls</h3>
               <form @submit.prevent="searchTitle" class="search-field">
                  <input
                     type="text"
                     placeholder="Search..."
                     v-model="titleName"
                  />
                  <div class="search-box">
                     <img
                        src="../../public/img/discover-search-icon.svg"
                        class="image-search"
                        @click="searchTitle"
                        v-if="!searchElement"
                     />
                     <div
                        class="silang"
                        v-if="searchElement"
                        @click="closeSearch"
                     >
                        X
                     </div>
                  </div>
               </form>
            </div>

            <div class="outlayer" v-if="!searchElement">
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
                        <div class="wrapper-title">
                           <p class="title">{{ trendings[index].title }}</p>
                        </div>
                        <br />
                        <p class="createdOn">
                           created on
                           {{
                              new Date(trendings[index].created_at)
                                 .toLocaleDateString("en-GB", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                 })
                                 .replace(/ /g, " ")
                           }}
                        </p>
                     </div>
                  </div>
               </div>
               <h2>Newest Polls</h2>
               <div class="wrapper-poll" v-if="!searchElement">
                  <div
                     v-for="(item, index) in newest"
                     :key="item"
                     class="trending-card"
                     @click="openSignIn"
                  >
                     <img src="../../public/img/discover-icon.svg" alt="" />
                     <div class="info">
                        <div class="wrapper-title">
                           <p class="title">{{ newest[index].title }}</p>
                        </div>

                        <p class="createdOn">
                           created on
                           {{
                              new Date(newest[index].created_at)
                                 .toLocaleDateString("en-GB", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                 })
                                 .replace(/ /g, " ")
                           }}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
            <div class="wrapper-poll" v-if="searchElement">
               <div
                  class="trending-card"
                  v-for="(item, index) in searchList"
                  :key="item"
               >
                  <img src="../../public/img/discover-icon.svg" alt="" />
                  <div class="info">
                     <div class="wrapper-title">
                        <p class="title">{{ searchList[index].title }}</p>
                     </div>
                     <p class="createdOn">
                        created on
                        {{
                           new Date(searchList[index].created_at)
                              .toLocaleDateString("en-GB", {
                                 day: "numeric",
                                 month: "short",
                                 year: "numeric",
                              })
                              .replace(/ /g, " ")
                        }}
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <!-- end of not log user -->
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

            titleName: "",
            searchList: [],
            searchElement: false,
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
         closeSearch() {
            this.searchElement = false;
         },
         async searchTitle() {
            const resTitlePoll = await axios
               .get(`api/v1/polls/discover/${this.titleName}`)
               .catch((err) => alert(err.response.data.message));

            if (resTitlePoll.data.status === "success") {
               this.searchList = resTitlePoll.data.message;
               this.searchElement = true;
            }
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
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 16px;
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

   .search-box img,
   .image-search {
      cursor: pointer;
   }

   .image-search:hover {
      transform: translateY(1px);
   }

   .silang {
      cursor: pointer;
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      color: #3d87cc;
      font-size: 20px;
   }

   .silang:hover {
      font-weight: bold;
      color: red;
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

   .wrapper-title {
      width: 230px;
      height: 23px;
      overflow: hidden;
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

   /* responsive for mobile */
   @media (max-width: 586px) {
      .vec {
         padding-top: 130px;
      }

      .main {
         margin: auto 10px;
      }

      .card {
         min-width: 300px;
         min-height: 1300px;
         text-align: center;
         padding: 10px;
      }

      .wrapper-poll {
         display: block;
         margin-top: 40px;
      }

      .trending-card {
         margin: auto;
         min-width: 290px;
      }

      .top h1 {
         font-size: 38px;
      }

      .top h3 {
         font-size: 24px;
         margin-bottom: 10px;
      }

      .search-field {
         width: 300px;
         height: 30px;
         margin: auto;
      }

      .search-box {
         padding: 0;
      }
   }

   /* responsive for tablet */
   @media (min-width: 587px) and (max-width: 1156px) {
      .main {
         margin: auto 20px;
      }

      .card {
         min-height: 1000px;
      }

      .wrapper-poll {
         grid-template-columns: repeat(2, 1fr);
         gap: 10px;
      }

      .search-field {
         width: 600px;
      }
   }
</style>
