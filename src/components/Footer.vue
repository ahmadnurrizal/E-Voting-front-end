<template>
   <div class="footer-wrap">
      <div class="footer">
         <ul>
            <h2>Company</h2>
            <li><router-link to="/About">About Us</router-link></li>
            <li><router-link to="/Contact">Contact Us</router-link></li>
         </ul>
         <ul>
            <h2>Product</h2>
            <li><a href="">Poll Maker</a></li>
         </ul>
         <ul>
            <h2>Account</h2>
            <li><router-link to="/SignIn">Sign In</router-link></li>
            <li><router-link to="/SignUp">Sign Up</router-link></li>
         </ul>
         <ul>
            <h2>Help & Support</h2>
            <li><router-link to="/Help">Help Center</router-link></li>
            <li><router-link to="/Help/Tutorials">Tutorials</router-link></li>
            <li><router-link to="/Help/FAQs">FAQs</router-link></li>
         </ul>
      </div>
      <div class="bottom">
         <p>© 2021 fingerVote, All Right Reserved</p>
      </div>
   </div>
</template>

<script>
export default {
   name: "Footer",
};
</script>

<style scoped src="../../public/styles/footer.css"></style>
