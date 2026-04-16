const reservasModel = require('../models/reservas.model');

function hasRequiredReservaFields(body) {
  if (!body || typeof body !== 'object') return false;
  const { fecha_entrada, fecha_salida, hotel_id, cliente_id } = body;
  return Boolean(fecha_entrada && fecha_salida && hotel_id && cliente_id);
}

async function getReservas(req, res, next) {
  try {
    const reservas = await reservasModel.findAll();
    res.json(reservas);
  } catch (error) {
    next(error);
  }
}

async function getReservaById(req, res, next) {
  try {
    const reserva = await reservasModel.findById(req.params.id);
    if (!reserva) {
      return res.status(404).json({ message: 'Reserva no encontrada' });
    }
    res.json(reserva);
  } catch (error) {
    next(error);
  }
}

async function createReserva(req, res, next) {
  try {
    if (!hasRequiredReservaFields(req.body)) {
      return res.status(400).json({
        error: true,
        message: 'Datos invalidos: fecha_entrada, fecha_salida, hotel_id y cliente_id son obligatorios',
      });
    }

    const result = await reservasModel.create(req.body);
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (error) {
    next(error);
  }
}

async function updateReserva(req, res, next) {
  try {
    if (!hasRequiredReservaFields(req.body)) {
      return res.status(400).json({
        error: true,
        message: 'Datos invalidos: fecha_entrada, fecha_salida, hotel_id y cliente_id son obligatorios',
      });
    }

    const result = await reservasModel.update(req.params.id, req.body);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Reserva no encontrada' });
    }
    res.json({ id: Number(req.params.id), ...req.body });
  } catch (error) {
    next(error);
  }
}

/*async function deleteReserva(req, res, next) {
  try {
    const result = await reservasModel.remove(req.params.id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Reserva no encontrada' });
    }
    res.json({ message: 'Reserva eliminada' });
  } catch (error) {
    next(error);
  }
}*/

module.exports = {
  getReservas,
  getReservaById,
  createReserva,
  updateReserva,
};
