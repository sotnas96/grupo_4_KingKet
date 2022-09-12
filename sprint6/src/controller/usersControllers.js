
const bcrypt=require('bcryptjs');
const {validationResult}=require('express-validator');
const userModel = require('../models/UserModel');

const usersController = {
    login: (req,res) => {
        res.render('users/login')
        },
    loginProcess:(req,res)=>{
        let errores=validationResult(req);
        if (! errores.isEmpty()){
            return res.render('users/login', {errors: errores.errors,
                                                old: req.body})
        }else{
            let userOK = userModel.findByField('email', req.body.email);
            delete userOK.password;
            req.session.userLogged = userOK;
            if(req.body.recordar){
                res.cookie('userEmail', req.body.email, {maxAge:(1000*60*10)})
            }
            res.redirect('/')        
        }
        // if(errors.isEmpty()){
        //     let userFilePath = path.join(__dirname, '../data/userData.json');
        //     let arrayUser = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
        //     for (let user=0;user<arrayUser.length;user++){
        //         if(arrayUser[user].email==req.body.email){
        //             let passwordOK=bcrypt.compareSync(req.body.Contraseña,arrayUser[user].password)
        //             if(passwordOK){
        //                 var userToLogin=arrayUser[user];
        //                 break;
        //             }
        //         }
        //     }
            
        //     if (userToLogin==undefined){
        //         return res.render('users/login',{errors:[
        //            {msg:'Credenciales inválidas'}
        //         ]})
        //     }

        //     req.session.userLogedIn=userToLogin;
            
        //     res.render('index',{userLogedIn:req.session.userLogedIn})
                      
        // }else{
        //     return res.render('users/login',{errors:errors.errors});
        // }
    },
    register: (req,res) => {
        res.render('users/register')
    },
    create: (req,res) => {
        let errores = validationResult(req);
        let checkEmail = userModel.findByField('email', req.body.email);
        if (! errores.isEmpty()) {
           return res.render('users/register', {   errors: errores.mapped(), 
                                                    old: req.body,
                                                    oldFile: req.file})
        }
        else if(checkEmail){
            return res.render('users/register', { msg: 'El email ingresado ya se encuentra registrado',
                                                    old: req.body})
        }
        else{
            let arrayUser = userModel.getData();
            let newUser = {
                id: (arrayUser.length + 1),
                userName: req.body.userName,
                email: req.body.email,
                avatar: req.file.filename,
                password: bcrypt.hashSync(req.body.password, 10)
            };
            userModel.createUser(newUser);
            return res.redirect('/users/login')
        }
    },
    profile: (req,res) => {
        res.render('users/profile')
    },
    logout: (req,res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/')
    }
}
module.exports = usersController