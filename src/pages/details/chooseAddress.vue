<template>
    <view class="chooseAddress">
        <view class="main">
            <view class="header">
                <span class="back" @click="changeAddressStatus">
                    返回
                </span>
                <span class="title">配送至</span>
            </view>
            <view class="content">
                <view class="tab">
                    <view class="tab-item" v-for="item in chooseAddress" :key="item" @click="downLevel()">{{item}}</view>
                    <span class="tab-span">请选择</span>
                </view>
                <view class="body">
                    <template v-if="level === 1">
                        <view class="item" v-for="item in province" :key="item.addrId" @click="upLevel(item)">
                            {{item.name}}
                        </view>
                    </template>
                    <template v-if="level === 2">
                        <view class="item" v-for="item in city" :key="item.addrId" @click="upLevel(item)">
                            {{item.name}}
                        </view>
                    </template>
                    
                </view>
            </view>
        </view>
    </view>
</template>

<script>

import {getProvince, getCity} from "../../api/Data"

export default{
    data(){
        return{
            chooseAddress:[],
            province:[],
            city:[],
            level:1,
        }
    },
    props:['changeAddressStatus', 'address', 'upaddress'],
    mounted(){
        getProvince().then(res=>{
            console.log(res.body.resultFlag)
            if (res.body.resultFlag) {
                this.province = res.body.areas;
                console.log(this.province)
            }
        })
    },
    methods:{
        async upLevel(province){
           const res = await getCity(province.addrId)
           if (res) {
            this.city = res.body.areas;
           }
           this.chooseAddress.push(province.name);
           this.level = this.chooseAddress.length + 1;
           if (this.level === 3) {
               this.upaddress(this.chooseAddress.join(''));
           }
        },
        downLevel(){
            this.chooseAddress.pop();
            this.level = this.chooseAddress.length + 1;
        }
    }
}
</script>

<style scoped>
.chooseAddress{
    background-color: rgba(0,0,0,0.7);
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    position: fixed;
    z-index: 110;
}
.main{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    transition: height .2s cubic-bezier(0,0,.25,1);
    max-height: 700px;
    min-height: 400px;
    overflow: hidden;
    background-color: #fff;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    overflow: scroll;
    z-index:111;
}
.header{
    background: #fff;
    line-height: 1.5;
    padding: 2rem;
    position: relative;
}
.back{
    background-position: 0;
    background-repeat: no-repeat;
    background-size: .5rem;
    color: #999;
    font-size: .54545rem;
    height: 1.63636rem;
    left: .45455rem;
    line-height: 1;
    line-height: 1.63636rem;
    padding: 0;
    position: absolute;
    text-align: right;
    top: 0;
    width: 1.63636rem;
}
.title{
    color: #1a1a1a;
    display: block;
    font-size: 18px;
    font-weight: 700;
    line-height: 1rem;
    overflow: hidden;
    padding: 0;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.content{
    background-color: #fff;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    height: 100%;
}
.tab{
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: .68182rem;
    overflow: hidden;
    padding: 0 .45455rem;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.tab-item{
    padding: 0 .68182rem .34091rem 0;
}
.tab-span{
    color: red;
    font-weight: bolder;
}
.item{
    padding: 8px 2px;
    color: #666666;
}
</style>