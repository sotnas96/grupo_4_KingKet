
const mainController = {
    index : (req,res) => { 
        res.render('index')
    },
    login: (req,res) => {
        res.render('users/login')
    },
    register:(req,res) => {
        res.render('users/register')
    },
    productCart:(req,res) => {
        res.render('products/productCart')
    },
    editProducts: (req , res) => {
        res.render('products/editProducts')
    },

    createProducts: (req , res) => {
        res.render('products/createProducts')
    },

    productDetailNBA:(req, res) => {
        res.render('products/productDetailNBA')
    },
    productDetailRoland:(req, res) => {
        res.render('products/productDetailRoland')
    },
    productDetailMundial:(req, res) => {
        res.render('products/productDetailMundial')
    },
    productDetailLibertadores:(req, res) => {
        res.render('products/productDetailLibertadores')
    },

    products:(req, res) => {
        res.render('products/products')
    }
};

module.exports = mainController;