<template>
   <div class="wrapper">
      <NavLog />
      <div class="wave-top"><div class="vec"></div></div>
      <div class="main">
         <div class="card">
            <Topbar />
            <div class="body">
               <Sidebar />
               <div class="contentPass">
                  <form action="">
                     <label for="">Current Password</label><br />
                     <input type="text" /><br />
                     <label for="">New Password</label><br />
                     <input type="text" /><br />
                     <label for="">Confirm New Password</label><br />
                     <input type="text" /><br />

                     <div class="submision">
                        <button>Change Password</button>
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
   name: "EditPass",
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
   height: 652px;
}

.body {
   display: flex;
}
</style>
