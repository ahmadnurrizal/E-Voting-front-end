<template>
   <div class="wrapper">
      <!-- navbar -->
      <NavLog />
      <div class="wave-top"><div class="vec"></div></div>

      <!-- main content -->
      <div class="main">
         <div class="card">
            <div class="title">
               <h1>Create a Poll</h1>
            </div>
            <div class="content">
               <form>
                  <label for="title">Title</label><br />
                  <input type="text" name="title" id="" placeholder="type your title here.." /><br />
                  <div class="deskripsi">
                     <label for="desc">Description (optional)</label><br />
                     <textarea id="description" placeholder="type your description here.." /><br />
                  </div>
                  <ul>
                     <li v-for="item in arrInput" :key="item">
                        <div>
                           <label for="answer">Answer Option</label><br />
                           <input type="text" @focus="addEvent" :id="item" />
                           <div class="option-parent">
                              <button>Add photo</button>
                              <input type="file" />
                           </div>
                        </div>
                     </li>
                  </ul>
                  <div class="settings">
                     <h2>Settings</h2>
                     <label style="word-wrap: break-word"><input class="checkbox" type="checkbox" /><span>Only via direct link</span></label
                     ><br />
                     <label style="word-wrap: break-word"><input class="checkbox" type="checkbox" /><span>Only multiple choices</span></label
                     ><br />
                     <label style="word-wrap: break-word"><input class="checkbox" type="checkbox" /><span>Set deadline</span></label
                     ><br />
                     <label style="word-wrap: break-word"><input class="checkbox" type="checkbox" /><span>Add a poster</span></label
                     ><br />
                  </div>
                  <div class="submission">
                     <input class="submit" type="submit" value="Create Poll" />
                  </div>
               </form>
               <div class="col-pic">
                  <img class="pic1" src="../../public/img/createpoll-main-pic.svg" alt="" />
                  <img class="pic2" src="../../public/img/aboutpoll-icon2.svg" alt="" />
               </div>
            </div>
            <div class="submission"></div>
         </div>
      </div>
      <Footer />
   </div>
</template>

<script>
import NavLog from "@/components/NavLog.vue";
import Footer from "../components/Footer.vue";

export default {
   name: "Createpoll",
   components: {
      NavLog,
      Footer,
   },

   data() {
      return {
         arrInput: [1, 2, 3],
         lastIndex: 3,
      };
   },
   methods: {
      addEvent(e) {
         // let lastIndex = this.arrInput[this.arrInput.length - 1];
         let currId = e.target.id;
         if (currId == this.lastIndex.toString()) {
            this.arrInput.push(this.lastIndex + 1);
            this.lastIndex = this.lastIndex + 1;
         }
      },
   },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@500;600&family=Roboto&display=swap");

* {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
}

.wave-top {
   padding-top: 60px;
}

.vec {
   padding-top: 200px;
   padding-bottom: 170px;
   background-image: url("../../public/img/vector/signup-wave.svg");
   background-size: cover;
   background-repeat: no-repeat;
}

.wrapper {
   background-color: #eaf5ff;
}

.content {
   display: flex;
}

.main {
   padding: 80px 20px;
}
.card {
   width: 800px;
   height: 910px;
   border: none;
   border-radius: 10px;
   box-shadow: 0 20px 26px rgba(54, 37, 37, 0.2);
   background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
   margin: 20px;
   overflow-y: scroll;
}

h1,
form label,
h2 {
   font-family: "Kanit", sans-serif;
   color: #eaf5ff;
}

.title h1 {
   text-align: center;
   font-size: 48px;
   margin: 30px auto 35px;
}

label {
   font-size: 24px;
}

.settings span {
   font-family: "Roboto", sans-serif;
   font-size: 18px;
}

.col-pic img {
   position: absolute;
}
.pic2 {
   margin-top: 400px;
   margin-left: 90px;
}

form {
   position: relative;
   margin: 0 52px 30px 15px;
}

input:not(.checkbox, .submit) {
   border: #858484;
   border-style: solid;
   border-width: 1.5px;
   width: 340px;
   height: 40px;
   border-radius: 5px;
}

textarea {
   width: 340px;
   height: 100px;
   resize: vertical;
}

ul {
   list-style: none;
}

.option-parent {
   position: relative;
   height: 30px;
}

.option-parent button {
   pointer-events: none;
   position: absolute;
   top: 5px;
   right: 0;
   background-color: #bde0ff;
   background-image: url(../../public/img/createpoll-upld-icon.svg);
   background-repeat: no-repeat;
   border: none;
   border-radius: 4px;
   width: 83px;
   height: 20px;
}

input[type="file"] {
   position: absolute;
   width: 85px;
   height: 20px;
   opacity: 0;
   right: 0;
   top: 5px;
}
</style>
