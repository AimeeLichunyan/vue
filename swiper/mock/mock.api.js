const fs = require('fs')
const path = require('path')
const Mock = require('mockjs')
const BodyParser = require('body-parser')
const CookieParser = require('cookie-parser')

const mockRootPath = `./`;

const getMockFile = (fileName) => {
  const _jsonFilePath = path.resolve(__dirname, mockRootPath, `${fileName}`);
  let _jsonFile = '{}';
  if (fs.existsSync(_jsonFilePath)) {
    _jsonFile = fs.readFileSync(_jsonFilePath, 'utf-8');
  } else {
    throw new Error(`[${_jsonFilePath}] is not found!`);
  }
  return JSON.parse(_jsonFile);
};

function randomNum(min = 0, max = 1) {
  return Math.round(min + Math.random() * (max - min));
}

module.exports = {
  //模拟接口调用
  before(app) {
    app.use(BodyParser.json());
    app.use(BodyParser.urlencoded({extended: false}));
    app.use(CookieParser());
    app.set('jsonp callback name', 'jsoncallback');

    app.get('/api_demo_list', function (req, res) {
      const query = req.query;
      let {pageSize = 10, pageNum = 1, keyword} = query;

      let _codeNum = randomNum();
      const _mockData = getMockFile(`api_demo_list_code_${_codeNum}.json`);

      res.json(Mock.mock(_mockData));
    });
  }
}
