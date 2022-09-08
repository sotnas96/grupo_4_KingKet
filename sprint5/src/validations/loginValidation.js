const {body} = require('express-validator');
const userModel = require('../models/UserModel');
const bcrypt = require('bcryptjs')
const loginValidation = [
    body('email')
        .isEmail().withMessage('coloque su email')
        .custom((value, {req}) => {
            let emailCheck = userModel.findByField('email',req.body.email);
            if (emailCheck){
                return true
            }else{
                throw new Error ('Email y/o contrasena incorrectas')
            }
        }),
    body('password')
        .custom((value, {req}) => {
            let emailCheck = userModel.findByField('email',req.body.email)
            if(emailCheck){
                let okPass = bcrypt.compareSync(req.body.password, emailCheck.password)
                if (okPass){
                    return true
                }else{
                    throw new Error ('Email y/o contrasena incorrectas')
                }

            }else{
                throw new Error ('Email y/o contrasena incorrectas')
            }
        })
]
// let emailCheck = userModel.findeByField('id',0)
// // let ok = bcrypt.compareSync('39494882', emailCheck[0].password)
// if(emailCheck.){
//     console.log('Esta vacio')
// }
// else{
//     console.log('No esta vacio')
//  }
// console.log(ok)
module.exports = loginValidation