const clientesModel = require('../models/clientes.model');

function hasRequiredClienteFields(body) {
  if (!body || typeof body !== 'object') return false;
  const { nombre, email } = body;
  return Boolean(nombre && email);
}

async function getClientes(req, res, next) {
  try {
    const clientes = await clientesModel.findAll();
    res.json(clientes);
  } catch (error) {
    next(error);
  }
}

async function getClienteById(req, res, next) {
  try {
    const cliente = await clientesModel.findById(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json(cliente);
  } catch (error) {
    next(error);
  }
}

async function createCliente(req, res, next) {
  try {
    if (!hasRequiredClienteFields(req.body)) {
      return res.status(400).json({
        error: true,
        message: 'Datos invalidos: nombre y email son obligatorios',
      });
    }

    const result = await clientesModel.create(req.body);
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (error) {
    next(error);
  }
}

async function updateCliente(req, res, next) {
  try {
    if (!hasRequiredClienteFields(req.body)) {
      return res.status(400).json({
        error: true,
        message: 'Datos invalidos: nombre y email son obligatorios',
      });
    }

    const result = await clientesModel.update(req.params.id, req.body);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json({ id: Number(req.params.id), ...req.body });
  } catch (error) {
    next(error);
  }
}

/*async function deleteCliente(req, res, next) {
  try {
    const result = await clientesModel.remove(req.params.id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json({ message: 'Cliente eliminado' });
  } catch (error) {
    next(error);
  }
}*/

module.exports = {
  getClientes,
  getClienteById,
  createCliente,
  updateCliente,
};
