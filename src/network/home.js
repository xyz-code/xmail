import {request} from './request'

export function getMultiData(){
  return request({
    url:'/home/multidata'
  })
}

export function getProductData(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}

export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}
//函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
//
