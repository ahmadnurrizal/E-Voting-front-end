<template>
   <div class="wrapper">
      <NavLog />
      <div class="wave-top"><div class="vec"></div></div>
      <div class="main">
         <div class="card">
            <div class="head">
               <div class="profile-pic">
                  <img src="../../public/img/profile-default.svg" alt="" />
               </div>
               <h1 v-if="getdata">
                  <span style="color: #539BE0">{{ getdata.data.name }}</span> / Delete Account
               </h1>
            </div>
            <div class="body">
               <div class="side">
                  <Sidebar />
               </div>
               <div class="contentDel">
                  <div class="profile">
                     <h3>Your Account</h3>
                     <div class="information">
                        <img src="../../public/img/profile-default.svg" alt="" />
                        <div class="status">
                           <h2 v-if="getdata">{{ getdata.data.name }}</h2>
                           <p>status user</p>
                        </div>
                     </div>
                  </div>
                  <h3>Password</h3>
                  <input type="text" placeholder="Type your password to delete your account..." />

                  <div class="submission">
                     <button>Delete Account</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <Footer />
   </div>
</template>

<script>
import NavLog from "@/components/NavLog.vue";
import Footer from "../components/Footer.vue";

import Sidebar from "../components/Sidebar.vue";

import axios from "axios";

export default {
   name: "DeleteAcc",
   components: {
      NavLog,
      Footer,
      Sidebar,
   },
   data() {
      return {
         getdata: null,
      };
   },
   async created() {
      const response = await axios.get("api/v1/user", {
         headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
         },
      });
      this.getdata = response.data;
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
   height: 616px;
   background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
   margin: 100px auto;
}

.head {
   display: flex;
   padding: 60px 0;
   margin: auto 30px;
   align-items: center;
   border-bottom: solid 3px #bde0ff;
}

.head img {
   width: 100px;
}

.head h1 {
   font-family: "Kanit", sans-serif;
   font-size: 30px;
   margin-left: 30px;
   color: #eaf5ff;
}

.body {
   display: flex;
}

.side {
   border-right: solid 3px #bde0ff;
   margin-top: 10px;
   height: 360px;
}

.contentDel {
   padding: 6px 0 0 30px;
}

input {
   font-family: "Roboto", sans-serif;
   font-weight: 400;
   font-size: 16px;
   width: 529px;
   height: 40px;
   border: none;
   border-radius: 5px;
   padding: 12px 10px;
   margin-top: 10px;
   margin-bottom: 30px;
}

h3 {
   font-family: "Kanit", sans-serif;
   font-weight: 500;
   color: #eaf5ff;
   font-size: 24px;
}

.status h2 {
   font-family: "Kanit", sans-serif;
   font-size: 30px;
   color: #539be0;
}

.information {
   display: flex;
   margin-bottom: 20px;
   margin-top: 10px;
}

.information img {
   width: 100px;
   margin-right: 30px;
}

.submission button {
   font-family: "Kanit", sans-serif;
   font-size: 20px;
   font-weight: 500;
   border: none;
   border-radius: 25px;
   background-color: #ff7070;
   width: 200px;
   height: 50px;
   color: #ffffff;
}
</style>
