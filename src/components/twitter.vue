<template>
  <div class="twitter">
    <div class="info"></div>
    <div class="content"></div>
    <div class="nav">
      <i class="el-icon-position"></i>
      <i class="el-icon-chat-dot-square"></i>
      <i class="el-icon-star-off"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'twitter',
  props: {
    data: {
      userName: '',
      publicTime: '',
      content: '',
      likes: 0,
      comments: 0,
      replays: 0,
    },
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {},
};
</script>

<style scoped lang='stylus'>
.twitter
  box-sizing border-box
  border-bottom 1px solid $borderColor
  .info
    height 100px
  .nav
    display flex
    justify-content space-around
    align-items center
    width 40%
    // border-top 1px solid $borderColor
    i
      font-size 20px
      height 100%
</style>
