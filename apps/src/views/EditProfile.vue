<template>
   <div class="wrapper">
      <NavLog />
      <div class="wave-top"><div class="vec"></div></div>
      <div class="main">
         <div class="card">
            <Topbar />
            <div class="body">
               <Sidebar />
               <div class="edit">
                  <div class="profile">
                     <img src="../../public/img/profile-default.svg" alt="" />
                     <button>change profile pic</button>
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
   width: 948px;
   height: 980px;
}

.body {
   display: flex;
}
</style>
