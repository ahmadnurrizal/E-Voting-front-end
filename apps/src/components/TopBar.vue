<template>
   <div class="head">
      <div class="profile-pic">
         <img src="../../public/img/profile-default.svg" alt="" />
      </div>
      <h1 v-if="username">
         <span style="color: #539BE0">{{ username.data.name }}</span> / Edit Profile
      </h1>
   </div>
</template>

<script>
import axios from "axios";
export default {
   name: "topbar",
   data() {
      return {
         username: null,
      };
   },
   async created() {
      // axios.get("api/v1/users/").then((Response) => (this.info = Response));
      const response = await axios.get("api/v1/user", {
         headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
         },
      });
      this.username = response.data;
   },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@500;600&family=Roboto&display=swap");

.head {
   display: flex;
   padding: 60px 0;
   margin: auto 30px;
   align-items: center;
   border-bottom: solid 3px #bde0ff;
}

img {
   margin-right: 30px;
   width: 100px;
}

h1 {
   font-family: "Kanit", sans-serif;
   font-size: 30px;
   margin-left: 30px;
   color: #eaf5ff;
}
</style>
