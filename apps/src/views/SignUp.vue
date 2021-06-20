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
                     <label for="name">Name</label><span class="br"></span> <input type="text" name="name" placeholder="Full Name" /><span class="br"></span> <label for="email">Email</label><span class="br"></span>
                     <input type="email" name="email" placeholder="fingerVote@gmail.com" /><span class="br"></span> <label for="password">Password</label><span class="br"></span>
                     <input type="password" name="password" placeholder="************" /><span class="br"></span> <label for="dob">Date of Birth</label><span class="br"></span> <input type="date" name="dob" placeholder="" /><span
                        class="br"
                     ></span>
                     <label for="gender">Gender</label><span class="br"></span>
                     <select class="option" name="gender" id="">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                     </select>
                     <span class="br"></span>
                     <li>
                        <label style="word-wrap:break-word"><input class="checkbox" type="checkbox" name="" id="" /><span style="color:#EAF5FF">Make sure your data is </span><span style="color: #1E6599">Correct</span></label>
                     </li>
                  </form>
               </div>
               <div class="col-pic">
                  <img src="../../public/img/signup-main-pic.svg" alt="" />
               </div>
            </div>
            <div class="submition">
               <input type="submit" value="Create Account" />
               <p>
                  Already have an account? <span><a href="">login</a></span>
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
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@500;600&family=Roboto&display=swap");

* {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
}

.top-vec {
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

.wrapper {
   background-color: #eaf5ff;
}

.wrapper img {
   padding-top: 50px;
   width: 100%;
}

.br {
   display: block;
   margin-bottom: 10px;
}

.col-input label {
   font-family: "Kanit", sans-serif;
   font-weight: 500;
   font-size: 24px;
   color: #eaf5ff;
}

.option,
input:not(.checkbox) {
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

/* footer */
.footer {
   margin-top: 100px;
}
</style>
