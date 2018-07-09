<!-- 示例页面 -->

<template>

  <div class="swiper-wrap">
    <div class="swipe-container" ref="swipe-container" @touchstart='doTouchStart'>
        <div class="swipe-wrap" ref="swipe-wrap" :style="{width:warpWidth,'transform':transLate}">
            <slot></slot>
            <!--warpWidth transLate -->
        </div>
    </div>
    <!-- <div class="small-img" ref="imgWrap" @click="onClick" @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd' :style='slideEffect'>
      <img :src="imgArr[index]" alt="">
    </div> -->
    <!-- <div class="allImg-wrap" :style='slideEffect'>
      <div v-for="(value,index) in imgArr" :key="index" class="img-wrap" ref="imgWrap" @click="onClick" @touchstart='touchStart(index)' @touchmove='touchMove(index)' @touchend='touchEnd(index)' :value='index'>
        <img :src="value" alt="">
      </div> -->
      <!-- <div class="img-wrap" ref="imgWrap" @click="onClick" @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd' value="2">
        <img src="http://img.zcool.cn/community/01d881579dc3620000018c1b430c4b.JPG@3000w_1l_2o_100sh.jpg" alt="2" data-index="2">
      </div>
      <div class="img-wrap" ref="imgWrap" @click="onClick" @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd' value="3">
        <img src="http://img.zcool.cn/community/01690955496f930000019ae92f3a4e.jpg@2o.jpg" alt="3" data-index="3">
      </div>
    </div> -->
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
        slideEffect: '',
        imgIndex: 0,
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
      this.dragState = {};
    },
    mounted () {
    },
    methods: {
      onClick (event) {
        // console.log(this.$refs)
        console.log(event.target.getAttribute('class'));
      },
      doTouchStart (ev) {
        ev = ev || event;
        ev.preventDefault();
        // let touch = ev.touches[0];
        // let dragState = this.dragState;
        // dragState.startLeft = touch.pageX;
        // dragState.startTop = touch.pageY;
        // dragState.startTopAbsolut = touch.clientY;
        // console.log(ev.touches);

        // console.log(index);
        if (ev.touches.length == 1) { // tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
          this.startX = ev.touches[0].clientX + Math.abs(this.disX); // 记录开始位置
        // this.imgIndex = index;
        }
      },
      doTouchMove (ev) {
        // console.log(event);
        // 滑动时距离浏览器左侧的距离
        ev = ev || event;
        ev.preventDefault();
        console.log(event.touches[0])
        this.moveX = event.touches[0].clientX;
        // 实时的滑动的距离-起始位置=实时移动的位置
        this.disX = (this.moveX - this.startX);
        // 临界判断
        if (Math.abs(this.disX) >= this.warpWidthNum) {
          this.transLate = `translate(-${this.warpWidthNum}px)`;
        } else if (this.disX >= 0) {
          this.transLate = `translate(0px)`;
        } else {
          this.transLate = `translate(${ this.disX }px)`;
        }
        // if (this.disX <= 0) {
        // this.transLate = `translate(-${ this.disX }px)`; 
        // } else if (this.disX > 0) {
        // this.transLate = `translate(-${this.disX }px)`; 
        // }

      },
      doTouchEnd (ev) {
        ev = ev || event;
        ev.preventDefault();
        let btnWidth = this.$refs;
        let containerWidth = this.containerWidth
        // if (ev.changedTouches.length == 1) {
        // // console.log(ev.changedTouches[0])
        // let endX = ev.changedTouches[0].clientX;
        // console.log(this.startX, endX)
        // this.disX = (endX - this.startX)
        // if (Math.abs(this.disX) < (this.containerWidth / 2)) { // 如果移动的距离不足容器的一半，则不会是下一个图片
        // // this.transLate = `translate(-${this.containerWidth }px)`; 
        // } else {
        // this.startIndex++;
        // if (this.startIndex < this.childrenLength) {
        // this.transLate = `translate(-${this.containerWidth * this.startIndex}px)`; 
        // }
        // if (this.startIndex >= this.childrenLength) {
        // this.startIndex = 0;
        // this.transLate = `translate(-${this.containerWidth * this.startIndex}px)`; 
        // }
        // }
        // }
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
