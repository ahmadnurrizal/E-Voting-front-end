<template>
   <div class="wrapper">
      <!-- Navbar -->
      <Navlog />
      <div class="top-vec"><div class="vec"></div></div>

      <!-- main content -->
      <!-- <h1>masukk{{ pollId }}</h1> -->
      <div class="main">
         <div class="card">
            <div class="head">
               <h1>{{ title }}</h1>
               <p>Created by {{ userdata.name }} at {{ created_at }}</p>
            </div>
            <div class="desc">
               <h2>{{ description }}</h2>
               <img src="" alt="" />
            </div>
            <form>
               <h2>Choose one answer :</h2>
               <img src="" alt="" />
               <label style="word-wrap: break-word"><input class="checkbox" type="checkbox" /><span>pilihan 1</span></label> <br />
               <img src="" alt="" />
               <label style="word-wrap: break-word"><input class="checkbox" type="checkbox" /><span>pilihan 2</span></label> <br />
               <img src="" alt="" />
               <label style="word-wrap: break-word"><input class="checkbox" type="checkbox" /><span>pilihan 3</span></label> <br />
               <div class="submission">
                  <input type="submit" value="vote" />
                  <button>result</button>
                  <button>share</button>
               </div>
            </form>
         </div>
         <div class="2nd-card">
            <h1>Share Poll</h1>
            <div class="link-address">
               <input type="text" placeholder="link yang mau dishare" />
               <button>Copy Link</button>
            </div>
            <div class="socmed">
               <a href="">instagram</a>
               <a href="">telegram</a>
               <a href="">twitter</a>
               <a href="">facebpok</a>
            </div>
         </div>
      </div>
      <Footer />
   </div>
</template>

<script>
import Navlog from "@/components/NavLog.vue";
import Footer from "../components/Footer.vue";

import axios from "axios";
export default {
   components: {
      Navlog,
      Footer,
   },
   data() {
      return {
         pollId: this.$route.params.id,
         userdata: "",

         title: "",
         created_at: "",
         description: "",
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
      let lastPoll = response.data.message[response.data.message.length - 1];
      console.log(lastPoll);
      (this.title = lastPoll.title), (this.created_at = lastPoll.created_at), (this.description = lastPoll.description);
   },
};
</script>

<style scoped>
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

.main {
   display: inline-block;
   background-color: black;
   margin: 280px;
}

.card {
   width: 755px;
   min-height: 988px;
   padding-bottom: 40px;
   height: auto;
   border: none;
   border-radius: 10px;
   box-shadow: 0 20px 26px rgba(54, 37, 37, 0.2);
   background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
   margin: 20px;
}
</style>
