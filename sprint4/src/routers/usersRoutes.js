const express = require('express');
const router = express.Router();

const usersController = require('../controller/usersControllers');

router.get('/login', usersController.login);


router.get('/register', usersController.register);
router.post('/register', usersController.create )

module.exports = router;