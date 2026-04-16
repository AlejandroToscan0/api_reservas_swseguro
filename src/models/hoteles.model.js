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
  const { nombre, direccion, estrellas, telefono } = data;
  const [result] = await pool.query(
    'INSERT INTO hoteles (nombre, direccion, estrellas, telefono) VALUES (?, ?, ?, ?)',
    [nombre, direccion, estrellas, telefono]
  );
  return result;
}

async function update(id, data) {
  const { nombre, direccion, estrellas, telefono } = data;
  const [result] = await pool.query(
    'UPDATE hoteles SET nombre = ?, direccion = ?, estrellas = ?, telefono = ? WHERE id = ?',
    [nombre, direccion, estrellas, telefono, id]
  );
  return result;
}

async function remove(id) {
  const [result] = await pool.query('DELETE FROM hoteles WHERE id = ?', [id]);
  return result;
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
