<template>
   <div class="wrapper">
      <NavLog />
      <div class="wave-top"><div class="vec"></div></div>
      <div class="main">
         <div class="card">
            <div class="polls" v-for="item in polls.slice(0, 10)" :key="item">
               {{ item.title }}
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
      };
   },
   async created() {
      const response = await axios.get("api/v1/polls", {
         headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
         },
      });
      this.polls = response.data.data;
      //   console.log(response.data.data);
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
</style>
