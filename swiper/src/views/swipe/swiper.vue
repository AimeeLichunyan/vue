<!-- 示例页面 -->

<template>

  <div class="swiper-wrap">
    <!-- <div class="small-img" ref="imgWrap" @click="onClick" @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd' :style='slideEffect'>
      <img :src="imgArr[index]" alt="">
    </div> -->
    <div class="allImg-wrap" :style='slideEffect'>
      <div v-for="(value,index) in imgArr" :key="index" class="img-wrap" ref="imgWrap" @click="onClick" @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd(value)' :value='index'>
        <img :src="value" alt="3" data-index="3">
      </div>
      <!-- <div class="img-wrap" ref="imgWrap" @click="onClick" @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd' value="2">
        <img src="http://img.zcool.cn/community/01d881579dc3620000018c1b430c4b.JPG@3000w_1l_2o_100sh.jpg" alt="2" data-index="2">
      </div>
      <div class="img-wrap" ref="imgWrap" @click="onClick" @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd' value="3">
        <img src="http://img.zcool.cn/community/01690955496f930000019ae92f3a4e.jpg@2o.jpg" alt="3" data-index="3">
      </div> -->

    </div>
  </div>
</template>

<script>
  /* 页面所需组件 */
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
      onClick (event) {
        // console.log(this.$refs)
        console.log(event.target.getAttribute('class'));
      },
      touchStart (ev) {
        ev = ev || event;
        ev.preventDefault();
        // this.imgIndex = parseInt(ev.target.alt);
        // console.log(ev.target.alt);
        if (ev.touches.length == 1) { // tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
          this.startX = ev.touches[0].clientX; // 记录开始位置
        }
      },
      touchMove (event) {
        // console.log(event);
        // 滑动时距离浏览器左侧的距离
        this.moveX = event.touches[0].clientX * this.imgIndex;
        // console.log(this.moveX)
        // console.log(this.startX);
        // let btnWidth = this.$refs.imgWrap.offsetWidth;
        // console.log(btnWidth);
        // console.log(this.moveX);
        // 实时的滑动的距离-起始位置=实时移动的位置
        this.disX = (this.moveX - this.startX)
        // console.log(this.disX)
        if (this.disX <= 0) {
          // this.index = this.index + 1;
          // this.slideEffect = 'transform:translateX(' + this.disX + 'px)';
        } else if (this.disX > 0) {
          // this.slideEffect = 'transform:translateX(' + this.disX + 'px)';
        }
      },
      touchEnd (ev, index) {
        ev = ev || event;
        ev.preventDefault();
        let btnWidth = this.$refs.imgWrap.offsetWidth;
        // console.log(btnWidth);
        if (ev.changedTouches.length == 1) {
          let endX = ev.changedTouches[0].clientX;
          console.log(endX);
          this.disX = (endX - this.startX)
          console.log(this.disX)
          if (Math.abs(this.disX) < (btnWidth / 2)) {
            this.slideEffect = 'transform:translateX(0px)';
          } else {
            if (this.imgIndex < 3) {
              this.slideEffect = 'transform:translateX(' + (-btnWidth * this.imgIndex) + 'px)'
            }
            // console.log(this.imgIndex)
            console.log(index)
            console.log(11111111111);
            // if (Math.abs(this.disX) > btnWidth + (btnWidth / 2)) {
            //   this.slideEffect = 'transform:translateX(' + (-btnWidth * 2) + 'px)'; // 这里为什么不能用this.dist 因为是想让它超一定长度是变成下一个，而不是移动一定的长度
            // // 让字段显示出来，或者写你需要的逻辑
            // // this.isShow = true
            // } else {
            //   this.slideEffect = 'transform:translateX(' + (-btnWidth) + 'px)';
            // }
          }
        }
      }
    },
    components: {
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
