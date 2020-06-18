<template>
  <div class="dv">
    <div class="bagd">
      <div class="form">
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">提交</van-button>
          </div>
        </van-form>
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
  background: rgba(255, 255, 255, 0.5);
  margin-top: 70px;
}
</style>