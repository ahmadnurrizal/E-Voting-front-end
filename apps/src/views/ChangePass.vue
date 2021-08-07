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
                  <span style="color: #539BE0">{{ profileName }}</span> / Change Password
               </h1>
            </div>
            <div class="body">
               <div class="side">
                  <Sidebar />
               </div>
               <div class="contentPass">
                  <form @submit.prevent="handleChange">
                     <label for="">Current Password</label><br />
                     <input type="text" placeholder="Type your current password..." v-model="currentPass" /><br />
                     <label for="">New Password</label><br />
                     <input type="text" placeholder="Type a new password..." v-model="newPass" /><br />
                     <label for="">Confirm New Password</label><br />
                     <input type="text" placeholder="Confirm your new password..." v-model="confirmPass" /><br />

                     <div class="submission">
                        <!-- <button>Change Password</button> -->
                        <input type="submit" value="change password" />
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
   name: "EditPass",
   components: {
      NavLog,
      Footer,
      Sidebar,
   },
   data() {
      return {
         profileName: null,
         currentPass: "",
         newPass: "",
         confirmPass: "",
      };
   },
   async created() {
      const response = await axios.get("api/v1/user", {
         headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
         },
      });
      this.profileName = response.data.data.name;
   },
   methods: {
      handleChange() {
         const header = {
            Authorization: "Bearer " + localStorage.getItem("token"),
         };

         const data = {
            current_password: this.currentPass,
            new_password: this.newPass,
            confirm_new_password: this.confirmPass,
         };

         axios
            .put("api/v1/users/change-password", data, {
               headers: header,
            })
            .then((res) => {
               console.log(res);
            })
            .catch((err) => {
               console.log(err);
            });

         this.$router.push("/Settings");
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
   height: 652px;
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
   height: 400px;
}

.contentPass {
   padding: 30px;
}

form label {
   font-family: "Kanit", sans-serif;
   font-size: 24px;
   font-weight: 500;
   color: #eaf5ff;
}

form input {
   font-family: "Roboto", sans-serif;
   font-weight: 400;
   width: 529px;
   height: 40px;
   border: none;
   border-radius: 5px;
   margin-top: 10px;
   margin-bottom: 20px;
   padding: 12px 10px;
}

.submission input {
   font-family: "Kanit", sans-serif;
   font-size: 20px;
   font-weight: 500;
   color: #ffffff;
   background-color: #ff7070;
   width: 200px;
   height: 50px;
   border: none;
   border-radius: 25px;
   padding: 10px;
}
</style>
