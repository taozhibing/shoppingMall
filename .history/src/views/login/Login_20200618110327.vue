<template>
  <div class="dv">
    <div class="bagd">
    <div class="form"></div>
    </div>
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
.dv {
  width: 100%;
  height: 100%;
}
.bagd {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background: url("../../assets/baclogin.jpg") no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.form {
  width: 80%;
  height: 80%;
}
</style>