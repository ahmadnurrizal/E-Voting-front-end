<template>
   <div class="wrap">
      <!-- navbar -->
      <Navbar />
      <img class="top-vec" src="../../public/img/vector/signup-wave.svg" alt="" />

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
               <input
                  type="submit"
                  value="Log In"
                  style="
              font-family: 'Kanit', 'normal';
              color: #eaf5ff;
              font-size: 18px;
              font-weight: 400;
            "
               />
               <p>
                  Don't have an account yet?
                  <span><a href="" style="color: #1e6599; font-family: 'Roboto'; font-weight: 400">Sign Up</a></span>
               </p>
            </div>
         </div>
         <div class="footer">
            <Footer />
         </div>
      </div>
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
   margin-top: 50px;
   width: 100%;
   margin-bottom: 100px;
}
.tittle {
   padding-top: 30px;
}

.tittle h1,
p {
   color: #eaf5ff;
   text-align: center;
}
.card {
   width: 755px;
   height: 548px;
   border: none;
   border-radius: 10px;
   box-shadow: 0 20px 26px rgba(54, 37, 37, 0.2);
   background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
   margin: auto;
}
/* main content */
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

/* footer */
.footer {
   margin-top: 100px;
}
</style>
