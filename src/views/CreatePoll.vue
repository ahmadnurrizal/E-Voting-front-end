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
                              <div class="file-decoration">
                                 <div class="file-wrap">
                                    <span class="fileName">{{
                                       option[index].file_name
                                    }}</span>
                                 </div>

                                 <span
                                    :id="'remove' + index"
                                    class="remove"
                                    @click="removePhoto(index)"
                                 >
                                    Remove
                                 </span>
                              </div>
                              <button
                                 class="addButton"
                                 :id="'addButton' + index"
                              >
                                 Add photo
                              </button>
                              <input
                                 type="file"
                                 :ref="'files' + index"
                                 @change="handleUpload(index)"
                                 accept=".jpg, .png, .jpeg"
                                 :id="'id' + index"
                                 class="addPhoto"
                              />
                           </div>
                        </div>
                     </li>
                  </ul>
                  <div class="settings">
                     <h2>Settings</h2>
                     <label style="word-wrap: break-word"
                        ><input
                           class="checkbox"
                           type="checkbox"
                           disabled
                        /><span
                           >Only via direct link
                           <span style="color: orange">(soon)</span>
                        </span></label
                     ><br />
                     <label style="word-wrap: break-word"
                        ><input
                           class="checkbox"
                           type="checkbox"
                           disabled
                        /><span
                           >Only multiple choices
                           <span style="color: orange">(soon)</span></span
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
                     <div class="posterWrap" id="posterWrap">
                        <input
                           id="inputPoster"
                           type="file"
                           accept=".jpg, .png, .jpeg"
                           ref="poster"
                           @change="handlePoster"
                           class="tambahPosterInput"
                        />
                        <button
                           id="poster"
                           class="tambahPosterButton"
                           style="display: none"
                        >
                           Add Poster
                        </button>
                     </div>

                     <div class="wrap-afterPost">
                        <span
                           id="removePoster"
                           class="removePoster"
                           @click="removePoster"
                           style="font-family: Kanit, sans-serif; font-size: 13px;text-align: center;"
                           >Remove
                        </span>
                        <span class="posterName" disabled>{{
                           poster[0].poster_name
                        }}</span>
                     </div>
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
            status: "public",
            option: [
               { option: "", image_path: "", file_name: "" },
               { option: "", image_path: "", file_name: "" },
               { option: "", image_path: "", file_name: "" },
            ],
            overload: false,
            poster: [{ url: "", poster_name: "" }],
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
      },
      methods: {
         addEvent(e) {
            this.option.push({ option: "", image_path: "", file_name: "" });
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
         removePoster() {
            const inputPoster = document.getElementById("inputPoster");
            const button = document.getElementById("posterWrap");
            const remove = document.getElementById("removePoster");

            inputPoster.value = "";
            this.poster[0].url = "";
            this.poster[0].poster_name = "";
            if (inputPoster.value == "") {
               button.className = "posterWrap";
               remove.className = "removePoster";
            }
         },
         handlePoster() {
            const inputPoster = document.getElementById("inputPoster");
            const button = document.getElementById("posterWrap");
            const remove = document.getElementById("removePoster");

            let file = inputPoster.files;
            if (file.length > 0) {
               this.poster[0].poster_name = file[0].name;
               if (file[0].size > 1000 * 1024) {
                  this.poster[0].poster_name = "";
                  alert("file exceeds the minimum size (min: 1 Mb)");

                  return;
               } else {
                  // inputPoster.className = "tambahPosterInput-active";
                  button.className = "posterWrap-active";
                  remove.className = "removePoster-active";
                  let uploadedPoster = this.$refs.poster.files[0];
                  this.poster[0].url = uploadedPoster;
               }
            }
         },
         handleUpload(index) {
            const inputFile = document.getElementById("id" + index);
            const button = document.getElementById("addButton" + index);
            const remove = document.getElementById("remove" + index);

            let file = inputFile.files;
            if (file.length > 0) {
               this.option[index].file_name = file[0].name;

               if (file[0].size > 1000 * 1024) {
                  this.option[index].file_name = "";
                  alert("file exceeds the minimum size (min: 1 Mb)");

                  return;
               } else {
                  button.className = "addButton-active";
                  inputFile.className = "addPhoto-active";
                  remove.className = "remove-active";
                  let uploadedFiles = this.$refs["files" + index].files;
                  this.option[index].image_path = uploadedFiles[0];
               }
            }
         },
         removePhoto(index) {
            const inputFile = document.getElementById("id" + index);
            const button = document.getElementById("addButton" + index);
            const remove = document.getElementById("remove" + index);

            inputFile.value = "";
            this.option[index].file_name = "";
            if (inputFile.value == "") {
               inputFile.className = "addPhoto";
               button.className = "addButton";
               remove.className = "remove";
            }
         },

         async handlePoll() {
            // const option = document.getElementsByClassName("baru").value;
            const header = {
               Authorization: "Bearer " + localStorage.getItem("token"),
               "Content-type": "application/json",
            };

            if (this.poster[0].url != "") {
               let data = new FormData();
               data.append("image", this.poster[0].url, new Date().toString());
               const resUploadPoster = await axios.post(
                  "api/v1/upload-image",
                  data,
                  {
                     headers: header,
                  }
               );
               this.poster[0].url = resUploadPoster.data.imageURL;
            }

            let filteredOptions = this.option.filter(
               (option) => option.option != "" || option.image_path != ""
            );

            const uploader = filteredOptions.map((option, index) => {
               if (filteredOptions[index].image_path !== "") {
                  let data = new FormData();
                  data.append(
                     "image",
                     filteredOptions[index].image_path,
                     new Date().toString()
                  );
                  return axios.post("api/v1/upload-image", data, {
                     headers: header,
                  });
               } else {
                  return null;
               }
            });
            const allResponseUpload = await Promise.all(uploader);
            allResponseUpload.forEach((res, index) => {
               if (res) {
                  filteredOptions[index].image_path = res.data.imageURL;
               }
            });

            axios
               .post(
                  "api/v1/polls",
                  {
                     title: this.title,
                     description: this.description,
                     deadline: this.deadline,
                     status: this.status,
                     poll_options: filteredOptions,
                     image_path: this.poster[0].url,
                  },
                  {
                     headers: header,
                  }
               )
               .then((res) => {
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

   .col-pic {
      position: relative;
   }

   .col-pic img {
      position: absolute;
   }
   .pic2 {
      top: 400px;
      left: 90px;
   }

   form {
      position: relative;
      margin: 0 52px 30px 15px;
   }

   input:not(.checkbox, .submit) {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 16px;
      border: #858484;
      border-style: solid;
      border-width: 1.5px;
      width: 340px;
      height: 40px;
      border-radius: 5px;
      padding-left: 10px;
   }

   textarea {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 16px;
      width: 340px;
      height: 100px;
      resize: vertical;
      padding: 5px 10px;
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

   .file-decoration {
      margin-top: 5px;
      width: 340px;
      display: flex;
   }

   .file-wrap {
      width: 50%;
      overflow-x: hidden;
      overflow-y: hidden;
      height: 20px;
   }

   .addButton-active,
   .addPhoto-active {
      display: none;
   }

   .remove {
      opacity: 0;
   }

   .remove-active {
      font-family: "Kanit", sans-serif;
      font-size: 12px;
      color: #eaf5ff;
      cursor: pointer;
      margin-left: 2px;
      border: none;
      border-radius: 5px;
      background-color: #ff7070;
      width: 60px;
      height: 20px;
      text-align: center;
   }

   .remove-active:hover {
      background-color: #f55454;
   }

   .fileName {
      font-family: "Roboto", sans-serif;
      font-style: italic;
      font-size: 13px;
      color: #050e16;
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

   #poster-active {
      display: block;
   }

   #inputPoster {
      position: absolute;
      opacity: 0;
      left: 0;
      width: 83px;
      height: 20px;
   }

   .settings input {
      margin-right: 8px;
      cursor: pointer;
   }

   /* Add poster style */
   .removePoster {
      opacity: 0;
   }

   .posterWrap-active {
      display: none;
   }

   .wrap-afterPost {
      position: absolute;
      display: flex;
   }

   .posterName {
      color: #050e16;
      font-style: italic;
      overflow-y: hidden;
      overflow-x: hidden;
      height: 21px;
   }

   .removePoster-active {
      color: #eaf5ff;
      background-color: #ff7070;
      width: 60px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-right: 10px;
   }

   .removePoster-active:hover {
      background-color: #f55454;
   }

   .submission {
      margin: 10px 176px;
      text-align: center;
      position: absolute;
   }

   .submission input {
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

   .submission input:hover {
      background-color: #f55454;
   }
</style>
