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
            <form v-if="!status && !overdue">
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
                     <router-link to="" id="shareID" @click="shareClick"
                        ><button class="type2">
                           Share
                        </button></router-link
                     >
                  </div>
               </div>
            </form>
            <div class="done-vote" v-if="status">
               <h1>You have already voted this poll, Go check the result!</h1>
               <router-link :to="{ name: 'Result', params: { id: pollId } }"
                  ><button class="resultMounted">
                     View Result
                  </button></router-link
               >
            </div>
            <div class="overdeadline" v-if="overdue">
               <h1>This poll is Closed</h1>
               <router-link :to="{ name: 'Result', params: { id: pollId } }"
                  ><button class="resultMounted">
                     View Result
                  </button></router-link
               >
            </div>
         </div>
         <Sharepoll id="scrollHere" />
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
            status: false,

            overdue: false,
         };
      },
      methods: {
         toggleClick() {
            document.getElementById("dropDown").classList.toggle("show");
         },
         shareClick() {
            let scroll = document.getElementById("scrollHere");
            window.scroll({
               top: scroll.offsetTop - 100,
               left: 0,
               behavior: "smooth",
            });
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
                  this.$router.push(`/Poll/${this.pollId}/voted`);
               });
         },
      },
      async created() {
         let token = localStorage.getItem("token");
         if (!token) {
            alert("please login");
            this.$router.push("/SignIn");
         } else {
            const header = {
               Authorization: "Bearer " + localStorage.getItem("token"),
            };

            //check alredy vote/not
            const resVoted = await axios.get(`api/v1/polls/${this.pollId}`, {
               headers: header,
            });

            if (resVoted.data.voted === false) {
               this.status = false;
            } else {
               this.status = true;
            }
            // validate poll before deadline
            const today = new Date();

            const deadline = new Date(resVoted.data.data.deadline);

            if (today.getTime() < deadline.getTime()) {
               this.overdue = false;
            } else if (today.getTime() > deadline.getTime()) {
               this.overdue = true;
            }

            // get poll option
            const Poll = await axios.get(`api/v1/poll-options/${this.pollId}`, {
               headers: header,
            });

            this.options = Poll.data.data;
         }
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

   .done-vote,
   .overdeadline {
      text-align: center;
   }

   .done-vote h1,
   .overdeadline h1 {
      font-family: "Kanit", sans-serif;
      font-weight: 400;
      font-size: 30px;
      color: #eaf5ff;
      margin-bottom: 30px;
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

   .resultMounted {
      border: none;
      border-radius: 25px;
      width: 400px;
      height: 50px;
      font-family: "Kanit", sans-serif;
      font-weight: 500;
      font-size: 20px;
      color: #eaf5ff;
      background-color: #56b68f;
      cursor: pointer;
   }

   .resultMounted:hover {
      background-color: #44a07b;
   }
</style>
