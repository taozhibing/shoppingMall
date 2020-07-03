<template>
  <div>
    <div class="container">
      <div class="box boxhead">
        <van-sidebar v-model="activeIndex">
          <div v-for="(item,index) in category" :key="index">
            <van-sidebar-item :title="item.mallCategoryName" @click="click(index)" />
          </div>
        </van-sidebar>
      </div>
      <div class="r-box">
        <van-tabs @change="change" v-model="active" v-if="bxMallSubDto.length > 0">
          <van-tab
            v-for="(item, index) in bxMallSubDto"
            :key="index"
            :name="item.mallSubId"
            :title="item.mallSubName"
          >
            <template>
              <div>
                <div
                  class="r-box1"
                  v-for="(item,index) in dataList"
                  :key="index"
                  @click="details(item,index)"
                >
                  <div class="r-box2">
                    <img :src="item.image" alt width="80px" />
                  </div>
                  <div class="r-box4">
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
      arr: "",
      active: 0,
      bxMallSubDto: [],
      mallCategoryName: "",
      category: [],
      ids: "",
      activeIndex: 0,
      dataList: []
    };
  },
  methods: {
    classification() {
      this.$api
        .classiFication(this.ids)
        .then(res => {
          this.dataList = res.dataList;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    click(index) {
      this.active = 0;
      this.ids = this.category[index].bxMallSubDto[this.active].mallSubId;
      this.category = JSON.parse(localStorage.getItem("category"));
      this.bxMallSubDto = this.category[index].bxMallSubDto;
      this.classification();
    },
    details(item, index) {
      this.$router.push({ path: "/details", query: { id: item.id } });
      this.$utils.details(this.dataList[index]);
    },
    change(name) {
      this.ids = name;
      this.classification();
    }
  },
  mounted() {
    this.category = JSON.parse(localStorage.getItem("category"));
    this.activeIndex = this.$route.query.index;
    this.bxMallSubDto = this.category[this.activeIndex].bxMallSubDto;

    if (this.$route.query.index) {
      this.ids = this.category[this.activeIndex].bxMallSubDto[
        this.active
      ].mallSubId;
      this.classification();
    } else {
      this.ids = this.category[0].bxMallSubDto[0].mallSubId;
      this.classification();
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped>
.container {
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
  font-weight: 700;
}
.rbox2-font1 {
  color: red;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 700;
}
.rbox3-font {
  text-decoration: line-through;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  margin-left: 10px;
  color: rgb(165, 165, 165);
}
.van-sidebar-item {
  margin-top: -8px;
}
.boxhead {
  width: 20%;
}
.r-box4 {
  width: 60%;
}
</style>