<template>
   <div class="container">
      <nav>
         <div class="brand">
            <router-link to="/"><img src="../../public/img/logo-brand.svg" alt="FingerVote"/></router-link>
         </div>
         <div class="nav-links">
            <ul>
               <li><a href="#">Create Poll</a></li>
               <li><a href="#">About Us</a></li>
               <li><a href="#">Discover</a></li>
               <li><a href="#">Contact</a></li>
            </ul>
         </div>
         <div class="nav-reg">
            <li><a href="">Sign In</a></li>
            <li>
               <router-link to="/SignUp"><button>Sign Up</button></router-link>
            </li>
         </div>
      </nav>
   </div>
</template>

<script>
export default {
   name: "Navbar",
};
</script>

<style src="../../public/styles/navbar.css"></style>
