const db = require("../../database/models");

const productApiController = {

    list: (req,res) => {
        let category= db.Category.findAll({include: [{association: 'Event'}]})
                        .then(cat => cat);
        let products = db.Event.findAll({include: [{association: 'Category'}]})
                        .then(events => events);
        Promise.all([category,products])
        .then(([category,products]) => {
            let structure ={
                meta:{
                    status: 200,
                    count: products.length,
                    countByCat: category.map(categoryElement => {
                        return {
                            category: categoryElement.category,
                            count: categoryElement.Event.length
                        }
                    })
                    },
                data: products.map(events => {
                            return {
                                id: events.id,
                                organizer: events.organizer,
                                competence: events.competence,
                                oponents: events.oponents,
                                categoira: events.Category.category,
                                location: events.location,
                                description: events.game_description,
                                time: events.data_time,
                                price: events.price,
                                url: `http://localhost:3000/api/products/${events.id}`,
                                
                            }
                        })
                    
            };
            return res.json(structure)
        })
        
    },
        
    detailId: (req,res) => {
        db.Event.findByPk(req.params.id,{include: [{association: 'Category'}]} )
            .then(events => {
                let event = {
                    id: events.id,
                    organizer: events.organizer,
                    competence: events.competence,
                    oponents: events.oponents,
                    categoira: events.Category.category,
                    location: events.location,
                    description: events.game_description,
                    time: events.data_time,
                    price: events.price,
                    url: `http://localhost:3000/images/uploads/${events.image}`,

                    }
                return res.json(event)
            })

    },
};
module.exports = productApiController;
