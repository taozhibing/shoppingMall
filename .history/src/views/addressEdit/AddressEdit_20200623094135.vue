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
      />
    </div>
  </div>
</template>

<script>
import area from "../../area";
export default {
  name: "AddressEdit",
  props: {},
  components: {},
  data() {
    return {
      area: area
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/addressList");
    },
    onSave(content) {
      this.content = this.content;  // content：表单内容
      this.$api
        .address({
          name: content.name,
          tel: content.tel,
          address: content.address,
          isDefault: content.isDefault,
          province: content.province,
          city: content.city,
          county: content.county,
          addressDetail: content.addressDetail,
          areaCode: content.areaCode,
          id
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      this.$toast("save");
    },
    onDelete() {
      this.$toast("delete");
    },
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>