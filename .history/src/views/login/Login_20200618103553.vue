<template>
  <div class="dv">
    <div class="bagd"></div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
#app {
  height: 100%;
}
.dv {
  height: 100%;
}
.bagd {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background: url("../../assets/baclogin.jpg") no-repeat;
  background-size: cover;
  position: relative;
}
</style>