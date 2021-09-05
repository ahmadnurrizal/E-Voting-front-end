<template>
   <div class="wrapper-dash" id="dashboardWrap">
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
               <tr class="top-row" id="parentTH">
                  <th id="etcTH">Title</th>
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
                  <td class="poll-title" @click="openPoll(item)" id="etcTD">
                     {{ item.title }}
                  </td>
                  <td>{{ item.number_voter }}</td>
                  <td>
                     <span class="deadlineColumn">
                        {{
                           new Date(item.deadline)
                              .toLocaleDateString("en-GB", {
                                 day: "numeric",
                                 month: "long",
                                 year: "numeric",
                              })
                              .replace(/ /g, " ")
                        }}
                     </span>
                  </td>
                  <td>
                     <span class="statusColumn"> {{ item.status }}</span>
                  </td>
                  <td class="col-setting">
                     <img
                        src="../../public/img/dashboar-setting-icon.svg"
                        alt=""
                        @click="toggleClick(index)"
                        :id="'imgTag' + index"
                     />
                     <div class="dropDown-toggle" :id="'dropDown' + index">
                        <button class="edit-poll" @click="editPoll(item)">
                           <span>Edit Poll</span>
                        </button>
                        <button
                           class="reset-poll"
                           @click="showModalReset(index)"
                        >
                           <span> Reset Poll </span>
                        </button>
                        <button
                           class="delete-poll"
                           @click="showModalDelete(index)"
                        >
                           <span> Delete Poll </span>
                        </button>
                     </div>
                  </td>

                  <!-- reset modal -->
                  <div class="Res-p" ref="beforeResModal" v-if="reset">
                     <div class="Res-ch">
                        <div class="title-res">
                           <h1>Reset Poll</h1>
                        </div>
                        <div class="info-res">
                           <img
                              src="../../public/img/delete-warning-icon.svg"
                              alt=""
                           />
                           <p>
                              Are you sure to reset this poll ? This cannot be
                              undone.
                           </p>
                        </div>
                        <div class="yesno-res">
                           <button id="cancelBtn-res" @click="closeResetModal">
                              Cancel
                           </button>
                           <button id="resBtn" @click="resetPoll(item)">
                              Reset
                           </button>
                        </div>
                     </div>
                  </div>

                  <!-- delete modal -->
                  <div
                     class="deleteModal-p"
                     ref="beforeDelModal"
                     v-if="deleteModal"
                  >
                     <div class="deleteModal-ch">
                        <div class="title-deleteModal">
                           <h1>Delete Poll</h1>
                        </div>
                        <div class="info-deleteModal">
                           <img
                              src="../../public/img/delete-warning-icon.svg"
                              alt=""
                           />
                           <p>
                              Are you sure to delete this poll ? This cannot be
                              undone.
                           </p>
                        </div>
                        <div class="yesno-deleteModal">
                           <button
                              id="cancel-deleteModal"
                              @click="closeDeleteModal"
                           >
                              Cancel
                           </button>
                           <button
                              id="del-deleteModal"
                              @click="deletePoll(item)"
                           >
                              Delete
                           </button>
                        </div>
                     </div>
                  </div>
               </tr>
            </table>

            <div class="empty-poll" v-if="empty">
               <h1>You have never create a poll</h1>
            </div>
            <div class="pagination" v-if="!empty">
               <a href="" id="leftPage"></a>
               <a class="active" href="">1</a>
               <a href="">2</a>
               <a href="" id="rightPage"></a>
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

            reset: false,
            deleteModal: false,
         };
      },
      methods: {
         toggleClick(index) {
            document
               .getElementById("dropDown" + index)
               .classList.toggle("show");

            let element = document.getElementById("imgTag" + index);
            let dropDown = document.getElementById("dropDown" + index);
            document
               .getElementById("dashboardWrap")
               .addEventListener("click", (e) => {
                  if (e.target !== element) {
                     dropDown.className = "dropDown-toggle";
                  }
               });
         },
         openPoll(item) {
            const id_poll = item.id;
            this.$router.push(`/Poll/${id_poll}`);
         },
         editPoll(item) {
            let polling_id = item.id;
            this.$router.push(`/edit/${polling_id}`);
         },

         // reset methods
         showModalReset(index) {
            this.reset = true;

            window.addEventListener("click", (e) => {
               let outModalReset = this.$refs.beforeResModal;

               if (e.target === outModalReset) {
                  this.reset = false;
               }
            });
         },

         closeResetModal() {
            this.reset = false;
         },
         resetPoll(item) {
            let polling_id = item.id;
            axios
               .delete(`api/v1/polls/${polling_id}/reset`, {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
               })
               .then(
                  (res) =>
                     alert(res.data.message + ", please refresh this page"),
                  (this.reset = false)
               )
               .catch((err) => console.log(err));
         },

         // delete methods
         showModalDelete(index) {
            this.deleteModal = true;

            window.addEventListener("click", (e) => {
               let outModalDelete = this.$refs.beforeDelModal;
               if (e.target === outModalDelete) {
                  this.deleteModal = false;
               }
            });
         },

         closeDeleteModal() {
            this.deleteModal = false;
         },

         deletePoll(item) {
            const delData = {
               title: item.title,
               description: item.description,
               deadline: item.deadline,
               status: item.statusOpen,
               user_id: item.user_id,
            };
            axios
               .delete(
                  `api/v1/polls/${item.id}`,
                  {
                     headers: {
                        Authorization:
                           "Bearer " + localStorage.getItem("token"),
                     },
                  },
                  delData
               )
               .then(
                  (res) =>
                     alert(
                        "This poll has been deleted, please refresh this page"
                     ),
                  (this.deleteModal = false)
               )
               .catch((err) => alert(err.response));
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

   .wrapper-dash {
      background-color: #eaf5ff;
   }

   .card {
      position: relative;
      width: 948px;
      height: 939px;
      background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
      margin: 100px auto;
      padding: 30px 30px 60px;
   }

   .card h1 {
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
      padding: 5px;
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
      right: 55px;
      width: 119px;
      height: 115px;
      position: absolute;
      opacity: 1;
      z-index: 999;
      padding: 8px;
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
      border-collapse: collapse;
   }

   tr:nth-child(1) {
      background-color: #1e6599;
   }

   tr:nth-child(1),
   tr {
      border: 3px solid #bde0ff;
   }

   #etcTH {
      text-align: left;
      padding-left: 15px;
   }

   #etcTD {
      padding-left: 15px;
   }

   .top-row {
      font-family: "Kanit", sans-serif;
      font-size: 24px;
      color: #eaf5ff;
      gap: 0px;
      height: 50px;
   }

   .row td:not(#etcTD) {
      text-align: center;
   }

   td {
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      color: #eaf5ff;
   }

   .deadlineColumn {
      background-color: #56b68f;
      border-radius: 5px;
      padding: 4px 10px;
   }

   .statusColumn {
      background-color: #bde0ff;
      border-radius: 5px;
      padding: 4px 10px;
   }

   .poll-title {
      cursor: pointer;
   }

   .poll-title:hover {
      color: #1e6599;
      font-weight: 600;
   }

   .pagination {
      position: absolute;
      bottom: 40px;
      left: 47%;
   }

   .pagination a {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 16px;
      width: 24px;
      height: 24px;
      color: #929292;
      float: left;
      padding: 3px 8px;
      margin: 0 2px;
      text-decoration: none;
      background-color: #eaf5ff;
      transition: background-color 0.3s;
      border-radius: 5px;
   }

   #leftPage {
      background: white url("../../public/img/vector/pagination-right.svg");
      transform: rotateY(180deg);
      background-repeat: no-repeat;
      background-position: 8px;
   }

   #rightPage {
      background: white url("../../public/img/vector/pagination-right.svg");
      background-repeat: no-repeat;
      background-position: 8px;
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

   /* reset modal */
   .Res-p {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 11;
   }

   .Res-ch {
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

   .title-res {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background-color: #bde0ff;
   }

   .title-res h1 {
      font-size: 30px;
      padding: 25px;
      text-align: left;
      color: #1e6599;
      margin-bottom: 0;
   }

   .info-res {
      display: flex;
      padding: 50px 30px;
      align-items: center;
   }

   .info-res p {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 18px;
      color: #1e6599;
      margin: auto 30px;
   }

   .yesno-res {
      position: absolute;
      right: 15px;
   }

   .yesno-res button {
      font-family: "Kanit", sans-serif;
      font-weight: 500;
      font-size: 14px;
      border-radius: 15px;
      width: 100px;
      height: 30px;
      cursor: pointer;
   }

   #cancelBtn-res {
      background-color: #ffffff;
      border: solid #1e6599;
      border-width: 1px;
      color: #1e6599;
   }

   #cancelBtn-res:hover {
      background-color: #cfcfcf;
   }

   #cancelBtn:active {
      transform: translateY(2px);
   }

   #resBtn {
      border: none;
      margin-left: 15px;
      background-color: #ff7070;
      color: #ffffff;
   }

   #resBtn:hover {
      background-color: #dd5555;
   }

   #delBtn:active {
      transform: translateY(2px);
   }

   /* delete modal */
   .deleteModal-p {
      position: fixed;
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
      background-color: #eaf5ff;
      border-radius: 5px;
   }

   .title-deleteModal {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background-color: #bde0ff;
   }

   .title-deleteModal h1 {
      padding: 25px;
      color: #1e6599;
      margin-bottom: 0;
      font-size: 30px;
      text-align: left;
   }

   .info-deleteModal {
      display: flex;
      padding: 50px 30px;
      align-items: center;
   }

   .info-deleteModal p {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 18px;
      color: #1e6599;
      margin: auto 30px;
   }

   .yesno-deleteModal {
      position: absolute;
      right: 15px;
   }

   .yesno-deleteModal button {
      font-family: "Kanit", sans-serif;
      font-weight: 500;
      font-size: 14px;
      border-radius: 15px;
      width: 100px;
      height: 30px;
      cursor: pointer;
   }

   #cancel-deleteModal {
      background-color: #ffffff;
      border: solid #1e6599;
      border-width: 1px;
      color: #1e6599;
   }

   #cancel-deleteModal:hover {
      background-color: #cfcfcf;
   }

   #cancel-deleteModal:active {
      transform: translateY(2px);
   }

   #del-deleteModal {
      border: none;
      margin-left: 15px;
      background-color: #ff7070;
      color: #ffffff;
   }

   #del-deleteModal:hover {
      background-color: #dd5555;
   }

   #del-deleteModal:active {
      transform: translateY(2px);
   }
</style>
