const db = require("../common/db");

const khachhang = (data) => {
  this.id = data.id;
  this.khachhang_ten = data.khachhang_ten;
  this.khachhang_sdt = data.khachhang_sdt;
  this.khachhang_dia_chi = data.khachhang_dia_chi;
  this.user_id = data.user_id;
  this.created_at = data.created_at;
  this.updated_at = data.updated_at;
};

khachhang.getById = (id, callback) => {
  const sqlString = "SELECT * FROM khachhang WHERE id = ?";
  db.query(sqlString, [id], (err, result) => { callback(err, result); });
};

khachhang.getAll = (callback) => {
  const sqlString = "SELECT * FROM khachhang";
  db.query(sqlString, (err, result) => { callback(err, result); });
};

khachhang.insert = (data, callback) => {
  const sqlString = "INSERT INTO khachhang SET ?";
  db.query(sqlString, data, (err, res) => { callback(err, res); });
};

khachhang.update = (data, id, callback) => {
  if (!id) return callback('Thiếu ID');
  const sqlString = "UPDATE khachhang SET ? WHERE id = ?";
  db.query(sqlString, [data, id], (err, res) => { callback(err, res); });
};

khachhang.delete = (id, callback) => {
  db.query("DELETE FROM khachhang WHERE id = ?", [id], (err, res) => { callback(err, res); });
};

module.exports = khachhang;
