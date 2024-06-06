export const getDetail = (id) => {
  return new Promise((resolve, reject) => {
    console.log('getDetail', id)
      resolve({
        id: id,
        desc: '三全灌汤水饺 状元素水饺方便家庭早餐晚餐速冻食品[199-110专区] 白菜猪肉水饺450g约28个' + id,
        price: 199.98,
        tag:'自营',
        img:['../../static/detail/detail1.png','../../static/detail/detail2.png','../../static/detail/detail3.png'],
        tagImg: '../../static/detail/tag.png',
        rank: Math.floor(Math.random() * 50) + 1,
        choose:[
          {
            name: "【热销爆款】纯牛奶200ml*12，1个",
            price: 19.99,
            weight: 2.7,
          },
          {
            name: "【热销爆款】纯牛奶200ml*24，1个",
            price: 39.99,
            weight: 5.4,
          },
          {
            name: "【热销爆款】纯牛奶400ml*12，1个",
            price: 28.97,
            weight: 4.2,
          },
        ]
      })
  })   
}