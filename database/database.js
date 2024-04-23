
const mysql = require('mysql');
const config = require('../database/config');

// 连接mysql
function connect() {
  const { host, user, password, database } = config;
  return mysql.createConnection({
    host,
    user,
    password,
    database
  })
}

// 新建查询连接
function querySql(sql) {
  const conn = connect();
  return new Promise((resolve, reject) => {
    try {
      conn.query(sql, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      })
    } catch (e) {
      reject(e);
    } finally {
      // 释放连接
      conn.end();
    }
  })
}

module.exports = {
  querySql,
}
