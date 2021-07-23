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
         <li>
            <a href="/" @click="logout"><button>Sign Out</button></a>
         </li>
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
