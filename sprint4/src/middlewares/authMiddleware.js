function authMiddleware(req,res,next){
    if(req.session.userLogedIn!=undefined){
        next();
    }else{
        res.send('Esta pagina es solo para usuarios');
    }

}

module.exports=authMiddleware;