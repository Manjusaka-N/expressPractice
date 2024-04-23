const mysql = {
  host: 'localhost', // 主机名称，一般是本机
  port: '3306', // 数据库的端口号，如果不设置，默认是3306
  user: 'root', // 创建数据库时设置用户名
  password: 'zyn888888', // 创建数据库时设置的密码
  database: 'number_one',  // 创建的数据库
  connectTimeout: 5000 // 连接超时
}

module.exports = mysql;
