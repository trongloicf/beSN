const db = require("../common/db");

const sanpham_size = (data) => {
  this.id = data.id;
  this.sanpham_id = data.sanpham_id;
  this.size = data.size;
  this.so_luong = data.so_luong;
};

sanpham_size.getById = (id, callback) => {
  const sqlString = "SELECT * FROM sanpham_size WHERE id = ?";
  db.query(sqlString, [id], (err, result) => { callback(err, result); });
};

sanpham_size.getAll = (callback) => {
  const sqlString = "SELECT * FROM sanpham_size";
  db.query(sqlString, (err, result) => { callback(err, result); });
};

sanpham_size.insert = (data, callback) => {
  const sqlString = "INSERT INTO sanpham_size SET ?";
  db.query(sqlString, data, (err, res) => { callback(err, res); });
};

sanpham_size.update = (data, id, callback) => {
  if (!id) return callback('Thiếu ID');
  const sqlString = "UPDATE sanpham_size SET ? WHERE id = ?";
  db.query(sqlString, [data, id], (err, res) => { callback(err, res); });
};

sanpham_size.delete = (id, callback) => {
  db.query("DELETE FROM sanpham_size WHERE id = ?", [id], (err, res) => { callback(err, res); });
};

module.exports = sanpham_size;
