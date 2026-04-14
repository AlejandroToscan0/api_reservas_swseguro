const reservasModel = require('../models/reservas.model');

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
    const result = await reservasModel.create(req.body);
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (error) {
    next(error);
  }
}

async function updateReserva(req, res, next) {
  try {
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
  deleteReserva,
};
