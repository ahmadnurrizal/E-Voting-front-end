<template>
   <div class="poll-container">
      <div class="title">
         <h1>How Poll Work ?</h1>
      </div>
      <div class="main">
         <div class="card">
            <img src="../../public/img/poll-card1.svg" class="cta" alt="create" />
            <div class="container-card-1"><h2>Create</h2></div>
         </div>
         <img src="../../public/img/poll-arrow.svg" alt="" class="img1" />
         <div class="card">
            <img src="../../public/img/poll-card2.svg" alt="share" class="rt" />
            <div class="container-card-2"><h2>Share</h2></div>
         </div>
         <img src="../../public/img/poll-arrow.svg" alt="" class="img2" />
         <div class="card">
            <img src="../../public/img/poll-card3.svg" alt="result" class="rt" />
            <div class="container-card-3"><h2>Result</h2></div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "Poll",
};
</script>

<style src="../../public/styles/poll.css"></style>
