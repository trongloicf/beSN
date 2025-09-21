const db = require("../common/db");

const loaisanpham = (data) => {
  this.id = data.id;
  this.loaisanpham_ten = data.loaisanpham_ten;
  this.created_at = data.created_at;
  this.updated_at = data.updated_at;
};

loaisanpham.getById = (id, callback) => {
  const sqlString = "SELECT * FROM loaisanpham WHERE id = ?";
  db.query(sqlString, [id], (err, result) => { callback(err, result); });
};

loaisanpham.getAll = (callback) => {
  const sqlString = "SELECT * FROM loaisanpham";
  db.query(sqlString, (err, result) => { callback(err, result); });
};

loaisanpham.insert = (data, callback) => {
  const sqlString = "INSERT INTO loaisanpham SET ?";
  db.query(sqlString, data, (err, res) => { callback(err, res); });
};

loaisanpham.update = (data, id, callback) => {
  if (!id) return callback('Thiếu ID');
  const sqlString = "UPDATE loaisanpham SET ? WHERE id = ?";
  db.query(sqlString, [data, id], (err, res) => { callback(err, res); });
};

loaisanpham.delete = (id, callback) => {
  db.query("DELETE FROM loaisanpham WHERE id = ?", [id], (err, res) => { callback(err, res); });
};

module.exports = loaisanpham;
