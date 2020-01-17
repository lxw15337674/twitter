<template>
  <div class="home">
    <twitter></twitter>
  </div>
</template>

<script>
import twitter from 'src/components/twitter.vue';
export default {
  name: 'home',
  components: { twitter },
  async mounted() {
    await this.$get('test');
  },
  methods: {},
};
</script>
