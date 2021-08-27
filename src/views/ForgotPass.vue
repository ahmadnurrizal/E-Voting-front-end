<template>
   <div class="wrapper">
      <Navbar />
      <div class="vector"><div class="bg"></div></div>

      <div class="main">
         <div class="card">
            <div class="title">
               <h1>Forgot Password</h1>
               <p>
                  In case you forgot your password to access your fingerVote
                  account, you can initiate a reset process here.
               </p>
            </div>
            <div class="input-field">
               <form @submit.prevent="handleForgot">
                  <label for="email">Email</label><br />
                  <input
                     type="text"
                     name="email"
                     placeholder="fingerVote@example.com"
                     v-model="email"
                     required
                  />
                  <br />
                  <div class="submission">
                     <input type="submit" value="Reset Password" />
                     <p>
                        Did you remember your password? Try to
                        <router-link to="/SignIn">Login</router-link>
                     </p>
                  </div>
                  <div class="afterSubmit">
                     <h1 v-if="success">{{ status }}</h1>
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
      name: "ForgotPass",
      components: {
         Navbar,
         Footer,
      },
      data() {
         return {
            email: "",
            status: "",

            success: false,
         };
      },
      methods: {
         async handleForgot() {
            const response = await axios.post("api/v1/forgot-password", {
               email: this.email,
            });
            this.status = response.data.status;

            if (
               response.data.status !=
               "We have emailed your password reset link!"
            ) {
               this.success = false;
            } else {
               this.success = true;
            }
         },
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
      padding: 20px;
   }

   .title {
      text-align: center;
   }

   h1,
   label {
      font-family: "Kanit", sans-serif;
      color: #eaf5ff;
   }

   label {
      font-size: 24px;
      font-weight: 500;
   }

   p {
      font-family: "Roboto", sans-serif;
      color: #1e6599;
   }

   input[type="text"] {
      width: 530px;
      height: 30px;
      margin-bottom: 30px;
   }

   input[type="submit"] {
      font-family: "Kanit", sans-serif;
      font-weight: 500;
      font-size: 16px;
      color: #eaf5ff;
      width: 530px;
      height: 30px;
      background-color: #56b68f;
      border: none;
      border-radius: 5px;
      margin-bottom: 40px;
   }
   input[type="submit"]:hover {
      background-color: #44a07b;
   }
</style>
