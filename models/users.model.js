const db = require("../common/db");

const users = (data) => {
  this.id = data.id;
  this.name = data.name;
  this.email = data.email;
  this.password = data.password;
  this.loainguoidung_id = data.loainguoidung_id;
  this.remember_token = data.remember_token;
  this.created_at = data.created_at;
  this.updated_at = data.updated_at;
};

users.getById = (id, callback) => {
  const sqlString = "SELECT * FROM users WHERE id = ?";
  db.query(sqlString, [id], (err, result) => { callback(err, result); });
};

users.getAll = (callback) => {
  const sqlString = "SELECT * FROM users";
  db.query(sqlString, (err, result) => { callback(err, result); });
};

users.insert = (data, callback) => {
  const sqlString = "INSERT INTO users SET ?";
  db.query(sqlString, data, (err, res) => { callback(err, res); });
};

users.update = (data, id, callback) => {
  if (!id) return callback('Thiếu ID');
  const sqlString = "UPDATE users SET ? WHERE id = ?";
  db.query(sqlString, [data, id], (err, res) => { callback(err, res); });
};

users.delete = (id, callback) => {
  db.query("DELETE FROM users WHERE id = ?", [id], (err, res) => { callback(err, res); });
};

module.exports = users;
