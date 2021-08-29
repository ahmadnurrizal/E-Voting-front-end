<template>
   <div class="wrapper">
      <NavLog />
      <div class="wave-top"><div class="vec"></div></div>
      <div class="main">
         <div class="card">
            <h1>Dashboard</h1>
            <div class="profile">
               <img
                  src="../../public/img/profile-default.svg"
                  alt="not found"
                  v-if="nullImage"
               />
               <img
                  :src="userdata.profil_path"
                  alt="not found"
                  v-if="!nullImage"
               />
               <div class="user-info">
                  <h3>{{ userdata.name }}</h3>
                  <p>{{ userdata.status }}</p>
               </div>
            </div>

            <table v-if="!empty">
               <tr class="top-row">
                  <th>Title</th>
                  <th>Voters</th>
                  <th>Deadline</th>
                  <th>Status</th>
                  <th>Settings</th>
               </tr>
               <tr
                  class="row"
                  v-for="(item, index) in polls.slice(0, 10)"
                  :key="item"
               >
                  <td class="poll-title" @click="openPoll(item)">
                     {{ item.title }}
                  </td>
                  <td>{{ item.number_voter }}</td>
                  <td>{{ item.deadline }}</td>
                  <td>{{ item.status }}</td>
                  <td class="col-setting">
                     <img
                        src="../../public/img/dashboar-setting-icon.svg"
                        alt=""
                        @click="toggleClick(index)"
                     />
                     <div class="dropDown-toggle" :id="'dropDown' + index">
                        <button class="edit-poll">
                           <span>Edit Poll</span>
                        </button>
                        <button class="reset-poll">
                           <span> Reset Poll </span>
                        </button>
                        <button class="delete-poll">
                           <span> Delete Poll </span>
                        </button>
                     </div>
                  </td>
               </tr>
            </table>

            <div class="empty-poll" v-if="empty">
               <h1>You have never create a poll</h1>
            </div>
            <div class="pagination" v-if="!empty">
               <a href="">&laquo;</a>
               <a class="active" href="">1</a>
               <a href="">2</a>
               <a href="">&raquo;</a>
            </div>
         </div>
      </div>
      <Footer />
   </div>
</template>

<script>
   import NavLog from "@/components/NavLog.vue";
   import Footer from "../components/Footer.vue";

   import axios from "axios";
   export default {
      name: "dashboard",
      components: {
         NavLog,
         Footer,
      },
      data() {
         return {
            polls: [],
            empty: false,
            userdata: "",
            nullImage: false,
         };
      },
      methods: {
         toggleClick(index) {
            const coba = document
               .getElementById("dropDown" + index)
               .classList.toggle("show");
         },
         openPoll(item) {
            const id_poll = item.id;
            this.$router.push(`/Poll/${id_poll}`);
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

         axios
            .get("api/v1/user-poll", {
               headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
               },
            })
            .then((res) => {
               this.polls = res.data.message;
               if (this.polls == "poll not found") {
                  this.empty = true;
               }
            })
            .catch((err) => {
               if (err) {
                  this.empty = true;
               }
            });
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

   h1 {
      font-family: "Kanit", sans-serif;
      font-size: 48px;
      text-align: center;
      margin-bottom: 60px;
      color: #eaf5ff;
   }

   .profile {
      text-align: center;
   }

   .profile img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border: none;
      border-radius: 45px;
      margin-bottom: 15px;
   }

   .user-info {
      margin-bottom: 30px;
   }

   .user-info h3 {
      font-family: "Kanit", sans-serif;
      font-size: 30px;
      color: #539be0;
   }

   .user-info p {
      font-family: "Roboto", sans-serif;
      font-size: 18px;
      color: #eaf5ff;
   }

   .col-setting {
      position: relative;
   }

   .col-setting img {
      cursor: pointer;
   }

   /* dropdown css */
   .dropDown-toggle {
      display: none;
      position: relative;
   }
   .dropDown-toggle button {
      cursor: pointer;
      display: block;
      font-family: "Kanit", sans-serif;
      font-weight: 400;
      font-size: 16px;
      color: #1e6599;
      border: none;
      background-color: #bde0ff;
      margin-bottom: 11px;
   }

   .dropDown-toggle button:hover:not(.delete-poll) {
      color: #fbfcfd;
   }

   .dropDown-toggle span {
      margin-left: 20px;
   }

   .show {
      border-radius: 5px;
      display: block;
      visibility: visible;
      background-color: #bde0ff;
      right: 65px;
      width: 119px;
      height: 115px;
      position: absolute;
      opacity: 1;
      z-index: 999;
      padding: 3px;
   }

   .edit-poll {
      background-image: url("../../public/img/polling-edit-icon.svg");
      background-repeat: no-repeat;
      background-position: left;
   }

   .reset-poll {
      background-image: url("../../public/img/polling-reset-icon.svg");
      background-repeat: no-repeat;
      background-position: left;
   }

   .delete-poll {
      background-image: url("../../public/img/polling-delete-icon.svg");
      background-repeat: no-repeat;
      background-position: left;
   }

   .delete-poll:hover {
      color: red;
   }
   /* end dropdown */

   table {
      width: 882px;

      margin: auto;
      border: solid #eaf5ff;
   }

   .row td {
      text-align: center;
   }

   .top-row {
      font-family: "Kanit", sans-serif;
      font-size: 24px;
      color: #eaf5ff;
      background-color: #1e6599;
      text-align: center;
      height: 50px;
   }

   td {
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      color: #eaf5ff;
   }

   .poll-title {
      cursor: pointer;
   }

   .poll-title:hover {
      color: #1e6599;
      font-weight: 600;
   }

   .pagination {
      margin: 10px 360px 0;
   }

   .pagination a {
      color: #929292;
      float: left;
      padding: 0 8px;
      margin: 0 2px;
      text-decoration: none;
      background-color: #eaf5ff;
      transition: background-color 0.3s;
      border-radius: 5px;
   }

   .pagination a.active {
      background-color: #1e6599;
      color: white;
   }

   .pagination a:hover:not(.active) {
      background-color: #ddd;
   }

   .empty-poll {
      width: 470px;
      height: 200px;
      border: none;
      border-radius: 10px;
      text-align: center;
      padding: 60px;
      margin: auto;
   }
</style>
