<template>
   <div class="sidebar">
      <ul>
         <li><router-link to="/Settings">Edit Profile</router-link></li>
         <li><router-link to="/Settings/Password">Change Password</router-link></li>
         <li><router-link to="/Settings/DeleteAccount">Delete Account</router-link></li>
      </ul>
   </div>
</template>

<script>
export default {
   name: "sidebar",
};
</script>

<style scoped>
* {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
}

.sidebar {
   width: 339px;
}

.sidebar ul {
   list-style: none;
}
</style>
