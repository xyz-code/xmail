<template>
  <div class="bottom-bar">
  <tab-bar>
    <tab-bar-item>
      <img slot="item-icon" src="~assets/img/detail/客服.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/detail/客服.svg" alt="">
      <div slot="item-text">客服</div>
    </tab-bar-item>
    <tab-bar-item>
      <img slot="item-icon" src="~assets/img/detail/店铺.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/detail/店铺.svg" alt="">
      <div slot="item-text">店铺</div>
    </tab-bar-item>
    <tab-bar-item>
      <img slot="item-icon" src="~assets/img/detail/收藏.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/detail/收藏.svg" alt="">
      <div slot="item-text">收藏</div>
    </tab-bar-item>
    <tab-bar-item @click.native="addToCart">
      <img slot="item-icon" src="~assets/img/detail/加入购物车.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/detail/加入购物车.svg" alt="">
      <div slot="item-text">加入购物车</div>
    </tab-bar-item>
    <tab-bar-item  >
      <img slot="item-icon" src="~assets/img/detail/购买.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/detail/购买.svg" alt="">
      <div slot="item-text">购买</div>
    </tab-bar-item>
  </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from './TabBarItem'

export default {
  name:'DetailBottomBar',
  components: {
    TabBar,
    TabBarItem
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    addToCart(){
      this.$emit('addCart')
    }
  },
  beforeCreate() {},
  created() {},
  mounted() {}
};
</script>

<style scoped>
  .bottom-bar{
    height: 49px;
    /* position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px; */
    position: relative;
    /* bottom: 49px; */
    text-align: center;
    padding: 10px;
    font-size: 24px;
  }
</style>