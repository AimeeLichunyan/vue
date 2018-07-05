<!-- 示例页面 -->

<template>

  <article class="page">
  </article>
</template>

<script>
  /* 页面所需组件 */
  import HouseItem from '@/components/house-item/index.vue';
  import Input from '@/components/input/index.vue';

  /* 混入 */
  import BaseMixin from '@/mixins/base';

  export default {
    mixins: [BaseMixin],
    data () {
      return {
        // 搜索数据
        searchData: {
          type: 'text',
          value: '',
          placeholder: '请输入房源相关信息'
        },
        // 列表数据
        houseDate: {
          // 每页多少条
          pageSize: 10,
          // 第几页
          pageNum: 1,
          list: []
        }
      }
    },
    watch: {
      'searchData.value': function (val, old) {
        if (val) {
          this.fetchData();
        }
      }
    },
    created: function () {
    },
    mounted () {
    },
    methods: {
      /**
       * 获取数据：列表信息
       */
      fetchData () {
        this.$http.get(this.$api.apiDemoList, {
          pageSize: this.pageSize,
          pageNum: this.pageNum,
          keyword: this.searchData.value
        })
          .then(res => {
            if (res && res.code == 0 && res.data && res.data.list) {
              this.houseDate.list = res.data.list;
            } else {
              this.$toast('数据异常请稍后再试！');
            }
          })
          .catch(err => {
            console.error(err);
            this.$toast('服务器异常请稍后再试！');
          })
      }
    },
    components: {
      HouseItem,
      Input
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
  @import '../../assets/css/base.less';

  .page {
    position: relative;
    width: 100%;
    height: 100%;
    background: #F6F6F6;

    /* 搜索 */
    .search {
      width: 100%;
      padding: 20px 30px;
      box-sizing: border-box;
      background: #fff;
    }

    /* 列表 */
    .list {
      width: 100%;
    }
  }
</style>
