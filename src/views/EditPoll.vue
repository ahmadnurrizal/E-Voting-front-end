<template>
   <div class="wrapper">
      <NavLog />
      <div class="wave-top"><div class="vec"></div></div>

      <div class="main">
         <div class="card">
            <div class="title">
               <h1>Edit Poll</h1>
            </div>
            <div class="content">
               <form @submit.prevent="handleUpdatePoll">
                  <label for="title">Title</label><br />
                  <input
                     type="text"
                     name="title"
                     :placeholder="title"
                     v-model="title"
                  /><br />
                  <label for="title">Description</label><br />
                  <textarea
                     type="text"
                     name="title"
                     :placeholder="description"
                     v-model="description"
                  />
                  <br />
                  <ul>
                     <li v-for="(item, index) in poll_options" :key="item">
                        <div>
                           <label for="asnwer">Answer Option</label><br />
                           <input
                              type="text"
                              :id="'inputan' + index"
                              :placeholder="poll_options[index].option"
                              v-model="poll_options[index].option"
                              class="fieldInput"
                           />
                        </div>
                     </li>
                  </ul>

                  <div class="submission">
                     <button @click="discardUpdate">Discard</button>
                     <input
                        type="submit"
                        value="update poll"
                        class="submitUpdate"
                     />
                  </div>
               </form>
               <div class="edit-colPic">
                  <img
                     class="pic1"
                     src="../../public/img/createpoll-main-pic.svg"
                     alt=""
                  />
                  <!-- <img
                     class="pic2"
                     src="../../public/img/aboutpoll-icon2.svg"
                     alt=""
                  /> -->
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
      name: "EditPoll",
      components: {
         NavLog,
         Footer,
      },
      data() {
         return {
            pollId: this.$route.params.id,

            title: "",
            description: "",
            statusOpen: "opened",

            poll_options: [{ option: "", image_path: "" }],
         };
      },
      methods: {
         discardUpdate() {
            this.$router.push(`/Poll/${this.pollId}`);
         },
         // addElement() {
         //    this.poll_options.push({ option: "", image_path: "" });

         //    // console.log(this.poll_options.length);
         //    // const tagInput = document.querySelector(
         //    //    'input[class="fieldInput"]'
         //    // );
         //    // tagInput.id = "inputan" + (this.poll_options.length - 2) + 1;
         // },
         async handleUpdatePoll() {
            const header = {
               Authorization: "Bearer " + localStorage.getItem("token"),
               "Content-type": "application/json",
            };

            let filteredUpdate = this.poll_options.filter(
               (option) => option.option != "" || option.image_path != ""
            );

            // const uploaderUpdate = filteredUpdate.map((element, index) => {
            //    let data = filteredUpdate[index].option
            // })
            // return axios.put(`api/v1/polls/${this.pollId}`, data, {
            //    headers: header,
            // }).then((res) => console.log(res),this.$router.push(`/Poll/${this.pollId}`).catch(err => console.log(err)))

            axios
               .put(
                  `api/v1/polls/${this.pollId}`,
                  {
                     title: this.title,
                     description: this.description,
                     status: this.statusOpen,
                     poll_options: filteredUpdate,
                  },
                  {
                     headers: header,
                  }
               )
               .then((res) => this.$router.push(`/Poll/${this.pollId}`))
               .catch((err) => console.log(err));
         },
      },
      async created() {
         const header = {
            Authorization: "Bearer " + localStorage.getItem("token"),
         };

         const resPoll = await axios.get(`api/v1/polls/${this.pollId}`, {
            headers: header,
         });
         this.title = resPoll.data.data.title;
         this.description = resPoll.data.data.description;

         const resOptionPoll = await axios.get(
            `api/v1/poll-options/${this.pollId}`,
            {
               headers: header,
            }
         );
         // resOptionPoll.data.data.forEach((element, index) => {
         //    if (element) {
         //       // this.poll_options[index].option =
         //       //    resOptionPoll.data.data[index].option;
         //       console.log(resOptionPoll.data.data[index].option);
         //    }
         // });
         // console.log(this.poll_options);

         this.poll_options = resOptionPoll.data.data;
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
      min-height: 588px;
      padding-bottom: 120px;
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

   .add-option {
      background-color: red;
      cursor: pointer;
   }

   ul li {
      list-style: none;
   }

   form {
      position: relative;
      margin: 0 52px 30px 15px;
   }

   input:not(.submitUpdate) {
      border: #858484;
      border-style: solid;
      border-width: 1.5px;
      width: 340px;
      height: 40px;
      border-radius: 5px;
      padding-left: 10px;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 16px;
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

   .edit-colPic {
      position: relative;
   }

   .edit-colPic img {
      position: absolute;
   }

   /* .pic2 {
      top: 400px;
      left: 90px;
   } */

   .submission {
      margin-top: 40px;
      right: 0;
      text-align: center;
      position: absolute;
   }

   .submission input {
      cursor: pointer;
      font-family: "Kanit", sans-serif;
      color: white;
      font-size: 18px;
      background-color: #ff7070;
      min-width: 100px;
      height: 40px;
      border: none;
      border-radius: 10px;
      padding: 0 10px;
   }

   .submission button {
      cursor: pointer;
      font-family: "Kanit", sans-serif;
      color: #3d87cc;
      font-size: 18px;
      background-color: #eaf5ff;
      border: solid #3d87cc;
      border-width: 1px;
      min-width: 100px;
      height: 40px;
      border-radius: 10px;
      margin-right: 20px;
   }

   .submission input:hover {
      background-color: #f55454;
   }

   .submission button:hover {
      background-color: #cedbe7;
   }

   .submission input:active,
   .submission button:active {
      transform: translateY(2px);
   }
</style>
