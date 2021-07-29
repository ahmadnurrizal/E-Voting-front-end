<template>
   <div class="sidebar">
      <ul>
         <li><router-link to="/Help">Help Center</router-link></li>
         <li><router-link to="/Help/Tutorials">Tutorials</router-link></li>
         <li><router-link to="/Help/FAQs">FAQs</router-link></li>
      </ul>
   </div>
</template>

<script>
export default {
   name: "sideHelpC",
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
}

.sidebar ul {
   list-style: none;
}
</style>
