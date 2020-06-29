<template>
  <div>
    <div class="top">
      <van-nav-bar title="我的收藏" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
    <div v-if="collect.length < 1">
      <div>暂无收藏商品</div>
    </div>
    <div v-else>
      <div v-for="(item,index) in collect" :key="index">
        <div v-if="item.goodsName">
          <div class="box">
            <div class="img">
              <img :src="item.image" alt @click="goDetail(item)" />
            </div>
            <div>
              <div class="title">{{item.goodsName}}</div>
              <div class="price">￥{{item.price}}</div>
              <div>
                <div class="icon">
                  <van-icon name="close" @click="del(index)" size="20" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="item.name">
          <div class="box">
            <div class="img">
              <img :src="item.image" alt @click="goDetail(item)" />
            </div>
            <div>
              <div class="title">{{item.name}}</div>
              <div class="price">￥{{item.present_price}}</div>
              <div>
                <div class="icon">
                  <van-icon name="close" @click="del(index)" size="20" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="box">
            <div class="img">
              <img :src="item.image" alt @click="goDetail(item)" />
            </div>
            <div>
              <div>
                <div class="icon">
                  <van-icon name="close" @click="del(index)" size="20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uniqWith from 'lodash/uniqWith';
import isEqual from 'lodash/isEqual';
export default {
  name: "MyCollection",
  props: {},
  components: {},
  data() {
    return {
      nickname: "",
      collect: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    del(index) {
      this.$dialog
        .confirm({
          title: "确认删除该条收藏"
        })
        .then(() => {
          this.collect = JSON.parse(localStorage.getItem("collect"));
          this.collect.splice(index, 1);
          localStorage.setItem("collect", JSON.stringify(this.collect));
        })
        .catch(() => {});
    },
    // 点击搜索出来的商品 前往商品详情页
    goDetail(item) {
      if (item.goodsId) {
        this.$router.push({
          path: "/detail",
          query: { id: item.goodsId }
        });
      } else {
        this.$router.push({
          path: "/detail",
          query: { id: item.id }
        });
      }
      this.$utils.goDetail(item);
    }
  },
  mounted() {
    if (localStorage.getItem("nickname")) {
      this.nickname = localStorage.getItem("nickname");
    }
    this.collect = JSON.parse(localStorage.getItem("collect"));
    this.collect = uniqWith(this.collect,isEqual)
    console.log(this.collect);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top {
  width: 100%;
  height: 40px;
  background: #ffff;
  border-bottom: 1px solid #eee;
}
.img {
  width: 30%;
  height: 30%;
}
img {
  width: 100%;
  height: 100%;
}
.box {
  display: flex;
  margin: 10px;
  background: #fff;
}
.title {
  display: flex;
  align-items: center;
  width: 240px;
  height: 50px;
}
.price {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  color: red;
}
.icon {
  float: right;
}
</style>