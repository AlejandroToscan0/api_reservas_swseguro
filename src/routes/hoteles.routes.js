const express = require('express');
const router = express.Router();
const hotelesController = require('../controllers/hoteles.controller');

router.get('/', hotelesController.getHoteles);
router.get('/:id', hotelesController.getHotelById);
router.post('/', hotelesController.createHotel);
router.put('/:id', hotelesController.updateHotel);
router.delete('/:id', hotelesController.deleteHotel);

module.exports = router;
