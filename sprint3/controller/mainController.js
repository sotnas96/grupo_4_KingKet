
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
    // editProduct: (req , res) => {
    //     res.render('products/editProduct')
    // },
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
    }
};

module.exports = mainController;