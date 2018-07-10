<template>
    <div class="swipe-container" ref="swipe-container" @touchstart='doTouchStart' @touchmove='doTouchMove' @touchend='doTouchEnd'>
        <div class="swipe-wrap" ref="swipe-wrap" :style="{width:warpWidth,'transform':transLate}">
            <slot></slot>
            <!--warpWidth transLate -->
        </div>
    </div>
</template>
<script>
  export default {
    name: 'z_swipe',
    props: {
      auto: Number
    },
    data () {
      return {
        styles: {}, // wrap移动
        containerWidth: 0, // 容器宽度
        warpWidth: 0, // 轮播wrap宽度
        startIndex: 0, // 开始轮播的index
        transLate: 'translate(0px)', // Wrap移动距离
        childrenLength: 0, // 容器中item的个数
        speed: 'all 0.8', // 过度时间
        startX: 0, // 鼠标初始位置
        distanceX: 0 // 鼠标移动的位置

      }
    },
    created () {
      this.dragState = {} // 轮播相关信息的对象
    },
    mounted () {
      var that = this;
      that.containerWidth = that.$refs['swipe-container'].clientWidth;
      that.childrenLength = this.$refs['swipe-wrap'].children.length;
      this.warpWidth = this.containerWidth * that.childrenLength + 'px';

      for (var i of this.$refs['swipe-wrap'].children) {
        i.style.width = this.containerWidth + 'px';
      }
      if (this.$props.auto) {
        that.doAnimate(this.$props.auto);
      }
      // that.doAnimate(this.$props.auto);
    },
    methods: {
      // 自动轮播
      doAnimate (time) {
        var that = this;
        setInterval(() => {
          if (that.startIndex == that.childrenLength - 1) {
            that.startIndex = 0;
          } else {
            that.startIndex++;
          }
          this.transLate = `translate(-${that.containerWidth * that.startIndex}px)`;
        }, time)
      },
      doTouchStart (ev) {
        ev = ev || event;
        ev.preventDefault();
        // let touch = ev.touches[0];
        // let dragState = this.dragState;
        //  dragState.startLeft = touch.pageX;
        //  dragState.startTop = touch.pageY;
        //  dragState.startTopAbsolut = touch.clientY;

        // console.log(index);
        if (ev.touches.length == 1) { // tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
          this.startX = ev.touches[0].clientX; // 记录开始位置
          // this.imgIndex = index;
        }
      },
      doTouchMove (ev) {
        // 滑动时距离浏览器左侧的距离
        ev = ev || event;
        ev.preventDefault();
        this.moveX = event.touches[0].clientX;
        // 实时的滑动的距离-起始位置=实时移动的位置
        let disX = (this.moveX - this.startX)
        console.log(disX)
        let startIndex = this.startIndex;
        let containerWidth = this.containerWidth;
        if (disX < 0) {
          this.transLate = `translate(${disX - startIndex * containerWidth}px)`;
        } else {
          // console.log(disX)
          // console.log(startIndex)
          console.log(startIndex)
          if (startIndex == 0) {
            this.transLate = `translate(${Math.abs(startIndex * containerWidth - disX)}px)`;
          } else {
            this.transLate = `translate(-${Math.abs(startIndex * containerWidth - disX)}px)`;
          }
        }
      },
      doTouchEnd (ev) {
        ev = ev || event;
        ev.preventDefault();
        if (ev.changedTouches.length == 1) {
          let touch = ev.changedTouches[0];
          let endX = touch.clientX;
          let disX = endX - this.startX;
          let length = this.childrenLength;
          let containerWidth = this.containerWidth;
          // console.log(this.startIndex)
          if (disX < 0) { // 滑动出现下一张
            if (this.startIndex >= length - 1) {
              this.startIndex = length - 2;
            }
            this.startIndex++;
            if (Math.abs(disX) < (containerWidth / 2)) {
              // 如果移动的距离不足容器的一半，则不会是下一个图片
              this.transLate = `translateX(-${containerWidth * this.startIndex}px)`;
            } else {
              this.transLate = `translateX(-${containerWidth * this.startIndex}px)`;
            }
            // console.log(this.startIndex);
          } else if (disX > 0) { // 滑动出现上一张
            // console.log(this.startIndex)
            if (this.startIndex <= 0) {
              this.startIndex = 1;
            }
            // console.log(this.startIndex)
            this.startIndex = this.startIndex - 1;
            if (Math.abs(disX) < (containerWidth / 2)) { // 如果移动的距离不足容器的一半，则不会是下一个图片
              // let index = this.startIndex;
              this.transLate = `translateX(-${containerWidth * this.startIndex}px)`;
            } else {
              console.log(this.startIndex)
              this.transLate = `translateX(-${containerWidth * this.startIndex}px)`;
            }
          }
        }
      }

    }
  }
</script>

<style lang="less" scoped>
    .swipe-container{
        height: 100%;
        width: 100%;
        overflow: hidden;
        transition: all 0.8;
        .swipe-wrap{
            height: 100%;
            overflow: hidden;
            clear: both;
            transition: all 0.8s;
            .swipe-item{
                height: 100%;
                float: left;
                img{
                    width: 100%;
                    height: 100%;
                }
             }
        }
    }
</style>
