<template>
   <nav>
      <div class="brand">
         <router-link to="/"><img src="../../public/img/logo-brand.svg" alt="FingerVote"/></router-link>
      </div>
      <section>
         <ul>
            <li><router-link to="/CreatePoll">Create Poll</router-link></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Discover</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Dashboard</a></li>
         </ul>
      </section>
      <div class="nav-reg">
         <div class="profilepic">
            <img src="../../public/img/profile-default.svg" alt="" />
            <div class="arrow" @click="dropdownToggle">
               <span class="bar1"></span>
               <span class="bar2"></span>
            </div>
            <!-- <img id="downicon" src="../../public/img/arrow-down.png" class="play" @click="dropdownToggle" /> -->
         </div>
         <div class="dropdown">
            <ul>
               <li><router-link to="/Profile">Edit Profile</router-link></li>
               <li><a href="">Dashboard</a></li>
               <li class="logout">
                  <a id="out" href="/" @click="logout">Log Out</a>
               </li>
            </ul>
         </div>
      </div>
      <div class="nav-toggle">
         <input type="checkbox" @click="menu" />
         <span></span>
         <span></span>
         <span></span>
      </div>
   </nav>
</template>

<script>
// const navbar = document.querySelector("nav");
// window.onscroll = function() {
//    if (window.pageYOffset > 0) {
//       navbar.classList.add("scrolled");
//    } else {
//       navbar.classList.remove("scrolled");
//    }
// };

export default {
   name: "NavLog",

   methods: {
      logout() {
         localStorage.removeItem("token");
      },
      menu() {
         const nav = document.querySelector("section ul");
         nav.classList.toggle("slide");
      },
      dropdownToggle() {
         const toggleMenu = document.querySelector(".dropdown");
         const bar1 = document.querySelector(".bar1");
         const bar2 = document.querySelector(".bar2");

         toggleMenu.classList.toggle("active");
         bar1.classList.toggle("change");
         bar2.classList.toggle("change");
      },

      // ignoreClick(event) {
      //    var hide = document.getElementById("toggleMenu");
      //    var clickInside = hide.contains(event.target);
      //    if (!clickInside) {
      //       hide.classList.toggle("slide");
      //    }
      // },
   },
};
</script>

<style scoped src="../../public/styles/navlog.css"></style>
