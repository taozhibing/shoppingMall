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
    goDetail(item) {
      this.$router.push({
        path: "/detail",
        query: { id: item.goodsId }
      });
      this.$utils.goDetail(item);
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
.imgOne {
  display: flex;
  height: 220px;
  width: 100%;
}
.imgD {
  width: 50%;
}
.imgOne {
  display: flex;
  height: 220px;
  width: 100%;
}
.imgTwo {
  width: 50%;
  height: 220px;
}
.imgThr {
  display: flex;
}
.img {
  width: 100%;
  height: 220px;
  border: 0.5px solid rgb(238, 238, 238);
}
.img1 {
  width: 100%;
  height: 110px;
  border: 0.5px solid rgb(238, 238, 238);
}
</style>