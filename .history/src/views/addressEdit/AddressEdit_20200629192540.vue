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
        :address-info='obj'
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
      area: area,
      obj : {}
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/addressList");
    },
    // 保存
    onSave(content) {
      this.content = this.content; // content：表单内容
      this.$api
        .address({
          name: content.name,
          tel: content.tel,
          address: `${content.province}${content.city}${content.county}${content.addressDetail}`,
          isDefault: content.isDefault,
          province: content.province,
          city: content.city,
          county: content.county,
          addressDetail: content.addressDetail,
          areaCode: content.areaCode
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      this.$toast("保存成功");
      this.$router.push('/addressList')
    },
    onDelete(id) {
      this.$api.deleteAddress({id}).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
      this.$toast("删除成功");
      this.$router.push('/addressList')
    }
  },
  mounted() {
    this.obj = JSON.parse(this.$route.query.obj)
  },
  watch: {},
  computed: {
    setName() {
      return this.$store.state.name;
    },
    setTel() {
      return this.$store.state.tel;
    },
    setCounty() {
      return this.$store.state.county;
    },
    setCity() {
      return this.$store.state.city;
    },
    setAreaCode() {
      return this.$store.state.areaCode;
    },
    setAddressDetail() {
      return this.$store.state.addressDetail;
    },
    setAddress() {
      return this.$store.state.address;
    }
  }
};
</script>

<style scoped lang='scss'>
</style>