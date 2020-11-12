import Vuex from 'vuex'
import Vue from 'vue'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({

  state:{
    cartList:[]
  },
  mutations:{
    addCounter(state,payload){
      payload.count ++
    },
    addToCart(state,payload){
      state.cartList.push(payload)
    }
  },
  actions:{
    addCart(context,payload){
     //payload新添加的商品
     //数组常用的方法
     let oldProduct = context.state.cartList.find(item => item.iid === payload.iid )
     if(oldProduct){
       context.commit('addCounter',oldProduct)
       
     }else{
       payload.count = 1
       context.commit('addToCart',payload)
     }
    }
  },
  getters
})

export default store