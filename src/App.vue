<template>
  <div id="app" style="">
    <img src="./assets/logo.png" />
    <div>
      <el-button>el-button</el-button>
    </div>
    <el-image src="/img/logo.png" lazy :preview-src-list="[]" />

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  height: 1500px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
