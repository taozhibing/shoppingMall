<template>
  <div>
    <div>
      <van-nav-bar title="最近浏览" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
    <div v-for="(item,index) in views" :key="index">
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
</template>

<script>
import uniqWith from 'lodash/uniqWith';
import isEqual from 'lodash/isEqual';

export default {
  name: "RecentBrowsing",
  props: {},
  components: {},
  data() {
    return {
      views: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    del(index) {
      this.$dialog
        .confirm({
          title: "确认删除该条浏览历史"
        })
        .then(() => {
          this.views = JSON.parse(localStorage.getItem("views"));
          this.views.splice(index, 1);
          localStorage.setItem('views', JSON.stringify(this.views))
        })
        .catch(() => {});
    },
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
    let arr = JSON.parse(localStorage.getItem("views"));
    this.views = uniqWith(arr,isEqual)
    console.log(this.views);
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