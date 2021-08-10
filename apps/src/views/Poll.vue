<template>
   <div class="wrapper">
      <h1>masukk{{ pollId }}</h1>
   </div>
</template>

<script>
export default {
   data() {
      return {
         pollId: this.$route.params.id,
      };
   },
};
</script>

<style></style>
