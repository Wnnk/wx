<template>
  <view class="content">
    <!-- 头部 -->
    <view class="sreach-bar">
      <span>分类</span>
			<input class="uni-input" confirm-type="search" placeholder="搜索" />
      <span>登录</span>
    </view>
    <!-- 分类部 -->
    <view class="category">
      <view class="container-box" @touchstart="touchStart" @touchend="touchEnd">
        <view class="nav-box" v-for="item in category1" :key="item.id" v-show="categoryIndex === 1" >
          <image :src="item.image" class="category-img"/>
          <span>{{item.name}}</span>
        </view>
        <view class="nav-box" v-for="item in category2" :key="item.id" v-show="categoryIndex === 2" >
          <image :src="item.image" class="category-img"/>
          <span>{{item.name}}</span>
        </view>
      </view>
    </view>
    <!-- 商品列表 -->
    <view class="product-list">
      <view class="left-waterfall">
        <view class="feeds-col" v-for="item in leftFeeds" :key="item.id" >
          <view  class="feeds-item" @click="toDetail(item.id)">
            <view class="feeds-img">
              <image class="img-box" :src="item.image" />
              <view class="feeds-bottom"></view>
              <view class="feeds-top"></view>
            </view>
            <view class="feeds-info">
              <view class="feeds-name">{{item.name}}</view>
              <view class="feed-row-title-bottom">
                <view class="feed-tags">
                  <image class="feed-tag-img" :src="item.tagImage"/>
                  <view class="feed-tag-name">{{item.tagText}}</view>
                </view>
              </view>
              <view class="feeds-row">
                <view class="feeds-price">￥{{item.price}}</view>
              </view>
              <view class="feeds-row-bottm"></view>
            </view>
          </view>
         
        </view>
      </view>
      <view class="right-waterfall">
        <view class="feeds-col" v-for="item in rightFeeds" :key="item.id">
          <view class="feeds-item" @click="toDetail(item.id)">
            <view class="feeds-img">
              <image class="img-box" :src="item.image" />
              <view class="feeds-bottom"></view>
              <view class="feeds-top"></view>
            </view>
            <view class="feeds-info">
              <view class="feeds-name">{{item.name}}</view>
              <view class="feed-row-title-bottom">
                <view class="feed-tags">
                  <image class="feed-tag-img" :src="item.tagImage"/>
                  <view class="feed-tag-name">{{item.tagText}}</view>
                </view>
              </view>
              <view class="feeds-row">
                <view class="feeds-price">￥{{item.price}}</view>
              </view>
              <view class="feeds-row-bottm"></view>
            </view>
          </view>
         
        </view>
      </view>
    </view>
  </view>
</template>

<script>

export default {
  data() {
    return {
      category1:[
        {
          image: '../../static/index/category.png',
          name: '超市',
          id: 1,
        },
        {
          image: '../../static/index/category.png',
          name: '电器',
          id: 2,
        },
        {
          image: '../../static/index/category.png',
          name: '美妆',
          id: 3,
        },
        {
          image: '../../static/index/category.png',
          name: '服饰',
          id: 4,
        },
        {
          image: '../../static/index/category.png',
          name: '会员',
          id: 5,
        },
      ],
      category2:[
        {
          image: '../../static/index/category.png',
          name: '生鲜',
          id: 7,
        },
        {
          image: '../../static/index/category.png',
          name: '国际',
          id: 8,
        },
        {
          image: '../../static/index/category.png',
          name: '拍卖',
          id: 9,
        }
      ],
      categoryIndex:1,
      startX:0,
      leftFeeds:[
        {
          id: 1,
          name: '三全灌汤水饺 状元素水饺方便家庭早餐晚餐速冻食品[199-110专区] 白菜猪肉水饺450g约28个',
          price: '100',
          image: '../../static/index/feeds.png',
          tag: '标签1',
          tagImage: '../../static/index/tag.png',
          tagText: '30天最低价',
        },
        {
          id: 2,
          name: '三全灌汤水饺 状元素水饺方便家庭早餐晚餐速冻食品[199-110专区] 白菜猪肉水饺450g约28个',
          price: '100',
          image: '../../static/index/feeds.png',
          tag: '标签1',
          tagImage: '../../static/index/tag.png',
          tagText: '30天最低价',
        },
        {
          id: 3,
          name: '三全灌汤水饺 状元素水饺方便家庭早餐晚餐速冻食品[199-110专区] 白菜猪肉水饺450g约28个',
          price: '100',
          image: '../../static/index/feeds.png',
          tag: '标签1',
          tagImage: '../../static/index/tag.png',
          tagText: '30天最低价',
        },
        {
          id: 4,
          name: '三全灌汤水饺 状元素水饺方便家庭早餐晚餐速冻食品[199-110专区] 白菜猪肉水饺450g约28个',
          price: '100',
          image: '../../static/index/feeds.png',
          tag: '标签1',
          tagImage: '../../static/index/tag.png',
          tagText: '30天最低价',
        },
        {
          id: 5,
          name: '三全灌汤水饺 状元素水饺方便家庭早餐晚餐速冻食品[199-110专区] 白菜猪肉水饺450g约28个',
          price: '100',
          image: '../../static/index/feeds.png',
          tag: '标签1',
          tagImage: '../../static/index/tag.png',
          tagText: '30天最低价',
        },
        
      ],
      rightFeeds:[
        {
          id: 6,
          name: '三全灌汤水饺 状元素水饺方便家庭早餐晚餐速冻食品[199-110专区] 白菜猪肉水饺450g约28个',
          price: '100',
          image: '../../static/index/feeds.png',
          tag: '标签1',
          tagImage: '../../static/index/tag.png',
          tagText: '30天最低价',
        },
        {
          id: 7,
          name: '三全灌汤水饺 状元素水饺方便家庭早餐晚餐速冻食品[199-110专区] 白菜猪肉水饺450g约28个',
          price: '100',
          image: '../../static/index/feeds.png',
          tag: '标签1',
          tagImage: '../../static/index/tag.png',
          tagText: '30天最低价',
        },
        {
          id: 8,
          name: '三全灌汤水饺 状元素水饺方便家庭早餐晚餐速冻食品[199-110专区] 白菜猪肉水饺450g约28个',
          price: '100',
          image: '../../static/index/feeds.png',
          tag: '标签1',
          tagImage: '../../static/index/tag.png',
          tagText: '30天最低价',
        },
        {
          id: 9,
          name: '三全灌汤水饺 状元素水饺方便家庭早餐晚餐速冻食品[199-110专区] 白菜猪肉水饺450g约28个',
          price: '100',
          image: '../../static/index/feeds.png',
          tag: '标签1',
          tagImage: '../../static/index/tag.png',
          tagText: '30天最低价',
        },
      ],
    }
  },
  onLoad() {
  },
  methods: {
    touchStart(e){
      this.touchStartX = e.touches[0].clientX;  
    },
    touchEnd(e){
      let deltaX = e.changedTouches[0].clientX - this.touchStartX;
      if(deltaX > 20){
        this.categoryIndex = 1;
        console.log('left', this.categoryIndex);
      } else if (deltaX < -20 ) {
       this.categoryIndex = 2;
       console.log('right', this.categoryIndex);
      }
    },
    toDetail(id) {
      uni.navigateTo({
        url:`/pages/details/detail?id=${id}`
      })
    }
  },
}
</script>

<style>
.content {
  display: grid;
  grid-template-rows: 44rpx 96rpx 1fr;
}

.sreach-bar{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20rpx;
}
.uni-input{
  border: 1rpx solid green;
  border-radius: 10rpx;
  width: 70%;
}


.category{
  padding-bottom: 15rpx;
}

.container-box{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  margin: 0 10rpx 0 10rpx;
  border: 1rpx solid red;
  border-radius: 10rpx;
  /* flex-direction: column; */
}
.nav-box{
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.category-img{
  width: 36rpx;
  height: 36rpx;
}

.product-list{
  background-color: gold;
  display: flex;
  flex-wrap: wrap;
  padding: 5rpx;
}
.left-waterfall{
  width: 50%;
}
.feeds-col{
  padding: 2.5rpx;
  box-sizing: border-box;
}
.feeds-item{
  display: block;
  width: 100%;
  background-color: #fff;
  border-radius: 8rpx;
  overflow: hidden;
  position: relative;
}
.feeds-img{
  background: #fff url(https://img10.360buyimg.com/wq/jfs/t24601/190/890984006/4559/731564fc/5b7f9b7bN3ccd29ab.png);
  background-position: 50%;
  background-size: 9rpx;
}
.img-box{
  position: relative;
  width: 100%;
  /* padding-top: 100%; */
}
.feeds-bottom{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.feeds-top{
  position: absolute;
  top:0;
  right: 0;
  z-index: 10;
}
.feeds-info{
  padding: 0 2rpx 2rpx;
}
.feeds-name{
  text-align: left;
  /* line-height: 2rpx; */
  /* height: 42rpx; */
  /* font-size: 0.7rem; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
.feed-row-title-bottom{
  height: 1.25rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
}
.feed-row-title-bottom::before{
  content: '\00A0';
  width: 1px;
  height: 100%;
  margin-left: -1px;
  -webkit-align-self: baseline;
  -ms-flex-item-align: baseline;
  align-self: baseline;
  font-family: 'JDZH-Regular', sans-serif;
}
.feed-tags{
  display: flex;
  align-items: center;
  padding: 0 1rpx;
  border-radius: 1rpx;
  background-color: rgba(255,32,120,0.07);
}
.feed-tag-img{
  width: 20rpx;
  height: 20rpx;
}
.feed-tag-name{
  margin-left: 1rpx;
  color: #ff2078;
  box-sizing: border-box;
}
.feeds-row{
  display: flex;
  height: 32rpx;
  flex-wrap: wrap;
  overflow: hidden;
  align-items: center;
}
.feeds-price{
  font-style: normal;
  font-family:'Courier New', Courier, monospace;
  display: inline-block;
  color: #ff4142;
}
.feeds-row-bottm{
  width: calc(100% - 55rpx);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
}
.feeds-row-bottm::before{
  content: '\00A0';
  width: 1px;
  height: 100%;
  margin-left: -1px;
  align-self: baseline;
  font-family: 'JDZH-Regular', sans-serif;
}
/* 右瀑布 */
.right-waterfall{
  width: 50%;
}
</style>
