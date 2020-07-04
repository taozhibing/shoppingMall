<template>
  <div>
    <div>
      <van-nav-bar title="地址列表" left-arrow @click-left="onClickLeft" />
    </div>
    <div v-if="nickname !== ''">
      <div v-if="list.length <= 0">
        <div>您还没有收货地址额，请添加！</div>
        <van-address-list @add="onAdd" />
      </div>
      <div v-else>
        <van-address-list
          v-model="chosenAddressId"
          :list="list"
          default-tag-text="默认"
          @add="onAdd"
          @edit="onEdit"
          @select="select"
        />
      </div>
    </div>
    <div v-else>
      <div class="address"></div>
      <div class="msg">亲，你还没有登录哟~~</div>
      <div class="address-login" @click="tologin">
        <van-button round type="primary">去登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddressList",
  props: {},
  components: {},
  data() {
    return {
      chosenAddressId: "1",
      list: [],
      obj: {},
      nickname: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 前往登录
    tologin() {
      this.$router.push("/login");
    },
    onAdd() {
      this.$router.push("/addressEdits");
      this.$toast("新增地址");
    },
    onEdit(item) {
      this.$router.push({
        path: "/addressEdit",
        query: { obj: JSON.stringify(item) }
      });
      this.$toast("编辑地址");
    },
    select(item) {
      this.$api
        .setDefaultAddress(item)
        .then(res => {})
        .catch(err => {});
    }
  },
  mounted() {
    if (localStorage.getItem("nickname")) {
      this.nickname = localStorage.getItem("nickname");
    }
    this.$api
      .getAddress()
      .then(res => {
        res.address.map((item, index) => {
          this.$set(item, "id", (index + 1).toString());
        });
        this.list = res.address;
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
.order {
  width: 180px;
  height: 180px;
  margin: 30px auto;
  background: rgb(226, 217, 217) url("../../assets/baclogin.jpg") no-repeat
    center;
  border-radius: 50%;
  align-items: center;
  margin-top: 40px;
}
.msg {
  margin: 10px auto;
  text-align: center;
  width: 200px;
}
.order-login {
  width: 80px;
  margin: 10px auto;
}
</style>