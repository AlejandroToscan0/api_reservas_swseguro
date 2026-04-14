const pool = require('../config/db');

async function findAll() {
  const [rows] = await pool.query('SELECT * FROM reservas');
  return rows;
}

async function findById(id) {
  const [rows] = await pool.query('SELECT * FROM reservas WHERE id = ?', [id]);
  return rows[0];
}

async function create(data) {
  const { cliente_id, hotel_id, fecha_entrada, fecha_salida, num_huespedes } = data;
  return pool.query(
    'INSERT INTO reservas (cliente_id, hotel_id, fecha_entrada, fecha_salida, num_huespedes) VALUES (?, ?, ?, ?, ?)',
    [cliente_id, hotel_id, fecha_entrada, fecha_salida, num_huespedes]
  );
}

async function update(id, data) {
  const { cliente_id, hotel_id, fecha_entrada, fecha_salida, num_huespedes } = data;
  return pool.query(
    'UPDATE reservas SET cliente_id = ?, hotel_id = ?, fecha_entrada = ?, fecha_salida = ?, num_huespedes = ? WHERE id = ?',
    [cliente_id, hotel_id, fecha_entrada, fecha_salida, num_huespedes, id]
  );
}

async function remove(id) {
  return pool.query('DELETE FROM reservas WHERE id = ?', [id]);
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
