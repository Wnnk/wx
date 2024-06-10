<template>
  <view class="choose-feeds" @click="changeChooseStatus()">
    <view class="main">
     
      <view class="header">
        <view>
          <image src="../../static/detail/detail1.png"  class="header-img"/>
          <p class="price">
            <span>到手价</span><span>¥</span><em>{{ total }}</em>
          </p>
          <p class="selected">
            <span class="selected-span">已选</span>
            {{choose[0].name}}
          </p>
        </view>
        <i class="close"></i>
      </view>
 
      <view class="body">
        <view class="popupArea">
          <view class="kind">规格</view>
          <view class="choose" v-for="(item, index) in choose" :key="item.id" >
            <span  @click="changgeChoose(index)" :class="{'item-active': index === activeIndex}" class="choose-item">{{item.name}}</span>
          </view>
        </view>

        <view class="count_choose" id="popupCount">
          <view class="num_wrap_v2 ">
          <span class="minus num-wrap-span" ptag="7001.1.237" id="minus1" @click="minusNum()"><i class="row" ></i></span>
          <view class="text_wrap"><input class="text" type="tel"v-model="buyNum" id="buyNum1" ></view>
          <span class="plus num-wrap-span" ptag="7001.1.237" id="plus1" @click="plusNum()"><i class="row"></i><i class="col"></i></span>
          </view>
          <p class="count">数量<em class="store" style="">（最多可购买80件）</em></p>
        </view>
      </view>

      <view class="btnArea">
        <view class="btn-red btn">
          <span class="txt">加入购物车</span>
        </view>
        <view class="btn-yellow btn">
          <span class="txt">立即购买</span>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'chooseFeeds',
  props:['choose', 'changeChooseStatus'],
  data() {
    return {
      activeIndex: 0,
      buyNum: 1,
    }
  },
  methods: {
   changgeChoose(index) {
      this.activeIndex = index;
    },
    plusNum() {
      if (this.buyNum < 80)  {
        this.buyNum++;
      }
      return
    },
    minusNum() {
      if (this.buyNum > 1) {
        this.buyNum--;
      }
      return
    },
  },
  computed:{
    total(){
      return this.choose[this.activeIndex].price * this.buyNum
    }, 
  },
}
</script>


<style scoped>
.choose-feeds {
  background-color: rgba(0,0,0,0.7);
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  position: fixed;
  z-index: 110;
}
/* .main{
  position: absolute;
  transform: translateZ(0);
  background-color: #fff; 
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  max-height: 555px;
  min-height: 400px;
  overflow: hidden;
  position: absolute;
  transform: translate3d(0, 295px, 0);
  transition: transform .2s cubic-bezier(0,0,.25,1);
  width: 100%;
} */
 .main{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: height .2s cubic-bezier(0,0,.25,1);
  max-height: 555px;
  min-height: 400px;
  overflow: hidden;
  background-color: #fff;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  overflow: scroll;

 }
.header{
  display: flex;
  align-items: center;
  height: 118px;
  margin-bottom: 18px;
  padding: 0 0 0 130px;
  text-align: left;
  font-size: 16px;
  color: #333;
}
.header-img{
  border-radius: 6px;
  height: 100px;
  left: 18px;
  position: absolute;
  top: 18px;
  width: 100px;
}
.price{
  color: #f2270c;
  display: inline-block;
  font-size: 12px;
  height: 40px;
  line-height: 40px;
  display: flex;
  font-size: 24px;
}
.price span {
  margin-right: 2px;
  color: #F2270C;
  font-size: 12px;
}
.price em{
  font-size: 24px;
}
.selected{
  word-break: break-word;
}
.selected-span {
  color: gray;
  margin-right: 10px;
}

.close{
  height: 44px;
  position: absolute;
  right: 0;
  top: 0;
  width: 32px;
}
.close::after{
  background: url(https://img20.360buyimg.com/img/jfs/t1/168610/10/40795/8056/64eedda4F1aed004e/a8502bb8121e0c68.png) no-repeat;
  background-position: -236px -40px;
  height: 40px;
  transform: scale(.5);
  -webkit-transform: scale(.5);
  width: 40px;
  content: "";
  background-color: red;
}
.body{
  -webkit-text-size-adjust: 100% !important;
  background: #fff;
  color: #666;
  font-family: -apple-system, Helvetica, sans-serif;
  line-height: 1.5;
  overflow: scroll;
  padding-bottom: 40rpx;
}
.kind{
  color: #262626;
  font-size: 13px;
  font-weight: 700;
  height: 40px;
  line-height: 40px;
  margin: 0 18px;
}
.choose{
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0 6px;
}
.choose-item{
  background: #f2f2f2;
  border-radius: 15px;
  color: #262626;
  float: left;
  font-size: 11px;
  height: 30px;
  line-height: 30px;
  margin-bottom: 10px;
  margin-left: 12px;
  max-width: 270px;
  min-width: 20px;
  overflow: hidden;
  padding: 0 18px;
  text-align: center;
}
.item-active{
  background: #fcedeb;
  border: 1px solid #f2270c;
  color: #f2270c;
  font-size: 11px;
  font-weight: 700;
  height: 28px;
}

.btnArea{
  display: flex;
  position: sticky;
  z-index: 1;
  bottom: 0;
  width: 100%;
}
.btn{
  align-items: center;
  border-radius: 21px;
  box-shadow: 0 3px 6px 0 rgba(255, 65, 66, .2);
  color: #fff;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: 13px;
  font-weight: 700;
  height: 38px;
  justify-content: center;
  line-height: 1;
  margin-right: 12px;
  text-align: center;
}
.btn-red{
  background: linear-gradient(135deg, rgb(242, 20, 12), rgb(242, 39, 12) 70%, rgb(242, 77, 12));
}
.btn-yellow{
  background: linear-gradient(135deg, rgb(255, 186, 13), rgb(255, 195, 13) 69%, rgb(255, 207, 13));
}

.count_choose{
  font-size: 13px;
  padding: 16px 18px;
}

.count{
  display: inline-block;
}
.num_wrap_v2 {
  display: flex;
  float: right;
  position: relative;
  vertical-align: middle;
  width: 66px;
  z-index: 0;
}
.num-wrap-span{
  background: red;
  height: 18px;
  line-height: 18px;
  max-width: 15px;
  min-width: 15px;
  position: relative;
  text-align: center;
}
.minus{
  border-radius: 2px;
  display: block;
  flex: 1;
  width: 100%;
}


.row{
  height: 2px;
  width: 9px;
  background-color: #262626;
  border-radius: 20px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
.text_wrap{
  border-radius: 2px;
  margin: 0 1px;
  position: relative;
  width: 45px;
  z-index: 0;
}
.text{
  background: #f2f2f2;
  border: none;
  color: #333;
  font-size: 13px;
  height: 18px;
  text-align: center;
  width: 100%;
}
.plus{
  display: block;
  flex: 1;
  width: 100%;
  border-radius: 2px;
}

.col{
  height: 10px;
  width: 2px;
  background-color: #262626;
  border-radius: 20px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>