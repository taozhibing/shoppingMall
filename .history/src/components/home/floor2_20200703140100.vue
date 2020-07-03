<template>
  <div>
    <div>
      <div class="floor">
        <div class="f-font">2F</div>
        <div class="f-font2">新鲜食品</div>
      </div>
       <div>
        <div class="imgOne">
          <div v-for="item in floor2.slice(0,1)" :key="item.id" class="imgD">
            <img :src="item.image" alt class="img" @click="goDetail(item)" />
          </div>
          <div class="imgTwo">
            <div v-for="item in floor2.slice(1,2)" :key="item.id" class="img1">
              <img :src="item.image" alt class="img1" @click="goDetail(item)" />
            </div>
            <div v-for="item in floor2.slice(2,3)" :key="item.id">
              <img :src="item.image" alt class="img1" @click="goDetail(item)" />
            </div>
          </div>
        </div>
        <div class="imgThr">
          <div v-for="(item,index) in floor2.slice(3,5)" :key="index">
            <img :src="item.image" alt class="img1" @click="goDetail(item)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    floor2: {
      type: Array,
      default: () => {}
    }
  },
  components: {},
  data() {
    return {
      id: ""
    };
  },
  methods: {
    goDetail(index) {
      this.$router.push({
        path: "/detail",
        query: { id: this.floor2[index].goodsId }
      });
      this.$utils.goDetail(this.floor2[index])
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped>
.floor {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.f-font {
  width: 20px;
  height: 20px;
  border-radius: 15px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.f-font2 {
  color: red;
  font-size: 14px;
}
.left {
  float: left;
  width: 50%;
}
.right {
  float: right;
  width: 50%;
}
img {
  width: 100%;
}
.div {
  display: flex;
}
</style>