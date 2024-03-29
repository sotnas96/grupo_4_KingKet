const db = require("../../database/models");

const userApiController = {
    list: (req,res) => {
        db.User.findAll({include: [{association: 'Profile'}]})
            .then(users => {
                let response = {
                    count: users.length,
                    data: users.map(user => {
                        return {
                            id: user.id,
                            userName: user.user_name,
                            email: user.email,
                            profile: user.Profile.user_profile,
                            image: `http://localhost:3000/images/users/${user.avatar_url}`,
                            url: `http://localhost:3000/api/users/${user.id}`
                        }
                    })
                };
                return res.json(response)
                 
            })

    },
    detailId: (req,res) => { 
        db.User.findByPk(req.params.id,{include: [{association: 'Profile'}]})
            .then(user => {
                let usuario = {
                    id: user.id,
                    userName: user.user_name,
                    email: user.email,
                    profile: user.Profile.user_profile,
                    imagen: `http://localhost:3000/images/users/${user.avatar_url}`
                }
                res.json(usuario)
            })
    }
};
module.exports = userApiController;