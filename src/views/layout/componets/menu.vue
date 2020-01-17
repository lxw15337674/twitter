<template>
  <div>
    <el-menu :collapse="isCollapse">
      <el-menu-item
        v-for="item in menuList"
        :key="item.name"
        :index="item.name"
        @click="routerPush(item.name)"
      >
        <div class="title fwb" slot="title">{{item.title}}</div>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false,
      menuList: [
        {
          name: 'home',
          title: '首页',
        },
        {
          name: 'hot',
          title: '热门',
        },
        {
          name: 'new',
          title: '新鲜事',
        },
      ],
    };
  },
  methods: {
    routerPush(index) {
      this.$router.push({ name: index });
    },
  },
};
</script>
<style lang="stylus" scoped>
>>> .el-menu {
  min-width: 250px;
  height: 100%;

  .title {
    font-size: 15px;
  }
}
</style>