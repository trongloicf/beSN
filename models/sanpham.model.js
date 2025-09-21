const db = require("../common/db");

const sanpham = (data) => {
  this.id = data.id;
  this.sanpham_ten = data.sanpham_ten;
  this.sanpham_anh = data.sanpham_anh;
  this.sanpham_mo_ta = data.sanpham_mo_ta;
  this.loaisanpham_id = data.loaisanpham_id;
  this.thuonghieu_id = data.thuonghieu_id;
  this.chatlieu_id = data.chatlieu_id;
  this.xuatxu_id = data.xuatxu_id;
  this.sanpham_gia = data.sanpham_gia;
  this.created_at = data.created_at;
  this.updated_at = data.updated_at;
};

sanpham.getById = (id, callback) => {
  const sqlProduct = "SELECT * FROM sanpham WHERE id = ?";
  db.query(sqlProduct, [id], (err, results) => {
    if (err) return callback(err);
    if (results.length === 0) return callback(null, null);

    const product = results[0];

    const sqlSize = "SELECT id, size, so_luong FROM sanpham_size WHERE sanpham_id = ?";
    db.query(sqlSize, [id], (err2, sizes) => {
      if (err2) return callback(err2);
      product.sizes = sizes;
      callback(null, product);
    });
  });
};

sanpham.getAll = (callback) => {
  const sqlString = "SELECT * FROM sanpham";
  db.query(sqlString, (err, result) => { callback(err, result); });
};

sanpham.insert = (data, callback) => {
  const sqlString = "INSERT INTO sanpham SET ?";
  db.query(sqlString, data, (err, res) => { callback(err, res); });
};

sanpham.update = (data, id, callback) => {
  if (!id) return callback('Thiếu ID');
  const sqlString = "UPDATE sanpham SET ? WHERE id = ?";
  db.query(sqlString, [data, id], (err, res) => { callback(err, res); });
};

sanpham.delete = (id, callback) => {
  db.query("DELETE FROM sanpham WHERE id = ?", [id], (err, res) => { callback(err, res); });
};

module.exports = sanpham;
