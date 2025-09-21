const db = require("../common/db");

const loainguoidung = (data) => {
  this.id = data.id;
  this.loainguoidung_ten = data.loainguoidung_ten;
  this.created_at = data.created_at;
  this.updated_at = data.updated_at;
};

loainguoidung.getById = (id, callback) => {
  const sqlString = "SELECT * FROM loainguoidung WHERE id = ?";
  db.query(sqlString, [id], (err, result) => { callback(err, result); });
};

loainguoidung.getAll = (callback) => {
  const sqlString = "SELECT * FROM loainguoidung";
  db.query(sqlString, (err, result) => { callback(err, result); });
};

loainguoidung.insert = (data, callback) => {
  const sqlString = "INSERT INTO loainguoidung SET ?";
  db.query(sqlString, data, (err, res) => { callback(err, res); });
};

loainguoidung.update = (data, id, callback) => {
  if (!id) return callback('Thiếu ID');
  const sqlString = "UPDATE loainguoidung SET ? WHERE id = ?";
  db.query(sqlString, [data, id], (err, res) => { callback(err, res); });
};

loainguoidung.delete = (id, callback) => {
  db.query("DELETE FROM loainguoidung WHERE id = ?", [id], (err, res) => { callback(err, res); });
};

module.exports = loainguoidung;
