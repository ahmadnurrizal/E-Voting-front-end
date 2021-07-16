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
            <div class="content">
               <div class="col-input">
                  <form class="form" action="">
                     <label for="email">Email</label><br />
                     <input type="email" name="email" placeholder="fingerVote@gmail.com" id="email-field" required /><br />
                     <label for="password">Password</label><br />
                     <input type="password" name="password" placeholder="************" id="pw-field" required /><br />
                     <p><a href="">Forgot your password?</a></p>
                  </form>
               </div>
               <div class="col-pic">
                  <img src="../../public/img/signin-main-pic.svg" alt="" />
               </div>
            </div>
            <div class="submission">
               <input type="submit" value="Log In" />
               <p>
                  Don't have an account yet?
                  <span><a href="" style="color: #1e6599; font-family: 'Roboto'; font-weight: 400">Sign Up</a></span>
               </p>
            </div>
         </div>
      </div>
      <Footer />
   </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
   name: "SignIn",
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
   display: flex;
   justify-content: center;
}

.col-input {
   padding-top: 35px;
}
.col-input label {
   font-family: "Kanit", sans-serif;
   font-weight: 500;
   font-size: 24px;
   color: #eaf5ff;
}

.form input {
   border: #858484;
   border-style: solid;
   border-width: 1.5px;
   width: 340px;
   height: 40px;
   border-radius: 5px;
}

.form label {
   margin-bottom: 10px;
}

.form input {
   margin-bottom: 15px;
   padding-left: 39px;
}

.form p {
   text-align: left;
}

.form p a {
   font-family: "Roboto", sans-serif;
   font-size: 18px;
   line-height: 180%;
   color: #1e6599;
}

.col-pic img {
   height: 240px;
   width: 327px;
   position: relative;
   margin-left: 48px;
}

/* icon in placeholder */
#email-field {
   background: white url(../../public/img/signup-email-icon.svg) left no-repeat;
   background-position: 11px;
}
#pw-field {
   background: white url(../../public/img/signup-pass-icon.svg) left no-repeat;
   background-position: 11px;
}
/* end of placeholder icon css settings */

/* submisson section */
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

.submission input[type="submit"] {
   font-family: "Kanit", "normal";
   color: #eaf5ff;
   font-size: 18px;
   font-weight: 400;
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
/* endof section */

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
      width: 340px;
      height: 400px;
      padding: 0px 10px 8px;
   }

   .tittle h1 {
      font-size: 27px;
   }

   .tittle p {
      font-size: 13px;
   }

   .form p a {
      font-size: 15px;
   }

   .form input {
      width: 240px;
      height: 25px;
      margin-bottom: 7px;
   }

   .form label {
      font-size: 18px;
   }

   .col-pic img {
      display: none;
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

   .form input {
      width: 300px;
      height: 30px;
   }

   .col-pic {
      padding: 0 20px;
   }

   .col-pic img {
      width: 100%;
      margin: 0;
   }

   .submission input,
   .submission input:hover {
      width: 250px;
      height: 30px;
   }
}
</style>
