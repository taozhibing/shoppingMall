(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02d80b35"],{5307:function(t,s,a){t.exports=a.p+"img/vue.63050d8a.jpg"},"7d27":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"order-warp"},[a("van-nav-bar",{attrs:{title:"我的订单","left-arrow":""},on:{"click-left":t.goBack}}),a("van-tabs",{on:{change:t.change},model:{value:t.currentActive,callback:function(s){t.currentActive=s},expression:"currentActive"}},t._l(t.tabs,function(s,e){return a("van-tab",{key:e,attrs:{title:s}},[a("Scroll",{directives:[{name:"show",rawName:"v-show",value:!t.showFlag,expression:"!showFlag"}],ref:"scroll",refInFor:!0,staticClass:"scroll",attrs:{data:t.list}},[a("div",{staticClass:"wap"},t._l(t.list,function(e,i){return e.status==t.currentActive?a("div",{key:s.order_id,staticClass:"list-warp"},[a("div",{staticClass:"top border-bottom"},[a("div",[t._v("订单编号: "+t._s(e.order_id))]),a("div",{staticClass:"order-ok"},[t._v(t._s(t.status(e.status)))])]),t._l(e.order_list,function(s,e){return a("div",{key:s._id,staticClass:"list"},[a("img",{staticClass:"good-img",attrs:{src:s.image_path,onerror:t.defaultImg}}),a("div",{staticClass:"good-title"},[t._v(t._s(s.name))]),a("div",{staticClass:"good-count"},[a("p",[t._v("￥"+t._s(s.mallPrice))]),a("p",{staticClass:"count"},[t._v("x"+t._s(s.count))])])])}),a("div",{staticClass:"timre bottom border-top"},[t._v("创建时间: "+t._s(e.add_time))]),a("div",{staticClass:"bottom"},[t._v("收货地址: "+t._s(e.address))]),a("div",{staticClass:"bottom"},[t._v("共 "+t._s(e.order_list.length)+" 件商品   合计: "+t._s(e.mallPrice))])],2):t._e()}),0),t.list.length||t.showFlag?t._e():a("div",{staticClass:"null"},[t._v("\n                    "+t._s(t.userName&&!t.showFlag?"暂无订单~~":"请先登录噢~~")+"\n                ")])])],1)}),1),a("BaseLoding",{attrs:{showFlag:t.showFlag}})],1)},i=[],r=a("9134"),o=a("3d93"),c={name:"MyOarder",mixins:[o["c"],o["e"]],data(){return{currentActive:0,list:"",defaultImg:'this.src="'+a("5307")+'"',tabs:["全部","待支付","待发货","待收货","已完成"]}},components:{Scroll:r["a"]},methods:{change(t){this.currentActive=t},goBack(){this.$router.go(-1)},status(t){return 1==t?"待支付":2==t?"待发货":3==t?"待收货":5==t?"已完成":void 0},async getMyOrder(){try{this.showFlag=!0;const s=await this.Api.getMyOrder(),a=s.data;200==a.code?(this.showFlag=!1,this.list=a.list):this.showFlag=!1}catch(t){this.$toast("网络错误"),this.showFlag=!1}}},created(){let t=this.$route.query.status;t&&(this.currentActive=t),this.getMyOrder()}},l=c,n=(a("9995"),a("25c1")),d=Object(n["a"])(l,e,i,!1,null,"a99fc314",null);d.options.__file="MyOrder.vue";s["default"]=d.exports},"88fb":function(t,s,a){},9995:function(t,s,a){"use strict";var e=a("88fb"),i=a.n(e);i.a}}]);