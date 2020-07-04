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
    <div class="order"></div>
      <div class="msg">亲，你还没有登录哟~~</div>
      <div class="order-login" @click="tologin">
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
      obj: {}
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
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
</style>