const db = require("../common/db");

const xuatxu = (data) => {
  this.id = data.id;
  this.xuatxu_ten = data.xuatxu_ten;
  this.xuatxu_mo_ta = data.xuatxu_mo_ta;
  this.created_at = data.created_at;
  this.updated_at = data.updated_at;
};

xuatxu.getById = (id, callback) => {
  const sqlString = "SELECT * FROM xuatxu WHERE id = ?";
  db.query(sqlString, [id], (err, result) => { callback(err, result); });
};

xuatxu.getAll = (callback) => {
  const sqlString = "SELECT * FROM xuatxu";
  db.query(sqlString, (err, result) => { callback(err, result); });
};

xuatxu.insert = (data, callback) => {
  const sqlString = "INSERT INTO xuatxu SET ?";
  db.query(sqlString, data, (err, res) => { callback(err, res); });
};

xuatxu.update = (data, id, callback) => {
  if (!id) return callback('Thiếu ID');
  const sqlString = "UPDATE xuatxu SET ? WHERE id = ?";
  db.query(sqlString, [data, id], (err, res) => { callback(err, res); });
};

xuatxu.delete = (id, callback) => {
  db.query("DELETE FROM xuatxu WHERE id = ?", [id], (err, res) => { callback(err, res); });
};

module.exports = xuatxu;
