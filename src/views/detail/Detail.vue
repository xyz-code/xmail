<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" >
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop" ref="nav1"/>
      <detail-goods-info :detail-info="detailInfo" ref="nav2" @imageLoad="imageLoad"/>
      <detail-param-info :param-info="paramInfo" ref="nav3"/>

    </scroll>0
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
    <detail-bottom-bar @addCart="addToCart" class="detail-bottom-bar"></detail-bottom-bar>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailBottomBar from './childComps/DetailBottomBar'

  import Scroll from 'components/common/scroll/Scroll'

  import {getDetail, Goods, Shop, GoodsParam} from "network/detail";

  import {debounce} from 'common/utils.js'
  import {backTopMixin} from 'common/mixin.js'

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailBottomBar,
      Scroll
    },
    //混入策略，即子组件中的对象方法等都可以在父组件中使用
    mixins:[backTopMixin],
    data() {
      return {
        iid: null,
        goodsInfo:{},
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        themeTopY:[],
        getThemeTopY:null,
        currentIndex:0
      }
    },
    created() {
      // 1.保存传入的iid
      this.iid = this.$route.params.iid

      // 2.根据iid请求详情数据
      getDetail(this.iid).then(res => {
        // 1.获取顶部的图片轮播数据
        //console.log(res);
        const data = res.result;
        this.topImages = data.itemInfo.topImages

        // 2.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 3.创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)

        // 4.保存商品的详情数据
        this.detailInfo = data.detailInfo;

        // 5.获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        //debounce() 防止抖动，避免多次加载
        this.getThemeTopY = debounce(()=>{
          //offsetTop值不对的原因：一般都是由于图片问题
          this.themeTopY = []
          this.themeTopY[0] = 0
          this.themeTopY[1] = this.$refs.nav1.$el.offsetTop
          this.themeTopY[2] = this.$refs.nav2.$el.offsetTop
          this.themeTopY[3] = this.$refs.nav3.$el.offsetTop
          this.themeTopY.push(Number.MAX_VALUE)
          console.log(this.themeTopY)
        },100)

      })
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh()
        this.getThemeTopY()
      },
      titleClick(index){
        console.log(index)
        this.$refs.scroll.scrollTo(0,- this.themeTopY[index],100)
      },
      contentScroll(position){
        const positoinY = - position.y
        let length = this.themeTopY.length
        // for(let i = 0; i < this.themeTopY.length; i++){
        //   if( this.currentIndex !== i && (( i < length-1 && positoinY > this.themeTopY[i] && positoinY <
        //     this.themeTopY[i+1]) || (i === length -1 && positoinY >this.themeTopY[i]))){
        //       this.currentIndex = i;
        //       this.$refs.nav.currentIndex = this.currentIndex
        //       //console.log(this.currentIndex)
        //     }
        // }
        this.listenShowBackTop(position)
        for(let i= 0;i < this.themeTopY.length -1 ; i++){
          if(this.currentIndex !== i && (positoinY > this.themeTopY[i] && positoinY < this.themeTopY[i+1])){
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
      },
      addToCart(){
        //获取购物车所需信息
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.newPrice
        product.iid = this.iid
        //添加到购物车
        // this.$store.commit('addCart',product)
        this.$store.dispatch('addCart',product)
      }
    },
    updated(){

    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px);
  }

  .detail-bottom-bar{
    width: 100%;
  }
</style>
