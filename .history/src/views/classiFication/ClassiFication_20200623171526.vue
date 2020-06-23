<template>
  <div>
    <div class="top">商品分类</div>
    <div class="container">
      <div class="title-left">
        <van-sidebar>
          <van-sidebar-item
            v-for="(item,index) in category"
            :key="index"
            :title="item.mallCategoryName"
          />
        </van-sidebar>
      </div>
      <div class="value-right">
        <van-tabs v-model="active" v-if="bxMallSubDto.length > 0">
          <van-tab v-for="(item, index) in bxMallSubDto" :key="index" :title="item.mallSubName">
            <template>
              <div>
                <div class="r-box1" v-for="(item,index) in dataList" :key="index">
                  <div class="r-box2">
                    <img :src="item.image" alt width="80px" />
                  </div>
                  <div>
                    <div class="rbox2-font">{{item.name}}</div>
                    <div class="r-box3">
                      <div class="rbox2-font1">¥{{item.present_price}}</div>
                      <div class="rbox3-font">{{item.orl_price}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassiFication",
  props: {},
  components: {},
  data() {
    return {
      category: [],
      bxMallSubDto: [],
      dataList: [],
      id: ""
    };
  },
  methods: {
    getData() {
      this.$api
        .classiFication(this.id)
        .then(res => {
          this.dataList = res.dataList;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
    this.category = JSON.parse(localStorage.getItem("category"));
    this.bxMallSubDto = this.category[0].bxMallSubDto;
    console.log(this.category);

    if (this.$route.query.index) {
      this.activeIndex = this.$route.query.index;
      this.id = this.category[this.activeIndex].bxMallSubDto[0].mallSubId;
      this.getData();
    } else {
      this.id = this.category[0].bxMallSubDto[0].mallSubId;
      this.getData();
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffff;
}
</style>