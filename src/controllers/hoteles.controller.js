const hotelesModel = require('../models/hoteles.model');

function hasRequiredHotelFields(body) {
  if (!body || typeof body !== 'object') return false;
  const { nombre, direccion } = body;
  return Boolean(nombre && direccion);
}

async function getHoteles(req, res, next) {
  try {
    const hoteles = await hotelesModel.findAll();
    res.json(hoteles);
  } catch (error) {
    next(error);
  }
}

async function getHotelById(req, res, next) {
  try {
    const hotel = await hotelesModel.findById(req.params.id);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel no encontrado' });
    }
    res.json(hotel);
  } catch (error) {
    next(error);
  }
}

async function createHotel(req, res, next) {
  try {
    if (!hasRequiredHotelFields(req.body)) {
      return res.status(400).json({
        error: true,
        message: 'Datos invalidos: nombre y direccion son obligatorios',
      });
    }

    const result = await hotelesModel.create(req.body);
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (error) {
    next(error);
  }
}

async function updateHotel(req, res, next) {
  try {
    if (!hasRequiredHotelFields(req.body)) {
      return res.status(400).json({
        error: true,
        message: 'Datos invalidos: nombre y direccion son obligatorios',
      });
    }

    const result = await hotelesModel.update(req.params.id, req.body);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Hotel no encontrado' });
    }
    res.json({ id: Number(req.params.id), ...req.body });
  } catch (error) {
    next(error);
  }
}

/*async function deleteHotel(req, res, next) {
  try {
    const result = await hotelesModel.remove(req.params.id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Hotel no encontrado' });
    }
    res.json({ message: 'Hotel eliminado' });
  } catch (error) {
    next(error);
  }
}*/

module.exports = {
  getHoteles,
  getHotelById,
  createHotel,
  updateHotel,
};
