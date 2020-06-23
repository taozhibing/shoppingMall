<template>
  <div>
    <div>
      <van-nav-bar title="地址列表" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
    <div v-if="list.length <= 0">
    <div>您还没有收货地址额，请添加！</div>
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
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
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("myself");
    },
    onAdd() {
      this.$toast("新增地址");
    },
    onEdit(item, index) {
      this.$router.push("/addressEdit");
      this.$toast("编辑地址:" + index);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>