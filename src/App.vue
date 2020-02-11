<template>
<<<<<<< HEAD
  <div id="app" style="">
    <img src="./assets/logo.png" />
    <div>
      <el-button>el-button</el-button>
    </div>
    <div>
      <el-image src="/img/logo.png" lazy :preview-src-list="[]" />
    </div>
    <el-button type="text" @click="dialogVisible = true"
      >点击打开 Dialog</el-button
    >

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <HelloWorld msg="Welcome to Your Vue.js App" />
=======
  <div id="app">
    <router-view></router-view>
>>>>>>> e5f8a5c3a6398456df17201fa7a9984323f5cc20
  </div>
</template>

<script>
import 'src/assets/css/reset.css';
export default {
<<<<<<< HEAD
  name: "app",
  components: {
    HelloWorld
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
=======
  name: 'app',
  components: {},
>>>>>>> e5f8a5c3a6398456df17201fa7a9984323f5cc20
};
</script>
