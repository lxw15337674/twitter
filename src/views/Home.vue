<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <el-image src="../assets/logo.png"></el-image>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
