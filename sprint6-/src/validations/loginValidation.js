const {body} = require('express-validator');
const loginValidation = [
    body('email')
        .isEmail().withMessage('coloque su email'),
        
    body('password')
    .isLength({min:8}).withMessage('Debe tener al menos 8 caracteres')
        
]

module.exports = loginValidation