<template>
   <div class="wrapper">
      <!-- navbar -->
      <Navbar />
      <img class="top-vec" src="../../public/img/vector/signup-wave.svg" alt="" />

      <!-- main sign up -->
      <div class="main">
         <div class="card">
            <div class="title-card">
               <h1>Create an Account</h1>
            </div>
            <div class="content">
               <div class="col-input">
                  <form class="form" action="">
                     <label for="name">Name</label><br />
                     <input type="text" name="name" placeholder="Full Name" id="name-field" required /><br />
                     <label for="email">Email</label><br />
                     <input type="email" name="email" placeholder="fingerVote@gmail.com" id="email-field" required /><br />
                     <label for="password">Password</label><br />
                     <input type="password" name="password" placeholder="************" id="pw-field" required /><br />
                     <label for="dob">Date of Birth</label><br />
                     <input type="date" name="dob" placeholder="" id="dob-field" required /> <label for="gender">Gender</label><br />
                     <select class="option" name="gender" id="opt-field">
                        <option value="" disabled selected hidden style="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                     </select>
                     <br />
                     <li>
                        <label style="word-wrap: break-word"
                           ><input class="checkbox" type="checkbox" name="" id="" required style="margin-right: 10px;" /><span style="color: #eaf5ff;font-family: 'Roboto';font-weight: 300;">Make sure your data is </span
                           ><span style="color: #1e6599">Correct</span></label
                        >
                     </li>
                  </form>
               </div>
               <div class="col-pic">
                  <img src="../../public/img/signup-main-pic.svg" alt="" />
               </div>
            </div>
            <div class="submission">
               <input
                  type="submit"
                  value="Create Account"
                  style="
              font-family: 'Kanit', 'normal';
              color: #eaf5ff;
              font-size: 18px;
              font-weight: 400;
            "
               />
               <p>
                  Already have an account?
                  <span><a href="" style="color: #1e6599; font-family: 'Roboto'; font-weight: 400">login</a></span>
               </p>
            </div>
         </div>
         <div class="footer">
            <Footer />
         </div>
      </div>

      <!-- footer -->
   </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
   name: "SignUp",
   components: {
      Navbar,
      Footer,
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

.top-vec {
   margin-top: 50px;
   width: 100%;
   margin-bottom: 100px;
}

.title-card h1 {
   padding-top: 30px;
   padding-bottom: 35px;
   text-align: center;
   color: #eaf5ff;
}

.card {
   width: 755px;
   height: 785px;
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
   background: white url(../../public/img/signup-name-icon.svg) left no-repeat;
   background-position: 11px;
}
#email-field {
   background: white url(../../public/img/signup-email-icon.svg) left no-repeat;
   background-position: 11px;
}
#pw-field {
   background: white url(../../public/img/signup-pass-icon.svg) left no-repeat;
   background-position: 11px;
}
#dob-field {
   position: relative;
}

input[type="date"]::-webkit-calendar-picker-indicator {
   background: url(../../public/img/signup-dob-icon.svg) no-repeat;
   position: absolute;
   margin-left: -27px;
}

#opt-field {
   padding-left: 39px;
   background: white url(../../public/img/signup-gender-icon.svg) left no-repeat;
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

.submission {
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

.col-input label {
   font-family: "Kanit", sans-serif;
   font-weight: 500;
   font-size: 24px;
   color: #eaf5ff;
}

.form label {
   margin-bottom: 10px;
}

.form input {
   margin-bottom: 15px;
   padding-left: 39px;
}

.option,
.form input:not(.checkbox) {
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

.col-input li label {
   font-family: "Roboto", sans-serif;
   font-size: 18px;
   font-weight: 400;
}

.col-input {
   padding-left: 30px;
}

.col-pic img {
   width: 100%;
   position: relative;
   padding-top: 50px;
   margin-left: 80px;
}

/* footer */
.footer {
   margin-top: 100px;
}
</style>
