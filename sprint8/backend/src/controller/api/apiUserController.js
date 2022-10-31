const db = require("../../database/models");

const userApiController = {
    list: (req,res) => {
        db.User.findAll()
            .then(users => {
                let response = {
                    count: users.length,
                    data: users.map(user => {
                        return {
                            id: user.id,
                            userName: user.user_name,
                            email: user.email,
                            url: `http://localhost:3000/api/users/${user.id}`
                        }
                    })
                };
                return res.json(response)
                 
            })

    },
    detailId: (req,res) => { 
        db.User.findByPk(req.params.id)
            .then(user => {
                let usuario = {
                    id: user.id,
                    userName: user.user_name,
                    email: user.email,
                    imagen: `http://localhost:3000/images/users/${user.avatar_url}`
                }
                res.json(usuario)
            })
    }
};
module.exports = userApiController;