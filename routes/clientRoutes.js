const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

router.get('/index', clientController.listarClientes);
router.get('/inscribir', clientController.renderInscribirForm);
router.post('/inscribir', clientController.inscribirCliente);
router.get('/miembro/:id', clientController.verFicha);
router.get('/editar/:id', clientController.renderEditarForm);
router.post('/editar/:id', clientController.editarCliente);
router.post('/eliminar/:id', clientController.eliminarCliente);

module.exports = router;