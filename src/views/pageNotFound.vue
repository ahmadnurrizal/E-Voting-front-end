<template>
   <div class="wrapper">
      <NavLog v-if="isLogin" />
      <Navbar v-else />
      <div class="wave-top"><div class="vec"></div></div>
      <div class="content-404">
         <img src="../../public/img/vector/notFoundpage.svg" alt="" />
         <h1>Oops! Page Not Found</h1>
         <a href="/">Back To Home</a>
      </div>
   </div>
</template>

<script>
   import Navbar from "@/components/Navbar.vue";
   import NavLog from "@/components/NavLog.vue";
   export default {
      components: {
         Navbar,
         NavLog,
      },
      async created() {
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

   .content-404 {
      margin: auto;
      text-align: center;
      padding-bottom: 100px;
   }

   .content-404 img {
      margin: 148px auto 50px;
   }

   .content-404 h1 {
      font-family: "Kanit", sans-serif;
      font-weight: 600;
      font-size: 72px;
      color: #539be0;
      margin-bottom: 50px;
   }
   .content-404 a {
      text-decoration: none;
      background-color: #539be0;
      width: 200px;
      height: 50px;
      border-radius: 25px;
      padding: 7px 36px;
      font-family: "kanit", sans-serif;
      font-weight: 500;
      font-size: 20px;
      color: #ffffff;
   }

   .content-404 a:hover {
      background-color: #277dce;
   }
</style>
