const fs = require('fs');
const path = require('path');
const bcrypt=require('bcryptjs');
const {validationResult}=require('express-validator');

const usersController = {
    getData: () => {

    },
    login: (req,res) => {
        res.render('users/login')
        },
    loginProcess:(req,res)=>{
        let errors=validationResult(req);
        if(errors.isEmpty()){
            let userFilePath = path.join(__dirname, '../data/userData.json');
            let arrayUser = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
            for (let user=0;user<arrayUser.length;user++){
                if(arrayUser[user].email==req.body.email){
                    let passwordOK=bcrypt.compareSync(req.body.Contraseña,arrayUser[user].password)
                    if(passwordOK){
                        var userToLogin=arrayUser[user];
                        break;
                    }
                }
            }
            
            if (userToLogin==undefined){
                return res.render('users/login',{errors:[
                   {msg:'Credenciales inválidas'}
                ]})
            }

            req.session.userLogedIn=userToLogin;
            
            res.render('index',{userLogedIn:req.session.userLogedIn})
                      
        }else{
            return res.render('users/login',{errors:errors.errors});
        }
    },
    register: (req,res) => {
        res.render('users/register')
    },
    create: (req,res) => {
        let arrayUser = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/userData.json')))
        let newUser = {
            id: (arrayUser.length + 1),
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password
        };
        arrayUser.push(newUser)
        let userJson = JSON.stringify(arrayUser,null,' ');
       fs.writeFileSync(path.join(__dirname, '../data/userData.json'), userJson)
       res.redirect('/users/login')
        let errors=validationResult(req);
        if (errors.isEmpty()){
            let userFilePath = path.join(__dirname, '../data/userData.json');
            let arrayUser = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
            let newUser = {
                userName: req.body.userName,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password,10)
            };
            arrayUser.push(newUser)
            let userJson = JSON.stringify(arrayUser,null,' ');
           fs.writeFileSync(path.join(__dirname, '../data/userData.json'), userJson)
           res.redirect('/')
        }else{
            res.render('users/register',{errors:errors.array()}); 
        }

    }
}

module.exports = usersController