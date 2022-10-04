const {body} = require('express-validator');
const db = require('../database/models');
const bcrypt = require('bcryptjs');
const loginValidation = [
    body('email')
        .isEmail().withMessage('coloque su email'),
        // .custom((value,{req}) => {
        //     let emailInput = req.body.email
        //     let userCheck;
        //     const buscar1 = async value => {
        //         db.User.findOne({
        //             where: {
        //                 email: value
        //             }
        //         })
        //         .then(user => {
        //             console.log(user)
        //             return user})  //si no encuentra nada devuelve null
        //         .catch(e=> console.log(e, 'No encontro nada'))
        //     };
        //     userCheck = buscar1(emailInput);
        //     if(userCheck){
        //         console.log('userCheck is true')
        //         return true
        //     }
        //     else {
        //         console.log('userCheck is false');

        //         throw new Error ('Revisa que tu email sea correcto')
        //     }
        // }),
    body('password')
    .isLength({min:8}).withMessage('Debe tener al menos 8 caracteres')
        // .custom((value,{req}) => {
        //     let userCheck;
        //      db.User.findOne({
        //         where: {
        //             email: req.body.email
        //         }
        //         })
        //         .then(user => {
        //             console.log('usuario encontrado en password')
        //             return userCheck = user})
        //         .catch(e => console.log(e));

        //     let passOK = bcrypt.compareSync(value, userCheck.user_password);
        //     if(userCheck) {
        //         if (passOK) {
        //             return true
        //         } else{
        //             throw new Error( 'Email y/o contrasena incorrectas')
        //         }
        //     } 
           
        // })
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