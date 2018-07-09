<template>
    <div class="swipe-container" ref="swipe-container">
        <div class="swipe-wrap" ref="swipe-wrap" :style="{width:warpWidth,'transform':transLate}">
            <slot></slot>
            <!--warpWidth transLate -->
        </div>
    </div>
</template>
<script>
    export default {
        name: "z_swipe",
        props:{
           auto:Number 
        },
        data(){
            return{
                styles:{},// wrap移动
                containerWidth:0, // 容器宽度
                warpWidth:0, // 轮播wrap宽度
                startIndex:0, //开始轮播的index
                transLate:"translate(0px)", // Wrap移动距离
                childrenLength:0, // 容器中item的个数
                speed:'all 0.8', //过度时间
            }
        },
        created() {
           
        },
        mounted() {
            var that = this;
            that.containerWidth = that.$refs['swipe-container'].clientWidth;
            that.childrenLength = this.$refs['swipe-wrap'].children.length;
            this.warpWidth =this.containerWidth * that.childrenLength + 'px';
            
            for(var i of this.$refs['swipe-wrap'].children){
                i.style.width = this.containerWidth + 'px';
            }
            if(this.$props.auto){
                that.doAnimate(this.$props.auto);
            }
            // that.doAnimate(this.$props.auto);
        },
        methods:{
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
                
            }
        }
    }   
</script>

<style lang="less" scoped>
    .swipe-container{
        height: 300px;
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
