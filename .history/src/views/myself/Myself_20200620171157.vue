<template>
  <div>
    <div>
    <div class="top">会员中心</div>
    
    </div>
  </div>
</template>

<script>
export default {
  name: "Myself",
  props: {},
  components: {},
  data() {
    return {
      userInfo: {}
    };
  },
  methods: {},
  mounted() {
    this.$api
      .queryUser({})
      .then(res => {
        this.userInfo = res.userInfo;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>