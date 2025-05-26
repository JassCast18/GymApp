const express = require('express');
const router = express.Router();
const claseController = require('../controllers/claseController');

router.get('/', claseController.listarClases);
router.get('/agregar', claseController.renderAgregarClase);
router.post('/agregar', claseController.agregarClase);
router.get('/editar/:id', claseController.renderEditarClase);
router.post('/editar/:id', claseController.editarClase);
router.post('/eliminar/:id', claseController.eliminarClase);

module.exports = router;