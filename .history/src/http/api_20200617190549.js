// 用来封装所有的请求
import service from './index';

export default {
  // 获取首页数据
  recommend() {
    // 所有的方法必须return
    return service.get(`/recommend`)
  },
  // 搜索
  search(value) {
    return service.get(`/search?value=${value}`)
  },
  // 分类查询
  classiFication(id) {
    return service.get(`/classification?mallSubId=${id}`)
  },
  //  查询获取购物车数据
  getCard() {
    return service.get(`/getCard`)
  },
  // 购物车加减商品
  editCart({ count, id, mallPrice }) {
    return service.post(`/editCart`, {
      count: count,
      id: id,
      mallPrice: mallPrice
    })
  },
  // 购物车商品删除
  deleteShop({ id }) {
    return service.post(`/deleteShop`, { id: id })
  },
  // 购物车支付页面
  order({ address, tel, orderId, totalPrice, idDirect, count }) {
    return service.post(`/order`, {
      address: address,
      tel: tel,
      orderId: orderId,
      totalPrice: totalPrice,
      idDirect: idDirect,
      count: count
    })
  },
   // 单个商品详情
   oneGoods(id) {
     return service.get(`/goods/one?id=${id}`)
   } ,
   // 收藏单个商品
   collection({goods}) {
     return service.post(`/collection`,{goods:goods})
   },
   // 取消收藏
   cancelCollection({id}) {
     return service.post(`/cancelCollection`,{id})
   },
  // 查询商品是否已收藏
  isCollection({id}) {
    return service.post(`/isCollection`,{id})
  }

}