<template>
   <div class="wbg-abt">
      <div class="abt-title">
         <h1>About Our Poll</h1>
      </div>
      <div class="abt-main">
         <div class="row-title"><h2>fingerVote Poll</h2></div>
         <div class="row-p">
            <p>
               fingerVote poll is a feature we made for you, our poll is easy to create and use. just a few minutes to create a poll and just one click to vote.
            </p>
         </div>
         <div class="row-list">
            <div class="col-rowlist">
               <h2>Features</h2>
               <ul>
                  <li>Easy to create</li>
                  <li>Can edit</li>
                  <li>Unlimited participant</li>
                  <li>Real times result</li>
               </ul>
            </div>
            <div class="col-rowpic">
               <img src="../../public/img/aboutpoll-icon2.svg" alt="" />
            </div>
         </div>
      </div>
      <div class="abt-links">
         <li>
            <router-link to="/Auth"> <button class="btn-1">Create Poll</button> </router-link>
         </li>
         <li>
            <router-link to=""> <button class="btn-2">View Example</button></router-link>
         </li>
      </div>
   </div>
</template>

<script>
export default {
   name: "notAbt",
};
</script>

<style scoped src="../../public/styles/notlogAbt.css"></style>
