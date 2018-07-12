<!-- 示例页面 -->

<template>
<div>
     <Swiper ref="swiper" v-if="list.length>0">
            <Slide v-for="(item,index) in list" :key=index>
                <img :src="item.img" />
            </Slide>
        </Swiper>
</div>
</template>

<script>
  /* 页面所需组件 */
  import {Swiper, Slide} from './indexSwipe.js'
  /* 混入 */
  import BaseMixin from '@/mixins/base';

  export default {
    mixins: [BaseMixin],
    data () {
      return {
        index: 0,
        list: [
          { img: 'https://qiniu.epipe.cn/5456575529551388672?imageslim&imageView2/1/w/750/h/360' },
          { img: 'https://qiniu.epipe.cn/5430983074181545984?imageslim&imageView2/1/w/750/h/360' },
          { img: 'https://qiniu.epipe.cn/5464226412548325376?imageslim&imageView2/1/w/750/h/360' }
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
      Slide
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
  @import '../../assets/css/base.less';
</style>
