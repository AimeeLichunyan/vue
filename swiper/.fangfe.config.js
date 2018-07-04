module.exports = {
  "name": "GongyusystemH5",
  "projectType": "vue",//项目类型
  "styleType": "less",//Css编译类型
  "author": "lichunyan",
  "email": "lichunyan07@58ganji.com",
  //webpack相关配置
  "webpackConfig": {
    "entryPages": "src/pages/*",
    "port": "8080",
    "localhost": "127.0.0.1",
    "devtool": "eval-source-map",//SourceMap
    "enableCommon": true,//开启提取公共代码
    "enableDll": false,//开启dll功能
    "cssModule": false,//开启CSSMoudule
    "proxy": false,//是否使用代理
    "minimize": false//开启代码压缩
  }
}