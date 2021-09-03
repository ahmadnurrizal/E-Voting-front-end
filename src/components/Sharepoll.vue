<template>
   <div class="main">
      <div class="card-share">
         <h1>Share Poll</h1>
         <div class="link-address">
            <input
               type="text"
               :placeholder="'fingervote.herokuapp.com/Poll/' + pollID"
               :value="'fingervote.herokuapp.com/Poll/' + pollID"
               id="shareLink"
            />
            <button @click="getCopyText">Copy Link</button>
         </div>
         <div class="afterCopy" v-if="copied">
            <p>copied to clipboard!</p>
         </div>
         <div class="socmed">
            <a href="https://web.whatsapp.com/" target="_blank"
               ><img src="../../public/img/whatsapp-icon.svg" alt=""
            /></a>
            <a href="https://web.telegram.org/k/" target="_blank"
               ><img src="../../public/img/telegram-icon.svg" alt=""
            /></a>
            <a href="https://twitter.com/" target="_blank"
               ><img src="../../public/img/twitter-icon.svg" alt=""
            /></a>
            <a href="https://web.facebook.com/" target="_blank"
               ><img src="../../public/img/facebook-icon.svg" alt=""
            /></a>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: "Sharepoll",

      data() {
         return {
            pollID: this.$route.params.id,
            copied: false,
         };
      },
      methods: {
         getCopyText() {
            let copyText = document.getElementById("shareLink");

            copyText.select();
            copyText.setSelectionRange(0, 99999); /* for mobile device */

            navigator.clipboard.writeText(copyText.value);
            this.copied = true;
         },
      },
   };
</script>

<style scoped>
   @import url("https://fonts.googleapis.com/css2?family=Kanit:wght@500;600&family=Roboto&display=swap");

   .card-share {
      border: none;
      border-radius: 10px;
      box-shadow: 0 20px 26px rgba(54, 37, 37, 0.2);
      background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
      width: 948px;
      min-height: 290px;
      margin: auto auto 100px;
      text-align: center;
   }

   .card-share h1,
   button {
      font-family: "Kanit", sans-serif;
   }

   h1 {
      padding-top: 30px;
      margin-bottom: 30px;
      font-weight: 700;
      font-size: 34px;
      color: #eaf5ff;
   }

   button {
      cursor: pointer;
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

   button:hover {
      background-color: #10598d;
   }

   .link-address {
      width: 50%;
      margin: auto auto 50px;
      display: flex;
   }

   .link-address input {
      padding-left: 10px;
      width: 280px;
      height: 40px;
      border: 1px solid #858484;
      box-sizing: border-box;
      border-radius: 5px;
   }

   .socmed img {
      cursor: pointer;
   }

   .socmed img:hover {
      transform: translateY(2px);
   }

   .afterCopy {
      animation: opacityOn 5s normal forwards;
      animation-delay: 2s;
      position: fixed;
      top: 80%;
      left: 50%;
      -webkit-transform: translate(-80%, -50%);
      transform: translate(-50%, -50%);
      min-width: 100px;
      min-height: 35px;
      background-color: #2e2c2c;
      border-radius: 5px;
   }

   @keyframes opacityOn {
      0% {
         opacity: 1;
      }
      25% {
         opacity: 1;
      }
      50% {
         opacity: 1;
      }
      75% {
         opacity: 0;
      }
      100% {
         opacity: 0;
      }
   }

   .afterCopy p {
      padding: 5px;
      color: #ffffff;
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size: 20px;
   }
</style>
