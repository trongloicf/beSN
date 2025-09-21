const db = require("../common/db");

const thuonghieu = (data) => {
  this.id = data.id;
  this.thuonghieu_ten = data.thuonghieu_ten;
  this.thuonghieu_quoc_gia = data.thuonghieu_quoc_gia;
  this.created_at = data.created_at;
  this.updated_at = data.updated_at;
};

thuonghieu.getById = (id, callback) => {
  const sqlString = "SELECT * FROM thuonghieu WHERE id = ?";
  db.query(sqlString, [id], (err, result) => { callback(err, result); });
};

thuonghieu.getAll = (callback) => {
  const sqlString = "SELECT * FROM thuonghieu";
  db.query(sqlString, (err, result) => { callback(err, result); });
};

thuonghieu.insert = (data, callback) => {
  const sqlString = "INSERT INTO thuonghieu SET ?";
  db.query(sqlString, data, (err, res) => { callback(err, res); });
};

thuonghieu.update = (data, id, callback) => {
  if (!id) return callback('Thiếu ID');
  const sqlString = "UPDATE thuonghieu SET ? WHERE id = ?";
  db.query(sqlString, [data, id], (err, res) => { callback(err, res); });
};

thuonghieu.delete = (id, callback) => {
  db.query("DELETE FROM thuonghieu WHERE id = ?", [id], (err, res) => { callback(err, res); });
};

module.exports = thuonghieu;
