const fs = require('fs');
const path = require('path');
const usersController = {
    login: (req,res) => {
        res.render('users/login')
    },
    register: (req,res) => {
        res.render('users/register')
    },
    create: (req,res) => {
        let arrayUser = []
        let newUser = {
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password
        };
        arrayUser.push(newUser)
        let userJson = JSON.stringify(arrayUser,null,' ');
       fs.writeFileSync(path.join(__dirname, '../data/userData.json'), userJson)
       res.redirect('/')
    }
}

module.exports = usersController