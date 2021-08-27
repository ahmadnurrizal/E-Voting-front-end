<template>
   <div class="wrapper">
      <!-- navbar -->
      <Navbar />
      <div class="vector"><div class="bg"></div></div>

      <!-- main sign up -->
      <div class="main">
         <div class="card">
            <div class="title-card">
               <h1>Create an Account</h1>
            </div>
            <div class="content">
               <form @submit.prevent="submitData">
                  <label for="name">Name</label><br />
                  <input
                     type="text"
                     name="name"
                     v-model="name"
                     placeholder="Full Name"
                     id="name-field"
                     required
                  /><br />
                  <label for="email">Email</label><br />
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
                     class="seen"
                  /><br />
                  <label for="password_confirmation"
                     >Password Confrimation</label
                  ><br />
                  <input
                     type="password"
                     name="password_confirmation"
                     v-model="password_confirmation"
                     placeholder="************"
                     id="pw_c-field"
                     required
                  /><img
                     @click="showPw_c"
                     src="../../public/img/signup-seen-icon.svg"
                     class="seen2"
                  /><br />
                  <label for="dob">Date of Birth</label><br />
                  <input
                     type="date"
                     name="dob"
                     v-model="date_of_birth"
                     placeholder=""
                     id="dob-field"
                     required
                  />
                  <label for="gender">Gender</label><br />
                  <select
                     class="option"
                     name="gender"
                     v-model="gender"
                     id="opt-field"
                  >
                     <option value="" disabled selected hidden style=""
                        >Select</option
                     >
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                  </select>
                  <br />
                  <li>
                     <label style="word-wrap: break-word"
                        ><input
                           class="checkbox"
                           type="checkbox"
                           name=""
                           id=""
                           required
                           style="margin-right: 10px;"
                        /><span>Make sure your data is </span
                        ><span style="color: #1e6599">Correct</span></label
                     >
                  </li>
                  <div class="submission">
                     <input
                        class="submit"
                        type="submit"
                        value="Create Account"
                     />
                     <p>
                        Already have an account?
                        <span
                           ><router-link
                              to="/SignIn"
                              style="color: #1e6599; font-family: 'Roboto'; font-weight: 400"
                              >login</router-link
                           ></span
                        >
                     </p>
                  </div>
               </form>
               <div class="col-pic">
                  <img src="../../public/img/signup-main-pic.svg" alt="" />
               </div>
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
      name: "SignUp",
      components: {
         Navbar,
         Footer,
      },
      data() {
         return {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            date_of_birth: "",
            gender: "",
         };
      },
      methods: {
         async submitData() {
            const response = await axios.post("api/v1/register", {
               name: this.name,
               email: this.email,
               password: this.password,
               password_confirmation: this.password_confirmation,
               date_of_birth: this.date_of_birth,
               gender: this.gender,
            });

            // axios.post(url, {

            // })
            // .then(response => {

            // })
            // .catch(err => {

            // })

            this.$router.push("/SignIn");
         },
         showPw() {
            var pswrd = document.getElementById("pw-field");
            if (pswrd.type === "password") {
               pswrd.type = "text";
            } else {
               pswrd.type = "password";
            }
         },
         showPw_c() {
            var pswrd = document.getElementById("pw_c-field");
            if (pswrd.type === "password") {
               pswrd.type = "text";
            } else {
               pswrd.type = "password";
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

   .title-card h1 {
      padding-top: 30px;
      padding-bottom: 35px;
      text-align: center;
      color: #eaf5ff;
   }

   .main {
      margin-top: 100px;
      margin-bottom: 100px;
   }

   .card {
      position: relative;
      width: 755px;
      height: 885px;
      border: none;
      border-radius: 10px;
      box-shadow: 0 20px 26px rgba(54, 37, 37, 0.2);
      background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
      margin: auto;
   }

   .content {
      display: flex;
   }

   /* icon in placeholder */
   #name-field {
      background: white url(../../public/img/signup-name-icon.svg) left
         no-repeat;
      background-position: 11px;
   }
   #email-field {
      background: white url(../../public/img/signup-email-icon.svg) left
         no-repeat;
      background-position: 11px;
   }
   #pw-field {
      background: white url(../../public/img/signup-pass-icon.svg) left
         no-repeat;
      background-position: 11px;
   }
   #pw_c-field {
      background: white url(../../public/img/signup-pass-icon.svg) left
         no-repeat;
      background-position: 11px;
   }
   #dob-field {
      position: relative;
   }

   .seen {
      position: absolute;
      right: 10px;
      top: 227px;
   }

   .seen2 {
      position: absolute;
      right: 10px;
      top: 316px;
   }

   input[type="date"]::-webkit-calendar-picker-indicator {
      background: url(../../public/img/signup-dob-icon.svg) no-repeat;
      position: absolute;
      margin-left: -27px;
   }

   #opt-field {
      padding-left: 39px;
      background: white url(../../public/img/signup-gender-icon.svg) left
         no-repeat;
      background-position: 11px;
      margin-bottom: 15px;
   }

   input[type="checkbox"] {
      /* Double-sized Checkboxes */
      -ms-transform: scale(1.5); /* IE */
      -moz-transform: scale(1.5); /* FF */
      -webkit-transform: scale(1.5); /* Safari and Chrome */
      -o-transform: scale(1.5); /* Opera */
      transform: scale(1.5);
      margin-left: 4px;
   }

   /* end of placeholder icon css settings */

   .wrapper {
      background-color: #eaf5ff;
   }

   .main {
      margin-bottom: 100px;
   }

   .submission {
      position: absolute;
      margin: 0 150px;
      text-align: center;
      padding-top: 27px;
   }

   .submission p {
      font-family: "Roboto";
      font-weight: 300;
      padding-top: 30px;
      padding-bottom: 52px;
      text-align: center;
      color: #eaf5ff;
   }

   .submission input {
      cursor: pointer;
      background-color: #56b68f;
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

   form {
      position: relative;
   }

   form label {
      font-family: "Kanit", sans-serif;
      font-weight: 500;
      font-size: 24px;
      color: #eaf5ff;
      margin-bottom: 10px;
   }

   form input {
      margin-bottom: 15px;
      padding-left: 39px;
   }

   .option,
   input:not(.checkbox, .submit) {
      border: #858484;
      border-style: solid;
      border-width: 1.5px;
      width: 340px;
      height: 40px;
      border-radius: 5px;
   }

   li {
      list-style: none;
   }

   form li label {
      font-family: "Roboto", sans-serif;
      font-size: 18px;
      font-weight: 400;
   }

   form {
      padding-left: 30px;
   }

   .col-pic img {
      width: 100%;
      position: relative;
      padding-top: 50px;
      margin-left: 80px;
   }

   .submission input[type="submit"] {
      font-family: "Kanit", "normal";
      color: #eaf5ff;
      font-size: 18px;
      font-weight: 400;
      padding: 0 50px;
   }

   /* responsive for mobile */
   @media (max-width: 586px) {
      .vector {
         padding-top: 60px;
      }

      .bg {
         padding-top: 80px;
         padding-bottom: 80px;
      }

      /* main content */
      .main {
         padding: 50px 10px;
         margin: 20px auto;
      }

      .title-card h1 {
         font-size: 27px;
      }

      .card {
         width: 300px;
         height: 750px;
         padding: 0px 1px 8px;
      }

      form label {
         font-size: 18px;
      }

      form li label {
         font-size: 15px;
      }

      .option,
      input:not(.checkbox, .submit) {
         position: relative;
         width: 240px;
         height: 35px;
      }

      /* seen unseen */
      .seen {
         right: 33px;
         top: 190px;
      }

      .seen2 {
         position: absolute;
         z-index: 1;
         right: 32px;
         top: 268px;
      }

      /* checkbox scale */
      input[type="checkbox"] {
         /* Double-sized Checkboxes */
         -ms-transform: scale(1); /* IE */
         -moz-transform: scale(1); /* FF */
         -webkit-transform: scale(1); /* Safari and Chrome */
         -o-transform: scale(1); /* Opera */
         transform: scale(1);
         margin-left: 4px;
      }

      .col-pic img {
         display: none;
      }

      .submission {
         margin: 0 15px;
         padding-top: 15px;
      }

      .submission input[type="submit"] {
         padding: 0 5px;
      }

      .submission input,
      .submission input:hover {
         width: 170px;
         height: 35px;
      }

      .submission p {
         font-size: 15px;
         margin: 25px auto 0;
         padding: 0;
      }

      .submission input[type="submit"] {
         font-size: 13px;
      }
   }

   /* responsive for tablet */
   @media (min-width: 587px) and (max-width: 1156px) {
      .vector {
         padding-top: 60px;
      }

      .bg {
         padding-top: 125px;
         padding-bottom: 80px;
      }

      .main {
         padding: 40px 20px;
         margin: 20px auto;
      }

      .card {
         width: 670px;
         height: 760px;
         padding: 0 20px 10px;
      }

      .option,
      form input:not(.checkbox) {
         width: 300px;
         height: 30px;
      }

      form {
         padding-left: 0;
      }

      /* seen unseen */
      .seen {
         right: 10px;
         top: 178px;
      }

      .seen2 {
         z-index: 1;
         right: 10px;
         top: 248px;
      }

      .col-pic {
         padding: 30px 0 10px;
      }

      .col-pic img {
         padding: 0;
         margin-left: 10px;
      }

      form label {
         font-size: 18px;
      }
      form li label {
         font-size: 16px;
      }
   }
</style>
