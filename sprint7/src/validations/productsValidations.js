const {body} = require('express-validator')
const path = require('path')

const productValidator = [
    body('organizador')
        .notEmpty().withMessage('No puede estar vacio')
        .isLength({min:3}).withMessage('Debe tener al menos 3 caracteres'),
    body('descripcion')
        .isLength({min:20}).withMessage('Debe colocar al menos 20 caracteres'),
    body('image')
        .custom((value, {req}) => {
            let archivo = req.file;
            let extentions = ['jpg', 'jpeg', 'gif', 'png'];
            if(!archivo){
                throw new Error ('Porfavor suba una imagen del producto')
            }else{
                let fileExt = path.extname(archivo.filename)
                if(extentions.includes(fileExt)){
                    return true
                }else{
                    throw new Error('Debe cargar un archivo del tipo '+ extentions.join('-'))
                }
            }
        })
];
module.exports = productValidator