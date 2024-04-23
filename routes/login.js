var express = require('express');
var router = express.Router();
const database = require('../database/database')
const StatusResult = require('@/result/statusResult')
const {singleArrayToObject} = require('@/utils/common')


/* GET users listing. */
router.get('/token', function(req, res, next) {
  let query = `SELECT token FROM zky_token LIMIT 1`
  database.querySql(query) .then(data => {
    res.json(StatusResult.success(singleArrayToObject(data)))
  })
});

router.post('/', function(req, res, next) {
  console.log(req.body)
});


module.exports = router;
