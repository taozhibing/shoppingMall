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
          <van-form>
            <van-cell-group>
              <van-field
                v-model="nickname"
                placeholder="USERNAME"
                :rules="[{
                 required: true,
                message:'用户名不能为空',
               }]"
              />
            </van-cell-group>
            <br />
            <van-cell-group>
              <van-field
                v-model="number"
                placeholder="PASSWORD"
                :rules="[{
                required: true,
                message:'密码不能为空',
               }]"
              />
            </van-cell-group>
            <br />
            <van-cell-group>
              <van-field v-model="tel" type="tel" label="手机号" placeholder="仅注册需要" />
            </van-cell-group>
            <br />
            <van-field center v-model="smss" clearable label="短信验证码" placeholder="仅注册需要">
              <template #button>
                <van-button size="small" type="primary">发送验证码</van-button>
              </template>
            </van-field>
            <br />
            <div class="box">
              <van-field
                v-model="sms"
                center
                clearable
                label="验证码"
                placeholder="请输入短信验证码"
                :rules="[{
                 required: true,
                message:'验证码不能为空',
               }]"
              />
              <div v-html="code" @click="getCode"></div>
            </div>
            <br />
            <div class="btn">
              <van-button size="small" type="primary" @click="login">登录</van-button>
              <van-button size="small" type="danger" @click="register">注册</van-button>
            </div>
          </van-form>
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
    return {
      nickname: "",
      number: "",
      tel: "",
      smss: "",
      sms: "",
      code: ""
    };
  },
  methods: {
    getCode() {
      this.$api
        .verify()
        .then(res => {
          this.code = res;
        })
        .catch(err => {
          console.log(err);
        });
    },
    login() {
      this.$api
        .login({
          nickname: this.nickname,
          password: this.password,
          verify: this.verify
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    register() {
      this.$api
        .register({
          nickname: this.nickname,
          password: this.password,
          verify: this.verify
        })
        .then(res => {
          if(res.code === 200){
           Toast('注册成功');
          }else {
            
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getCode();
  },
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
.btn {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.box {
  display: flex;
}
</style>