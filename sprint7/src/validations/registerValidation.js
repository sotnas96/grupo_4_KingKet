const {check,body} = require('express-validator');
const path = require('path');

const registerValidation = [
    body('userName')
        .notEmpty().withMessage('Ingrese su nombre de usuario')
        .isLength({min:2}).withMessage('El nombre de usuario debe contener al menos 4 caracteres'),
    body('email')
        .notEmpty().withMessage('Ingrese un email')
        .isEmail().withMessage('Ingrese email con formato valido'),
    body('avatar')
        .custom((value, {req}) => {
            let file = req.file;
            let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg']
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
        .notEmpty().withMessage('Ingrese una contrasena')
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