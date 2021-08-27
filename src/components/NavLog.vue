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
               <router-link to="/CreatePoll">Create Poll</router-link>
            </li>
            <li>
               <router-link to="/About">About Us</router-link>
            </li>
            <li>
               <router-link to="/Discover">Discover</router-link>
            </li>
            <li>
               <router-link to="/Contact">Contact</router-link>
            </li>
            <li>
               <router-link to="/Dashboard">Dashboard</router-link>
            </li>
         </ul>
      </section>
      <div class="nav-reg">
         <div class="profilepic">
            <img
               class="default-profile"
               src="../../public/img/profile-default.svg"
               v-if="nullImage == true"
               alt="not found"
            />
            <img
               class="profile-set"
               :src="userPic[0].url"
               v-else
               alt="not found"
            />
            <div class="arrow">
               <span class="bar1"></span>
               <span class="bar2"></span>
            </div>
         </div>
         <div class="dropdown">
            <ul>
               <li>
                  <router-link to="/Settings">Edit Profile</router-link>
               </li>
               <li>
                  <router-link to="/Dashboard">Dashboard</router-link>
               </li>
               <li class="logout">
                  <router-link id="out" to="/" @click="logout"
                     >Log Out</router-link
                  >
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
   import axios from "axios";
   export default {
      name: "NavLog",
      data() {
         return {
            userPic: [{ url: "" }],

            nullImage: false,
         };
      },
      async created() {
         const response = await axios.get("api/v1/user", {
            headers: {
               Authorization: "Bearer " + localStorage.getItem("token"),
            },
         });
         this.userPic[0].url = response.data.data.profil_path;

         if (response.data.data.profil_path == null) {
            this.nullImage = true;
         }
      },
      methods: {
         logout() {
            localStorage.removeItem("token");
         },
         menu() {
            const nav = document.querySelector("section ul");
            nav.classList.toggle("slide");
         },
      },
   };
</script>

<style scoped src="../../public/styles/navlog.css"></style>
