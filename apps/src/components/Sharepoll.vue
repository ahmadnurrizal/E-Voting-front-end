<template>
   <div class="main">
      <div class="card">
         <h1>Share Poll</h1>
         <div class="link-address">
            <input type="text" placeholder="link yang mau dishare" />
            <button>Copy Link</button>
         </div>
         <div class="socmed">
            <a href="">instagram</a>
            <a href="">telegram</a>
            <a href="">twitter</a>
            <a href="">facebook</a>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: "Sharepoll",
   };
</script>

<style scoped>
   @import url("https://fonts.googleapis.com/css2?family=Kanit:wght@500;600&family=Roboto&display=swap");

   .card {
      border: none;
      border-radius: 10px;
      box-shadow: 0 20px 26px rgba(54, 37, 37, 0.2);
      background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
      width: 948px;
      min-height: 290px;
      margin: auto auto 100px;
      padding: 30px auto 50px;
      text-align: center;
   }

   .card h1,
   button {
      font-family: "Kanit", sans-serif;
   }

   h1 {
      margin-bottom: 30px;
      font-weight: 700;
      color: #eaf5ff;
   }

   button {
      font-weight: 500;
      border: none;
      border-radius: 25px;
      background-color: #1e6599;
      font-size: 18px;
      color: #ffffff;
      width: 180px;
      height: 40px;
      margin-left: 20px;
   }

   .link-address {
      margin-bottom: 50px;
      align-items: center;
   }

   .link-address input {
      width: 280px;
      height: 40px;
      border: 1px solid #858484;
      box-sizing: border-box;
      border-radius: 5px;
   }
</style>
