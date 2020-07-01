// 模块化
// export defalut 只能导出一次
// export 可以导出多次
export default {
  goDetail(item) {
    // 判断本地有没有最近浏览的数组
    if (!localStorage.views) {
      let arr = []
      arr.push(item)
      localStorage.setItem('views', JSON.stringify(arr))
    } else {
      let arr = JSON.parse(localStorage.views)
      arr.push(item)
      localStorage.setItem('views', JSON.stringify(arr))
    }
  },
  collectGoods(item) {
    // 判断本地有没有收藏的数组
    if(!localStorage.collect) {
      let ass = []
      ass.push(item)
      localStorage.setItem('collect',JSON.stringify(ass))
    } else {
      let ass = JSON.parse(localStorage.collect)
      ass.push(item)
      localStorage.setItem('collect',JSON.stringify(ass))
    }
  },
  getSearch(item) {
    // 判断本地有没有搜索的数组
    if(!localStorage.value) {
      let add = []
      add.push(item)
      localStorage.setItem('value',JSON.stringify(add))
    } else {
      let add = JSON.parse(localStorage.value)
      add.push(item)
      localStorage.setItem('value',JSON.stringify(add))
    }
  }
}