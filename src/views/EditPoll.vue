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
                  <div class="add-option" @click="addElement">
                     <p>tambah</p>
                  </div>
                  <div class="submission">
                     <input type="submit" value="update poll" />
                  </div>
               </form>
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
         addElement() {
            this.poll_options.push({ option: "", image_path: "" });

            // console.log(this.poll_options.length);
            // const tagInput = document.querySelector(
            //    'input[class="fieldInput"]'
            // );
            // tagInput.id = "inputan" + (this.poll_options.length - 2) + 1;
         },
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
               .then(
                  (res) => console.log(res),
                  this.$router.push(`/Poll/${this.pollId}`)
               )
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
      min-height: 988px;
      padding-bottom: 40px;
      height: auto;
      border: none;
      border-radius: 10px;
      box-shadow: 0 20px 26px rgba(54, 37, 37, 0.2);
      background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
      margin: 20px;
   }

   .add-option {
      background-color: red;
      cursor: pointer;
   }
</style>
