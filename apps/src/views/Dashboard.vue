<template>
   <div class="wrapper">
      <NavLog />
      <div class="wave-top"><div class="vec"></div></div>
      <div class="main">
         <div class="card">
            <h1>Dashboard</h1>
            <div class="profile">
               <img src="../../public/img/profile-default.svg" alt="" />
               <h1>{{ userdata.name }}</h1>
               <p>{{ userdata.status }}</p>
            </div>
            <div class="list-poll">
               <ul v-if="!empty">
                  <li class="polls" v-for="item in polls.slice(0, 10)" :key="item">
                     {{ item.title }}
                     {{ item.deadline }}
                     {{ item.status }}
                  </li>
               </ul>
               <ul v-else>
                  <h3>tidak ada poll</h3>
               </ul>
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
      };
   },
   async created() {
      const user = await axios.get("api/v1/user", {
         headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
         },
      });
      this.userdata = user.data.data;
      const response = await axios.get("api/v1/user-poll", {
         headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
         },
      });
      this.polls = response.data.message;
      if (this.polls.length == 0) {
         this.empty = true;
      }
      // console.log(response.data);
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
}

h1 {
   text-align: center;
}

.profile {
   text-align: center;
}
</style>
