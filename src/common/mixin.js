import BackTop from 'components/content/backTop/BackTop'


export const backTopMixin = {
  components:{
    BackTop
  },
  data(){
    return {
      isShowBackTop:false
    }
  },
  methods:{
    backTop(){
      this.$refs.scroll.scrollTo(0,0,300)
    },
    listenShowBackTop(position){
      //1000位置处显示回到顶部
      this.isShowBackTop = -position.y > 1000
    }
  }
}