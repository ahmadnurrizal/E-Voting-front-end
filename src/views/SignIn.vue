<template>
   <div class="wrap">
      <!-- navbar -->
      <Navbar />
      <div class="top-vec"><div class="vec"></div></div>

      <!-- main sign in -->
      <div class="main">
         <div class="card">
            <div class="tittle">
               <h1>Welcome Back!</h1>
               <p>Please log in to your account</p>
            </div>
            <div class="handle-error" v-if="error">
               <p>incorrect username/password</p>
            </div>
            <div class="content">
               <form @submit.prevent="submitData">
                  <label for="email">Email</label><br />
                  <img
                     id="image-email"
                     src="../../public/img/signup-email-icon.svg"
                     alt=""
                  />
                  <input
                     type="email"
                     name="email"
                     v-model="email"
                     placeholder="fingerVote@example.com"
                     id="email-field"
                     required
                  /><br />
                  <label for="password">Password</label><br />
                  <input
                     type="password"
                     name="password"
                     v-model="password"
                     placeholder="************"
                     id="pw-field"
                     required
                  /><img
                     @click="showPw"
                     src="../../public/img/signup-seen-icon.svg"
                     class="unseen"
                     v-if="!seenPass"
                  />
                  <img
                     class="unseen"
                     src="../../public/img/signup-seenpass-icon.svg"
                     @click="showPw"
                     v-if="seenPass"
                  />
                  <br />
                  <p>
                     <router-link to="/forgot-password"
                        >Forgot your password?</router-link
                     >
                  </p>
                  <div class="submission">
                     <input type="submit" value="Log In" />
                     <p>
                        Don't have an account yet?
                        <span
                           ><router-link
                              to="/SignUp"
                              style="color: #1e6599; font-family: 'Roboto'; font-weight: 400"
                              >Sign Up</router-link
                           ></span
                        >
                     </p>
                  </div>
               </form>
               <div class="col-pic">
                  <img src="../../public/img/signin-main-pic.svg" alt="" />
               </div>
            </div>
         </div>
      </div>
      <Footer />
   </div>
</template>

<script>
   import Navbar from "@/components/Navbar.vue";
   import Footer from "../components/Footer.vue";

   import axios from "axios";

   export default {
      name: "SignIn",
      components: {
         Navbar,
         Footer,
      },
      data() {
         return {
            email: "",
            password: "",

            error: false,
            seenPass: false,
         };
      },
      methods: {
         async submitData() {
            const response = await axios
               .post("api/v1/login", {
                  email: this.email,
                  password: this.password,
               })
               .then((res) => {
                  localStorage.setItem("token", res.data.token);
                  this.$router.push("/");
               })
               .catch((err) => {
                  if (err.message === "Request failed with status code 401") {
                     this.error = true;
                  }
               });
         },
         showPw() {
            var pswrd = document.getElementById("pw-field");
            if (pswrd.type === "password") {
               pswrd.type = "text";
               this.seenPass = true;
            } else {
               pswrd.type = "password";
               this.seenPass = false;
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

   .wrap {
      background-color: #eaf5ff;
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
   .tittle {
      padding-top: 30px;
   }

   .tittle h1,
   p {
      color: #eaf5ff;
      text-align: center;
   }

   .tittle h1 {
      font-family: "Kanit", sans-serif;
      font-weight: 600;
      font-size: 48px;
   }

   .tittle p {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 18px;
   }

   a {
      text-decoration: none;
   }
   /* main content */
   .card {
      width: 755px;
      height: 548px;
      border: none;
      border-radius: 10px;
      box-shadow: 0 20px 26px rgba(54, 37, 37, 0.2);
      background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
      margin: auto;
   }

   .main {
      margin-top: 100px;
      margin-bottom: 100px;
   }

   .content {
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
   }

   form {
      position: relative;
      margin: 35px auto auto 30px;
   }
   form label {
      font-family: "Kanit", sans-serif;
      font-weight: 500;
      font-size: 24px;
      color: #eaf5ff;
      margin-bottom: 10px;
   }

   form input {
      border: #858484;
      border-style: solid;
      border-width: 1.5px;
      width: 340px;
      height: 40px;
      border-radius: 5px;
      margin-bottom: 15px;
      padding-left: 39px;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 16px;
   }

   form p {
      text-align: left;
   }

   form p a {
      font-family: "Roboto", sans-serif;
      font-size: 18px;
      font-weight: 400;
      color: #1e6599;
   }

   .col-pic img {
      size: 100%;
   }

   /* icon in placeholder */
   #image-email {
      position: absolute;
      top: 47px;
      left: 12px;
   }

   /* #email-field {
      background: white url(../../public/img/signup-email-icon.svg) left
         no-repeat;
      background-position: 11px;
   } */
   #pw-field {
      background: white url(../../public/img/signup-pass-icon.svg) left
         no-repeat;
      background-position: 11px;
   }
   /* end of placeholder icon css settings */

   /* unseen icon */
   .unseen {
      position: absolute;
      right: 10px;
      top: 137px;
   }

   /* submisson section */
   .submission {
      position: absolute;
      text-align: center;
      padding-top: 27px;
      margin: 0 130px;
   }

   .submission p {
      font-family: "Roboto";
      font-weight: 400;
      font-size: 18px;
      padding-top: 30px;
      padding-bottom: 52px;
      text-align: center;
      color: #eaf5ff;
   }

   .submission input[type="submit"] {
      font-family: "Kanit", "normal";
      color: #eaf5ff;
      font-size: 18px;
      font-weight: 400;
   }

   .submission input {
      cursor: pointer;
      background-color: #56b68f;
      padding: 0 13px;
      width: 403px;
      height: 40px;
      border: none;
      border-radius: 20px;
   }
   .submission input:hover {
      background-color: #44a07b;
      width: 403px;
      height: 40px;
      border: none;
      border-radius: 20px;
   }
   /* endof section */

   /* error handle */
   .handle-error p {
      font-family: "Roboto", sans-serif;
      font-size: 18px;
      color: red;
   }

   /* responsive for mobile */
   @media (max-width: 586px) {
      .top-vec {
         padding-top: 60px;
      }

      .vec {
         padding-top: 70px;
         padding-bottom: 80px;
      }

      /* main content */
      .main {
         padding: 50px 10px;
         margin: 20px auto;
      }

      .card {
         width: 300px;
         height: 400px;
         padding: 0px 10px 8px;
      }

      .content {
         padding: 0;
      }

      .tittle h1 {
         font-size: 27px;
      }

      #image-email {
         top: 31px;
      }

      form {
         margin: 20px;
      }

      .tittle p {
         font-size: 13px;
      }

      form p a {
         font-size: 15px;
      }

      form input {
         width: 240px;
         height: 25px;
         margin-bottom: 7px;
      }

      form label {
         font-size: 18px;
      }

      /* unseen icon */
      .unseen {
         position: absolute;
         right: 9px;
         top: 90px;
      }

      .col-pic img {
         display: none;
      }

      .submission {
         margin: 0 3px;
      }

      .submission input,
      .submission input:hover {
         width: 200px;
         height: 26px;
      }

      .submission p {
         font-size: 15px;
      }

      .submission input[type="submit"] {
         font-size: 13px;
      }
   }

   /* responsive for tablet */
   @media (min-width: 587px) and (max-width: 1156px) {
      .top-vec {
         padding-top: 60px;
      }

      .vec {
         padding-top: 125px;
         padding-bottom: 80px;
      }

      .main {
         padding: 50px 10px;
         margin: 20px auto;
      }

      .card {
         width: 570px;
         height: 490px;
         padding: 0 20px 10px;
      }

      form {
         padding-right: 8px;
      }

      form p {
         font-size: 15px;
      }

      form input {
         width: 300px;
         height: 30px;
      }

      #image-email {
         top: 42px;
      }

      /* unseen icon */
      .unseen {
         position: absolute;
         right: 14px;
         top: 122px;
      }

      .col-pic {
         margin: 0;
         padding-top: 50px;
      }

      .col-pic img {
         width: 100%;
      }

      .submission {
         margin: 0 100px;
      }

      .submission input,
      .submission input:hover {
         width: 250px;
         height: 30px;
      }

      .submission p,
      form p a {
         font-size: 15px;
      }
   }
</style>
