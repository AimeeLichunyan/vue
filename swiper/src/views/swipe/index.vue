<!-- 示例页面 -->

<template>

  <div class="index">
    <z-swipe :auto="1000">
      <div class="swipe-item">
          <img src="http://img05.tooopen.com/images/20150820/tooopen_sy_139205349641.jpg" alt="">
      </div>
      <div class="swipe-item">
          <img src="http://img.zcool.cn/community/01d881579dc3620000018c1b430c4b.JPG@3000w_1l_2o_100sh.jpg" alt="">" alt="">
      </div>
      <div class="swipe-item">
          <img src="http://img.zcool.cn/community/01690955496f930000019ae92f3a4e.jpg@2o.jpg" alt="">
      </div>
    </z-swipe>

  </div>
</template>

<script>
  /* 页面所需组件 */
  import Swiper from './swiper';
  import z_swiper from './swipe';
  export default {
    data () {
      return {
        index: 0,
        downX: 0,
        moveX: 0,
        disX: 0,
        startX: 0,
        slideEffect: 0,
        imgIndex: 1,
        imgArr: [
          'http://img05.tooopen.com/images/20150820/tooopen_sy_139205349641.jpg',
          'http://img.zcool.cn/community/01d881579dc3620000018c1b430c4b.JPG@3000w_1l_2o_100sh.jpg',
          'http://img.zcool.cn/community/01690955496f930000019ae92f3a4e.jpg@2o.jpg'
        ]
      }
    },
    watch: {
    },
    created: function () {
    },
    mounted () {
    },
    methods: {
    },
    components: {
      Swiper,
      'z-swipe':z_swiper
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
  @import '../../assets/css/base.less';
  .index{
    height: 400px;
  }
  
</style>
