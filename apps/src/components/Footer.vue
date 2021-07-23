<template>
   <div class="footer-wrap">
      <div class="footer">
         <ul>
            <h2>Company</h2>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
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
            <li><a href="">Help Center</a></li>
            <li><a href="">Tutorial</a></li>
            <li><a href="">FAQs</a></li>
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
