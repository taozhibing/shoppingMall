<template>
  <div>
    <div class="top">
      <van-nav-bar title="评价中心" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
    <div class="img">
      <img src="../../assets/evaluate.jpg" alt />
    </div>
    <div>
    <div class="evaluate-bg">
      <div class="evaluate-bgs">
        <!-- 按钮选项 -->
        <van-cell class="Evaluate-options">
          <van-tabs v-model="activeName">
            <van-tab title="待评价" name="a"></van-tab>
            <van-tab title="已评价" name="b"></van-tab>
          </van-tabs>
        </van-cell>
      </div>
    </div>
    <div class="bg">
      <!-- 待评价页面 -->
      <div v-if="activeName === 'a'">
        <div v-if="tobeEvaluat.length===0" class="coming-soon">暂无待评价数据~~~</div>
        <div v-else>
          <div v-for="item in tobeEvaluat" :key="item.id">
            <van-card :title="item.name" :thumb="item.image_path" class="item-split">
              <div slot="footer" class="cartitem-footer">
                <van-button type="primary" plain round size="mini" @click="gotorate(item)">
                  <van-icon name="chat-o" />评价晒单
                </van-button>
              </div>
            </van-card>
          </div>
        </div>
      </div>
      <!-- 已评价页面 -->
      <div v-if="activeName === 'b'">
        <div v-if="alreadyEvaluat.length===0" class="coming-soon">暂无已评价数据~~~</div>
        <div v-else>
          <div v-for="item in alreadyEvaluat" :key="item.id">
            <van-card
              :title="item.goods[0].name"
              :thumb="item.goods[0].image_path"
              class="item-split"
            >
              <div slot="footer">
                <van-button type="danger" plain round size="mini" @click="gotosee(item)">
                  <van-icon name="chat-o" />查看评价
                </van-button>
              </div>
            </van-card>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Estimate",
  props: {},
  components: {},
  data() {
    return {
      activeName: "a",
      alreadyEvaluat: [],
      tobeEvaluat: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 已评价
    alreadyEvaluated() {
      this.$api
        .alreadyEvaluated()
        .then(res => {
          this.alreadyEvaluat = res.data.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    gotorate(val) {
      this.$router.push({ name: "rate", query: { rategoods: val } });
    },
    gotosee(val) {
      this.$router.push({ name: "seeeval", query: { ratesid: val._id } });
    },
    // 待评价
    tobeEvaluated() {
      if (localStorage.getItem("nickname")) {
        this.$api
          .tobeEvaluated()
          .then(res => {
            this.tobeEvaluat = res.data.list;
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  },
  mounted() {
    this.alreadyEvaluated();
    this.tobeEvaluated();
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
  width: 100%;
  height: 200px;
}
img {
  width: 100%;
  height: 100%;
}
.evaluate-bg {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.evaluate-bgs {
  width: 95%;
  height: 95%;
  display: flex;
  justify-content: center;
}
.Evaluate-options {
  width: 90%;
  line-height: 30px;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 1px 1px 1px 1px rgb(209, 204, 204);
}
.coming-soon {
  width: 80%;
  margin: 10px auto;
  text-align: center;
  color: grey;
}
.item-split {
  border-bottom: 5px solid #fff;
}
</style>