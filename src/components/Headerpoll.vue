<template>
   <div class="outlayer">
      <div class="head">
         <h1>{{ title }}</h1>
         <p>
            Created by
            <span style="color: #539BE0">{{ userdata.name }}</span> at
            {{
               new Date(created_at)
                  .toLocaleDateString("en-GB", {
                     day: "numeric",
                     month: "short",
                     year: "numeric",
                  })
                  .replace(/ /g, " ")
            }}
         </p>
         <div class="toggle" v-if="credentialUser">
            <img
               src="../../public/img/polling-toggle.svg"
               @click="toggleClick"
               id="imgTag"
            />
            <div class="dropDown" id="dropDown">
               <button class="edit" @click="showEdit">
                  <span>Edit Poll</span>
               </button>
               <button class="reset" @click="modalReset" id="resetID">
                  <span>Reset Poll</span>
               </button>
               <button class="delete" @click="modalDelete" id="deleteID">
                  <span>Delete Poll</span>
               </button>
            </div>
         </div>
      </div>
      <div class="desc">
         <h2>"{{ description }}"</h2>
         <img :src="poster" alt="" id="imgPoster" class="posterField" />
      </div>

      <!-- reset modal -->
      <div class="modalRes-p" v-if="reset" id="beforeModalRes">
         <div class="modalRes-c">
            <div class="title-res">
               <h1>Reset Poll</h1>
            </div>
            <div class="info-res">
               <img src="../../public/img/delete-warning-icon.svg" alt="" />
               <p>
                  Are you sure to reset this poll ? This cannot be undone.
               </p>
            </div>
            <div class="yesno-res">
               <button id="cancelBtn-res" @click="closeReset">Cancel</button>
               <button id="resBtn" @click="resetPoll">Reset</button>
            </div>
         </div>
      </div>

      <!-- delete modal -->
      <div class="modalDel-p" v-if="deleteStat" id="beforeModalDel">
         <div class="modalDel-c">
            <div class="title-Del">
               <h1>Delete Poll</h1>
            </div>
            <div class="info-Del">
               <img src="../../public/img/delete-warning-icon.svg" alt="" />
               <p>
                  Are you sure to delete this poll ? This cannot be undone.
               </p>
            </div>
            <div class="yesno-Del">
               <button id="cancelBtn-Del" @click="closeDelete">Cancel</button>
               <button id="delBtn-Del" @click="deletePoll">Delete</button>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import axios from "axios";
   export default {
      name: "Headerpoll",

      data() {
         return {
            pollId: this.$route.params.id,
            userdata: "",
            idMatched: null,

            title: "",
            created_at: "",
            description: "",
            deadline: "",
            statusOpen: "",

            poster: "",
            credentialUser: false,

            reset: false,
            deleteStat: false,
         };
      },
      methods: {
         toggleClick() {
            document.getElementById("dropDown").classList.toggle("show");

            let element = document.getElementById("imgTag");
            let dropDown = document.getElementById("dropDown");
            window.addEventListener("click", (e) => {
               if (e.target !== element) {
                  dropDown.className = "dropDown";
               }
            });
         },
         showEdit() {
            this.$router.push(`/edit/${this.pollId}`);
         },
         modalReset() {
            this.reset = true;

            window.addEventListener("click", (e) => {
               let beforeReset = document.getElementById("beforeModalRes");

               if (e.target === beforeReset) {
                  this.reset = false;
               }
            });
         },
         closeReset() {
            this.reset = false;
         },
         resetPoll() {
            axios
               .delete(`api/v1/polls/${this.pollId}/reset`, {
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
         modalDelete() {
            this.deleteStat = true;

            window.addEventListener("click", (e) => {
               let beforeDelete = document.getElementById("beforeModalDel");

               if (e.target === beforeDelete) {
                  this.deleteStat = false;
               }
            });
         },
         closeDelete() {
            this.deleteStat = false;
         },
         deletePoll() {
            const dataDelete = {
               title: this.title,
               description: this.description,
               deadline: this.deadline,
               status: this.statusOpen,
               user_id: this.idMatched,
            };
            axios
               .delete(
                  `api/v1/polls/${this.pollId}`,
                  {
                     headers: {
                        Authorization:
                           "Bearer " + localStorage.getItem("token"),
                     },
                  },
                  dataDelete
               )
               .then(
                  (res) => alert("Your polling has been deleted"),
                  this.$router.push("/CreatePoll")
               )
               .catch((err) => alert(err.response));
         },
      },
      async created() {
         const header = {
            Authorization: "Bearer " + localStorage.getItem("token"),
         };
         const getUser = await axios.get("api/v1/polls", {
            headers: header,
         });

         // matching id
         for (let index = 0; index < getUser.data.data.length; index++) {
            if (getUser.data.data[index].id == this.pollId) {
               this.idMatched = getUser.data.data[index].user_id;
            }
         }

         const credRes = await axios.get("api/v1/user", {
            headers: header,
         });

         if (this.idMatched === credRes.data.data.id) {
            this.credentialUser = true;
         }

         const user = await axios
            .get(`api/v1/users/${this.idMatched}`, {
               headers: header,
            })
            .catch((err) => {
               if (
                  err.response.data.exception ===
                  "Illuminate\\Database\\QueryException"
               ) {
                  alert("poll has been deleted");
                  this.$router.push("/CreatePoll");
               }
            });

         this.userdata = user.data.data;

         const response = await axios.get(`api/v1/polls/${this.pollId}`, {
            headers: header,
         });

         this.title = response.data.data.title;
         this.created_at = response.data.data.created_at;
         this.description = response.data.data.description;
         this.deadline = response.data.data.deadline;
         this.statusOpen = response.data.data.status;

         this.poster = response.data.data.image_path;

         if (this.poster == null) {
            const tagPoster = document.getElementById("imgPoster");
            tagPoster.className = "posterField-active";
         }

         // validate poll before deadline
         const today = new Date();

         const deadline = new Date(this.deadline);

         if (today.getTime() < deadline.getTime()) {
            this.credentialUser = true;
         } else if (today.getTime() > deadline.getTime()) {
            this.credentialUser = false;
         }
      },
   };
</script>

<style scoped>
   @import url("https://fonts.googleapis.com/css2?family=Kanit:wght@500;600&family=Roboto&display=swap");

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

   .head p {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      color: #eaf5ff;
      font-size: 18px;
      text-align: center;
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
      height: 115px;
      top: 50px;
      right: 12px;
      padding: 8px 5px;
      visibility: hidden;
      opacity: 0;
   }

   .dropDown button {
      display: block;
      border: none;
      background-color: #bde0ff;
      font-family: "Kanit", sans-serif;
      font-weight: 400;
      font-size: 16px;
      color: #1e6599;
      margin-bottom: 11px;
   }

   .dropDown button:hover:not(.delete) {
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
      padding: 8px;
   }

   .desc {
      margin: 44px auto 120px;
      text-align: center;
   }

   .desc h2 {
      font-weight: 500;
      font-size: 24px;
      color: #eaf5ff;
      margin-bottom: 52px;
   }

   .posterField {
      width: 700px;
      height: 350px;
      object-fit: cover;
   }

   .posterField-active {
      display: none;
   }

   /* modal edit */
   /* .modalEdit{
      display: none;
   }

   .modalEdit-active {
      box-sizing: border-box;
      border-radius: 10px;
      background-color: #eaf5ff;
   } */

   /* show reset modal */

   .modalRes-p {
      position: fixed;
      width: 100%;
      /* min-height: 2139px; */
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 11;
   }

   .modalRes-c {
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

   .title-res {
      padding: 25px;
      color: #1e6599;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background-color: #bde0ff;
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

   /* show delete modal */
   .modalDel-p {
      position: fixed;
      width: 100%;
      height: 100%;
      /* min-height: 2139px; */
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 11;
   }

   .modalDel-c {
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

   .title-Del {
      padding: 25px;
      color: #1e6599;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      background-color: #bde0ff;
   }

   .info-Del {
      display: flex;
      padding: 50px 30px;
      align-items: center;
   }

   .info-Del p {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 18px;
      color: #1e6599;
      margin: auto 30px;
   }

   .yesno-Del {
      position: absolute;
      right: 15px;
   }

   .yesno-Del button {
      font-family: "Kanit", sans-serif;
      font-weight: 500;
      font-size: 14px;
      border-radius: 15px;
      width: 100px;
      height: 30px;
      cursor: pointer;
   }

   #cancelBtn-Del {
      background-color: #ffffff;
      border: solid #1e6599;
      border-width: 1px;
      color: #1e6599;
   }

   #cancelBtn-Del:hover {
      background-color: #cfcfcf;
   }

   #cancelBtn-Del:active {
      transform: translateY(2px);
   }

   #delBtn-Del {
      border: none;
      margin-left: 15px;
      background-color: #ff7070;
      color: #ffffff;
   }

   #delBtn-Del:hover {
      background-color: #dd5555;
   }

   #delBtn-Del:active {
      transform: translateY(2px);
   }
</style>
