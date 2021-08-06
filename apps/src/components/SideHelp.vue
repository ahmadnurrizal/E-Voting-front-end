<template>
   <div class="sidebar">
      <ul>
         <li>
            <router-link
               to="/Help"
               style="text-decoration: none;
"
               >Help Center</router-link
            >
         </li>
         <li>
            <router-link
               to="/Help/Tutorials"
               style="text-decoration: none;
"
               >Tutorials</router-link
            >
         </li>
         <li>
            <router-link
               to="/Help/FAQs"
               style="text-decoration: none;
"
               >FAQs</router-link
            >
         </li>
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
   margin: 20px auto auto 30px;
   list-style: none;
}

a {
   text-decoration: none;
   font-family: "Kanit", sans-serif;
   font-size: 24px;
   border: none;
   background-color: none;
   color: #bde0ff;
}

.router-link-active {
   color: #eaf5ff;
}
</style>
