const express = require('express');
const router = express.Router();
const {body}=require('express-validator');
const usersController = require('../controller/usersControllers');
const authMiddleware=require('../middlewares/authMiddleware');
const guestMiddleware=require('../middlewares/guestMiddleware');

//validaciones
const validateLogin=[
    body('userName').isEmail(),
    body('Contraseña').notEmpty,
];
const validateCreateUsers=[
    body('userName').notEmpty().withMessage("Debe ingresar un nombre"),
    body('email').isEmail().withMessage("Debe ingresar un email correcto"),
    body('password').notEmpty().withMessage("Debe ingresar una contraseña válida"),
    body('rePassword').notEmpty().withMessage("Debe ingresar una REcontraseña válida")
];
// fin validaciones

router.get('/login', usersController.login);
router.post('/login',usersController.loginProcess);

router.get('/register',guestMiddleware, usersController.register);
router.post('/register', validateCreateUsers,usersController.create )

module.exports = router;