<template>
  <div class="navbar">
    <el-input placeholder="请输入内容" v-model="keywords" size="medium">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <div class="fr df">
      <div class="center pl10">
        <i class="el-icon-user" style="font-size:25px"></i>
        <span class="ml10">user</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      keywords: '',
    };
  },
};
</script>
<style lang="stylus" scoped>
.navbar {
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  border-bottom: 1px solid $borderColor;

  >>> .el-input {
    width: 300px;
  }
}
</style>