<!-- 示例页面 -->

<template>

  <div class="index">
    <!-- <Swiper> -->
      <!-- <div slot="swiper" v-for="(value,index) in imgArr" :key="index">
        {{value}}
        <img:src="{{value}}" alt="">
      </div> -->
      <!-- <div slot="swiper">
        <img src="http://img.zcool.cn/community/01d881579dc3620000018c1b430c4b.JPG@3000w_1l_2o_100sh.jpg" alt="2" data-index="2">
      </div>
      <div slot="swiper">
        <img src="http://img.zcool.cn/community/01d881579dc3620000018c1b430c4b.JPG@3000w_1l_2o_100sh.jpg" alt="2" data-index="2">
      </div> -->
    <!-- </Swiper> -->
    <div>
      <Swipe>
      <div class="swipe-item">
        <img src="http://img07.tooopen.com/images/20170316/tooopen_sy_201956178977.jpg" alt="2" data-index="2">
      </div>
      <div class="swipe-item">
        <img src="http://img.zcool.cn/community/01d881579dc3620000018c1b430c4b.JPG@3000w_1l_2o_100sh.jpg" alt="2" data-index="2">
      </div>
      <div class="swipe-item">
        <img src="http://img.zcool.cn/community/01690955496f930000019ae92f3a4e.jpg@2o.jpg" alt="3" data-index="3">
      </div> 
    </Swipe>
    </div>
    <!-- <slot-popup v-if="show" @close="close">
        <p class="popup">这里是slot内容</p>
      </slot-popup> -->
  </div>
</template>

<script>
  /* 页面所需组件 */
  import Swiper from './swiper';
  import z_swipe from './swipe'
  export default {
    data () {
      return {
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
      'Swipe':z_swipe
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
  @import '../../assets/css/base.less';
  .swiper-wrap {
    width: 750px;
    height: 521px;
    position: relative;
    overflow: hidden;
    .allImg-wrap {
      // display: none;
       width:10240px;
      height: 512px;
      position: absolute;
      top: 0;
      left: 0;
      .img-wrap {
        float: left;
        height: 100%;
        width: 750px;
        img {
          height: 100%;
          width: 100%
        }
      }
    }
    .small-img {
      height: 100%;
        width: 750px;
        img {
          height: 100%;
          width: 100%
        }
    }
  }
</style>
