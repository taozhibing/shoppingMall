<template>
  <div>
    <div>
      <van-nav-bar title="地址列表" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
    <div v-if="list.length <= 0">
      <div>您还没有收货地址额，请添加！</div>
      <van-address-list  @add="onAdd" />
      <div else>
        <van-address-list
          v-model="chosenAddressId"
          :list="list"
          default-tag-text="默认"
          @add="onAdd"
          @edit="onEdit"
        />
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
      list: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("myself");
    },
    onAdd() {
     this.$router.push("/addressEdit");
      this.$toast("新增地址");
    },
    onEdit(item, index) {
      this.$router.push({path:"/addressEdit",query:{id:this.chosenAddressId}});
      this.$toast("编辑地址:" + index);
    }
  },
  mounted() {
    this.$api.getAddress().then(res => {
      res.address.map((item,index) => {
        this.$set(item,'id',(index+1).toString0)
      })
      this.list = res.address
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>