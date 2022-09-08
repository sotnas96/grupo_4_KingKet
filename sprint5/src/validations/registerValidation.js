const {check,body} = require('express-validator');
const path = require('path');
const userModel = require('../models/UserModel')

const registerValidation = [
    body('userName')
        .isLength({min:4}).withMessage('El nombre de usuario debe contener al menos 4 caracteres'),
    body('email')
        .isEmail().withMessage('Ingrese con formato valido')
        .custom((value, {req}) => {
            let emailCheck = userModel.findByField('email', req.body.email);
            if(emailCheck){
                throw new Error ('El email ingresado ya se encuentra registrado')
            }else{
                return true
            }
        }),
    body('avatar')
        .custom((value, {req}) => {
            let file = req.file;
            let acceptedExtensions = ['.jpg', '.png', '.gif', '.bmp', '.tif']
            if (! file) {
                throw new Error ('Por favor sube una imagen')
            } else{
                let fileExtension = path.extname(file.originalname)
                if(! acceptedExtensions.includes(fileExtension)){
                    throw new Error ('Debe agregar un archivo tipo '+ acceptedExtensions.join('-'))
                }
            } return true;
        }),
    body('password')
        .isLength({min:8}).withMessage('Debe tener al menos 8 caracteres'),
    body('rePassword')
        .custom((value, {req}) => {
            let pass1 = req.body.password
            let pass2 = req.body.rePassword
            if ( pass1 != pass2){
                throw new Error ('Las contrasenas deben coincidir')
            } return true
        })
];
module.exports = registerValidation;