<template>
  <div>
    <div>
      <van-nav-bar title="我的收藏" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
    <div v-if="nickname !==''">
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
    </div>
    <!-- <div class="box">
      <div v-for="(item,index) in list" :key="index">
        <div class="d-flex">
          <img :src="item.image_path" class="img" />
          <div class="item">
            <div>{{item.name}}</div>
            <div class="price">￥{{item.present_price}}</div>
            <div class="close">
              <van-icon name="close" @click="close(index)" class="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>-->
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
      id: "",
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
    // 取消收藏
    delcollect(val) {
      this.$dialog
        .confirm({
          title: "确认取消收藏"
        })
        .then(() => {
          this.$api
            .cancelCollection(val.cid)
            .then(res => {
              this.$toast.success(res.msg);
              this.getCollection();
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(() => {});
      //  cancelCollection 取消收藏单个商品        参数：  id:商品的cid
    },
    // 点击搜索出来的商品 前往商品详情页
    gotos(val) {
      this.$router.push({
        name: "Detail",
        query: {
          ids: val
        }
      });
    },


    // close(index) {
    //   this.$api
    //     .cancelCollection(this.list[index].cid)
    //     .then(res => {
    //       this.$toast.success("删除成功");
    //       this.getData();
    //     })
    //     .catch(err => {});
    // }
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
}
.box {
  padding: 10px;
}
.d-flex {
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 10px;
  padding-bottom: 5px;
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
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>