const db = require("../common/db");

const sanphamkhuyenmai = (data) => {
  this.id = data.id;
  this.khuyenmai_id = data.khuyenmai_id;
  this.sanpham_id = data.sanpham_id;
  this.created_at = data.created_at;
  this.updated_at = data.updated_at;
};

sanphamkhuyenmai.getById = (id, callback) => {
  const sqlString = "SELECT * FROM sanphamkhuyenmai WHERE id = ?";
  db.query(sqlString, [id], (err, result) => { callback(err, result); });
};

sanphamkhuyenmai.getAll = (callback) => {
  const sqlString = "SELECT * FROM sanphamkhuyenmai";
  db.query(sqlString, (err, result) => { callback(err, result); });
};

sanphamkhuyenmai.insert = (data, callback) => {
  const sqlString = "INSERT INTO sanphamkhuyenmai SET ?";
  db.query(sqlString, data, (err, res) => { callback(err, res); });
};

sanphamkhuyenmai.update = (data, id, callback) => {
  if (!id) return callback('Thiếu ID');
  const sqlString = "UPDATE sanphamkhuyenmai SET ? WHERE id = ?";
  db.query(sqlString, [data, id], (err, res) => { callback(err, res); });
};

sanphamkhuyenmai.delete = (id, callback) => {
  db.query("DELETE FROM sanphamkhuyenmai WHERE id = ?", [id], (err, res) => { callback(err, res); });
};

module.exports = sanphamkhuyenmai;
