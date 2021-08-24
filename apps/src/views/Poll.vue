<template>
   <div class="wrapper">
      <!-- Navbar -->
      <Navlog />
      <div class="top-vec"><div class="vec"></div></div>

      <!-- main content -->
      <!-- <h1>masukk{{ pollId }}</h1> -->
      <div class="main">
         <div class="card-header">
            <Headerpoll />
            <form>
               <h2>Choose one answer :</h2>
               <ul>
                  <li
                     id="listOptions"
                     v-for="(item, index) in options"
                     :key="item"
                  >
                     <div class="choices">
                        <img :src="options[index].image_path" alt="" /><br />
                        <label style="word-wrap: break-word"
                           ><input
                              type="radio"
                              :id="index"
                              name="item"
                              v-model="checked"
                              :value="index + 1"
                           /><span>{{ options[index].option }}</span></label
                        >
                     </div>
                  </li>
               </ul>
               <div class="submission">
                  <input
                     type="submit"
                     value="vote"
                     @click.prevent="handleVote"
                  />
                  <div class="sub-link">
                     <router-link
                        :to="{ name: 'Result', params: { id: pollId } }"
                     >
                        <button class="type1">Result</button></router-link
                     >
                     <router-link to=""
                        ><button class="type2">Share</button></router-link
                     >
                  </div>
               </div>
            </form>
         </div>
         <Sharepoll />
      </div>
      <Footer />
   </div>
</template>

<script>
   import Navlog from "@/components/NavLog.vue";
   import Footer from "../components/Footer.vue";

   import axios from "axios";
   import Headerpoll from "../components/Headerpoll.vue";
   import Sharepoll from "../components/Sharepoll.vue";
   export default {
      components: {
         Navlog,
         Footer,
         Headerpoll,
         Sharepoll,
      },
      data() {
         return {
            pollId: this.$route.params.id,
            userdata: "",
            idMatched: null,

            title: "",
            created_at: "",
            description: "",
            options: [{ option: "", image_path: "" }],
            checked: "",
         };
      },
      methods: {
         toggleClick() {
            document.getElementById("dropDown").classList.toggle("show");
         },

         handleVote() {
            const data = {
               poll_option_id: this.checked,
            };

            axios
               .post(`api/v1/polls/${this.pollId}/vote`, data, {
                  headers: {
                     Authorization: "Bearer " + localStorage.getItem("token"),
                  },
               })
               .then((res) => {
                  // if( res.data.message == "Sorry, you have alredy voted this poll"){

                  // }
                  this.$router.push(`/Poll/${this.pollId}/voted`);
               });
         },
      },
      async created() {
         const header = {
            Authorization: "Bearer " + localStorage.getItem("token"),
         };
         // const user = await axios.get("api/v1/user", {
         //    headers: header,
         // });
         // this.userdata = user.data.data;
         // const response = await axios.get("api/v1/user-poll", {
         //    headers: header,
         // });
         // let lengthPoll = response.data.message.length;
         // // matching id
         // for (let i = 0; i < lengthPoll; i++) {
         //    if (this.pollId == response.data.message[i].id) {
         //       this.idMatched = response.data.message[i].id;
         //       let lastPoll = response.data.message[i];
         //       (this.title = lastPoll.title),
         //          (this.created_at = lastPoll.created_at),
         //          (this.description = lastPoll.description);
         //    }
         // }

         // get poll option
         const Poll = await axios.get(`api/v1/poll-options/${this.pollId}`, {
            headers: header,
         });
         this.options = Poll.data.data;
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

   .top-vec {
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

   .main {
      display: inline;
   }

   .card-header {
      width: 948px;
      min-height: 650px;
      border: none;
      border-radius: 10px;
      box-shadow: 0 20px 26px rgba(54, 37, 37, 0.2);
      background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
      margin: 100px auto;
      padding: 30px 30px 60px;
   }

   /* .head h1,
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
   }

   .desc h2 {
      font-weight: 500;
      font-size: 24px;
      color: #eaf5ff;
      margin-bottom: 52px;
   } */

   form h2,
   form label {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      color: #eaf5ff;
      font-size: 18px;
   }

   form ul li {
      list-style: none;
      cursor: pointer;
   }

   .choices {
      display: block;
   }

   .choices span {
      margin-left: 10px;
      cursor: pointer;
   }

   .choices label input {
      margin-bottom: 10px;
   }

   .choices img {
      object-fit: cover;
      width: 400px;
      height: 400;
   }

   .checkbox-circle {
      width: 0.9em;
      height: 0.9em;
      background-color: white;
      border-radius: 50%;
      vertical-align: middle;
      border: 1px solid #ddd;
      -webkit-appearance: none;
      outline: none;
      cursor: pointer;
   }

   .checkbox-circle:checked {
      background-color: grey;
   }

   .submission {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
   }

   .submission input {
      background-color: #ff7070;
      width: 200px;
      height: 50px;
      border: none;
      border-radius: 25px;
      color: #ffffff;
      font-family: "Kanit", sans-serif;
      font-weight: 500;
      font-size: 20px;
      cursor: pointer;
   }

   .submission input:hover {
      background-color: #f55454;
   }

   .type1,
   .type2 {
      padding-left: 21px;
      border: none;
      border-radius: 25px;
      width: 200px;
      height: 50px;
      font-family: "Kanit", sans-serif;
      font-weight: 500;
      font-size: 20px;
      color: #1e6599;
      background-color: #eaf5ff;
      cursor: pointer;
   }

   .type1 {
      background-image: url("../../public/img/polling-result-icon.svg");
      background-repeat: no-repeat;
      background-position: 40px;
      margin-right: 30px;
   }

   .type1:hover,
   .type2:hover {
      background-color: #dbe8f5;
   }

   .type2 {
      background-image: url("../../public/img/polling-share-icon.svg");
      background-repeat: no-repeat;
      background-position: 40px;
   }
</style>
