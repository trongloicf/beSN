const mysql = require('mysql2')
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Loi@2004',
  database: 'aobongda'
})

module.exports = db;