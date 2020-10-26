<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    
    <!--scroll 在切换页面后无效 -->
    <scroll class="content" ref="scroll" :probe-type="3" @contentScroll="scrollOn" 
    :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper ref="hSwiper" :banners="banners" ></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="titles" class="tab-control" @tabClick="tabClick"></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>

import scroll from 'components/common/scroll/Scroll'
import NavBar from 'components/common/navbar/NavBar'


import TabControl from 'components/content/tabController/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import GoodsListItem from 'components/content/goods/GoodsListItem'
import BackTop from 'components/content/backTop/BackTop'

import {getMultiData,getProductData,getHomeGoods} from 'network/home'
import HomeSwiper from './childrenhome/HomeSwiper'
import RecommendView from './childrenhome/HomeRecommendView'
import FeatureView from './childrenhome/HomeFeatureView'

import Bscroll from 'better-scroll'

export default {
  name:'Home',
  components:{
    scroll,
    NavBar,

    BackTop,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList,
    GoodsListItem
  },
  data(){
    return{
      banners:[],
      recommends:[],
      titles:["流行","新款","精选"],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType:'pop',
      isShowBackTop:false
    }
  },
  created(){
    getMultiData().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  
    //监听事件item 中图片加载完成
    // this.$bus.$on('itemImageLoad',()=>{
    //   console.log('busbus')
    // this.$refs.scroll.refresh()
    // })
  
  },
  methods:{
    /**
     * 事件监听的方法
     */
    loadMore(){
      console.log('home 加载跟多')
      this.getHomeGoods(this.currentType)
    },
    scrollOn(pos){
      //console.log(pos)
      if(pos.y < -1000){
        this.isShowBackTop = true
        return
      }
      this.isShowBackTop = false
    },

    backClick(){
      console.log('backtop click')
      this.$refs.scroll.scrollTo(0,0,500);
    },

    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },

    /**
     * 网络请求相关
     */

    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list) //将res.data.list中数据解析出来，一个个push到list中
        this.goods[type].page += 1
      })
      //this.$refs.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>

  #home{
    height: 100vh;
  }

  .home-nav{
    padding-top: 0px;
    background-color: salmon;
    color: white;
    position: sticky;
    top: 0px;
    z-index: 9;
  }
  .tab-control{
    position: sticky; 
    top: 44px;
    z-index: 9;
  }
  .content{

    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
  }
</style>