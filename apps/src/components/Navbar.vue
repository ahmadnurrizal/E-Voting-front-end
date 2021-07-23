<template>
   <nav>
      <div class="brand">
         <router-link to="/"><img src="../../public/img/logo-brand.svg" alt="FingerVote"/></router-link>
      </div>
      <section>
         <ul>
            <li><router-link to="/Auth">Create Poll</router-link></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Discover</a></li>
            <li><a href="#">Contact</a></li>
         </ul>
      </section>
      <div class="nav-reg">
         <li class="signin">
            <router-link to="/SignIn"><span>Sign In</span></router-link>
         </li>
         <li>
            <router-link to="/SignUp"><button>Sign Up</button></router-link>
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
   name: "Navbar",
   methods: {
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

<style scoped src="../../public/styles/navbar.css"></style>
