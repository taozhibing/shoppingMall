<template>
  <div>
    <div class="container">
      <div class="content">
        <div class="top">会员中心</div>
        <div class="box">
          <div>
            <img :src="userInfo.avatar" alt />
          </div>
          <div>{{userInfo.nickname}}</div>
          <div>退出登录</div>
        </div>
        <div></div>
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
</style>