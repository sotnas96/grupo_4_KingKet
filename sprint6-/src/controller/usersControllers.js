const db = require('../database/models')
const bcrypt=require('bcryptjs');
const {validationResult}=require('express-validator');
const fs = require('fs');
const path = require('path')

const usersController = {
    login: (req,res) => {
        res.render('users/login')
        },
    loginProcess:(req,res)=>{
        let errores=validationResult(req);
        if (! errores.isEmpty()){
            console.log(errores)
            return res.render('users/login', {errors: errores.errors,
                                                old: req.body})
            
        }else{
            db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(user => {
                if(user!= null){
                    let passOk = bcrypt.compareSync(req.body.password, user.dataValues.user_password);
                    if(passOk){
                        delete user.dataValues.user_password;
                        req.session.userLogged = user.dataValues;
                        if(req.body.recordar){
                            res.cookie('userEmail', req.body.email, {maxAge:(1000*60*10)})
                            return res.redirect('/')
                        }
                        return res.redirect('/')

                    } else {
                        return res.render('users/login', {
                                                            msg: 'email y/o contrasena incorrecta',
                                                            old: req.body
                                                        })
                    }
                }else{
                    return res.render('users/login', {
                                                        msg: 'revise su email',
                                                        old: req.body
                                                    })

                }
            })
            }
    },
    register: (req,res) => {
        res.render('users/register')
    },
    create: (req,res) => {
        let errores = validationResult(req); 
        let userAvatarPath = req.file.filename;
        if (! errores.isEmpty()) {
             fs.unlink(path.join(__dirname,`../../public/images/users/${userAvatarPath}`),
                 (err =>  err ? console.log(err) : console.log(`archivo ${userAvatarPath} borrado`))
                 );
            return res.render('users/register', {   errors: errores.mapped(), 
                                                     old: req.body,
                                                     oldFile: req.file})
         };
        let userCheck;

        db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user =>  {
        
            if(user != null){
                fs.unlink(path.join(__dirname,`../../public/images/users/${userAvatarPath}`),
                 (err =>  err ? console.log(err) : console.log(`archivo ${userAvatarPath} borrado`))
                 );
                return res.render('users/register', { msg: 'El email ingresado ya se encuentra registrado',
                                                    old: req.body})
            } else{
                db.User.create({
                    user_name: req.body.userName,
                    email: req.body.email,
                    user_password: bcrypt.hashSync(req.body.password, 10),
                    avatar_url: req.file.filename
    
                })
                .then(() => res.redirect('/users/login'))
            }
        })

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