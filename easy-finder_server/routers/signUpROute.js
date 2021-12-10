const express = require('express');

const { addUser } = require('../controller/signupController');
const addUserValidator = require('../middleWares/userValidator');

const router = express.Router();
// signup route
// localhost:4000/user/signup
router.post('/signup', addUserValidator, addUser);

module.exports = router;
