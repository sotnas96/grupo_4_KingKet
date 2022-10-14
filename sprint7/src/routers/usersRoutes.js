const express = require('express');
const router = express.Router();
const path = require('path')
const multer = require('multer');
const usersController = require('../controller/usersControllers');
const authMiddleware=require('../middlewares/authMiddleware');
const guestMiddleware=require('../middlewares/guestMiddleware');

//Traigo la validacion
const registerValidation = require('../validations/registerValidation');
const loginValidation = require('../validations/loginValidation');

//Configuracion upload de imagenes de usuarios
const storage = multer.diskStorage({
    destination: (req,res,cb) => {
        cb(null, path.join(__dirname, '../../public/images/users'));

    },
    filename: (req,file,cb) => {
        cb(null, file.fieldname+ '-'+ Date.now()+ path.extname(file.originalname))
    }
})

const uploadAvatar = multer({storage: storage})


router.get('/login', guestMiddleware,usersController.login);
router.post('/login', loginValidation, usersController.loginProcess);

router.get('/register', guestMiddleware,usersController.register);
router.post('/register', uploadAvatar.single('avatar'), registerValidation,  usersController.create)

router.get('/profile', authMiddleware,usersController.profile);

router.get('/logout', usersController.logout)
module.exports = router;