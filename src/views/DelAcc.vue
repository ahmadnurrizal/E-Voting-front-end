<template>
   <div class="wrapper-delPage">
      <NavLog />
      <div class="wave-top"><div class="vec"></div></div>
      <div class="main-delPage">
         <div class="card">
            <div class="head">
               <div class="profile-pic">
                  <img
                     src="../../public/img/profile-default.svg"
                     alt="not found"
                     v-if="nullImage"
                  />
                  <img :src="userdata.profil_path" alt="not found" v-else />
               </div>
               <h1>
                  <span style="color: #539BE0">{{ userdata.name }}</span> /
                  Delete Account
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
                        <img
                           src="../../public/img/profile-default.svg"
                           alt="not found"
                           v-if="nullImage"
                        />
                        <img
                           :src="userdata.profil_path"
                           alt="not found"
                           v-else
                        />
                        <div class="status">
                           <h2>{{ userdata.name }}</h2>
                           <p>{{ userdata.status }}</p>
                        </div>
                     </div>
                  </div>
                  <form @submit.prevent="delAcc">
                     <h3>Password</h3>
                     <input
                        type="text"
                        placeholder="Type your password to delete your account..."
                        v-model="password"
                     />

                     <div class="submission" @click="alertDel">
                        <!-- <h1>Delete Account</h1> -->
                        <div class="button-delete" id="showModal">
                           Delete Account
                        </div>
                        <!-- <input type="submit" value="Delete Account" /> -->
                     </div>
                  </form>
                  <div class="deleteModal-p" v-if="alert" ref="showModalDel">
                     <div class="deleteModal-ch">
                        <div class="title-del">
                           <h1>Delete Account</h1>
                        </div>
                        <div class="info-del">
                           <img
                              src="../../public/img/delete-warning-icon.svg"
                              alt=""
                           />
                           <p>
                              Are you sure to delete this account? This cannot
                              be undone.
                           </p>
                        </div>
                        <div class="yesno-del">
                           <button id="cancelBtn" @click="closeAlert">
                              Cancel
                           </button>
                           <button id="delBtn" @click="delAcc">Delete</button>
                        </div>
                     </div>
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
            userdata: "",
            password: "",

            alert: false,
            nullImage: false,
         };
      },
      methods: {
         alertDel() {
            this.alert = true;
         },
         closeAlert() {
            this.alert = false;
         },
         delAcc() {
            const data = {
               password: this.password,
            };

            axios
               .delete("api/v1/users", {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                  data,
               })
               .then((res) => {
                  if (res.data.status != "error") {
                     alert("your Account has been deleted");
                     localStorage.removeItem("token");

                     this.$router.push("/");
                  } else {
                     alert(res.data.message);
                  }
               })
               .catch((err) => alert(err.response.data.message));
         },
         outsideClick(e) {
            let parent = document.getElementById("showModal");
            let el = this.$refs.showModalDel;
            let target = e.target;

            if (target !== parent && target === el) {
               this.alert = false;
            }
         },
      },
      async created() {
         const user = await axios.get("api/v1/user", {
            headers: {
               Authorization: "Bearer " + localStorage.getItem("token"),
            },
         });
         this.userdata = user.data.data;

         if (user.data.data.profil_path == null) {
            this.nullImage = true;
         }

         document.addEventListener("click", this.outsideClick);
      },
      unmounted() {
         document.removeEventListener("click", this.outsideClick);
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

   .wrapper-delPage {
      background-color: #eaf5ff;
      position: relative;
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
      height: 100px;
      border: none;
      border-radius: 50px;
      object-fit: cover;
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

   input[type="text"] {
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

   .status p {
      font-family: "Roboto", sans-serif;
      font-size: 18px;
      font-weight: 400;
      color: #eaf5ff;
   }

   .information {
      display: flex;
      margin-bottom: 20px;
      margin-top: 10px;
   }

   .information img {
      width: 100px;
      height: 100px;
      border: none;
      border-radius: 50px;
      margin-right: 30px;
      object-fit: cover;
   }

   .button-delete {
      cursor: pointer;
      font-family: "Kanit", sans-serif;
      font-size: 20px;
      font-weight: 500;
      border: none;
      border-radius: 25px;
      background-color: #ff7070;
      padding: 7px 30px;
      width: 200px;
      height: 50px;
      color: #ffffff;
   }

   .button-delete:hover {
      background-color: #dd5555;
   }

   /* show delete modal */

   .deleteModal-p {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 11;
   }

   .deleteModal-ch {
      position: fixed;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 507px;
      height: 286px;
      position: fixed;
      background-color: #eaf5ff;
      border-radius: 5px;
   }

   .title-del {
      padding: 25px;
      color: #1e6599;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background-color: #bde0ff;
   }

   .info-del {
      display: flex;
      padding: 50px 30px;
      align-items: center;
   }

   .info-del p {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 18px;
      color: #1e6599;
      margin: auto 30px;
   }

   .yesno-del {
      position: absolute;
      right: 15px;
   }

   .yesno-del button {
      font-family: "Kanit", sans-serif;
      font-weight: 500;
      font-size: 14px;
      border-radius: 15px;
      width: 100px;
      height: 30px;
      cursor: pointer;
   }

   #cancelBtn {
      background-color: #ffffff;
      border: solid #1e6599;
      border-width: 1px;
      color: #1e6599;
   }

   #cancelBtn:hover {
      background-color: #cfcfcf;
   }

   #cancelBtn:active {
      transform: translateY(2px);
   }

   #delBtn {
      border: none;
      margin-left: 15px;
      background-color: #ff7070;
      color: #ffffff;
   }

   #delBtn:hover {
      background-color: #dd5555;
   }

   #delBtn:active {
      transform: translateY(2px);
   }
</style>
