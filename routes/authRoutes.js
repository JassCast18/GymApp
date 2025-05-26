const express = require('express');
const router = express.Router();
const authController = require('../controllers/authcontroller');

router.get('/login', authController.renderLogin);
router.post('/login', authController.login);

module.exports = router;