<template>
  <div class="dv">
    <div class="bagd">
      <div class="submit">
        <div class="icon">
          <van-icon name="arrow-left" />
        </div>
      </div>
      <div class="form">
     <div class="form1">
      <div class="form-top">登录 / 注册</div>
      <div></div>
     </div>
      </div>
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
}
.submit {
  width: 100%;
  height: 70px;
}
.form {
  width: 80%;
  height: 80%;
  background: rgba(255, 255, 255, 0.5);
  margin-left: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  }
.icon {
  width: 30px;
  height: 30px;
  border: 1px solid #999;
  border-radius: 15px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  left: 5px;
}
.form-top {
  width: 100%;
  height: 60px;
  font-size: 20px;
  font-weight: 700;
}
.form1 {
  width: 90%;
  height: 95%;
}
</style>