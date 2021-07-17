<template>
   <div class="wrapper">
      <!-- navbar -->
      <Navbar />
      <div class="wave-top"><div class="vec"></div></div>

      <!-- main content -->
      <div class="main">
         <div class="card">
            <div class="tittle">
               <h1>Create a Poll</h1>
            </div>
            <div class="content">
               <div class="input">
                  <form action="">
                     <label for="Title">Title</label><br />
                     <input type="text" placeholder="Type your title here..." /><br />
                     <label for="Description">Description (optional)</label><br />
                     <input type="text" placeholder="Type your description here..." /><br />
                     <label for="Answer">Answer Options</label><br />
                     <input type="text" placeholder="Type an answer here..." /><br />
                     <label for="Title">Title</label><br />
                     <input type="text" placeholder="Type an answer here..." /><br />
                     <label for="Title">Title</label><br />
                     <input type="text" placeholder="Type an answer here..." /><br />
                  </form>
               </div>
               <div class="picture"></div>
            </div>
            <div class="submission"></div>
         </div>
      </div>
   </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
   name: "Createpoll",
   components: {
      Navbar,
      Footer,
   },
};
</script>

<style scoped>
* {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
}

.wrapper {
   background-color: #eaf5ff;
}

.main {
   padding: 80px 20px;
}
.card {
   width: 755px;
   height: 910px;
   border: none;
   border-radius: 10px;
   box-shadow: 0 20px 26px rgba(54, 37, 37, 0.2);
   background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
   margin: 20px;
}
</style>
