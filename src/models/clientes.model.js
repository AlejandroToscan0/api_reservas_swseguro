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
  const { nombre, email, telefono, nacionalidad } = data;
  return pool.query(
    'INSERT INTO clientes (nombre, email, telefono, nacionalidad) VALUES (?, ?, ?, ?)',
    [nombre, email, telefono, nacionalidad]
  );
}

async function update(id, data) {
  const { nombre, email, telefono, nacionalidad } = data;
  return pool.query(
    'UPDATE clientes SET nombre = ?, email = ?, telefono = ?, nacionalidad = ? WHERE id = ?',
    [nombre, email, telefono, nacionalidad, id]
  );
}

async function remove(id) {
  return pool.query('DELETE FROM clientes WHERE id = ?', [id]);
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
