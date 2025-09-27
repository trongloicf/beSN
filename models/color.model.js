const db = require("../common/db");

const color = (data) => {
  this.id = data.id;
  this.color_ten = data.color_ten;
  this.color_ma = data.color_ma;
  this.created_at = data.created_at;
  this.updated_at = data.updated_at;
};

color.getById = (id, callback) => {
  const sqlString = "SELECT * FROM color WHERE id = ?";
  db.query(sqlString, [id], (err, result) => { callback(err, result); });
};

color.getAll = (callback) => {
  const sqlString = "SELECT * FROM color";
  db.query(sqlString, (err, result) => { callback(err, result); });
};

color.insert = (data, callback) => {
  const sqlString = "INSERT INTO color SET ?";
  db.query(sqlString, data, (err, res) => { callback(err, res); });
};

color.update = (data, id, callback) => {
  if (!id) return callback('Thiếu ID');
  const sqlString = "UPDATE color SET ? WHERE id = ?";
  db.query(sqlString, [data, id], (err, res) => { callback(err, res); });
};

color.delete = (id, callback) => {
  db.query("DELETE FROM color WHERE id = ?", [id], (err, res) => { callback(err, res); });
};

module.exports = color;
