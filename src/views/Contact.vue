<template>
   <div class="wrapper">
      <NavLog v-if="isLogin" />
      <Navbar v-else />
      <div class="wave-top"><div class="vec"></div></div>
      <div class="main">
         <div class="card">
            <h1>Contact Us</h1>
            <div class="body">
               <p class="headline">If you want to ask something, you can contact the email below:</p>
               <h3>UI/UX Designer</h3>
               <div class="info">
                  <p>Name : Muhammad Ali Fikri</p>
                  <p>Email : fikriali48@gmail.com</p>
               </div>
               <h3>Front-end Developer</h3>
               <div class="info">
                  <p>Name : Rizki Nabil Aufa</p>
                  <p>Email : rizki.nbl123@gmail.com</p>
               </div>
               <h3>Back-end Developer</h3>
               <div class="info">
                  <p>Name : Ahmad Nur Rizal</p>
                  <p class="end">Email : ahmadnur.rizal45@gmail.com</p>
               </div>
               <div class="pic">
                  <img src="../../public/img/contact-icon.svg" alt="" />
               </div>
            </div>
         </div>
      </div>
      <Footer />
   </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import NavLog from "@/components/NavLog.vue";
import Footer from "../components/Footer.vue";

export default {
   name: "Contact",
   components: {
      Navbar,
      NavLog,
      Footer,
   },
   data() {
      return {
         isLogin: false,
      };
   },
   created() {
      let token = localStorage.getItem("token");
      if (!token) {
         this.isLogin = false;
      } else {
         this.isLogin = true;
      }
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

.card {
   margin: 100px auto;
   padding: 30px 40px 65px;
   width: 948px;
   height: 623px;
   background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
}

.body {
   position: relative;
}

.card h1 {
   font-size: 48px;
   margin-bottom: 35px;
}

.headline {
   margin-bottom: 30px;
}

.info {
   margin-bottom: 30px;
}

.info p {
   margin-bottom: 10px;
}
p {
   font-family: "Roboto", sans-serif;
   color: #eaf5ff;
   font-size: 18px;
}
.card h1 {
   font-family: "Kanit", sans-serif;
   color: #eaf5ff;
}
h3 {
   font-size: 24px;
   margin-bottom: 15px;
   font-family: "Kanit", sans-serif;
   color: #eaf5ff;
}

.pic {
   position: absolute;
   right: 0;
   bottom: -25px;
}
</style>
