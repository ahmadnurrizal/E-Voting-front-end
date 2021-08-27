<template>
   <div class="hero-container">
      <div class="wbg">
         <div class="column-desc">
            <div class="row-desc-1">
               <h1>MAKE A BETTER FUTURE WITH YOUR VOTE</h1>
            </div>
            <div class="row-desc-2">
               <p>
                  fingerVote is is a web-based online polling system that will
                  help you manage your elections easily and securely, with just
                  one click, you have participated in the poll.
               </p>
            </div>
            <div class="row-desc-3">
               <router-link to="/SignIn"
                  ><button class="btn-1">Create Poll</button></router-link
               >
               <router-link to="/Help/Tutorials"
                  ><button class="btn-2">View Example</button></router-link
               >
            </div>
         </div>
         <div class="column-pic">
            <img src="../../public/img/hero-icon1.svg" alt="" />
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: "notLogged",
   };
</script>

<style scoped src="../../public/styles/notlogHero.css"></style>
