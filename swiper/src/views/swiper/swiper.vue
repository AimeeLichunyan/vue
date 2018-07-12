<template>
    <div class="wh_content">
        <!-- 存放图片的大容器 -->
        <div class="wh_swiper" :class="className" @touchstart="doOnTouchStart" @touchmove="doOnTouchMove" @touchend="doOnTouchEnd">
            <slot></slot>
        </div>
        <!-- 底部图片数目展示 -->
        <div class="wh_indicator">
            <div v-for="(tag,$index) in slidesLength" class="wh_indicator_item" :class="{ wh_show_bgcolor: index-1==$index }" :key="$index"> <span class="numWrap">{{$index + 1}}/{{slidesLength}}</span></div>
        </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        slidesLength: 1, // 图片的个数
        auto: true, // 是否轮播
        slideing: true,
        timer1: '',
        className: '',
        dom: {},
        index: 1,
        t: {
          sx: 0,
          s: 0, // 开始点击的位置
          m: 0, // 移动的距离
          e: 0
        }
      }
    },
    props: {
      // 是否自动轮播
      autoPlay: {
        default: true
      },
      // 滑动一次需要多长时间
      duration: {
        default: 500
      },
      // 两次滑动间隔的时间
      interval: {
        default: 2500
      },
      showIndicator: {
        default: true
      }
    },
    mounted () {
      this.className = `wh_swiper_${Math.random().toFixed(3) * 1000}`
      setTimeout(() => {
        // 自动轮播
        this.starDom();
        this.dom.tansform = `translate3d(${this._width * -1}px, 0px, 0px)`
        this.dom['-webkit-transform'] = `translate3d(${this._width * -1}px, 0px, 0px)`
        this.dom['-ms-transform'] = `translate3d(${this._width * -1}px, 0px, 0px)`
        if (this.autoPlay) {
          this.setTime()
        }
      }, 50)
    },
    methods: {
      doOnTouchStart (x) {
        if (this.slideing) {
          this.clearTimeOut();
          this.t.sx = this.getTransform();
          this.t.s = x.touches[x.touches.length - 1].clientX
        }
      },
      doOnTouchMove (x) {
        console.log(this.slideing)
        console.log(this.t.s)
        if (this.slideing && this.t.s != -1) {
          this.clearTimeOut();
          this.t.m = x.touches[x.touches.length - 1].clientX - this.t.s;
          this.setTransform(this.t.m + this.t.sx);
          console.log(this.t.sx)
        }
      },
      doOnTouchEnd () {
        if (this.slideing && this.t.s != -1) {
          this.clearTimeOut();
          this.setTransform(this.t.m + this.t.sx);
          let x = this.getTransform();
          x += this.t.m > 0 ? this._width * 0.3 : this.width * -0.3;
          this.index = Math.round(x / this._width) * -1;
          this.wh('touch');
        }
      },
      setTransform (num) {
        console.log(num)
        this.dom.transform = `translate3d(${num}px, 0px, 0px)`;
        this.dom['-webkit-transform'] = `translate3d(${num}px, 0px, 0px)`;
        this.dom['-ms-transform'] = `translate3d(${num}px, 0px, 0px)`;
      },
      getTransform () {
        let x = this.dom.transform || this.dom['-webkit-transform'] || this.dom['-ms-transform'];
        x = x.substring(12);
        x = x.match(/(\S*)px/)[1];
        return Number(x)
      },
      wh (type) {
        this.slideing = false;
        this.dom.transition = type == 'touch' ? '250ms' : this.duration + 'ms';
        this.setTransform(this.index * -1 * this.width);
        this.t.m = 0;
        this.t.s = -1;
        if (this.autoPlay) {
          this.setTime()
        }
        let timeDuration = type == 'touch' ? '250' : this.duration;
        setTimeout(() => {
          this.dom.transition = '0s';
          if (this.index >= this.slidesLength + 1) {
            this.index = 1;
            this.setTransform(this.index * -1 * this._width);
          }
          if (this.index <= 0) {
            this.index = this.slidesLength;
            this.setTransform(this.index * -1 * this._width);
          }
          this.$emit('transtionend', this.index - 1);
          this.auto = true;
          this.slideing = true;
        }, timeDuration)
      },
      setTime () {
        this.timer1 = window.setTimeout(() => {
          if (this.auto) {
            this.index++;
            this.wh();
          } else {
            window.clearTimeout(this.timer1)
          }
        }, this.interval)
      },
      starDom () {
        let SlideDom = document.querySelector('.' + this.className).getElementsByClassName('wh_slide');
        this.slidesLength = SlideDom.length;
        if (this.slidesLength > 1) {
          let cloneDom1 = SlideDom[0].cloneNode(true);
          let cloneDom2 = SlideDom[this.slidesLength - 1].cloneNode(true);
          document.querySelector('.' + this.className).insertBefore(cloneDom2, SlideDom[0]);
          document.querySelector('.' + this.className).appendChild(cloneDom1);
          this._width = document.querySelector('.' + this.className).offsetWidth;
          this.dom = document.querySelector('.' + this.className).style;
        }
      },
      prevSlide () {
        this.clearTimeOut();
        this.index--;
        this.wh();
      },
      nextSlide () {
        this.clearTimeOut()
        this.index++;
        this.wh();
      },
      slideTo (index) {
        this.clearTimeOut()
        this.index = index + 1
        this.wh()
      },
      clearTimeOut () {
        this.auto = false;
        window.clearTimeout(this.timer1)
      }
    }
  }
</script>
<style lang="less">
 .wh_content {
        position: relative;
        z-index: 1;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    .wh_swiper {
        width: 100%;
        height: 100%;
        display: -webkit-box;
        display: -moz-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -moz-transition-duration: 0s linear;
        -webkit-transition-duration: 0s linear;
        -o-transition-duration: 0s linear;
        transition-duration: 0s linear;
    }

    .wh_indicator {
        position: absolute;
        bottom: 8px;
        width: 100%;
        text-align: center;
        background: 0 0;
    }

    .wh_indicator_item {
        display: none;
        text-align: right;
        font-size: 28px;
        color: #fff;
    }
     .numWrap {
         padding-right: 20px;
     }

    .wh_show_bgcolor {
        /* background: #0fc37c; */
        display: block;
    }
</style>
