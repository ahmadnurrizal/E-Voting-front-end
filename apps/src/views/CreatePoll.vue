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
                              <input type="file" accept=".jpg, .png, .jpeg" />
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
                     <label style="word-wrap: break-word"><input class="checkbox" id="cek" type="checkbox" @click="showDeadline" /><span>Set deadline</span></label
                     ><br />
                     <input type="date" style="display: none; width: 320px" required id="deadline" />
                     <label style="word-wrap: break-word"><input id="cek2" class="checkbox" type="checkbox" @click="showPoster" /><span>Add a poster</span></label
                     ><br />
                     <input id="inputPoster" type="file" accept=".jpg, .png, .jpeg" />
                     <button id="poster" style="display: none">Add Poster</button>
                     <br />
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
      showDeadline() {
         const cek = document.getElementById("cek");
         const deadline = document.getElementById("deadline");

         if (cek.checked == true) {
            deadline.style.display = "block";
         } else {
            deadline.style.display = "none";
         }
      },
      showPoster() {
         const cek2 = document.getElementById("cek2");
         const poster = document.getElementById("poster");

         if (cek2.checked == true) {
            poster.style.display = "block";
         } else {
            poster.style.display = "none";
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
   width: 755px;
   height: 988px;
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
   padding-right: 10px;
   font-family: "Kanit", sans-serif;
   text-align: right;
   font-size: 10px;
   color: #539be0;
   pointer-events: none;
   position: absolute;
   top: 5px;
   right: 0;
   background-color: #bde0ff;
   background-image: url(../../public/img/createpoll-upld-icon.svg);
   background-repeat: no-repeat;
   background-size: 18px;
   border: none;
   border-radius: 4px;
   width: 83px;
   height: 20px;
}

.option-parent input[type="file"] {
   position: absolute;
   width: 85px;
   height: 20px;
   opacity: 0;
   right: 0;
   top: 5px;
}

#poster {
   padding-right: 10px;
   font-family: "Kanit", sans-serif;
   text-align: right;
   font-size: 10px;
   background-color: #bde0ff;
   color: #539be0;
   background-image: url(../../public/img/createpoll-upld-icon.svg);
   background-repeat: no-repeat;
   background-size: 18px;
   border: none;
   border-radius: 4px;
   width: 83px;
   height: 20px;
}

#inputPoster {
   position: absolute;
   opacity: 0;
   left: 0;
   width: 83px;
   height: 20px;
}

.settings {
   margin-bottom: 30px;
}

.settings input {
   margin-right: 8px;
   cursor: pointer;
}

.submission {
   margin: auto 176px;
   text-align: center;
   position: absolute;
}

.submission input[type="submit"] {
   cursor: pointer;
   font-family: "Kanit", sans-serif;
   color: white;
   font-size: 18px;
   background-color: #ff7070;
   width: 403px;
   height: 40px;
   border: none;
   border-radius: 20px;
}
</style>
