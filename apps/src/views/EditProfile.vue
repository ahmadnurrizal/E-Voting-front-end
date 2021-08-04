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
               <h1 v-if="profileName">
                  <span style="color: #539BE0">{{ profileName }}</span> / Edit Profile
               </h1>
            </div>
            <div class="body">
               <div class="side">
                  <Sidebar />
               </div>
               <div class="edit">
                  <div class="profile">
                     <img src="../../public/img/profile-default.svg" alt="" />
                     <button>change profile picture</button>
                  </div>
                  <form action="">
                     <label for="">Profile Name</label><br />
                     <input type="text" v-model="profileName" :placeholder="profileName" /><br />
                     <label for="">Username</label><br />
                     <input type="text" /><br />
                     <label for="">Email</label><br />
                     <input type="text" v-model="email" :placeholder="email" /><br />
                     <label for="">Location</label><br />
                     <input type="text" v-model="location" :placeholder="location" /><br />
                     <label for="">Status</label><br />
                     <input type="text" /><br />

                     <div class="submision">
                        <button>save profile</button>
                     </div>
                  </form>
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
   name: "settings",
   components: {
      NavLog,
      Footer,
      Sidebar,
   },
   data() {
      return {
         profileName: null,
         email: null,
         location: null,
      };
   },
   async created() {
      const response = await axios.get("api/v1/user", {
         headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
         },
      });
      this.profileName = response.data.data.name;
      this.email = response.data.data.email;
      this.location = response.data.data.address;
   },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@500&family=Roboto&display=swap");

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

.card {
   width: 948px;
   height: 980px;
   background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
   margin: 100px auto;
}

.side {
   border-right: solid 3px #bde0ff;
   margin-top: 10px;
   height: 750px;
}

.body {
   display: flex;
}

.edit {
   margin: 30px;
}

.profile img {
   width: 100px;
   margin-right: 20px;
}

button,
label {
   font-family: "Kanit", sans-serif;
}

.profile {
   align-items: center;
   display: flex;
   margin-bottom: 40px;
}

.profile button {
   font-weight: 500;
   line-height: 32.4px;
   background-color: #bde0ff;
   color: #539be0;
   font-size: 18px;
   border: none;
   border-radius: 15px;
   width: 250px;
   height: 40px;
}

form label {
   font-weight: 500;
   font-size: 24px;
   color: #eaf5ff;
   margin-bottom: 10px;
}

form input {
   width: 529px;
   height: 35px;
   border: #858484;
   border-style: solid;
   border-radius: 5px;
   border-width: 1.5px;
   margin-bottom: 20px;
}

.submision button {
   margin-top: 10px;
   background-color: #ff7070;
   border: none;
   border-radius: 25px;
   width: 200px;
   height: 50px;
   color: #ffffff;
   font-size: 20px;
}
</style>
