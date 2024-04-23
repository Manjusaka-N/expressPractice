var fs = require('fs')
var express = require('express');
var router = express.Router();
const database = require('../database/database')
const StatusResult = require('@/result/statusResult')


/* GET users listing. */
router.get('/logo', function(req, res, next) {
  // 读取图片数据
  const imagePath = 'public/images/logo.jpeg';
  const image = fs.readFileSync(imagePath);
  // 设置响应头
  res.setHeader('Content-Type', 'image/jpeg');
  // 发送图片数据
  res.send(image);
});

module.exports = router;
