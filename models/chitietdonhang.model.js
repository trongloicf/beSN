const db = require("../common/db");

const chitietdonhang = (data) => {
  this.id = data.id;
  this.donhang_id = data.donhang_id;
  this.sanpham_size_color_id = data.sanpham_size_color_id;
  this.chitietdonhang_so_luong = data.chitietdonhang_so_luong;
  this.chitietdonhang_thanh_tien = data.chitietdonhang_thanh_tien;
  this.created_at = data.created_at;
  this.updated_at = data.updated_at;
};

chitietdonhang.getById = (id, callback) => {
  const sqlString = "SELECT * FROM chitietdonhang WHERE id = ?";
  db.query(sqlString, [id], (err, result) => { callback(err, result); });
};

chitietdonhang.getAll = (callback) => {
  const sqlString = "SELECT * FROM chitietdonhang";
  db.query(sqlString, (err, result) => { callback(err, result); });
};

chitietdonhang.insert = (data, callback) => {
  const sqlString = "INSERT INTO chitietdonhang SET ?";
  db.query(sqlString, data, (err, res) => { callback(err, res); });
};

chitietdonhang.update = (data, id, callback) => {
  if (!id) return callback('Thiếu ID');
  const sqlString = "UPDATE chitietdonhang SET ? WHERE id = ?";
  db.query(sqlString, [data, id], (err, res) => { callback(err, res); });
};

chitietdonhang.delete = (id, callback) => {
  db.query("DELETE FROM chitietdonhang WHERE id = ?", [id], (err, res) => { callback(err, res); });
};

module.exports = chitietdonhang;
