const db = require("../common/db");

const donhang = (data) => {
  this.id = data.id;
  this.donhang_ma = data.donhang_ma;
  this.donhang_nguoi_nhan = data.donhang_nguoi_nhan;
  this.donhang_nguoi_nhan_email = data.donhang_nguoi_nhan_email;
  this.donhang_nguoi_nhan_sdt = data.donhang_nguoi_nhan_sdt;
  this.donhang_nguoi_nhan_dia_chi = data.donhang_nguoi_nhan_dia_chi;
  this.donhang_ghi_chu = data.donhang_ghi_chu;
  this.donhang_tong_tien = data.donhang_tong_tien;
  this.khachhang_id = data.khachhang_id;
  this.tinhtranghd_id = data.tinhtranghd_id;
  this.donhang_phuong_thuc = data.donhang_phuong_thuc;
  this.donhang_thanh_toan = data.donhang_thanh_toan;
  this.created_at = data.created_at;
  this.updated_at = data.updated_at;
};

donhang.getById = (id, callback) => {
  const sqlString = "SELECT * FROM donhang WHERE id = ?";
  db.query(sqlString, [id], (err, result) => { callback(err, result); });
};

donhang.getAll = (callback) => {
  const sqlString = "SELECT * FROM donhang";
  db.query(sqlString, (err, result) => { callback(err, result); });
};

donhang.insert = (data, callback) => {
  const sqlString = "INSERT INTO donhang SET ?";
  db.query(sqlString, data, (err, res) => { callback(err, res); });
};

donhang.update = (data, id, callback) => {
  if (!id) return callback('Thiếu ID');
  const sqlString = "UPDATE donhang SET ? WHERE id = ?";
  db.query(sqlString, [data, id], (err, res) => { callback(err, res); });
};

donhang.delete = (id, callback) => {
  db.query("DELETE FROM donhang WHERE id = ?", [id], (err, res) => { callback(err, res); });
};

module.exports = donhang;
