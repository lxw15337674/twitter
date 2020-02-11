<template>
  <div class="main-container shadow-card">
    <s-menu></s-menu>
    <div style="flex-grow:1">
      <navbar></navbar>
      <div style="padding:20px">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import sMenu from './componets/menu';
import navbar from './componets/navbar';
export default {
  name: 'layout',
  components: { sMenu, navbar },
};
</script>
<style lang="stylus" scoped>
.main-container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  min-height: 1080px;
}
</style>