const express = require('express');
const router = express.Router();
const claseController = require('../controllers/claseController');

router.get('/clases', claseController.listarClases);
router.get('/clases/agregar', claseController.renderAgregarClase);
router.post('/clases/agregar', claseController.agregarClase);
router.get('/clases/editar/:id', claseController.renderEditarClase);
router.post('/clases/editar/:id', claseController.editarClase);
router.post('/clases/eliminar/:id', claseController.eliminarClase);

module.exports = router;