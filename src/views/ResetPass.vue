<template>
   <div class="wrapper">
      <Navbar />
      <div class="vector"><div class="bg"></div></div>

      <div class="main">
         <div class="card">
            <h1>Create New Password</h1>
            <div class="change-pass">
               <form @submit.prevent="handleReset">
                  <label for="email">Your Email</label><br />
                  <input
                     id="email-icon"
                     type="email"
                     name="email"
                     placeholder="Enter your email"
                     v-model="email"
                     required
                  /><br />
                  <label for="newPass">Choose New Password</label><br />
                  <input
                     id="pass-icon"
                     type="password"
                     name="newPass"
                     placeholder="Enter new password"
                     v-model="newPass"
                     class="pass-field"
                     required
                  /><img
                     @click="showPass"
                     src="../../public/img/signup-seen-icon.svg"
                     class="seen"
                     v-if="!seenPass"
                  />
                  <img
                     class="seen"
                     src="../../public/img/signup-seenpass-icon.svg"
                     @click="showPass"
                     v-if="seenPass"
                  />
                  <br />
                  <label for="confirmPass">Confirm</label><br />
                  <input
                     id="confirm-icon"
                     type="password"
                     name="confirmPass"
                     placeholder="Cofirm new password"
                     v-model="confirmPass"
                     required
                  /><img
                     @click="showConfirm"
                     src="../../public/img/signup-seen-icon.svg"
                     class="seen2"
                     v-if="!seenPass2"
                  />
                  <img
                     class="seen2"
                     src="../../public/img/signup-seenpass-icon.svg"
                     @click="showConfirm"
                     v-if="seenPass2"
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
         return {
            email: "",
            newPass: "",
            confirmPass: "",

            seenPass: false,
            seenPass2: false,
         };
      },
      methods: {
         async handleReset() {
            const response_reset = await axios
               .post("api/v1/reset-password", {
                  token: this.$route.query.token,
                  email: this.email,
                  password: this.newPass,
                  password_confirmation: this.confirmPass,
               })
               .catch((err) => alert(err.response.data.message));
            if (response_reset.data.message === "Password reset successfully") {
               alert("Your password has been changed, please login again");

               this.$router.push("/SignIn");
            }
         },
         showPass() {
            var pswrd = document.getElementById("pass-icon");
            if (pswrd.type === "password") {
               pswrd.type = "text";
               this.seenPass = true;
            } else {
               pswrd.type = "password";
               this.seenPass = false;
            }
         },
         showConfirm() {
            var pswrd = document.getElementById("confirm-icon");
            if (pswrd.type === "password") {
               pswrd.type = "text";
               this.seenPass2 = true;
            } else {
               pswrd.type = "password";
               this.seenPass2 = false;
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
      padding: 30px 20px 20px;
   }

   h1,
   label {
      font-family: "Kanit", sans-serif;
      color: #eaf5ff;
   }

   h1 {
      text-align: center;
   }

   label {
      font-size: 16px;
      font-weight: 500;
   }

   #email-icon,
   #pass-icon,
   #confirm-icon {
      width: 530px;
      height: 30px;
      padding: 0 33px;
      border: none;
      border-radius: 5px;
   }

   .submission {
      margin-top: 30px;
   }

   .submission input {
      width: 530px;
      height: 30px;
      border: none;
      border-radius: 5px;
      background-color: #56b68f;
      font-family: "Kanit", sans-serif;
      font-weight: 500;
      color: #eaf5ff;
      font-size: 16px;
      cursor: pointer;
   }

   .submission input:hover {
      background-color: #44a07b;
   }

   #email-icon {
      background: white url(../../public/img/signup-email-icon.svg) left
         no-repeat;
      background-position: 11px;
   }

   #pass-icon {
      background: white url(../../public/img/signup-pass-icon.svg) left
         no-repeat;
      background-position: 11px;
   }

   #confirm-icon {
      background: white url(../../public/img/signup-pass-icon.svg) left
         no-repeat;
      background-position: 11px;
   }

   .seen {
      position: absolute;
      right: 35px;
      top: 163px;
   }

   .seen2 {
      position: absolute;
      right: 35px;
      top: 217px;
   }
</style>
