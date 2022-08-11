const fs = require('fs');
const path = require('path');
const usersController = {
    getData: () => {

    },
    login: (req,res) => {
        res.render('users/login')
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
    }
}

module.exports = usersController