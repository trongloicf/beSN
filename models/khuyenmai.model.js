const db = require("../common/db");

const khuyenmai = (data) => {
  this.id = data.id;
  this.ten = data.ten;
  this.phan_tram = data.phan_tram;
  this.ngay_bat_dau = data.ngay_bat_dau;
  this.ngay_ket_thuc = data.ngay_ket_thuc;
  this.created_at = data.created_at;
  this.updated_at = data.updated_at;
};

khuyenmai.getById = (id, callback) => {
  const sqlString = "SELECT * FROM khuyenmai WHERE id = ?";
  db.query(sqlString, [id], (err, result) => { callback(err, result); });
};

khuyenmai.getAll = (callback) => {
  const sqlString = "SELECT * FROM khuyenmai";
  db.query(sqlString, (err, result) => { callback(err, result); });
};

khuyenmai.insert = (data, callback) => {
  const sqlString = "INSERT INTO khuyenmai SET ?";
  db.query(sqlString, data, (err, res) => { callback(err, res); });
};

khuyenmai.update = (data, id, callback) => {
  if (!id) return callback('Thiếu ID');
  const sqlString = "UPDATE khuyenmai SET ? WHERE id = ?";
  db.query(sqlString, [data, id], (err, res) => { callback(err, res); });
};

khuyenmai.delete = (id, callback) => {
  db.query("DELETE FROM khuyenmai WHERE id = ?", [id], (err, res) => { callback(err, res); });
};

module.exports = khuyenmai;
