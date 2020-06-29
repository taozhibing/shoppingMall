<template>
  <div>
    <div>
      <van-nav-bar title="我的收藏" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
    <!--<div v-if="nickname !==''">
      <div v-if="arr.length < 1">
        <div>暂无收藏商品</div>
      </div>
      <div v-else>
        <van-cell v-for="item in arr" :key="item.id">
          <div class="mysearch-list">
            <div @click="gotos(item.cid)">
              <img :src="item.image_path" class="search-img" />
            </div>
            <div>
              <div v-html="item.name" class="goods-name" @click="gotos(item.cid)"></div>
              <div class="goods-price">
                <div class="persent-price" @click="gotos(item.cid)">￥{{item.present_price}}</div>
                <div @click="delcollect(item)">
                  <van-icon name="close" class="icon" />
                </div>
              </div>
            </div>
          </div>
        </van-cell>
      </div>
    </div>-->
    <div v-if="arr.length < 1">
      <div>暂无收藏商品</div>
    </div>
    <div class="box">
      <div v-for="(item,index) in list" :key="index">
        <div class="d-flex">
          <div class="f-flex">
            <img :src="item.image_path" class="img" @click="goDetail(index)" />
            <van-icon name="close" @click="del(index)" class="close" />
          </div>
          <div class="item">
            <div>{{item.name}}</div>
            <div class="price">￥{{item.present_price}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCollection",
  props: {},
  components: {},
  data() {
    return {
      arr: [],
      list: [],
      nickname: ""
    };
  },
  methods: {
    getData() {
      this.$api
        .collectionList()
        .then(res => {
          this.arr = res.data.list;
          console.log(res);
          for (let i = 0; i < this.arr.length; i++) {
            if (this.arr.indexOf(this.arr[i]) === i) {
              this.list.push(this.arr[i]);
            }
          }
        })
        .catch(err => {});
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    // 点击搜索出来的商品 前往商品详情页
    goDetail(index) {
      this.$router.push({
        path: "/detail",
        query: { id: this.list[index].cid }
      });
    },
    del(index) {
      this.$api
        .cancelCollection(this.list[index].cid)
        .then(res => {
          this.$toast.success("删除成功");
          this.getData();
        })
        .catch(err => {});
    }
  },
  mounted() {
    this.getData();
    if (localStorage.getItem("nickname")) {
      this.nickname = localStorage.getItem("nickname");
    }
    // this.Obj = JSON.parse(localStorage.getItem('obj'))
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
  border-bottom: 1px solid #eee;
  z-index: 999;
}
.box {
  padding: 10px;
  margin: 10px;
  background: #fff;
}
.d-flex {
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 10px;
  padding-bottom: 5px;
}
.f-flex {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.img {
  width: 25%;
  border: 1px solid #eeeeee;
  margin-right: 10px;
}
.item {
  width: 100%;
}
.price {
  font-size: 14px;
  color: red;
  margin-top: 20px;
}
.close {
  top: 10px !important;
  right: 10px;
}
</style>