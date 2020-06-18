<template>
  <div class="dv">
    <div class="bagd">
    <div class="submit"></div>
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
  background: url("../../assets/baclogin.jpg") no-repeat;
  background-size: 100% 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
}
.submit {
  width: 100%;
  height: 70px;
  position: absolute;
}
.form {
  width: 80%;
  height: 80%;
  background:rgba(255, 255, 255, 0.5);
}
</style>