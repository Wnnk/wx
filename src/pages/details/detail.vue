<template>
  <view class="detail-main">
    <view class="mod-slider">
      <view class="inner">
        <!-- 轮播图 -->
        <swiper class="swiper" circular :indicator-dots="false" :autoplay="false" 
          :duration="500" :style="{height: '700rpx'}">
          <swiper-item v-for="item of detail.img" :key="item">
            <view class="swiper-item uni-bg-red">
              <image class="inner-img" :src="item" />
            </view>
          </swiper-item>
			  </swiper>
      </view>

      <view class="area-wrap">
        <view class="buy-area">
          <!-- 价格 -->
          <view class="price">
            <view class="price-wrap">
              <span class="price-num">¥{{detail.price}}</span>
            </view>
          </view>
          <!-- 标签与简介 -->
          <view class="tag-intro">
            <span>
              <i class="mod-tag">
                <image :src="detail.tagImg" class="mod-tag-img"/>
              </i>
                {{ detail.desc}}
            </span>
          </view>
          <!-- 排行榜 -->
          <view class="rank-wrap">
            <view class="rank-bg">
              <img src="../../static/detail/rank.png" class="rank-img" />
              <span class="rank-content">折扣排行榜第{{detail.rank}}</span>
            </view>
          </view>
          <!-- 底部 -->
          <view class="fav-floor">
            <view class="share">分享</view>
            <view class="collect">收藏</view>
            <view class="inform">降价通知</view>
          </view>

        </view>
      </view>
    </view>
    <view class="item-floor">
      <!-- 选择规格 -->
      <view class="sku-wrap">
        <view class="choose-info">
          <h3 class="sku-title">已选</h3>
          <span class="choose-name" @click="changeChooseStatus">{{detail.choose[0].name}}</span>
        </view>
        <view class="service"></view>
      </view>
      <!-- 送货地点 -->
      <view class="detail-transfer">
        <view class="transfer-row">
          <span class="transfer-title">送至</span>
          <view class="transfer-content" @click="changeAddressStatus">
            <p class="transfer-address">{{address}}</p>
          </view>
        </view>
        <view class="service"></view>
      </view>
      <!-- 商品重量 -->
      <view class="weight-wrap">
        <view class="weight-row">
          <h3 class="weight-title">重量</h3>
          <span class="weight-num" v-show="detail.choose.length >= 1">{{detail.choose[0].weight}}</span>
        </view>
      </view>
    </view>
    <chooseFeeds :choose="detail.choose" v-show="isShowChoose" :changeChooseStatus="changeChooseStatus"></chooseFeeds>
    <chooseAddress 
      v-show="isShowAddress" 
      :changeAddressStatus="changeAddressStatus" 
      :address="address" 
      :upaddress="upaddress"
    />
  </view>
</template>

<script>
import {getDetail} from '../../api/Data'
import chooseFeeds from './chooseFeeds.vue'
import chooseAddress from './chooseAddress.vue'

export default {
  data() {
    return {
      detail: {},
      isShowChoose: false,
      isShowAddress: false,
      address:'福建福州市长乐区',
    }
  },
  components: {
    chooseFeeds,
    chooseAddress
  },
  onLoad(option) {
    const { id } = option;
    getDetail(id).then(res => {
      this.detail = res;
      console.log(this.detail.choose[0],this.detail.choose[0].name)
    });
  },
  methods: {
    changeChooseStatus(event) {
      event.stopPropagation()
      this.isShowChoose = !this.isShowChoose;
    },
    changeAddressStatus(event) {
      event.stopPropagation()
      this.isShowAddress = !this.isShowAddress;
    },
    upaddress(data) {
      this.address = data;
    }

  },
}
</script>

<style scoped>
.detail-main{
  background-color: #f7f7f7;
}
.mod-slider{
  border-radius: 0 0 12px 12px;

}
.area-wrap{
  padding: 12px 18px;
}
.inner-img {
  width: 100%;
  height: 700rpx;
}
.buy-area{
  background-color: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  overflow: hidden;
}
.price-wrap{
  margin-top: 20rpx;
  line-height: 30rpx;
  padding: 0 18px;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
}
.price-num{
  color: #f2270c;
  display: inline-block;
  line-height: 30px;
  font-weight: 800;
}
.tag-intro{
  font-weight: 700;
  line-height: 21px;
  padding-right: 0;
  position: relative;
  text-overflow: ellipsis;
  overflow: hidden;
  display: flex;
}
.mod-tag{
  display: inline-block;
  margin-top: -2px;
  height: 13px;
  line-height: 13px !important;
  margin-right: 5px !important;
}
.mod-tag-img{
  display: block;
  height: 100%;
  width: 24px;
  height: 13px;
}
/* 排行榜 */
.rank-wrap{
  height: 25px;
  margin-top: 8px;
  width: 100%;
}
.rank-bg{
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 90px;
  background-image: url('	https://m.360buyimg.com/rank/jfs/t1/220210/4/8105/116413/61bc3900E23032be5/9c15402c352382e4.png');
  color: #FA2C19;
  background-size: 100% 100%;
}
.rank-img{
  height: 25px !important;
  width: 64px;
  line-height: 25px !important;
}
.rank-content{
  flex:1;
  font-size: 12px;
  overflow: hidden;
  padding: 0 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fav-floor{
  display: flex;
  padding: 4px 18px 12px;
  align-items: center;
  justify-content: space-around;
  color: #808080;
  font-size: 12px;
}
.item-floor{
  background-color: #fff;
  border-radius: 12px !important;
  margin-top: 12px !important;
  /* overflow: hidden; */
  padding: 0 18px !important;
}
.sku-wrap{
  background-color: #fff;
  color: #8c8c8c;
  font-size: 13px;
  padding: 18px 0;
  position: relative;
}
.choose-info{
  padding: 0 40px 0 38px;
  position: relative;
}
.sku-title{
  color: #262626;
  font-weight: 700;
  left: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 35px;
}
.choose-name{
  color: #333;
  font-size: 13px;
  line-height: 22px;
}
.service{
  font-size: 12px;
  padding: 0 20px 0 38px;
}
.service::after{
  background: url(//img20.360buyimg.com/img/jfs/t1/168610/10/40795/8056/64eedda4F1aed004e/a8502bb8121e0c68.png) no-repeat;
  background-position: -386px -40px;
  display: inline-block;
  height: 40px;
  position: absolute;
  transform: scale(.5) translate(20px, -10px);
  -webkit-transform: scale(.5) translate(20px, -10px);
  width: 40px;
  content: "";
  right: 0;
  top: 12px;
}
.detail-transfer{
  position: relative;
}
.transfer-row{
  font-size: 13px;
  padding: 18px 20px 18px 0;
  position: relative;
  display: flex;
}
.transfer-title{
  color:#262626;
  font-weight: 700;
  width: 38px;
  font-size: 13px;
}
.transfer-content{
  display: block;
  flex: 1;
  width: 100%;
}
.transfer-address{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.weight-wrap{
  background-color: #fff;
  color: #8c8c8c;
  font-size: 13px;
  padding: 18px 0;
  position: relative;
}
.weight-row{
  /* padding: 0 40px 0 38px; */
  position: relative;
  display: flex;
}
.weight-title{
  color:#262626;
  font-weight: 700;
  width: 38px;
  font-size: 13px;
}
.weight-num{
  color: #333;
  font-size: 13px;
  line-height: 22px;
}
</style>