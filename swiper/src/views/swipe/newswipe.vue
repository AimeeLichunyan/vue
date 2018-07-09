<template>
    <div class="swipe-container" ref="swipe-container" @touchstart='doTouchStart' @touchmove='doTouchMove' @touchend='doTouchEnd'>
        <div class="swipe-wrap" ref="swipe-wrap">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: "z_swipe",
        props:{
           auto: Number 
        },
        data(){
            return{
                styles:{},// wrap移动
                containerWidth:0, // 容器宽度
                warpWidth:0, // 轮播wrap宽度String
                warpWidthNum:0, //像左滑动能滑动的最大距离，临界点
                startIndex:0, //开始轮播的index
                transLate:"translate(0px)", // Wrap移动距离
                childrenLength:0, // 容器中item的个数
                speed:'all 0.8', //过度时间
                disX:0, //记录当前wrap 向左偏移了多远
                startX:0, // 初始偏移距离
            }
        },
        created() {
            this.dragState = {} // 轮播相关信息的对象
        },
        mounted() {
            var that = this;
           
            if(this.$props.auto){
                // that.doAnimate(this.$props.auto);
            }
            // that.doAnimate(this.$props.auto);
        },
        methods:{
            // 自动轮播
            doAnimate(time){
                var that = this;
                setInterval(()=>{
                    if( that.startIndex == that.childrenLength-1){
                        that.startIndex = 0;
                    }else{
                        that.startIndex++;
                    }
                   this.transLate = `translate(-${that.containerWidth * that.startIndex}px)`; 
                },time)
                
            },
            doTouchStart (ev) {
                ev = ev || event;
                ev.preventDefault();
                // let touch = ev.touches[0];
                // let dragState = this.dragState;
                //  dragState.startLeft = touch.pageX;
                //  dragState.startTop = touch.pageY;
                //  dragState.startTopAbsolut = touch.clientY;
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
                // this.moveX = event.touches[0].clientX;
                // // 实时的滑动的距离-起始位置=实时移动的位置
                // this.disX = (this.moveX - this.startX);
                // // 临界判断
                // if(Math.abs(this.disX) >= this.warpWidthNum){
                //     this.transLate = `translate(-${ this.warpWidthNum }px)`;
                // }else if(this.disX>= 0){
                //    this.transLate = `translate(20px)`; 
                //    setTimeout(()=>{
                //     this.transLate = `translate(0px)`;    
                //    },500)
                // }else {
                //     this.transLate = `translate(${ this.disX }px)`;
                // }
                 
                // if (this.disX <= 0) {
                //  this.transLate = `translate(-${ this.disX }px)`; 
                // } else if (this.disX > 0) {
                //  this.transLate = `translate(-${this.disX }px)`; 
                // }

            },
            doTouchEnd (ev) {
                ev = ev || event;
                ev.preventDefault();
                let btnWidth = this.$refs;
                let containerWidth = this.containerWidth
                // if (ev.changedTouches.length == 1) {
                //     // console.log(ev.changedTouches[0])
                //     let endX = ev.changedTouches[0].clientX;
                //     console.log(this.startX, endX)
                //     this.disX = (endX - this.startX)
                    
                //     if (Math.abs(this.disX) < (this.containerWidth / 2)) {   // 如果移动的距离不足容器的一半，则不会是下一个图片
                //         // this.transLate = `translate(-${this.containerWidth }px)`; 
                //     } else {
                //         this.startIndex++;
                //         if (this.startIndex < this.childrenLength) {
                //         this.transLate = `translate(-${this.containerWidth * this.startIndex}px)`; 
                //         }
                //         if (this.startIndex >= this.childrenLength) {
                //             this.startIndex = 0;
                //             this.transLate = `translate(-${this.containerWidth * this.startIndex}px)`; 
                //         }
                //     }
                // }
            }

        }
    }   
</script>

<style lang="less" scoped>
    .swipe-container{
        height: 100%;
        width: 100%;
        // overflow: hidden;
        transition: all 0.8;
        .swipe-wrap{
            height: 100%;
            // overflow: hidden;
            // clear: both;
            transition: all 0.8s;
            position: relative;
            .swipe-item{
                position: absolute;
                transform: translateX(100%);
                width: 100%;
                height: 100%;
                // display: none;
                img{
                    width: 100%;
                    height: 100%;
                }
             }
        }
    }
</style>
