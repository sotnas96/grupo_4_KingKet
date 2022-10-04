const db = require('../database/models')
const productsController = {
    productList: (req,res) => {
        db.Event.findAll({
            include: [{association: 'Category'}]
        })
            .then(Events => {
                return res.render('products/products', {Events})
            })
    },
    productDetail: (req,res) => {
        db.Event.findByPk(req.params.id, {
            include: [{association: 'Category'}]
        })
            .then(event => {
                return res.render('products/detailProduct',{event})
            })
    },
    carrito: (req,res) => {
        res.render('products/productCart')
    },
    editarView: (req,res) => {
        db.Event.findByPk(req.params.id)
        .then(event =>{ 
            res.render('products/editProducts', {event})
        })
    },
    createView: (req,res) => {
        res.render('products/createProducts')
    },
    createDataBase: (req,res) => {
        db.Event.create({
            organizer: req.body.organizador,
            competence: req.body.competencia,
            oponents: req.body.oponentes,
            location: req.body.location,
            category_id: req.body.deporte,
            data_time: req.body.date + ' ' + req.body.datetime,
            price: req.body.precio,
            capacity: req.body.capacity,
            image: req.file.filename,
            game_description: req.body.descripcion
        })
        .then(()=>res.redirect('/'))
        .catch(e=> res.send(e))
    },
    update:(req,res) => {
        db.Event.update({
            organizer: req.body.organizador,
            competence: req.body.competencia,
            oponents: req.body.oponentes,
            location: req.body.location,
            category_id: req.body.deporte,
            data_time: req.body.date + ' ' + req.body.datetime,
            price: req.body.precio,
            capacity: req.body.capacity,
            game_description: req.body.descripcion
        },
        {
            where:
            {
                id: req.params.id
            }
        })
        .then(() => {
            console.log('Producto editado')
            res.redirect('/')
            })
        .catch(e => res.send(e));

    },
    destroy: (req,res) => {
        db.Event.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(()=> res.redirect('/'))
        .catch(e => res.send(e))
    }
}

module.exports = productsController