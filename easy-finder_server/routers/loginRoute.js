const express = require('express');

// internal import
const loginController = require('../controller/loginController');

const router = express.Router();

router.post('/login', loginController);

module.exports = router;
