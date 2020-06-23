<template>
  <div class="box">
    <div class="head">个人资料</div>
    <div class="icon" @click="back">
      <van-icon name="arrow-left" size="20" color="#1989fa"/>
    </div>
    <van-cell-group>
      <div>
        <van-field v-model="value" label="github" />
      </div>
    </van-cell-group>
    <div class="Pcbox">
      <div class="pcbox">
        <div>头像</div>
        <div class="pc1box">
          <div @click="uploader">
            <img :src="userInfo.avatar" alt width="50px" height="50px" />
          </div>
          <div>
            <van-icon name="arrow" color="#999"/>
          </div>
        </div>
      </div>
    </div>
    <van-cell-group>
      <van-field v-model="username" label="用户名">
        <template>{{username}}</template>
      </van-field>
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="nickname" label="昵称">
        <template>{{nickname}}</template>
      </van-field>
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="gender" label="性别">
        <template>{{gender}}</template>
      </van-field>
    </van-cell-group>
    <van-cell-group>
      <div>
        <van-field v-model="email" label="邮箱" placeholder="请输入邮箱" />
      </div>
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="text" label="出生年月">
        <template>{{this.text}}</template>
      </van-field>
    </van-cell-group>
    <div class="btn">
      <van-button round type="primary" size="large" @click="keep">保存</van-button>
    </div>
    <div class="btn">
      <van-button round type="default" size="large">取消</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {},
  components: {},
  data() {
    return {
      value: "",
      userInfo: {},
      username: "",
      nickname: "",
      gender: "",
      email: "",
      year: "",
      month: "",
      day: "",
      text: ""
    };
  },
  methods: {
    back() {
      this.$router.push("myself");
    },
    uploader() {
      this.$router.push("");
    },
    keep() {
     
      this.$router.push("myself")
    }
  },
  mounted() {
    this.$api
      .queryUser({})
      .then(res => {
        this.userInfo = res.userInfo;
        this.username = res.userInfo.username;
        this.nickname = res.userInfo.nickname;
        this.gender = res.userInfo.gender;
        this.year = res.userInfo.year;
        this.month = res.userInfo.month;
        this.day = res.userInfo.day;
        this.text = `${this.year}年${this.month}月${this.day}日`;
        console.log(res.userInfo);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  background: white;
  position: relative;
}
.head {
  width: 100%;
  height: 50px;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.icon {
  position: absolute;
  top: 10px;
  left: 8px;
}
.Pcbox {
  width: 100%;
  display: flex;
  justify-content: center;
}
.pcbox {
  height: 80px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pc1box {
  display: flex;
  align-items: center;
}
.btn {
  margin: 30px !important;
}
</style>