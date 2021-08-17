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
               <form @submit.prevent="handlePoll">
                  <label for="title">Title</label><br />
                  <input
                     type="text"
                     name="title"
                     placeholder="type your title here.."
                     v-model="title"
                  /><br />
                  <div class="deskripsi">
                     <label for="desc">Description (optional)</label><br />
                     <textarea
                        id="description"
                        placeholder="type your description here.."
                        v-model="description"
                     /><br />
                  </div>
                  <ul>
                     <li v-for="(item, index) in arrInput" :key="item">
                        <div>
                           <label for="answer">Answer Option</label><br />
                           <input
                              type="text"
                              @focus="addEvent"
                              :id="item"
                              v-model="option[index].option"
                           />
                           <div class="option-parent">
                              <button>Add photo</button>
                              <input type="file" accept=".jpg, .png, .jpeg" />
                              <span></span>
                           </div>
                        </div>
                     </li>
                  </ul>
                  <div class="settings">
                     <h2>Settings</h2>
                     <label style="word-wrap: break-word"
                        ><input class="checkbox" type="checkbox" /><span
                           >Only via direct link</span
                        ></label
                     ><br />
                     <label style="word-wrap: break-word"
                        ><input class="checkbox" type="checkbox" /><span
                           >Only multiple choices</span
                        ></label
                     ><br />
                     <label style="word-wrap: break-word"
                        ><input
                           class="checkbox"
                           id="cek"
                           type="checkbox"
                           @click="showDeadline"
                        /><span>Set deadline</span></label
                     ><br />
                     <input
                        type="date"
                        style="display: none; width: 320px"
                        required
                        id="deadline"
                        v-model="deadline"
                     />
                     <label style="word-wrap: break-word"
                        ><input
                           id="cek2"
                           class="checkbox"
                           type="checkbox"
                           @click="showPoster"
                        /><span>Add a poster</span></label
                     ><br />
                     <input
                        id="inputPoster"
                        type="file"
                        accept=".jpg, .png, .jpeg"
                     />
                     <button id="poster" style="display: none">
                        Add Poster
                     </button>
                     <br />
                  </div>
                  <div class="submission">
                     <input class="submit" type="submit" value="Create Poll" />
                  </div>
               </form>
               <div class="col-pic">
                  <img
                     class="pic1"
                     src="../../public/img/createpoll-main-pic.svg"
                     alt=""
                  />
                  <img
                     class="pic2"
                     src="../../public/img/aboutpoll-icon2.svg"
                     alt=""
                  />
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
   import axios from "axios";

   export default {
      name: "Createpoll",
      components: {
         NavLog,
         Footer,
      },

      data() {
         return {
            userData: null,
            arrInput: [1, 2, 3],
            lastIndex: 3,
            title: "",
            description: "",
            deadline: "",
            status: "opened",
            option: [
               { option: "", image_path: "" },
               { option: "", image_path: "" },
               { option: "", image_path: "" },
            ],
         };
      },
      async created() {
         const header = {
            Authorization: "Bearer " + localStorage.getItem("token"),
         };
         const response = await axios.get("api/v1/user", {
            headers: header,
         });
         this.userData = response.data.data;
         // console.log(response);

         // let id_user = response.data.data.id;
         // const response_poll = await axios.get("api/v1/user-poll", {
         //    headers: header,
         // });

         // const id_poll = response_poll.data.message[27].id;
         // console.log(id_poll);
      },
      methods: {
         addEvent(e) {
            // let lastIndex = this.arrInput[this.arrInput.length - 1];
            //  console.log(this.option);
            this.option.push({ option: "", image_path: "" });
            let currId = e.target.id;
            if (currId == this.lastIndex.toString()) {
               this.arrInput.push(this.lastIndex + 1);
               this.lastIndex = this.lastIndex + 1;
            }
         },
         // sizeRestrict() {
         //    let input = document.getElementById("posinput");
         //    let span = document.getElementById("msg");

         //    let files = input.files;
         //    if (files.length > 0) {
         //       if (files[0].size > 10 * 1024) {
         //          span.innerText = "File size exceeds 10kb";

         //          return;
         //       }
         //    }
         //    span.innerText = "done";
         // },
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
         handlePoll() {
            // const option = document.getElementsByClassName("baru").value;
            const header = {
               Authorization: "Bearer " + localStorage.getItem("token"),
               "Content-type": "application/json",
            };

            let filteredOptions = this.option.filter(
               (option) => option.option != ""
            );
            axios
               .post(
                  "api/v1/polls",
                  {
                     title: this.title,
                     description: this.description,
                     deadline: this.deadline,
                     status: this.status,
                     poll_options: filteredOptions,
                  },
                  {
                     headers: header,
                  }
               )
               .then((res) => {
                  console.log(res);
                  let poll_id = res.data.poll.id;
                  this.$router.push("/Poll/" + poll_id);
               })
               .catch((err) => {
                  console.log(err);
               });
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
      min-height: 988px;
      padding-bottom: 40px;
      height: auto;
      border: none;
      border-radius: 10px;
      box-shadow: 0 20px 26px rgba(54, 37, 37, 0.2);
      background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
      margin: 20px;
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

   /* upload message */
   #msg {
      color: red;
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
   }

   .settings input {
      margin-right: 8px;
      cursor: pointer;
   }

   .submission {
      margin: 10px 176px;
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
