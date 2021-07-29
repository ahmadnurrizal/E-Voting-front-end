<template>
   <div class="wrapper">
      <NavLog v-if="isLogin" />
      <Navbar v-else />
      <div class="wave-top"><div class="vec"></div></div>
      <div class="main">
         <div class="card">
            <h1>About Us</h1>
            <p class="headline">
               fingerVote is a website poll created by Muhammad Ali Fikri, Rizki Nabil Aufa, and Ahmad Nur Rizal. the purpose of making this website is as an internship assignment from the RPLGDC laboratory. fingerVote website is free for
               anyone who wants to use it, besides that the fingerVote website is very easy to use.
            </p>
            <div class="body">
               <h2 class="team">Our Team</h2>
               <div class="uiux">
                  <div class="show">
                     <div class="foto">
                        <img src="../../public/img/vector/pp-ui.svg" alt="" />
                     </div>
                     <div class="desc">
                        <h2>Muhammad Ali Fikri</h2>
                        <p>UI/UX Designer</p>
                     </div>
                  </div>
                  <p>
                     Hallo...! <span><br /></span> My name is Muhammad Ali Fikri you can called me fikri. I’M currently studying at Department of informatics, I have an interest in UI/UX Designer. I think the process of making an
                     application or website before entering the development process has its own excitement, where we need to research first, after knowing what user wants we will create the inter face.
                  </p>
               </div>
               <div class="FE">
                  <p>
                     Hi, everyone! <span><br /></span> My name is Rizki Nabil Aufa. I’m a front-end developer. Focused in writing clean and user-friendly experience. Discipline and well organized person. I’m currently a computer science
                     student and live in Bekasi, West Java, Indonesia. I have an interest in web development and data science. Trying my best to be a long life learner and professional.
                  </p>
                  <div class="show">
                     <div class="foto">
                        <img src="../../public/img/vector/pp-fe.svg" alt="" />
                     </div>
                     <div class="desc">
                        <h2>Rizki Nabil Aufa</h2>
                        <p>Front-end Developer</p>
                     </div>
                  </div>
               </div>
               <div class="BE">
                  <div class="show">
                     <div class="foto">
                        <img src="../../public/img/vector/pp-be.svg" alt="" />
                     </div>
                     <div class="desc">
                        <h2>Ahmad Nur Rizal</h2>
                        <p>Back-end Developer</p>
                     </div>
                  </div>
                  <p>
                     Hallo...! <span><br /></span> My name is Ahmad Nur Rizal you can called ical. Since entering the Department of Informatics I have been interested in knowing more about information technology, especially in the field of
                     software engineering. Becoming a reliable back-end developer is my goal.
                  </p>
               </div>
               <div class="information">
                  <h2>General Information</h2>
                  <p>
                     FingerVote offers its user a free platform where they can create different types of polls. The philosophy why this website is named “fingerVote”, because we only need to use our finger to vote, we don’t need to come to
                     the voting place, just by using gadget you can participate in voting. We built this website in 2021 on the assignment of the RPLGDC laboratory. We hope that fingerVote can help people to vote online.
                  </p>
               </div>
            </div>
         </div>
      </div>
      <Footer />
   </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import NavLog from "@/components/NavLog.vue";
import Footer from "../components/Footer.vue";

export default {
   name: "About-Us",
   components: {
      Navbar,
      NavLog,
      Footer,
   },
   data() {
      return {
         isLogin: false,
      };
   },
   async created() {
      let token = localStorage.getItem("token");
      if (!token) {
         this.isLogin = false;
      } else {
         this.isLogin = true;
      }
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

.card {
   padding: 40px;
   width: 948px;
   height: 2360px;
   background-image: linear-gradient(180deg, #aed8ff 0%, #3d87cc 100%);
   margin: 100px auto;
}

.card h1 {
   font-size: 48px;
   margin-bottom: 30px;
}

.team {
   font-size: 30px;
   margin-bottom: 40px;
}

h1,
h2 {
   font-family: "Kanit", sans-serif;
   color: #eaf5ff;
}

p {
   font-family: "Roboto", sans-serif;
   color: #eaf5ff;
   font-size: 18px;
   line-height: 32.4px;
}

.headline {
   margin-bottom: 40px;
}

.uiux,
.FE {
   display: flex;
   gap: 30px;
   margin-bottom: 90px;
}

.BE {
   display: flex;
   gap: 30px;
   margin-bottom: 40px;
}

.show {
   background-color: #ffffff;
   width: 340px;
   height: 500px;
   border-radius: 20px;
}

.foto {
   padding: 20px;
}

.desc {
   padding-top: 55px;
   padding-bottom: 55px;
   text-align: center;
   background-color: #616161;
   border-bottom-right-radius: 20px;
   border-bottom-left-radius: 20px;
}

.information h2 {
   margin-bottom: 30px;
}
</style>
