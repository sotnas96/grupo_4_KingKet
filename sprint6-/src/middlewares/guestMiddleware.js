function guestMiddleware(req,res,next){
    if(req.session.userLogged){
        res.redirect('/')
    }
    next();
    // if(req.session.userLogedIn==undefined){
    //     next();
    // }else{
    //     res.send('Esta pagina es solo para invitados');
    // }
}

module.exports=guestMiddleware;

