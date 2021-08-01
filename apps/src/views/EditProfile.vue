<template>
   <div class="wrapper">
      <NavLog />
      <div class="wave-top"><div class="vec"></div></div>
      <div class="main">
         <div class="card">
            <Topbar />
            <div class="body">
               <div class="side">
                  <Sidebar />
               </div>
               <div class="edit">
                  <div class="profile">
                     <img src="../../public/img/profile-default.svg" alt="" />
                     <button>change profile picture</button>
                  </div>
                  <form action="">
                     <label for="">Profile Name</label><br />
                     <input type="text" /><br />
                     <label for="">Username</label><br />
                     <input type="text" /><br />
                     <label for="">Email</label><br />
                     <input type="text" /><br />
                     <label for="">Location</label><br />
                     <input type="text" /><br />
                     <label for="">Status</label><br />
                     <input type="text" /><br />

                     <div class="submision">
                        <button>save profile</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
      <Footer />
   </div>
</template>

<script>
import NavLog from "@/components/NavLog.vue";
import Footer from "../components/Footer.vue";

import Topbar from "../components/TopBar.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
   name: "settings",
   components: {
      NavLog,
      Footer,
      Topbar,
      Sidebar,
   },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@500&family=Roboto&display=swap");

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
   width: 948px;
   height: 980px;
   background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
}

.side {
   border-right: solid 3px #bde0ff;
   margin-top: 10px;
   height: 750px;
}

.body {
   display: flex;
}

.edit {
   margin: 30px;
}

img {
   width: 100px;
   margin-right: 20px;
}

button,
label {
   font-family: "Kanit", sans-serif;
}

.profile {
   align-items: center;
   display: flex;
   margin-bottom: 40px;
}

.profile button {
   font-weight: 500;
   line-height: 32.4px;
   background-color: #bde0ff;
   color: #539be0;
   font-size: 18px;
   border: none;
   border-radius: 15px;
   width: 250px;
   height: 40px;
}

form label {
   font-weight: 500;
   font-size: 24px;
   color: #eaf5ff;
   margin-bottom: 10px;
}

form input {
   width: 529px;
   height: 35px;
   border: #858484;
   border-style: solid;
   border-radius: 5px;
   border-width: 1.5px;
   margin-bottom: 20px;
}

.submision button {
   margin-top: 10px;
   background-color: #ff7070;
   border: none;
   border-radius: 25px;
   width: 200px;
   height: 50px;
   color: #ffffff;
   font-size: 20px;
}
</style>
