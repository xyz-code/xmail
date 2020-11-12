<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list :cartlist="list">{{list}}</cart-list>
  </div>
  
  
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './cartChild/CartList'

  //mapGetters辅助函数
  import { mapGetters } from 'vuex'
  export default {
    name: "Cart",
    components:{
      NavBar,
      CartList
    },
    computed:{
      // cartLength(){
      //   return this.$store.state.cartList.length
      // }
      ...mapGetters({
        length:'cartLength',
        list:'cartList'
      })
    }
  }
</script>

<style scoped>
  .nav-bar{
    background-color:var(--color-tint);
    top: 0px;
  }
</style>
