export const getDetail = (id) => {
  return new Promise((resolve, reject) => {
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
          {
            name: "【热销爆款】纯牛奶400ml*12，1个",
            price: 28.97,
            weight: 4.2,
          },
          {
            name: "【热销爆款】纯牛奶400ml*12，1个",
            price: 28.97,
            weight: 4.2,
          },
          {
            name: "【热销爆款】纯牛奶400ml*12，1个",
            price: 28.97,
            weight: 4.2,
          },
          {
            name: "【热销爆款】纯牛奶400ml*12，1个",
            price: 28.97,
            weight: 4.2,
          },
          {
            name: "【热销爆款】纯牛奶400ml*12，1个",
            price: 28.97,
            weight: 4.2,
          },
          {
            name: "【热销爆款】纯牛奶400ml*12，1个",
            price: 28.97,
            weight: 4.2,
          },
          {
            name: "【热销爆款】纯牛奶400ml*12，1个",
            price: 28.97,
            weight: 4.2,
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

export const getProvince = () => {
  return new Promise((resolve, reject) => {
    resolve({
      "body": {
        "areas": [
            {
                "addrId": 14,
                "diaoYuDao": false,
                "foreignOverSea": false,
                "gangAoTai": false,
                "isSupCOD": false,
                "name": "安徽",
                "parentId": 4744,
                "sortCode": "A"
            },
            {
                "addrId": 1,
                "diaoYuDao": false,
                "foreignOverSea": false,
                "gangAoTai": false,
                "isSupCOD": false,
                "name": "北京",
                "parentId": 4744,
                "sortCode": "B"
            },
            {
                "addrId": 4,
                "diaoYuDao": false,
                "foreignOverSea": false,
                "gangAoTai": false,
                "isSupCOD": false,
                "name": "重庆",
                "parentId": 4744,
                "sortCode": "C"
            },
            {
                "addrId": 16,
                "diaoYuDao": false,
                "foreignOverSea": false,
                "gangAoTai": false,
                "isSupCOD": false,
                "name": "福建",
                "parentId": 4744,
                "sortCode": "F"
            },
            {
                "addrId": 24,
                "diaoYuDao": false,
                "foreignOverSea": false,
                "gangAoTai": false,
                "isSupCOD": false,
                "name": "贵州",
                "parentId": 4744,
                "sortCode": "G"
            },
            {
                "addrId": 19,
                "diaoYuDao": false,
                "foreignOverSea": false,
                "gangAoTai": false,
                "isSupCOD": false,
                "name": "广东",
                "parentId": 4744,
                "sortCode": "A"
            },
            {
                "addrId": 20,
                "diaoYuDao": false,
                "foreignOverSea": false,
                "gangAoTai": false,
                "isSupCOD": false,
                "name": "广西",
                "parentId": 4744,
                "sortCode": "A"
            },
            {
                "addrId": 28,
                "diaoYuDao": false,
                "foreignOverSea": false,
                "gangAoTai": false,
                "isSupCOD": false,
                "name": "甘肃",
                "parentId": 4744,
                "sortCode": "G"
            },
            {
                "addrId": 5,
                "diaoYuDao": false,
                "foreignOverSea": false,
                "gangAoTai": false,
                "isSupCOD": false,
                "name": "河北",
                "parentId": 4744,
                "sortCode": "H"
            },
            {
                "addrId": 7,
                "diaoYuDao": false,
                "foreignOverSea": false,
                "gangAoTai": false,
                "isSupCOD": false,
                "name": "河南",
                "parentId": 4744,
                "sortCode": "H"
            },
            {
                "addrId": 17,
                "diaoYuDao": false,
                "foreignOverSea": false,
                "gangAoTai": false,
                "isSupCOD": false,
                "name": "湖北",
                "parentId": 4744,
                "sortCode": "H"
            },
        ],
  
        "resultFlag": true,
        "topAreas": [
            {
                "addrId": 4744,
                "diaoYuDao": false,
                "foreignOverSea": false,
                "gangAoTai": false,
                "isSupCOD": false,
                "levelType": 0,
                "name": "中国大陆"
            },
        ]
    },
    })
  })
}
const cityData = {
  14:{
    "body": {
        "areas": [
            {
                "addrId": 72,
                "diaoYuDao": false,
                "foreignOverSea": false,
                "gangAoTai": false,
                "isSupCOD": false,
                "name": "朝阳区",
                "parentId": 1,
                "sortCode": "C"
            },
            {
                "addrId": 2901,
                "diaoYuDao": false,
                "foreignOverSea": false,
                "gangAoTai": false,
                "isSupCOD": false,
                "name": "昌平区",
                "parentId": 1,
                "sortCode": "C"
            },
            {
                "addrId": 2806,
                "diaoYuDao": false,
                "foreignOverSea": false,
                "gangAoTai": false,
                "isSupCOD": false,
                "name": "石景山区",
                "parentId": 1,
                "sortCode": "D"
            },
        ]
      },   
  }, 
  1:{
    "body": {
        "areas": [
            {
                "addrId": 72,
                "diaoYuDao": false,
                "foreignOverSea": false,
                "gangAoTai": false,
                "isSupCOD": false,
                "name": "朝阳区",
                "parentId": 1,
                "sortCode": "C"
            },
            {
                "addrId": 2901,
                "diaoYuDao": false,
                "foreignOverSea": false,
                "gangAoTai": false,
                "isSupCOD": false,
                "name": "昌平区",
                "parentId": 1,
                "sortCode": "C"
            },
            {
                "addrId": 2806,
                "diaoYuDao": false,
                "foreignOverSea": false,
                "gangAoTai": false,
                "isSupCOD": false,
                "name": "石景山区",
                "parentId": 1,
                "sortCode": "D"
            },
            {
                "addrId": 2810,
                "diaoYuDao": false,
                "foreignOverSea": false,
                "gangAoTai": false,
                "isSupCOD": false,
                "name": "大兴区",
                "parentId": 1,
                "sortCode": "D"
            },
            {
                "addrId": 2802,
                "diaoYuDao": false,
                "foreignOverSea": false,
                "gangAoTai": false,
                "isSupCOD": false,
                "name": "东城区",
                "parentId": 1,
                "sortCode": "D"
            },
          ] 
    },
  },
  4:{
    "body": {
      "areas": [
        {
            "addrId": 48131,
            "diaoYuDao": false,
            "foreignOverSea": false,
            "gangAoTai": false,
            "isSupCOD": false,
            "name": "璧山区",
            "parentId": 4,
            "sortCode": "B"
        },
        {
            "addrId": 48202,
            "diaoYuDao": false,
            "foreignOverSea": false,
            "gangAoTai": false,
            "isSupCOD": false,
            "name": "巴南区",
            "parentId": 4,
            "sortCode": "B"
        },
        {
            "addrId": 48203,
            "diaoYuDao": false,
            "foreignOverSea": false,
            "gangAoTai": false,
            "isSupCOD": false,
            "name": "北碚区",
            "parentId": 4,
            "sortCode": "B"
        },
        {
            "addrId": 48206,
            "diaoYuDao": false,
            "foreignOverSea": false,
            "gangAoTai": false,
            "isSupCOD": false,
            "name": "长寿区",
            "parentId": 4,
            "sortCode": "C"
        },
      ]  
    }
  },
  16:{
    "body": {
      "areas": [
        {
            "addrId": 1303,
            "diaoYuDao": false,
            "foreignOverSea": false,
            "gangAoTai": false,
            "isSupCOD": false,
            "name": "福州市",
            "parentId": 16,
            "sortCode": "F"
        },
        {
            "addrId": 1362,
            "diaoYuDao": false,
            "foreignOverSea": false,
            "gangAoTai": false,
            "isSupCOD": false,
            "name": "龙岩市",
            "parentId": 16,
            "sortCode": "L"
        },
        {
            "addrId": 1370,
            "diaoYuDao": false,
            "foreignOverSea": false,
            "gangAoTai": false,
            "isSupCOD": false,
            "name": "宁德市",
            "parentId": 16,
            "sortCode": "N"
        },
        {
            "addrId": 1352,
            "diaoYuDao": false,
            "foreignOverSea": false,
            "gangAoTai": false,
            "isSupCOD": false,
            "name": "南平市",
            "parentId": 16,
            "sortCode": "N"
        },
      ]  
    }
  }  
}

export const getCity = (id) => {
  return new Promise((resolve) => {
    resolve(cityData[id])
  })
}