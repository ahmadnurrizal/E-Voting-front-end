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
               <tr class="row" v-for="item in polls.slice(0, 10)" :key="item">
                  <td>{{ item.title }}</td>
                  <td>cepe</td>
                  <td>{{ item.deadline }}</td>
                  <td>{{ item.status }}</td>
                  <td>settings</td>
               </tr>
               <!-- <ul v-if="!empty">
                     <div class="table-data" v-for="item in polls" :key="item">
                        <tr class="polls">
                           <td>{{ item.title }}</td>
                           <td>cepe</td>
                           <td>{{ item.deadline }}</td>
                           <td>{{ item.status }}</td>
                           <td>settings</td>
                        </tr>
                     </div>
                  </ul> -->

               <!-- <ul v-else>
                     <h3>tidak ada poll</h3>
                  </ul> -->
               <div class="pagination">
                  <a href="">&laquo;</a>
                  <a class="active" href="">1</a>
                  <a href="">2</a>
                  <a href="">&raquo;</a>
               </div>
            </table>

            <div class="empty-poll" v-else>
               <h1>You have never create a poll</h1>
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
         // console.log(response);
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

   table {
      width: 882px;
      height: 500px;
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
   }

   .row {
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      color: #eaf5ff;
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
