var express = require('express');
var router = express.Router();
const database = require('../database/database')
const StatusResult = require('@/result/statusResult')
const {singleArrayToObject, judgeDataType} = require('@/utils/common')

/* GET users listing. 查*/
router.get('/search/:id', function (req, res, next) {
  let query = `SELECT * FROM table_base WHERE id=${req.params.id}`
  database.querySql(query).then(data => {
    res.json(StatusResult.success(singleArrayToObject(data)))
  })
});


/* GET users listing.增 */
router.post('/add', async function (req, res, next) {
  const {id, name, state} = req.body
  if (judgeDataType({id, name, state}, {id: 'Undefined', name: 'String', state: 'Boolean'})) {
    let query = `INSERT INTO table_base (name,state) values('${name}',${state})`
    try {
      const data = await database.querySql(query)
      res.json(StatusResult.success({id: data.insertId || ''}))
    } catch (e) {
      res.json(StatusResult.fail({error:e.sqlMessage || e.code || '未知异常'}))
    }
  } else {
    res.json(StatusResult.validateFailed(null))
  }
});

/* GET users listing.改 */
router.post('/update',async function (req, res, next) {
  const {id, name, state} = req.body
  if (judgeDataType({id, name, state}, {id: 'Number', name: 'String', state: 'Boolean'})) {
    let query = `UPDATE table_base SET name='${name}',state=${state} WHERE id=${req.body.id}`
    try {
      const data = await database.querySql(query)
      res.json(StatusResult.success(null))
    } catch (e) {
      res.json(StatusResult.fail({error:e.sqlMessage || e.code || '未知异常'}))
    }
  } else {
    res.json(StatusResult.validateFailed(null))
  }
});

/* GET users listing.删 */
router.get('/delete/:id', function (req, res, next) {
  let query = `DELETE FROM table_base WHERE id=${req.params.id}`
  database.querySql(query).then(data => {
    res.json(StatusResult.success(null))
  })
});

module.exports = router;
