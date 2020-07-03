<template>
  <div>
    <div class="cate">商品分类</div>
    <div class="d-flex">
      <div>
        <van-sidebar v-model="activeKey" @change="onChange">
          <div v-for="(item,index) in category" :key="index">
            <van-sidebar-item :title="item.mallCategoryName" />
          </div>
        </van-sidebar>
      </div>
      <div class="tab">
        <van-tabs v-model="active" @click="clickItem" line-width="20%" title-active-color="red">
          <van-tab v-for="(item,index1) in bxMallSubDto" :key="index1" :title="item.mallSubName">
            <div v-for="(item,index) in dataList" :key="index" @click="goDetail(item)">
              <van-card
                :price="item.present_price"
                :title="item.name"
                :thumb="item.image_path"
                :origin-price="item.orl_price"
              />
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categorys",
  props: {},
  data() {
    return {
      activeKey: 0,
      category: [],
      bxMallSubDto: [],
      ids: "",
      dataList: [],
      active: 0,
      id: ""
    };
  },
  components: {},
  methods: {
    onChange(index) {
      this.active = 0;
      this.activeKey = index;
      this.bxMallSubDto = this.category[this.activeKey].bxMallSubDto;
      this.ids = this.category[this.activeKey].bxMallSubDto[
        this.active
      ].mallSubId;
      this.getData();
    },
    clickItem(index) {
      this.active = index;
      this.ids = this.category[this.activeKey].bxMallSubDto[
        this.active
      ].mallSubId;
      this.getData();
    },
    getData() {
      this.$api
        .catagorical(this.ids)
        .then(res => {
          this.dataList = res.dataList;
        })
        .catch(err => {});
    },
    goDetail(item) {
      console.log(item);
      this.$router.push({
        path: "/details",
        query: { id: item.id }
      });
      this.$utils.goDetail(item)
    }
  },
  mounted() {
    this.category = JSON.parse(localStorage.getItem("category"));
    this.bxMallSubDto = this.category[0].bxMallSubDto;
    if (this.$route.query.index) {
      this.activeKey = this.$route.query.index;
      this.ids = this.category[this.activeKey].bxMallSubDto[this.active].mallSubId;
      this.getData();
    } else {
      this.ids = this.category[this.activeKey].bxMallSubDto[this.active].mallSubId;
      this.getData();
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.cate {
  font-size: 18px;
  text-align: center;
  padding: 10px 0;
  font-weight: 500;
  border-bottom: 1px solid #eeeeee;
}
.tab {
  width: 100%;
}
/deep/.van-tab {
  flex-basis: 27% !important;
}
/deep/.van-tabs--line .van-tabs__wrap {
  height: 60px;
}
</style>