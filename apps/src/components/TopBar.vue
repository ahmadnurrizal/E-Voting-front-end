<template>
   <div class="head">
      <div class="profile-pic">
         <img src="../../public/img/profile-default.svg" alt="" />
      </div>
      <h1 v-if="username">{{ username.data.name }} / Edit Profile</h1>
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
      const response = await axios.get("api/v1/user");
      this.username = response.data;
   },
};
</script>

<style scoped>
.head {
   display: flex;
   height: 120px;
}
</style>
