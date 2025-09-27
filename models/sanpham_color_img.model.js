const db = require("../common/db");

const sanpham_color_img = (data) => {
  this.id = data.id;
  this.color_id = data.color_id;
  this.image_url = data.image_url;
  this.sanpham_id = data.sanpham_id;
  this.created_at = data.created_at;
  this.updated_at = data.updated_at;
};

sanpham_color_img.getById = (id, callback) => {
  const sqlString = "SELECT * FROM sanpham_color_img WHERE id = ?";
  db.query(sqlString, [id], (err, result) => { callback(err, result); });
};

sanpham_color_img.getAll = (callback) => {
  const sqlString = "SELECT * FROM sanpham_color_img";
  db.query(sqlString, (err, result) => { callback(err, result); });
};

sanpham_color_img.insert = (data, callback) => {
  const sqlString = "INSERT INTO sanpham_color_img SET ?";
  db.query(sqlString, data, (err, res) => { callback(err, res); });
};

sanpham_color_img.update = (data, id, callback) => {
  if (!id) return callback('Thiếu ID');
  const sqlString = "UPDATE sanpham_color_img SET ? WHERE id = ?";
  db.query(sqlString, [data, id], (err, res) => { callback(err, res); });
};

sanpham_color_img.delete = (id, callback) => {
  db.query("DELETE FROM sanpham_color_img WHERE id = ?", [id], (err, res) => { callback(err, res); });
};

module.exports = sanpham_color_img;
