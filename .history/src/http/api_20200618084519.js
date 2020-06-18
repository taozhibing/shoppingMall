// 用来封装所有的请求
import service from './index';

export default {
  // 获取首页数据(1)
  recommend() {
    // 所有的方法必须return
    return service.get(`/recommend`)
  },
  // 搜索(2)
  search(value) {
    return service.get(`/search?value=${value}`)
  },
  // 分类查询(3)
  classiFication(id) {
    return service.get(`/classification?mallSubId=${id}`)
  },
  //  查询获取购物车数据(4)
  getCard() {
    return service.get(`/getCard`)
  },
  // 购物车加减商品(5)
  editCart({ count, id, mallPrice }) {
    return service.post(`/editCart`, {
      count: count,
      id: id,
      mallPrice: mallPrice
    })
  },
  // 购物车商品删除(6)
  deleteShop({ id }) {
    return service.post(`/deleteShop`, { id: id })
  },
  // 购物车支付页面(7)
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
   // 单个商品详情(8)
   oneGoods(id) {
     return service.get(`/goods/one?id=${id}`)
   } ,
   // 收藏单个商品(9)
   collection({goods}) {
     return service.post(`/collection`,{goods:goods})
   },
   // 取消收藏(10)
   cancelCollection({id}) {
     return service.post(`/cancelCollection`,{id})
   },
  // 查询商品是否已收藏(11)
  isCollection({id}) {
    return service.post(`/isCollection`,{id})
  },
  // 加入购物车(12)
  addShop({id}) {
    return service.post(`/addShop`,{id})
  },
  // 退出登录
  loginOut({}) {
    return service.post(`/loginOut`,{})
  },
  // 获取用户信息
  queryUser({}) {
    return service.post(``,{})
  }

}