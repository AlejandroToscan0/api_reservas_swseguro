const pool = require('../config/db');

async function findAll() {
  const [rows] = await pool.query('SELECT * FROM clientes');
  return rows;
}

async function findById(id) {
  const [rows] = await pool.query('SELECT * FROM clientes WHERE id = ?', [id]);
  return rows[0];
}

async function create(data) {
  const { nombre, email, telefono } = data;
  const [result] = await pool.query(
    'INSERT INTO clientes (nombre, email, telefono) VALUES (?, ?, ?)',
    [nombre, email, telefono]
  );
  return result;
}

async function update(id, data) {
  const { nombre, email, telefono } = data;
  const [result] = await pool.query(
    'UPDATE clientes SET nombre = ?, email = ?, telefono = ? WHERE id = ?',
    [nombre, email, telefono, id]
  );
  return result;
}

async function remove(id) {
  const [result] = await pool.query('DELETE FROM clientes WHERE id = ?', [id]);
  return result;
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
