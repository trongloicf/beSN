const db = require("../common/db");

const size = (data) => {
  this.id = data.id;
  this.size_ten = data.size_ten;
  this.created_at = data.created_at;
  this.updated_at = data.updated_at;
};

size.getById = (id, callback) => {
  const sqlString = "SELECT * FROM size WHERE id = ?";
  db.query(sqlString, [id], (err, result) => { callback(err, result); });
};

size.getAll = (callback) => {
  const sqlString = "SELECT * FROM size";
  db.query(sqlString, (err, result) => { callback(err, result); });
};

size.insert = (data, callback) => {
  const sqlString = "INSERT INTO size SET ?";
  db.query(sqlString, data, (err, res) => { callback(err, res); });
};

size.update = (data, id, callback) => {
  if (!id) return callback('Thiếu ID');
  const sqlString = "UPDATE size SET ? WHERE id = ?";
  db.query(sqlString, [data, id], (err, res) => { callback(err, res); });
};

size.delete = (id, callback) => {
  db.query("DELETE FROM size WHERE id = ?", [id], (err, res) => { callback(err, res); });
};

module.exports = size;
