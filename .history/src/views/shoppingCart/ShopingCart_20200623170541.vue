<template>
  <div>
    <div class="box">
      <van-sidebar>
        <van-sidebar-item
          v-for="(item,index) in category"
          :key="index"
          :title="item.mallCategoryName"
        />
      </van-sidebar>
      <div class="r-box">
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
  name: "",
  props: {},
  components: {},
  data() {
    return {
      activeKey: 0,
      arr: "",
      active: 0,
      bxMallSubDto: [],
      mallCategoryName: "",
      category: [],
      id: "",
      activeIndex: 0,
      dataList: []
    };
  },
  methods: {
    classification() {
      this.$api
        .classification(this.id)
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
    this.category = JSON.parse(localStorage.getItem("category"));
    this.bxMallSubDto = this.category[0].bxMallSubDto;
    console.log(this.category);

    if (this.$route.query.index) {
      this.activeIndex = this.$route.query.index;
      this.id = this.category[this.activeIndex].bxMallSubDto[0].mallSubId;
      this.classification();
    } else {
      this.id = this.category[0].bxMallSubDto[0].mallSubId;
      this.classification();
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped>
.box {
  display: flex;
}
.r-box {
  width: 80%;
}
.r-box1 {
  height: 120px;
  display: flex;
  border-bottom: 1px solid rgb(238, 238, 238);
  background: white;
  align-items: center;
}
.r-box2 {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: skyblue;
  margin-right: 15px;
  margin-left: 15px;
  border: 1px solid rgb(238, 238, 238);
}
.r-box3 {
  display: flex;
  align-items: center;
}
.rbox2-font {
  color: red;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 70%;
}
.rbox2-font1 {
  color: red;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.rbox3-font {
  text-decoration: line-through;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  margin-left: 10px;
}
</style>