<template>
  <h1>分类</h1>
  <div class="content">
    <div >
      <h2>hhh1</h2>
      <h2>hhh2</h2>
      <h2>hhh3</h2>
      <h2>hhh4</h2>
      <h2>hhh5</h2>
      <h2>hhh6</h2>
      <h2>hhh7</h2>
      <h2>hhh8</h2>
      <h2>hhh9</h2>
      <h2>hhh10</h2>
      <h2>hhh11</h2>
      <h2>hhh12</h2>
      <h2>hhh13</h2>
      <h2>hhh14</h2>
      <h2>hhh15</h2>
      <h2>hhh16</h2>
      <h2>hhh17</h2>
      <h2>hhh18</h2>
      <h2>hhh19</h2>
      <h2>hhh20</h2>
      <h2>hhh21</h2>
      <h2>hhh22</h2>
      <h2>hhh23</h2>
      <h2>hhh24</h2>
      <h2>hhh25</h2>
      <h2>hhh26</h2>
      <h2>hhh27</h2>
      <h2>hhh28</h2>
      <h2>hhh29</h2>
      <h2>hhh30</h2>
      <h2>hhh31</h2>
      <h2>hhh32</h2>
      <h2>hhh33</h2>
      <h2>hhh34</h2>
      <h2>hhh35</h2>
      <h2>hhh36</h2>
      <h2>hhh37</h2>
      <h2>hhh38</h2>
      <h2>hhh39</h2>
      <h2>hhh40</h2>
      <h2>hhh41</h2>
      <h2>hhh42</h2>
      <h2>hhh43</h2>
      <h2>hhh44</h2>
      <h2>hhh45</h2>
      <h2>hhh46</h2>
      <h2>hhh47</h2>
      <h2>hhh48</h2>
      <h2>hhh49</h2>
      <h2>hhh50</h2>
      <h2>hhh51</h2>
      <h2>hhh52</h2>
      <h2>hhh53</h2>
      <h2>hhh54</h2>
      <h2>hhh55</h2>
      <h2>hhh56</h2>
      <h2>hhh57</h2>
      <h2>hhh58</h2>
      <h2>hhh59</h2>
      <h2>hhh60</h2>
      <h2>hhh61</h2>
      <h2>hhh62</h2>
      <h2>hhh63</h2>
      <h2>hhh64</h2>
      <h2>hhh65</h2>
      <h2>hhh66</h2>
      <h2>hhh67</h2>
      <h2>hhh68</h2>
      <h2>hhh69</h2>
      <h2>hhh70</h2>
      <h2>hhh71</h2>
      <h2>hhh72</h2>
      <h2>hhh73</h2>
      <h2>hhh74</h2>
      <h2>hhh75</h2>
      <h2>hhh76</h2>
      <h2>hhh77</h2>
      <h2>hhh78</h2>
      <h2>hhh79</h2>
      <h2>hhh80</h2>
      <h2>hhh81</h2>
      <h2>hhh82</h2>
      <h2>hhh83</h2>
      <h2>hhh84</h2>
      <h2>hhh85</h2>
      <h2>hhh86</h2>
      <h2>hhh87</h2>
      <h2>hhh88</h2>
      <h2>hhh89</h2>
      <h2>hhh90</h2>
      <h2>hhh91</h2>
      <h2>hhh92</h2>
      <h2>hhh93</h2>
      <h2>hhh94</h2>
      <h2>hhh95</h2>
      <h2>hhh96</h2>
      <h2>hhh97</h2>
      <h2>hhh98</h2>
      <h2>hhh99</h2>
      <h2>hhh100</h2>
    </div>
  </div>
</template>

<script>
console.log(Bscroll)
import Bscroll from 'better-scroll'

export default {
  data(){
    return{ 
      scroll:null
    }
  },
  created(){
  },
  mounted(){
    //移动端得用鼠标点
    //默认Bscroll不能监听实时位置
    this.scroll = new Bscroll(document.querySelector('.content'),{
      //侦测 0，1不侦测，2侦测手指滚动过程中，3只要滚动就侦测
      probeType: 2,
      click:true,
      pullUpLoad:true
    })
    // this.scroll.on('scroll',(position)=>{
    //   console.log(position)
    // })
    this.scroll.on('pullingUp',()=>{
      console.log('上拉加载更多')
    })
  }
};

</script>


<style scoped>
  .content{
    height: 250px;
    background-color: red;
    overflow: hidden;
  }
</style>