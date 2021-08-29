<template>
   <div class="outlayer">
      <div class="head">
         <h1>{{ title }}</h1>
         <p>
            Created by
            <span style="color: #539BE0">{{ userdata.name }}</span> at
            {{ created_at }}
         </p>
         <div class="toggle" v-if="credentialUser">
            <img
               src="../../public/img/polling-toggle.svg"
               @click="toggleClick"
               alt=""
            />
            <div class="dropDown" id="dropDown">
               <button class="edit" @click="showEdit">
                  <span>Edit Poll</span>
               </button>
               <button class="reset" @click="showReset">
                  <span>Reset Poll</span>
               </button>
               <button class="delete" @click="showDelete">
                  <span>Delete Poll</span>
               </button>
            </div>
         </div>
      </div>
      <div class="desc">
         <h2>"{{ description }}"</h2>
         <img :src="poster" alt="" id="imgPoster" class="posterField" />
      </div>
      <!-- <div class="modalEdit" id="edit-modal">
         <p>do you want to edit this poll?</p>
         <button>Yes</button>
         <button>No</button>
      </div> -->
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
         };
      },
      methods: {
         toggleClick() {
            document.getElementById("dropDown").classList.toggle("show");
         },
         showEdit() {
            // const edit = document.getElementById('modalEdit')

            const edit = confirm("do you want to edit this poll?");
            if (edit === true) {
               this.$router.push(`/edit/${this.pollId}`);
            }
         },
         showReset() {
            const reset = confirm("do you want to reset this poll?");
            if (reset === true) {
               axios
                  .delete(`api/v1/polls/${this.pollId}/reset`, {
                     headers: {
                        Authorization:
                           "Bearer " + localStorage.getItem("token"),
                     },
                  })
                  .then(
                     (res) => alert(res.data.message),
                     this.$router.push(`/Poll/${this.pollId}`)
                  )
                  .catch((err) => console.log(err));
            }
         },
         showDelete() {
            const modalDelete = confirm("do you want to delete this poll?");
            // const header = {
            //    Authorization: "Bearer " + localStorage.getItem('token')
            // }
            if (modalDelete === true) {
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
            }
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
      height: 125px;
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
</style>
