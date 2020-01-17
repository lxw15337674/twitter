<template>
  <div class="home">
    <twitter></twitter>
    {{ hello }}
    <el-button @click="gethello">请求</el-button>
  </div>
</template>

<script>
import gql from 'graphql-tag';
const hello = gql`
  {
    hello
    book {
      id
      name
      price
    }
  }
`;
import twitter from 'src/components/twitter.vue';
export default {
  name: 'home',
  data() {
    return {
      hello: '',
    };
  },
  components: { twitter },
  methods: {
    async gethello() {
      await this.$apollo
        .query({
          query: hello,
        })
        .then((res) => {
          console.log(res);
          this.hello = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
