<template>
  <div>
    <div>
      <van-nav-bar title="地址编辑" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
    <div>
      <van-address-edit
        :area-list="area" 
        show-delete
        show-set-default
        show-search-result
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>
  </div>
</template>

<script>
import area from '../../area';
export default {
  name: "AddressEdit",
  props: {},
  components: {},
  data() {
    return {
      area : area,
    };
  },
  methods: {
     onClickLeft() {
      this.$router.push("/addressList");
    },
    onSave() {
      this.$api.address({ name, tel, address, isDefault, province, city, county, addressDetail, areaCode, id }).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
      this.$toast("save");
    },
    onDelete() {
     this.$toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>