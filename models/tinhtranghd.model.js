const db = require("../common/db");

const tinhtranghd = (data) => {
  this.id = data.id;
  this.tinhtranghd_ten = data.tinhtranghd_ten;
  this.tinhtranghd_mo_ta = data.tinhtranghd_mo_ta;
  this.created_at = data.created_at;
  this.updated_at = data.updated_at;
};

tinhtranghd.getById = (id, callback) => {
  const sqlString = "SELECT * FROM tinhtranghd WHERE id = ?";
  db.query(sqlString, [id], (err, result) => { callback(err, result); });
};

tinhtranghd.getAll = (callback) => {
  const sqlString = "SELECT * FROM tinhtranghd";
  db.query(sqlString, (err, result) => { callback(err, result); });
};

tinhtranghd.insert = (data, callback) => {
  const sqlString = "INSERT INTO tinhtranghd SET ?";
  db.query(sqlString, data, (err, res) => { callback(err, res); });
};

tinhtranghd.update = (data, id, callback) => {
  if (!id) return callback('Thiếu ID');
  const sqlString = "UPDATE tinhtranghd SET ? WHERE id = ?";
  db.query(sqlString, [data, id], (err, res) => { callback(err, res); });
};

tinhtranghd.delete = (id, callback) => {
  db.query("DELETE FROM tinhtranghd WHERE id = ?", [id], (err, res) => { callback(err, res); });
};

module.exports = tinhtranghd;
