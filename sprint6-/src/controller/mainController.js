const db = require('../database/models')
const mainController = {
    index: (req,res) => { 
        db.Event.findAll({
            include: [{association: 'Category'}],
            limit: 6,
            order: ['data_time']
        })
            .then(Events => {
                return res.render('index', {Events})
            })
}
}
    

module.exports = mainController;
