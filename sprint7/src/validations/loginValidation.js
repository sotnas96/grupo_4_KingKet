const {body} = require('express-validator');
const loginValidation = [
    body('email')
        .notEmpty().withMessage('Ingrese su email')
        .isEmail().withMessage('coloque su email con formato valido'),
        
    body('password')
        .notEmpty().withMessage('Ingrese su contrasena')
            
]

module.exports = loginValidation