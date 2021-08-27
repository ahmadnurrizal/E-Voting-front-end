<template>
   <div class="wrapper">
      <!-- Navbar -->
      <Navlog />
      <div class="top-vec"><div class="vec"></div></div>

      <!-- main content -->
      <div class="main">
         <div class="card-result">
            <Headerpoll />
            <h1>Voters: {{ total_vote }}</h1>
            <ul>
               <li v-for="(item, index) in options" :key="item">
                  {{ options[index].option }}
                  <div class="result-content">
                     <div class="chart">
                        <div
                           class="level"
                           :style="{
                              width:
                                 Math.round(
                                    (percentage[index] / total_vote) * 100
                                 ) + '%',
                           }"
                        ></div>
                     </div>
                     <div class="percent">
                        {{
                           Math.round((percentage[index] / total_vote) * 100)
                        }}% ({{ percentage[index] }}
                        votes)
                     </div>
                  </div>
               </li>
            </ul>
            <div class="submission">
               <button @click="reloadPage" class="refresh">Refresh Poll</button>
               <div class="sub-link">
                  <router-link :to="{ name: 'Poll', params: { id: pollId } }">
                     <button class="type1">Back to poll</button>
                  </router-link>
                  <router-link to=""
                     ><button class="type2">Share</button></router-link
                  >
               </div>
            </div>
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
      name: "Result",
      components: {
         Navlog,
         Footer,
         Headerpoll,
         Sharepoll,
      },
      data() {
         return {
            idMatched: null,
            pollId: this.$route.params.id,

            total_vote: null,
            options: [{ option: "", image_path: "" }],
            percentage: [],
         };
      },
      methods: {
         reloadPage() {
            location.reload();
         },
      },
      async created() {
         const header = {
            Authorization: "Bearer " + localStorage.getItem("token"),
         };

         //get from result poll api
         const response_result = await axios.get(
            `api/v1/polls/result/${this.pollId}`,
            {
               headers: header,
            }
         );

         //get total voters
         for (
            let index = 0;
            index < response_result.data.data.length;
            index++
         ) {
            const sum = response_result.data.data[index];
            this.total_vote = this.total_vote + sum;
            this.percentage[index] = sum;
         }

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

   .card-result {
      width: 948px;
      min-height: 650px;
      border: none;
      border-radius: 10px;
      box-shadow: 0 20px 26px rgba(54, 37, 37, 0.2);
      background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
      margin: 100px auto;
      padding: 30px 30px 60px;
   }

   .card-result ul li {
      list-style: none;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 18px;
      color: #eaf5ff;
   }

   .card-result h1 {
      font-family: "Kanit", sans-serif;
      font-weight: 500;
      color: #eaf5ff;
      font-size: 24px;
      margin-bottom: 30px;
   }

   .submission {
      margin-top: 60px;
      display: flex;
      justify-content: space-between;
   }

   .submission .refresh {
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

   .refresh:hover {
      background-color: #f55454;
   }

   .type1,
   .type2 {
      padding-left: 15px;
      border: none;
      border-radius: 25px;
      width: 200px;
      height: 50px;
      background-color: #eaf5ff;
      font-family: "Kanit", sans-serif;
      font-weight: 500;
      font-size: 20px;
      color: #1e6599;
      cursor: pointer;
   }
   .type1 {
      background-image: url("../../public/img/polling-backpoll-icon.svg");
      background-repeat: no-repeat;
      background-position: 20px;
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

   /* chart style */
   .result-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px auto 10px;
   }
   .chart {
      width: 100%;
      box-sizing: border-box;
      background: #eaf5ff;
      height: 12px;
      /* margin-right: 50px; */
   }

   .percent {
      width: 20%;
      margin-left: 10px;
   }

   .level {
      background: #56b68f;
      height: 12px;
   }
</style>
