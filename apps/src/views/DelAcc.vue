<template>
   <div class="wrapper">
      <NavLog />
      <div class="wave-top"><div class="vec"></div></div>
      <div class="main">
         <div class="card">
            <Topbar />
            <div class="body">
               <Sidebar />
               <div class="contentDel">
                  <div class="profile">
                     <h2>Your Account</h2>
                     <div class="information">
                        <img src="../../public/img/profile-default.svg" alt="" />
                        <div class="status">
                           <h2 v-if="getdata">{{ getdata.data.name }}</h2>
                           <p>status user</p>
                        </div>
                     </div>
                  </div>
                  <h1>Password</h1>
                  <input type="text" placeholder="Type your password to delete your account..." />

                  <div class="submision">
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

import Topbar from "../components/TopBar.vue";
import Sidebar from "../components/Sidebar.vue";

import axios from "axios";

export default {
   name: "DeleteAcc",
   components: {
      NavLog,
      Footer,
      Topbar,
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
   height: 916px;
}

.body {
   display: flex;
}

.information {
   display: flex;
}
</style>
