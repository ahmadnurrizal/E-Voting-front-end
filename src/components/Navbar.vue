<template>
   <nav>
      <div class="brand">
         <router-link to="/"
            ><img src="../../public/img/logo-brand.svg" alt="FingerVote"
         /></router-link>
      </div>
      <section>
         <ul>
            <li>
               <router-link class="SignIn-link" to="/SignIn"
                  >Create Poll</router-link
               >
            </li>
            <li><router-link to="/About">About Us</router-link></li>
            <li><router-link to="/Discover">Discover</router-link></li>
            <li><router-link to="/Contact">Contact</router-link></li>
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
