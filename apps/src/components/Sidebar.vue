<template>
   <div class="sidebar">
      <ul>
         <li>
            <router-link to="/Settings">Edit Profile</router-link>
         </li>
         <li>
            <router-link to="/Settings/Password" style="text-decoration: none">Change Password</router-link>
         </li>
         <li>
            <router-link to="/Settings/DeleteAccount" style="text-decoration: none">Delete Account</router-link>
         </li>
      </ul>
   </div>
</template>

<script>
export default {
   name: "sidebar",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@500;600&family=Roboto&display=swap");

* {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
}

.sidebar {
   width: 339px;
   padding: 0 30px;
}

.sidebar ul {
   list-style: none;
}

a {
   text-decoration: none;
   font-family: "Kanit", sans-serif;
   font-size: 24px;
   color: #bde0ff;
}

.router-link-active {
   color: #eaf5ff;
}
</style>
