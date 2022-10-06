userLogged = (req,res,next) => {
    res.locals.isLogged = false;
    let userEmail = req.cookies.userEmail;
    let data = req.cookies.dataUser
    let emailFromSession = req.session.userEmail;
    if(emailFromSession == userEmail){
        //A session le doy el valor de cookie data
        req.session.userLogged = data;
    }
    if( req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }next()
    // db.User.findOne({
    //     where: {
    //         email: userEmail
    //     }
    // })
    //     .then(user => {
    //         if(user != null){
    //             delete user.dataValues.user_password;
    //             req.session.userLogged = user.dataValues;
    
    //         } if(req.session.userLogged){
    //             res.locals.isLogged = true;
    //             res.locals.userLogged = req.session.userLogged
    //         }
    //         next()
    //     })
    // console.log(findUser)
    // console.log(emailFromSession)
    // console.log(req.cookies.userEmail)
}
module.exports = userLogged
