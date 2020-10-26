<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link"></a>
      <img :src="item.image" alt="" >
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'RecommendView',
  components: {},
  props: {
    recommends :{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  beforeCreate() {},
  created() {},
  mounted() {}
};
</script>

<style scoped>
.recommend{
  display: flex;
  font-size: 14px;
  text-align: center;
  padding: 15px 0px 30px;
  border-bottom: 10px solid #eee;
}
.recommend-item{
  margin-top: 10px;
  flex: 1;
}
.recommend-item img{
  margin-bottom: 10px;
  width: 70px;
  height: 70px;
}

</style>