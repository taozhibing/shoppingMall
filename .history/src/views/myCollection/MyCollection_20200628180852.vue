<template>
  <div>
    <div>
      <van-nav-bar title="我的收藏" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
    <div class="box">
      <div v-for="(item,index) in list" :key="index">
        <div class="d-flex">
          <img :src="item.image_path" class="img" />
          <div class="item">
            <div>{{item.name}}</div>
            <div class="price">￥{{item.present_price}}</div>
            <div class="close">
              <van-icon name="close" @click="close(index)" class="icon"/>
            </div>
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
      id: ""
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
    close(index) {
      this.$api
        .cancelCollection(this.list[index].cid)
        .then(res => {
          this.$toast.success("删除成功");
          this.getData()
        })
        .catch(err => {});
    }
  },
  mounted() {
    this.getData();
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