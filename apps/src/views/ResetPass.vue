<template>
   <div class="wrapper">
      <Navbar />
      <div class="vector"><div class="bg"></div></div>

      <div class="main">
         <div class="card">
            <h1>Create New Password</h1>
            <div class="change-pass">
               <form>
                  <label for="newPass">Choose New Password</label><br />
                  <input
                     type="text"
                     name="newPass"
                     placeholder="Enter password"
                     required
                  /><br />
                  <label for="confirmPass">Confirm</label><br />
                  <input
                     type="text"
                     name="confirmPass"
                     placeholder="Cofirm password"
                     required
                  />
                  <br />
                  <div class="submission">
                     <input type="submit" value="Create Password" />
                  </div>
               </form>
            </div>
         </div>
      </div>
      <Footer />
   </div>
</template>

<script>
   import axios from "axios";

   import Navbar from "@/components/Navbar.vue";
   import Footer from "../components/Footer.vue";
   export default {
      name: "ResetPass",
      components: {
         Navbar,
         Footer,
      },
      data() {
         return {};
      },
   };
</script>

<style scoped>
   @import url("https://fonts.googleapis.com/css2?family=Kanit:wght@400;600&family=Roboto:wght@300;400&display=swap");
   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
   }

   .wrapper {
      background-color: #eaf5ff;
   }

   .vector {
      padding-top: 60px;
   }

   .bg {
      padding-top: 200px;
      padding-bottom: 170px;
      background-image: url("../../public/img/vector/signup-wave.svg");
      background-size: cover;
      background-repeat: no-repeat;
   }
   .main {
      margin-top: 100px;
      margin-bottom: 100px;
   }

   .card {
      position: relative;
      width: 576px;
      height: 385px;
      border: none;
      border-radius: 10px;
      box-shadow: 0 20px 26px rgba(54, 37, 37, 0.2);
      background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
      margin: auto;
   }
</style>
