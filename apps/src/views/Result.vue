<template>
   <div class="wrapper">
      <!-- Navbar -->
      <Navlog />
      <div class="top-vec"><div class="vec"></div></div>

      <!-- main content -->
      <div class="main">
         <div class="card">
            <Headerpoll />
            <!-- <div class="head">
               <h1>{{ title }}</h1>
               <p>
                  Created by
                  <span style="color: #539BE0">
                     {{ userdata.name }}
                  </span>
                  at {{ created_at }}
               </p>
               <div class="toggle">
                  <img
                     src="../../public/img/polling-toggle.svg"
                     @click="toggleClick"
                     alt=""
                  />
                  <div class="dropDown" id="dropDown">
                     <a class="edit" href=""> <span>Edit Poll</span> </a>
                     <a class="reset" href=""> <span>Reset Poll</span> </a>
                     <a class="delete" href=""> <span>Delete Poll</span> </a>
                  </div>
               </div>
            </div>
            <div class="desc">
               <h2>"{{ description }}"</h2>
               <img src="" alt="" />
            </div> -->

            <h1>Result</h1>
            <div class="submission">
               <button class="refresh">Refresh Poll</button>
               <div class="sub-link">
                  <router-link
                     :to="{ name: 'Poll', params: { id: idMatched } }"
                  >
                     <button class="type1">Back to poll</button>
                  </router-link>
                  <router-link to=""
                     ><button class="type2">Share</button></router-link
                  >
               </div>
            </div>
         </div>
         <Sharepoll />
      </div>
      <Footer />
   </div>
</template>

<script>
   import Navlog from "@/components/NavLog.vue";
   import Footer from "../components/Footer.vue";

   import axios from "axios";
   import Headerpoll from "../components/Headerpoll.vue";
   import Sharepoll from "../components/Sharepoll.vue";

   export default {
      name: "Result",
      components: {
         Navlog,
         Footer,
         Headerpoll,
         Sharepoll,
      },
      data() {
         return {
            idMatched: null,
            pollId: this.$route.params.id,
         };
      },
      async beforeCreate() {
         const header = {
            Authorization: "Bearer " + localStorage.getItem("token"),
         };
         const response = await axios.get("api/v1/user-poll", {
            headers: header,
         });
         let lengthPoll = response.data.message.length;

         // matching id
         for (let i = 0; i < lengthPoll; i++) {
            if (this.pollId == response.data.message[i].id) {
               this.idMatched = response.data.message[i].id;
            }
         }
      },
      created() {},
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
      min-height: 650px;
      border: none;
      border-radius: 10px;
      box-shadow: 0 20px 26px rgba(54, 37, 37, 0.2);
      background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
      margin: 100px auto;
      padding: 30px 30px 60px;
   }

   .card-2 {
      border: none;
      border-radius: 10px;
      box-shadow: 0 20px 26px rgba(54, 37, 37, 0.2);
      background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
      width: 948px;
      min-height: 290px;
      margin: auto auto 100px;
   }

   .head h1,
   .desc h2 {
      font-family: "Kanit", sans-serif;
      text-align: center;
   }

   .head h1 {
      font-weight: 600;
      font-size: 48px;
      color: #eaf5ff;
   }

   .head {
      position: relative;
   }

   .toggle {
      display: inline-block;
   }

   .toggle img {
      position: absolute;
      top: 12px;
      right: 12px;
      cursor: pointer;
   }

   .dropDown {
      display: none;
      position: absolute;
      background-color: #bde0ff;
      border: none;
      border-radius: 3px;
      width: 119px;
      height: 125px;
      top: 50px;
      right: 12px;
      padding: 8px 5px;
      visibility: hidden;
      opacity: 0;
   }

   .dropDown a {
      display: block;
      text-decoration: none;
      font-family: "Kanit", sans-serif;
      font-weight: 400;
      font-size: 16px;
      color: #1e6599;
   }

   .dropDown a:hover:not(.delete) {
      color: #fbfcfd;
   }

   .dropDown span {
      margin-left: 20px;
   }

   .edit {
      background-image: url("../../public/img/polling-edit-icon.svg");
      background-repeat: no-repeat;
      background-position: left;
   }
   .reset {
      background-image: url("../../public/img/polling-reset-icon.svg");
      background-repeat: no-repeat;
      background-position: left;
      margin: 11px auto;
   }
   .delete {
      background-image: url("../../public/img/polling-delete-icon.svg");
      background-repeat: no-repeat;
      background-position: left;
   }

   .delete:hover {
      color: red;
   }

   .show {
      display: block;
      visibility: visible;
      opacity: 1;
   }

   .desc {
      margin: 44px auto 120px;
   }

   .desc h2 {
      font-weight: 500;
      font-size: 24px;
      color: #eaf5ff;
      margin-bottom: 52px;
   }

   .head p {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      color: #eaf5ff;
      font-size: 18px;
      text-align: center;
   }

   .submission {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
   }

   .submission .refresh {
      background-color: #ff7070;
      width: 200px;
      height: 50px;
      border: none;
      border-radius: 25px;
      color: #ffffff;
      font-family: "Kanit", sans-serif;
      font-weight: 500;
      font-size: 20px;
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
