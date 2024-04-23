var express = require('express');
var router = express.Router();
const database = require('../database/database')

// const middleOne = function(req, res, next){
//   next()
// }
// router.use(middleOne)
/* GET users listing. */
router.get('/', function(req, res, next) {
  let query = 'SELECT * FROM `table_base`'
  database.querySql(query) .then(data => {
    res.json({
      msg: '查询成功1！',
      data: data
    })
  })
});

router.get('/user/:id', function(req, res, next) {
  console.log(req.params)
  console.log(req.query)
});

module.exports = router;
