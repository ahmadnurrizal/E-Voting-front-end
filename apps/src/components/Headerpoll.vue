<template>
   <div class="outlayer">
      <div class="head">
         <h1>{{ title }}</h1>
         <p>
            Created by
            <span style="color: #539BE0">{{ userdata.name }}</span> at
            {{ created_at }}
         </p>
         <div class="toggle">
            <img
               src="../../public/img/polling-toggle.svg"
               @click="toggleClick"
               alt=""
            />
            <div class="dropDown" id="dropDown">
               <a class="edit" href=""> <span>Edit Poll</span> </a>
               <a class="reset" href=""> <span>Reset Poll</span> </a>
               <a class="delete" href=""> <span>Delete Poll</span> </a>
            </div>
         </div>
      </div>
      <div class="desc">
         <h2>"{{ description }}"</h2>
         <img :src="poster" alt="" />
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
            poster: "",
         };
      },
      methods: {
         toggleClick() {
            document.getElementById("dropDown").classList.toggle("show");
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

         const user = await axios.get(`api/v1/users/${this.idMatched}`, {
            headers: header,
         });

         this.userdata = user.data.data;

         const response = await axios.get(`api/v1/polls/${this.pollId}`, {
            headers: header,
         });

         this.title = response.data.data.title;
         this.created_at = response.data.data.created_at;
         this.description = response.data.data.description;
         this.poster = response.data.data.image_path;
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

   .dropDown a {
      display: block;
      text-decoration: none;
      font-family: "Kanit", sans-serif;
      font-weight: 400;
      font-size: 16px;
      color: #1e6599;
   }

   .dropDown a:hover:not(.delete) {
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
      margin: 11px auto;
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

   .desc img {
      width: 700px;
      height: 350px;
      object-fit: cover;
   }
</style>
