<template>
   <div class="wrapper">
      <NavLog />
      <div class="wave-top"><div class="vec"></div></div>
      <div class="main">
         <div class="card">
            <div class="head">
               <div class="profile-pic">
                  <img
                     src="../../public/img/profile-default.svg"
                     class="head-default"
                     v-if="nullImage"
                     alt="not found"
                  />
                  <img
                     :src="profilePic[0].url"
                     alt=""
                     class="head-profile"
                     v-else
                  />
               </div>
               <h1 v-if="profileName">
                  <span style="color: #539BE0">{{ nama }}</span> / Edit Profile
               </h1>
            </div>
            <div class="body">
               <div class="side">
                  <Sidebar />
               </div>
               <div class="edit">
                  <form @submit.prevent="handleUpdate">
                     <div class="profile">
                        <img
                           id="default-profile"
                           v-if="nullImage"
                           src="../../public/img/profile-default.svg"
                           alt="not found"
                        />
                        <img
                           v-else
                           class="picture-profile"
                           :src="profilePic[0].url"
                           alt=""
                        />
                        <button disabled id="buttonTag" class="button">
                           <span v-if="!onChangeName"
                              >Change profile picture
                           </span>
                           <span v-else>{{
                              profilePic[0].profilePic_name
                           }}</span>
                        </button>
                        <input
                           type="file"
                           id="inputTag"
                           @change="handleUploadPic"
                           class="inputTag"
                           accept=".jpeg, .jpg, .png"
                        />
                     </div>
                     <label for="">Profile Name</label><br />
                     <input
                        type="text"
                        v-model="profileName"
                        :placeholder="profileName"
                     /><br />
                     <label for="">Username</label><br />
                     <input
                        type="text"
                        v-model="username"
                        :placeholder="username"
                     /><br />
                     <label for="">Email</label><br />
                     <input
                        type="text"
                        v-model="email"
                        :placeholder="email"
                     /><br />
                     <label for="">Location</label><br />
                     <input
                        type="text"
                        v-model="location"
                        :placeholder="location"
                     /><br />
                     <label for="">Status</label><br />
                     <input
                        type="text"
                        v-model="status"
                        :placeholder="status"
                     /><br />

                     <div class="submission">
                        <input type="submit" value="save profile" />
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
            nama: "",
            profileName: null,
            username: null,
            email: null,
            location: null,
            status: null,

            profilePic: [{ url: "", profilePic_name: "" }],
            nullImage: false,

            onChangeName: false,
         };
      },
      async created() {
         const response = await axios.get("api/v1/user", {
            headers: {
               Authorization: "Bearer " + localStorage.getItem("token"),
            },
         });
         this.nama = response.data.data.name;
         this.profileName = response.data.data.name;
         this.username = response.data.data.username;
         this.email = response.data.data.email;
         this.location = response.data.data.address;
         this.status = response.data.data.status;
         this.profilePic[0].url = response.data.data.profil_path;

         if (response.data.data.profil_path == null) {
            this.nullImage = true;
         }
      },
      methods: {
         async handleUploadPic() {
            const header = {
               Authorization: "Bearer " + localStorage.getItem("token"),
               "Content-type": "application/json",
            };

            const inputTag = document.getElementById("inputTag");
            const button = document.getElementById("buttonTag");

            let file = inputTag.files;
            if (file.length > 0) {
               this.profilePic[0].profilePic_name = file[0].name;
               this.profilePic[0].url = file[0];

               this.onChangeName = true;

               if (file[0].size > 1000 * 1024) {
                  this.profilePic[0].profilePic_name = "";
                  this.profilePic[0].url = "";
                  alert("file exceeds the minimum size (min: 1 Mb)");
                  this.onChangeName = false;

                  return;
               } else {
                  // button.className = "button-active";
                  // inputTag.className = "inputTag-active";
                  // remove.className = "remove-active";
               }

               let dataPicture = new FormData();
               dataPicture.append(
                  "image",
                  this.profilePic[0].url,
                  new Date().toString()
               );
               const resUploadPicture = await axios.post(
                  "api/v1/upload-image",
                  dataPicture,
                  {
                     headers: header,
                  }
               );

               this.profilePic[0].url = resUploadPicture.data.imageURL;
            }
         },
         async handleUpdate() {
            // let token = localStorage.getItem("token");
            // console.log(token);
            const header = {
               Authorization: "Bearer " + localStorage.getItem("token"),
            };

            const data = {
               name: this.profileName,
               username: this.username,
               email: this.email,
               address: this.location,
               status: this.status,
               profil_path: this.profilePic[0].url,
            };

            axios
               .put("api/v1/users", data, {
                  headers: header,
                  "Content-type": "application/json",
               })
               .then((response) => {
                  alert("Profile successfully edited");
                  // this.$router.push("/Settings");
                  location.reload();
               })
               .catch((error) => {
                  console.log("error", error);
               });
         },
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

   .head-default,
   .head-profile {
      width: 100px;
      height: 100px;
      border-radius: 50px;
      object-fit: cover;
   }

   .head h1 {
      font-family: "Kanit", sans-serif;
      font-size: 30px;
      margin-left: 30px;
      color: #eaf5ff;
   }

   .card {
      width: 948px;
      min-height: 980px;
      background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
      margin: 100px auto;
   }

   .side {
      border-right: solid 3px #bde0ff;
      margin-top: 10px;
      height: 730px;
   }

   .body {
      display: flex;
   }

   .edit {
      margin: 30px;
   }

   #default-profile,
   .picture-profile {
      width: 100px;
      height: 100px;
      margin-right: 20px;
      object-fit: cover;
      border: none;
      border-radius: 50px;
   }

   .submission input,
   label,
   .profile button {
      font-family: "Kanit", sans-serif;
   }

   .profile {
      position: relative;
      align-items: center;
      display: flex;
      margin-bottom: 40px;
   }

   .button {
      font-weight: 500;
      line-height: 32.4px;
      background-color: #bde0ff;
      color: #539be0;
      font-size: 18px;
      border: none;
      border-radius: 15px;
      width: 250px;
      height: 40px;
      overflow: hidden;
   }

   .inputTag {
      cursor: pointer;
      right: 160px;
      top: 33px;
      opacity: 0;
      width: 250px;
      position: absolute;
   }

   input[type="text"] {
      padding-left: 10px;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 16px;
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

   .submission input {
      cursor: pointer;
      margin-top: 10px;
      background-color: #ff7070;
      border: none;
      border-radius: 25px;
      width: 200px;
      height: 50px;
      color: #ffffff;
      font-size: 20px;
   }

   .submission input:hover {
      background-color: #dd5555;
   }
</style>
