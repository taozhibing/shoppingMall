<template>
  <div>
    <div class="container">
      <div class="content">
        <div class="top">会员中心</div>
        <div class="box">
          <div>
            <img :src="userInfo.avatar" alt />
          </div>
          <div class="text">欢迎您 ： {{userInfo.nickname}}</div>
          <div>退出登录</div>
        </div>
      </div>
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
.container {
  width: 100%;
}
.content {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.top {
  height: 40px;
  line-height: 40px;
}
.box {
  width: 100%;
  height: 200px;
  background: rgb(253, 4, 133);
}
img {
  width: 30px;
  height: 30px;
}
</style>