const fs = require('fs');
const path = require('path')

const User = {
    fileName: '../data/userData.json',
    getData: () => {
        let usersJson = fs.readFileSync(path.join(__dirname, User.fileName), 'utf-8');
        let usersData;
        if (usersJson == ''){
            usersData = [];
            return usersData;
        } else{
            usersData = JSON.parse(usersJson);
            return usersData
        }
    },
    findByPk: id =>{
        let userId = User.getData().find(user => user.id == id);
        return userId;
    },
    findByField: (field, value) => {
        let userByField = User.getData().find(user =>  user[field] == value);
        return userByField;
    },
    createUser: (userInfo)=> {
        let allUsers  = User.getData();
        allUsers.push(userInfo);
        let allUsersJson = JSON.stringify(allUsers, null,' ');
        fs.writeFileSync(path.join(__dirname, '../data/userData.json'), allUsersJson);
        return true

    }
};
module.exports = User;
