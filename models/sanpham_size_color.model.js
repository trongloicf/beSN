const db = require("../common/db");

const sanpham_size_color = (data) => {
  this.id = data.id;
  this.size_id = data.size_id;
  this.color_id = data.color_id;
  this.sanpham_id = data.sanpham_id;
  this.so_luong = data.so_luong;
  this.created_at = data.created_at;
  this.updated_at = data.updated_at;
};

sanpham_size_color.getById = (id, callback) => {
  const sqlString = "SELECT * FROM sanpham_size_color WHERE id = ?";
  db.query(sqlString, [id], (err, result) => { callback(err, result); });
};

sanpham_size_color.getAll = (callback) => {
  const sqlString = "SELECT * FROM sanpham_size_color";
  db.query(sqlString, (err, result) => { callback(err, result); });
};

sanpham_size_color.insert = (data, callback) => {
  const sqlString = "INSERT INTO sanpham_size_color SET ?";
  db.query(sqlString, data, (err, res) => { callback(err, res); });
};

sanpham_size_color.update = (data, id, callback) => {
  if (!id) return callback('Thiếu ID');
  const sqlString = "UPDATE sanpham_size_color SET ? WHERE id = ?";
  db.query(sqlString, [data, id], (err, res) => { callback(err, res); });
};

sanpham_size_color.delete = (id, callback) => {
  db.query("DELETE FROM sanpham_size_color WHERE id = ?", [id], (err, res) => { callback(err, res); });
};

module.exports = sanpham_size_color;
