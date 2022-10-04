const userModel = require('../models/UserModel')

userLogged = (req,res,next) => {
    res.locals.isLogged = false;
    let userEmail = req.cookies.userEmail;
    let findUser = userModel.findByField('email', userEmail);
    if(findUser){
        req.session.userLogged = findUser;
    }
    if( req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }next()
}
module.exports = userLogged