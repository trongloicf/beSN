const db = require("../common/db");

const chatlieu = (data) => {
  this.id = data.id;
  this.chatlieu_ten = data.chatlieu_ten;
  this.chatlieu_mo_ta = data.chatlieu_mo_ta;
  this.created_at = data.created_at;
  this.updated_at = data.updated_at;
};

chatlieu.getById = (id, callback) => {
  const sqlString = "SELECT * FROM chatlieu WHERE id = ?";
  db.query(sqlString, [id], (err, result) => { callback(err, result); });
};

chatlieu.getAll = (callback) => {
  const sqlString = "SELECT * FROM chatlieu";
  db.query(sqlString, (err, result) => { callback(err, result); });
};

chatlieu.insert = (data, callback) => {
  const sqlString = "INSERT INTO chatlieu SET ?";
  db.query(sqlString, data, (err, res) => { callback(err, res); });
};

chatlieu.update = (data, id, callback) => {
  if (!id) return callback('Thiếu ID');
  const sqlString = "UPDATE chatlieu SET ? WHERE id = ?";
  db.query(sqlString, [data, id], (err, res) => { callback(err, res); });
};

chatlieu.delete = (id, callback) => {
  db.query("DELETE FROM chatlieu WHERE id = ?", [id], (err, res) => { callback(err, res); });
};

module.exports = chatlieu;
