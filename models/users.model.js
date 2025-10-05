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
  const sqlString = `
    SELECT 
      u.*,
      l.loainguoidung_ten,
      k.khachhang_ten,
      k.khachhang_sdt,
      k.khachhang_dia_chi
    FROM users u
    LEFT JOIN loainguoidung l ON u.loainguoidung_id = l.id
    LEFT JOIN khachhang k ON u.id = k.user_id
    WHERE u.id = ?
  `;
  db.query(sqlString, [id], (err, result) => {
    if (err) return callback(err);
    callback(null, result[0] || null); // trả về 1 object, không phải array
  });
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
