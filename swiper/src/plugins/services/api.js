/**
 * Created by lunachi on 2018/4/19.
 * API 接口配置
 */

let host = ''

// console.log('process.env.NODE_ENV', process.env.NODE_ENV)

export default {
  /**
   * 说明: 示例接口 获取列表数据
   * 参数:
   *    pageSize: 每页多少条
   *    pageNum: 第几页
   *    keyword: 关键字
   * 返回:
   *    {
   *      code: 0,
   *      data: {
   *        list: []
   *      },
   *      message: ''
   *    }
   */
  apiDemoList: `${host}/api_demo_list`
}
