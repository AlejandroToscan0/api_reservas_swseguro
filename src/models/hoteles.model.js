const pool = require('../config/db');

async function findAll() {
  const [rows] = await pool.query('SELECT * FROM hoteles');
  return rows;
}

async function findById(id) {
  const [rows] = await pool.query('SELECT * FROM hoteles WHERE id = ?', [id]);
  return rows[0];
}

async function create(data) {
  const { nombre, direccion, ciudad, estrellas, precio_noche } = data;
  return pool.query(
    'INSERT INTO hoteles (nombre, direccion, ciudad, estrellas, precio_noche) VALUES (?, ?, ?, ?, ?)',
    [nombre, direccion, ciudad, estrellas, precio_noche]
  );
}

async function update(id, data) {
  const { nombre, direccion, ciudad, estrellas, precio_noche } = data;
  return pool.query(
    'UPDATE hoteles SET nombre = ?, direccion = ?, ciudad = ?, estrellas = ?, precio_noche = ? WHERE id = ?',
    [nombre, direccion, ciudad, estrellas, precio_noche, id]
  );
}

async function remove(id) {
  return pool.query('DELETE FROM hoteles WHERE id = ?', [id]);
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
