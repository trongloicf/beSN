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
  const sqlProduct = `
    SELECT 
      sp.id, sp.sanpham_ten, sp.sanpham_anh, sp.sanpham_mo_ta, sp.sanpham_gia,
      lsp.loaisanpham_ten,
      th.thuonghieu_ten,
      cl.chatlieu_ten,
      xx.xuatxu_ten
    FROM sanpham sp
    LEFT JOIN loaisanpham lsp ON sp.loaisanpham_id = lsp.id
    LEFT JOIN thuonghieu th ON sp.thuonghieu_id = th.id
    LEFT JOIN chatlieu cl ON sp.chatlieu_id = cl.id
    LEFT JOIN xuatxu xx ON sp.xuatxu_id = xx.id
    WHERE sp.id = ?;
  `;

  db.query(sqlProduct, [id], (err, results) => {
    if (err) return callback(err);
    if (results.length === 0) return callback(null, null);

    const product = results[0];
    product.gia_goc = product.sanpham_gia;

    // ==================== SIZE + COLOR ====================
    const sqlSizeColor = `
      SELECT 
        ssc.id,
        ssc.size_id, sz.size_ten,
        ssc.color_id, c.color_ten, c.color_ma,
        ssc.so_luong
      FROM sanpham_size_color ssc
      JOIN size sz ON ssc.size_id = sz.id
      JOIN color c ON ssc.color_id = c.id
      WHERE ssc.sanpham_id = ?
    `;
    db.query(sqlSizeColor, [id], (err2, sizesColors) => {
      if (err2) return callback(err2);
      product.sizesColors = sizesColors;

      // ==================== IMAGES THEO MÀU ====================
      const sqlImages = `
        SELECT sci.id, sci.color_id, c.color_ten, c.color_ma, sci.image_url
        FROM sanpham_color_img sci
        JOIN color c ON sci.color_id = c.id
        WHERE sci.sanpham_id = ?
      `;
      db.query(sqlImages, [id], (errImg, images) => {
        if (errImg) return callback(errImg);
        product.imagesColor = images;

        // ==================== KHUYẾN MÃI ====================
        const sqlPromo = `
          SELECT km.id, km.ten, km.phan_tram, km.ngay_bat_dau, km.ngay_ket_thuc
          FROM sanphamkhuyenmai spkm
          JOIN khuyenmai km ON spkm.khuyenmai_id = km.id
          WHERE spkm.sanpham_id = ?
            AND NOW() BETWEEN km.ngay_bat_dau AND km.ngay_ket_thuc
        `;
        db.query(sqlPromo, [id], (err3, promos) => {
          if (err3) return callback(err3);

          product.khuyenmai = promos;

          if (promos.length > 0) {
            const maxPromo = promos.reduce(
              (max, km) => (km.phan_tram > max.phan_tram ? km : max),
              promos[0]
            );
            product.gia_giam = Math.round(
              product.gia_goc * (1 - maxPromo.phan_tram / 100)
            );
          } else {
            product.gia_giam = null;
          }

          callback(null, product);
        });
      });
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
